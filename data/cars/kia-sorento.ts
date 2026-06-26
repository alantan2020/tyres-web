import type { CarData } from './types'

const data: CarData = {
  make: 'Kia',
  model: 'Sorento',
  makeSlug: 'kia',
  modelSlug: 'sorento',
  bgWord: 'SORENTO',

  seo: {
    title: 'Kia Sorento Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Kia Sorento MQ4 uses 235/60R18 (mid) or 235/55R19 (high/Hybrid). 5×114.3 bolt. From $142 installed. Compare Bridgestone vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Kia Sorento MQ4: 235/60R18 (mid) or 235/55R19 (Hybrid/top). 5×114.3, CB 67.1mm. From $142 installed in Singapore.',
    twitterDescription: 'Kia Sorento uses 235/60R18 (mid) or 235/55R19 (Hybrid). From $142 installed in Singapore.',
    priceFrom: 142,
    oeSize: '235/60R18',
  },

  defaultGen: 'mq4',

  generations: [
    {
      key: 'mq4',
      label: 'MQ4 (4th Gen)',
      years: '2021–2026',
      heroChips: [
        { label: 'Mid OE',         value: '235/60R18' },
        { label: 'Hybrid OE',      value: '235/55R19' },
        { label: 'From installed', value: '$142', green: true },
      ],
      variants: [
        { name: '2.2 CRDi / 2.5T (base/mid trim)', sizes: [
          { tag: 'OE',  size: '235/65R17', note: '基础版 17"（市场参考）' },
          { tag: 'OE',  size: '235/60R18', note: '中配 18" 最常见' },
          { tag: 'Alt', size: '245/55R18', note: '18" 稍宽' },
        ]},
        { name: '1.6T HEV / PHEV (high trim)', sizes: [
          { tag: 'OE',  size: '235/55R19', note: 'Hybrid / 顶配 19"' },
          { tag: 'OE',  size: '255/50R19', note: '部分顶配 19" 宽胎（市场参考）' },
          { tag: 'Alt', size: '235/60R18', note: '降 18"，舒适省油' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021–2026 · MQ4 · top 19" wide',   width: '8J',   diameter: '19"', offset: 'ET50',   boltPattern: '5×114.3' },
    { label: '2021–2026 · MQ4 · Hybrid 19"',     width: '7.5J', diameter: '19"', offset: 'ET49.5', boltPattern: '5×114.3' },
    { label: '2021–2026 · MQ4 · mid 18"',        width: '7.5J', diameter: '18"', offset: 'ET49.5', boltPattern: '5×114.3' },
    { label: '2021–2026 · MQ4 · base 17"',       width: '7J',   diameter: '17"', offset: 'ET47',   boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '110 Nm',
    notes: 'Kia Sorento uses 5×114.3 with 67.1mm centre bore — same as all Kia and Hyundai models. The 235/60R18 is shared with the Kia Carnival Premium, Hyundai Santa Fe mid, and Mazda CX-60 base.',
  },

  priceTabs: [
    {
      size: '235/60R18',
      tabLabel: '235/60R18 · MQ4 中配主力（53 条现货）',
      budget: {
        name: 'Blackhawk Agility SUV XL',
        desc: '7 座 SUV · 53 条现货 · 耐磨性价比',
        price: 142,
        also: 'Also: Nexen NFERA RU1, Yokohama Geolandar G055',
        waText: 'Kia Sorento MQ4 235%2F60R18 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6 XL',
        desc: 'A 级湿地 · 7 座静音首选 · 107 条现货',
        price: 219,
        also: 'Also: Michelin Primacy SUV+, Goodyear EfficientGrip 2 SUV',
        waText: 'Kia Sorento MQ4 235%2F60R18 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '操控最佳 · 雨天安全 · 60 条现货',
        price: 281,
        also: 'Also: Bridgestone Alenza 001, Continental CrossContact RX',
        waText: 'Kia Sorento MQ4 235%2F60R18 premium tyre quote (Michelin PS4 SUV or similar)',
      },
      setEstimate: 'Budget $568–$680 · Mid-range $876–$1,000 · Premium $1,124–$1,280',
    },
    {
      size: '235/55R19',
      tabLabel: '235/55R19 · Hybrid / 顶配（65 条现货）',
      budget: {
        name: 'Blackhawk Agility SUV XL',
        desc: 'SUV 19" · 65 条现货 · 入门升级',
        price: 148,
        also: 'Also: Nexen NFERA RU1, Kumho Ecsta SUV',
        waText: 'Kia Sorento Hybrid 235%2F55R19 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Yokohama Advan V61 E+',
        desc: '静音 SUV · 54 条现货 · 混动续航友好',
        price: 230,
        also: 'Also: Bridgestone Dueler HL400, Michelin Primacy SUV+',
        waText: 'Kia Sorento Hybrid 235%2F55R19 mid-range tyre quote (Yokohama V61 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV NEO',
        desc: 'A 级湿地 · 低滚阻 · 混动顶配',
        price: 305,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Zero',
        waText: 'Kia Sorento Hybrid 235%2F55R19 premium tyre quote (Michelin PS4 SUV or similar)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $920–$1,060 · Premium $1,220–$1,400',
    },
  ],

  radarSize: '235/60R18',
  radarSource: 'Blackhawk (18 reviews) · Bridgestone (28 reviews) · Michelin (26 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.4',
      scores: [70, 75, 78, 72, 86, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nAgility SUV',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '75', hi: false }, { k: 'NVH', v: '72', hi: false }, { k: 'Value', v: '86', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [82, 84, 85, 83, 74, 80], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza 6 XL',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '83', hi: true }, { k: 'Wear', v: '85', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [86, 90, 82, 84, 70, 80], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4 SUV',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '82', hi: false }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Sorento MQ4 中配 · 235/60R18 换胎',
      color: 'red',
      genKey: 'mq4',
      body: 'Sorento 235/60R18 与 Carnival、Santa Fe 同尺码，货源极充足。7 座 SUV 推荐 Bridgestone Turanza 6 XL（$219/条），A 级湿地静音，四条约 $876。Sorento 主要用于家庭出行，安全性优先——不建议选运动胎。',
    },
    {
      title: 'Sorento Hybrid · 235/55R19 换胎',
      color: 'blue',
      genKey: 'mq4',
      body: 'Hybrid 版 19" 胎推荐 Yokohama Advan V61 E+（$230/条）——低滚阻设计，四条约 $920，兼顾节油和运动感。顶配用 Michelin PS4 SUV NEO（$305/条），A 级湿地，混动燃油效率更好。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Kia Sorento use in Singapore?',
      a: 'Kia Sorento MQ4 (2021+): 235/65R17 (base), 235/60R18 (mid), or 235/55R19 (Hybrid/top). Some high-spec versions use 255/50R19. The 235/60R18 is the most common size in Singapore.',
    },
    {
      q: 'What is the bolt pattern of the Kia Sorento?',
      a: 'Kia Sorento uses 5×114.3 with 67.1mm centre bore, M12×1.5, 110 Nm — same as all Kia and Hyundai models.',
    },
    {
      q: 'How much does it cost to change Kia Sorento tyres in Singapore?',
      a: 'For 235/60R18 (mid): budget $142 (Blackhawk); mid $219 (Bridgestone Turanza 6, popular); premium $281 (Michelin). Full set ~$568–$1,124. For 235/55R19 (Hybrid): $148–$305 per tyre, set ~$592–$1,220.',
    },
    {
      q: 'Are Kia Sorento and Kia Carnival tyres interchangeable?',
      a: 'The 235/60R18 tyre size is shared between the Sorento mid-trim and Carnival Premium — the same tyre fits both. However, rim offsets differ (Sorento ET49.5 vs Carnival ET51.5), so wheels are not directly swappable without spacers.',
    },
    {
      q: 'What tyre is best for Kia Sorento Hybrid in Singapore?',
      a: 'For the Sorento HEV/PHEV (235/55R19): Michelin Primacy SUV+ or Yokohama Advan V61 E+ — both have low rolling resistance for hybrid efficiency. Avoid high-performance sporty tyres that increase fuel consumption.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Agility SUV XL 235/60R18',   brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '142', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 XL 235/60R18',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '219', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 235/60R18', brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '281', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Blackhawk Agility SUV XL 235/55R19',   brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Yokohama Advan V61 E+ 235/55R19',      brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '230', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
