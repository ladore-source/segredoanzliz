// DADOS DEMONSTRATIVOS — serão editáveis pelo painel administrativo.
export const siteConfig = {
  creatorName: "ANZ LIZ",
  heroTitle: "Quer me ver\nseminua?",
  heroSubtitle: "Meu lado mais provocante está reservado para quem assina.",
  heroCta: "QUERO ACESSO EXCLUSIVO 🔥",
  checkoutUrl: "https://pay.cakto.com.br/3fkmsmz_1258086",
  heroVideoUrl: "/videos/preview.mp4",
  heroImages: {
    left: "/images/hero-left.jpg",
    right: "/images/hero-right.jpg",
  },
  plan: {
    name: "Acesso VIP",
    priceCents: 3400,
    benefits: [
      "Fotos exclusivas.",
      "Vídeos sensuais exclusivos.",
      "Atualizações frequentes.",
      "Conteúdo disponível apenas para assinantes.",
    ],
  },
};

export const formatBRL = (cents: number) =>
  (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
