import "primereact/resources/themes/saga-blue/theme.css";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Header from "./pages/Header";
import Pillars from "./pages/Pillars";
import Course from "./pages/Course";
import Form from "./pages/Form";
import Footer from "./pages/Footer";
import IconPhone from "@/components/IconPhone";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import agileContact from "@/assets/agile-change-contact.png";

// Definição dos metadados da página
export const metadata = {
  title: 'Agile Change Consultoria',
  description: 'Cursos, treinamentos e mentorias',
  openGraph: {
    title: 'Agile Change Consultoria',
    description: 'Cursos, treinamentos e mentorias',
    images: [
      {
        url: agileContact.src,
        width: 800,
        height: 600,
      },
    ],
    url: 'https://agilechangeconsultoria.com',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};


export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Pillars />
      <Clients />
      <Contact />
      <Course />
      <Feedback />
      <Form />
      <Footer />
      <IconPhone />
    </>
  );
}
