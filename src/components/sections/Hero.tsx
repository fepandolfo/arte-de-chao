import hero from "../../assets/herov2.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden vignette">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Academia de Jiu-Jitsu vazia à noite"
          className="w-full h-full object-cover grayscale opacity-70 animate-slow-pan"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 lg:px-20 py-24 lg:py-20">
        <div className="flex justify-between items-start animate-fade">
          <p className="label-eyebrow text-[0.7rem]">MMXXVI · São Paulo · Brasil</p>
          <p className="label-eyebrow hidden md:block text-[0.7rem]">Coleção 01 — Do Chão</p>
        </div>

        <div className="max-5xl">
          <p className="label-eyebrow mb-4 animate-rise text-[0.7rem]">Arte de Chão</p>
          <h1 className="font-serif-editorial text-6xl sm:text-6xl md:text-6xl lg:text-[9.5rem] leading-[0.95] text-bone animate-rise delay-100">
            Antes da<br />
            <span className="italic font-light">faixa,</span><br />
            existe o <span className="italic font-medium text-terra">chão.</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 animate-rise delay-300">
          <p className="max-w-sm text-bone-dim text-sm leading-relaxed">
            Uma marca para quem entende que o tatame é onde se aprende tudo o que importa —
            inclusive sobre si.
          </p>
          <a
            href="#manifesto"
            className="label-eyebrow editorial-link self-start md:self-end text-[0.7rem]"
          >
            Descer ↓
          </a>
        </div>
      </div>
    </section>
  );
}
