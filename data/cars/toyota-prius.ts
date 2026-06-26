import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Prius',
  makeSlug: 'toyota',
  modelSlug: 'prius',
  bgWord: 'PRIUS',

  seo: {
    title: 'Toyota Prius Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Prius XW50 uses 195/65R15 or 215/45R17. XW60 uses 195/60R17 or 195/50R19. Eco-rated low-rolling-resistance tyres from $82. WhatsApp for a quote.',
    ogDescription: 'Toyota Prius XW50 uses 195/65R15 or 215/45R17. XW60 uses 195/60R17. Eco tyres from $82 installed in Singapore.',
    twitterDescription: 'Toyota Prius uses 195/65R15 (XW50) or 195/60R17 (XW60). From $82 installed in Singapore.',
    priceFrom: 82,
    oeSize: '195/65R15',
  },

  defaultGen: 'xw50_fl',

  generations: [
    {
      key: 'xw60',
      label: 'Gen 5 XW60',
      years: '2023–2026',
      heroChips: [
        { label: '2.0 HEV base', value: '195/60R17' },
        { label: '2.0 PHEV sport', value: '195/50R19' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: '2.0 HEV (standard)', sizes: [
          { tag: 'OE',  size: '195/60R17', note: '标配' },
          { tag: 'Alt', size: '195/65R15', note: '15" 降规格替代' },
        ]},
        { name: '2.0 PHEV (sport trim)', sizes: [
          { tag: 'OE',  size: '195/50R19', note: 'PHEV 顶配标配' },
          { tag: 'Alt', size: '195/60R17', note: '17" 替代，舒适性更好' },
        ]},
      ],
    },
    {
      key: 'xw50_fl',
      label: 'Gen 4 XW50 FL',
      years: '2018–2022',
      heroChips: [
        { label: '1.8 HEV base', value: '195/65R15' },
        { label: '1.8 HEV sport', value: '215/45R17' },
        { label: 'From installed', value: '$82', green: true },
      ],
      variants: [
        { name: '1.8 HEV (standard)', sizes: [
          { tag: 'OE',  size: '195/65R15', note: '标配，最常见' },
          { tag: 'Alt', size: '195/60R15', note: '稍低扁平比' },
        ]},
        { name: '1.8 HEV (sport trim)', sizes: [
          { tag: 'OE',  size: '215/45R17', note: '运动版标配' },
          { tag: 'Alt', size: '215/50R17', note: '稍厚，舒适性更好' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2023–2026 · XW60 · PHEV sport 19"',  width: '6.5J', diameter: '19"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2023–2026 · XW60 · base 17"',        width: '6.5J', diameter: '17"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2018–2022 · XW50 FL · sport 17"',    width: '7J',   diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2018–2022 · XW50 FL · standard 15"', width: '6.5J', diameter: '15"', offset: 'ET40', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    notes: 'All Prius generations use 5×114.3 bolt pattern. Prius eco tyres (especially 195/65R15) often carry specific rolling resistance ratings — prioritise EU label "B" or better for fuel savings.',
  },

  priceTabs: [
    {
      size: '195/65R15',
      tabLabel: '195/65R15 · XW50 FL 标配',
      budget: {
        name: 'Dunlop SP Touring R1',
        desc: '省油 · 耐磨 · 日常通勤首选',
        price: 82,
        also: 'Also: Nexen N\'Priz AH5, Yokohama A580',
        waText: 'Toyota Prius XW50 195%2F65R15 budget tyre quote (Dunlop SP Touring or similar)',
      },
      mid: {
        name: 'Michelin Energy XM2+',
        desc: '超低滚阻 · 省油 A+ · Prius 车主最受欢迎',
        price: 118,
        also: 'Also: Bridgestone Turanza 6, Yokohama BluEarth ES32',
        waText: 'Toyota Prius XW50 195%2F65R15 mid-range tyre quote (Michelin XM2%2B or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4 ST',
        desc: '最佳湿地制动 · 低滚阻 · 5年保用',
        price: 142,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza 6',
        waText: 'Toyota Prius XW50 195%2F65R15 premium tyre quote (Michelin Primacy 4 ST)',
      },
      setEstimate: 'Budget $328–$390 · Mid-range $472–$540 · Premium $568–$660',
    },
    {
      size: '195/60R17',
      tabLabel: '195/60R17 · XW60 Gen 5',
      budget: {
        name: 'Bridgestone Ecopia EP150',
        desc: '超低滚阻 · 专为混动车设计 · 省油',
        price: 118,
        also: 'Also: Nexen N\'Blue HD Plus, Dunlop EC300+',
        waText: 'Toyota Prius XW60 195%2F60R17 budget tyre quote (Ecopia or similar)',
      },
      mid: {
        name: 'Michelin Energy XM2+',
        desc: '超低滚阻 · 省油 A+ · 最受 Prius 车主好评',
        price: 148,
        also: 'Also: Yokohama BluEarth AE01, Continental EcoContact 6',
        waText: 'Toyota Prius XW60 195%2F60R17 mid-range tyre quote (Michelin XM2%2B or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4',
        desc: '最低滚阻 · 湿地 A · 纯电/混动最优选',
        price: 175,
        also: 'Also: Bridgestone Turanza 6 Enliten, Continental EcoContact 7',
        waText: 'Toyota Prius XW60 195%2F60R17 premium tyre quote (Michelin Primacy 4)',
      },
      setEstimate: 'Budget $472–$545 · Mid-range $592–$680 · Premium $700–$820',
    },
  ],

  radarSize: '195/65R15',
  radarSource: 'Dunlop (16 reviews) · Michelin (30 reviews) · Michelin P4 (28 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label — critical for hybrid owners.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [66, 74, 78, 68, 88, 85], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Dunlop\nSP Touring R1',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '78', hi: true }, { k: 'Fuel', v: '85', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [79, 82, 85, 76, 90, 88], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nEnergy XM2+',
      stats: [{ k: 'Wet', v: '79', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'Wear', v: '85', hi: true }, { k: 'Fuel', v: '90', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [85, 87, 86, 84, 88, 86], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4 ST',
      stats: [{ k: 'Wet', v: '85', hi: true }, { k: 'Dry', v: '87', hi: true }, { k: 'Wear', v: '86', hi: true }, { k: 'Fuel', v: '88', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'XW50 FL (2018–2022) · 195/65R15 省油最大化',
      color: 'red',
      genKey: 'xw50_fl',
      body: 'Prius 车主选轮胎最重要的一点：<strong>不要因为省钱换低滚阻差的轮胎</strong>——一套差胎每月可能多耗 $15–20 油，4年下来反而亏。推荐 <strong>Michelin Energy XM2+</strong>（$118/条）——EU 标签 A 级滚阻，专为混动设计，Prius 油耗差异最明显的一款轮胎选择。整套 $472，实际上是最划算的 "省油投资"。',
    },
    {
      title: 'XW60 (2023+) · 195/60R17 新代车主',
      color: 'blue',
      genKey: 'xw60',
      body: 'XW60 换上了 17" 轮辋（195/60R17），尺码更大但仍保持低滚阻取向。推荐 <strong>Michelin Energy XM2+</strong>（$148/条）或 Michelin Primacy 4（$175/条）——两款都有 EU A 级滚阻认证，适合混动系统。XW60 PHEV 版配 19" 轮（195/50R19），WhatsApp 发送款式报价。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Prius use in Singapore?',
      a: 'Gen 4 XW50 Facelift (2018–2022): OE 195/65R15 (standard) or 215/45R17 (sport trim). Gen 5 XW60 (2023+): OE 195/60R17 (standard) or 195/50R19 (PHEV sport). The XW50 standard with 195/65R15 is by far the most common Prius on Singapore roads.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Prius?',
      a: 'All Toyota Prius generations use 5×114.3 bolt pattern — same as Camry, Corolla Altis, and most Toyota passenger cars. Centre bore is 60.1mm, lug nut thread M12×1.5, tightening torque 103 Nm.',
    },
    {
      q: 'What tyres are best for Toyota Prius in Singapore?',
      a: 'Prius owners should prioritise low rolling resistance (EU label "B" or better). Michelin Energy XM2+ ($118/tyre for 195/65R15) is the top recommendation — it has one of the lowest rolling resistance ratings in its class and is specially designed for hybrid/eco use. Avoid ultra-budget tyres; the rolling resistance penalty can cost more in fuel than the tyre savings.',
    },
    {
      q: 'How much does it cost to change Toyota Prius tyres in Singapore?',
      a: 'For 195/65R15 (XW50): budget $82/tyre (Dunlop SP Touring); mid-range $118 (Michelin Energy XM2+, popular); premium $142 (Michelin Primacy 4 ST). Full set: ~$328–$568. For 195/60R17 (XW60): $118–$175/tyre. Full set: ~$472–$700.',
    },
    {
      q: 'How long do Toyota Prius tyres last in Singapore?',
      a: 'Prius tyres typically last 4–6 years or 50,000–65,000 km, as Prius drivers tend to drive gently. Michelin Energy XM2+ averages 55,000–65,000 km. Budget tyres around 35,000–45,000 km. Note: Prius regenerative braking reduces rear tyre wear, so front tyres wear faster — rotate every 10,000 km.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Dunlop SP Touring R1 195/65R15',      brand: { '@type': 'Brand', name: 'Dunlop' },      offers: { '@type': 'Offer', price: '82',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Energy XM2+ 195/65R15',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4 ST 195/65R15',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '142', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP150 195/60R17', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Michelin Energy XM2+ 195/60R17',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4 195/60R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '175', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
