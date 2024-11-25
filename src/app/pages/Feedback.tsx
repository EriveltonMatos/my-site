"use client";
import React, { useState, useEffect } from "react";
import {
  Star,
  QuoteIcon,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  BookOpen,
} from "lucide-react";
import ash from "@/assets/ash.jpg";
import uendel from "@/assets/feedbacks/uendel.png";
import juan from "@/assets/feedbacks/juan.png";
import erivelton from "@/assets/feedbacks/erivelton.png";
import livia from "@/assets/feedbacks/livia.png";
import nai from "@/assets/feedbacks/nai.png";
import gabriel from "@/assets/feedbacks/gabriel.png";


import { ScrollFromBottom, ScrollFromLeft, ScrollFromRight, ScrollFromTop } from "@/components/ScrollComponent";

export default function Feedback() {
  const testimonials = [
    {
      id: 1,
      name: "Erivelton Silva",
      role: "Fullstack Developer",
      image: erivelton.src,
      stars: 5,
      text: "Eu sempre tive dificuldades em antecipar problemas nos projetos que gerencio, mas o curso de Gestão de Riscos em Projetos mudou completamente minha abordagem. Aprendi a identificar riscos potenciais, priorizá-los e criar estratégias claras para mitigá-los. Além disso, o instrutor trouxe exemplos práticos que fizeram toda a diferença para conectar a teoria com a realidade. Recomendo este curso para todos que querem minimizar imprevistos e ter mais controle sobre seus projetos.",
      company: "Unichristus",
      badges: ["Top Student", "Project Master"],
    },
    {
      id: 2,
      name: "Uendel Martins",
      role: "Scrum Master",
      image: uendel.src,
      stars: 5,
      text: "o curso de Gerenciamento de Projetos é uma experiência completa para quem quer dominar o gerenciamento de projetos do início ao fim. Ele abrange todas as etapas de forma detalhada, desde o planejamento inicial até a entrega final. O que mais gostei foi o equilíbrio entre teoria e prática, com exercícios e estudos de caso que me permitiram aplicar o aprendizado no meu trabalho. Agora me sinto muito mais preparado para liderar projetos com eficiência e atingir resultados consistentes.",
      company: "Inova Digital",
      badges: ["Agile Expert", "Team Leader"],
    },
    {
      id: 3,
      name: "Juan Victor",
      role: "Product Owner",
      image: juan.src,
      stars: 5,
      text: "Fantástico! Eu sempre quis aprender Power BI, mas achava que seria complicado demais. O curso me surpreendeu pela didática simples e pela forma como combina a teoria com exemplos práticos. Em pouco tempo, já consegui criar relatórios e dashboards profissionais que impressionaram minha equipe. Foi um grande diferencial na minha carreira, especialmente para análises mais detalhadas e apresentações estratégicas.",
      company: "Agile Corp",
      badges: ["Product Specialist", "Innovation Award"],
    },
    {
      id: 4,
      name: "Livia Acácio",
      role: "Dev Lead",
      image: livia.src,
      stars: 5,
      text: "O curso de Introdução e Implementação de Inteligência Artificial é incrível para quem quer entender e começar a trabalhar com inteligência artificial. Eu estava receoso por não ter muita experiência técnica, mas as explicações foram tão claras e os exemplos tão bem estruturados que consegui acompanhar tranquilamente. Além disso, o curso aborda não apenas conceitos, mas também como aplicá-los em projetos reais, o que foi essencial para minha evolução profissional.",
      company: "Dev Masters",
      badges: ["Tech Expert", "Best Practices"],
    },
    {
      id: 5,
      name: "Naiara Coelho",
      role: "Agile Coach",
      image: nai.src,
      stars: 5,
      text: "O curso de Gerenciamento de Projetos Ágeis com Scrum é perfeito para quem deseja adotar métodos ágeis em seus projetos. Eu já conhecia Scrum, mas nunca tinha entendido como aplicá-lo de forma eficiente no meu dia a dia. Com as explicações detalhadas e os exemplos práticos, ficou muito mais claro como estruturar sprints, lidar com o backlog e engajar a equipe para alcançar entregas contínuas. Vale muito a pena!",
      company: "Ágil Plus",
      badges: ["Coach Master", "Agile Expert"],
    },
    {
      id: 6,
      name: "Gabriel Carvalho",
      role: "Tech Lead",
      image: gabriel.src,
      stars: 5,
      text: "Eu sempre achei o conceito de OKRs interessante, mas tinha dificuldade em implementar na prática. Este curso foi um divisor de águas! Ele não só explica o que são os OKRs, mas também ensina passo a passo como definir metas claras e alinhá-las com os objetivos estratégicos da empresa. Após concluir o curso, consegui implementar a metodologia na minha equipe, e já estamos vendo resultados concretos na forma como acompanhamos nosso progresso.",
      company: "Next Tech",
      badges: ["Tech Leader", "Innovation Pro"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const nextTestimonials = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev + 3 >= testimonials.length ? 0 : prev + 3
      );
    }
  };

  const prevTestimonials = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev - 3 < 0 ? testimonials.length - 3 : prev - 3
      );
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const getCurrentTestimonials = () => {
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length],
    ];
  };

  return (
    <section className="bg-blue-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.03,
            }}
          >
            <Sparkles className="w-8 h-8 text-blue-500" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Animated Header Section */}
        <ScrollFromBottom>
        <div className="text-center mb-16 relative">
          <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-6">
            <BookOpen className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold bg-white bg-clip-text text-transparent mb-4">
            HISTÓRIAS DE SUCESSO
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-white text-lg max-w-2xl mx-auto">
            Depoimentos inspiradores de alunos que transformaram suas carreiras
          </p>
        </div>
        </ScrollFromBottom>

        <div className="relative">
          {/* Cards Container */}
          <ScrollFromLeft>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">
            {getCurrentTestimonials().map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className={`group bg-white rounded-2xl shadow-lg transform transition-all duration-500 
                  ${
                    isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
                  }
                  ${hoveredCard === testimonial.id ? "scale-105 z-10" : ""}
                `}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                  animation: "fadeIn 0.5s ease-out",
                }}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-6 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full transform translate-x-16 -translate-y-16 opacity-20" />

                  {/* Header with Image and Info */}
                  <div className="flex items-center mb-6 relative">
                    <div className="relative group-hover:transform group-hover:rotate-6 transition-transform duration-300">
                      <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse opacity-0 group-hover:opacity-20" />
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-2 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                        <QuoteIcon className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-blue-600">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex mb-4 space-x-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-600 text-sm mb-6 relative">
                    <div className="absolute -left-2 -top-2 text-4xl text-blue-200 opacity-20">
                      "
                    </div>
                    {testimonial.text}
                    <div className="absolute -right-2 -bottom-2 text-4xl text-blue-200 opacity-20">
                      "
                    </div>
                  </blockquote>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {testimonial.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors duration-300"
                      >
                        <Heart className="w-3 h-3 mr-1 text-blue-400" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </ScrollFromLeft>


          {/* Navigation Buttons */}
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={prevTestimonials}
              disabled={isAnimating}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:-translate-x-1 transition-all duration-300 hover:bg-blue-50 group"
              aria-label="Depoimentos anteriores"
            >
              <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-blue-600" />
            </button>
            <button
              onClick={nextTestimonials}
              disabled={isAnimating}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:translate-x-1 transition-all duration-300 hover:bg-blue-50 group"
              aria-label="Próximos depoimentos"
            >
              <ChevronRight className="w-6 h-6 text-blue-400 group-hover:text-blue-600" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {Array(Math.ceil(testimonials.length / 3))
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    Math.floor(currentIndex / 3) === index
                      ? "w-8 bg-gradient-to-r from-blue-400 to-blue-600"
                      : "w-2 bg-blue-200"
                  }`}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
