"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import treinamento from "@/assets/treinamento.png";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Training() {
  const [visible, setVisible] = useState<boolean>(false);

  const servicos = [
    "Planejamento Estratégico com OKRs",
    "Formação de Gerente de Projetos",
    "Gerenciamento de Projetos",
    "Gerenciamento de Projetos Ágeis com Scrum",
    "Gestão de Riscos em Projetos",
    "Gestão de Tempo e Produtividade",
    "CHATGPT como Ferramenta de Produtividade e Qualidade",
    "Power BI Básico",
    "Power BI Intermediário",
    "Power BI Avançado",
    "Introdução e Implementação de Inteligência Artificial",
  ];

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Saiba Mais!"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <Card className="w-full shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="text-center pb-2">
            <div className="mb-6 flex justify-center items-center">
              <Image
                src={treinamento}
                alt="Consultoria"
                className="flex justify-center items-center"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Treinamentos em:
            </h1>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
              {servicos.map((servico, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <p className="text-gray-700 group-hover:text-gray-900 font-medium m-0">
                      {servico}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Dialog>
    </div>
  );
}
