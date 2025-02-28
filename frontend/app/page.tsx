"use client";
import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";
import NavBar from "@/components/NavBar";
import Projeto1 from "@/assets/image/projeto1.png";
import { useState, useEffect } from "react";
import Projeto from "@/interfaces/Projeto";
import Link from "next/link";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      const response = await fetch("/api/projetos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Resposta não está ok");
      }

      const data = await response.json();
      setProjetos(data.data);
      setLoading(false);
      data.data.forEach((project: Projeto) => {
        console.log("Medium image URL: " + project.image.formats.medium.url);
      });
    } catch (error) {
      console.log(`Erro ao buscar projetos. Erro: ${error}`);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Top Navigation Icons */}

      <div className="lg:flex">
        {/* Profile Card - Fixo à esquerda em telas grandes */}
        <div className="lg:sticky lg:top-0 md:bg-slate-200 lg:h-screen lg:w-1/3  ">
          <ProfileCard />
        </div>

        {/* Conteúdo principal - Rola ao lado em telas grandes */}
        <div className="lg:w-2/3">
          <div className="flex flex-col gap-2">
            <div className="p-4 w-[50vw] mx-auto sm:p-6 md:p-8">
              <div className="w-full">
                <Button className='mb-6' variant="title">Sobre Mim</Button>
              </div>
              <AboutMe/>
            </div>
            <div className=" ">
              <div className="p-4 w-[50vw] mx-auto sm:p-6 md:p-8">
                <Button className='mb-0' variant="title">Projetos</Button>
              </div>
              <Projects/>
            </div>
            <div className=" ">
              <div className="p-4 w-[50vw] mx-auto sm:p-6 md:p-8">
                <Button className='mb-6' variant="title">Educação</Button>
              </div>
              <Education/>
            </div>
            <div className=" ">
              <div className="p-4 w-[50vw] mx-auto sm:p-6 md:p-8">
                <Button className='mb-6' variant="title">Tech Stack</Button>
              </div>
              <TechStack/>
            </div>
          </div>
          <div className=" mb-10">
             
            <Contact/>
          </div>
        </div>
      </div>

      {/* Project Card
      {loading === true ? (
        <div className="w-full flex flex-row justify-center items-center">
          <span className="loading loading-ring text-blue-700 loading-lg"></span>{" "}
        </div>
      ) : (
        projetos.slice(0, 2).map((project: Projeto, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            excerpt={project.excerpt}
            stack={project.stacks.join(", ")}
            // images={
            //   project.image.formats.medium.url ||
            //   "https://via.placeholder.com/300"
            // }
            slug={project.slug}
          />
        ))
      )} */}

      {/* {!loading && (
        <Link href={"/projetos"}>
          <div
            role="button"
            className="bg-slate-200 rounded-xl py-3 text-center"
          >
            Ver mais projetos
          </div>
        </Link>
      )} */}
    </main>
  );
}
