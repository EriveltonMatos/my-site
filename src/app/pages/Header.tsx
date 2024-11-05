"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import agileChange from "@/assets/agile-change-logo.png";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import SliderBtns from "@/components/SliderBtns";

const slidesData = [
  {
    id: 1,
    image: agileChange,
    alt: "Logo da clínica",
    url: "/events",
  },
  {
    id: 2,
    image: agileChange,
    alt: "Logo da clínica",
    url: "/events",
  },
  {
    id: 3,
    image: agileChange,
    alt: "Logo da clínica",
    url: "/events",
  },
];

export default function Header() {
  return (
    <>
    <NavBar />
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      speed={2500}
      effect="fade"
      modules={[Autoplay]}
      className="w-full mt-16"
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Link 
            href={slide.url}
            className="block w-full h-auto relative cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // Impede que o Swiper capture o evento
            }}
          >
            <div className="w-full md:h-[48rem] h-[13rem] flex justify-center items-center md:mt-16 mt-16"> {/* Define uma altura fixa */}
              <img
                src={slide.image.src}
                alt={slide.alt}
                className="w-full h-full object-center object-cover" // Para manter a proporção da imagem
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-start pl-4 sm:pl-8 md:pl-20 lg:pl-72 justify-center tracking-widest">
              <div className="flex justify-center items-center drop-shadow-md"></div>
            </div>
          </Link>
        </SwiperSlide>
        
      ))}
       <SliderBtns
        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between xl:justify-none"
        btnStyles="bg-blue-300 hover:bg-blue-400 text-primary md:text-[44px] md:w-[66px] md:h-[66px] flex justify-center items-center transition-all"
        iconsStyles={""}
      />
    </Swiper>
    </>
  );
}