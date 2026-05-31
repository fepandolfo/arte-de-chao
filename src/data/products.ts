const tee = "/hero.png";
const hoodie = "/hero.png";
const gi = "/hero.png";

export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: "DO CHÃO" | "FORJA" | "LEGADO";
  price: number; // BRL
  image: string;
  tagline: string;
  description: string;
  composition: string;
  origin: string;
  sizes: string[];
  available: boolean;
};

export const products: Product[] = [
  {
    id: "dc-01",
    slug: "camiseta-fundamento",
    name: "Camiseta Fundamento",
    collection: "DO CHÃO",
    price: 289,
    image: tee,
    tagline: "Onde tudo começa.",
    description:
      "Algodão pesado, corte reto, costuras reforçadas. Uma peça que carrega o silêncio do tatame antes do primeiro treino. Feita para durar mais que a primeira faixa.",
    composition: "100% algodão orgânico 240g/m². Tingimento reativo preto profundo.",
    origin: "Confeccionada em São Paulo. Tecida no Ceará.",
    sizes: ["P", "M", "G", "GG"],
    available: true,
  },
  {
    id: "dc-02",
    slug: "moletom-chao",
    name: "Moletom Chão",
    collection: "DO CHÃO",
    price: 749,
    image: hoodie,
    tagline: "O peso de quem persiste.",
    description:
      "Oversize, felpa interna densa, capuz forrado. Inspirado nas horas frias antes do treino — quando ainda existe só o chão e a próxima respiração.",
    composition: "92% algodão · 8% poliéster reciclado · 460g/m².",
    origin: "Confeccionada em São Paulo.",
    sizes: ["P", "M", "G", "GG"],
    available: true,
  },
  {
    id: "dc-03",
    slug: "kimono-origem",
    name: "Kimono Origem",
    collection: "DO CHÃO",
    price: 1490,
    image: gi,
    tagline: "A peça que define o praticante.",
    description:
      "Trançado pearl weave 550gsm. Calça ripstop. Sem estampas externas — apenas a etiqueta interna que carrega o nome de quem a vestiu primeiro.",
    composition: "Pearl weave 100% algodão · 550gsm. Calça ripstop 10oz.",
    origin: "Tecido e confeccionado no Brasil.",
    sizes: ["A1", "A2", "A3", "A4"],
    available: true,
  },
];

export const upcomingCollections = [
  {
    name: "FORJA",
    subtitle: "Inverno · 2026",
    description: "O calor que molda. Peças nascidas do atrito.",
  },
  {
    name: "LEGADO",
    subtitle: "Outono · 2026",
    description: "O que se herda não se compra. O que se constrói, fica.",
  },
];

export const journalEntries = [
  {
    slug: "antes-da-faixa",
    title: "Antes da faixa, existe o chão",
    excerpt:
      "Sobre o que se aprende quando ninguém está olhando. A primeira lição não é de técnica — é de presença.",
    date: "12 · MAR · 2026",
    readTime: "6 min",
  },
  {
    slug: "irmandade-do-tatame",
    title: "A irmandade do tatame",
    excerpt:
      "Quem te quebra também te ensina a levantar. Notas sobre o vínculo silencioso entre treinos.",
    date: "28 · FEV · 2026",
    readTime: "8 min",
  },
  {
    slug: "disciplina-como-oficio",
    title: "Disciplina como ofício",
    excerpt:
      "Não é sobre força. É sobre voltar — todos os dias — para o mesmo chão, com a mesma humildade.",
    date: "14 · FEV · 2026",
    readTime: "5 min",
  },
];
