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
  price: number;
}

const MOCK_COURSES: Course[] = [
  {
    id: "scrum-master",
    title: "Formação Scrum Master",
    description:
      "Aprenda a liderar times ágeis e se torne um Scrum Master certificado. Curso completo com práticas e simulados.",
    duration: "40 horas",
    level: "Intermediário",
    image: agileAbout,
    price: 597.0,
  },
  {
    id: "product-owner",
    title: "Product Owner Professional",
    description:
      "Desenvolva habilidades essenciais para gerenciar produtos digitais e maximizar valor para o negócio.",
    duration: "35 horas",
    level: "Avançado",
    image: agileAbout,
    price: 697.0,
  },
  {
    id: "kanban",
    title: "Kanban: Do Básico ao Avançado",
    description:
      "Aprenda a implementar e gerenciar sistemas Kanban para otimizar o fluxo de trabalho da sua equipe.",
    duration: "25 horas",
    level: "Básico",
    image: agileAbout,
    price: 397.0,
  },
  {
    id: "safe",
    title: "SAFe Practitioner",
    description:
      "Domine o Scaled Agile Framework e aprenda a aplicar práticas ágeis em grande escala.",
    duration: "45 horas",
    level: "Avançado",
    image: agileAbout,
    price: 897.0,
  },
];

export default function Course() {
  // Template para renderizar cada curso como um card
  const courseTemplate = (course: Course) => {
    return <CourseCard key={course.id} course={course} />;
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-6">
              <BookOpen className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              NOSSOS CURSOS DE AGILIDADE
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
        </ScrollFromRight>
      </div>
    </section>
  );
}
