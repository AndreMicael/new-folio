import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar } from "./ui/avatar";
import { Linkedin, File } from "lucide-react";
import { Github } from "lucide-react";
import "./Components.css";
import avatar from "@/assets/image/avatar.jpg";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <div>
      <Card className="max-w-4xl mx-auto mb-6 rounded-3xl  ">
        <CardContent className="flex  flex-row justify-center items-center space-y-4 p-4 sm:p-6 md:p-8">
          <div className="relative">
            <Avatar className="h-[22vw] w-[22vw] sm:h-24 sm:w-24">
              <Image
                src={avatar}
                alt="Profile"
                className="object-cover"
                quality={100}
              />
            </Avatar>
          </div>

          <div className="text-left pl-4 sm:pl-6">
            <Badge className="bg-slate-200 text-slate-600 font-normal hover:text-white text-xs sm:text-sm">
              <div className="circle-green"></div>
              Disponível
            </Badge>
            <h1 className="text-4xl sm:text-2xl font-semibold mb-2">
              André S.
            </h1>
            <p className="text-gray-600  mb-4 text-sm sm:text-base">
              Senior Developer | Next.js | React | TypeScript
            </p>
          </div>
        </CardContent>
        <CardContent className="gap-8 scale-90 w-full flex flex-col">
          <div className="flex   justify-center items-center  gap-2 sm:gap-3">
            <Button 
            variant="profile"
            className="text-sm sm:text-base h-9 sm:h-10
            outline-2 outline outline-sky-600 text-sky-600">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button
              variant="profile"
              className="text-sm sm:text-base h-9 sm:h-10
              outline-2 outline outline-violet-700 text-violet-700
              "
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="profile"
              className="text-sm sm:text-base h-9 sm:h-10
              outline-2 outline outline-gray-400 text-gray-600" 
            >
              <File className="mr-2 h-4 w-4" />
              
              Currículo
            </Button>
          </div>

          <p className="text-gray-500 text-center text-sm  w-full font-normal max-w-2xl sm:text-base sm:px-4">
            Estudante de Sistemas de Informação na <strong> Universidade Federal de Mato
            Grosso</strong>, atualmente fazendo Estágio em <strong>Desenvolvimento Web</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-600 text-sm sm:text-base">
            <span>
              contato@andremicael.com
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67157 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67157 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
