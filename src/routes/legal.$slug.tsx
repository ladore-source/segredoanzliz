import { createFileRoute, Link, notFound } from "@tanstack/react-router";

const pages: Record<string, { title: string; body: string }> = {
  termos: { title: "Termos de Uso", body: "Texto demonstrativo. O acesso é restrito a maiores de 18 anos. A assinatura é pessoal e intransferível. É proibido copiar, redistribuir ou revender o conteúdo. Não é possível garantir proteção absoluta contra cópias ou gravações de tela." },
  privacidade: { title: "Política de Privacidade", body: "Texto demonstrativo. Coletamos apenas e-mail e dados necessários para a assinatura. Não armazenamos dados bancários. Pagamentos são processados pelo provedor Pix." },
  cancelamento: { title: "Cancelamento", body: "Texto demonstrativo. Você pode cancelar a qualquer momento; o acesso permanece até o fim do período pago." },
  contato: { title: "Contato", body: "Texto demonstrativo. E-mail: contato@exemplo.com" },
};

export const Route = createFileRoute("/legal/$slug")({
  loader: ({ params }) => {
    const p = pages[params.slug];
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Página"} — Acesso VIP` },
      { name: "description", content: loaderData?.body.slice(0, 150) ?? "" },
      { property: "og:title", content: loaderData?.title ?? "" },
      { property: "og:description", content: loaderData?.body.slice(0, 150) ?? "" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Legal,
});

function Legal() {
  const p = Route.useLoaderData();
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-16">
      <Link to="/" className="text-sm text-primary">← Voltar</Link>
      <h1 className="mt-6 font-display text-4xl">{p.title}</h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">{p.body}</p>
    </main>
  );
}
