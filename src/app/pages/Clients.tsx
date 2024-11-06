import { Users, Target, Lightbulb, Globe2 } from "lucide-react";

export default function Clients() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Foco no Cliente",
      description: "Colocamos nossos clientes no centro de cada decisão",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-blue-600" />,
      title: "Experiência Global",
      description: "Vivência em diferentes culturas e mercados",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Soluções Inovadoras",
      description: "Abordagens criativas para cada contexto",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50/50 transform -skew-x-12" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Principais Clientes
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Atuar em prol das organizações é o que nos move. Ter a vivência em
            diversas culturas nos traz a possibilidade de vislumbrar soluções em
            distintos contextos. Sempre em busca da qualidade nas entregas, ter
            o cliente no centro dos nossos pensamentos se tornou natural.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Clients Image Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-600/5 rounded-2xl transform rotate-1" />
          <div className="absolute -inset-4 bg-blue-600/5 rounded-2xl transform -rotate-1" />
          <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-8">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/40 rounded-full transform translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100/40 rounded-full transform -translate-x-16 translate-y-16" />

            <div className="relative">
              {/* Substitua o placeholder pela sua imagem real */}
              <img
                src="/api/placeholder/1200/600"
                alt="Nossos principais clientes"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Conheça Nossos Cases
          </button>
        </div>
      </div>
    </section>
  );
}
