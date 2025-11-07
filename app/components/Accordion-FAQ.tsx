"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ChevronUp,
  Phone,
  DollarSign,
  Home,
  FileText,
} from "lucide-react";

interface InfoItem {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const informacoes: InfoItem[] = [
  {
    title: "Posso escolher meu ou minha colega de quarto durante a hospedagem?",
    content:
      "Pode sim! A escolha será feita aqui no hotsite e seu ou sua colega receberá um convite no Whatsapp.",
    icon: <Home className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
  {
    title:
      "Tem alguma Política no GB relacionada ao deslocamento de mães lactantes?",
    content:
      "Sim, basta entrar em contato com a Premier pelo Whatsapp (41) 3795-2043. A equipe passará as orientações necessárias.",
    icon: <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
  {
    title: "Haverá reembolso para as pessoas que estarão em deslocamento?",
    content:
      "Para alimentação durante a viagem (no percurso até o evento e no retorno para a cidade) deverá ser utilizado o reembolso, conforme Política de Viagens do GB.",
    icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
  {
    title: "Quem devo procurar em caso de dúvidas sobre o meu deslocamento?",
    content:
      "Entre em contato com a Premier pelo Whatsapp (41) 3795-2043. A equipe passará as orientações necessárias.",
    icon: <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
  {
    title: "Qual a Política de reembolso para despesas extras?",
    content:
      "O reembolso de despesas extras como lavanderia, deve ser solicitado no seu respectivo centro de custos.",
    icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
];

export default function AccordionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
        Perguntas Frequentes
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
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
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold tracking-wide transition-all hover:bg-blue-700/40"
              >
                <div className="flex items-center gap-3">
                  {/* Ícone de acordo com o tema */}
                  {info.icon}
                  <span className="text-lg sm:text-xl md:text-lg">{info.title}</span>
                </div>

                {/* Ícones animados de abrir/fechar */}
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
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
                        <Plus className="w-full h-full text-white" />
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
                        <ChevronUp className="w-full h-full text-white" />
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
                      <p className="text-blue-100 leading-relaxed">
                        {info.content}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
