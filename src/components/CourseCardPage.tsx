import gerenciamento from "@/assets/courses/gerenciamento.jpg";
import okr from "@/assets/courses/okr.jpg";
import scrum from "@/assets/courses/scrum.jpg";
import risco from "@/assets/courses/risco.jpg";
import power from "@/assets/courses/power.jpg";
import ia from "@/assets/courses/ia.jpg";

export interface Course {
  id: string;
  title: string;
  description: string;
  category: "scrum" | "kanban" | "lean" | "safe" | "management";
  level: "iniciante" | "intermediario" | "avancado";
  duration: string;
  imageUrl: StaticImageData;
  featured: boolean;
  url: string;
}

// data/courses.ts
export const courses: Course[] = [
  {
    id: "1",
    title: "Gerenciamento de Projetos Ágeis com Scrum",
    description:
      "Aprenda a gerenciar projetos de forma ágil e eficiente com o framework Scrum.",
    category: "scrum",
    level: "iniciante",
    duration: "40 horas",
    imageUrl: scrum,
    featured: true,
    url: "/curso-scrum",
  },
  {
    id: "2",
    title: "Planejamento Estratégico com OKRs",
    description:
      "Aprenda a definir e implementar objetivos e resultados-chave para alavancar a performance da sua equipe.",
    category: "kanban",
    level: "intermediario",
    duration: "30 horas",
    imageUrl: okr,
    featured: false,
    url: "/curso-okr",
  },
  {
    id: "3",
    title: "Gerenciamento de Projetos",
    description:
      "Aprenda a gerenciar projetos de forma eficiente e eficaz, garantindo a entrega de valor para o cliente.",
    category: "kanban",
    level: "intermediario",
    duration: "30 horas",
    imageUrl: gerenciamento,
    featured: false,
    url: "/curso-gerenciamento",
  },
  {
    id: "4",
    title: "Gestão de Riscos em Projetos",
    description:
      "Domine o Scaled Agile Framework e aprenda a aplicar práticas ágeis em grande escala.",
    category: "kanban",
    level: "intermediario",
    duration: "30 horas",
    imageUrl: risco,
    featured: false,
    url: "/curso-scrum",
  },
  {
    id: "5",
    title: "Power BI Teoria e Prática",
    description:
      "Domine Power BI e aprenda a criar dashboards e relatórios interativos para tomada de decisão.",
    category: "kanban",
    level: "intermediario",
    duration: "30 horas",
    imageUrl: power,
    featured: false,
    url: "/curso-scrum",
  },
  {
    id: "6",
    title: "Introdução e Implementação de Inteligência Artificial",
    description:
      "Aprenda os conceitos fundamentais de IA e como implementar soluções práticas.",
    category: "kanban",
    level: "intermediario",
    duration: "30 horas",
    imageUrl: ia,
    featured: false,
    url: "/curso-scrum",
  },
  // Adicione mais cursos conforme necessário
];

// components/CourseCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface CourseCardProps {
  course: Course;
}

export function CourseCardPage({ course }: CourseCardProps) {
  const getLevelColor = (level: Course["level"]) => {
    const colors = {
      iniciante: "bg-green-100 text-green-800",
      intermediario: "bg-yellow-100 text-yellow-800",
      avancado: "bg-red-100 text-red-800",
    };
    return colors[level];
  };

  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Image
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-96 object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
        </div>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium">Duração:</span>
            <span className="ml-2">{course.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium">Categoria:</span>
            <span className="ml-2 capitalize">{course.category}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <a
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          href={course.url}
        >
          Saiba Mais
        </a>
      </CardFooter>
    </Card>
  );
}
