"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function ContagemRegressiva() {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });
  const [eventoIniciado, setEventoIniciado] = useState(false);
  const [mostrarCelebracao, setMostrarCelebracao] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-11-07T18:14:00-03:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setEventoIniciado(true);
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
        setMostrarCelebracao(true);
        iniciarFesta();
        return;
      }

      setTimeLeft({
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diff / 1000 / 60) % 60),
        segundos: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function iniciarFesta() {
    const duracao = 5 * 1000;
    const fim = Date.now() + duracao;

    const animar = () => {
      confetti({ particleCount: 7, angle: 60, spread: 80, origin: { x: 0 } });
      confetti({ particleCount: 7, angle: 120, spread: 80, origin: { x: 1 } });
      if (Date.now() < fim) requestAnimationFrame(animar);
    };
    animar();
  }

  if (mostrarCelebracao) {
    return (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center bg-black/90 text-white text-center z-50 cursor-pointer"
        onClick={() => setMostrarCelebracao(false)}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold text-blue-400 glow animate-pulse"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          🎉 O EVENTO CHEGOU! 🎉
        </motion.h1>
        <p className="mt-4 text-lg text-blue-200">
          Clique para fechar esta tela e aproveitar o evento!
        </p>
      </div>
    );
  }

  return (
    <section className="relative py-44 px-6 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 overflow-hidden text-white">
      {/* Fundo futurista animado */}

      <div className="relative max-w-6xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-200 mb-2 drop-shadow-lg">
          Bem-vindo ao Encontro Anual GBBS 2025
        </h1>
        <p className="text-gray-300 mb-12 drop-shadow-md">
          Prepare-se para uma experiência inesquecível! A contagem regressiva para o nosso encontro em Curitiba já começou.
        </p>

        <h3 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide text-blue-300 drop-shadow-lg">
          Contagem Regressiva
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { label: "Dias", value: timeLeft.dias },
            { label: "Horas", value: timeLeft.horas },
            { label: "Minutos", value: timeLeft.minutos },
            { label: "Segundos", value: timeLeft.segundos },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-32 h-32 md:w-36 md:h-36 bg-white/10 border border-blue-300 rounded-2xl shadow-xl flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-4xl md:text-5xl font-extrabold text-blue-400 glow">
                {item.value.toString().padStart(2, "0")}
              </p>
              <span className="mt-1 text-sm md:text-base font-medium tracking-wider text-blue-200">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
