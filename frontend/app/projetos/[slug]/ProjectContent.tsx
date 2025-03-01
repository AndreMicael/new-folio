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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const fetchedProjects = await fetchProjetos();
      setProjects(fetchedProjects);
      setLoading(false);
    };

    loadProjects();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-[#f5f5f7]">
      {loading === true ? (
        <div className="w-full flex h-screen flex-row justify-center items-center">
          <span className="loading loading-ring text-blue-700 loading-lg mr-2"></span>{" "}
          <p className="text-gray-600">Carregando projeto</p>
        </div>
      ) : (
        projects
          .filter((project) => project.slug === slug)
          .map((project) => (
            <div
              key={project.id}
              className=" bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <img
                  src={project.image.formats.medium.url}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>

              <h2 className="text-2xl mb-2 font-semibold text-[#1d1d1f] tracking-tight text-left">
                {project.title}
              </h2>

              <div className="prose prose-lg max-w-none prose-headings:font-semibold text-sm text-justify prose-headings:text-[#1d1d1f] prose-p:text-[#86868b] prose-p:leading-relaxed">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({
                      node,
                      inline,
                      className,
                      children,
                      ...props
                    }: {
                      node?: any;
                      inline?: boolean;
                      className?: string;
                      children?: React.ReactNode;
                    }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={materialDark}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-xl !bg-[#1d1d1f] !my-8"
                          {...props}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code
                          className="bg-[#f5f5f7] text-sm px-2 py-1 rounded-md order-2 text-[#1d1d1f]"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {project.description}
                </ReactMarkdown>
              </div>

              <div className="pt-8 border-t border-[#86868b]/10">
                <h3 className="text-lg font-semibold mb-4 text-[#1d1d1f]">
                  Tecnologias
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {project.stacks.map((stack) => (
                    <li
                      key={stack}
                      className="px-4 py-2 bg-[#f5f5f7] rounded-full text-sm font-medium text-[#1d1d1f] 
                             transition-all duration-300 hover:bg-[#e5e5e7] hover:shadow-sm"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center pt-8">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-[#0071e3] text-white rounded-full 
                           font-medium transition-all duration-300 hover:bg-[#0077ED] 
                           hover:shadow-lg hover:shadow-blue-200/50"
                >
                  Demo →
                </a>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default ProjectContent;
