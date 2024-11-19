import Image from "next/image";
import agileChange from "@/assets/agile-change-logo.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NavbarReturn() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-950 backdrop-blur-md z-50 border-b border-blue-800/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image
          src={agileChange}
          alt="Agile Change Logo"
          className="w-auto h-14"
        />
        <a
          href="/"
          className="group relative flex items-center justify-center gap-1 px-3 py-1 bg-primary overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-400/20 via-blue-300/20 to-blue-400/20 transition-all duration-500 ease-out group-hover:w-full"></div>

          <div className="relative flex items-center justify-center p-2 transition-transform duration-300 group-hover:-translate-x-1">
            <ArrowLeft className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors duration-300" />
          </div>

          <span className="relative font-semibold text-slate-700 group-hover:text-white transition-colors duration-300">
            Voltar ao Site
          </span>
        </a>
      </div>
    </nav>
  );
}
