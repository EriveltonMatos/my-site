import type { Metadata } from "next";
import "./globals.css";
import agileContact from "@/assets/agile-change-contact.png";

export const metadata: Metadata = {
  title: "Agile Change Consultoria",
  description: "Cursos, treinamentos e mentorias",
  openGraph: {
    title: "Agile Change Consultoria",
    description: "Cursos, treinamentos e mentorias",
    images: [
      {
        url: agileContact.src,
      },
    ],
    url: "https://agilechangeconsultoria.com/",
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