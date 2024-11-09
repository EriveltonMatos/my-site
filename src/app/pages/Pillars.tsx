import Consultancy from "@/components/pillars/Consultancy";
import Mentoring from "@/components/pillars/Mentoring";
import Training from "@/components/pillars/Training";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Award, BookOpen, LifeBuoy, Users } from "lucide-react";

export default function Pillars() {
  const pillars = [
    {
      icon: <Award className="w-10 h-10 " />,
      title: "Consultoria",
      description:
        "Nossos especialistas atuam para entender suas necessidades e desenvolver soluções customizadas.",
      modal: <Consultancy />,
    },
    {
      icon: <BookOpen className="w-10 h-10 " />,
      title: "Treinamento",
      description:
        "Oferecemos programas de capacitação para aprimorar as habilidades de sua equipe.",
      modal: <Training />,
    },
    {
      icon: <LifeBuoy className="w-10 h-10 " />,
      title: "Mentoria",
      description:
        "Nossos mentores experientes guiam você e sua equipe para alcançar seus objetivos.",
      modal: <Mentoring />,
    },
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-10 border p-20 rounded-3xl shadow-lg bg-slate-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 Oxanium">
            NOSSOS PILARES DE ATUAÇÃO
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            A Agile Change preza pela atuação nesses 3 contextos, visando trazer
            uma completude no que se pode abordar à nível empresarial, seja
            Estratégico, Tático ou Operacional, sempre utilizando de
            metodologias e tecnologias atuais que convergem para o contexto do
            trabalho.
          </p>
        </div>

        <div className="relative">
          <div className="relative grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <CardHeader className="p-6 bg-blue-800 text-white rounded-t-xl">
                  <div className="flex items-center justify-center mb-4 text-4xl">
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-2xl font-semibold text-center">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div>
                    <p className="text-gray-700 text-center leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="text-white font-medium py-2 px-4 rounded-lg bg-blue-800 hover:bg-blue-900 transition-shadow  shadow-md hover:shadow-lg">
                      {pillar.modal}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
