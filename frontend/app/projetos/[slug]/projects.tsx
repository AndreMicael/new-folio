'use client';

import { useState, useEffect } from "react";
import Projeto from "@/interfaces/Projeto";

const [projetos, setProjetos] = useState<Projeto[]>([]);

const getProjects = async () => {
    try {
        const response = await fetch("/api/projetos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Resposta não está ok");
        }

        const data = await response.json();
        setProjetos(data.data);
        console.log("Projetos " + projetos)
         

    } catch (error) {
        console.log(`Erro ao buscar projetos. Erro: ${error}`);
    }
};

useEffect(() => {
    getProjects();
}, []);

export { projetos };
