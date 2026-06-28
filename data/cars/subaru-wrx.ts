import type { CarData } from './types'

const data: CarData = {
  make: 'Subaru',
  model: 'WRX',
  makeSlug: 'subaru',
  modelSlug: 'wrx',
  bgWord: 'WRX',

  seo: {
    title: 'Subaru WRX Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Subaru WRX VB (2022+) uses 245/40R18 (WRX base) or 245/35R19 (WRX Sportswagon). VA uses 245/40R18 (WRX) or 245/35R19 (STI). ⚠️ WRX=5×114.3; STI=5×114.3. 56.1mm CB. AWD. From $118 installed.',
    ogDescription: 'Subaru WRX VB: 245/40R18 (WRX) or 245/35R19 (STI). 5×114.3, 56.1mm. Performance AWD. From $118.',
    twitterDescription: 'Subaru WRX uses 245/40R18 or 245/35R19 (STI). 5×114.3, 56.1mm. AWD. From $118.',
    priceFrom: 118,
    oeSize: '245/40R18',
  },

  defaultGen: 'vb',

  generations: [
    {
      key: 'vb',
      label: 'VB 5th Gen (2022–2026)',
      years: '2022–2026',
      note: 'Current Subaru WRX. Note: No WRX STI in this gen yet. WRX base and Limited use 245/40R18 (18"); WRX GT uses 245/35R19. ⚠️ Unlike Impreza (5×100), WRX uses 5×114.3. AWD: replace all 4 tyres together — performance driving context means tyre matching is critical.',
      heroChips: [
        { label: 'WRX / Limited OE', value: '245/40R18' },
        { label: 'WRX GT OE',        value: '245/35R19' },
        { label: 'From installed',   value: '$118', green: true },
      ],
      variants: [
        { name: 'WRX / Limited (18")', sizes: [
          { tag: 'OE',  size: '245/40R18' },
          { tag: 'Alt', size: '255/35R18', note: '稍宽，运动感更强' },
        ]},
        { name: 'WRX GT (19")', sizes: [
          { tag: 'OE',  size: '245/35R19' },
          { tag: 'Alt', size: '255/30R19', note: '略宽，赛道感极强' },
        ]},
      ],
    },
    {
      key: 'va',
      label: 'VA 4th Gen (2014–2021)',
      years: '2014–2021',
      note: 'Previous WRX/WRX STI generation VA. WRX uses 245/40R17 or 245/40R18; STI uses 245/40R18 or 245/35R19. Both use 5×114.3.',
      heroChips: [
        { label: 'VA WRX OE',     value: '245/40R18' },
        { label: 'VA WRX STI OE', value: '245/35R19' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: 'VA WRX (18")', sizes: [{ tag: 'OE', size: '245/40R18' }] },
        { name: 'VA WRX STI (19")', sizes: [{ tag: 'OE', size: '245/35R19' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'VB 2022+ · WRX/Limited · 18"', width: '8.0J', diameter: '18"', offset: 'ET55', boltPattern: '5×114.3' },
    { label: 'VB 2022+ · WRX GT · 19"',       width: '8.5J', diameter: '19"', offset: 'ET55', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M12×1.25 nut',
    torque: '120 Nm',
    notes: '⚠️ Subaru WRX uses 5×114.3 bolt pattern — different from Impreza/Forester/XV which use 5×100. WRX centre bore is 56.1mm, M12×1.25 lug nuts, torque 120 Nm. As a performance AWD car, tyre matching across all 4 wheels is critical — replace all 4 together.',
  },

  priceTabs: [
    {
      size: '245/40R18',
      tabLabel: '245/40R18 · WRX / Limited 18"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 运动节能胎 · WRX 性能预算首选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Subaru WRX 245%2F40R18 budget tyre quote (Hankook Ventus S1 Evo3 or similar)',
      },
      mid: {
        name: 'Michelin Pilot Sport 5',
        desc: '18" 运动旗舰 · WRX AWD 驾感最大化',
        price: 218,
        also: 'Also: Continental PremiumContact 7, Bridgestone Potenza Sport',
        waText: 'Subaru WRX 245%2F40R18 mid-range tyre quote (Michelin Pilot Sport 5 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Potenza Sport',
        desc: '18" 极致操控 · WRX 赛道级换胎',
        price: 278,
        also: 'Also: Pirelli P Zero, Michelin Pilot Sport 4S',
        waText: 'Subaru WRX 245%2F40R18 premium tyre quote (Bridgestone Potenza Sport)',
      },
      setEstimate: 'Budget $472–$600 · Mid-range $872–$1,040 · Premium $1,112–$1,360',
    },
    {
      size: '245/35R19',
      tabLabel: '245/35R19 · WRX GT / STI 19"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" 运动胎 · WRX GT 预算选',
        price: 148,
        also: 'Also: Kumho Ecsta PS91, Nexen N\'Fera SU1',
        waText: 'Subaru WRX GT 245%2F35R19 budget tyre quote (Hankook Ventus S1 Evo3 or similar)',
      },
      mid: {
        name: 'Michelin Pilot Sport 5',
        desc: '19" 运动旗舰 · WRX GT / STI 最推荐',
        price: 258,
        also: 'Also: Continental PremiumContact 7, Pirelli P Zero',
        waText: 'Subaru WRX GT 245%2F35R19 mid-range tyre quote (Michelin Pilot Sport 5 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Potenza Sport',
        desc: '19" 极致操控 · WRX STI 赛道首选',
        price: 318,
        also: 'Also: Pirelli P Zero Corsa, Michelin Pilot Sport 4S',
        waText: 'Subaru WRX STI 245%2F35R19 premium tyre quote (Bridgestone Potenza Sport)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $1,032–$1,240 · Premium $1,272–$1,560',
    },
  ],

  radarSize: '245/40R18',
  radarSource: 'Michelin (13 reviews) · Bridgestone (11 reviews) · Hankook (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget · Sport', labelClass: 'tier', score: '7.5',
      scores: [76, 78, 76, 76, 78, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '76', hi: false }, { k: 'Dry', v: '78', hi: false }, { k: 'NVH', v: '76', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Sport Popular', labelClass: 'tier tier--mid', score: '9.0',
      scores: [90, 92, 82, 84, 88, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPilot Sport 5',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Grip', v: '88', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '9.1',
      scores: [88, 94, 78, 86, 90, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nPotenza Sport',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '78', hi: false }, { k: 'Grip', v: '90', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'WRX（245/40R18）— 性能 AWD，必须 4 条同款运动胎',
      color: 'blue',
      genKey: 'vb',
      body: 'Subaru WRX 是新加坡最受改装爱好者喜爱的性能轿车。换胎时两个关键原则：①<strong>AWD 必须 4 条同款</strong>——WRX Symmetrical AWD 对 4 轮速度一致性要求极高，不同品牌/型号胎混用风险极大；②<strong>选运动性能胎</strong>，不要选节能舒适胎——WRX 功率 272 hp+，舒适胎无法发挥其性能。<strong>Michelin Pilot Sport 5（$218/条）</strong>是 WRX 车主最受推荐的方案，干湿抓地力顶级，整套约 $872。追求极限的赛道用途，Bridgestone Potenza Sport 干地抓地无与伦比。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Subaru WRX use in Singapore?',
      a: 'Subaru WRX VB (2022+): WRX/Limited uses 245/40R18; WRX GT uses 245/35R19. VA (2014–2021): WRX uses 245/40R18; WRX STI uses 245/35R19. ⚠️ WRX uses 5×114.3 (NOT 5×100 like Impreza). Centre bore 56.1mm.',
    },
    {
      q: 'What tyres are best for the Subaru WRX in Singapore?',
      a: 'Michelin Pilot Sport 5 (245/40R18, $218/tyre) — top wet and dry performance. Bridgestone Potenza Sport for track/aggressive driving. For AWD safety: always replace all 4 tyres simultaneously with the same brand and model.',
    },
    {
      q: 'How much does it cost to replace Subaru WRX tyres in Singapore?',
      a: 'For 245/40R18: budget from $118/tyre; mid-range (Michelin Pilot Sport 5) $218; premium $278. Full set $472–$1,112. For GT/STI 245/35R19: from $148 budget; mid $258; premium $318.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/40R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Pilot Sport 5 245/40R18',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Potenza Sport 245/40R18',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '278', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
