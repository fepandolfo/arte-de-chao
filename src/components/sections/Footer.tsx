export default function Footer() {
  return (
    <footer className="border-t border-ash/40 px-6 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-end">
        <div>
          <p className="font-serif-editorial text-3xl text-bone">Arte de Chão</p>
          <p className="label-eyebrow mt-2">MMXXVI · São Paulo</p>
        </div>

        <div className="flex flex-col gap-2 md:items-center">
          <a href="#" className="label-eyebrow editorial-link">Instagram</a>
          <a href="#" className="label-eyebrow editorial-link">Contato</a>
          <a href="#" className="label-eyebrow editorial-link">Trocas & Devoluções</a>
        </div>

        <div className="md:text-right space-y-2">
          <p className="font-serif-editorial italic text-bone-dim">
            "Antes da faixa, existe o chão."
          </p>
          <p className="label-eyebrow">© Arte de Chão · Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
