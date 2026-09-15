const FALLBACK_RATE = 0.08;

const RATES: Record<string, number> = {
  eu: 0.2,
  jp: 0.1,
};

export function currentRate(region: string): number {
  return RATES[region] ?? FALLBACK_RATE;
}
