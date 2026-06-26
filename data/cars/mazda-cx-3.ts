import type { CarData } from './types'

const data: CarData = {
  make: 'Mazda',
  model: 'CX-3',
  makeSlug: 'mazda',
  modelSlug: 'cx-3',
  bgWord: 'CX3',

  seo: {
    title: 'Mazda CX-3 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mazda CX-3 DK uses 215/60R16 (base) or 215/50R18 (high). 5×114.3 bolt. From $101 installed. Compare Yokohama vs Bridgestone. WhatsApp for a quote.',
    ogDescription: 'Mazda CX-3 DK FL: 215/60R16 (base) or 215/50R18 (high). 5×114.3, CB 67.1mm. From $101 installed in Singapore.',
    twitterDescription: 'Mazda CX-3 uses 215/60R16 or 215/50R18. From $101 installed in Singapore.',
    priceFrom: 101,
    oeSize: '215/60R16',
  },

  defaultGen: 'dk_fl',

  generations: [
    {
      key: 'dk_fl',
      label: 'DK Facelift',
      years: '2018–2024',
      heroChips: [
        { label: '2.0 base OE',    value: '215/60R16' },
        { label: '2.0 high OE',    value: '215/50R18' },
        { label: 'From installed', value: '$101', green: true },
      ],
      variants: [
        { name: '2.0 SkyActiv-G (base/mid)', sizes: [
          { tag: 'OE',  size: '215/60R16', note: '标配，货源极充足' },
          { tag: 'Alt', size: '225/55R16', note: '宽胎同直径' },
          { tag: 'Alt', size: '215/55R17', note: '17" 升级' },
        ]},
        { name: '2.0 SkyActiv-G (high/top trim)', sizes: [
          { tag: 'OE',  size: '215/50R18', note: '18" 高配标配' },
          { tag: 'Alt', size: '225/45R18', note: '18" 宽胎' },
          { tag: 'Alt', size: '215/60R16', note: '降 16"，降成本' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2018–2024 · DK FL · high 18"', width: '7J',   diameter: '18"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2018–2024 · DK FL · base 16"', width: '6.5J', diameter: '16"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Mazda CX-3 uses 5×114.3 with 67.1mm centre bore — same as all Mazda models. The CX-3 was discontinued in Singapore in 2024 and replaced by the CX-30.',
  },

  priceTabs: [
    {
      size: '215/60R16',
      tabLabel: '215/60R16 · DK FL 入门 / 中配标配',
      budget: {
        name: 'Blackhawk Street-H HH31 EV XL',
        desc: '城市 SUV · 货源极充足（200+ 条）· 省油',
        price: 101,
        also: 'Also: Nexen NFERA RU1, Yokohama ES32',
        waText: 'Mazda CX-3 215%2F60R16 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Yokohama BluEarth ES32',
        desc: '静音 · 城市舒适 · 最受 CX-3 车主好评',
        price: 122,
        also: 'Also: Bridgestone Alenza 001, Dunlop SP Touring R1',
        waText: 'Mazda CX-3 215%2F60R16 mid-range tyre quote (Yokohama ES32 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza 6',
        desc: 'A 级湿地 · 静音 · 舒适紧凑 SUV 最佳',
        price: 178,
        also: 'Also: Michelin Primacy SUV+, Continental CrossContact',
        waText: 'Mazda CX-3 215%2F60R16 premium tyre quote (Bridgestone Turanza 6 or similar)',
      },
      setEstimate: 'Budget $404–$480 · Mid-range $488–$580 · Premium $712–$820',
    },
    {
      size: '215/50R18',
      tabLabel: '215/50R18 · DK FL 高配 18"',
      budget: {
        name: 'Nexen NFERA SU1',
        desc: '18" 运动向 · 市场参考价',
        price: 155,
        also: 'Also: Kumho Ecsta PS71, Triangle EffeXSport',
        waText: 'Mazda CX-3 215%2F50R18 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Goodyear Assurance MaxGuard SUV',
        desc: '18" SUV 舒适 · 适合 CX-3 高配日常使用',
        price: 188,
        also: 'Also: Yokohama Advan V61, Hankook Ventus',
        waText: 'Mazda CX-3 215%2F50R18 mid-range tyre quote (Goodyear or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '18" 最佳湿地 · 静音 · 低滚阻',
        price: 220,
        also: 'Also: Continental PremiumContact 7, Bridgestone Turanza',
        waText: 'Mazda CX-3 215%2F50R18 premium tyre quote (Michelin Primacy 5 or similar)',
      },
      setEstimate: 'Budget $620–$720 · Mid-range $752–$880 · Premium $880–$1,020',
    },
  ],

  radarSize: '215/60R16',
  radarSource: 'Blackhawk (16 reviews) · Yokohama (24 reviews) · Bridgestone (26 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 72, 76, 68, 84, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nStreet-H HH31 EV',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.0',
      scores: [75, 80, 80, 80, 76, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Yokohama\nBluEarth ES32',
      stats: [{ k: 'Wet', v: '75', hi: true }, { k: 'Dry', v: '80', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.4',
      scores: [82, 84, 85, 83, 74, 80], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nTuranza 6',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '83', hi: true }, { k: 'Wear', v: '85', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'CX-3 · 215/60R16 换胎',
      color: 'red',
      genKey: 'dk_fl',
      body: 'CX-3 的 215/60R16 是新加坡最畅销尺码之一（库存 432+ 条）。推荐 Yokohama BluEarth ES32（$122/条）——静音舒适，四条约 $488，性价比极佳。CX-3 已于 2024 年停售，但 215/60R16 货源完全不用担心，这尺码也用在 BR-V、Kona、Odyssey 等车型上。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mazda CX-3 use in Singapore?',
      a: 'Mazda CX-3 DK Facelift (2018–2024): OE 215/60R16 (base/mid) or 215/50R18 (high/top trim). The 215/60R16 is the most common size and is widely stocked.',
    },
    {
      q: 'Is the Mazda CX-3 still sold in Singapore?',
      a: 'No. Mazda CX-3 was discontinued in Singapore in 2024, replaced by the CX-30. However, 215/60R16 tyres remain extremely common — the size is shared with Honda BR-V, Hyundai Kona, and others.',
    },
    {
      q: 'What is the bolt pattern of the Mazda CX-3?',
      a: 'Mazda CX-3 uses 5×114.3 with 67.1mm centre bore, M12×1.5, 108 Nm — same as all Mazda models.',
    },
    {
      q: 'How much does it cost to change Mazda CX-3 tyres in Singapore?',
      a: 'For 215/60R16 (base): budget $101 (Blackhawk); mid $122 (Yokohama ES32); premium $178 (Bridgestone Turanza 6). Full set ~$404–$712. For 215/50R18: market reference $155–$220.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Street-H HH31 EV XL 215/60R16', brand: { '@type': 'Brand', name: 'Blackhawk' }, offers: { '@type': 'Offer', price: '101', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Yokohama BluEarth ES32 215/60R16',        brand: { '@type': 'Brand', name: 'Yokohama' }, offers: { '@type': 'Offer', price: '122', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 215/60R16',        brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
