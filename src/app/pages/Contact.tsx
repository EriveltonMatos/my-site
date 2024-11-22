import React from "react";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn } from "@/components/ScrollComponent";

export default function Contact() {
  const phoneNumber = "5585997099171";
  const message = encodeURIComponent(
    "Olá! Gostaria de mais informações sobre os cursos."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-10 top-20 h-72 w-72 rounded-full bg-blue-50" />
        <div className="absolute -left-10 bottom-20 h-72 w-72 rounded-full bg-blue-50" />
      </div>

      <ScrollFadeIn>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Seção CTA */}
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-700 p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Pronto para dar o próximo passo?
              </h3>
              <p className="text-lg text-indigo-100 mb-6">
                Converse com um de nossos especialistas e descubra o melhor
                caminho para alcançar seus objetivos
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 transition-colors duration-300">
                  Entre em contato com um especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </a>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-4 text-white">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <div className="text-3xl font-bold">15k+</div>
                <div className="text-indigo-100">Alunos formados</div>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-indigo-100">Taxa de satisfação</div>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <div className="text-3xl font-bold">6+</div>
                <div className="text-indigo-100">Cursos disponíveis</div>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-indigo-100">Avaliação média</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollFadeIn>
    </div>
  );
}
