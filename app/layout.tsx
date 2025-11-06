import "./globals.css";
import type { Metadata } from "next";
import WhatsAppFloatingButton from "./components/WhatsApp-Flutuante";
import NavbarEvento from "./components/NavbarEvento"; // importando o Navbar

export const metadata: Metadata = {
  title: "Educação Transforma",
  description: "Evento educacional com Next.js e Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gray-100 text-gray-800">
        {/* Navbar fixo */}
        <NavbarEvento />

        {/* Conteúdo da página */}
        {children}

        {/* Botão flutuante do WhatsApp */}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
