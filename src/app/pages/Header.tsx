import NavBar from "@/components/Navbar";
import { Award, Play, Users } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <>
      <NavBar />
      <header className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white min-h-screen flex items-center mt-5 relative">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* Conteúdo Lado Esquerdo */}
          <div className="space-y-7">
            {/* Badge de Destaque */}
            <div
              className="inline-flex items-center bg-blue-800/30 text-blue-100 
          px-4 py-2 rounded-full text-sm tracking-wide"
            >
              <Play className="mr-2 w-5 h-5 text-blue-400" />
              Cursos Scrum
            </div>

            {/* Título Principal */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transforme Sua Carreira em Scrum
            </h1>

            {/* Descrição */}
            <p className="text-xl text-blue-200 leading-relaxed">
              Imagine liderar projetos com eficiência revolucionária, onde cada
              membro da equipe trabalha de forma sincronizada, entregando valor
              real e constante. Isso não é um sonho - é a metodologia Scrum em
              ação.
            </p>

            {/* Estatísticas */}
            <div className="flex space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-2xl font-bold">+10.000</p>
                  <p className="text-blue-300 text-sm">Alunos Formados</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-blue-300 text-sm">Aprovação</p>
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex space-x-6 pt-8">
              <a
                href="#cursos"
                className="bg-blue-600 hover:bg-blue-700 text-white 
              px-8 py-3 rounded-full font-semibold transition-colors duration-300 
              shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                Ver Cursos
              </a>
              <a
                href="#sobre"
                className="border border-blue-400 text-blue-200 
              hover:bg-blue-900 px-8 py-3 rounded-full 
              transition-colors duration-300"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          {/* Imagem Lado Direito */}
          <div className="relative">
            {/* Efeito de fundo */}
            <div
              className="absolute -inset-4 bg-gradient-to-r from-blue-400/5 to-blue-300/10 
          rounded-3xl blur-2xl opacity-50"
            ></div>

            {/* Container da Imagem */}
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl 
          transform transition-all duration-500 hover:scale-105 hover:rotate-1"
            >
              <img
                src="/api/placeholder/800/1000"
                alt="Foto do Isaac"
                className="w-full h-[600px] object-cover object-center rounded-3xl 
              filter brightness-90 contrast-110"
              />

              {/* Elemento de destaque */}
              <div
                className="absolute bottom-6 left-6 right-6 
            bg-blue-950/60 backdrop-blur-md 
            rounded-xl p-4 text-center border border-blue-400/10"
              >
                <p className="text-sm text-blue-100">
                  Garanta já seu futuro profissional
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
