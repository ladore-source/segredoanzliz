// DADOS DEMONSTRATIVOS — serão editáveis pelo painel administrativo.
export const siteConfig = {
  creatorName: "[NOME DA CRIADORA]",
  heroTitle: "Quer me ver seminua?",
  heroSubtitle: "Meu lado mais provocante está reservado para quem assina.",
  heroCta: "QUERO ACESSO EXCLUSIVO 🔥",
  heroVideoUrl: "" as string, // vazio = placeholder elegante
  plan: {
    name: "Acesso VIP",
    priceCents: 2990,
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
