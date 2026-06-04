import { Link } from "react-router-dom";
import { products } from "@/data/products";

const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

export default function DoChao() {
  const items = products.filter((p) => p.collection === "DO CHÃO");

  return (
    <section id="do-chao" className="relative border-t border-ash/40">
      {/* Editorial header */}
      <header className="px-6 lg:px-16 pt-32 lg:pt-48 pb-24 lg:pb-40 max-w-6xl mx-auto">
        <p className="label-eyebrow mb-10">Coleção 01 — Capítulo Inaugural</p>
        <h2 className="font-serif-editorial text-bone leading-[0.9] text-[18vw] md:text-[14vw] lg:text-[11rem] tracking-[-0.04em]">
          Do Chão.
        </h2>
        <div className="mt-16 lg:mt-20 grid lg:grid-cols-12 gap-x-12 gap-y-10">
          <p className="lg:col-span-7 lg:col-start-1 font-serif-editorial italic text-bone text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
            "O corpo que aprende no chão não esquece mais."
          </p>
          <div className="lg:col-span-4 lg:col-start-9 space-y-5 text-bone-dim font-light leading-relaxed text-sm md:text-base">
            <p>
              Cinco peças. Cinco lições que o tatame entrega antes de qualquer faixa.
              Pressão, ego, raspagem, submissão, respiração — os fundamentos que o
              corpo aprende deitado.
            </p>
            <p>
              Não é uma coleção sobre vestir. É sobre lembrar. Cada camiseta
              carrega uma palavra que o praticante já ouviu por dentro, no escuro
              da academia vazia.
            </p>
            <p className="label-eyebrow pt-4">Edição Limitada · 2026</p>
          </div>
        </div>
      </header>

      {/* Editorial product chapters */}
      <div className="border-t border-ash/40">
        {items.map((p, idx) => {
          const number = String(idx + 1).padStart(2, "0");
          const isEven = idx % 2 === 0;
          return (
            <article
              key={p.id}
              className="border-b border-ash/40 py-24 lg:py-40 px-6 lg:px-16"
            >
              <div
                className={[
                  "max-w-7xl mx-auto grid lg:grid-cols-12 gap-y-12 gap-x-12 items-center",
                  isEven ? "" : "lg:[&>*:first-child]:order-2",
                ].join(" ")}
              >
                {/* Image */}
                <Link
                  to={`/produto/${p.slug}`}
                  className={[
                    "group block relative overflow-hidden bg-secondary",
                    isEven
                      ? "lg:col-span-7 lg:col-start-1"
                      : "lg:col-span-7 lg:col-start-6",
                  ].join(" ")}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={[1, 2].includes(idx) ? p.gallery[0] : p.image}
                      alt={p.name}
                      loading="lazy"
                      width={1280}
                      height={1600}
                      className="w-full h-full object-cover grayscale transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <span className="absolute top-6 left-6 label-eyebrow text-bone">
                    Peça N° {number}
                  </span>
                </Link>

                {/* Text */}
                <div
                  className={[
                    "space-y-8",
                    isEven
                      ? "lg:col-span-4 lg:col-start-9"
                      : "lg:col-span-4 lg:col-start-1",
                  ].join(" ")}
                >
                  <p className="label-eyebrow">Capítulo {number}</p>
                  <h3 className="font-serif-editorial text-bone text-6xl md:text-7xl lg:text-7xl leading-[0.95] tracking-[-0.02em] uppercase">
                    {p.name}
                  </h3>
                  <p className="font-serif-editorial italic text-bone-dim text-2xl md:text-3xl leading-snug">
                    "{p.tagline}"
                  </p>
                  <p className="text-bone-dim font-light leading-relaxed max-w-md text-sm md:text-base">
                    {p.description}
                  </p>
                  <div className="flex items-baseline justify-between pt-6 border-t border-ash/60 max-w-md">
                    <p className="font-mono-label text-bone text-xs">
                      {formatBRL(p.price)}
                    </p>
                    <Link
                      to={`/produto/${p.slug}`}
                      className="editorial-link label-eyebrow text-bone"
                    >
                      Ver peça →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Closing editorial mark */}
      <div className="px-6 lg:px-16 py-32 lg:py-48 text-center max-w-3xl mx-auto">
        <p className="label-eyebrow mb-8">Fim do Capítulo 01</p>
        <p className="font-serif-editorial italic text-bone text-3xl md:text-4xl leading-[1.2]">
          O chão ensina. O praticante escuta. O resto é repetição.
        </p>
      </div>
    </section>
  );
}
