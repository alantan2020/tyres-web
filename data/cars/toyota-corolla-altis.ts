import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Corolla Altis',
  makeSlug: 'toyota',
  modelSlug: 'corolla-altis',
  bgWord: 'ALTIS',

  seo: {
    title: 'Toyota Corolla Altis Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Corolla Altis uses 205/55R16 or 225/45R17 tyres. Compare Michelin ($148) vs Bridgestone ($118). From $88 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Toyota Corolla Altis uses 205/55R16 or 225/45R17 tyres. Compare Michelin ($148) vs Bridgestone ($118). From $88 installed in Singapore. WhatsApp for a quote.',
    twitterDescription: 'Toyota Corolla Altis uses 205/55R16 or 225/45R17 tyres. Compare Michelin ($148) vs Bridgestone ($118). From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '205/55R16',
  },

  defaultGen: 'gen12fl',

  generations: [
    {
      key: 'gen12fl',
      label: 'Gen 12 E210 FL',
      years: '2022–2026',
      heroChips: [
        { label: '1.8 VVT-i', value: '225/45R17' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: '1.8 VVT-i (G / E)', sizes: [
          { tag: 'OE',  size: '225/45R17' },
          { tag: 'Alt', size: '205/55R16', note: '省油替代' },
          { tag: 'Alt', size: '225/40R18', note: '运动升级' },
        ]},
      ],
    },
    {
      key: 'gen12',
      label: 'Gen 12 E210',
      years: '2019–2021',
      heroChips: [
        { label: '1.8 VVT-i', value: '225/45R17' },
        { label: '2.0i', value: '225/40R18' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: '1.8 VVT-i', sizes: [
          { tag: 'OE',  size: '225/45R17' },
          { tag: 'Alt', size: '205/55R16', note: '省油替代' },
        ]},
        { name: '2.0i', sizes: [
          { tag: 'OE',  size: '225/40R18' },
        ]},
      ],
    },
    {
      key: 'gen10',
      label: 'Gen 10/11 E160',
      years: '2014–2018',
      heroChips: [
        { label: '1.6 / 1.8 VVT-i', value: '205/55R16' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.6 / 1.8 VVT-i', sizes: [
          { tag: 'OE',  size: '205/55R16' },
          { tag: 'Alt', size: '195/65R15', note: '15" 省油替代' },
        ]},
      ],
    },
    {
      key: 'gen9',
      label: 'Gen 9 E140',
      years: '2008–2013',
      heroChips: [
        { label: '1.6 / 1.8 VVT-i', value: '195/65R15' },
        { label: 'From installed', value: '$82', green: true },
      ],
      variants: [
        { name: '1.6 / 1.8 VVT-i', sizes: [
          { tag: 'OE',  size: '195/65R15' },
          { tag: 'Alt', size: '205/55R16', note: '16" 升级，更常见' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · Gen 12 E210 FL · 1.8 OE',      width: '7.5J', diameter: '17"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2019–2026 · Gen 12 E210 · 2.0i / Sport',   width: '8J',   diameter: '18"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2019–2021 · Gen 12 E210 · 1.8 (16")',       width: '7J',   diameter: '16"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2014–2018 · Gen 10/11 E160',                width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2008–2013 · Gen 9 E140',                    width: '6J',   diameter: '15"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    notes: 'All generations share 5×114.3 bolt pattern',
  },

  priceTabs: [
    {
      size: '205/55R16',
      tabLabel: '205/55R16 · E160 主流 / E210 替代',
      budget: {
        name: 'Hankook Kinergy Eco 2 K435',
        desc: '长里程 · 省油 · Wet grip: B',
        price: 88,
        also: 'Also: Kumho Ecsta HS51, Maxxis MAP5',
        waText: 'Toyota Corolla Altis 205%2F55R16 budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP300',
        desc: '省油 · 湿地 A 级抓地 · 最受欢迎',
        price: 118,
        also: 'Also: Continental PremiumContact 6, Dunlop EnaSave EC300',
        waText: 'Toyota Corolla Altis 205%2F55R16 mid-range tyre quote (Bridgestone Ecopia EP300 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地制动 · 5年保用 · Wet grip: A',
        price: 148,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip',
        waText: 'Toyota Corolla Altis 205%2F55R16 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $352–$400 · Mid-range $472–$560 · Premium $592–$680',
    },
    {
      size: '225/45R17',
      tabLabel: '225/45R17 · Gen 12 E210 标配',
      budget: {
        name: 'Kumho Ecsta PS71',
        desc: '日常通勤 · 操控灵活',
        price: 108,
        also: 'Also: Maxxis Premitra HP5, Nankang NS-25',
        waText: 'Toyota Corolla Altis 225%2F45R17 budget tyre quote',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音 · 舒适 · A 级湿地抓地',
        price: 145,
        also: 'Also: Continental SportContact 6, Dunlop SP Sport Maxx',
        waText: 'Toyota Corolla Altis 225%2F45R17 mid-range tyre quote (Bridgestone Turanza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地制动 · 5年保用 · Wet grip: A',
        price: 178,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance',
        waText: 'Toyota Corolla Altis 225%2F45R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $432–$500 · Mid-range $580–$680 · Premium $712–$820',
    },
  ],

  radarSize: '205/55R16',
  radarSource: 'Hankook (18 reviews) · Bridgestone (25 reviews) · Michelin (30 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [64, 76, 73, 65, 77, 76], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco 2',
      stats: [{ k: 'Wet', v: '64', hi: false }, { k: 'Dry', v: '76', hi: true }, { k: 'Wear', v: '73', hi: false }, { k: 'Value', v: '76', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [77, 83, 85, 78, 84, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nEcopia EP300',
      stats: [{ k: 'Wet', v: '77', hi: false }, { k: 'Dry', v: '83', hi: true }, { k: 'Wear', v: '85', hi: true }, { k: 'Fuel', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.4',
      scores: [84, 86, 83, 86, 82, 77], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Value', v: '77', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Gen 12 E210 (2019–2026) 车主',
      color: 'red',
      genKey: 'gen12fl',
      body: 'OE 尺码 <strong>225/45R17</strong> 操控出色，是新加坡 Altis 最新一代的标配。如果想降低换胎成本，可以选 <strong>205/55R16</strong>（Alt 尺码），里程更长、价格低 $20–30/条。2.0i 车型用 <strong>225/40R18</strong>，建议选湿地 A 级轮胎，如 Bridgestone Turanza T005 或 Michelin Primacy 4+。',
    },
    {
      title: 'Gen 10/11 E160 (2014–2018) 车主',
      color: 'blue',
      genKey: 'gen10',
      body: 'OE 尺码 <strong>205/55R16</strong> 是新加坡最常见的轿车胎码之一，货源最充足、价格最优。Bridgestone Ecopia EP300 是这一代 Altis 车主的首选——省油、里程长、湿地表现稳定，适合每日通勤。',
    },
    {
      title: 'Gen 9 E140 (2008–2013) 车主',
      color: 'red',
      genKey: 'gen9',
      body: 'OE 尺码 <strong>195/65R15</strong> 价格最低、选择最多。但不少 E140 车主会直接升 16" 轮辋换 <strong>205/55R16</strong>，操控感更好、市场货源更充足。换胎前先确认你的轮辋直径是 15" 还是已升 16"。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Corolla Altis use in Singapore?',
      a: 'It depends on the generation. Gen 12 E210 (2019–2026) 1.8 VVT-i: OE 225/45R17, Alt 205/55R16. Gen 12 E210 2.0i: OE 225/40R18. Gen 10/11 E160 (2014–2018): OE 205/55R16. Gen 9 E140 (2008–2013): OE 195/65R15. All generations use the 5×114.3 bolt pattern.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Corolla Altis?',
      a: 'All Toyota Corolla Altis generations sold in Singapore (E140, E160, E210) use the 5×114.3 bolt pattern. Centre bore is 60.1mm, lug nut thread is M12×1.5, tightening torque is 103 Nm.',
    },
    {
      q: 'How much does it cost to change tyres on a Toyota Corolla Altis in Singapore?',
      a: 'For 205/55R16 (E160 / E210 base): budget from $88 per tyre installed; mid-range $118–$138; premium $148–$175. A full set of 4 mid-range tyres costs $472–$560 all-in. For 225/45R17 (E210 standard): budget from $108; mid-range $145–$165; premium $178–$210.',
    },
    {
      q: 'Can I use 205/55R16 instead of 225/45R17 on a Gen 12 E210 Altis?',
      a: 'Yes. 205/55R16 is an approved alternative size for the E210 Altis and is listed by Toyota as an Alt fitment. It gives a slightly softer ride and costs $20–30 less per tyre. The overall diameter difference is less than 2%, within Singapore\'s legal tolerance. You will need 16" wheels.',
    },
    {
      q: 'How long do Corolla Altis tyres last in Singapore?',
      a: 'In Singapore\'s climate, Corolla Altis tyres typically last 3–5 years or 40,000–55,000 km. The 205/55R16 is a touring-oriented size with excellent mileage options. Budget tyres may need replacing after 30,000 km; premium brands like Michelin Primacy 4+ are rated beyond 50,000 km. Replace at 3mm tread depth for safety.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco 2 K435 205/55R16', brand: { '@type': 'Brand', name: 'Hankook' },    offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 205/55R16',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 205/55R16',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta PS71 225/45R17',            brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 225/45R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '145', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/45R17',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
