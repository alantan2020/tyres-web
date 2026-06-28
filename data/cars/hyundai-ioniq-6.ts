import type { CarData } from './types'

const data: CarData = {
  make: 'Hyundai',
  model: 'Ioniq 6',
  makeSlug: 'hyundai',
  modelSlug: 'ioniq-6',
  bgWord: 'IONIQ6',

  seo: {
    title: 'Hyundai Ioniq 6 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Hyundai Ioniq 6 N97 (2022+): Standard RWD uses 245/45R18; Long Range RWD/AWD uses 245/40R19. 5×114.3, 67.1mm CB. EV sedan. XL-rated and low rolling resistance recommended. From $118 installed.',
    ogDescription: 'Hyundai Ioniq 6: 245/45R18 (Standard RWD), 245/40R19 (Long Range). 5×114.3, 67.1mm. EV. From $118.',
    twitterDescription: 'Hyundai Ioniq 6 uses 245/45R18 (standard) or 245/40R19 (long range). 5×114.3. EV. From $118.',
    priceFrom: 118,
    oeSize: '245/45R18',
  },

  defaultGen: 'n97',

  generations: [
    {
      key: 'n97',
      label: 'N97 1st Gen (2022–2026)',
      years: '2022–2026',
      note: 'Ioniq 6 is a streamlined EV sedan on the E-GMP platform. Standard RWD uses 245/45R18 (18"); Long Range RWD and AWD use 245/40R19 (19"). At 1,800–2,100 kg, XL-rated low rolling resistance tyres recommended. AWD: 4 tyres must be identical.',
      heroChips: [
        { label: 'Standard RWD OE',    value: '245/45R18' },
        { label: 'Long Range RWD/AWD OE', value: '245/40R19' },
        { label: 'From installed',      value: '$118', green: true },
      ],
      variants: [
        { name: 'Ioniq 6 Standard RWD (18")', sizes: [
          { tag: 'OE',  size: '245/45R18' },
          { tag: 'XL',  size: '245/45R18 XL', note: 'XL 规格强烈推荐 —— EV 车重 1,800 kg+' },
        ]},
        { name: 'Ioniq 6 Long Range RWD / AWD (19")', sizes: [
          { tag: 'OE',  size: '245/40R19' },
          { tag: 'XL',  size: '245/40R19 XL', note: 'AWD 必须 4 条同款' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · Standard RWD · 18"',       width: '7.5J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2022+ · Long Range RWD/AWD · 19"', width: '8.0J', diameter: '19"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M14×1.5 bolt',
    torque: '140 Nm',
    notes: 'Hyundai Ioniq 6 uses 5×114.3 bolt pattern, 67.1mm centre bore — same as Ioniq 5, Kona, Tucson. M14×1.5 wheel bolts, torque 140 Nm. XL-rated low rolling resistance tyres recommended for range optimisation. AWD: all 4 tyres must be the same brand and model.',
  },

  priceTabs: [
    {
      size: '245/45R18',
      tabLabel: '245/45R18 · Standard RWD 18"',
      budget: {
        name: 'Hankook iON Evo',
        desc: '18" EV 专属胎 XL · Ioniq 6 RWD 预算首选',
        price: 118,
        also: 'Also: Kumho EV31, Nexen N\'Fera Primus EV',
        waText: 'Hyundai Ioniq 6 245%2F45R18 budget EV tyre quote (Hankook iON Evo or similar)',
      },
      mid: {
        name: 'Michelin e.Primacy',
        desc: '18" 低滚阻旗舰 XL · Ioniq 6 续航首选',
        price: 218,
        also: 'Also: Continental EcoContact 6, Bridgestone Turanza Eco',
        waText: 'Hyundai Ioniq 6 245%2F45R18 mid-range EV tyre quote (Michelin e.Primacy or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 7',
        desc: '18" 静音运动 XL · Ioniq 6 流体线条配最佳',
        price: 278,
        also: 'Also: Michelin Pilot Sport EV, Bridgestone Turanza 6',
        waText: 'Hyundai Ioniq 6 245%2F45R18 premium EV tyre quote (Continental PremiumContact 7)',
      },
      setEstimate: 'Budget $472–$600 · Mid-range $872–$1,040 · Premium $1,112–$1,360',
    },
    {
      size: '245/40R19',
      tabLabel: '245/40R19 · Long Range 19"',
      budget: {
        name: 'Hankook iON Evo',
        desc: '19" EV 专属胎 XL · Long Range 预算选',
        price: 148,
        also: 'Also: Kumho EV31, Nexen N\'Fera Primus EV',
        waText: 'Hyundai Ioniq 6 Long Range 245%2F40R19 budget EV tyre quote (Hankook iON Evo or similar)',
      },
      mid: {
        name: 'Michelin e.Primacy',
        desc: '19" 低滚阻旗舰 XL · Long Range AWD 4 条必须同款',
        price: 258,
        also: 'Also: Continental EcoContact 6, Bridgestone Alenza 001',
        waText: 'Hyundai Ioniq 6 Long Range 245%2F40R19 mid-range EV tyre quote (Michelin e.Primacy or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: '19" EV 运动旗舰 · Long Range 性能最强',
        price: 338,
        also: 'Also: Continental PremiumContact 7, Pirelli P Zero All Season',
        waText: 'Hyundai Ioniq 6 Long Range 245%2F40R19 premium EV tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $1,032–$1,240 · Premium $1,352–$1,640',
    },
  ],

  radarSize: '245/45R18',
  radarSource: 'Michelin (18 reviews) · Continental (14 reviews) · Hankook (11 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget · EV', labelClass: 'tier', score: '7.5',
      scores: [74, 74, 82, 76, 82, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\niON Evo',
      stats: [{ k: 'Wet', v: '74', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '82', hi: true }, { k: 'Range', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ EV Popular', labelClass: 'tier tier--mid', score: '8.8',
      scores: [88, 86, 92, 82, 90, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\ne.Primacy',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '92', hi: true }, { k: 'Range', v: '90', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [90, 90, 86, 80, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Continental\nPremiumContact 7',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Grip', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Ioniq 6（245/45R18）— 低风阻 EV 轿车，选低滚阻胎最大化续航',
      color: 'blue',
      genKey: 'n97',
      body: 'Ioniq 6 极低风阻系数（Cd 0.21）已经最大化了空气动力学效率，换低滚阻胎是进一步提升续航的关键。<strong>Michelin e.Primacy XL（$218/条）</strong>是最受 Ioniq 6 车主推荐的换胎方案——低滚阻，XL 承载，NVH 极静，整套约 $872。Continental EcoContact 6 XL（约 $198/条）性价比更高。Long Range AWD 版（245/40R19）换胎时 <strong>4 条必须同款</strong>，否则 AWD 系统会受干扰。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Hyundai Ioniq 6 use in Singapore?',
      a: 'Hyundai Ioniq 6 N97 (2022+): Standard RWD uses 245/45R18; Long Range RWD and AWD use 245/40R19. Both require XL-rated tyres. 5×114.3 bolt pattern, 67.1mm centre bore.',
    },
    {
      q: 'How much does it cost to replace Hyundai Ioniq 6 tyres in Singapore?',
      a: 'For Standard RWD 245/45R18: budget from $118/tyre; mid-range (Michelin e.Primacy) $218; premium $278. Full set $472–$1,112. For Long Range 245/40R19: from $148 budget; mid $258; premium $338.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook iON Evo 245/45R18',           brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin e.Primacy 245/45R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin e.Primacy 245/40R19',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
