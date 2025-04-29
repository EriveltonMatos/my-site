import type { Metadata } from "next";
import "./globals.css";
import agileContact from "@/assets/agile-change-contact.png";

export const metadata: Metadata = {
  title: "Agile Consultoria",
  description: "Descrição breve e chamativa do seu site.",
  openGraph: {
    title: "Agile Consultoria",
    description: "Cursos, treinamentos, etc",
    images: [
      {
        url: agileContact.src,
      },
    ],
    url: "https://agilechangeconsultoria.com",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
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