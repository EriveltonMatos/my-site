"use client";

import React from "react";
import agileChange from "@/assets/agile-change-logo.png";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpCircle,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      {/* Curva decorativa superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden"></div>

      <div className="container mx-auto px-6 pt-20 pb-12">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Coluna 1 - Sobre */}
          <div className="space-y-4">
            <Image
              src={agileChange}
              alt="Agile Learning"
              width={200}
              height={50}
            />
            <p className="text-blue-100">
              Transformando organizações através da agilidade. Cursos
              especializados para impulsionar sua carreira e sua empresa.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-300">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                "Nossos Cursos",
                "Certificações",
                "Consultoria",
                "Blog",
                "Sobre Nós",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-blue-100 hover:text-blue-400 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-300">
              Contato
            </h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400" />
                <span>contato@agilechangeconsultoria.com.br</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400" />
                <span>(85) 997099171</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-400" />
                <span>
                  AV WASHINGTON SOARES, 885 - Sala 1002, Fortaleza / CE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mt-12 pt-8 border-t border-blue-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-100">
              © 2024 Agile Learning. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className="absolute right-8 -top-6 bg-primary text-white rounded-full p-2 hover:bg-blue-600 transition duration-300 shadow-lg"
      >
        <ArrowUpCircle size={32} />
      </button>
    </footer>
  );
}
