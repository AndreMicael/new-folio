'use client';
import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";
import NavBar from "@/components/NavBar";
import Projeto1 from "@/assets/image/projeto1.png";
import { useState, useEffect } from "react";
import Projeto from "@/interfaces/Projeto";

export default function Home() {
  // const projects = [
  //   {
  //     title: "Finans",
  //     subtitle: "Controle Financeiro",
  //     stack: "HTML,CSS,Tailwind,MySql e PHP",
  //     images: Projeto1,
  //     slug: "finans",
  //   },
  //   {
  //     title: "Ion Imóveis",
  //     subtitle: "Landing Page Imobiliária",
  //     stack: "HTML,CSS e JavaScript",
  //     images: Projeto1,
  //     slug: "ion-imoveis",
  //   },
  // ];


const [projetos, setProjetos] = useState<Projeto[]>([])

const getProjects = async () => {
  try{
    const response = await fetch ("/api/projetos", {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Resposta não está ok")
    }

    const data = await response.json();
    setProjetos(data.data);
   
    data.data.forEach((project: Projeto) => {
      console.log("Medium image URL: " + project.image.formats.medium.url);
    });

  } catch (error) {
    console.log(`Erro ao buscar projetos. Erro: ${error}`);
  }
}

useEffect(()=>{
  getProjects();
},[])


  return (
    <main className="min-h-screen bg-[#F3F3F3] p-4 sm:p-6 md:p-8">
      {/* Top Navigation Icons */}
      <NavBar />
      {/* Profile Card */}
      <ProfileCard />

      {/* Project Card */}
      {projetos.slice(0,2).map((project: Projeto, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          excerpt={project.excerpt}
          stack={project.stacks.join(', ')}
          images={project.image.formats.medium.url}
          slug={project.slug}
        />
      ))}
      <div role="button" className="bg-slate-200 rounded-xl py-3 text-center">
        Ver mais projetos
      </div>
    </main>
  );
}
