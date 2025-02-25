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
    <main className="min-h-screen  p-4 sm:p-6 md:p-8">
      {/* Top Navigation Icons */}

      {/* Profile Card */}
      <ProfileCard />
      <div className="flex flex-col gap-8"><AboutMe/>
      <Projects/>
      <Education/>
      <TechStack/>
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
