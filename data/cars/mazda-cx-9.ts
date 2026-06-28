import type { CarData } from './types'

const data: CarData = {
  make: 'Mazda',
  model: 'CX-9',
  makeSlug: 'mazda',
  modelSlug: 'cx-9',
  bgWord: 'CX9',

  seo: {
    title: 'Mazda CX-9 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mazda CX-9 TC (2016–2023) uses 255/50R20 (Sport/GT) or 255/55R19 (Touring base). 5×114.3, 67.1mm CB, M12×1.5 nut, 108 Nm. Discontinued 3-row flagship SUV. From $138 installed.',
    ogDescription: 'Mazda CX-9 TC: 255/50R20 (Sport/GT), 255/55R19 (Touring base). 5×114.3, 67.1mm. From $138.',
    twitterDescription: 'Mazda CX-9 uses 255/50R20 (Sport/GT) or 255/55R19 (base). 5×114.3 bolt. From $138.',
    priceFrom: 138,
    oeSize: '255/50R20',
  },

  defaultGen: 'tc',

  generations: [
    {
      key: 'tc',
      label: 'TC 2nd Gen (2016–2023)',
      years: '2016–2023',
      note: 'Mazda CX-9 TC is the current/final generation. Touring (base) uses 255/55R19 (19"); Sport and GT use 255/50R20 (20"). Turbocharged 2.5L. 3-row flagship SUV discontinued in 2023, replaced by CX-90.',
      heroChips: [
        { label: 'Touring base OE', value: '255/55R19' },
        { label: 'Sport / GT OE',  value: '255/50R20' },
        { label: 'From installed', value: '$138', green: true },
      ],
      variants: [
        { name: 'CX-9 Touring base (19")', sizes: [
          { tag: 'OE',  size: '255/55R19' },
          { tag: 'Alt', size: '265/50R19', note: '稍宽，保持 19" 外径' },
        ]},
        { name: 'CX-9 Sport / GT (20")', sizes: [
          { tag: 'OE',  size: '255/50R20' },
          { tag: 'Alt', size: '265/45R20', note: '外径接近，略宽' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: 'TC 2016+ · Touring base · 19"', width: '8.0J', diameter: '19"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: 'TC 2016+ · Sport/GT · 20"',     width: '8.5J', diameter: '20"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5 nut',
    torque: '108 Nm',
    notes: 'Mazda CX-9 uses 5×114.3 bolt pattern, 67.1mm centre bore — same as CX-5, Mazda 3/6. M12×1.5 lug nuts (not bolts), torque 108 Nm. Note: Mazda uses M12 nuts, lighter torque than Nissan (M14).',
  },

  priceTabs: [
    {
      size: '255/50R20',
      tabLabel: '255/50R20 · CX-9 Sport / GT 20"',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '20" 大型 SUV 胎 · CX-9 Sport/GT 预算首选',
        price: 138,
        also: 'Also: Kumho Crugen HP71, Nankang Cross Sport SP-9',
        waText: 'Mazda CX-9 255%2F50R20 budget tyre quote (Hankook Dynapro HP2 or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '20" SUV 旗舰 · CX-9 运动 SUV 最推荐',
        price: 248,
        also: 'Also: Michelin Latitude Sport 3, Bridgestone Alenza 001',
        waText: 'Mazda CX-9 255%2F50R20 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Alenza 001',
        desc: '20" 豪华 SUV 旗舰 · CX-9 GT 最佳驾感',
        price: 318,
        also: 'Also: Michelin Latitude Tour HP, Pirelli Scorpion Verde',
        waText: 'Mazda CX-9 GT 255%2F50R20 premium tyre quote (Bridgestone Alenza 001)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $992–$1,200 · Premium $1,272–$1,520',
    },
    {
      size: '255/55R19',
      tabLabel: '255/55R19 · CX-9 Touring base 19"',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '19" SUV 胎 · CX-9 Touring 预算选',
        price: 128,
        also: 'Also: Kumho Crugen HP71, Nexen Roadian AT Pro',
        waText: 'Mazda CX-9 Touring 255%2F55R19 budget tyre quote (Hankook Dynapro HP2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4+',
        desc: '19" 静音豪华 SUV · CX-9 Touring 最佳舒适选',
        price: 238,
        also: 'Also: Continental CrossContact RX, Bridgestone Alenza 001',
        waText: 'Mazda CX-9 Touring 255%2F55R19 mid-range tyre quote (Michelin Primacy 4+ or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental CrossContact RX',
        desc: '19" SUV 旗舰 · CX-9 Touring 干湿均衡最佳',
        price: 298,
        also: 'Also: Bridgestone Alenza 001, Michelin Latitude Sport 3',
        waText: 'Mazda CX-9 Touring 255%2F55R19 premium tyre quote (Continental CrossContact RX)',
      },
      setEstimate: 'Budget $512–$640 · Mid-range $952–$1,120 · Premium $1,192–$1,440',
    },
  ],

  radarSize: '255/50R20',
  radarSource: 'Continental (10 reviews) · Michelin (9 reviews) · Hankook (7 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [70, 72, 78, 74, 74, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nDynapro HP2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.7',
      scores: [88, 86, 86, 82, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nCrossContact RX',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [86, 86, 90, 82, 84, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nAlenza 001',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'CX-9 Sport/GT（255/50R20）— 停产旗舰三排 SUV，换大尺码轮胎',
      color: 'blue',
      genKey: 'tc',
      body: 'Mazda CX-9 于 2023 年停产，由 CX-90 接班。但在新加坡二手市场仍活跃，换胎需求稳定。255/50R20 是 Sport/GT 最常见规格，尺码较大。<strong>Continental CrossContact RX（$248/条）</strong>在 20" 大型 SUV 规格的干湿表现均属顶级，配合 CX-9 运动调校的底盘最匹配，整套约 $992。Bridgestone Alenza 001（$318/条）更静更豪华，适合追求安静乘坐体验的 GT 版车主。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mazda CX-9 use in Singapore?',
      a: 'Mazda CX-9 TC (2016–2023): Touring base uses 255/55R19; Sport and GT use 255/50R20. 5×114.3 bolt pattern, 67.1mm centre bore.',
    },
    {
      q: 'How much does it cost to replace Mazda CX-9 tyres in Singapore?',
      a: 'For 255/50R20 (Sport/GT): budget from $138/tyre; mid-range (Continental CrossContact RX) $248; premium $318. Full set $552–$1,272. For Touring 255/55R19: from $128 budget; mid $238; premium $298.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Dynapro HP2 255/50R20',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 255/50R20', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 255/50R20',      brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '318', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
