import { describe, expect, it } from "vitest";

import { formatBRL, siteConfig } from "@/lib/site-config";

// The plan price is a business rule the creator sets: R$ 20,00 per month.
describe("Plano Acesso VIP", () => {
  it("custa 20 reais por mês", () => {
    expect(siteConfig.plan.priceCents).toBe(2000);
    expect(formatBRL(siteConfig.plan.priceCents)).toBe("R$ 20,00");
  });
});
