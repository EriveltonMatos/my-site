"use client";

import Link from "next/link";
import { BookOpen, Menu, PlayCircle, Trophy, X } from "lucide-react";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      href: "/",
      label: "Início",
      icon: <PlayCircle className="w-5 h-5 mr-2 text-blue-600" />,
    },
    {
      href: "/sobre",
      label: "Isaac",
      icon: <BookOpen className="w-5 h-5 mr-2 text-blue-600" />,
    },
    {
      href: "/cursos",
      label: "Cursos",
      icon: <BookOpen className="w-5 h-5 mr-2 text-blue-600" />,
    },
    {
      href: "/conquistas",
      label: "Conquistas",
      icon: <Trophy className="w-5 h-5 mr-2 text-blue-600" />,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-950/90 backdrop-blur-md z-50 border-b border-blue-800/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-white tracking-tight 
        flex items-center hover:text-blue-200 transition-colors"
        >
          <span className="text-blue-400 mr-1">.</span>Professor Isaac
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-blue-200 hover:text-white 
            flex items-center transition-colors duration-300
            relative group"
            >
              {link.icon}
              {link.label}
              <span
                className="absolute bottom-[-4px] left-0 w-0 h-[2px] 
              bg-blue-400 transition-all duration-300 
              group-hover:w-full"
              ></span>
            </Link>
          ))}

          <Link
            href="/matricula"
            className="bg-blue-600 hover:bg-blue-700 text-white 
          px-6 py-2 rounded-full font-semibold 
          transition-colors duration-300 flex items-center shadow-lg shadow-blue-500/20 
          hover:shadow-blue-500/40"
          >
            Entre em Contato
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-blue-200 focus:outline-none transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-950/95 absolute left-0 right-0 top-full border-t border-blue-800/30">
          <div className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-200 hover:text-white 
              flex items-center text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <Link
              href="/matricula"
              className="bg-blue-600 hover:bg-blue-700 text-white 
            px-8 py-3 rounded-full font-semibold 
            transition-colors duration-300 flex items-center
            shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              onClick={() => setIsMenuOpen(false)}
            >
              Matricular
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
