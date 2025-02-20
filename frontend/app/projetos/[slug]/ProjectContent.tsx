'use client';
import React, { useEffect, useState } from "react";
import { fetchProjetos } from "@/app/projetos/[slug]/fetchProjetos"; 
import type Projeto from "@/interfaces/Projeto";

interface Props {
    slug: string;
}

const ProjectContent: React.FC<Props> = ({ slug }) => {

  const [projects, setProjects] = useState<Projeto[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const fetchedProjects = await fetchProjetos(); 
      setProjects(fetchedProjects); 
    };

    loadProjects();
  }, []);

  return (
    <div>
     {projects.filter(project => project.slug === slug)
  .map(project => (
    <div key={project.id}>
        <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.image.formats.medium.url}`} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul>
        {project.stacks.map(stack => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>
    </div>
))}

    </div>
  );
};

export default ProjectContent;