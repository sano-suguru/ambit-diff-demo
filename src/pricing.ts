import { applyTax } from "./tax.ts";

export function priceOrder(subtotal: number, region: string): number {
  return applyTax(subtotal, region);
}
