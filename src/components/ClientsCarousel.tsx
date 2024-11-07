import cni from "@/assets/empresas/CNI.png";
import Image from "next/image";


export default function ClientsCarousel() {
    const clients = [
      { src: cni, alt: "Logo da Agile Change" },
    ];
  
    return (
      <div className="overflow-hidden py-8">
        <div className="flex items-center justify-center animate-scroll-left space-x-8">
          {[...clients].map((client, index) => (
            <div key={index} className="relative w-24 h-auto">
              <Image src={client.src} alt={client.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    );
  }