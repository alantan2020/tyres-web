export interface TyreProductData {
  brand: string
  brandSlug: string
  name: string
  slug: string
  tier: 'premium' | 'mid' | 'economy'
  category: string
  patternPrefix: string
  scores: {
    wet: number | null
    dry: number | null
    handling: number | null
    comfort: number | null
    wear: number | null
    buyAgain: number | null
    overall: number | null
  }
  whoIsItFor: string
  faqs: { q: string; a: string }[]
  compare: string[]
  brandFamily: string[]
}

export const products: TyreProductData[] = [

  // ─── BRIDGESTONE ───────────────────────────────────────────────────────────

  {
    brand: 'Bridgestone', brandSlug: 'bridgestone',
    name: 'Alenza 001', slug: 'alenza-001',
    tier: 'premium', category: 'SUV Grand Touring',
    patternPrefix: 'Alenza 001',
    scores: { wet: 71, dry: 80, handling: 72, comfort: 59, wear: 67, buyAgain: 40, overall: 6.6 },
    whoIsItFor: `The Bridgestone Alenza 001 is designed for SUV and crossover owners who need a reliable OE replacement tyre. With a 71/100 wet grip and 80/100 dry grip score it handles everyday Singapore roads competently. However, comfort at 59/100 is below average for its class, and a buy-again rate of just 40/100 suggests many owners find better alternatives after their first set. The Alenza 001 suits drivers who simply need a factory-spec replacement and aren't looking to upgrade. If comfort or wet-weather confidence matters more to you, the Bridgestone Turanza 6 or Michelin Primacy 5 are stronger choices in the same price bracket.`,
    faqs: [
      { q: 'Is the Bridgestone Alenza 001 good for Singapore SUV drivers?', a: 'It performs adequately as an OE replacement with 71/100 wet grip, but its low comfort score (59/100) and 40/100 buy-again rate suggest many drivers upgrade to a more comfortable option like the Bridgestone Turanza 6 after their first set.' },
      { q: 'How long does the Bridgestone Alenza 001 last in Singapore?', a: 'Wear life is rated 67/100 in independent reviews — slightly below average for a premium SUV tyre. In Singapore\'s heat, expect roughly 40,000–50,000 km with normal driving before replacement.' },
    ],
    compare: ['bridgestone/turanza-6', 'michelin/primacy-5', 'michelin/latitude-sport-3'],
    brandFamily: ['turanza-6', 'turanza-t005', 'ecopia-ep300', 'ecopia-ep150', 'potenza-re004', 'potenza-sport'],
  },

  {
    brand: 'Bridgestone', brandSlug: 'bridgestone',
    name: 'Ecopia EP150', slug: 'ecopia-ep150',
    tier: 'mid', category: 'Eco / Fuel Efficient',
    patternPrefix: 'EP150',
    scores: { wet: 68, dry: 75, handling: 68, comfort: 68, wear: 65, buyAgain: 52, overall: 6.6 },
    whoIsItFor: `The Bridgestone Ecopia EP150 is an eco-focused tyre aimed at reducing fuel consumption for small city cars. Its low rolling resistance helps Singapore drivers save on petrol over time. However, wet grip at 68/100 is modest — fine for light rain but less reassuring in heavy downpours — and a 52/100 buy-again rate indicates many owners find the performance underwhelming relative to the price. Best suited for budget-conscious drivers of small hatchbacks (Vios, Jazz, Swift) who prioritise fuel savings over outright wet safety or handling. Drivers who spend more time on expressways or in heavy rain should consider the Bridgestone Ecopia EP300 instead.`,
    faqs: [
      { q: 'Is the Bridgestone Ecopia EP150 good for fuel saving in Singapore?', a: 'Yes, the EP150 is specifically designed for low rolling resistance and fuel efficiency — a useful trait for Singapore\'s stop-start city traffic. However, its 68/100 wet grip means you should drive with extra caution in heavy rain.' },
      { q: 'Which cars use the Bridgestone Ecopia EP150?', a: 'The EP150 fits common small car sizes like 185/60R15 and 195/65R15, used by the Toyota Vios, Honda Jazz, Suzuki Swift, and similar B-segment cars.' },
    ],
    compare: ['bridgestone/ecopia-ep300', 'michelin/energy-xm2-plus', 'yokohama/bluearth-ae50'],
    brandFamily: ['alenza-001', 'ecopia-ep300', 'turanza-6', 'turanza-t005', 'potenza-re004', 'potenza-sport'],
  },

  {
    brand: 'Bridgestone', brandSlug: 'bridgestone',
    name: 'Ecopia EP300', slug: 'ecopia-ep300',
    tier: 'mid', category: 'Eco / Touring',
    patternPrefix: 'EP300',
    scores: { wet: 76, dry: 83, handling: 79, comfort: 77, wear: 84, buyAgain: 78, overall: 7.5 },
    whoIsItFor: `The Bridgestone Ecopia EP300 strikes a strong balance between fuel efficiency, durability, and everyday comfort. A 76/100 wet grip score is respectable for an eco tyre, and wear life at 84/100 means this tyre will outlast many competitors — an important factor in Singapore where tyres need frequent replacement due to year-round heat and UV exposure. Comfort at 77/100 and an 78/100 buy-again rate confirm it's a well-regarded daily driver tyre. Best for Toyota Altis, Honda City, Nissan Sylphy, and other family sedans where the driver wants long-lasting, quiet, and reasonably safe rubber without jumping to a full premium brand.`,
    faqs: [
      { q: 'Is the Bridgestone Ecopia EP300 worth buying in Singapore?', a: 'Yes — it offers a solid combination of 84/100 wear life, 76/100 wet grip, and a 78/100 buy-again rate. It\'s a reliable choice for family sedans in Singapore\'s climate, especially if you value tyre longevity over outright performance.' },
      { q: 'How does the Ecopia EP300 compare to the Michelin Energy XM2+?', a: 'Both are eco-touring tyres at similar prices. The EP300 scores higher on wet grip (76 vs 71) and handling (79 vs 76), while the XM2+ edges ahead on wear life (91 vs 84). If tread life is your priority, choose the XM2+; for wet safety, choose the EP300.' },
    ],
    compare: ['michelin/energy-xm2-plus', 'bridgestone/turanza-t005', 'yokohama/bluearth-ae51'],
    brandFamily: ['alenza-001', 'ecopia-ep150', 'turanza-6', 'turanza-t005', 'potenza-re004', 'potenza-sport'],
  },

  {
    brand: 'Bridgestone', brandSlug: 'bridgestone',
    name: 'Potenza RE004', slug: 'potenza-re004',
    tier: 'premium', category: 'Sport Performance',
    patternPrefix: 'RE004',
    scores: { wet: 78, dry: 89, handling: 90, comfort: 75, wear: 74, buyAgain: 88, overall: 8.0 },
    whoIsItFor: `The Bridgestone Potenza RE004 delivers genuine sports-car handling at a mid-to-premium price point, making it one of the best value performance tyres we stock. A standout 90/100 handling score and 89/100 dry grip mean cornering is sharp and predictable — qualities that enthusiast drivers appreciate on Singapore's winding PIE and AYE sweepers. Wet grip at 78/100 is adequate rather than exceptional, so performance-focused driving in heavy rain requires some caution. The 88/100 buy-again rate is the highest of any mid-range performance tyre in our range — a clear signal that owners love this tyre. Best for Honda Civic Sport, Mazda 3 Fastback, Toyota GR86, and drivers who prioritise steering feel and dry-road performance.`,
    faqs: [
      { q: 'Is the Bridgestone Potenza RE004 good for sporty driving in Singapore?', a: 'Yes — it\'s one of the top performance choices in the mid-premium range. Its 90/100 handling and 89/100 dry grip match or beat some far more expensive tyres. The 88/100 buy-again rate confirms owners are consistently satisfied.' },
      { q: 'How does the RE004 compare to the Michelin Pilot Sport 5?', a: 'The RE004 wins on handling (90 vs 83) and costs less. The PS5 wins on wet grip (91 vs 78), comfort (83 vs 75), and overall premium feel. If budget allows, PS5 for all-weather confidence; if handling and value are priorities, RE004.' },
    ],
    compare: ['michelin/pilot-sport-5', 'michelin/pilot-sport-4', 'bridgestone/potenza-sport'],
    brandFamily: ['alenza-001', 'ecopia-ep150', 'ecopia-ep300', 'turanza-6', 'turanza-t005', 'potenza-sport'],
  },

  {
    brand: 'Bridgestone', brandSlug: 'bridgestone',
    name: 'Potenza Sport', slug: 'potenza-sport',
    tier: 'premium', category: 'Ultra High Performance',
    patternPrefix: 'Potenza Sport',
    scores: { wet: 86, dry: 90, handling: 90, comfort: 71, wear: 60, buyAgain: 73, overall: 9.3 },
    whoIsItFor: `The Bridgestone Potenza Sport is a track-capable ultra-high-performance tyre that Bridgestone designed to compete directly with the Michelin Pilot Sport 5 and Continental SportContact 7. With 86/100 wet grip, 90/100 dry grip, and 90/100 handling, it's among the most capable tyres we stock for spirited driving. The tradeoff is honest: wear life at 60/100 means you'll replace these sooner, and comfort at 71/100 is noticeably firmer than grand touring alternatives. Best for sports coupes and performance sedans where the driver wants maximum grip and steering response — and accepts shorter tyre life and a slightly harsher ride as part of the bargain.`,
    faqs: [
      { q: 'How long will Bridgestone Potenza Sport tyres last in Singapore?', a: 'Wear life is rated 60/100 — significantly below average. In Singapore\'s heat expect around 30,000–40,000 km of spirited driving before replacement. If longevity matters, the Bridgestone RE004 or Goodyear Eagle F1 AS6 offer better wear at similar performance levels.' },
      { q: 'Potenza Sport vs Michelin Pilot Sport 5 — which to choose?', a: 'The Potenza Sport wins on dry handling (90 vs 83). The PS5 wins on wet grip (91 vs 86), comfort (83 vs 71), wear life (81 vs 60), and has a higher buy-again rate. For daily driving in Singapore\'s rain, PS5 is more well-rounded; for track days and weekend blasts, Potenza Sport is a strong contender.' },
    ],
    compare: ['michelin/pilot-sport-5', 'continental/sportcontact-7', 'goodyear/eagle-f1-asymmetric-6'],
    brandFamily: ['alenza-001', 'ecopia-ep150', 'ecopia-ep300', 'turanza-6', 'turanza-t005', 'potenza-re004'],
  },

  {
    brand: 'Bridgestone', brandSlug: 'bridgestone',
    name: 'Turanza 6', slug: 'turanza-6',
    tier: 'premium', category: 'Grand Touring',
    patternPrefix: 'Turanza 6',
    scores: { wet: 87, dry: 87, handling: 79, comfort: 80, wear: 68, buyAgain: 68, overall: 8.7 },
    whoIsItFor: `The Bridgestone Turanza 6 is a premium grand touring tyre that prioritises wet-weather safety and ride comfort for family sedans and executive cars. Its 87/100 wet grip score places it among the top touring tyres for rain performance — a key attribute in Singapore's year-round wet climate. Dry grip at 87/100 and comfort at 80/100 make it a confidence-inspiring daily driver that doesn't sacrifice ride quality. Wear life at 68/100 is slightly below average for a premium tyre; the Michelin Primacy 5 offers longer tread life if that's a priority. Recommended for Toyota Camry, Honda Accord, Mazda 6, and drivers who want a safe, comfortable premium tyre for city and expressway driving.`,
    faqs: [
      { q: 'Is the Bridgestone Turanza 6 good for Singapore family cars?', a: 'Yes — it\'s one of our top recommendations for family sedans. The 87/100 wet grip is excellent for Singapore\'s rain, and 80/100 comfort makes long commutes smooth. It\'s a well-rounded premium tyre for the Toyota Camry, Accord, and similar cars.' },
      { q: 'Bridgestone Turanza 6 vs Michelin Primacy 5 — which is better?', a: 'Both are top grand touring tyres. The Turanza 6 edges ahead on wet grip (87 vs 87 — tied) and costs slightly less. The Primacy 5 has superior comfort (92 vs 80) and wear life (89 vs 68). For maximum comfort and tyre life, choose Primacy 5; for wet safety at a slightly lower price, Turanza 6.' },
    ],
    compare: ['michelin/primacy-5', 'continental/premiumcontact-7', 'goodyear/efficientgrip-performance-2'],
    brandFamily: ['alenza-001', 'ecopia-ep150', 'ecopia-ep300', 'turanza-t005', 'potenza-re004', 'potenza-sport'],
  },

  {
    brand: 'Bridgestone', brandSlug: 'bridgestone',
    name: 'Turanza T005', slug: 'turanza-t005',
    tier: 'mid', category: 'Grand Touring',
    patternPrefix: 'T005',
    scores: { wet: 77, dry: 80, handling: 72, comfort: 72, wear: 66, buyAgain: 62, overall: 8.9 },
    whoIsItFor: `The Bridgestone Turanza T005 is the more affordable predecessor to the Turanza 6, offering solid touring performance at a mid-to-premium price. With 77/100 wet grip and 80/100 dry grip, it handles Singapore roads safely in most conditions. Comfort at 72/100 is acceptable but noticeably inferior to the Turanza 6. A 62/100 buy-again rate is lower than we'd like for a Bridgestone product — many owners upgrade to the Turanza 6 or Michelin Primacy series after experiencing this tyre. The T005 suits budget-conscious drivers who want a Bridgestone name without full Turanza 6 pricing. If the price difference is small, we recommend investing in the Turanza 6 instead.`,
    faqs: [
      { q: 'Is the Bridgestone Turanza T005 still available and worth buying?', a: 'The T005 is available but ageing — Bridgestone has shifted focus to the Turanza 6. If the price difference is within $20–30 per tyre, we recommend the Turanza 6 for its significantly better wet grip (87 vs 77) and comfort.' },
      { q: 'T005 vs T005A — what\'s the difference?', a: 'The T005A is a slightly modified version for Asian markets with a softer compound tuned for comfort. Performance scores are similar. In Singapore, T005 variants are more commonly stocked than T005A.' },
    ],
    compare: ['bridgestone/turanza-6', 'michelin/primacy-4', 'yokohama/bluearth-ae51'],
    brandFamily: ['alenza-001', 'ecopia-ep150', 'ecopia-ep300', 'turanza-6', 'potenza-re004', 'potenza-sport'],
  },

  // ─── CONTINENTAL ───────────────────────────────────────────────────────────

  {
    brand: 'Continental', brandSlug: 'continental',
    name: 'EcoContact 6', slug: 'ecocontact-6',
    tier: 'premium', category: 'Eco / Fuel Efficient',
    patternPrefix: 'CEC 6',
    scores: { wet: 55, dry: 73, handling: 60, comfort: 69, wear: 51, buyAgain: 37, overall: 7.5 },
    whoIsItFor: `The Continental EcoContact 6 is the most eco-focused tyre in the Continental lineup, designed primarily for maximum fuel savings on electric and hybrid vehicles. However, in Singapore's wet conditions its 55/100 wet grip is one of the lowest scores in our entire range — well below what we'd recommend for year-round tropical driving. A 37/100 buy-again rate is the weakest of all Continental products we carry. The EcoContact 6 suits EV drivers (BYD Atto, Toyota bZ4X) who prioritise range extension over dynamic performance, and who drive conservatively. For drivers who encounter heavy rain regularly or value steering feel, we recommend upgrading to the Continental PremiumContact 7.`,
    faqs: [
      { q: 'Is the Continental EcoContact 6 safe for Singapore\'s heavy rain?', a: 'Its 55/100 wet grip is below average and among the lowest of any premium brand tyre we stock. It\'s manageable with cautious driving, but drivers who regularly encounter Singapore\'s intense tropical downpours should consider the Continental PremiumContact 7 (92/100 wet grip) instead.' },
      { q: 'Is the EcoContact 6 good for EVs in Singapore?', a: 'It\'s designed with EVs in mind — low rolling resistance helps extend battery range. However, the wet grip compromise is a real consideration in Singapore. Michelin\'s E-Primacy or Pilot Sport EV offer better balanced EV performance.' },
    ],
    compare: ['continental/premiumcontact-7', 'michelin/e-primacy', 'michelin/energy-xm2-plus'],
    brandFamily: ['premiumcontact-7', 'sportcontact-7'],
  },

  {
    brand: 'Continental', brandSlug: 'continental',
    name: 'PremiumContact 7', slug: 'premiumcontact-7',
    tier: 'premium', category: 'Grand Touring',
    patternPrefix: 'CPC 7',
    scores: { wet: 92, dry: 93, handling: 83, comfort: 75, wear: 75, buyAgain: 75, overall: 9.9 },
    whoIsItFor: `The Continental PremiumContact 7 achieves the rare combination of class-leading wet and dry grip alongside genuine everyday comfort — a difficult balance most tyre makers struggle to achieve. With 92/100 wet grip and 93/100 dry grip, it ranks among the absolute best for outright grip performance of any tyre we stock. Comfort at 75/100 is good but not exceptional — the Michelin Primacy 5 (92/100) is noticeably quieter and softer on rough roads. Wear life at 75/100 is decent for its performance category. Recommended for Honda Accord, BMW 3 Series, Toyota Camry, and drivers who want the highest available wet-road confidence without sacrificing daily driving comfort. Particularly strong for Singapore's frequent monsoon rain.`,
    faqs: [
      { q: 'Is the Continental PremiumContact 7 the best wet-weather tyre in Singapore?', a: 'It\'s among the top three we stock, with a 92/100 wet grip score — second only to the Pirelli P Zero PZ5 (98/100) and equal to the Goodyear Eagle F1 AS6. For most everyday drivers, the PC7 is the most well-rounded ultra-safe wet-weather option.' },
      { q: 'How does the PremiumContact 7 compare to the Michelin Pilot Sport 5?', a: 'The PC7 wins on wet grip (92 vs 91) and dry grip (93 vs 90). The PS5 wins on comfort (83 vs 75) and handling feel. Both are excellent choices — pick PC7 if wet safety is paramount, PS5 if you want a softer, quieter ride with good performance.' },
    ],
    compare: ['michelin/pilot-sport-5', 'continental/sportcontact-7', 'goodyear/eagle-f1-asymmetric-6'],
    brandFamily: ['ecocontact-6', 'sportcontact-7'],
  },

  {
    brand: 'Continental', brandSlug: 'continental',
    name: 'SportContact 7', slug: 'sportcontact-7',
    tier: 'premium', category: 'Ultra High Performance',
    patternPrefix: 'CSC 7',
    scores: { wet: 90, dry: 95, handling: 90, comfort: 76, wear: 66, buyAgain: 79, overall: 9.9 },
    whoIsItFor: `The Continental SportContact 7 is one of the highest-scoring performance tyres in independent global testing, achieving 95/100 dry grip — the highest dry grip score of any tyre we stock. Its 90/100 wet grip and 90/100 handling make it a top-tier sports tyre that can safely deploy serious power in any weather. The tradeoff: wear life at 66/100 means frequent replacement, and at 76/100, comfort is firmer than grand touring tyres. Best for high-performance sports cars and sedans — BMW M models, Mercedes AMG, Audi S-line, Toyota GR86 — where maximum grip and steering precision matter more than tyre longevity. Not recommended for high-mileage everyday commuters.`,
    faqs: [
      { q: 'Is the Continental SportContact 7 the best performance tyre available in Singapore?', a: 'It achieves 95/100 dry grip — the highest we stock — and 90/100 wet grip and handling. For pure outright grip, it\'s at the very top of what\'s available in Singapore. Only the Pirelli P Zero PZ5 matches it on wet grip (98/100) but costs more.' },
      { q: 'How often do I need to replace Continental SportContact 7 tyres?', a: 'Wear life is rated 66/100 — below average. With normal Singapore city driving, expect around 30,000–40,000 km. With spirited driving, potentially less. If you want high performance with longer life, the Continental PremiumContact 7 or Goodyear Eagle F1 AS6 are better-wearing alternatives.' },
    ],
    compare: ['continental/premiumcontact-7', 'michelin/pilot-sport-5', 'pirelli/p-zero-pz5'],
    brandFamily: ['ecocontact-6', 'premiumcontact-7'],
  },

  // ─── DUNLOP ────────────────────────────────────────────────────────────────

  {
    brand: 'Dunlop', brandSlug: 'dunlop',
    name: 'SP Sport Maxx 060+', slug: 'sp-sport-maxx-060-plus',
    tier: 'mid', category: 'Sport Performance',
    patternPrefix: 'SP Sport Max060+',
    scores: { wet: 80, dry: 90, handling: 80, comfort: 70, wear: null, buyAgain: 90, overall: null },
    whoIsItFor: `The Dunlop SP Sport Maxx 060+ is a performance-oriented tyre with an impressive 90/100 buy-again rate — the joint-highest of any tyre in our mid-range lineup. Its 90/100 dry grip and 80/100 wet grip deliver real sports car feel at a price well below premium brands. Comfort at 70/100 is acceptable for a performance tyre rather than exceptional. Wear data is limited in independent testing but real-world feedback suggests similar durability to other mid-range performance options. Best for Mazda MX-5, Toyota GT86/GR86, Honda Civic Sport, and drivers who want sharper driving dynamics on weekends without paying Michelin or Continental prices. The high buy-again rate speaks for itself.`,
    faqs: [
      { q: 'Why does the Dunlop SP Sport Maxx 060+ have such a high buy-again rate?', a: 'Its 90/100 buy-again rate reflects strong owner satisfaction with its handling balance — sharp dry grip and reasonable wet safety at mid-range pricing. Drivers who buy it once tend to buy it again, a reliable indicator of consistent real-world performance.' },
      { q: 'Is the Dunlop SP Sport Maxx 060+ good for Singapore expressways?', a: 'Yes — 90/100 dry grip provides confident high-speed stability on the CTE and PIE, and 80/100 wet grip handles monsoon rain reasonably well. It\'s particularly popular among weekend drivers who enjoy spirited driving.' },
    ],
    compare: ['bridgestone/potenza-re004', 'michelin/pilot-sport-4', 'yokohama/advan-sport-v105'],
    brandFamily: ['sport-bluresponse'],
  },

  {
    brand: 'Dunlop', brandSlug: 'dunlop',
    name: 'Sport BluResponse', slug: 'sport-bluresponse',
    tier: 'mid', category: 'Grand Touring',
    patternPrefix: 'Sport Blue Response',
    scores: { wet: 84, dry: 88, handling: 75, comfort: 83, wear: 61, buyAgain: 66, overall: 7.7 },
    whoIsItFor: `The Dunlop Sport BluResponse delivers an unexpectedly strong combination of wet safety and comfort at mid-range prices. Its 84/100 wet grip is the highest of any mid-tier tyre in our range — matching some premium brands — and comfort at 83/100 makes it remarkably smooth for its price. Dry grip at 88/100 is also class-competitive. The weakness is wear life at 61/100, which means you'll replace these sooner than alternatives like the Michelin Energy XM2+. Best for Toyota Corolla Altis, Honda City, Hyundai Elantra, and price-sensitive daily drivers in Singapore who want premium-grade wet safety without the premium price. Particularly recommended for those who commute on wet roads.`,
    faqs: [
      { q: 'Is the Dunlop Sport BluResponse a good budget alternative to Michelin in Singapore?', a: 'Yes — its 84/100 wet grip and 83/100 comfort genuinely compete with some premium tyres at a lower price. The trade-off is 61/100 wear life, so you\'ll replace them more often. Over 60,000 km, the total cost may approach a longer-lasting premium option.' },
      { q: 'How does the Dunlop Sport BluResponse compare to the Hankook Ventus Prime 4?', a: 'The BluResponse wins on wet grip (84 vs 83) and comfort (83 vs 81). The Ventus Prime 4 wins on dry grip (88 vs 88 — tied) and wear life (78 vs 61). For wet safety, BluResponse; for longer-lasting rubber, Ventus Prime 4.' },
    ],
    compare: ['hankook/ventus-prime-4', 'yokohama/bluearth-ae51', 'michelin/primacy-4'],
    brandFamily: ['sp-sport-maxx-060-plus'],
  },

  // ─── GOODYEAR ──────────────────────────────────────────────────────────────

  {
    brand: 'Goodyear', brandSlug: 'goodyear',
    name: 'Assurance TripleMax 2', slug: 'assurance-triplemax-2',
    tier: 'mid', category: 'Grand Touring',
    patternPrefix: 'Assurance Triplemax 2',
    scores: { wet: 71, dry: 81, handling: 70, comfort: 68, wear: 76, buyAgain: 70, overall: 7.0 },
    whoIsItFor: `The Goodyear Assurance TripleMax 2 is designed specifically for Asian road and weather conditions, making it a solid everyday tyre for Singapore family cars. Wet grip at 71/100 is adequate for moderate rain, and wear life at 76/100 means reasonable durability in Singapore's heat. Comfort at 68/100 is functional rather than refined. A 70/100 buy-again rate suggests owners are satisfied but not enthusiastic — many upgrade to the more capable EfficientGrip Performance 2 when it's time for a replacement. Best suited for budget-conscious families driving Toyota Vios, Honda City, or Mitsubishi Attrage who need reliable, no-frills performance at a Goodyear price point.`,
    faqs: [
      { q: 'Is the Goodyear Assurance TripleMax 2 good for Singapore rain?', a: 'It manages normal Singapore rain adequately at 71/100 wet grip. In very heavy tropical downpours, it\'s less reassuring than higher-rated options like the Dunlop Sport BluResponse (84/100) or Michelin Primacy series. Drive with extra caution in monsoon conditions.' },
      { q: 'How long does the Goodyear Assurance TripleMax 2 last?', a: 'Wear is rated 76/100 — above average for its price class. Expect 45,000–55,000 km in Singapore\'s conditions with normal driving, making it a cost-effective option if wet performance is less of a priority.' },
    ],
    compare: ['goodyear/efficientgrip-performance-2', 'bridgestone/ecopia-ep300', 'hankook/ventus-prime-3'],
    brandFamily: ['eagle-f1-asymmetric-6', 'efficientgrip-performance-2'],
  },

  {
    brand: 'Goodyear', brandSlug: 'goodyear',
    name: 'Eagle F1 Asymmetric 6', slug: 'eagle-f1-asymmetric-6',
    tier: 'premium', category: 'Ultra High Performance',
    patternPrefix: 'F1 AS6',
    scores: { wet: 90, dry: 94, handling: 88, comfort: 82, wear: 74, buyAgain: 83, overall: 9.8 },
    whoIsItFor: `The Goodyear Eagle F1 Asymmetric 6 achieves the rare feat of combining 90/100 wet grip, 94/100 dry grip, and 82/100 comfort — making it one of the most well-rounded ultra-high-performance tyres available in Singapore. While the Continental SportContact 7 edges it on raw dry grip (95 vs 94), the Eagle F1 AS6's superior comfort (82 vs 76) and longer wear life (74 vs 66) make it a more practical choice for daily driving. The 83/100 buy-again rate is among the highest in its category. Best for sports sedans and coupes that see a mix of weekend spirited driving and daily expressway commuting — BMW 3 Series, Audi A4, Honda Civic Type R, and similar cars where performance and refinement both matter.`,
    faqs: [
      { q: 'Is the Goodyear Eagle F1 Asymmetric 6 better than the Michelin Pilot Sport 5?', a: 'They\'re very close. The Eagle F1 AS6 wins on dry grip (94 vs 90) and is comparable on wet grip (90 vs 91). The PS5 wins on handling feel (83 vs 88 — Eagle wins), comfort (83 vs 82 — Eagle wins slightly). Both score 9.6/9.8 overall on TyreReviews. Either is an excellent choice.' },
      { q: 'How many km will Goodyear Eagle F1 AS6 last in Singapore?', a: 'Wear is rated 74/100, suggesting around 40,000–50,000 km in Singapore conditions with mixed city and highway driving. This is better than most other UHP tyres in its class.' },
    ],
    compare: ['michelin/pilot-sport-5', 'continental/sportcontact-7', 'continental/premiumcontact-7'],
    brandFamily: ['assurance-triplemax-2', 'efficientgrip-performance-2'],
  },

  {
    brand: 'Goodyear', brandSlug: 'goodyear',
    name: 'EfficientGrip Performance 2', slug: 'efficientgrip-performance-2',
    tier: 'premium', category: 'Grand Touring',
    patternPrefix: 'EfficientGrip Perf 2',
    scores: { wet: 86, dry: 90, handling: 84, comfort: 85, wear: 91, buyAgain: 82, overall: 9.4 },
    whoIsItFor: `The Goodyear EfficientGrip Performance 2 stands out from every other premium tyre we stock with a 91/100 wear rating — the highest durability score in our entire range. Combined with 86/100 wet grip, 90/100 dry grip, and exceptional 85/100 comfort, this tyre delivers premium performance while lasting significantly longer than rivals. If you drive 20,000+ km per year in Singapore, the EfficientGrip Performance 2 makes a compelling financial case: longer replacement intervals mean lower total cost of ownership despite its premium price. Best for Toyota Camry, Honda Accord, Mazda 6, and high-mileage drivers — including private hire and corporate fleet — who want premium grip without changing tyres every two years.`,
    faqs: [
      { q: 'Is the Goodyear EfficientGrip Performance 2 the longest-lasting premium tyre in Singapore?', a: 'Yes — its 91/100 wear rating is the highest of any premium tyre we carry, above even the Michelin Primacy 5 (89/100) and Michelin Energy XM2+ (91/100, though budget tier). For high-mileage Singapore drivers, it offers the best combination of performance and tyre longevity.' },
      { q: 'How does EfficientGrip Performance 2 compare to the Michelin Primacy 5?', a: 'Both are top grand touring tyres. EfficientGrip wins on wear (91 vs 89), dry grip (90 vs 86), and handling (84 vs 78). Primacy 5 wins on comfort (92 vs 85). If you drive more highway miles and want the longest-lasting rubber, choose EfficientGrip Perf 2.' },
    ],
    compare: ['michelin/primacy-5', 'bridgestone/turanza-6', 'continental/premiumcontact-7'],
    brandFamily: ['assurance-triplemax-2', 'eagle-f1-asymmetric-6'],
  },

  // ─── HANKOOK ───────────────────────────────────────────────────────────────

  {
    brand: 'Hankook', brandSlug: 'hankook',
    name: 'Ventus Prime 3', slug: 'ventus-prime-3',
    tier: 'mid', category: 'Grand Touring',
    patternPrefix: 'K125',
    scores: { wet: 80, dry: 89, handling: 79, comfort: 80, wear: 80, buyAgain: 80, overall: 8.7 },
    whoIsItFor: `The Hankook Ventus Prime 3 delivers balanced touring performance across all key categories — wet grip, dry grip, comfort, and wear all score exactly 80/100, making it one of the most consistent all-round tyres in our mid-range lineup. For Singapore drivers who want reliable, predictable performance without any specific weakness, the Prime 3 is hard to fault at its price. The 80/100 buy-again rate confirms solid owner satisfaction. Best for mainstream family cars — Honda Jazz, Hyundai Elantra, Toyota Corolla — where the driver wants a tyre that does everything competently without excelling in any single area. Drivers who've had a bad experience with budget tyres often find the Prime 3 a comfortable, confidence-inspiring step up.`,
    faqs: [
      { q: 'Is the Hankook Ventus Prime 3 good for Singapore daily driving?', a: 'Yes — balanced 80/100 scores across wet grip, dry grip, comfort, and wear make it an excellent all-rounder for Singapore commuting. There are no weak spots, and the price is significantly lower than Michelin or Continental equivalents.' },
      { q: 'Hankook Ventus Prime 3 vs Prime 4 — should I upgrade?', a: 'The Prime 4 improves wet grip (83 vs 80), dry grip (88 vs 89 — similar), and handling (83 vs 79). If the price difference is under $20 per tyre, upgrade to the Prime 4 for meaningfully better wet safety. If you\'re price-sensitive, the Prime 3 is a solid choice.' },
    ],
    compare: ['hankook/ventus-prime-4', 'yokohama/bluearth-ae51', 'dunlop/sport-bluresponse'],
    brandFamily: ['ventus-prime-4'],
  },

  {
    brand: 'Hankook', brandSlug: 'hankook',
    name: 'Ventus Prime 4', slug: 'ventus-prime-4',
    tier: 'mid', category: 'Grand Touring',
    patternPrefix: 'Ventus Prime 4',
    scores: { wet: 83, dry: 88, handling: 83, comfort: 81, wear: 78, buyAgain: 78, overall: 8.8 },
    whoIsItFor: `The Hankook Ventus Prime 4 is the current generation flagship touring tyre from Hankook and OEM supplier to several Mercedes-Benz EQ electric vehicles — a significant endorsement of its quality. With 83/100 wet grip and 88/100 dry grip, it delivers near-premium performance at a mid-range price. Comfort at 81/100 and wear at 78/100 round out a tyre that genuinely punches above its price class. The Ventus Prime 4 is one of our most recommended tyres for value-conscious drivers who want better-than-average performance in all conditions without paying for a Michelin or Continental. Best for Toyota Altis, Honda Civic, Mazda 3, and city commuters who encounter frequent rain and want confidence at a fair price.`,
    faqs: [
      { q: 'Is the Hankook Ventus Prime 4 better than Michelin at a lower price?', a: 'It closes the gap significantly. The Prime 4\'s 83/100 wet grip and 88/100 dry grip genuinely compete with Michelin Primacy 3 and 4, at a price point around $30–50 less per tyre. For budget-aware drivers, it\'s an excellent alternative.' },
      { q: 'Which cars does the Hankook Ventus Prime 4 fit in Singapore?', a: 'The Prime 4 is available in a wide range of popular Singapore sizes including 205/55R16, 215/50R17, and 225/45R18 — covering most mainstream sedans from the Toyota Altis to Honda Civic and Mazda 3.' },
    ],
    compare: ['michelin/primacy-4', 'yokohama/bluearth-ae51', 'dunlop/sport-bluresponse'],
    brandFamily: ['ventus-prime-3'],
  },

  // ─── KUMHO ─────────────────────────────────────────────────────────────────

  {
    brand: 'Kumho', brandSlug: 'kumho',
    name: 'Ecsta PS71', slug: 'ecsta-ps71',
    tier: 'economy', category: 'Sport Performance',
    patternPrefix: 'PS71',
    scores: { wet: 80, dry: 85, handling: 79, comfort: 73, wear: 71, buyAgain: 69, overall: 8.1 },
    whoIsItFor: `The Kumho Ecsta PS71 delivers surprisingly strong performance metrics for an economy-tier tyre, with 80/100 wet grip and 85/100 dry grip rivalling some mid-range competitors. If your priority is extracting maximum performance from a limited budget, the PS71 makes a compelling case — particularly for sport-oriented compact cars. Comfort at 73/100 is acceptable; wear at 71/100 is reasonable for a performance tyre. A 69/100 buy-again rate is decent for an economy brand. Best for older Honda Civic, Toyota Vios Sport, and drivers who love sporty driving but can't justify Michelin prices. If budget allows, stepping up to the Hankook Ventus Prime 4 or Yokohama BluEarth AE51 delivers noticeably better wet safety at moderate cost increase.`,
    faqs: [
      { q: 'Is the Kumho Ecsta PS71 safe for Singapore roads?', a: '80/100 wet grip is respectable — better than several more expensive tyres. It\'s a safe choice for normal Singapore rain, though heavy monsoon downpours will expose the gap between it and premium options. Drive with appropriate caution in heavy rain.' },
      { q: 'Kumho Ecsta PS71 vs Hankook Ventus Prime 3 — which is better value?', a: 'The Ventus Prime 3 offers better wet grip (80 vs 80 — tied), comfort (80 vs 73), and higher buy-again rate (80 vs 69) at a moderate price premium. If the price difference is under $15 per tyre, we recommend the Ventus Prime 3 as the better all-round choice.' },
    ],
    compare: ['hankook/ventus-prime-3', 'yokohama/bluearth-ae50', 'dunlop/sport-bluresponse'],
    brandFamily: [],
  },

  // ─── MICHELIN ──────────────────────────────────────────────────────────────

  {
    brand: 'Michelin', brandSlug: 'michelin',
    name: 'E-Primacy', slug: 'e-primacy',
    tier: 'premium', category: 'EV / Eco',
    patternPrefix: 'E-Primacy',
    scores: { wet: 51, dry: 75, handling: 61, comfort: 79, wear: 82, buyAgain: 48, overall: 8.1 },
    whoIsItFor: `The Michelin E-Primacy is engineered specifically for electric and hybrid vehicles, prioritising low rolling resistance to maximise battery range. Comfort at 79/100 and wear at 82/100 are strong — this tyre rides quietly and lasts well. However, wet grip at 51/100 is the lowest score among all Michelin products we stock, and a 48/100 buy-again rate suggests many EV owners discover the wet-safety compromise only after purchase. The E-Primacy is best suited for EV drivers (BYD Atto 3, Kia EV6, Tesla Model 3) who mostly drive in dry conditions, prioritise range, and drive conservatively. Singapore's year-round rain means we recommend the Michelin Pilot Sport EV or Pirelli P Zero EV as safer alternatives for EV owners who can't avoid wet-weather driving.`,
    faqs: [
      { q: 'Is the Michelin E-Primacy safe for Singapore\'s heavy rain?', a: 'With 51/100 wet grip, it\'s the weakest-performing Michelin for rain. It\'s manageable with very conservative driving but we recommend the Michelin Pilot Sport EV or Bridgestone Turanza 6 for EV owners who encounter Singapore\'s heavy monsoon rain regularly.' },
      { q: 'Does the Michelin E-Primacy extend EV range in Singapore?', a: 'Yes — its low rolling resistance reduces energy consumption and extends battery range by an estimated 3–6% versus a standard tyre. However, the wet grip trade-off is significant for Singapore\'s climate. Only recommended for drivers who primarily drive in dry conditions.' },
    ],
    compare: ['michelin/pilot-sport-ev', 'continental/ecocontact-6', 'bridgestone/turanza-6'],
    brandFamily: ['energy-xm2-plus', 'latitude-sport-3', 'pilot-sport-4', 'pilot-sport-4s', 'pilot-sport-5', 'pilot-sport-ev', 'primacy-3', 'primacy-4', 'primacy-5'],
  },

  {
    brand: 'Michelin', brandSlug: 'michelin',
    name: 'Energy XM2+', slug: 'energy-xm2-plus',
    tier: 'mid', category: 'Eco / Touring',
    patternPrefix: 'XM2+',
    scores: { wet: 71, dry: 84, handling: 76, comfort: 83, wear: 91, buyAgain: 81, overall: 7.8 },
    whoIsItFor: `The Michelin Energy XM2+ is an exceptional long-life touring tyre carrying the Michelin name at a mid-range price. Its 91/100 wear score is the highest of any mid-tier tyre we stock — matched only by the Goodyear EfficientGrip Performance 2 (premium tier). Comfort at 83/100 is genuinely impressive, and a 81/100 buy-again rate confirms strong owner satisfaction. The XM2+ shines for high-mileage Singapore drivers who cover 25,000+ km per year in city and expressway conditions. Wet grip at 71/100 is the primary weakness — adequate for light rain but less reassuring in heavy tropical downpours. Best for Toyota Vios, Nissan Sylphy, Honda City, and family car owners who want a long-lasting, comfortable tyre at a price well below full-premium options.`,
    faqs: [
      { q: 'How many km does the Michelin Energy XM2+ last in Singapore?', a: 'Its 91/100 wear rating suggests approximately 55,000–65,000 km in Singapore\'s conditions — significantly longer than most competing tyres. For high-mileage drivers, this makes it highly cost-effective despite a slightly higher upfront price than budget alternatives.' },
      { q: 'Is the Michelin Energy XM2+ still being produced?', a: 'The XM2+ is the updated version of the original XM2 and remains widely available in Singapore. It hasn\'t been replaced yet, though Michelin may eventually supersede it with a new eco-touring model.' },
    ],
    compare: ['michelin/primacy-4', 'bridgestone/ecopia-ep300', 'goodyear/efficientgrip-performance-2'],
    brandFamily: ['e-primacy', 'latitude-sport-3', 'pilot-sport-4', 'pilot-sport-4s', 'pilot-sport-5', 'pilot-sport-ev', 'primacy-3', 'primacy-4', 'primacy-5'],
  },

  {
    brand: 'Michelin', brandSlug: 'michelin',
    name: 'Latitude Sport 3', slug: 'latitude-sport-3',
    tier: 'premium', category: 'SUV Performance',
    patternPrefix: 'Latitude Sport 3',
    scores: { wet: 85, dry: 88, handling: 81, comfort: 73, wear: 83, buyAgain: 85, overall: 7.8 },
    whoIsItFor: `The Michelin Latitude Sport 3 is a premium SUV performance tyre that delivers 85/100 wet grip and 88/100 dry grip in a large-format SUV fitment — scores that match many sedan performance tyres. Its 85/100 buy-again rate is one of the highest among SUV tyres in our range, and wear at 83/100 means good durability despite the performance-focused compound. Comfort at 73/100 is firmer than the Alenza 001 but appropriate for a performance-oriented SUV tyre. Best for performance SUVs and sports crossovers — BMW X3/X5 M-Sport, Mercedes GLC AMG, Porsche Cayenne, Range Rover Sport — where the driver expects both SUV practicality and sports-car steering response.`,
    faqs: [
      { q: 'Is the Michelin Latitude Sport 3 good for Singapore SUV drivers?', a: 'It\'s one of the best SUV performance tyres we stock. The 85/100 wet grip is particularly important for Singapore\'s year-round rain, and the 85/100 buy-again rate reflects genuine owner satisfaction across all conditions.' },
      { q: 'Michelin Latitude Sport 3 vs Bridgestone Alenza 001 — which is better?', a: 'No contest — the Latitude Sport 3 outperforms the Alenza 001 across all key metrics: wet grip (85 vs 71), dry grip (88 vs 80), handling (81 vs 72), wear (83 vs 67), and buy-again (85 vs 40). If your SUV has the same fitment size, the Latitude Sport 3 is the clear upgrade.' },
    ],
    compare: ['bridgestone/alenza-001', 'pirelli/scorpion-verde', 'yokohama/geolandar-g057'],
    brandFamily: ['e-primacy', 'energy-xm2-plus', 'pilot-sport-4', 'pilot-sport-4s', 'pilot-sport-5', 'pilot-sport-ev', 'primacy-3', 'primacy-4', 'primacy-5'],
  },

  {
    brand: 'Michelin', brandSlug: 'michelin',
    name: 'Pilot Sport 4', slug: 'pilot-sport-4',
    tier: 'premium', category: 'Ultra High Performance',
    patternPrefix: 'PS4',
    scores: { wet: 87, dry: 90, handling: 84, comfort: 78, wear: 74, buyAgain: 78, overall: 9.7 },
    whoIsItFor: `The Michelin Pilot Sport 4 remains one of the most popular performance tyres in Singapore despite its successor (PS5) being available. Its 87/100 wet grip, 90/100 dry grip, and 84/100 handling make it an excellent all-weather sports tyre, and the slightly lower price versus the PS5 makes it attractive for value-conscious performance buyers. Comfort at 78/100 is good, and wear at 74/100 is acceptable for a UHP tyre. The PS5 edges ahead on wet grip (91 vs 87) and comfort (83 vs 78), but if your size or budget aligns better with the PS4, it remains a highly competent choice. Best for Honda Civic FK8/FL5, Mazda 3 Fastback, Toyota GR Yaris, and enthusiast daily drivers.`,
    faqs: [
      { q: 'Should I buy the Michelin Pilot Sport 4 or PS5 in Singapore?', a: 'The PS5 is the clear upgrade — better wet grip (91 vs 87), better comfort (83 vs 78), and improved wear. If the PS5 is available in your size and the price difference is under $30 per tyre, buy the PS5. If your size is only in PS4 or the price gap is large, the PS4 is still excellent.' },
      { q: 'Is the Michelin Pilot Sport 4 still available in Singapore?', a: 'Yes — the PS4 remains widely stocked across popular sizes like 215/50R17, 225/45R18, and 235/40R18. It will be available as long as demand exists.' },
    ],
    compare: ['michelin/pilot-sport-5', 'michelin/pilot-sport-4s', 'goodyear/eagle-f1-asymmetric-6'],
    brandFamily: ['e-primacy', 'energy-xm2-plus', 'latitude-sport-3', 'pilot-sport-4s', 'pilot-sport-5', 'pilot-sport-ev', 'primacy-3', 'primacy-4', 'primacy-5'],
  },

  {
    brand: 'Michelin', brandSlug: 'michelin',
    name: 'Pilot Sport 4S', slug: 'pilot-sport-4s',
    tier: 'premium', category: 'Ultra High Performance',
    patternPrefix: 'PS4S',
    scores: { wet: 87, dry: 92, handling: 86, comfort: 84, wear: 79, buyAgain: 81, overall: 9.6 },
    whoIsItFor: `The Michelin Pilot Sport 4S is the semi-slick street tyre in Michelin's Pilot Sport lineup, bridging the gap between the PS4 and the track-focused Cup 2. With 92/100 dry grip and 86/100 handling — the highest of any Michelin product we stock — it's designed for drivers who genuinely push their cars hard. Surprisingly, comfort at 84/100 is the best among all Michelin performance tyres, and wet grip at 87/100 makes it genuinely capable in Singapore rain. Wear at 79/100 is decent for its compound. Best for BMW M3/M4, Porsche 911/Cayman, Mercedes AMG, and performance enthusiasts who want the most responsive Michelin street tyre available. Owners who've tried both PS4 and PS4S consistently prefer the 4S for its more communicative steering feel.`,
    faqs: [
      { q: 'What is the difference between Michelin Pilot Sport 4 and Pilot Sport 4S?', a: 'The 4S has a stiffer, higher-grip compound with bi-compound technology — the outer half of the tread is pure race rubber for dry cornering. This delivers 92/100 dry grip vs 90/100 for the PS4, with noticeably more steering feel. Wet safety is similar (87/100 both). The 4S is pricier and suited for cars with more power.' },
      { q: 'Is the Michelin Pilot Sport 4S available in Singapore?', a: 'Yes, it\'s available in larger performance sizes (245/35R20, 275/35R19, etc.) commonly fitted to sports cars and performance sedans. If you drive an M car, AMG, or Porsche, confirm your size availability with us via WhatsApp.' },
    ],
    compare: ['michelin/pilot-sport-5', 'continental/sportcontact-7', 'goodyear/eagle-f1-asymmetric-6'],
    brandFamily: ['e-primacy', 'energy-xm2-plus', 'latitude-sport-3', 'pilot-sport-4', 'pilot-sport-5', 'pilot-sport-ev', 'primacy-3', 'primacy-4', 'primacy-5'],
  },

  {
    brand: 'Michelin', brandSlug: 'michelin',
    name: 'Pilot Sport 5', slug: 'pilot-sport-5',
    tier: 'premium', category: 'Ultra High Performance',
    patternPrefix: 'PS5',
    scores: { wet: 91, dry: 90, handling: 83, comfort: 83, wear: 81, buyAgain: 82, overall: 9.6 },
    whoIsItFor: `The Michelin Pilot Sport 5 is our most recommended performance tyre for Singapore drivers who want the full package: outstanding wet safety, excellent dry grip, and day-to-day comfort that doesn't require compromises. At 91/100 wet grip — one of the highest of any tyre we carry — it excels in Singapore's year-round tropical rain, ensuring short braking distances and confident cornering in wet conditions that catch other tyres out. Dry grip at 90/100 and handling at 83/100 deliver a genuinely sporty driving experience, while comfort at 83/100 means the ride stays refined on Singapore's roads. Wear at 81/100 is good for a UHP tyre. Best for Honda Civic, Mazda 3, Toyota GR Yaris, BMW 1/3 Series, and enthusiast daily drivers who refuse to choose between wet safety and driving fun.`,
    faqs: [
      { q: 'Is the Michelin Pilot Sport 5 the best tyre for Singapore rain?', a: 'At 91/100 wet grip, it\'s among the very best we stock — surpassed only by the Pirelli P Zero PZ5 (98/100) and equal to or better than Continental\'s offerings. For performance-car drivers who prioritise wet safety without giving up handling feel, the PS5 is our top recommendation.' },
      { q: 'How long does the Michelin Pilot Sport 5 last in Singapore?', a: 'Wear is rated 81/100 — better than most performance tyres. In Singapore\'s conditions expect around 40,000–50,000 km with everyday commuting, or 30,000–40,000 km with frequent expressway driving at higher speeds. Rotation every 10,000 km extends life.' },
    ],
    compare: ['continental/premiumcontact-7', 'goodyear/eagle-f1-asymmetric-6', 'michelin/primacy-5'],
    brandFamily: ['e-primacy', 'energy-xm2-plus', 'latitude-sport-3', 'pilot-sport-4', 'pilot-sport-4s', 'pilot-sport-ev', 'primacy-3', 'primacy-4', 'primacy-5'],
  },

  {
    brand: 'Michelin', brandSlug: 'michelin',
    name: 'Pilot Sport EV', slug: 'pilot-sport-ev',
    tier: 'premium', category: 'EV Performance',
    patternPrefix: 'PS EV',
    scores: { wet: 58, dry: 79, handling: 75, comfort: 71, wear: 71, buyAgain: 41, overall: 6.9 },
    whoIsItFor: `The Michelin Pilot Sport EV is designed for electric vehicles where the combined requirements of low rolling resistance, high load capacity (EVs are heavy), and reduced noise are critical. It achieves 79/100 dry grip and 75/100 handling — reasonable for an EV tyre. However, wet grip at 58/100 and a 41/100 buy-again rate are significant concerns for Singapore's wet climate. The PS EV suits EV performance car owners (Hyundai Ioniq 5N, Kia EV6 GT) who want a brand-name performance EV tyre and primarily drive in dry or lightly wet conditions. For everyday EV driving in Singapore rain, we'd recommend exploring whether an alternative size/tyre gives better wet safety without sacrificing range too significantly.`,
    faqs: [
      { q: 'Why does the Michelin Pilot Sport EV have such a low wet grip score?', a: 'EV tyres are optimised to handle the extra weight and instant torque of electric motors while maintaining low rolling resistance for range. This often requires stiffer compounds that sacrifice wet grip. The 58/100 score reflects a real tradeoff — EV-specific tyres currently lag behind non-EV performance tyres on wet safety.' },
      { q: 'Is the Michelin Pilot Sport EV the right choice for Singapore EVs?', a: 'Only if your EV requires a specific OE size that only the PS EV fits. If you have fitment flexibility, consider whether a standard performance tyre with better wet grip (like the Michelin PS5 in a compatible size) is more appropriate for Singapore\'s frequent heavy rain.' },
    ],
    compare: ['michelin/e-primacy', 'continental/ecocontact-6', 'michelin/pilot-sport-5'],
    brandFamily: ['e-primacy', 'energy-xm2-plus', 'latitude-sport-3', 'pilot-sport-4', 'pilot-sport-4s', 'pilot-sport-5', 'primacy-3', 'primacy-4', 'primacy-5'],
  },

  {
    brand: 'Michelin', brandSlug: 'michelin',
    name: 'Primacy 3', slug: 'primacy-3',
    tier: 'premium', category: 'Grand Touring',
    patternPrefix: 'Primacy 3',
    scores: { wet: 79, dry: 85, handling: 77, comfort: 80, wear: 69, buyAgain: 66, overall: 9.2 },
    whoIsItFor: `The Michelin Primacy 3 is the predecessor to the Primacy 4 and 5 and remains available for specific sizes. Its 79/100 wet grip and 85/100 dry grip deliver solid everyday safety, and comfort at 80/100 makes it a refined touring tyre. However, wear at 69/100 is modest, and the 66/100 buy-again rate is the lowest among the Michelin Primacy family — many drivers who try the Primacy 3 upgrade to the Primacy 4 or 5 for their better all-round scores. If the Primacy 3 is available in your size at a lower price than the Primacy 4, it's an acceptable choice. If the price difference is small, always prefer the Primacy 4 or 5 for their improvements in wet grip, comfort, and wear.`,
    faqs: [
      { q: 'Is the Michelin Primacy 3 still a good tyre in 2025–2026?', a: 'It\'s competent but outdated. The Primacy 4 (81/100 wet, 83/100 comfort) and Primacy 5 (87/100 wet, 92/100 comfort) have meaningfully improved on it. If you can get the Primacy 4 or 5 in your size at a reasonable premium, they\'re the better investment.' },
      { q: 'Which cars use the Michelin Primacy 3 size in Singapore?', a: 'The Primacy 3 fits common sizes like 205/55R16, 215/50R17, and 225/45R18 used by Toyota Altis, Honda Civic, Mazda 3, and similar family cars. Many of these sizes are also available in the newer Primacy 4/5.' },
    ],
    compare: ['michelin/primacy-4', 'michelin/primacy-5', 'bridgestone/turanza-t005'],
    brandFamily: ['e-primacy', 'energy-xm2-plus', 'latitude-sport-3', 'pilot-sport-4', 'pilot-sport-4s', 'pilot-sport-5', 'pilot-sport-ev', 'primacy-4', 'primacy-5'],
  },

  {
    brand: 'Michelin', brandSlug: 'michelin',
    name: 'Primacy 4', slug: 'primacy-4',
    tier: 'premium', category: 'Grand Touring',
    patternPrefix: 'Primacy 4',
    scores: { wet: 81, dry: 85, handling: 77, comfort: 83, wear: 82, buyAgain: 70, overall: 9.4 },
    whoIsItFor: `The Michelin Primacy 4 is one of the most widely recommended tyres for mainstream Singapore family cars, balancing strong wet safety, good wear life, and genuine comfort. Its 81/100 wet grip provides confident safety in Singapore's frequent heavy rain, and comfort at 83/100 means long expressway journeys are quiet and smooth. Wear at 82/100 means this tyre will last well in Singapore's climate. The 70/100 buy-again rate is the only slight concern — the Primacy 5's improvements on wet grip (87 vs 81) and especially comfort (92 vs 83) have made many Primacy 4 owners switch on their next replacement. Recommended for Toyota Camry, Honda Accord, Mazda 6, Nissan Sylphy, and family sedans where the driver wants genuine Michelin premium quality at a mid-Michelin price.`,
    faqs: [
      { q: 'Should I buy Michelin Primacy 4 or Primacy 5 in Singapore?', a: 'If the price difference is under $30 per tyre, choose the Primacy 5 — it offers meaningfully better wet grip (87 vs 81) and substantially better comfort (92 vs 83). If you\'re on a tighter budget or only the Primacy 4 is available in your size, it\'s still an excellent tyre.' },
      { q: 'Is the Michelin Primacy 4 good for Singapore highways?', a: 'Yes — it excels at sustained highway driving. The 83/100 comfort means quiet rolling at highway speeds, and 81/100 wet grip provides safety in rain. It\'s a solid choice for drivers who regularly commute on the PIE, CTE, or BKE.' },
    ],
    compare: ['michelin/primacy-5', 'bridgestone/turanza-6', 'continental/premiumcontact-7'],
    brandFamily: ['e-primacy', 'energy-xm2-plus', 'latitude-sport-3', 'pilot-sport-4', 'pilot-sport-4s', 'pilot-sport-5', 'pilot-sport-ev', 'primacy-3', 'primacy-5'],
  },

  {
    brand: 'Michelin', brandSlug: 'michelin',
    name: 'Primacy 5', slug: 'primacy-5',
    tier: 'premium', category: 'Grand Touring',
    patternPrefix: 'Primacy 5',
    scores: { wet: 87, dry: 86, handling: 78, comfort: 92, wear: 89, buyAgain: 81, overall: 9.1 },
    whoIsItFor: `The Michelin Primacy 5 is the ultimate grand touring tyre for Singapore drivers who value comfort and durability above all else. Its 92/100 comfort score is the highest of any tyre in our entire range — it rides noticeably smoother and quieter than any competitor. Wear at 89/100 means it outlasts virtually everything else in the touring category. Wet grip at 87/100 is excellent, making it fully capable in Singapore's monsoon rain. If you spend long hours on Singapore expressways, drive parents or children regularly, and don't want to think about tyres for years, the Primacy 5 is the answer. Best for Toyota Camry, Mazda 6, Honda Accord, Volvo sedans, and any driver who prioritises a smooth, quiet, and long-lasting ride over sporty handling.`,
    faqs: [
      { q: 'Is the Michelin Primacy 5 the most comfortable tyre available in Singapore?', a: 'Yes — its 92/100 comfort score is the highest we stock, ahead of the Goodyear EfficientGrip Perf 2 (85/100) and Dunlop Sport BluResponse (83/100). If ride quality is your top priority, nothing in our range comes close.' },
      { q: 'How long will Michelin Primacy 5 tyres last in Singapore?', a: 'Wear is rated 89/100 — second only to the Goodyear EfficientGrip Performance 2 (91/100) among premium touring tyres. Expect 55,000–65,000 km in Singapore\'s conditions with regular city and highway driving — significantly longer than most premium alternatives.' },
    ],
    compare: ['goodyear/efficientgrip-performance-2', 'bridgestone/turanza-6', 'continental/premiumcontact-7'],
    brandFamily: ['e-primacy', 'energy-xm2-plus', 'latitude-sport-3', 'pilot-sport-4', 'pilot-sport-4s', 'pilot-sport-5', 'pilot-sport-ev', 'primacy-3', 'primacy-4'],
  },

  // ─── PIRELLI ───────────────────────────────────────────────────────────────

  {
    brand: 'Pirelli', brandSlug: 'pirelli',
    name: 'Cinturato P7', slug: 'cinturato-p7',
    tier: 'premium', category: 'Grand Touring',
    patternPrefix: 'Cint P7',
    scores: { wet: 73, dry: 83, handling: 75, comfort: 74, wear: 69, buyAgain: 62, overall: 8.3 },
    whoIsItFor: `The Pirelli Cinturato P7 is the entry-level touring tyre in Pirelli's lineup, bringing the brand name to family sedans at a competitive price. Its 83/100 dry grip and 75/100 handling are reasonable for everyday driving, and comfort at 74/100 is acceptable. However, wet grip at 73/100 is below expectations for a premium brand, and a 62/100 buy-again rate suggests owners often find better options at the same price point. The Cinturato P7 suits BMW 5 Series, Mercedes E-Class, and drivers who specifically need a Pirelli OE replacement fitment. If you're not locked into a specific Pirelli OE size requirement, the Michelin Primacy 4 or Bridgestone Turanza 6 deliver better wet grip and buy-again rates at similar pricing.`,
    faqs: [
      { q: 'Is the Pirelli Cinturato P7 good for Singapore family cars?', a: 'It\'s acceptable for dry conditions, but 73/100 wet grip is lower than we\'d prefer for Singapore\'s frequent heavy rain. Drivers who regularly encounter monsoon conditions should consider the Michelin Primacy 4 (81/100 wet) or Bridgestone Turanza 6 (87/100 wet) as alternatives.' },
      { q: 'Which cars require the Pirelli Cinturato P7 in Singapore?', a: 'The P7 is OEM fitted to several BMW and Mercedes-Benz models in specific sizes. If your car came with P7s from the factory, check whether the Pirelli P Zero PZ4 or Michelin Pilot Sport 4 offers the same size with better performance scores.' },
    ],
    compare: ['pirelli/p-zero-pz4', 'michelin/primacy-4', 'bridgestone/turanza-6'],
    brandFamily: ['p-zero', 'p-zero-pz4', 'p-zero-pz5', 'powergy', 'scorpion-verde'],
  },

  {
    brand: 'Pirelli', brandSlug: 'pirelli',
    name: 'P Zero (classic)', slug: 'p-zero',
    tier: 'premium', category: 'Ultra High Performance',
    patternPrefix: 'Pzero',
    scores: { wet: 68, dry: 84, handling: 72, comfort: 63, wear: 57, buyAgain: 50, overall: 7.8 },
    whoIsItFor: `The Pirelli P Zero (classic) is the original P Zero series without a generation suffix, typically found as OE fitment on older performance cars. In the context of Singapore's wet roads, its 68/100 wet grip is a significant weakness — considerably below the modern P Zero PZ4 (76/100) and PZ5 (98/100). Comfort at 63/100 is also harsh for daily use. A 50/100 buy-again rate suggests half of owners do not return to it. The classic P Zero is best considered only when your specific OE size isn't available in newer Pirelli generations. If your car's size is available in the P Zero PZ4 or PZ5, we strongly recommend upgrading for meaningfully better wet safety and ride quality.`,
    faqs: [
      { q: 'Is the Pirelli P Zero classic still worth buying in Singapore?', a: 'Only if no newer alternative fits your car. Its 68/100 wet grip and 50/100 buy-again rate rank it below modern options. The P Zero PZ4 (76/100 wet) and PZ5 (98/100 wet) are dramatically better — check size availability before settling for the classic.' },
      { q: 'What is the difference between Pirelli P Zero, PZ4, and PZ5?', a: 'The classic P Zero is the original formula. PZ4 is the 2018 revision with improved wet grip (76/100) and dry grip (88/100). PZ5 is the 2023 generation with near-perfect scores: 98/100 wet and 99/100 dry. Each generation is a meaningful improvement over the previous.' },
    ],
    compare: ['pirelli/p-zero-pz4', 'pirelli/p-zero-pz5', 'michelin/pilot-sport-4'],
    brandFamily: ['cinturato-p7', 'p-zero-pz4', 'p-zero-pz5', 'powergy', 'scorpion-verde'],
  },

  {
    brand: 'Pirelli', brandSlug: 'pirelli',
    name: 'P Zero PZ4', slug: 'p-zero-pz4',
    tier: 'premium', category: 'Ultra High Performance',
    patternPrefix: 'Pzero PZ4',
    scores: { wet: 76, dry: 88, handling: 82, comfort: 69, wear: 58, buyAgain: 63, overall: 8.7 },
    whoIsItFor: `The Pirelli P Zero PZ4 is the previous generation P Zero, commonly OEM-fitted to Lamborghini, Ferrari, and luxury performance cars. With 88/100 dry grip and 82/100 handling, it delivers genuine supercar-grade grip and precision. Wet grip at 76/100 is workable but not exceptional for Singapore's rain conditions — the PZ5 (98/100) is significantly better. Comfort at 69/100 is firm and not suited for everyday family use. The PZ4 is best for drivers with OE-specific fitment requirements on sports cars and luxury vehicles where the car manufacturer has validated this specific tyre. If your vehicle accepts the PZ5 in the same size, we recommend upgrading for dramatically improved wet safety.`,
    faqs: [
      { q: 'Should I buy the Pirelli P Zero PZ4 or PZ5 in Singapore?', a: 'The PZ5 is a massive upgrade: 98/100 vs 76/100 wet grip. If your car\'s size is available in PZ5, choose it. The PZ4 is only preferable when PZ5 isn\'t available in your specific fitment, or if the price gap is very large.' },
      { q: 'Is the Pirelli P Zero PZ4 good for Singapore rain?', a: '76/100 wet grip is adequate for normal rain but below what we\'d recommend for Singapore\'s heavy monsoon downpours. Add extra following distance in heavy rain, and consider the PZ5 when size availability allows.' },
    ],
    compare: ['pirelli/p-zero-pz5', 'michelin/pilot-sport-4s', 'continental/sportcontact-7'],
    brandFamily: ['cinturato-p7', 'p-zero', 'p-zero-pz5', 'powergy', 'scorpion-verde'],
  },

  {
    brand: 'Pirelli', brandSlug: 'pirelli',
    name: 'P Zero PZ5', slug: 'p-zero-pz5',
    tier: 'premium', category: 'Ultra High Performance',
    patternPrefix: 'Pzero 5',
    scores: { wet: 98, dry: 99, handling: 98, comfort: 88, wear: 89, buyAgain: 95, overall: 9.6 },
    whoIsItFor: `The Pirelli P Zero PZ5 achieves scores we've rarely seen in independent tyre testing: 98/100 wet grip, 99/100 dry grip, 98/100 handling, and a 95/100 buy-again rate — by far the highest across all dimensions of any tyre we stock. Remarkably, it doesn't sacrifice comfort (88/100) or wear life (89/100) to achieve these numbers. This is the tyre Pirelli developed with its Formula 1 knowledge applied to street cars, and the test results reflect it. The PZ5 is for drivers who want the absolute best available — not as a status symbol, but because they genuinely push their car and need Singapore's best wet and dry grip simultaneously. Best for Ferrari, Lambo, Porsche 911 GT3, BMW M3/M4, and serious performance enthusiasts where only the best is acceptable.`,
    faqs: [
      { q: 'Is the Pirelli P Zero PZ5 really the best tyre available in Singapore?', a: 'By independent scoring, yes. Its 98/100 wet grip, 99/100 dry grip, and 95/100 buy-again are the highest of any tyre we stock. Even its comfort (88/100) and wear (89/100) beat many rivals. If budget allows, it\'s extraordinary value for what it delivers.' },
      { q: 'How much does the Pirelli P Zero PZ5 cost in Singapore?', a: 'The PZ5 is a premium flagship tyre — pricing varies by size. WhatsApp us your car plate or tyre size for today\'s exact price. For reference, it\'s typically priced $30–60 above the Michelin Pilot Sport 5 in equivalent sizes.' },
    ],
    compare: ['continental/sportcontact-7', 'michelin/pilot-sport-4s', 'goodyear/eagle-f1-asymmetric-6'],
    brandFamily: ['cinturato-p7', 'p-zero', 'p-zero-pz4', 'powergy', 'scorpion-verde'],
  },

  {
    brand: 'Pirelli', brandSlug: 'pirelli',
    name: 'Powergy', slug: 'powergy',
    tier: 'mid', category: 'Grand Touring',
    patternPrefix: 'Powergy',
    scores: { wet: 76, dry: 83, handling: 76, comfort: 70, wear: 65, buyAgain: 58, overall: 8.2 },
    whoIsItFor: `The Pirelli Powergy is the brand's entry into the mid-range grand touring segment, offering Pirelli quality at a step below P Zero pricing. With 76/100 wet grip, 83/100 dry grip, and 76/100 handling, it covers everyday driving adequately. Comfort at 70/100 is functional, and wear at 65/100 is below average for the touring category. A 58/100 buy-again rate is Pirelli's weakest among our stocked range. The Powergy suits everyday family car drivers — Toyota Altis, Honda Civic, Mazda 3 — who want a Pirelli badge at a mid-range budget but can't stretch to the Cinturato P7 or P Zero series. If your budget can accommodate the Michelin Primacy 4 or Bridgestone Turanza 6, those deliver better wet grip and longevity at similar pricing.`,
    faqs: [
      { q: 'Is the Pirelli Powergy a good tyre for everyday Singapore driving?', a: 'It\'s adequate — 76/100 wet grip handles normal rain, and 83/100 dry grip is fine for city and expressway driving. However its 65/100 wear and 58/100 buy-again rate suggest it\'s not the most satisfying long-term ownership experience. Consider Hankook Ventus Prime 4 or Dunlop Sport BluResponse as alternatives at similar prices.' },
      { q: 'How does Pirelli Powergy compare to the Pirelli Cinturato P7?', a: 'They\'re very close in performance metrics. The Cinturato P7 edges slightly ahead on dry grip (83 vs 83 — tied), while the Powergy is similar across most dimensions. The P7 has a marginally higher buy-again rate (62 vs 58). Neither is strongly recommended — both trail Michelin and Bridgestone equivalents.' },
    ],
    compare: ['pirelli/cinturato-p7', 'michelin/primacy-4', 'hankook/ventus-prime-4'],
    brandFamily: ['cinturato-p7', 'p-zero', 'p-zero-pz4', 'p-zero-pz5', 'scorpion-verde'],
  },

  {
    brand: 'Pirelli', brandSlug: 'pirelli',
    name: 'Scorpion Verde', slug: 'scorpion-verde',
    tier: 'premium', category: 'SUV Eco / Touring',
    patternPrefix: 'Scorpion Verde',
    scores: { wet: 69, dry: 78, handling: 68, comfort: 71, wear: 60, buyAgain: 51, overall: 8.3 },
    whoIsItFor: `The Pirelli Scorpion Verde is an eco-oriented SUV tyre that prioritises fuel efficiency for crossovers and SUVs. However, its performance numbers in independent testing are modest: 69/100 wet grip is low for Singapore's year-round rain, and a 51/100 buy-again rate is among the weakest in our SUV tyre range. Wear at 60/100 is also below average. The Scorpion Verde is primarily relevant for drivers with specific OE fitment requirements on Land Rover or Alfa Romeo SUVs where Pirelli is the factory specification. For drivers choosing a general-purpose SUV tyre in Singapore, we recommend the Michelin Latitude Sport 3 (85/100 wet, 85/100 buy-again) or Yokohama Geolandar G057 (87/100 wet, 90/100 wear) for significantly better real-world performance.`,
    faqs: [
      { q: 'Is the Pirelli Scorpion Verde good for Singapore SUV drivers?', a: 'Its 69/100 wet grip and 51/100 buy-again rate are below what we\'d recommend for Singapore\'s heavy rain. Unless your vehicle specifically requires the Scorpion Verde as OE fitment, alternatives like the Michelin Latitude Sport 3 offer meaningfully better wet safety and owner satisfaction.' },
      { q: 'What is the difference between Pirelli Scorpion Verde and Scorpion Zero?', a: 'The Scorpion Verde is eco-oriented with lower rolling resistance for fuel efficiency. The Scorpion Zero (not stocked) is the performance-oriented version with higher grip ratings. For Singapore SUV drivers prioritising safety, either Michelin or Yokohama SUV tyres are stronger choices than the Verde.' },
    ],
    compare: ['michelin/latitude-sport-3', 'yokohama/geolandar-g057', 'bridgestone/alenza-001'],
    brandFamily: ['cinturato-p7', 'p-zero', 'p-zero-pz4', 'p-zero-pz5', 'powergy'],
  },

  // ─── YOKOHAMA ──────────────────────────────────────────────────────────────

  {
    brand: 'Yokohama', brandSlug: 'yokohama',
    name: 'Advan Sport V105', slug: 'advan-sport-v105',
    tier: 'mid', category: 'Ultra High Performance',
    patternPrefix: 'Advan Sport V105',
    scores: { wet: 81, dry: 90, handling: 83, comfort: 77, wear: 76, buyAgain: 81, overall: 7.3 },
    whoIsItFor: `The Yokohama Advan Sport V105 offers premium-grade dry grip (90/100) and handling (83/100) at a mid-range Yokohama price — making it one of the best value performance tyres for drivers who prioritise dry road feel. Wet grip at 81/100 is solid and fully capable for Singapore rain. A 81/100 buy-again rate reflects strong owner satisfaction. Wear at 76/100 is decent for a performance tyre. The V105 is OEM-fitted to several Porsche models and is well-regarded in the enthusiast community for its precise steering feedback. Best for sports sedans and GTs — Mazda MX-5, Toyota GR86, Honda Civic FK8, Volkswagen Golf GTI — where the driver wants sports-car feel and dry-road confidence at a price well below Continental SportContact or Michelin PS4S.`,
    faqs: [
      { q: 'Is the Yokohama Advan Sport V105 as good as Michelin or Continental in Singapore?', a: 'On dry grip (90/100) and handling (83/100) it genuinely competes with premium brands. Wet grip (81/100) is solid. Where it trails is comfort (77/100) and brand prestige. For performance-focused drivers on a budget, it\'s an excellent alternative to Michelin PS4 at lower cost.' },
      { q: 'Which cars use the Yokohama Advan Sport V105 in Singapore?', a: 'The V105 is OEM fitted to Porsche models in large sizes (e.g., 245/45R18, 255/40R18) and available aftermarket in similar high-performance sizes. It suits any sports car or performance sedan in those fitments.' },
    ],
    compare: ['michelin/pilot-sport-4', 'goodyear/eagle-f1-asymmetric-6', 'yokohama/advan-sport-v107'],
    brandFamily: ['advan-sport-v107', 'advan-v61', 'bluearth-ae50', 'bluearth-ae51', 'bluearth-es32', 'geolandar-g057'],
  },

  {
    brand: 'Yokohama', brandSlug: 'yokohama',
    name: 'Advan Sport V107', slug: 'advan-sport-v107',
    tier: 'mid', category: 'Ultra High Performance',
    patternPrefix: 'Advan Sport V107',
    scores: { wet: 74, dry: 87, handling: 84, comfort: 66, wear: 55, buyAgain: 63, overall: 7.8 },
    whoIsItFor: `The Yokohama Advan Sport V107 is the current generation successor to the V105, optimised for larger rim sizes (20"+) common on modern performance sedans and SUVs. Dry grip at 87/100 and handling at 84/100 are strong, but the V107 has notable trade-offs: wet grip at 74/100 is below its predecessor (81/100), comfort at 66/100 is harsh for daily use, and wear at 55/100 is the second-lowest in our entire range. A 63/100 buy-again rate suggests many owners prefer the V105 or switch brands at next replacement. The V107 suits drivers with large-rim performance cars where the OE fitment is V107, and who primarily drive in dry conditions. For Singapore's rain, the lower wet grip warrants caution.`,
    faqs: [
      { q: 'Is the Yokohama Advan Sport V107 better than the V105?', a: 'For dry handling (84 vs 83), the V107 edges slightly ahead. For everything else — wet grip (74 vs 81), comfort (66 vs 77), wear (55 vs 76), buy-again (63 vs 81) — the V105 is significantly better. Many enthusiasts prefer the V105 if the size is available.' },
      { q: 'Is the Yokohama Advan Sport V107 safe for Singapore rain?', a: '74/100 wet grip is below average for a premium-tier performance tyre. It handles normal rain but requires extra care in heavy Singapore downpours. If wet safety is important, consider the Michelin Pilot Sport 5 (91/100) or Goodyear Eagle F1 AS6 (90/100) in the same performance category.' },
    ],
    compare: ['yokohama/advan-sport-v105', 'michelin/pilot-sport-5', 'continental/sportcontact-7'],
    brandFamily: ['advan-sport-v105', 'advan-v61', 'bluearth-ae50', 'bluearth-ae51', 'bluearth-es32', 'geolandar-g057'],
  },

  {
    brand: 'Yokohama', brandSlug: 'yokohama',
    name: 'Advan V61 E+', slug: 'advan-v61',
    tier: 'mid', category: 'Grand Touring',
    patternPrefix: 'Advan V61',
    scores: { wet: 78, dry: 85, handling: 81, comfort: 75, wear: 77, buyAgain: 78, overall: 7.2 },
    whoIsItFor: `The Yokohama Advan V61 E+ bridges the gap between eco-touring and performance in Yokohama's lineup. With 78/100 wet grip, 85/100 dry grip, and 81/100 handling, it offers balanced competence across all conditions at a mid-range price. Comfort at 75/100 is adequate, and wear at 77/100 is above average for its class. A 78/100 buy-again rate confirms reasonable owner satisfaction. The Advan V61 E+ suits sport-focused family car drivers — Honda Civic, Mazda 3, Toyota Corolla — who want sharper steering feel than a pure touring tyre provides, without paying for an ultra-high-performance tyre. It's a versatile all-rounder that works well for Singapore's mix of expressway, city, and occasional winding road driving.`,
    faqs: [
      { q: 'Is the Yokohama Advan V61 E+ a good tyre for Singapore?', a: 'Yes — it\'s a well-balanced mid-range tyre with no significant weaknesses. 78/100 wet grip handles Singapore rain capably, and 85/100 dry grip provides confident expressway performance. It\'s particularly popular among Mazda and Honda drivers as a quality upgrade from budget alternatives.' },
      { q: 'Yokohama Advan V61 vs BluEarth AE51 — which is better?', a: 'The BluEarth AE51 offers better wet grip (77 vs 78 — similar), better dry grip (89 vs 85), better comfort (82 vs 75), and better buy-again (77 vs 78). For most Singapore drivers, the BluEarth AE51 is the smarter choice in Yokohama\'s lineup.' },
    ],
    compare: ['yokohama/bluearth-ae51', 'hankook/ventus-prime-4', 'bridgestone/ecopia-ep300'],
    brandFamily: ['advan-sport-v105', 'advan-sport-v107', 'bluearth-ae50', 'bluearth-ae51', 'bluearth-es32', 'geolandar-g057'],
  },

  {
    brand: 'Yokohama', brandSlug: 'yokohama',
    name: 'BluEarth AE50', slug: 'bluearth-ae50',
    tier: 'mid', category: 'Eco / Touring',
    patternPrefix: 'AE50',
    scores: { wet: 67, dry: 74, handling: 69, comfort: 68, wear: 60, buyAgain: 56, overall: 7.1 },
    whoIsItFor: `The Yokohama BluEarth AE50 is an entry-level eco tyre for small city cars, offering Yokohama's low rolling resistance technology at a budget-friendly price. However, across all key metrics — wet grip (67/100), dry grip (74/100), and wear (60/100) — it trails more capable alternatives significantly. A 56/100 buy-again rate is the lowest of any Yokohama product we stock. The AE50 is primarily appropriate for small hatchbacks (Toyota Yaris, Honda Jazz) where the driver prioritises minimal cost and decent fuel economy over performance or safety margins in rain. For Singapore drivers who regularly encounter heavy rain, we strongly recommend stepping up to the Yokohama BluEarth AE51 (77/100 wet, 77/100 buy-again) or Hankook Ventus Prime 3 for significantly better wet-weather safety.`,
    faqs: [
      { q: 'Is the Yokohama BluEarth AE50 good for Singapore rain?', a: '67/100 wet grip is below the safety threshold we\'d comfortably recommend for Singapore\'s heavy monsoon rain. The AE51 (77/100 wet) is a meaningful upgrade at a small premium. If you drive in rain regularly, the AE51 or Hankook Ventus Prime 3 are safer investments.' },
      { q: 'AE50 vs AE51 — is it worth upgrading to the AE51?', a: 'Yes, clearly. The AE51 improves wet grip by 10 points (77 vs 67), dry grip by 15 points (89 vs 74), and buy-again by 21 points (77 vs 56). For a relatively small price difference, the AE51 is a dramatically better tyre.' },
    ],
    compare: ['yokohama/bluearth-ae51', 'hankook/ventus-prime-3', 'kumho/ecsta-ps71'],
    brandFamily: ['advan-sport-v105', 'advan-sport-v107', 'advan-v61', 'bluearth-ae51', 'bluearth-es32', 'geolandar-g057'],
  },

  {
    brand: 'Yokohama', brandSlug: 'yokohama',
    name: 'BluEarth AE51', slug: 'bluearth-ae51',
    tier: 'mid', category: 'Eco / Touring',
    patternPrefix: 'AE51',
    scores: { wet: 77, dry: 89, handling: 80, comfort: 82, wear: 76, buyAgain: 77, overall: 8.0 },
    whoIsItFor: `The Yokohama BluEarth AE51 is one of the most impressive mid-range touring tyres we stock, delivering 77/100 wet grip, 89/100 dry grip, and 82/100 comfort at a price significantly below premium brands. The combination of strong dry grip and genuine comfort makes it an excellent everyday tyre for Singapore family cars. A 77/100 buy-again rate confirms solid owner satisfaction. The AE51 is particularly well-suited for Toyota Altis, Honda City, Mazda 3, and similar mainstream sedans where the driver wants meaningfully better performance than budget tyres without the full premium brand premium. When comparing Yokohama's range, the AE51 offers the best overall balance for typical Singapore driving conditions.`,
    faqs: [
      { q: 'Is the Yokohama BluEarth AE51 good value in Singapore?', a: 'Yes — its 89/100 dry grip and 82/100 comfort rival some premium brands, and 77/100 wet grip is solid for Singapore rain. Pricing is typically $25–50 less per tyre than Michelin or Bridgestone equivalents. For budget-aware drivers who won\'t compromise on comfort, it\'s one of our top recommendations.' },
      { q: 'What sizes is the Yokohama BluEarth AE51 available in for Singapore cars?', a: 'The AE51 covers popular Singapore sizes including 175/65R15, 185/65R15, 195/65R15, 205/55R16, 215/50R17, and 225/45R18 — fitting most mainstream Japanese and Korean family cars.' },
    ],
    compare: ['hankook/ventus-prime-4', 'michelin/energy-xm2-plus', 'bridgestone/ecopia-ep300'],
    brandFamily: ['advan-sport-v105', 'advan-sport-v107', 'advan-v61', 'bluearth-ae50', 'bluearth-es32', 'geolandar-g057'],
  },

  {
    brand: 'Yokohama', brandSlug: 'yokohama',
    name: 'BluEarth ES32', slug: 'bluearth-es32',
    tier: 'mid', category: 'Eco / Touring',
    patternPrefix: 'ES32',
    scores: { wet: 77, dry: 89, handling: 80, comfort: 82, wear: 76, buyAgain: 77, overall: 8.0 },
    whoIsItFor: `The Yokohama BluEarth ES32 shares identical performance scores with the BluEarth AE51 in independent testing, as it uses very similar compound technology in a slightly different tread design. With 77/100 wet grip, 89/100 dry grip, and 82/100 comfort, it delivers the same strong value proposition for Singapore family cars. The ES32 tends to be available in smaller, more fuel-efficient car sizes — typically 155/65R14 to 195/65R15 — making it the go-to Yokohama mid-range choice for Toyota Yaris, Honda Jazz, and Perodua models used widely in Singapore. For drivers choosing between ES32 and AE51, the deciding factor is usually which size is available for your specific car.`,
    faqs: [
      { q: 'What is the difference between Yokohama BluEarth ES32 and AE51?', a: 'Performance scores are virtually identical in independent testing. The ES32 is typically available in smaller sizes (14"–16" rims), while the AE51 covers more sizes including larger 17"–18" fitments. Choose based on which is available in your car\'s specific size.' },
      { q: 'Is the Yokohama BluEarth ES32 good for older Singapore cars on 14" wheels?', a: 'Yes — it\'s an excellent mid-range choice for smaller cars on 14–15" wheels. 77/100 wet grip handles Singapore rain adequately, and 82/100 comfort makes it quieter than most budget alternatives on small cars.' },
    ],
    compare: ['yokohama/bluearth-ae51', 'hankook/ventus-prime-3', 'bridgestone/ecopia-ep300'],
    brandFamily: ['advan-sport-v105', 'advan-sport-v107', 'advan-v61', 'bluearth-ae50', 'bluearth-ae51', 'geolandar-g057'],
  },

  {
    brand: 'Yokohama', brandSlug: 'yokohama',
    name: 'Geolandar G057', slug: 'geolandar-g057',
    tier: 'mid', category: 'SUV / 4WD',
    patternPrefix: 'Geolandar X-CV G057',
    scores: { wet: 87, dry: 87, handling: 87, comfort: 87, wear: 90, buyAgain: 87, overall: null },
    whoIsItFor: `The Yokohama Geolandar G057 is a high-performance SUV tyre that delivers impressive scores across the board: 87/100 across wet grip, dry grip, handling, and comfort — with a standout 90/100 wear rating for exceptional durability. These are mid-range prices delivering near-premium performance, making the G057 one of the best value SUV tyres in our lineup. The uniform high scores across all categories reflect a tyre designed for Singapore's diverse SUV driving — city commuting, expressway cruising, and occasional off-tarmac use. Best for Toyota Harrier, Honda CR-V, Mazda CX-5, Kia Sportage, and family SUVs where the owner wants long-lasting, safe, and quiet rubber without paying Michelin Latitude Sport prices.`,
    faqs: [
      { q: 'Is the Yokohama Geolandar G057 good for Singapore SUV drivers?', a: 'Yes — 87/100 wet grip is excellent for Singapore rain, and the 90/100 wear rating means very long tyre life. At mid-range prices, it\'s one of our top SUV tyre recommendations for value-conscious Singapore drivers who don\'t want to compromise on safety or longevity.' },
      { q: 'How long will Yokohama Geolandar G057 tyres last in Singapore?', a: 'With a 90/100 wear rating, expect approximately 55,000–65,000 km in Singapore\'s conditions — comparable to the Michelin Primacy 5 and Goodyear EfficientGrip Performance 2, but at a mid-range SUV tyre price.' },
    ],
    compare: ['michelin/latitude-sport-3', 'bridgestone/alenza-001', 'pirelli/scorpion-verde'],
    brandFamily: ['advan-sport-v105', 'advan-sport-v107', 'advan-v61', 'bluearth-ae50', 'bluearth-ae51', 'bluearth-es32'],
  },
]

export function getProduct(brandSlug: string, productSlug: string): TyreProductData | undefined {
  return products.find(p => p.brandSlug === brandSlug && p.slug === productSlug)
}

export function getBrandProducts(brandSlug: string): TyreProductData[] {
  return products.filter(p => p.brandSlug === brandSlug)
}

export function getProductBySlug(fullSlug: string): TyreProductData | undefined {
  const [brand, product] = fullSlug.split('/')
  return getProduct(brand, product)
}

export const TOP_PICKS: string[] = [
  'michelin/pilot-sport-5',
  'continental/premiumcontact-7',
  'goodyear/efficientgrip-performance-2',
  'pirelli/p-zero-pz5',
  'yokohama/bluearth-ae51',
  'bridgestone/potenza-re004',
]
