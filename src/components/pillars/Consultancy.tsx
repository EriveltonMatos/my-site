"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default function Consultancy() {
  const [visible, setVisible] = useState<boolean>(false);

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
        <p className="m-0">
          Consultoria especializada em: ➔ Planejamento Estratégico ➔ Implantação
          de Metas e OKRs ➔ Implantação de PMO ➔ Gestão de Portfólio de Projetos
          ➔ Gestão de Projetos Ágeis ou Waterfall ➔ Mapeamento e Otimização de
          Processos ➔ Automação de Processos ➔ Desenvolvimento de BI ➔
          Inteligência Artificial ➔ Criação, implantação e manutenção de
          Softwares
        </p>
      </Dialog>
    </div>
  );
}
