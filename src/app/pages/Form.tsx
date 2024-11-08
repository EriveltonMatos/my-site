"use client"
import React, { useState } from 'react';
import agileContact from "@/assets/agile-change-contact.png";
import Image from 'next/image';
import { section } from 'framer-motion/client';


export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crie o link "mailto" com os dados do formulário
    const mailtoLink = `mailto:agilechangeconsultoria@gmail.com?subject=Mensagem de ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )}`;

    // Abre o link no cliente de email padrão
    window.location.href = mailtoLink;
  };

  return (
    <section className="p-10">
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-6 border rounded-2xl bg-[#0A0D31] border-primary">
  <div className="flex-1">
    <form onSubmit={handleSubmit} className="bg-blue-950/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-primary bg-clip-text text-transparent">
         Entre em Contato!
        </h2>
        <p className="mt-3 text-primary">Transforme suas ideias em realidade</p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <label className="absolute -top-2.5 left-2 bg-primary px-2 text-sm  rounded-lg text-gray-800 font-medium">
            Nome
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 bg-[#0A0D31] text-white border-primary rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300"
            required
          />
        </div>

        <div className="relative">
          <label className="absolute bg-primary -top-2.5 left-2 px-2 text-sm font-medium rounded-lg text-gray-800">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 bg-[#0A0D31] text-white border-primary rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300"
            required
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 bg-primary left-2 px-2 text-sm font-medium text-gray-800 rounded-lg">
            Mensagem
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 bg-[#0A0D31] border-primary text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300 min-h-[150px] resize-y"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-primary text-white font-medium py-3 px-6 rounded-lg
            transform transition-all duration-300 ease-in-out
            hover:from-blue-600 hover:to-sky-200 hover:scale-[1.02] hover:shadow-lg
            focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            active:scale-[0.98]"
        >
          <span className="flex items-center justify-center gap-2">
            Enviar Mensagem
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </span>
        </button>
      </div>
    </form>
  </div>
{/* Right Column - Image */}
<div className="flex-1 hidden md:flex items-center justify-center">
    <Image
      src={agileContact} // Add your image path here
      alt="Colaboração"
      className="max-w-md w-full object-contain"
    />
  </div>
  
</div>
</section>
  );
};
