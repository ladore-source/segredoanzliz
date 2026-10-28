import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { siteConfig, formatBRL } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.creatorName} — Acesso VIP exclusivo` },
      { name: "description", content: "Conteúdo exclusivo para assinantes maiores de 18 anos. Assine via Pix." },
      { property: "og:title", content: `${siteConfig.creatorName} — Acesso VIP` },
      { property: "og:description", content: "Meu lado mais provocante está reservado para quem assina." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function AgeGate({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6 backdrop-blur-xl">
      <div className="glass max-w-sm rounded-3xl p-8 text-center">
        <p className="text-5xl font-display text-primary">18+</p>
        <h2 className="mt-4 font-display text-2xl">Conteúdo adulto</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Este site contém material destinado exclusivamente a maiores de 18 anos. Ao continuar, você confirma ter 18 anos ou mais.
        </p>
        <button onClick={onConfirm} className="bg-cta mt-6 w-full rounded-full py-4 font-semibold text-primary-foreground transition hover:scale-[1.02]">
          Tenho 18 anos ou mais
        </button>
        <a href="https://www.google.com" className="mt-3 block text-sm text-muted-foreground underline">Sair</a>
      </div>
    </div>
  );
}

function PixModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-background/80 p-4 backdrop-blur-md sm:items-center">
      <div className="glass w-full max-w-md rounded-3xl p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl">Pagamento via Pix</h3>
          <button onClick={onClose} aria-label="Fechar" className="text-2xl text-muted-foreground">×</button>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {siteConfig.plan.name} · <span className="text-foreground">{formatBRL(siteConfig.plan.priceCents)}/mês</span>
        </p>
        <div className="mt-6 rounded-2xl border border-primary/40 bg-wine/40 p-5 text-sm">
          <p className="font-semibold text-primary">Integração Pix ainda não configurada</p>
          <p className="mt-2 text-muted-foreground">
            Nenhuma cobrança é gerada nem simulada. Para ativar, a proprietária precisa conectar um provedor de Pix que aceite conteúdo adulto e informar as credenciais no painel administrativo.
          </p>
        </div>
        <button disabled className="mt-5 w-full rounded-full bg-muted py-4 font-semibold text-muted-foreground">
          COPIAR CÓDIGO PIX
        </button>
      </div>
    </div>
  );
}

function Index() {
  const [adult, setAdult] = useState(true);
  const [checkout, setCheckout] = useState(false);
  useEffect(() => setAdult(localStorage.getItem("age-ok") === "1"), []);
  const { plan } = siteConfig;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {!adult && <AgeGate onConfirm={() => { localStorage.setItem("age-ok", "1"); setAdult(true); }} />}
      {checkout && <PixModal onClose={() => setCheckout(false)} />}

      <section className="hero-section bg-hero flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-14 text-center sm:px-8 sm:py-16">
        <div className="hero-gallery" aria-label="Galeria de fotos e vídeo">
          <div className="hero-gallery__photo-frame hero-gallery__photo-frame--left">
            <img
              src={siteConfig.heroImages.left}
              alt="Retrato de Anz Liz"
              className="hero-gallery__photo"
            />
          </div>
          <div className="hero-gallery__video-frame">
            <video
              src={siteConfig.heroVideoUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Prévia em vídeo de Anz Liz"
              className="hero-gallery__video"
            />
          </div>
          <div className="hero-gallery__photo-frame hero-gallery__photo-frame--right">
            <img
              src={siteConfig.heroImages.right}
              alt="Retrato de Anz Liz"
              className="hero-gallery__photo"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-10 w-full max-w-2xl sm:mt-12">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">{siteConfig.creatorName}</p>
          <h1 className="mt-4 whitespace-pre-line font-display text-5xl italic leading-[0.98] sm:mt-5 sm:text-7xl lg:text-8xl">{siteConfig.heroTitle}</h1>
          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground sm:mt-6 sm:text-lg">{siteConfig.heroSubtitle}</p>
          <a href="#assinar" className="bg-cta mt-8 inline-flex max-w-full items-center justify-center rounded-full px-7 py-4 text-center text-xs font-bold tracking-wider text-primary-foreground transition hover:scale-105 sm:mt-10 sm:px-8 sm:py-5 sm:text-sm">
            {siteConfig.heroCta}
          </a>
        </div>
      </section>

      <section id="assinar" className="px-6 py-24">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-display text-4xl sm:text-5xl">Seu acesso exclusivo começa aqui.</h2>
          <div className="glass mt-10 rounded-3xl p-8 text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{plan.name}</p>
            <p className="mt-3 font-display text-5xl">{formatBRL(plan.priceCents)}<span className="font-sans text-base text-muted-foreground"> /mês</span></p>
            <ul className="mt-6 space-y-3">
              {plan.benefits.map((b) => (
                <li key={b} className="flex gap-3"><span className="text-primary">♥</span>{b}</li>
              ))}
            </ul>
            <button onClick={() => setCheckout(true)} className="bg-cta mt-8 w-full rounded-full py-5 font-bold tracking-wider text-primary-foreground transition hover:scale-[1.02]">
              ASSINAR AGORA
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">Pagamento exclusivamente via Pix</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center text-xs text-muted-foreground">
        <p>Conteúdo restrito a maiores de 18 anos.</p>
        <nav className="mt-4 flex flex-wrap justify-center gap-4">
          {([["termos", "Termos de Uso"], ["privacidade", "Privacidade"], ["cancelamento", "Cancelamento"], ["contato", "Contato"]] as const).map(([s, l]) => (
            <Link key={s} to="/legal/$slug" params={{ slug: s }} className="hover:text-primary">{l}</Link>
          ))}
        </nav>
      </footer>
    </main>
  );
}
