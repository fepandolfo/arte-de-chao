import { upcomingCollections } from "../../data/products";

export default function EmBreve() {
  return (
    <section id="em-breve" className="relative py-32 lg:py-48 px-6 lg:px-16 border-t border-ash/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 lg:mb-24 space-y-4">
          <p className="label-eyebrow">03 — Próximos Capítulos</p>
          <h2 className="font-serif-editorial text-4xl md:text-6xl text-bone-dim italic">
            Em Breve.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {upcomingCollections.map((c) => (
            <article
              key={c.name}
              className="group relative aspect-[4/5] overflow-hidden border border-ash/60 bg-ink"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
              <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12">
                <p className="label-eyebrow text-bone-dim/60">{c.subtitle}</p>

                <div className="space-y-4">
                  <h3 className="font-serif-editorial text-7xl md:text-8xl lg:text-9xl text-bone/30 leading-none tracking-tight">
                    {c.name}
                  </h3>
                  <p className="font-serif-editorial italic text-xl text-bone-dim/70 max-w-xs">
                    {c.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="label-eyebrow text-bone-dim/60">— Aguarde</span>
                  <span className="label-eyebrow text-bone-dim/60">∞</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
