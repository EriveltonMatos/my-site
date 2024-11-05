import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-6xl md:text-4xl font-bold">A história da Agile Change</h2>
          <p className="text-lg">
            A Agile Change nasceu em 2018 com a missão de capacitar profissionais para os desafios do mercado ágil. Fundada por um time de especialistas em transformação digital, a empresa rapidamente se consolidou como referência em soluções de treinamento e consultoria.
          </p>
          <p className="text-lg">
            Nosso compromisso é oferecer experiências de aprendizado inovadoras, que combinam teoria e prática. Acreditamos que a adoção de metodologias ágeis é fundamental para que as empresas sejam mais ágeis, resilientes e orientadas ao cliente.
          </p>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/about-image.jpg"
            alt="Agile Change Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

