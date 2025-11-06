"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronUp, Home, Plane, FileText, Coffee } from "lucide-react";

interface InfoItem {
  title: string;
  content: string;
  icon: React.ReactNode; // adicionamos o ícone
}

const informacoes: InfoItem[] = [
  {
    title: "Hospedagem",
    content:
      "A escolha de colega de quarto já está disponível na aba de inscrição. Verifique suas opções e confirme o par até o prazo estipulado.",
    icon: <Home className="w-5 h-5 text-white" />,
  },
  {
    title: "Voo",
    content:
      "A sua ida deve ocorrer no dia 23/09 (check-in no hotel às 14h). O retorno deve ser a partir das 20h do dia 24/09 ou no dia 25/09.",
    icon: <Plane className="w-5 h-5 text-white" />,
  },
  {
    title: "Documentação",
    content:
      "Tenha em mãos documento com foto para check-in no hotel e para identificação no evento. Certifique-se de que tudo esteja válido.",
    icon: <FileText className="w-5 h-5 text-white" />,
  },
  {
    title: "Alimentação",
    content:
      "Durante a viagem, utilize o reembolso conforme a política de viagens. Despesas extras deverão ser lançadas no centro de custo.",
    icon: <Coffee className="w-5 h-5 text-white" />,
  },
];

export default function AccordionInfo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Informações Importantes
      </h2>

      {informacoes.map((info, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-2xl shadow-lg overflow-hidden border border-blue-500/30"
          >
            {/* Cabeçalho */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold tracking-wide transition-all hover:bg-blue-700/40"
            >
              <div className="flex items-center gap-3">
                {/* Ícone temático */}
                {info.icon}
                <span className="text-lg">{info.title}</span>
              </div>

              {/* Ícones animados de abrir/fechar */}
              <div className="relative w-6 h-6">
                <AnimatePresence mode="wait" initial={false}>
                  {!isOpen ? (
                    <motion.div
                      key="plus"
                      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Plus className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="chevron"
                      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <ChevronUp className="w-6 h-6 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>

            {/* Conteúdo animado */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                  className="overflow-hidden bg-blue-950/40 backdrop-blur-sm border-t border-blue-400/20"
                >
                  <motion.div
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="px-6 pb-5 pt-2"
                  >
                    <p className="text-blue-100 leading-relaxed">{info.content}</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
