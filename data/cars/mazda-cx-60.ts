import type { CarData } from './types'

const data: CarData = {
  make: 'Mazda',
  model: 'CX-60',
  makeSlug: 'mazda',
  modelSlug: 'cx-60',
  bgWord: 'CX60',

  seo: {
    title: 'Mazda CX-60 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mazda CX-60 KH uses 235/60R18 (base) or 235/50R20 (high). 5×114.3 bolt. From $219 installed. Compare Bridgestone vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Mazda CX-60 KH: 235/60R18 (base) or 235/50R20 (high). 5×114.3, CB 67.1mm. From $219 installed in Singapore.',
    twitterDescription: 'Mazda CX-60 uses 235/60R18 (base) or 235/50R20 (high). From $219 installed in Singapore.',
    priceFrom: 219,
    oeSize: '235/60R18',
  },

  defaultGen: 'kh',

  generations: [
    {
      key: 'kh',
      label: 'KH (1st Gen)',
      years: '2022–2026',
      heroChips: [
        { label: '3.3T PHEV base OE', value: '235/60R18' },
        { label: '3.3T PHEV high OE', value: '235/50R20' },
        { label: 'From installed',     value: '$219', green: true },
      ],
      variants: [
        { name: '3.3T e-SKYACTIV PHEV (base/mid trim)', sizes: [
          { tag: 'OE',  size: '235/60R18', note: '18" 入门，货源有限' },
          { tag: 'Alt', size: '245/55R18', note: '稍宽同直径' },
          { tag: 'Alt', size: '235/55R19', note: '19" 升级' },
        ]},
        { name: '3.3T e-SKYACTIV PHEV (high/top trim)', sizes: [
          { tag: 'OE',  size: '235/50R20', note: '20" 高配标配' },
          { tag: 'Alt', size: '245/45R20', note: '20" 宽胎' },
          { tag: 'Alt', size: '235/60R18', note: '降 18"' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · KH · high 20"', width: '8J',   diameter: '20"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2022–2026 · KH · base 18"', width: '7.5J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Mazda CX-60 uses 5×114.3 with 67.1mm centre bore — same as all Mazda models. The CX-60 is Mazda\'s new flagship PHEV SUV with rear-wheel-drive bias. Very few units in Singapore as of 2026.',
  },

  priceTabs: [
    {
      size: '235/60R18',
      tabLabel: '235/60R18 · KH 入门（Hyundai Tucson 同尺码）',
      budget: {
        name: 'Bridgestone Alenza 001',
        desc: 'SUV 舒适 · 耐磨 · 有现货',
        price: 219,
        also: 'Also: Yokohama Geolandar H/T G056, Nexen NFERA RU1',
        waText: 'Mazda CX-60 235%2F60R18 budget tyre quote (Bridgestone Alenza or similar)',
        popular: true,
      },
      mid: {
        name: 'Bridgestone Turanza 6 XL',
        desc: '静音 · A 级湿地 · SUV 豪华感',
        price: 250,
        also: 'Also: Michelin Primacy SUV+, Goodyear Assurance MaxGuard',
        waText: 'Mazda CX-60 235%2F60R18 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '旗舰 SUV 运动向 · 最佳操控',
        price: 281,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde',
        waText: 'Mazda CX-60 235%2F60R18 premium tyre quote (Michelin PS4 SUV or similar)',
      },
      setEstimate: 'Mid-range $876–$1,000 · Premium $1,000–$1,180 · Top $1,124–$1,280',
    },
    {
      size: '235/50R20',
      tabLabel: '235/50R20 · KH 高配 20"（市场参考价）',
      budget: {
        name: 'Nexen NFERA RU1',
        desc: '20" 进口型号 · 价格参考',
        price: 210,
        also: 'Also: Kumho Ecsta, Hankook Ventus S1 EVO',
        waText: 'Mazda CX-60 235%2F50R20 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Michelin Primacy SUV+',
        desc: '20" SUV 首选 · 低滚阻 PHEV 续航友好',
        price: 295,
        also: 'Also: Bridgestone Alenza 001, Continental CrossContact RX',
        waText: 'Mazda CX-60 235%2F50R20 mid-range tyre quote (Michelin Primacy SUV%2B or similar)',
        popular: true,
      },
      premium: {
        name: 'Pirelli Scorpion Zero',
        desc: '20" 旗舰 · CX-60 运动底盘终极配置',
        price: 360,
        also: 'Also: Michelin Pilot Sport 4 SUV, Continental CrossContact RX',
        waText: 'Mazda CX-60 235%2F50R20 premium tyre quote (Pirelli Scorpion Zero or similar)',
      },
      setEstimate: 'Budget $840–$980 · Mid-range $1,180–$1,360 · Premium $1,440–$1,620',
    },
  ],

  radarSize: '235/60R18',
  radarSource: 'Bridgestone (22 reviews) · Michelin (28 reviews) · Pirelli (20 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'In-stock ⭐', labelClass: 'tier tier--mid', score: '8.1',
      scores: [78, 82, 84, 80, 74, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nAlenza 001',
      stats: [{ k: 'Wet', v: '78', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [83, 86, 84, 84, 72, 82], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy SUV+',
      stats: [{ k: 'Wet', v: '83', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Fuel', v: '82', hi: true }],
    },
    {
      label: 'Sport', labelClass: 'tier', score: '8.4',
      scores: [84, 88, 80, 83, 70, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Michelin\nPilot Sport 4 SUV',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '80', hi: false }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'CX-60 · 235/60R18 换胎',
      color: 'red',
      genKey: 'kh',
      body: 'CX-60 是 Mazda 旗舰 PHEV SUV，底盘调校偏运动，换胎建议选 SUV 专用轮胎。235/60R18 我库有货（Bridgestone Alenza 001 $219/条，183 条库存）。PHEV 车主注意：低滚阻轮胎有助于延长电动续航，推荐 Michelin Primacy SUV+（$250/条）——低滚阻 A 级。',
    },
    {
      title: 'CX-60 · 235/50R20 高配换胎',
      color: 'blue',
      genKey: 'kh',
      body: '20" 尺码 235/50R20 我库目前无货，以上为市场参考价。可 WhatsApp 询价，我们会帮您代订。新加坡 CX-60 数量较少，这尺码目前较难在本地大量采购到，请提前预订。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mazda CX-60 use in Singapore?',
      a: 'Mazda CX-60 KH: OE 235/60R18 (base/mid trim) or 235/50R20 (high/top trim). The CX-60 is a new PHEV SUV in Singapore, available since 2023.',
    },
    {
      q: 'What is the bolt pattern of the Mazda CX-60?',
      a: 'Mazda CX-60 uses 5×114.3 with 67.1mm centre bore, M12×1.5, 108 Nm — same as all Mazda models.',
    },
    {
      q: 'How much do Mazda CX-60 tyres cost in Singapore?',
      a: 'For 235/60R18 (base): from $219 (Bridgestone Alenza, in stock); premium $250–$281. Full set ~$876–$1,124. For 235/50R20 (high): market reference $210–$360 per tyre.',
    },
    {
      q: 'What tyre is best for Mazda CX-60 PHEV in Singapore?',
      a: 'For a PHEV, prioritize low-rolling-resistance tyres to maximize electric range. Michelin Primacy SUV+ (235/60R18) is ideal — A-rated rolling resistance. Avoid sports tyres that sacrifice fuel efficiency for grip, which reduces EV range.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 235/60R18', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '219', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 235/60R18', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '250', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin PS4 SUV 235/60R18',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '281', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
