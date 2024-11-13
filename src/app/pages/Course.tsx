"use client";
import agileAbout from "@/assets/agile-change-about.png";

import CourseCard from "@/components/CourseCard";
import { ScrollFadeIn, ScrollFromRight } from "@/components/ScrollComponent";
import { BookOpen } from "lucide-react";
import { StaticImageData } from "next/image";
import { Carousel } from "primereact/carousel";

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: StaticImageData;
}

const MOCK_COURSES: Course[] = [
  {
    id: "Projetos Ágeis",
    title: "Gerenciamento de Projetos Ágeis com Scrum",
    description:
      "Aprenda a gerenciar projetos de forma ágil e eficiente com o framework Scrum.",
    duration: "40 horas",
    level: "Pré-Inscrição",
    image: agileAbout,
  },
  {
    id: "OKRs",
    title: "Planejamento Estratégico com OKRs",
    description:
      "Aprenda a definir e implementar objetivos e resultados-chave para alavancar a performance da sua equipe.",
    duration: "35 horas",
    level: "Pré-Inscrição",
    image: agileAbout,
  },
  {
    id: "Gerenciamento de Projetos",
    title: "Gerenciamento de Projetos",
    description:
      "Aprenda a gerenciar projetos de forma eficiente e eficaz, garantindo a entrega de valor para o cliente.",
    duration: "25 horas",
    level: "Pré-Inscrição",
    image: agileAbout,
  },
  {
    id: "Gestão de Riscos em Projetos",
    title: "Gestão de Riscos em Projetos",
    description:
      "Domine o Scaled Agile Framework e aprenda a aplicar práticas ágeis em grande escala.",
    duration: "45 horas",
    level: "Pré-Inscrição",
    image: agileAbout,
  },
  {
    id: "Power BI",
    title: "Power BI  Teoria e Prática",
    description:
      "Domine Power BI e aprenda a criar dashboards e relatórios interativos para tomada de decisão.",
    duration: "45 horas",
    level: "Pré-Inscrição",
    image: agileAbout,
  },
  {
    id: "Introdução e Implementação de Inteligência Artificial",
    title: "Introdução e Implementação de Inteligência Artificial",
    description:
      "Aprenda os conceitos fundamentais de IA e como implementar soluções práticas.",
    duration: "45 horas",
    level: "Pré-Inscrição",
    image: agileAbout,
  },
];

export default function Course() {
  // Template para renderizar cada curso como um card
  const courseTemplate = (course: Course) => {
    return (
      <div className="p-2">
        {" "}
        {/* padding horizontal */}
        <CourseCard key={course.id} course={course} />
      </div>
    );
  };

  return (
    <section id="cursos" className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-6">
              <BookOpen className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              NOSSOS CURSOS
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforme sua carreira com nossos cursos especializados em
              metodologias ágeis
            </p>
          </div>
        </ScrollFadeIn>
        {/* Carrossel do PrimeReact */}
        <ScrollFromRight>
          <div>
          <Carousel
            value={MOCK_COURSES} // dados dos cursos
            itemTemplate={courseTemplate} // função de template para renderizar cada card
            numVisible={3} // número de cards visíveis ao mesmo tempo (ajuste conforme necessário)
            numScroll={1} // número de cards que serão rolados por vez
            circular // faz o carrossel circular
            autoplayInterval={3000} // define a rotação automática (em milissegundos)
            responsiveOptions={[
              {
                breakpoint: "1024px",
                numVisible: 3,
                numScroll: 1,
              },
              {
                breakpoint: "768px",
                numVisible: 2,
                numScroll: 1,
              },
              {
                breakpoint: "560px",
                numVisible: 1,
                numScroll: 1,
              },
            ]}
          />
          </div>
        </ScrollFromRight>
      </div>
    </section>
  );
}
