import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Agile Change Consultoria",
  description: "Cursos, treinamentos e mentorias",
  openGraph: {
    title: "Agile Change Consultoria",
    description: "Cursos, treinamentos e mentorias",
    images: [
      {
        // Use a URL absoluta completa aqui
        url: "https://agilechangeconsultoria.com/agile-change-contact.png",
        // Opcional, mas recomendado: Adicionar dimensões
        width: 1200, // Exemplo: ajuste para o tamanho real da sua imagem
        height: 630, // Exemplo: ajuste para o tamanho real da sua imagem
        alt: 'Contato Agile Change Consultoria', // Texto alternativo é bom para acessibilidade e SEO
      },
      // Você pode adicionar mais imagens se desejar (formatos diferentes, tamanhos)
    ],
    url: "https://agilechangeconsultoria.com/",
    type: "website",
    // Opcional, mas bom ter:
    locale: 'pt_BR', // Define o idioma/localidade
    siteName: 'Agile Change Consultoria', // Nome do site
  }
  // Opcional: Adicionar metadados para o Twitter Card também
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Agile Change Consultoria',
  //   description: 'Cursos, treinamentos e mentorias',
  //   images: ['https://agilechangeconsultoria.com/agile-change-contact.png'], // Use a URL absoluta aqui também
  //   creator: '@seuTwitterHandle', // Se tiver um handle do Twitter
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}