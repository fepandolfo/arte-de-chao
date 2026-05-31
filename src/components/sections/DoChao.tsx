import { Link } from "react-router-dom";
import { products } from "../../data/products";

const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

export default function DoChao() {
  const items = products.filter((p) => p.collection === "DO CHÃO");

  return (
    <section id="do-chao" className="relative py-32 lg:py-48 px-6 lg:px-16 border-t border-ash/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 lg:mb-28">
          <div className="space-y-6">
            <p className="label-eyebrow">02 — Coleção Inaugural</p>
            <h2 className="font-serif-editorial text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95]">
              Do Chão.
            </h2>
            <p className="max-w-md text-bone-dim leading-relaxed">
              Três peças. Uma única ideia: a base. Tudo começa aqui.
            </p>
          </div>
          <p className="label-eyebrow">Disponível · Edição Limitada</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-24">
          {items.map((p, idx) => (
            <Link
              key={p.id}
              to={`/produto/${p.slug}`}
              className={[
                "group block",
                idx === 0 && "lg:col-span-7",
                idx === 1 && "lg:col-span-5 lg:mt-32",
                idx === 2 && "lg:col-span-8 lg:col-start-4",
              ].filter(Boolean).join(" ")}
            >
              <div className="relative overflow-hidden aspect-[3/4] bg-secondary mb-6">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-700" />
                <span className="absolute top-5 left-5 label-eyebrow text-bone">
                  N° 0{idx + 1}
                </span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <div>
                  <h3 className="font-serif-editorial text-3xl md:text-4xl text-bone">
                    {p.name}
                  </h3>
                  <p className="text-bone-dim italic mt-1 font-serif-editorial">
                    {p.tagline}
                  </p>
                </div>
                <p className="font-mono-label text-sm text-bone whitespace-nowrap">
                  {formatBRL(p.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
