"use client";

import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16 relative overflow-hidden">
      
      {/* Elementos futuristas de fundo */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-700/20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-indigo-700/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
        
        {/* Coluna 1: Evento */}
        <div className="flex flex-col items-start">
          <p className="text-lg font-bold tracking-wide text-white drop-shadow-md">Setembro 2025</p>
          <p className="text-md text-blue-200 drop-shadow-sm">Curitiba - PR</p>
        </div>

        {/* Coluna 2: Suporte */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <p className="text-lg font-bold mb-2 tracking-wide text-white drop-shadow-md">Dúvidas?</p>
          <p className="text-md text-blue-200 mb-4 max-w-xs drop-shadow-sm">
            Nosso time está pronto para tirar todas as suas dúvidas!
          </p>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 transition px-5 py-3 rounded-2xl shadow-lg font-semibold text-white"
          >
            <Phone className="h-6 w-6 text-blue-200" />
            Falar com o Suporte
          </a>
        </div>

        {/* Coluna 3: Mensagem */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right text-sm text-blue-200">
          <p className="drop-shadow-sm">Obrigado por participar do evento!</p>
        </div>
      </div>

      {/* Copyright e desenvolvido por Mateus - sempre no final */}
      <div className="mt-12 text-center text-blue-200 text-sm space-y-1">
        <p className="drop-shadow-sm">© 2025 Grupo Boticário. Todos os direitos reservados</p>
        <p className="drop-shadow-sm">Desenvolvido por Mateus</p>
      </div>
    </footer>
  );
}
