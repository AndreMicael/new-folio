import React from "react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const TechStack = () => {
  const logo = [
    {
      title: "HTML5",
      ulr: "https://res.cloudinary.com/dgtdspdvb/image/upload/c_thumb,w_200,g_face/v1740496205/html-5_ci0tou.png",
    },
    {
      title: "CSS3",
      ulr: "https://res.cloudinary.com/dgtdspdvb/image/upload/c_thumb,w_200,g_face/v1740496205/css-3_ytook1.png",
    },
    {
      title: "Javascript",
      ulr: "https://res.cloudinary.com/dgtdspdvb/image/upload/c_thumb,w_200,g_face/v1740496205/js_wsgjbz.png",
    },
    {
      title: "Next",
      ulr: "https://cdn.brandfetch.io/nextjs.org/w/100/h/100?c=1idBv93RD2tnTfulfsl",
    },
    {
      title: "React",
      ulr: "https://res.cloudinary.com/dgtdspdvb/image/upload/c_thumb,w_200,g_face/v1740496206/react_ozsvxe.png",
    },
    {
      title: "Tailwind",
      ulr: "https://cdn.brandfetch.io/tailwindcss.com/w/100/h/100?c=1idBv93RD2tnTfulfsl",
    },
    {
      title: "Github",
      ulr: "https://res.cloudinary.com/dgtdspdvb/image/upload/c_thumb,w_200,g_face/v1740497140/github_mam8bh.png",
    },
    {
      title: "Figma",
      ulr: "https://res.cloudinary.com/dgtdspdvb/image/upload/c_thumb,w_200,g_face/v1740496205/figma_abmbua.png",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className=" ">
   
      </div>

      <Swiper
        modules={[Scrollbar, Navigation, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 60,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 70,
          },
        }}
        loop={true}
        navigation
        grabCursor={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        simulateTouch={true}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {logo.map((item, index: number) => (
          <SwiperSlide key={index}>
            <div className="border-2 flex justify-center items-center rounded-full w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px] lg:w-[60px] lg:h-[60px]">
              <img
                className="object-cover rounded-full w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px] lg:w-[60px] lg:h-[60px]"
                alt={item.title}
                src={item.ulr}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        role="button"
        className="w-full  flex flex-row justify-end items-end mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-right p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-slate-600"
      >
        <p className="w-fit hover:bg-slate-200 border-slate-500 border-b-[1.5px] pb-2 ">
          + Detalhes
        </p>
      </div>
    </div>
  );
};

export default TechStack;
