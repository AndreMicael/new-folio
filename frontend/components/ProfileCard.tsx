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
    <div className="w-full  min-h-screen flex items-center justify-center  ">
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex flex-col justify-center gap-4 items-center py-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <Avatar className="h-full w-full">
              <Image
                src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover rounded-full"
                quality={100}
              />
            </Avatar>
          </div>
          <div className="text-center">
            <h1 className="text-2xl sm:text-2xl lg:text-2xl font-semibold text-slate-800 mb-1">
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
            <Button className="mt-4" variant="underline">Download CV <Download className="ml-2" size={18} /></Button>
            </div>
          </div>
        </CardContent>
        
        <CardContent className="gap-4 justify-center text-slate-500 items-center w-full border-t-[0.5px] pt-4 flex flex-col px-4">
            <div className="flex gap-2">
              <Copy role="button" className="hover:bg-slate-200 hover:rounded-sm" size={18} /> contato@andremicael.com
            </div>

            <div className="flex gap-8">
              <div className="flex items-center gap-1"><Linkedin size={18} />Linkedin</div>
              <div className="flex items-center gap-1"><Github size={18} />Github</div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
