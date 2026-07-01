export interface BrandData {
  slug: string
  name: string
  origin: string
  tier: 'premium' | 'mid' | 'economy'
  tagline: string
  description: string
}

export const brands: BrandData[] = [
  {
    slug: 'michelin',
    name: 'Michelin',
    origin: 'France',
    tier: 'premium',
    tagline: "France's tyre technology leader",
    description: 'Michelin invented the radial tyre and holds more motorsport records than any other brand. Their Singapore lineup spans fuel-efficient Primacy touring tyres to the Pilot Sport performance range, all engineered for wet tropical conditions.',
  },
  {
    slug: 'bridgestone',
    name: 'Bridgestone',
    origin: 'Japan',
    tier: 'premium',
    tagline: 'OEM supplier to Toyota, Lexus, and more',
    description: 'Bridgestone is the world\'s largest tyre manufacturer by revenue and original equipment supplier to most Japanese car brands. Their Singapore range covers the sporty Potenza line, the touring Turanza series, and the eco-focused Ecopia family.',
  },
  {
    slug: 'continental',
    name: 'Continental',
    origin: 'Germany',
    tier: 'premium',
    tagline: 'German precision. Top wet-grip scores.',
    description: 'Continental AG is a German automotive supplier whose tyres consistently top wet-grip testing charts. The PremiumContact 7 and SportContact 7 are among the highest-rated tyres on TyreReviews.com globally, and both are available in Singapore.',
  },
  {
    slug: 'goodyear',
    name: 'Goodyear',
    origin: 'USA',
    tier: 'premium',
    tagline: 'America\'s tyre icon. Eagle F1 champion.',
    description: "Goodyear's Eagle F1 Asymmetric 6 and EfficientGrip Performance 2 are among the best all-around performers we stock. The EfficientGrip stands out for its exceptional wear life — 91/100 durability score — making it one of the longest-lasting premium tyres available.",
  },
  {
    slug: 'pirelli',
    name: 'Pirelli',
    origin: 'Italy',
    tier: 'premium',
    tagline: 'Official F1 tyre supplier',
    description: 'Pirelli supplies tyres to Formula 1 and OE-fits luxury and sports cars including Ferrari, Lamborghini, and Porsche. Their P Zero PZ5 achieved near-perfect 98/100 wet grip and 99/100 dry grip in independent testing — the highest scores in our entire range.',
  },
  {
    slug: 'yokohama',
    name: 'Yokohama',
    origin: 'Japan',
    tier: 'mid',
    tagline: 'Japanese quality at mid-range prices',
    description: 'Yokohama offers strong performance-per-dollar with their Advan Sport and BluEarth ranges. The BluEarth AE51 delivers 77/100 wet grip and 89/100 dry grip — competitive with some premium brands — at a mid-range price point.',
  },
  {
    slug: 'dunlop',
    name: 'Dunlop',
    origin: 'UK / Japan',
    tier: 'mid',
    tagline: 'Over 130 years of tyre expertise',
    description: "Dunlop is one of the world's oldest tyre brands, now owned by Goodyear in North America and by Sumitomo Rubber in Asia. Their Sport BluResponse is well-regarded for comfort and wet safety at a mid-range price.",
  },
  {
    slug: 'hankook',
    name: 'Hankook',
    origin: 'South Korea',
    tier: 'mid',
    tagline: 'OEM supplier to Mercedes-Benz EQ',
    description: "Hankook has grown from a budget brand to an OEM supplier for Mercedes-Benz electric vehicles. Their Ventus Prime 4 achieves 83/100 wet grip and 88/100 dry grip at mid-range pricing, making it one of the best value performance tyres in our range.",
  },
  {
    slug: 'kumho',
    name: 'Kumho',
    origin: 'South Korea',
    tier: 'economy',
    tagline: 'Value pick for cost-conscious drivers',
    description: "Kumho offers reliable performance at budget-friendly prices. The Ecsta PS71 achieves 80/100 wet grip and 85/100 dry grip — solid scores for an economy-tier tyre — making it a sensible choice for drivers who want decent performance without the premium price tag.",
  },
]

export function getBrand(slug: string): BrandData | undefined {
  return brands.find(b => b.slug === slug)
}
