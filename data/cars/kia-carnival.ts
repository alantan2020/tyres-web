import type { CarData } from './types'

const data: CarData = {
  make: 'Kia',
  model: 'Carnival',
  makeSlug: 'kia',
  modelSlug: 'carnival',
  bgWord: 'CARNIVAL',

  seo: {
    title: 'Kia Carnival Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Kia Carnival KA4 uses 235/60R18 (mid) or 235/55R19 (Limousine). 5×114.3 bolt. From $142 installed. Compare Bridgestone vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Kia Carnival KA4: 235/60R18 (mid) or 235/55R19 (Limousine). 5×114.3, CB 67.1mm. From $142 installed in Singapore.',
    twitterDescription: 'Kia Carnival uses 235/60R18 (mid) or 235/55R19 (Limousine). From $142 installed in Singapore.',
    priceFrom: 142,
    oeSize: '235/60R18',
  },

  defaultGen: 'ka4',

  generations: [
    {
      key: 'ka4',
      label: 'KA4 (4th Gen)',
      years: '2021–2026',
      heroChips: [
        { label: 'Premium OE',    value: '235/60R18' },
        { label: 'Limousine OE',  value: '235/55R19' },
        { label: 'From installed', value: '$142', green: true },
      ],
      variants: [
        { name: '3.5 MPi / 2.2 CRDi (Premium trim)', sizes: [
          { tag: 'OE',  size: '235/60R18', note: '中配 18" 标配，最常见' },
          { tag: 'Alt', size: '235/55R19', note: '升 19"，Limousine 尺码' },
          { tag: 'Alt', size: '245/55R18', note: '稍宽同直径' },
        ]},
        { name: '3.5 MPi (Limousine trim)', sizes: [
          { tag: 'OE',  size: '235/55R19', note: 'Limousine 19" 标配' },
          { tag: 'OE',  size: '235/50R20', note: '20" 顶配（极少见）' },
          { tag: 'Alt', size: '235/60R18', note: '降 18"，舒适省钱' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021–2026 · KA4 · Limousine 20"', width: '7.5J', diameter: '20"', offset: 'ET50',   boltPattern: '5×114.3' },
    { label: '2021–2026 · KA4 · Limousine 19"', width: '7.5J', diameter: '19"', offset: 'ET54',   boltPattern: '5×114.3' },
    { label: '2021–2026 · KA4 · Premium 18"',   width: '7J',   diameter: '18"', offset: 'ET51.5', boltPattern: '5×114.3' },
    { label: '2021–2026 · KA4 · base 17"',      width: '6.5J', diameter: '17"', offset: 'ET49',   boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '110 Nm',
    notes: 'Kia Carnival uses 5×114.3 with 67.1mm centre bore — same as all Kia and Hyundai models (same Hyundai Motor Group). The 235/60R18 is shared with the Kia Sorento mid-trim and Hyundai Santa Fe base.',
  },

  priceTabs: [
    {
      size: '235/60R18',
      tabLabel: '235/60R18 · KA4 Premium 主力（53 条现货）',
      budget: {
        name: 'Blackhawk Agility SUV XL',
        desc: '8 座 MPV 平衡 · 53 条现货 · 耐磨',
        price: 142,
        also: 'Also: Nexen NFERA RU1, Yokohama Geolandar G055',
        waText: 'Kia Carnival KA4 235%2F60R18 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6 XL',
        desc: 'A 级湿地 · 静音 · MPV 首选 · 107 条现货',
        price: 219,
        also: 'Also: Michelin Primacy SUV+, Goodyear EfficientGrip 2 SUV',
        waText: 'Kia Carnival KA4 235%2F60R18 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '湿地操控最佳 · 60 条现货 · 旗舰 MPV 终极配置',
        price: 281,
        also: 'Also: Bridgestone Alenza 001, Continental CrossContact RX',
        waText: 'Kia Carnival KA4 235%2F60R18 premium tyre quote (Michelin PS4 SUV or similar)',
      },
      setEstimate: 'Budget $568–$680 · Mid-range $876–$1,000 · Premium $1,124–$1,280',
    },
    {
      size: '235/55R19',
      tabLabel: '235/55R19 · KA4 Limousine 高配（65 条现货）',
      budget: {
        name: 'Blackhawk Agility SUV XL',
        desc: '19" 超载级 · 65 条现货 · 性价比首选',
        price: 148,
        also: 'Also: Nexen NFERA RU1, Kumho Ecsta SUV',
        waText: 'Kia Carnival Limousine 235%2F55R19 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler H/L 400',
        desc: '豪华 MPV 专属 · 静音耐磨 · 62 条现货',
        price: 225,
        also: 'Also: Yokohama Advan V61 E+, Michelin Primacy SUV+',
        waText: 'Kia Carnival Limousine 235%2F55R19 mid-range tyre quote (Bridgestone Dueler or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV NEO',
        desc: '19" 豪华 MPV 终极选择 · A 级湿地',
        price: 305,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Zero',
        waText: 'Kia Carnival Limousine 235%2F55R19 premium tyre quote (Michelin PS4 SUV or similar)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $900–$1,040 · Premium $1,220–$1,400',
    },
  ],

  radarSize: '235/60R18',
  radarSource: 'Blackhawk (18 reviews) · Bridgestone (30 reviews) · Michelin (28 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.4',
      scores: [70, 75, 80, 72, 86, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
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
      title: 'Carnival KA4 · 235/60R18 Premium 车主',
      color: 'red',
      genKey: 'ka4',
      body: 'Carnival 235/60R18 货源充足（53 条）。8 座 MPV 推荐静音耐磨的 Bridgestone Turanza 6 XL（$219/条），四条约 $876。家庭用车安全优先，不建议选运动胎。预算用 Blackhawk Agility SUV（$142/条）四条仅约 $568。',
    },
    {
      title: 'Carnival Limousine · 235/55R19 车主',
      color: 'blue',
      genKey: 'ka4',
      body: 'Limousine 版 19" 胎我库 65 条现货。推荐 Bridgestone Dueler H/L 400（$225/条）——豪华 MPV 专属静音配方，四条约 $900。顶配 Limousine 建议 Michelin PS4 SUV NEO（$305/条），确保乘坐舒适度与安全。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Kia Carnival use in Singapore?',
      a: 'Kia Carnival KA4 (2021+): 235/60R18 (Premium trim) or 235/55R19 (Limousine trim). Some Limousine top specs use 235/50R20. The 235/60R18 is the most common size in Singapore.',
    },
    {
      q: 'What is the bolt pattern of the Kia Carnival?',
      a: 'Kia Carnival uses 5×114.3 with 67.1mm centre bore, M12×1.5, 110 Nm — same as all Kia and Hyundai models.',
    },
    {
      q: 'How much does it cost to change Kia Carnival tyres in Singapore?',
      a: 'For 235/60R18: budget $142 (Blackhawk); mid $219 (Bridgestone Turanza 6, popular); premium $281 (Michelin). Full set ~$568–$1,124. For 235/55R19: $148–$305 per tyre, set ~$592–$1,220.',
    },
    {
      q: 'Are Kia Carnival and Hyundai Staria tyres interchangeable?',
      a: 'Both use the same 5×114.3 bolt pattern and 67.1mm centre bore, so the tyre sizes are the same, but rim offsets differ between models. The Carnival\'s 235/60R18 tyre size is shared with the Kia Sorento and Hyundai Santa Fe.',
    },
    {
      q: 'Does the Kia Carnival replace the Sedona / Grand Carnival?',
      a: 'Yes. The Kia Carnival (KA4, 4th gen) replaced the Sedona/Grand Carnival in Singapore from 2022. Tyre sizes changed from the older 235/60R17 to 235/60R18 and 235/55R19 for the new generation.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Agility SUV XL 235/60R18',   brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '142', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 XL 235/60R18',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '219', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 235/60R18', brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '281', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Blackhawk Agility SUV XL 235/55R19',   brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Dueler HL400 235/55R19',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '225', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
