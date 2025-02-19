import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";
import NavBar from "@/components/NavBar";
import Projeto1 from "@/assets/image/projeto1.png";

export default function Home() {
  const projects = [
    {
      title: "Finans",
      subtitle: "Controle Financeiro",
      stack: "HTML,CSS,Tailwind,MySql e PHP",
      images: Projeto1,
      slug: "finans",
    },
    {
      title: "Ion Imóveis",
      subtitle: "Landing Page Imobiliária",
      stack: "HTML,CSS e JavaScript",
      images: Projeto1,
      slug: "ion-imoveis",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F3F3] p-4 sm:p-6 md:p-8">
      {/* Top Navigation Icons */}
      <NavBar />
      {/* Profile Card */}
      <ProfileCard />

      {/* Project Card */}
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          stack={project.stack}
          images={project.images}
          slug={project.slug}
        />
      ))}
      <div role="button" className="bg-slate-200 rounded-xl py-3 text-center">
        Ver mais projetos
      </div>
    </main>
  );
}
