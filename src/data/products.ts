import heropressao from "@/assets/heropressao.png";
import pressao from "@/assets/pressao1.png";
import pressao2 from "@/assets/pressao2.png";
import pressao3 from "@/assets/pressao3.png";
import chokeHero from "@/assets/herochoketheego.png";
import choke from "@/assets/choketheego1.png";
import choke2 from "@/assets/choketheego2.png";
import choke3 from "@/assets/choketheego3.png";
import raspagemHero from "@/assets/heroraspagem.png";
import raspagem from "@/assets/raspagem1.png";
import raspagem2 from "@/assets/raspagem2.png";
import raspagem3 from "@/assets/raspagem3.png";
import herosubmit from "@/assets/herosubmit.png";
import submit from "@/assets/submit1.png";
import submit2 from "@/assets/submit2.png";
import submit3 from "@/assets/submit3.png";
import respirehero from "@/assets/respirehero.png";
import respirehero1 from "@/assets/respirehero.png";
import respire from "@/assets/respire1.png";
import respire1 from "@/assets/respire2.png";
import respire2 from "@/assets/respire3.png";

export type Product = {
  id: string;
  slug: string;
  name: string;
  number: string;
  collection: "DO CHÃO" | "FORJA" | "LEGADO";
  price: number; // BRL
  image: string;
  featureImage: string;
  gallery: string[];
  tagline: string;
  description: string;
  editorialText: string;
  finalQuote: string;
  composition: string;
  origin: string;
  reservaUrl: string;
  available: boolean;
};

export const products: Product[] = [
  {
    id: "dc-01",
    slug: "pressao",
    name: "PRESSÃO",
    number: "01",
    collection: "DO CHÃO",
    price: 129,
    image: heropressao,
    featureImage: pressao,
    gallery: [pressao, pressao2, pressao3],
    tagline: "Revela o caráter.",
    description:
      "Modelagem oversized. 100% algodão. Produção sob demanda.",
    editorialText:
      "Pressão não machuca. Pressão revela. Embaixo do peso do outro, o praticante descobre o que sobra de si quando o ar fica curto e o orgulho não cabe mais. A primeira peça da coleção é sobre o instante anterior à reação — o segundo em que se decide se vai bater, se vai virar, ou se vai aprender. Toda lição séria começa assim: comprimido contra o chão, sem espaço para mentir.",
    finalQuote: "Embaixo do peso, sobra apenas o que é verdadeiro.",
    composition: "100% algodão orgânico 240g/m². Tingimento reativo preto profundo.",
    origin: "Confeccionada no Rio de Janeiro. RESERVA",
    reservaUrl: "https://www.reserva.ink/",
    available: true,
  },
  {
    id: "dc-02",
    slug: "choke-the-ego",
    name: "CHOKE THE EGO",
    number: "02",
    collection: "DO CHÃO",
    price: 129,
    image: chokeHero,
    featureImage: choke,
    gallery: [choke, choke2, choke3],
    tagline: "A finalização mais difícil.",
    description: "Modelagem oversized. 100% algodão. Produção sob demanda.",
    editorialText:
      "Existe uma luta que nenhum professor finaliza por você. É silenciosa, acontece no caminho de casa, no espelho, no momento em que se escolhe voltar para o tatame mesmo sabendo que vai perder de novo. Choke the Ego não é sobre humilhação — é sobre o ofício diário de apertar, com as próprias mãos, o adversário interno que quer parecer maior do que é.",
    finalQuote: "O adversário mais difícil não está na sua frente.",
    composition: "100% algodão orgânico 240g/m². Tingimento reativo preto profundo.",
    origin: "Confeccionada no Rio de Janeiro. RESERVA.",
    reservaUrl: "https://www.reserva.ink/",
    available: true,
  },
  {
    id: "dc-03",
    slug: "raspagem",
    name: "RASPAGEM",
    number: "03",
    collection: "DO CHÃO",
    price: 129,
    image: raspagemHero,
    featureImage: raspagem,
    gallery: [raspagem, raspagem2, raspagem3],
    tagline: "Vire o jogo. Sempre.",
    description: "Modelagem oversized. 100% algodão. Produção sob demanda.",
    editorialText:
      "Estar embaixo é apenas geografia, não destino. A raspagem é a tradução técnica de uma crença mais antiga: nenhuma posição é definitiva. Quem aprende a virar no tatame leva o gesto para fora — para a semana ruim, para o ano difícil, para a derrota que parecia final. Aprende-se, no chão, a transformar peso em alavanca.",
    finalQuote: "Estar embaixo é apenas a posição anterior à virada.",
    composition: "100% algodão orgânico 240g/m².",
    origin: "Confeccionada no Rio de Janeiro. RESERVA.",
    reservaUrl: "https://www.reserva.ink/",
    available: true,
  },
  {
    id: "dc-04",
    slug: "submit",
    name: "SUBMIT",
    number: "04",
    collection: "DO CHÃO",
    price: 129,
    image: herosubmit,
    featureImage: submit,
    gallery: [submit, submit2, submit3],
    tagline: "Aprenda a ceder.",
    description: "Modelagem oversized. 100% algodão. Produção sob demanda.",
    editorialText:
      "Bater na palma é o gesto mais maduro do esporte. É reconhecer o limite sem rancor, salvar o corpo para o próximo treino, devolver a honestidade que a luta exige. Quem nunca aprendeu a ceder não treina há muito tempo — treina sozinho. A coleção encontra aqui o seu centro: não há técnica sem rendição, nem evolução sem perda.",
    finalQuote: "Bater é parte do ofício. Voltar amanhã também.",
    composition: "100% algodão orgânico 240g/m².",
    origin: "Confeccionada no Rio de Janeiro. RESERVA.",
    reservaUrl: "https://www.reserva.ink/",
    available: true,
  },
  {
    id: "dc-05",
    slug: "respire",
    name: "RESPIRE",
    number: "05",
    collection: "DO CHÃO",
    price: 129,
    image: respire,
    featureImage: respire,
    gallery: [respire, respire1, respire2],
    tagline: "Calma sob pressão.",
    description: "Modelagem oversized. 100% algodão. Produção sob demanda.",
    editorialText:
      "O praticante avançado é, antes de tudo, alguém que respira. Quando o ar entra com calma, a técnica volta, o tempo se alarga, e o pânico — que é o verdadeiro adversário — perde o jab. Respire encerra a coleção como lembrete físico: a primeira ferramenta nunca foi a força. Sempre foi o ar.",
    finalQuote: "A técnica começa no ar que entra antes do movimento.",
    composition: "100% algodão orgânico 240g/m².",
    origin: "Confeccionada no Rio de Janeiro. RESERVA.",
    reservaUrl: "https://www.reserva.ink/",
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
      "Nem todo irmão compartilha o mesmo sangue. Alguns compartilham o mesmo chão.",
    date: "19 · MAR · 2026",
    readTime: "7 min",
  },
  {
    slug: "disciplina-como-oficio",
    title: "Disciplina como ofício",
    excerpt:
      "Não é sobre força de vontade. É sobre continuar quando ela desaparece.",
    date: "26 · MAR · 2026",
    readTime: "8 min",
  },
];
