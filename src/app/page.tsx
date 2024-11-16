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

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Pillars />
      <Clients />
      <Contact />
      <Feedback />
      <Course />
      <Form />
      <Footer />
      <IconPhone />
    </>
  );
}
