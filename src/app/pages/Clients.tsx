import { Users } from "lucide-react";
import ClientsCarousel from "@/components/ClientsCarousel";
import { ScrollFadeIn, ScrollFromBottom } from "@/components/ScrollComponent";

export default function Clients() {
  return (
    <section id="clientes" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="relative container mx-auto px-4">
        {/* Header Section */}
        <ScrollFadeIn>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-6">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              PRINCIPAIS CLIENTES
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Atuar em prol das organizações é o que nos move. Ter a vivência em
              diversas culturas nos traz a possibilidade de vislumbrar soluções
              em distintos contextos. Sempre em busca da qualidade nas entregas,
              ter o cliente no centro dos nossos pensamentos se tornou natural.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Clients Image Section */}
        <ScrollFromBottom>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-2xl transform rotate-1" />
            <div className="absolute -inset-4 bg-blue-600/5 rounded-2xl transform -rotate-1" />
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-8">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/40 rounded-full transform translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100/40 rounded-full transform -translate-x-16 translate-y-16" />

              <div className="relative">
                {/* Substitua o placeholder pela sua imagem real */}
                <ClientsCarousel />
              </div>
            </div>
          </div>
        </ScrollFromBottom>
      </div>
    </section>
  );
}
