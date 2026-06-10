import { Link, useParams, Navigate } from "react-router-dom";
import { products } from "@/data/products";
import { useEffect } from "react";

const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Arte de Chão`;
    }
  }, [product]);

  if (!product) return <Navigate to="/" replace />;

  const related = products.filter(
    (p) => p.collection === product.collection && p.id !== product.id
  );

  return (
    <div className="lg:pl-24 xl:pl-28 pt-16 lg:pt-0 min-h-screen bg-ink text-bone">
      {/* SEÇÃO 01 — HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/90" />

        <div className="relative h-full flex flex-col justify-between px-6 lg:px-16 py-12 lg:py-16">
          <div className="flex items-start justify-between gap-6">
            <Link to="/#do-chao" className="label-eyebrow editorial-link text-terra text-[0.7rem]">
              ← Voltar
            </Link>
            <p className="label-eyebrow text-terra text-[0.7rem]">Peça N° {product.number}</p>
          </div>

          <div className="max-w-5xl">
            <h1 className="font-serif-editorial text-bone leading-[0.88] text-[18vw] md:text-[12vw] lg:text-[9rem] tracking-[-0.04em]">
              {product.name}
            </h1>
            <p className="font-serif-editorial italic text-bone-dim text-2xl md:text-3xl lg:text-4xl mt-6 leading-snug">
              "{product.tagline}"
            </p>
            <p className="label-eyebrow text-terra mt-8 text-[0.7rem]">
              Coleção {product.number === "01" || product.collection === "DO CHÃO" ? "01" : ""} — {product.collection.charAt(0) + product.collection.slice(1).toLowerCase()}
            </p>
          </div>

          <div className="flex items-end justify-between">
            <p className="label-eyebrow text-bone-dim text-[0.7rem]">Role para ler o capítulo</p>
            <span className="label-eyebrow text-bone-dim text-[0.7rem]">↓</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 02 — O CAPÍTULO */}
      <section className="border-t border-terra/30 px-6 lg:px-16 py-32 lg:py-48">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <p className="label-eyebrow text-terra text-[0.7rem]">O Capítulo</p>
            <p className="font-mono-label text-bone-dim text-xs mt-3">N° {product.number}</p>
          </div>
          <div className="lg:col-span-9">
            <p className="font-serif-editorial text-bone text-2xl md:text-3xl lg:text-[2rem] leading-[1.35] font-light">
              {product.editorialText}
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 03 — GALERIA EDITORIAL */}
      {/* SEÇÃO 03 — GALERIA EDITORIAL */}
      <section className="border-t border-ash/40">
        <div className="px-6 lg:px-16 pt-24 lg:pt-32 pb-16">
          <div className="max-w-7xl mx-auto">
            <p className="label-eyebrow text-terra text-[0.7rem]">Reportagem Visual</p>
          </div>
        </div>

        <div className="space-y-24 lg:space-y-40 pb-24 lg:pb-40">

          {/* FOTO 01 */}
          <figure className="px-6 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <img
                src={product.gallery[0]}
                alt={`${product.name} — imagem 01`}
                loading="lazy"
                className="w-full h-auto grayscale"
              />
              <figcaption className="label-eyebrow text-terra mt-4 text-[0.7rem]">
                01 · {product.name}
              </figcaption>
            </div>
          </figure>

          {/* FOTO 02 */}
          <figure className="px-6 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <img
                src={product.gallery[1]}
                alt={`${product.name} — imagem 02`}
                loading="lazy"
                className="w-full h-auto grayscale"
              />
              <figcaption className="label-eyebrow text-terra mt-4 text-[0.7rem]">
                02 · {product.name}
              </figcaption>
            </div>
          </figure>

          {/* FOTO 03 */}
          <figure className="px-6 lg:px-16">
            <div className="max-w-5xl mx-auto">
              <img
                src={product.gallery[2]}
                alt={`${product.name} — imagem 03`}
                loading="lazy"
                className="w-full h-auto grayscale"
              />
              <figcaption className="label-eyebrow text-terra mt-4 text-[0.7rem]">
                03 · {product.name}
              </figcaption>
            </div>
          </figure>

        </div>
      </section>

      {/* SEÇÃO 04 — A PEÇA */}
      <section className="border-t border-ash/40 px-6 lg:px-16 py-32 lg:py-48">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-secondary">
            <img
              src={product.featureImage}
              alt={product.name}
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div>
            <p className="label-eyebrow text-terra text-[0.7rem]">A Peça</p>
            <h2 className="font-serif-editorial text-bone text-5xl md:text-6xl mt-4 leading-[0.95] tracking-[-0.02em]">
              {product.name}
            </h2>

            <dl className="mt-12 space-y-5 border-t border-ash/60 pt-8">
              {[
                ["Coleção", `${product.collection}`],
                ["Modelagem", "Oversized"],
                ["Tecido", "100% algodão orgânico"],
                ["Produção", "Sob demanda"],
                ["Origem", product.origin],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-12 gap-4 pb-5 border-b border-ash/40"
                >
                  <dt className="col-span-4 label-eyebrow">{k}</dt>
                  <dd className="col-span-8 text-bone-dim font-light text-sm md:text-base leading-relaxed">
                    {v}
                  </dd>
                </div>
              ))}
              <div className="grid grid-cols-12 gap-4 pt-4">
                <dt className="col-span-4 label-eyebrow">Preço</dt>
                <dd className="col-span-8 font-serif-editorial text-bone text-3xl">
                  {formatBRL(product.price)}
                </dd>
              </div>
            </dl>

            <a
              href={product.reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex w-full items-center justify-between gap-4 py-5 px-6 bg-bone text-ink label-eyebrow hover:bg-bone-dim transition-colors duration-500 text-[0.7rem]"
            >
              <span>Continuar para Compra</span>
              <span>→</span>
            </a>
            <p className="label-eyebrow text-terra mt-4 text-[0.7rem]">
              Venda realizada na Reserva.ink
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 05 — LIÇÃO */}
      <section className="border-t border-ash/40 px-6 lg:px-16 py-40 lg:py-64">
        <div className="max-w-4xl mx-auto text-center">
          <p className="label-eyebrow text-terra mb-12 text-[0.7rem]">A Lição</p>
          <p className="font-serif-editorial italic text- text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-[-0.01em]">
            "{product.finalQuote}"
          </p>
        </div>
      </section>

      {/* SEÇÃO 06 — CONTINUAR A JORNADA */}
      <section className="border-t border-ash/40 px-6 lg:px-16 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="label-eyebrow text-terra mb-4 text-[0.7rem]">Continuar a Jornada</p>
              <h3 className="font-serif-editorial text-bone text-4xl md:text-5xl leading-[0.95]">
                Outras peças da coleção
              </h3>
            </div>
            <Link to="/#do-chao" className="label-eyebrow editorial-link hidden md:inline text-[0.7rem]">
              Ver coleção →
            </Link>
          </div>

          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {related.map((r) => (
              <li key={r.id}>
                <Link to={`/produto/${r.slug}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-secondary">
                    <img
                      src={r.gallery[0]}
                      alt={r.name}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="label-eyebrow text-bone-dim mt-4">N° {r.number}</p>
                  <p className="font-serif-editorial text-bone text-xl md:text-2xl mt-1">
                    {r.name}
                  </p>
                  <p className="font-serif-editorial italic text-bone-dim text-sm mt-1">
                    "{r.tagline}"
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-ash/40 px-6 lg:px-16 py-12 text-center">
        <Link
          to="/#do-chao"
          className="label-eyebrow editorial-link text-terra text-[0.7rem]"
        >
          ← Retornar ao Início
        </Link>
      </footer>
    </div>
  );
}
