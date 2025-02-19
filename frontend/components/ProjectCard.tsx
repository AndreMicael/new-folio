import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  stack: string;
  images: StaticImageData;
  slug: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link href={`/projetos/${props.slug}`}>
      <Card className="max-w-4xl rounded-2xl mx-auto mb-6">
        <CardContent className="p-0">
          <div className="w-full h-full">
            <div className="h-[50vw] overflow-clip rounded-2xl shadow-lg">
              <Image
                className="object-cover object-top w-full"
                src={props.images}
                alt={props.title}
                layout="responsive"
                width={700}
                height={475}
              />
            </div>
            <div className="p-4">
              <h1>{props.title}</h1>
              <h3>{props.subtitle}</h3>
              <p>{props.stack}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
