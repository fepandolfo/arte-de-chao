export default function Footer() {
  return (
    <footer className="border-t border-terra/40 px-6 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <p className="font-serif-editorial italic text-bone text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight">
          No chão se vê tudo.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-end">

        {/* MARCA */}
        <div>
          <p className="font-serif-editorial text-3xl text-bone">
            Arte de Chão
          </p>

          <p className="label-eyebrow mt-3 text-terra text-[0.7rem]">
            Do chão para o mundo.
          </p>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-3 md:items-center">

          <a
            href="https://instagram.com/arte.dechao"
            target="_blank"
            rel="noreferrer"
            className="label-eyebrow editorial-link text-[0.7rem]"
          >
            Instagram →
          </a>

          <a
            href="mailto:contato.artedechao@gmail.com"
            className="label-eyebrow editorial-link text-[0.7rem]"
          >
            Contato →
          </a>

          <a
            href="https://loja.artedechao.com.br"
            target="_blank"
            rel="noreferrer"
            className="label-eyebrow editorial-link text-[0.7rem]"
          >
            Loja →
          </a>

        </div>

        {/* FRASE */}
        <div className="md:text-right space-y-3">

          <p className="font-serif-editorial italic text-bone-dim ">
            Algumas histórias são contadas.
            <br />
            Outras são construídas.
          </p>

          <p className="label-eyebrow">
            © 2026 Arte de Chão
          </p>

        </div>

      </div>
    </footer>
  );
}