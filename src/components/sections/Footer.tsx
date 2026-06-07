export default function Footer() {
  return (
    <footer className="border-t border-ash/40 px-6 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-end">

        {/* MARCA */}
        <div>
          <p className="font-serif-editorial text-3xl text-bone">
            Arte de Chão
          </p>

          <p className="label-eyebrow mt-3">
            Do chão para o mundo.
          </p>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-3 md:items-center">

          <a
            href="https://instagram.com/artedechao"
            target="_blank"
            rel="noreferrer"
            className="label-eyebrow editorial-link"
          >
            Instagram →
          </a>

          <a
            href="mailto:contato.artedechao@gmail.com"
            className="label-eyebrow editorial-link"
          >
            Contato →
          </a>

          <a
            href="https://loja.artedechao.com.br"
            target="_blank"
            rel="noreferrer"
            className="label-eyebrow editorial-link"
          >
            Loja →
          </a>

        </div>

        {/* FRASE */}
        <div className="md:text-right space-y-3">

          <p className="font-serif-editorial italic text-bone-dim">
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