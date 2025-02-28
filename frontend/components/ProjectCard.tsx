import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

import { Code2, ArrowUpRight, Circle, Maximize2 } from "lucide-react";

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
      <Card className="group relative w-full max-w-md border-[1.5px] rounded-2xl mx-auto mb-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full h-full rounded-t-2xl">
            <div className="bg-gradient-to-b from-slate-300 to-slate-200 w-full h-[35vh] relative px-4 pt-4">
              <div className="relative h-full shadow-md overflow-hidden rounded-t-lg">
                <Image
                  className="z-[1000] object-cover"
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${images}`}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
              </div>
            </div>
            <div className="p-4 space-y-2 sm:p-4 sm:space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-600 hover:opacity-80 transition-colors duration-300">
                  <Circle className="inline mr-2 text-slate-500" fill="currentColor" size={10} />{title}
                </h2>
                <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              
              <div className="flex items-center space-x-2 pt-1">
                <Code2 className="w-4 h-4 text-gray-500" />
                <p className="text-xs text-gray-500 font-medium">
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