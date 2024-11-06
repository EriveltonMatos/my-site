import React from "react";
import { GraduationCap, Users, Clock } from "lucide-react";
import agileAbout from "@/assets/agile-change-about.png";
import Image from "next/image";

export default function About() {
  const stats = [
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      value: "50+",
      label: "Cursos",
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      value: "10k+",
      label: "Alunos",
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      value: "24/7",
      label: "Suporte",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container principal com borda */}
        <div className="relative border-2 border-blue-100 rounded-2xl p-8 md:p-12">
          {/* Elemento decorativo - círculos nos cantos */}
          <div className="absolute w-4 h-4 bg-blue-600 rounded-full -top-2 -left-2" />
          <div className="absolute w-4 h-4 bg-blue-600 rounded-full -top-2 -right-2" />
          <div className="absolute w-4 h-4 bg-blue-600 rounded-full -bottom-2 -left-2" />
          <div className="absolute w-4 h-4 bg-blue-600 rounded-full -bottom-2 -right-2" />

          {/* Tag decorativa */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-4">
            <span className="text-blue-600 font-medium">Nossa Missão</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Coluna de Texto */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Transformação <span className="text-blue-600">Empresarial</span>
              </h2>

              <p className="text-gray-600 leading-relaxed">
                A Agile Change move-se no intuito de promover melhorias
                contínuas nas organizações.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Somos uma empresa com o coração na Estratégia Empresarial que
                perpassa por visões de Projetos, Processos e Metas, sempre com
                um pensamento inovador e em busca de Transformações.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Nosso intuito é atuar na ressignificação das empresas em seus
                diversos âmbitos, seja para um aperfeiçoamento pontual ou para
                uma mudança estrutural.
              </p>

              {/* Estatísticas */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                Conheça nossos cursos
              </button>
            </div>

            {/* Coluna da Imagem */}
            <div className="relative">
              {/* Elemento decorativo atrás da imagem */}
              <div className="absolute inset-0 bg-blue-100 rounded-lg transform translate-x-3 translate-y-3" />

              {/* Container da imagem */}
              <div className="relative bg-white p-3 rounded-lg shadow-lg">
                <Image
                  src={agileAbout}
                  alt="Estudantes aprendendo online"
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* Badge flutuante */}
                <div className="absolute -bottom-4 -right-4 bg-white py-2 px-4 rounded-lg shadow-lg">
                  <span className="text-blue-600 font-medium">Desde 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
