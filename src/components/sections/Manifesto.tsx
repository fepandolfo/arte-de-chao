import manifestoImg from "../../assets/manifestov2.png";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 lg:py-48 px-6 lg:px-16 bg-[hsl(38,6%,8%)]">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        <div className="lg:col-span-5 lg:col-start-1 order-2 lg:order-1">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={manifestoImg}
              alt="Praticante de jiu-jitsu em meditação"
              loading="lazy"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 ring-1 ring-ash/40" />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 space-y-10">
          <p className="label-eyebrow text-terra">01 — Manifesto</p>

          <h2 className="font-serif-editorial text-4xl md:text-5xl lg:text-6xl leading-tight text-bone">
            Não vendemos roupas.<br />
            <span className="italic text-bone-dim">Vestimos uma filosofia.</span>
          </h2>

          <div className="space-y-6 text-bone-dim text-base md:text-lg leading-relaxed max-w-xl font-light">
            <p>
              O Jiu-Jitsu não começa na faixa preta. Começa no chão — no primeiro
              tombo, na primeira manhã em que você poderia ter ficado em casa e
              escolheu treinar.
            </p>
            <p>
              Arte de Chão nasce dessa devoção silenciosa. Cada peça é pensada
              para quem entende que a disciplina é uma arte, e que a humildade
              é o tecido que sustenta tudo.
            </p>
            <p className="text-bone italic font-serif-editorial text-2xl pt-4 border-t border-ash">
              "O chão ensina o que a vitória não consegue."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
