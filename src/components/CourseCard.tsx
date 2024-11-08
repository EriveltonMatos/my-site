// components/CourseCard.tsx
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/app/pages/Course";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl p-5">
      <div className="relative h-64 w-full">
        <Image
          src={course.image}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            {course.level}
          </span>
          <span className="text-sm text-gray-500">{course.duration}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            R$ {course.price.toFixed(2)}
          </span>
          <Link
            href={`/cursos/${course.id}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
}
