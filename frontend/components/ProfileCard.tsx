import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar } from "./ui/avatar";
import { Linkedin, File, MapPin, Download, Copy } from "lucide-react";
import { Github } from "lucide-react";
import "./Components.css";
import avatar from "@/assets/image/avatar.jpg";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"] });

const ProfileCard = () => {
  return (
    <div className="w-full">
      <Card className="max-w-4xl mx-auto mb-6   ">
        <CardContent className="flex   flex-col justify-center  gap-4 items-center mt-8 sm:p-6 md:p-8">
          <div className="relative ">
            <Avatar className=" sm:h-24 sm:w-24">
              <Image
                src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
                alt="Profile"
                width={120}
                height={120}
                className="object-cover"
                quality={100}
              />
            </Avatar>
          </div>

          <div className="  text-center ">
          
            <h1 className="text-3xl   sm:text-2xl font-semibold text-slate-800 mb-1">
              André S.
            </h1>
            <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-gray-600  text-sm sm:text-base">
              Jr. Developer | Next.js | React | TypeScript
            </p>
            <p className="text-gray-600 flex justify-center items-center gap-1   text-sm  ">
            <MapPin size={15} /> Brasil
            </p>
            <Badge variant="outline" className="  border-[1.5px] border-slate-400 grow text-slate-600 font-normal  text-xs sm:text-sm">
              <div className="circle-green"></div>
              Available for work
            </Badge>
            <Button className="mt-8" variant="underline" >Download CV <Download className="ml-2" size={18} /></Button>
            </div>
          </div>
        </CardContent>
        
        <CardContent className="scale-90 gap-4 justify-center text-slate-500 items-center w-full border-t-[0.5px] pt-2 flex flex-col">

        
        
   
            
            <div className="flex gap-2">
            <Copy role="button" className="hover:bg-slate-200 hover:rounded-sm" size={18} /> contato@andremicael.com
            </div>

            <div className="flex   gap-8">
              <div className="flex items-center gap-1"><Linkedin size={18} />Linkedin</div>
              <div className="flex  items-center gap-1"><Github size={18} />Github</div>
            </div>
     
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
