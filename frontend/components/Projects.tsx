"use client";
import React from "react";

import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";
import Projeto from "@/interfaces/Projeto";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Projects = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
      data.data.forEach((project: Projeto) => {
        console.log("Medium image URL: " + project.image.formats.medium.url);
      });
    } catch (error) {
      console.log(`Erro ao buscar projetos. Erro: ${error}`);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <div className=" px-8  ">
        <Swiper
          modules={[Scrollbar, Navigation, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          loop={true}
          loopAdditionalSlides={projetos.length}
          navigation
          grabCursor={true}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={800}
          simulateTouch={true}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {loading === true ? (
            <div className="w-full flex flex-row justify-center items-center">
              <span className="loading loading-ring text-blue-700 loading-lg"></span>{" "}
            </div>
          ) : (
            projetos.map((project: Projeto, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  title={project.title}
                  excerpt={project.excerpt}
                  stack={project.stacks.join(", ")}
                  images={project.image?.formats?.medium?.url || "/default-image.png"}
                  slug={project.slug}
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>

      <div
        role="button"
        className="w-[63vw] flex flex-row   justify-end items-end mt-6 text-right    text-slate-600 "
      >
        <p className="w-fit  hover:bg-slate-200  border-slate-500 border-b-[1.5px] pb-2 ">
          + Projetos
        </p>
      </div>
    </div>
  );
};

export default Projects;
