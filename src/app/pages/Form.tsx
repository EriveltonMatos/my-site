"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import agileContact from "@/assets/agile-change-contact.png";

export default function Form() {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-b from-black via-blue-950 to-black"
    >
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-6 border rounded-2xl bg-[#0A0D31] border-primary">
        <div className="flex-1">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-blue-950/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary"
          >
            <input
              type="hidden"
              name="access_key"
              value="301d397d-78ac-4439-abf7-13356e491ae5"
            />

            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-primary bg-clip-text text-transparent">
                Entre em Contato!
              </h2>
              <p className="mt-3 text-primary">
                Transforme suas ideias em realidade
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <label className="absolute -top-2.5 left-2 bg-primary px-2 text-sm rounded-lg text-gray-800 font-medium">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
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
                  className="w-full px-4 py-3 border-2 bg-[#0A0D31] border-primary text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300 min-h-[150px] resize-y"
                  required
                ></textarea>
              </div>

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-primary p-px font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/60"
                value="Enviar"
              >
                <span className="relative flex items-center justify-center gap-2 rounded-lg bg-black/80 backdrop-blur-xl px-6 py-3 transition-all duration-300 group-hover:bg-black/60">
                  <span>Enviar Mensagem</span>
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="flex-1 hidden md:flex items-center justify-center">
          <Image
            src={agileContact}
            alt="Colaboração"
            className="max-w-md w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
