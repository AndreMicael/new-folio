"use client";
import React, { useEffect, useState } from "react";
import { fetchProjetos } from "@/app/projetos/[slug]/fetchProjetos";
import type Projeto from "@/interfaces/Projeto";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
      {projects
        .filter((project) => project.slug === slug)
        .map((project) => (
          <div key={project.id}>
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.image.formats.medium.url}`}
              alt={project.title}
            />
            <h2>{project.title}</h2>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={materialDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {project.description}
            </ReactMarkdown>
            <ul>
              {project.stacks.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default ProjectContent;
