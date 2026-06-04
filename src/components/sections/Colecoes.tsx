import forjaArt from "../../assets/forjavitrine.png";
import legadoArt from "../../assets/legadovitrine.png";
import doChaoArt from "../../assets/dochaovitrine.png";

type Chapter = {
  number: string;
  name: string;
  meaning: string;
  image: string;
  status: "available" | "locked";
  href?: string;
  hoverQuote?: string;
};

const chapters: Chapter[] = [
  {
    number: "01",
    name: "Do Chão",
    meaning: "O começo.",
    image: doChaoArt,
    status: "available",
    href: "#do-chao",
  },
  {
    number: "02",
    name: "Forja",
    meaning: "A transformação.",
    image: forjaArt,
    status: "locked",
    hoverQuote: "Ninguém nasce pronto.\nSe forja.",
  },
  {
    number: "03",
    name: "Legado",
    meaning: "O que permanece.",
    image: legadoArt,
    status: "locked",
    hoverQuote: "O que permanece\nnão se ensina.\nSe vive.",
  },
];

export default function Colecoes() {
  return (
    <section
      id="colecoes"
      className="relative py-32 lg:py-48 px-6 lg:px-16 border-t border-ash/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 lg:mb-28 space-y-6 max-w-2xl">
          <p className="label-eyebrow">02 — Capítulos</p>
          <h2 className="font-serif-editorial text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95]">
            Uma história<br />em três tempos.
          </h2>
          <p className="text-bone-dim leading-relaxed max-w-md font-serif-editorial italic text-lg">
            Cada coleção é um capítulo. Do chão à forja, da forja ao legado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {chapters.map((c) => (
            <ChapterCard key={c.number} chapter={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChapterCard({ chapter }: { chapter: Chapter }) {
  const isLocked = chapter.status === "locked";

  const Inner = (
    <article className="group relative h-full">
      <div className="relative overflow-hidden aspect-[3/4] bg-secondary">
        <img
          src={chapter.image}
          alt={chapter.name}
          loading="lazy"
          width={1024}
          height={1365}
          className={[
            "w-full h-full object-cover grayscale transition-all duration-[1500ms] ease-out",
            isLocked
              ? "opacity-90 contrast-90 brightness-90 group-hover:brightness-110"
              : "group-hover:scale-105",
          ].join(" ")}
        />

        {/* overlay for locked cards */}
        {isLocked && (
          <div className="absolute inset-0 bg-ink/60 transition-colors duration-700 group-hover:bg-ink/45" />
        )}
        {!isLocked && (
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-700" />
        )}

        {/* chapter number, top-left */}
        <span className="absolute top-5 left-5 label-eyebrow text-bone">
          Coleção {chapter.number}
        </span>

        {/* center seal for locked */}
        {isLocked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="space-y-3">
              <div className="h-px w-16 bg-bone/70 mx-auto" />
              <p className="label-eyebrow text-bone tracking-[0.4em]">Em Breve</p>
              <div className="h-px w-16 bg-bone/70 mx-auto" />
            </div>

            {chapter.hoverQuote && (
              <p
                className="absolute bottom-10 left-6 right-6 font-serif-editorial italic text-bone text-xl md:text-2xl leading-snug opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 whitespace-pre-line"
              >
                {chapter.hoverQuote}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif-editorial text-3xl md:text-4xl text-bone leading-none">
            {chapter.name}
          </h3>
          <p className="font-serif-editorial italic text-bone-dim mt-2">
            {chapter.meaning}
          </p>
        </div>
        {!isLocked ? (
          <a
            href={chapter.href}
            className="label-eyebrow text-bone editorial-link whitespace-nowrap pt-2"
          >
            Ver Coleção →
          </a>
        ) : (
          <span className="label-eyebrow text-bone-dim/60 whitespace-nowrap pt-2">
            ∞
          </span>
        )}
      </div>
    </article>
  );

  if (isLocked) {
    return (
      <div
        aria-disabled
        className="cursor-default select-none"
        tabIndex={-1}
      >
        {Inner}
      </div>
    );
  }

  return Inner;
}