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

      <section id="inicio" className="text-center bg-blue-50">


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
