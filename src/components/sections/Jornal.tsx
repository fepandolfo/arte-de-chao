import { journalEntries } from "../../data/products";
import j1 from "../../assets/journal-1.jpg";
import j2 from "../../assets/journal-2.jpg";
import j3 from "../../assets/journal-3.jpg";

const images = [j1, j2, j3];

export default function Jornal() {
  return (
    <section id="jornal" className="relative py-32 lg:py-48 px-6 lg:px-16 border-t border-ash/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 lg:mb-24">
          <div className="space-y-4">
            <p className="label-eyebrow">04 — Editorial</p>
            <h2 className="font-serif-editorial text-5xl md:text-7xl text-bone">
              Jornal
            </h2>
          </div>
          <a href="#" className="label-eyebrow editorial-link self-start md:self-auto">
            Ver Arquivo Completo →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {journalEntries.map((j, i) => (
            <article key={j.slug} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={images[i]}
                  alt={j.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="label-eyebrow">{j.date}</span>
                <span className="w-6 h-px bg-ash" />
                <span className="label-eyebrow">{j.readTime}</span>
              </div>
              <h3 className="font-serif-editorial text-2xl md:text-3xl text-bone leading-tight group-hover:italic transition-all duration-500">
                {j.title}
              </h3>
              <p className="mt-3 text-bone-dim leading-relaxed text-sm">{j.excerpt}</p>
              <span className="inline-block mt-5 label-eyebrow editorial-link">Ler →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
