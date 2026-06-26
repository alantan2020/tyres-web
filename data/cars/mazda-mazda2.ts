import type { CarData } from './types'

const data: CarData = {
  make: 'Mazda',
  model: 'Mazda2',
  makeSlug: 'mazda',
  modelSlug: 'mazda2',
  bgWord: 'MAZDA2',

  seo: {
    title: 'Mazda2 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mazda2 DJ uses 185/65R15 (base), 185/60R16 (mid) or 195/55R16 (high). 5×114.3 bolt. From $81 installed. Compare Bridgestone vs Yokohama vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Mazda2 DJ: 185/65R15 (base) or 185/60R16 / 195/55R16 (higher). 5×114.3, CB 67.1mm. From $81 installed in Singapore.',
    twitterDescription: 'Mazda2 uses 185/65R15 (base) or 185/60R16 / 195/55R16. From $81 installed.',
    priceFrom: 81,
    oeSize: '185/65R15',
  },

  defaultGen: 'dj_fl',

  generations: [
    {
      key: 'dj_fl',
      label: 'DJ/DL Facelift',
      years: '2019–2024',
      heroChips: [
        { label: '1.5 base OE',    value: '185/65R15' },
        { label: '1.5 high OE',    value: '185/60R16' },
        { label: 'From installed', value: '$81', green: true },
      ],
      variants: [
        { name: '1.5 SkyActiv-G Sedan (base trim)', sizes: [
          { tag: 'OE',  size: '185/65R15', note: '标配，货源充足' },
          { tag: 'Alt', size: '195/60R15', note: '稍宽同直径' },
          { tag: 'Alt', size: '185/60R16', note: '16" 升级' },
        ]},
        { name: '1.5 SkyActiv-G Sedan / Hatchback (mid/high trim)', sizes: [
          { tag: 'OE',  size: '185/60R16', note: '16" 中高配标配' },
          { tag: 'OE',  size: '195/55R16', note: '部分高配 16"' },
          { tag: 'Alt', size: '185/65R15', note: '降 15"，舒适性更好' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019–2024 · DJ FL · mid/high 16"', width: '6J',   diameter: '16"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2019–2024 · DJ FL · base 15"',     width: '5.5J', diameter: '15"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Mazda2 uses 5×114.3 with 67.1mm centre bore — same as all Mazda models (CX-5, CX-30, CX-3, Mazda3). The Mazda2 was discontinued in Singapore in 2024.',
  },

  priceTabs: [
    {
      size: '185/65R15',
      tabLabel: '185/65R15 · DJ FL 入门标配',
      budget: {
        name: 'Yokohama BluEarth AE50',
        desc: '小车省油 · 货源充足 · 城市首选',
        price: 81,
        also: 'Also: Blackhawk Street-H HH16, Nexen N\'Priz AH5',
        waText: 'Mazda2 185%2F65R15 budget tyre quote (Yokohama AE50 or similar)',
      },
      mid: {
        name: 'Michelin Energy XM2+',
        desc: '低滚阻 A+ · 省油 · 轻量小车最佳',
        price: 110,
        also: 'Also: Bridgestone Turanza 6, Yokohama AE51',
        waText: 'Mazda2 185%2F65R15 mid-range tyre quote (Michelin XM2%2B or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza 6',
        desc: 'A 级湿地 · 静音 · 小车综合最佳',
        price: 128,
        also: 'Also: Continental EcoContact 6, Michelin Primacy 5',
        waText: 'Mazda2 185%2F65R15 premium tyre quote (Bridgestone Turanza 6)',
      },
      setEstimate: 'Budget $324–$380 · Mid-range $440–$510 · Premium $512–$600',
    },
    {
      size: '185/60R16',
      tabLabel: '185/60R16 · DJ FL 中高配 16"',
      budget: {
        name: 'Nexen N\'Priz AH5',
        desc: '16" 性价比 · 日常城市用途',
        price: 92,
        also: 'Also: Kumho Ecsta HS51, Blackhawk HU71',
        waText: 'Mazda2 185%2F60R16 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Yokohama BluEarth AE51',
        desc: '低滚阻 · 静音 · 城市舒适 16"',
        price: 118,
        also: 'Also: Bridgestone Ecopia EP300, Michelin Energy XM2+',
        waText: 'Mazda2 185%2F60R16 mid-range tyre quote (Yokohama AE51 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '湿地最短制动 · 小排量车最安全配置',
        price: 165,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza 6',
        waText: 'Mazda2 185%2F60R16 premium tyre quote (Michelin Primacy 5 or similar)',
      },
      setEstimate: 'Budget $368–$440 · Mid-range $472–$560 · Premium $660–$760',
    },
  ],

  radarSize: '185/65R15',
  radarSource: 'Yokohama (20 reviews) · Michelin (26 reviews) · Bridgestone (24 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.5',
      scores: [70, 74, 78, 72, 86, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Yokohama\nBluEarth AE50',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '78', hi: true }, { k: 'Fuel', v: '86', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [78, 82, 84, 80, 90, 86], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nEnergy XM2+',
      stats: [{ k: 'Wet', v: '78', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'Wear', v: '84', hi: true }, { k: 'Fuel', v: '90', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [82, 84, 85, 83, 76, 80], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nTuranza 6',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '83', hi: true }, { k: 'Wear', v: '85', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Mazda2 DJ · 185/65R15 入门换胎',
      color: 'red',
      genKey: 'dj_fl',
      body: 'Mazda2 是轻量小车，185/65R15 是新加坡最便宜且货源最充足的尺码之一。推荐 Michelin Energy XM2+（$110/条）——低滚阻省油，四条整套约 $440。Mazda2 已于 2024 年停售，但这尺码非常普遍，未来换胎毫无困难。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mazda2 use in Singapore?',
      a: 'Mazda2 DJ/DL Facelift (2019–2024): OE 185/65R15 (base), 185/60R16 (mid trim), or 195/55R16 (some high-trim variants). The 185/65R15 base size is the most common and cheapest to replace.',
    },
    {
      q: 'What is the bolt pattern of the Mazda2?',
      a: 'Mazda2 uses 5×114.3 with 67.1mm centre bore, M12×1.5, 108 Nm — same as all Mazda passenger cars.',
    },
    {
      q: 'Is the Mazda2 still sold in Singapore?',
      a: 'No. Mazda2 was discontinued in Singapore in 2024. However, 185/65R15 and 185/60R16 tyres are very common sizes with no supply issues.',
    },
    {
      q: 'How much do Mazda2 tyres cost in Singapore?',
      a: 'For 185/65R15: from $81 (Yokohama AE50); mid $110 (Michelin XM2+, popular); premium $128 (Bridgestone Turanza 6). Set ~$324–$512. For 185/60R16: $92–$165 per tyre.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Yokohama BluEarth AE50 185/65R15',   brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '81',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Energy XM2+ 185/65R15',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '110', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 185/65R15',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
