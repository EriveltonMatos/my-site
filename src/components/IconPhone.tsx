import { FaWhatsapp } from "react-icons/fa";

export default function IconPhone() {
  // Remova todos os caracteres não numéricos do número
  const phoneNumber = "5585997099171";
  // Mensagem opcional pré-definida (codificada para URL)
  const message = encodeURIComponent(
    "Olá! Gostaria de mais informações sobre os treinamentos ou consultoria."
  );

  // Link para web e dispositivos móveis
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#00D757] text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition flex items-center justify-center md:animate-pulse"
        style={{ zIndex: 1000 }}
      >
        <FaWhatsapp className="md:text-3xl text-xl" />
      </a>
    </div>
  );
}
