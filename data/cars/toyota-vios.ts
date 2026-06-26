import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Vios',
  makeSlug: 'toyota',
  modelSlug: 'vios',
  bgWord: 'VIOS',

  seo: {
    title: 'Toyota Vios Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Vios uses 185/60R15 or 195/50R16 tyres. Compare Michelin ($145) vs Bridgestone ($115). From $88 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Toyota Vios uses 185/60R15 or 195/50R16 tyres. Compare Michelin ($145) vs Bridgestone ($115). From $88 installed in Singapore. WhatsApp for a quote.',
    twitterDescription: 'Toyota Vios uses 185/60R15 or 195/50R16 tyres. Compare Michelin ($145) vs Bridgestone ($115). From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '185/60R15',
  },

  defaultGen: 'gen3fl',

  generations: [
    {
      key: 'gen4',
      label: 'Gen 4 AC100',
      years: '2022–2026',
      heroChips: [
        { label: '1.5 VVT-i', value: '195/50R16' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: '1.5 VVT-i', sizes: [
          { tag: 'OE',  size: '195/50R16' },
          { tag: 'Alt', size: '205/50R17', note: '顶配 G / GR-S 款' },
        ]},
      ],
    },
    {
      key: 'gen3fl',
      label: 'Gen 3 FL NSP151',
      years: '2018–2021',
      heroChips: [
        { label: '1.5 VVT-i', value: '185/60R15' },
        { label: '1.5 VVT-i 顶配', value: '195/50R16' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.5 VVT-i (J / G)', sizes: [{ tag: 'OE', size: '185/60R15' }] },
        { name: '1.5 VVT-i (E / GR-S)', sizes: [{ tag: 'OE', size: '195/50R16' }] },
        { name: '1.3 VVT-i', sizes: [
          { tag: 'OE',  size: '175/65R14' },
          { tag: 'Alt', size: '185/60R15', note: '15" 升级' },
        ]},
      ],
    },
    {
      key: 'gen3',
      label: 'Gen 3 NCP150',
      years: '2013–2017',
      heroChips: [
        { label: '1.5 VVT-i', value: '185/60R15' },
        { label: '1.3 VVT-i', value: '175/65R14' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.5 VVT-i', sizes: [
          { tag: 'OE',  size: '185/60R15' },
          { tag: 'Alt', size: '195/50R16', note: '顶配 E 款标配' },
        ]},
        { name: '1.3 VVT-i', sizes: [
          { tag: 'OE',  size: '175/65R14' },
          { tag: 'Alt', size: '185/60R15', note: '15" 升级，更普遍' },
        ]},
      ],
    },
    {
      key: 'gen2',
      label: 'Gen 2 XP90',
      years: '2008–2013',
      heroChips: [
        { label: '1.5 VVT-i', value: '175/65R14' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.5 / 1.3 VVT-i', sizes: [
          { tag: 'OE',  size: '175/65R14' },
          { tag: 'Alt', size: '185/60R15', note: '15" 升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · Gen 4 AC100 · 1.5 VVT-i (G / E)',   width: '6J',   diameter: '16"', offset: 'ET39', boltPattern: '4×100' },
    { label: '2018–2021 · Gen 3 NSP151 FL · 1.5 VVT-i 顶配', width: '6J',   diameter: '16"', offset: 'ET39', boltPattern: '4×100' },
    { label: '2013–2021 · Gen 3 · 1.5 VVT-i 标配',           width: '5.5J', diameter: '15"', offset: 'ET45', boltPattern: '4×100' },
    { label: '2013–2021 · Gen 3 · 1.3 VVT-i / Gen 2 XP90',   width: '5J',   diameter: '14"', offset: 'ET39', boltPattern: '4×100' },
  ],
  rimCommon: {
    centreBore: '54.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    notes: 'All generations share 4×100 bolt pattern — rims are interchangeable across Gen 2 / 3 / 4',
  },

  priceTabs: [
    {
      size: '185/60R15',
      tabLabel: '185/60R15 · Gen 3 主流款',
      budget: {
        name: 'Hankook Kinergy Eco 2 K435',
        desc: '长里程 · 省油 · Wet grip: B',
        price: 88,
        also: 'Also: Kumho Ecsta HS51, Maxxis MAP5',
        waText: 'Toyota Vios 185%2F60R15 budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP300',
        desc: '省油 · 湿地抓地 A 级 · 最受欢迎',
        price: 115,
        also: 'Also: Continental CC6, Dunlop EnaSave EC300',
        waText: 'Toyota Vios 185%2F60R15 mid-range tyre quote (Bridgestone Ecopia EP300 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Energy XM2+',
        desc: '最长里程 · 湿地安全 · 5年保用',
        price: 145,
        also: 'Also: Pirelli Cinturato P1, Goodyear EfficientGrip',
        waText: 'Toyota Vios 185%2F60R15 premium tyre quote (Michelin Energy XM2%2B)',
      },
      setEstimate: 'Budget $352–$400 · Mid-range $460–$540 · Premium $580–$660',
    },
    {
      size: '195/50R16',
      tabLabel: '195/50R16 · 顶配 / Gen 4',
      budget: {
        name: 'Kumho Ecsta HS51',
        desc: '日常用途 · 湿地表现稳定',
        price: 98,
        also: 'Also: Maxxis Premitra HP5, Nankang NS-25',
        waText: 'Toyota Vios 195%2F50R16 budget tyre quote',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · A 级湿地抓地',
        price: 128,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport',
        waText: 'Toyota Vios 195%2F50R16 mid-range tyre quote (Bridgestone Turanza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地制动 · 5年保用 · Wet grip: A',
        price: 158,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance',
        waText: 'Toyota Vios 195%2F50R16 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $392–$440 · Mid-range $512–$600 · Premium $632–$720',
    },
  ],

  radarSize: '185/60R15',
  radarSource: 'Hankook (15 reviews) · Bridgestone (22 reviews) · Michelin (18 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [64, 75, 72, 66, 76, 74], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco 2',
      stats: [{ k: 'Wet', v: '64', hi: false }, { k: 'Dry', v: '75', hi: true }, { k: 'Wear', v: '72', hi: false }, { k: 'Value', v: '76', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [77, 82, 85, 78, 84, 75], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nEcopia EP300',
      stats: [{ k: 'Wet', v: '77', hi: false }, { k: 'Dry', v: '82', hi: true }, { k: 'Wear', v: '85', hi: true }, { k: 'Fuel', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.4',
      scores: [83, 85, 88, 86, 82, 76], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nEnergy XM2+',
      stats: [{ k: 'Wet', v: '83', hi: true }, { k: 'Dry', v: '85', hi: true }, { k: 'Wear', v: '88', hi: true }, { k: 'Value', v: '76', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Gen 3 NSP151 / NCP150 (2013–2021) 1.5 VVT-i 车主',
      color: 'blue',
      genKey: 'gen3fl',
      body: 'OE 尺码 <strong>185/60R15</strong> 是新加坡最常见的 Vios 胎码，货源充足、价格最优。Bridgestone Ecopia EP300 是我们的首选推荐——省油、湿地 A 级抓地、里程超过 50,000km，非常适合新加坡每日通勤。',
    },
    {
      title: 'Gen 3 顶配 E 款 / Gen 4 AC100 (2022+) 车主',
      color: 'red',
      genKey: 'gen4',
      body: 'OE 尺码 <strong>195/50R16</strong> 操控更精准，但新加坡市场货源比 185/60R15 少，需提前预订。Michelin Primacy 4+ 和 Bridgestone Turanza T005 是最受欢迎的选择。Gen 4 顶配 GR-S 款若配 <strong>205/50R17</strong>，请 WhatsApp 询价确认库存。',
    },
    {
      title: 'Gen 2 XP90 (2008–2013) / Gen 3 1.3 VVT-i 车主',
      color: 'blue',
      genKey: 'gen2',
      body: 'OE 尺码 <strong>175/65R14</strong> 是最便宜的尺码，但选择有限，不少车主会直接升 15" 轮辋配 <strong>185/60R15</strong>。价格只多 $10–15/条，但舒适度和抓地力明显提升。换胎前先确认你的轮辋直径。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Vios use in Singapore?',
      a: 'It depends on the generation and variant. Gen 3 NCP150 (2013–2021) 1.5 VVT-i standard: OE 185/60R15. Gen 3 top-spec E trim: OE 195/50R16. Gen 3 1.3 VVT-i base: OE 175/65R14. Gen 4 AC100 (2022+): 195/50R16, with 205/50R17 on the top GR-S trim. All generations share the 4×100 bolt pattern.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Vios?',
      a: 'All Toyota Vios generations (Gen 2 XP90, Gen 3 NCP150/NSP151, Gen 4 AC100) use the 4×100 bolt pattern. Centre bore is 54.1mm, lug nut thread is M12×1.5, and the tightening torque is 103 Nm. This means rims are interchangeable across all generations.',
    },
    {
      q: 'How much does it cost to replace tyres on a Toyota Vios in Singapore?',
      a: 'For 185/60R15 (most common size): budget from $88 per tyre installed; mid-range $115–$130; premium $145–$165. A full set of 4 mid-range tyres typically costs $460–$540 all-in. For 195/50R16: budget from $98; mid-range $128–$148; premium $158–$180.',
    },
    {
      q: 'Can I use 185/60R15 on a Toyota Vios that originally came with 175/65R14?',
      a: 'Yes. Fitting 185/60R15 on 15-inch wheels on a Gen 3 1.3 VVT-i Vios is a popular upgrade in Singapore. The overall tyre diameter changes by less than 1.5%, which is within Singapore\'s legal tolerance. You will need to ensure you have 15-inch wheels — if your current rims are 14", you\'ll need to swap rims as well.',
    },
    {
      q: 'How long do tyres last on a Toyota Vios in Singapore?',
      a: 'In Singapore\'s climate, Vios tyres typically last 3–5 years or 40,000–60,000 km depending on brand and driving style. Budget tyres tend to wear faster (3–4 years); premium brands like Michelin Energy XM2+ are rated for 50,000+ km. Singapore law requires a minimum tread depth of 1.6mm; we recommend replacing at 3mm.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco 2 K435 185/60R15', brand: { '@type': 'Brand', name: 'Hankook' }, offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 185/60R15',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '115', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Energy XM2+ 185/60R15',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '145', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta HS51 195/50R16',             brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 195/50R16',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 195/50R16',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
