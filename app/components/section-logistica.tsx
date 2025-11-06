"use client";

import { motion } from "framer-motion";

interface LogisticaItem {
  title: string;
  description: string;
}

const logisticaItems: LogisticaItem[] = [
  {
    title: "Logística Chegada e Saída - Aeroporto Curitiba",
    description: "Confira em breve mais informações.",
  },
  {
    title: "Ponto de encontro – CJB",
    description: "Confira em breve mais informações.",
  },
  {
    title: "Ponto de encontro – Fábrica São José dos Pinhais",
    description: "Confira em breve mais informações.",
  },
  {
    title: "Ponto de encontro – Hotéis",
    description: "Confira em breve mais informações.",
  },
  {
    title: "Residência em Curitiba ou região",
    description: "Confira em breve mais informações.",
  },
];

export default function LogisticaSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Fundo futurista com círculos e linhas */}
      <div className="absolute inset-0">
        <div className="absolute w-[350px] h-[350px] bg-blue-700/20 rounded-full -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-[250px] h-[250px] bg-indigo-700/20 rounded-full -bottom-10 -right-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-12 tracking-tight drop-shadow-lg text-white">
          LOGÍSTICA
        </h2>

        <div className="flex flex-col gap-8">
          {logisticaItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 min-h-[140px] shadow-lg hover:shadow-2xl border border-white/20 flex flex-col justify-center text-left"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-white/90 text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
