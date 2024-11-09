"use client";

import { useState, useMemo } from "react";
import { CourseCardPage, courses } from "@/components/CourseCardPage";
import { CourseFilter } from "@/components/CourseFilter";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [...new Set(courses.map((course) => course.category))];
  const levels = [...new Set(courses.map((course) => course.level))];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = selectedCategory
        ? course.category === selectedCategory
        : true;
      const matchesLevel = selectedLevel
        ? course.level === selectedLevel
        : true;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nossos Cursos</h1>
          <p className="text-xl text-blue-100">
            Explore nossa seleção de cursos e transforme sua carreira em
            agilidade
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar cursos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <CourseFilter
            categories={categories}
            levels={levels}
            selectedCategory={selectedCategory}
            selectedLevel={selectedLevel}
            onCategoryChange={setSelectedCategory}
            onLevelChange={setSelectedLevel}
          />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCardPage key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600">
                Nenhum curso encontrado com os filtros selecionados.
              </h3>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
