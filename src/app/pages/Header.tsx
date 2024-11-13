"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import curso from "@/assets/curso.png";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import SliderBtns from "@/components/SliderBtns";
import { ScrollFadeIn } from "@/components/ScrollComponent";

const slidesData = [
  {
    id: 1,
    image: curso,
    alt: "Logo do curso",
    url: "/cursos",
  },
  {
    id: 2,
    image: curso,
    alt: "Logo do curso",
    url: "/cursos",
  },
  {
    id: 3,
    image: curso,
    alt: "Logo do curso",
    url: "/cursos",
  },
];

export default function Header() {
  return (
    <>
      <NavBar />
      <ScrollFadeIn>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={2500}
          effect="fade"
          modules={[Autoplay]}
          className="w-full md:h-screen mt-20 md:mt-0"
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
                <div className="w-full flex justify-center items-center ">
                  {" "}
                  {/* Define uma altura fixa */}
                  <img
                    src={slide.image.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover " // Para manter a proporção da imagem
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
            btnStyles="bg-blue-600 hover:bg-blue-400 text-primary md:text-[44px] md:w-[66px] md:h-[66px] text-[30px] flex justify-center items-center transition-all"
            iconsStyles={""}
          />
        </Swiper>
      </ScrollFadeIn>
    </>
  );
}
