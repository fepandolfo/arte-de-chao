import { Navigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { journalArticles } from "@/data/journalArticles";

export default function JournalArticle() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const article =
    journalArticles[slug as keyof typeof journalArticles];

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="lg:pl-24 xl:pl-28 min-h-screen bg-ink text-bone">

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <img
          src={article.hero}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover grayscale"

        />


        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/55 to-ink" />

        <div className="relative h-full flex items-end">
          <div className="max-w-3xl px-6 lg:px-16 pb-24 lg:pb-28">
            <p className="label-eyebrow text-terra mb-6 text-[0.7rem]">
              {article.date} — {article.readTime}
            </p>

            <h1 className="font-serif-editorial text-bone text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-[-0.03em]">
              {article.title}
            </h1>

            <p className="font-serif-editorial italic text-bone-dim text-xl md:text-3xl mt-8 max-w-2xl">
              "{article.subtitle}"
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="px-6 lg:px-16 py-24 lg:py-40 max-w-6xl mx-auto">

        <Link
          to="/#jornal"
          className="label-eyebrow editorial-link text-terra text-[0.7rem]"
        >
          ← Voltar ao Jornal
        </Link>

        <div className="mt-24">

          {/* LEAD */}
          <div className="max-w-4xl">
            <p className="font-serif-editorial text-bone text-4xl md:text-5xl leading-[1.4] mb-24">
              {article.lead}
            </p>
          </div>

          {/* PRIMEIRA PARTE */}
          <div className="max-w-4xl">
            {article.content.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="text-xl md:text-2xl leading-[1.9] text-bone-dim mb-10"
              >
                {p}
              </p>
            ))}
          </div>

          {/* CITAÇÃO CENTRAL */}
          <div className="border-y border-terra/30 py-24 my-40">
            <p className="font-serif-editorial italic text-center text-4xl md:text-6xl leading-[1.2]">
              "{article.middleQuote}"
            </p>
          </div>

          {/* SEGUNDA PARTE */}
          <div className="max-w-4xl">
            {article.content2.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="text-xl md:text-2xl leading-[1.9] text-bone-dim mb-10"
              >
                {p}
              </p>
            ))}
          </div>

          {/* ENCERRAMENTO */}
          <div className="max-w-4xl mt-32">
            {article.ending.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="font-serif-editorial text-2xl md:text-3xl leading-[1.8] text-bone mb-12"
              >
                {p}
              </p>

            ))}
          </div>
          {/* QUOTE FINAL */}
          <div className="border-t border-terra/30 mt-32 pt-20">
            <p className="font-serif-editorial italic text-4xl md:text-5xl text-center leading-[1.2] text-terra">
              "{article.quote}"
            </p>
          </div>
        </div>

      </section>

    </div>

  );
}