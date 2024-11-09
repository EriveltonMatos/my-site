import agileAbout from "@/assets/agile-change-about.png";

export interface Course {
  id: string;
  title: string;
  description: string;
  category: "scrum" | "kanban" | "lean" | "safe" | "management";
  level: "iniciante" | "intermediario" | "avancado";
  duration: string;
  price: number;
  imageUrl: StaticImageData;
  featured: boolean;
}

// data/courses.ts
export const courses: Course[] = [
  {
    id: "1",
    title: "Scrum Master Certified",
    description:
      "Aprenda os fundamentos do Scrum e se prepare para a certificação PSM I.",
    category: "scrum",
    level: "iniciante",
    duration: "40 horas",
    price: 997.0,
    imageUrl: agileAbout,
    featured: true,
  },
  {
    id: "2",
    title: "Kanban System Design",
    description:
      "Domine o método Kanban e aprenda a otimizar o fluxo de trabalho.",
    category: "kanban",
    level: "intermediario",
    duration: "30 horas",
    price: 897.0,
    imageUrl: agileAbout,
    featured: false,
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
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

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
        {course.featured && (
          <Badge className="absolute top-2 right-2 bg-blue-500">Destaque</Badge>
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
          <Badge className={getLevelColor(course.level)}>
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </Badge>
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
        <span className="text-2xl font-bold text-blue-600">
          {formatPrice(course.price)}
        </span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
          Saiba Mais
        </button>
      </CardFooter>
    </Card>
  );
}
