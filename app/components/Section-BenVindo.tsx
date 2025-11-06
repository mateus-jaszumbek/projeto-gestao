"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Elementos futuristas de fundo */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-blue-700/20 rounded-full -top-16 -left-16 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-purple-700/20 rounded-full -bottom-16 -right-10 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] border border-white/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Pequeno destaque */}
        <motion.p 
          className="uppercase text-sm tracking-widest text-blue-300 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fique por dentro!
        </motion.p>

        {/* Título principal */}
        <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg text-blue-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            >
            Bem-vindo ao Encontro Anual GBBS 2025
        </motion.h2>

        {/* Parágrafo descritivo */}
        <motion.p
          className="text-gray-200 max-w-3xl mx-auto text-center text-lg md:text-xl leading-relaxed space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Prepare-se para uma experiência inesquecível! <br />
          A contagem regressiva para o nosso encontro em Curitiba já começou. <br />
          Esteja pronto para um dia especial repleto de conexões, trocas e muito conhecimento. <br />
          Garanta seu lugar: faça seu cadastro e confirme sua presença até 06/08/25. <br />
          <strong>Abraço,</strong> <br />
          Comitê de organização
        </motion.p>

        {/* Botão futurista de cadastro */}
        <motion.a
          href="/inscricao"
          className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Confirmar Presença
        </motion.a>
      </div>
    </section>
  );
}
