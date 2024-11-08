"use client";
import cni from "@/assets/empresas/cni.png";
import b3 from "@/assets/empresas/b3.png";
import camed from "@/assets/empresas/camed.png";
import edsonQueiroz from "@/assets/empresas/edson-queiroz.png";
import fiec from "@/assets/empresas/fiec.png";
import hapvida from "@/assets/empresas/hapvida.png";
import iel from "@/assets/empresas/iel.png";
import marquise from "@/assets/empresas/marquise.png";
import neoway from "@/assets/empresas/neoway.png";
import perboyre from "@/assets/empresas/perboyre.png";
import raizen from "@/assets/empresas/raizen.png";
import solar from "@/assets/empresas/solar.png";
import uni7 from "@/assets/empresas/uni7.svg";

import Image from "next/image";

export default function ClientsCarousel() {
  const clients = [
    { src: cni, alt: "Logo da Agile Change" },
    { src: b3, alt: "Logo da Agile Change" },
    { src: camed, alt: "Logo da Agile Change" },
    { src: edsonQueiroz, alt: "Logo da Agile Change" },
    { src: fiec, alt: "Logo da Agile Change" },
    { src: hapvida, alt: "Logo da Agile Change" },
    { src: iel, alt: "Logo da Agile Change" },
    { src: marquise, alt: "Logo da Agile Change" },
    { src: neoway, alt: "Logo da Agile Change" },
    { src: perboyre, alt: "Logo da Agile Change" },
    { src: raizen, alt: "Logo da Agile Change" },
    { src: solar, alt: "Logo da Agile Change" },
    { src: uni7, alt: "Logo da Agile Change" },
  ];

  return (
    <div className="overflow-hidden py-8">
      <div className="flex items-center justify-center animate-scroll-left scroll-left-mobile md:space-x-8">
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div key={index} className="relative md:h-auto w-auto md:w-full ">
            <Image
              src={client.src}
              alt={client.alt}
              className="w-full h-full md:min-w-28 min-w-40"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
