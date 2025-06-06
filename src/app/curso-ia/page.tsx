import React from "react";
import {
  Calendar,
  Clock,
  Users,
  Target,
  CheckCircle,
  Award,
  BookOpen,
  Star,
  Monitor,
  MessageCircle,
  Briefcase,
  Trophy,
  HandshakeIcon,
} from "lucide-react";
import { ScrollFromBottom } from "@/components/ScrollComponent";
import ClientsCarousel from "@/components/ClientsCarousel";
import NavbarReturn from "@/components/NavbarReturn";

export default function CourseAI() {

  const phoneNumber = "5585997099171";
  const message = encodeURIComponent(
    "Olá! Gostaria de mais informações sobre o curso de Introdução e Implementação de Inteligência Artificial"
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const courseData = {
    title: "Introdução e Implementação de Inteligência Artificial",
    description:
      "Este treinamento tem o intuito de proporcionar aos participantes uma compreensão fundamental sobre o que é IA, suas principais aplicações e como ela está transformando diversos setores. Ao final do treinamento, os alunos irão aprender sobre conceitos e fundamentos de IA, principais técnicas e ferramentas e o processo de análise de dados para que haja uma boa aplicação da IA.",
    duration: "16 horas",
    rating: 4.8,
    instructor: {
      name: "Isaac Maciel",
      role: "Agile Coach Certificada",
      experience: "12 anos de experiência em metodologias ágeis",
    },
    modules: [
      {
        topics: [
          "Conceitos Básicos de IA",
          "Introdução à Inteligência Artificial, Machine Learning, e Deep Learning",
          "Estudos de caso de aplicações em diferentes setores",
          "Como a IA pode apoiar a tomada de decisão e promove eficiência",
          "Identificação de Oportunidades para IA",
          "Mapeamento de áreas que podem se beneficiar da IA",
          "Priorização de projetos: Avaliando impacto no negócio e viabilidade técnica",
        ],
      },
      {
        topics: [
          "Definição de Objetivos e Métricas do Projeto",
          "Estabelecimento de objetivos claros e mensuráveis",
          "Exemplos práticos: Como definir objetivos de IA para prever demanda ou melhorar a cadeia de suprimentos",
          "Fundamentos do Desenvolvimento de Modelos",
          "Preparação e coleta de dados: desafios e boas práticas",
          "Seleção de algoritmos e construção do fluxo de modelagem",
          "Validação e Avaliação de Modelos",
        ],
      },
      {
        topics: [
          "Implantação do Modelo de IA",
          "Estrutura necessária para colocar o modelo em produção",
          "Práticas de implementação e as ferramentas mais usadas",
        ],
      },
      {
        topics: [
          "Monitoramento e Ajuste de KPIs",
          "Estabelecimento e monitoramento de KPIs para acompanhar o desempenho da IA em produção",
          "Ciclo de feedback para ajuste e manutenção do modelo",
          "Hands-On: Definição de KPIs e Plano de Monitoramento",
        ],
      },
    ],
    // Novos dados para as seções adicionadas
    marketStats: [
      {
        number: "89%",
        description: "dos alunos conseguem promoção em até 6 meses",
      },
      {
        number: "15.2k",
        description: "reais é o aumento médio salarial após certificação",
      },
      {
        number: "97%",
        description: "taxa de aprovação no exame de certificação",
      },
    ],
    depoimentos: [
      {
        nome: "Carlos Mendes",
        cargo: "Scrum Master Sênior",
        empresa: "Tech Solutions",
        texto:
          "Este curso transformou minha carreira. A abordagem prática e os estudos de caso reais fizeram toda a diferença.",
        avaliacao: 5,
      },
      {
        nome: "Patricia Santos",
        cargo: "Product Owner",
        empresa: "Inova Digital",
        texto:
          "Excelente metodologia! Os conceitos são apresentados de forma clara e os exercícios práticos são muito relevantes.",
        avaliacao: 5,
      },
      {
        nome: "Ricardo Lima",
        cargo: "Agile Coach",
        empresa: "Global Tech",
        texto:
          "O melhor investimento que fiz na minha carreira. O suporte pós-curso é excepcional.",
        avaliacao: 5,
      },
    ],
    garantias: [
      {
        titulo: "Certificado Reconhecido",
        descricao: "Certificação com reconhecimento internacional",
      },
      {
        titulo: "Garantia de 30 dias",
        descricao: "Dinheiro de volta se não estiver satisfeito",
      },
      {
        titulo: "Suporte Vitalício",
        descricao: "Acesso à comunidade e atualizações",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarReturn />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">{courseData.title}</h1>
          <p className="text-xl mb-8">{courseData.description}</p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{courseData.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span>{courseData.rating} de avaliação</span>
            </div>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Matricule-se agora!
          </button>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-2">
            {/* Instrutor */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Seu Instrutor</h2>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    {courseData.instructor.name}
                  </h3>
                  <p className="text-blue-600 mb-2">
                    {courseData.instructor.role}
                  </p>
                  <p className="text-gray-600">
                    {courseData.instructor.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Módulos do Curso */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">
                O que você vai aprender
              </h2>
              <div className="space-y-6">
                {courseData.modules.map((module, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      Módulo {index + 1}:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-6">Destaques do Curso</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span>Certificado reconhecido internacionalmente</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span>Material didático completo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  <span>Exercícios práticos e projetos reais</span>
                </div>
              </div>
              <div className="mt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Matricule-se agora!
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Metodologia de Ensino */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nossa Metodologia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Aulas Ao Vivo</h3>
                <p className="text-gray-600">
                  Interaja em tempo real com instrutores e outros alunos durante
                  as aulas
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Projetos Reais</h3>
                <p className="text-gray-600">
                  Aplique seus conhecimentos em projetos baseados em casos reais
                  do mercado
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Mentoria Individual
                </h3>
                <p className="text-gray-600">
                  Sessões personalizadas com mentores experientes do mercado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              O Que Dizem Nossos Alunos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courseData.depoimentos.map((depoimento, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(depoimento.avaliacao)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{depoimento.texto}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{depoimento.nome}</p>
                    <p className="text-sm text-gray-500">
                      {depoimento.cargo} - {depoimento.empresa}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Garantias */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nossas Garantias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courseData.garantias.map((garantia, index) => (
                <div key={index} className="text-center p-6 border rounded-lg">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 ? (
                      <Trophy className="w-8 h-8 text-blue-600" />
                    ) : index === 1 ? (
                      <HandshakeIcon className="w-8 h-8 text-blue-600" />
                    ) : (
                      <Trophy className="w-8 h-8 text-blue-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {garantia.titulo}
                  </h3>
                  <p className="text-gray-600">{garantia.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ScrollFromBottom>
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                NOSSOS PRINCIPAIS CLIENTES
              </h2>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-2xl transform rotate-1" />
                <div className="absolute -inset-4 bg-blue-600/5 rounded-2xl transform -rotate-1" />
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-8">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/40 rounded-full transform translate-x-16 -translate-y-16" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100/40 rounded-full transform -translate-x-16 translate-y-16" />

                  <div className="relative">
                    {/* Substitua o placeholder pela sua imagem real */}
                    <ClientsCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFromBottom>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Comece Sua Jornada Agora
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que transformaram suas
              carreiras com nossa certificação
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Matricule-se agora!
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
