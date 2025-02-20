import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";




interface ProjectCardProps {
  title: string;
  excerpt: string;
  stack: string;
  images: string;
  slug: string;
}

const ProjectCard = (props: ProjectCardProps) => {

  console.log("Projeto Card: " + process.env.NEXT_PUBLIC_STRAPI_URL);

  return (
    <Link href={`/projetos/${props.slug}`}>
      <Card className="max-w-4xl rounded-2xl mx-auto mb-6">
        <CardContent className="p-0">
          <div className="w-full h-full">
            <div className="h-[50vw] overflow-clip rounded-2xl shadow-lg">
              <Image
                className="object-cover object-top w-full"
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${props.images}`}
                alt={props.title}
                layout="responsive"
                width={700}
                height={475}
              />
            </div>
            <div className="p-4">
              <h1>{props.title}</h1>
              <h3>{props.excerpt}</h3>
              <p>{props.stack}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
