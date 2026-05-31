import Hero from "../components/sections/Hero";
import Manifesto from "../components/sections/Manifesto";
import DoChao from "../components/sections/DoChao";
import EmBreve from "../components/sections/EmBreve";
import Jornal from "../components/sections/Jornal";
import Irmandade from "../components/sections/Irmandade";
import Footer from "../components/sections/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Arte de Chão — Antes da faixa, existe o chão";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "Streetwear editorial brasileiro inspirado no Jiu-Jitsu. Coleção Do Chão disponível. Disciplina, cultura e legado."
    );
  }, []);

  return (
    <div className="lg:pl-24 xl:pl-28 pt-16 lg:pt-0">
      <main>
        <Hero />
        <Manifesto />
        <DoChao />
        <EmBreve />
        <Jornal />
        <Irmandade />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
