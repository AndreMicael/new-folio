import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

import { Code2, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  images: string;
  title: string;
  excerpt: string;
  stack: string;
}

const ProjectCard = ({ slug, images, title, excerpt, stack }: ProjectCardProps) => {
  return (
    <Link href={`/projetos/${slug}`}>
      <Card className="group relative max-w-4xl rounded-2xl mx-auto mb-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full h-full">
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-t-2xl">
              <Image
                className="object-cover object-top w-full transition-transform duration-300 group-hover:scale-105"
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${images}`}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {title}
                </h2>
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {excerpt}
              </p>
              
              <div className="flex items-center space-x-2 pt-2">
                <Code2 className="w-5 h-5 text-gray-500" />
                <p className="text-sm text-gray-500 font-medium">
                  {stack.split(/[,\s]+/).map((tech: string) => 
                    tech.toUpperCase()
                  ).join(' • ')}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;