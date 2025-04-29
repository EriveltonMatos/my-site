import type { Metadata } from 'next';
import agileContact from "@/assets/agile-change-contact.png";
import "./globals.css";

// Definição dos metadados do site
export const metadata: Metadata = {
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