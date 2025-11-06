"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavbarEvento() {
  const links = [
    { id: "sobre", label: "Sobre o Evento" },
    { id: "logistica", label: "Logística" },
    { id: "informacoes", label: "Informações Importantes" },
    { id: "local", label: "Local" },
    { id: "faq", label: "FAQ" },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 backdrop-blur-lg
        transition-all duration-500
        ${scrollY > 50 ? "bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 shadow-2xl py-3" : "bg-blue-700 py-4"}
      `}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo/Evento */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-white drop-shadow-lg cursor-pointer">
          Evento 2025
        </h1>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="
                relative text-white font-medium
                transition-all duration-300
                hover:text-blue-300
                before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                before:bg-blue-300 before:transition-all before:duration-300
                hover:before:w-full
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          {/* Aqui você pode adicionar o ícone do menu hamburger futurista */}
        </div>
      </div>
    </nav>
  );
}
