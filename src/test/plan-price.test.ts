import { describe, expect, it } from "vitest";

import { formatBRL, siteConfig } from "@/lib/site-config";

// The plan price is a business rule the creator sets: R$ 20,00 per month.
describe("Plano Acesso VIP", () => {
  it("custa 20 reais por mês", () => {
    expect(siteConfig.plan.priceCents).toBe(2000);
    // pt-BR currency formatting joins "R$" and the number with a non-breaking space.
    expect(formatBRL(siteConfig.plan.priceCents)).toBe("R$\u00a020,00");
  });
});
