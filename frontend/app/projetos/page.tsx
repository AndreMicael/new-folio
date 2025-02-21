
'use client';
import { fetchProjetos } from "@/app/projetos/[slug]/fetchProjetos"; 
import ProjectCard from "@/components/ProjectCard";
import type Projeto from "@/interfaces/Projeto";
import { useState,useEffect } from "react";


const Projetos = () => {

  const [projetos, setProjetos] = useState<Projeto[]>([])
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    const data = await fetchProjetos();
    setProjetos(data);
    setLoading(false);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return <div className="h-screen p-5 ">Últimos Projetos
  
  {projetos.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.title}
      excerpt={project.excerpt}
      stack={project.stacks.join(', ')}
      images={project.image.formats.medium.url}
      slug={project.slug}
    />
  ))}
  </div>;
};

export default Projetos;
