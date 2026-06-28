import type { CarData } from './types'

const data: CarData = {
  make: 'Lexus',
  model: 'CT',
  makeSlug: 'lexus',
  modelSlug: 'ct',
  bgWord: 'CT',

  seo: {
    title: 'Lexus CT200h Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Lexus CT200h (ZWA10) uses 205/55R16 (base/F Package) or 215/45R17 (F Sport). 5×100 bolt pattern, 54.1mm CB. Different from other Lexus models — do not use 5×114.3 rims. From $78 installed.',
    ogDescription: 'Lexus CT200h: 205/55R16 (base), 215/45R17 (F Sport). 5×100 bolt — shares Prius platform, NOT 5×114.3. From $78 installed.',
    twitterDescription: 'Lexus CT200h uses 205/55R16 or 215/45R17. 5×100 bolt (not 5×114.3). From $78.',
    priceFrom: 78,
    oeSize: '205/55R16',
  },

  defaultGen: 'zwa10',

  generations: [
    {
      key: 'zwa10',
      label: 'ZWA10 1st Gen (2011–2022)',
      years: '2011–2022',
      note: 'Only generation of CT. CT200h is built on Toyota Prius ZVW30 platform and shares its 5×100 bolt pattern — this is different from all other Lexus models (IS/ES/NX/RX which use 5×114.3). Confirm bolt pattern before buying aftermarket wheels.',
      heroChips: [
        { label: 'Base / F Package OE', value: '205/55R16' },
        { label: 'F Sport OE',          value: '215/45R17' },
        { label: 'From installed',       value: '$78', green: true },
      ],
      variants: [
        { name: 'CT200h base / F Package (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
          { tag: 'Alt', size: '215/45R17', note: '升 17"，需确认偏距匹配' },
        ]},
        { name: 'CT200h F Sport (17")', sizes: [
          { tag: 'OE',  size: '215/45R17' },
          { tag: 'Alt', size: '225/45R17', note: '稍宽但须确认挡泥板间隙' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2011–2022 · base / F Package · 16"', width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×100' },
    { label: '2011–2022 · F Sport · 17"',          width: '7.0J', diameter: '17"', offset: 'ET45', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '54.1mm',
    stud: 'M12×1.5 nut',
    torque: '103 Nm',
    notes: '⚠️ Lexus CT200h uses 5×100 bolt pattern (NOT 5×114.3 like IS/NX/RX). It shares the Toyota Prius ZVW30 platform. Centre bore 54.1mm. M12×1.5 lug nuts, torque 103 Nm. Aftermarket 5×114.3 wheels from other Lexus models will not fit without adapter.',
  },

  priceTabs: [
    {
      size: '205/55R16',
      tabLabel: '205/55R16 · base / F Package',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 节能胎 · CT200h 通勤预算首选',
        price: 78,
        also: 'Also: Kumho Ecowing ES31, Nankang Econex NA-1',
        waText: 'Lexus CT200h 205%2F55R16 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '16" 静音舒适 · CT200h 日用最佳',
        price: 128,
        also: 'Also: Bridgestone Turanza T005, Continental PremiumContact 6',
        waText: 'Lexus CT200h 205%2F55R16 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '16" 静音旗舰 · 雨天 A 级',
        price: 148,
        also: 'Also: Continental PremiumContact 7, Bridgestone Turanza 6',
        waText: 'Lexus CT200h 205%2F55R16 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $312–$392 · Mid-range $512–$640 · Premium $592–$720',
    },
    {
      size: '215/45R17',
      tabLabel: '215/45R17 · F Sport 17"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '17" 运动节能胎 · CT200h F Sport 预算选',
        price: 98,
        also: 'Also: Kumho Solus 4, Nexen N\'Blue HD Plus',
        waText: 'Lexus CT200h F Sport 215%2F45R17 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '17" 静音干湿均衡 · F Sport 运动驾感',
        price: 158,
        also: 'Also: Michelin Primacy 4, Pirelli Cinturato P7',
        waText: 'Lexus CT200h F Sport 215%2F45R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '17" 运动旗舰 · 干湿综合最强',
        price: 218,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Lexus CT200h F Sport 215%2F45R17 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $632–$760 · Premium $872–$1,040',
    },
  ],

  radarSize: '205/55R16',
  radarSource: 'Michelin (14 reviews) · Continental (11 reviews) · Bridgestone (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [70, 72, 80, 74, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 84, 88, 78, 82, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [88, 88, 90, 80, 84, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'CT200h（205/55R16）— 注意 5×100 螺孔，不能用其他 Lexus 轮毂',
      color: 'red',
      genKey: 'zwa10',
      body: 'Lexus CT200h 是 Lexus 家族中唯一使用 <strong>5×100 螺孔</strong>的车型——其他 Lexus（IS、NX、RX、ES）均为 5×114.3。原因是 CT200h 基于 Toyota Prius ZVW30 底盘开发，共用 Prius 的轮毂规格。换装 IS/NX/RX 钢圈时须确认螺孔（否则完全装不上）。轮胎尺码 205/55R16 在新加坡货源充足，Bridgestone Turanza T005（$138/条）和 Michelin Primacy 4（$128/条）是最受 CT200h 车主好评的选择，整套约 $512–$552。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Lexus CT200h use in Singapore?',
      a: 'Lexus CT200h base and F Package: 205/55R16. F Sport version: 215/45R17. All use 5×100 bolt pattern, 54.1mm centre bore — different from all other Lexus models which use 5×114.3.',
    },
    {
      q: 'What is the bolt pattern of the Lexus CT200h?',
      a: 'Lexus CT200h uses 5×100 bolt pattern, 54.1mm centre bore. This is NOT the same as other Lexus models (IS/NX/RX/ES which use 5×114.3). CT200h shares the Toyota Prius ZVW30 platform. M12×1.5 lug nuts, torque 103 Nm.',
    },
    {
      q: 'How much does it cost to replace Lexus CT200h tyres in Singapore?',
      a: 'For 205/55R16: budget from $78/tyre; mid-range (Michelin Primacy 4) from $128/tyre; premium from $148/tyre. Full set: $312–$592. For F Sport 215/45R17: from $98/tyre budget; mid $158; premium $218.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 205/55R16',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '78',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 205/55R16',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 205/55R16',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus Prime4 215/45R17',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental PremiumContact 6 215/45R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
