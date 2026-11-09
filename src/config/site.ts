/**
 * Business configuration. Edit this file to adapt the template to another business.
 * Components read everything (texts, services, images, links) from here.
 */
import hero from "@/assets/hero.jpg";
import aboutAna from "@/assets/about-ana.jpg";
import cleaner from "@/assets/g-cleaner.jpg";
import kitchen from "@/assets/g-kitchen.jpg";
import office from "@/assets/g-office.jpg";
import bathroom from "@/assets/g-bathroom.jpg";
import bedroom from "@/assets/g-bedroom.jpg";

export type ServiceIcon = "home" | "building" | "users" | "hammer" | "sparkles" | "shirt";

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: ServiceIcon;
}

export const site = {
  name: "Ana Lessa",
  tagline: "Limpeza e cuidado da casa",
  shortDescription:
    "Sou a Ana Lessa. Cuido da limpeza da sua casa e da sua roupa com carinho, dedicação e confiança.",
  demoNotice:
    "Demonstração preparada por Anderson Neto para a Ana Lessa. Textos e imagens ilustrativos, a confirmar antes da publicação.",
  instagram: "https://www.instagram.com/ana_empreguete/",
  credit: { label: "Desenvolvido por Anderson Neto", url: "https://andersonneto.gt.tc/freelancer.html" },
  /** Future integration: set a real, authorised WhatsApp number (e.g. "3519XXXXXXXX"). Null = demo mode. */
  whatsappNumber: "351933955660" as string | null,

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Sobre", href: "#sobre" },
    { label: "Perguntas frequentes", href: "#faq" },
    { label: "Contactos", href: "#orcamento" },
  ],

  hero: {
    eyebrow: "Limpeza da casa e engomar roupa",
    title: "Mais tempo para si. Eu cuido do resto!",
    subtitle:
      "Faço a limpeza da sua casa e trato da sua roupa com carinho, dedicação e confiança, para a sua casa brilhar.",
    image: hero,
    imageAlt: "Sala de estar limpa e luminosa (imagem ilustrativa)",
  },

  services: {
    title: "Os meus serviços",
    subtitle: "Cuido da sua casa como se fosse a minha, com atenção a cada detalhe.",
    items: [
      { id: "Limpeza da casa", name: "Limpeza da casa", icon: "home", description: "Limpeza completa da sua casa, com atenção aos detalhes." },
      { id: "Engomar roupa", name: "Engomar roupa", icon: "shirt", description: "A sua roupa bem cuidada e passada a ferro com capricho." },
      { id: "Limpeza profunda", name: "Limpeza profunda", icon: "sparkles", description: "Uma limpeza mais detalhada para cozinhas, casas de banho e cantos esquecidos." },
      { id: "Limpeza de escritórios", name: "Limpeza de escritórios", icon: "building", description: "Espaços de trabalho limpos e agradáveis para o dia a dia." },
    ] as Service[],
  },

  steps: {
    title: "Simples do primeiro contacto ao orçamento",
    items: [
      { title: "Escolha o serviço", text: "Indique o tipo de limpeza de que precisa." },
      { title: "Conte-me os detalhes", text: "Indique a localidade, o tipo de casa e o que precisa." },
      { title: "Receba a minha resposta", text: "Recebo o seu pedido no WhatsApp e respondo-lhe para combinarmos tudo." },
    ],
  },

  about: {
    title: "Olá, sou a Ana!",
    text: "Cuido da limpeza de casas e da roupa das famílias com carinho, dedicação e confiança. Gosto de deixar cada casa a brilhar e de falar consigo de forma simples, do primeiro contacto ao trabalho feito.",
    notice: "Demonstração: textos a confirmar com a Ana Lessa.",
    image: aboutAna,
    imageAlt: "Ana Lessa, profissional de limpeza, a sorrir",
    points: ["Trabalho com carinho e atenção aos detalhes", "Fala diretamente comigo, sem intermediários", "Combinamos o orçamento antes de começar"],
  },

  gallery: {
    title: "Casas que ficam a brilhar",
    note: "Imagens ilustrativas para demonstração. Serão substituídas por fotografias de trabalhos da Ana.",
    images: [
      { src: hero, alt: "Sala de estar limpa e luminosa", caption: "Salas" },
      { src: kitchen, alt: "Cozinha moderna e organizada", caption: "Cozinhas" },
      { src: office, alt: "Espaço de escritório arrumado", caption: "Escritórios" },
      { src: bathroom, alt: "Casa de banho cuidada", caption: "Casas de banho" },
      { src: bedroom, alt: "Quarto luminoso com cama feita", caption: "Interiores luminosos" },
      { src: cleaner, alt: "Profissional a limpar o chão", caption: "Profissionais" },
    ],
  },

  quote: {
    title: "Peça o seu orçamento",
    subtitle: "Preencha os detalhes e envie-me o pedido diretamente por WhatsApp.",
    services: ["Limpeza da casa", "Engomar roupa", "Limpeza profunda", "Limpeza de escritórios", "Outro serviço"],
    spaces: ["Apartamento T0/T1", "Apartamento T2", "Apartamento T3 ou maior", "Moradia", "Escritório", "Outro espaço"],
  },

  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Que serviços faz?", a: "Faço limpeza da casa, limpezas profundas, limpeza de escritórios e engomo roupa." },
      { q: "Em que zonas trabalha?", a: "Indique a sua localidade no pedido e digo-lhe se consigo ir até si." },
      { q: "Como posso pedir um orçamento?", a: "Escolha o serviço, preencha os detalhes e envie-me o pedido por WhatsApp. Respondo-lhe para combinarmos tudo." },
      { q: "Faz limpezas regulares?", a: "Sim. Pode pedir uma limpeza pontual ou regular, por exemplo todas as semanas ou de 15 em 15 dias." },
      { q: "O preço depende do tamanho da casa?", a: "Sim. O valor depende do tamanho da casa, do tipo de limpeza e da frequência." },
    ],
  },

  finalCta: {
    title: "A sua casa merece brilhar. Peça já o seu orçamento!",
    text: "Escolha o serviço de que precisa e envie-me o pedido em poucos passos.",
    button: "Pedir orçamento",
  },
};
