import NavbarEvento from "./components/NavbarEvento";
import ContagemRegressiva from "./components/ContagemRegressiva";
import SectionLogistica from "./components/section-logistica";
import AccordionInfo  from "./components/AccordionInfo";
import AccordionFAQ  from "./components/Accordion-FAQ";
import LocalEndereco from "./components/Local";
import SectionBemVindo from "./components/Section-BenVindo"
import Footer from "./components/Footer";

export default function EventoPage() {
  return (
    <>
      <NavbarEvento />

      <section id="inicio" className="pt-24 text-center bg-blue-50 py-20">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Bem-vindo ao Encontro Anual GBBS 2025
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700">
          Prepare-se para uma experiência inesquecível! A contagem regressiva para o nosso encontro em Curitiba já começou.
        </p>

        <ContagemRegressiva />

      </section>

      <section id="sobre" className="py-16 px-6 bg-white">
        <SectionBemVindo/>
      </section>

      <section id="informacoes" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <AccordionInfo />
      </section>

      <section id="logistica" className="py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <SectionLogistica />
      </section>



      <section id="informacoes" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">       
        <AccordionFAQ />
      </section>

      <section id="informacoes" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">       
        <LocalEndereco/>
      </section>

      <Footer />
    </>
  );
}
