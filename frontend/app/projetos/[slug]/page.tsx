
import {projetos} from "@/app/projetos/[slug]/projects"

export function generateStaticParams() {
  return [
    { slug: projetos.slug},
   
  ]
}
 

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; }>
}) {
  const { slug } = await params
  
  return (
    <div>
      <p>{slug}</p>
    </div>
  )
}