import "primereact/resources/themes/saga-blue/theme.css";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Header from "./pages/Header";
import Pillars from "./pages/Pillars";
import Course from "./pages/Course";
import Form from "./pages/Form";
import Footer from "./pages/Footer";
import IconPhone from "@/components/IconPhone";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Pillars />
      <Clients />
      <Course />
      <Form />
      <Footer />
      <IconPhone />
    </>
  );
}
