"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export default function LocalEndereco() {
  const [mostrarMapa, setMostrarMapa] = useState(false);

  return (
    <section
      id="local"
      className="relative py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden min-h-[650px]"
    >
      {/* Fundo futurista */}
      <div className="absolute inset-0">
        <div className="absolute w-[300px] h-[300px] bg-blue-700/20 rounded-full -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-[200px] h-[200px] bg-indigo-700/20 rounded-full -bottom-10 -right-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Coluna esquerda: título + endereço + ícone */}
        <div className="flex-1 text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg text-white">
          Local do Evento
        </h2>

        <div className="flex items-center gap-3 mb-4">
          <MapPin className="h-9 w-10 text-blue-300 animate-bounce" />
          <p className="text-lg md:text-xl text-blue-100">
            Espaço Torres — R. Pergentina Silva Soares, 159, Jardim Botânico, Curitiba - PR
          </p>
        </div>
      </div>

        {/* Coluna direita: botão + texto + mapa */}
        <div className="flex-1 flex flex-col items-start">
          <p className="text-white text-lg mb-4 max-w-md">
              Clique no botão para visualizar a localização completa do evento no Google Maps.
          </p>

          <button
            onClick={() => setMostrarMapa(!mostrarMapa)}
            className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition text-white font-medium mb-4"
          >
            <MapPin className="h-6 w-6 text-white mr-3 animate-pulse" />
            Ver no mapa
          </button>

          {mostrarMapa && (
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.999293394683!2d-49.213212!3d-25.538382799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf72b2c66e0f9%3A0xcebc89aa78a28dca!2zQWlra28gLSBNw7N2ZWlzIGUgRGVjb3Jhw6fDtWVz!5e0!3m2!1spt-BR!2sbr!4v1762465593599!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
