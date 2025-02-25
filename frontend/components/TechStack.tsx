import React from 'react'
import { Button } from './ui/button'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { title } from 'node:process';

const TechStack = () => {

    const logo = [

        {title: "Next" , ulr: "https://cdn.brandfetch.io/nextjs.org/w/100/h/100?c=1idBv93RD2tnTfulfsl"},
        {title: "Tailwind", ulr: "https://cdn.brandfetch.io/tailwindcss.com/w/100/h/100?c=1idBv93RD2tnTfulfsl"},
        {title: "Github", ulr:"https://cdn.brandfetch.io/github.com/w/100/h/100?c=1idBv93RD2tnTfulfsl"}

    ]

  return (
    <div>
        
        <Button className='mb-4' variant="title">Tech Stack</Button>

        <Swiper
          modules={[Scrollbar,Navigation, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          grabCursor={true}
       
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          simulateTouch={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
            
       

                {
                    logo.map(item => (
                       <div>
                             <SwiperSlide key={item.title} >
                         <Image className='rounded-full shadow-md' height={50} width={50} alt={item.title} src={item.ulr}/>
                         </SwiperSlide>
                       </div>
                           
                      
                    ))
                }

        

            </Swiper>

    </div>
  )
}

export default TechStack