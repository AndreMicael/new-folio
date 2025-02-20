
import { fetchProjetos } from "@/app/projetos/[slug]/fetchProjetos"; 
import type Projeto from "@/interfaces/Projeto";
import ProjectContent from "./ProjectContent";


export async function generateStaticParams() {
  const projetos = await fetchProjetos(); 



  const slugs = projetos.map((item: Projeto) => ({
    slug: item.slug,
  }));

  return slugs; 
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; }>
}) {
  const { slug } = await params;
  
  return (
    <div>
      
      <ProjectContent slug={slug}/>
    </div>
  );
}