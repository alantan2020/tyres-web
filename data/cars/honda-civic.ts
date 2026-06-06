import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'Civic',
  makeSlug: 'honda',
  modelSlug: 'civic',
  bgWord: 'CIVIC',

  seo: {
    title: 'Honda Civic Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda Civic uses 215/50R17 or 235/40R18 tyres. Compare Michelin ($175) vs Bridgestone ($145). From $110 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Honda Civic uses 215/50R17 or 235/40R18 tyres. Compare Michelin ($175) vs Bridgestone ($145). From $110 installed in Singapore. WhatsApp for a quote.',
    twitterDescription: 'Honda Civic uses 215/50R17 or 235/40R18 tyres. Compare Michelin ($175) vs Bridgestone ($145). From $110 installed in Singapore.',
    priceFrom: 110,
    oeSize: '215/50R17',
  },

  defaultGen: 'gen11',

  generations: [
    {
      key: 'gen11',
      label: 'Gen 11 FE',
      years: '2022–2026',
      heroChips: [
        { label: '1.5 VTEC / e:HEV', value: '235/40R18' },
        { label: 'From installed', value: '$155', green: true },
      ],
      variants: [
        { name: '1.5 VTEC Turbo', sizes: [{ tag: 'OE', size: '235/40R18' }] },
        { name: '2.0 e:HEV',      sizes: [{ tag: 'OE', size: '235/40R18' }] },
      ],
    },
    {
      key: 'gen10face',
      label: 'Gen 10 FC FL',
      years: '2019–2021',
      heroChips: [
        { label: '1.5T Sport', value: '235/40R18' },
        { label: '1.5T Base',  value: '215/50R17' },
        { label: '1.8 i-VTEC', value: '215/55R16' },
        { label: 'From installed', value: '$110', green: true },
      ],
      variants: [
        { name: '1.5 VTEC Turbo', sizes: [
          { tag: 'OE',  size: '215/50R17' },
          { tag: 'Alt', size: '215/55R16', note: '16"，更省油' },
        ]},
        { name: '1.8 i-VTEC', sizes: [{ tag: 'OE', size: '215/55R16' }] },
        { name: 'Sport',      sizes: [{ tag: 'OE', size: '235/40R18' }] },
      ],
    },
    {
      key: 'gen10',
      label: 'Gen 10 FC',
      years: '2016–2018',
      heroChips: [
        { label: '1.5T Turbo', value: '215/50R17' },
        { label: '1.8 i-VTEC', value: '215/55R16' },
        { label: 'From installed', value: '$110', green: true },
      ],
      variants: [
        { name: '1.5 VTEC Turbo', sizes: [
          { tag: 'OE',  size: '215/50R17' },
          { tag: 'Alt', size: '215/55R16', note: '16"，更省油' },
        ]},
        { name: '1.8 i-VTEC', sizes: [{ tag: 'OE', size: '215/55R16' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · Gen 11 FE',                      width: '8J',  diameter: '18"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2016–2021 · Gen 10 FC · 1.5T (17")',          width: '7J',  diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2016–2021 · Gen 10 FC · 1.8 i-VTEC (16")',    width: '7J',  diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2019–2021 · Gen 10 FC Facelift Sport (18")',  width: '8J',  diameter: '18"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Hub rings needed if aftermarket bore differs',
  },

  priceTabs: [
    {
      size: '215/50R17',
      tabLabel: '215/50R17 · Gen 10 1.5T',
      budget: {
        name: 'Hankook Kinergy Eco 2 K435',
        desc: 'Long mileage · quiet highway · Wet grip: B',
        price: 110,
        also: 'Also: Kumho Ecsta HS51, Maxxis MAP5',
        waText: 'Honda Civic 215%2F50R17 budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP300',
        desc: 'Fuel efficient · excellent wet grip · Wet grip: A',
        price: 145,
        also: 'Also: Continental CC6, Dunlop SP Sport',
        waText: 'Honda Civic 215%2F50R17 mid-range tyre quote (Bridgestone Ecopia EP300 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: 'Best wet braking · 5-yr warranty · Wet grip: A',
        price: 175,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip',
        waText: 'Honda Civic 215%2F50R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $440–$500 · Mid-range $580–$700 · Premium $700–$880',
    },
    {
      size: '235/40R18',
      tabLabel: '235/40R18 · Gen 11 / Sport',
      budget: {
        name: 'Kumho Ecsta PS71',
        desc: 'Daily driver · decent wet performance',
        price: 155,
        also: 'Also: Maxxis Victra Sport 5, Nankang NS-25',
        waText: 'Honda Civic 235%2F40R18 budget tyre quote',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: 'Quiet, comfortable, A-rated wet grip',
        price: 195,
        also: 'Also: Continental SportContact 6, Dunlop SP Sport Maxx',
        waText: 'Honda Civic 235%2F40R18 mid-range tyre quote (Bridgestone Turanza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: 'Top handling + wet braking · Wet grip: A',
        price: 240,
        also: 'Also: Pirelli P Zero, Goodyear Eagle F1',
        waText: 'Honda Civic 235%2F40R18 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $620–$700 · Mid-range $780–$920 · Premium $960–$1,160',
    },
  ],

  radarSize: '215/50R17',
  radarSource: 'Hankook (20 reviews) · Bridgestone (17 reviews) · Michelin (34 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [65,77,68,64,74,75], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco 2',
      stats: [{ k:'Wet',v:'65',hi:false },{ k:'Dry',v:'77',hi:true },{ k:'Wear',v:'68',hi:false },{ k:'Value',v:'75',hi:false }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.0',
      scores: [76,83,84,77,82,76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nEcopia EP300',
      stats: [{ k:'Wet',v:'76',hi:false },{ k:'Dry',v:'83',hi:true },{ k:'Wear',v:'84',hi:true },{ k:'Fuel',v:'82',hi:true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.3',
      scores: [84,87,82,85,83,77], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k:'Wet',v:'84',hi:true },{ k:'Dry',v:'87',hi:true },{ k:'NVH',v:'85',hi:true },{ k:'Value',v:'77',hi:false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Gen 11 FE (2022–2026) owners',
      color: 'red',
      genKey: 'gen11',
      body: 'All FE variants use <strong>235/40R18</strong>, a performance-oriented low-profile size. For Singapore\'s wet roads, prioritise a tyre with <strong>A-rated wet grip</strong>. The Michelin Pilot Sport 4 and Continental SportContact 7 are top picks if you value handling; the Bridgestone Turanza T005 is quieter and longer-lasting.',
    },
    {
      title: 'Gen 10 FC (2016–2021) 1.5T owners',
      color: 'blue',
      genKey: 'gen10face',
      body: 'OE size <strong>215/50R17</strong> offers the best balance of ride and handling. Want to save money? The alternative <strong>215/55R16</strong> is fully compatible and typically $10–$20 cheaper per tyre. Bridgestone Ecopia EP300 is our top recommendation — excellent wet grip and fuel efficiency for Singapore commuting.',
    },
    {
      title: 'Gen 10 FC 1.8 i-VTEC owners',
      color: 'red',
      body: 'The 1.8 base model uses <strong>215/55R16</strong> — one of the most common sizes in Singapore, so you\'ll have the widest selection and lowest prices. Budget tyres like Hankook Kinergy Eco 2 or Maxxis MAP5 are perfectly adequate and popular among private hire drivers for their mileage value.',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda Civic use in Singapore?',
      a: 'It depends on generation and variant: Gen 11 FE (2022–2026) — all variants including e:HEV use 235/40R18. Gen 10 FC (2016–2021) 1.5T Turbo — OE size 215/50R17 (can also fit 215/55R16). Gen 10 FC 1.8 i-VTEC — OE size 215/55R16. Gen 10 Facelift Sport (2019–2021) — 235/40R18. All generations share the 5×114.3 bolt pattern.',
    },
    {
      q: 'What is the bolt pattern of the Honda Civic FC and FE?',
      a: 'Both the Gen 10 FC (2016–2021) and Gen 11 FE (2022–2026) use the 5×114.3 bolt pattern (also written as 5×4.5"). Centre bore is 64.1mm, lug nut thread is M12×1.5, torque spec is 108 Nm.',
    },
    {
      q: 'How much does it cost to replace tyres on a Honda Civic in Singapore?',
      a: 'For 215/50R17: budget from $110–$130 installed; mid-range $145–$175; premium $175–$220. For 235/40R18: budget from $155; mid-range $195–$230; premium $240–$290. A full set of 4 mid-range tyres with installation for the 1.5T Turbo typically costs $580–$700 all-in.',
    },
    {
      q: 'Can I fit 215/55R16 tyres on a Honda Civic 1.5T instead of 215/50R17?',
      a: 'Yes. On the Gen 10 Honda Civic FC 1.5T, fitting 215/55R16 on 16-inch wheels is safe and legal. The overall diameter changes by less than 2% — within Singapore\'s acceptable tolerance. You get a softer ride and lower tyre cost (from $110 vs $120 for 17"). Note: you\'ll need 16-inch wheels.',
    },
    {
      q: 'How often should I change tyres on my Honda Civic in Singapore?',
      a: 'In Singapore\'s climate, tyres typically last 3–5 years or 40,000–50,000 km, whichever comes first. Singapore law requires minimum 1.6mm tread depth; experts recommend replacing at 3mm for safety in heavy rain. Tyres over 5 years old should be inspected and likely replaced.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco 2 K435 215/50R17', brand: { '@type': 'Brand', name: 'Hankook' }, offers: { '@type': 'Offer', price: '110', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 215/50R17',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '145', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/50R17',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '175', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta PS71 235/40R18',             brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '155', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 235/40R18',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '195', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 235/40R18',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '240', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
