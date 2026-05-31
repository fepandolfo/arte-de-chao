import { Link, useParams, Navigate } from "react-router-dom";
import { products } from "../data/products";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [size, setSize] = useState<string | null>(null);
  const { add } = useCart();

  useEffect(() => {
    if (product) document.title = `${product.name} — Arte de Chão`;
  }, [product]);

  if (!product) return <Navigate to="/" replace />;

  const handleAdd = () => {
    if (!size) return;
    add(product.id, size);
  };

  return (
    <div className="lg:pl-24 xl:pl-28 pt-16 lg:pt-0 min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Image */}
        <div className="relative bg-secondary aspect-square lg:aspect-auto lg:min-h-screen">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          <span className="absolute top-6 left-6 label-eyebrow">{product.collection}</span>
        </div>

        {/* Info */}
        <div className="px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center max-w-2xl">
          <Link to="/#do-chao" className="label-eyebrow editorial-link mb-10 self-start">
            ← Voltar para a Coleção
          </Link>

          <p className="label-eyebrow">N° {product.id.toUpperCase()}</p>
          <h1 className="font-serif-editorial text-5xl md:text-6xl text-bone mt-3 leading-[0.95]">
            {product.name}
          </h1>
          <p className="font-serif-editorial italic text-bone-dim text-xl mt-3">
            {product.tagline}
          </p>

          <p className="font-mono-label text-bone text-sm mt-8 border-t border-ash pt-6">
            {formatBRL(product.price)}
          </p>

          <p className="text-bone-dim leading-relaxed mt-8 max-w-md font-light">
            {product.description}
          </p>

          {/* Size selector */}
          <div className="mt-10">
            <p className="label-eyebrow mb-4">Selecione o tamanho</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={[
                    "px-5 py-3 border font-mono-label text-xs transition-all duration-300",
                    size === s
                      ? "border-bone bg-bone text-ink"
                      : "border-ash text-bone-dim hover:border-bone hover:text-bone",
                  ].join(" ")}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAdd}
            disabled={!size}
            className="mt-10 py-5 bg-bone text-ink label-eyebrow hover:bg-bone-dim transition-colors duration-500 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {size ? "Adicionar à Sacola" : "Selecione um Tamanho"}
          </button>

          {/* Details */}
          <dl className="mt-16 grid sm:grid-cols-2 gap-8 border-t border-ash pt-10">
            <div>
              <dt className="label-eyebrow mb-2">Composição</dt>
              <dd className="text-bone-dim text-sm leading-relaxed font-light">
                {product.composition}
              </dd>
            </div>
            <div>
              <dt className="label-eyebrow mb-2">Origem</dt>
              <dd className="text-bone-dim text-sm leading-relaxed font-light">
                {product.origin}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
