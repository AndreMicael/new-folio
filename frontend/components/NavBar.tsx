import React from "react";
import { Button } from "./ui/button";
import { Code2, Moon, User, UserPlus, Wrench } from "lucide-react";
import "./Components.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar max-w-4xl mx-auto   mb-3 flex flex-row justify-between md:justify-center items-center  ">
      <div className="flex flex-row   w-full justify-between md:justify-center md:gap-4 items-center">
        <Link href={"/"}>
        <Button
          variant="navegacao"
          size="icon"
          className="rounded-xl navegacao sm:h-10 sm:w-10"
        >
          <User className="h-6 w-6 " />
        </Button>
        </Link>

       <Link href={"/projetos"}>
        <Button
          variant="navegacao"
          size="icon"
          className="rounded-xl sm:h-10 sm:w-10"
        >
          <Code2 className="h-6 w-6" />
        </Button>

        </Link>
        <Button
          variant="navegacao"
          size="icon"
          className="rounded-xl sm:h-10 sm:w-10"
        >
          <Wrench className="h-6 w-6" />
        </Button>
        <Button
          variant="controle"
          size="icon"
          className="rounded-xl sm:h-10 sm:w-10"
        >
          <Moon className="h-6 w-6 " />
        </Button>
        <Button
          variant="controle"
          size="icon"
          className="rounded-xl sm:h-10 sm:w-10"
        >
          <UserPlus className="h-6 w-6 " />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
