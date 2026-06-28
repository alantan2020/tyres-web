import type { CarData } from './types'

const data: CarData = {
  make: 'Skoda',
  model: 'Karoq',
  makeSlug: 'skoda',
  modelSlug: 'karoq',
  bgWord: 'KAROQ',

  seo: {
    title: 'Skoda Karoq Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Skoda Karoq NU (2018+) uses 215/60R17 (Ambition) or 235/50R18 (Style/Sportline). 5×112 VW Group, 57.1mm CB, M14×1.5 bolt. Compact SUV. From $88 installed.',
    ogDescription: 'Skoda Karoq NU: 215/60R17 (Ambition), 235/50R18 (Style). 5×112 VW Group, 57.1mm. Compact SUV. From $88.',
    twitterDescription: 'Skoda Karoq uses 215/60R17 or 235/50R18. 5×112 VW Group bolt. Compact SUV. From $88.',
    priceFrom: 88,
    oeSize: '215/60R17',
  },

  defaultGen: 'nu',

  generations: [
    {
      key: 'nu',
      label: 'NU 1st Gen (2018–2026)',
      years: '2018–2026',
      note: 'Skoda Karoq is a compact SUV on the MQB platform (shared with VW Tiguan). Ambition uses 215/60R17 (17"); Style and Sportline use 235/50R18 (18"). 5×112 VW Group bolt pattern. Available in Singapore as a popular compact SUV alternative.',
      heroChips: [
        { label: 'Ambition OE',    value: '215/60R17' },
        { label: 'Style OE',       value: '235/50R18' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'Karoq Ambition (17")', sizes: [
          { tag: 'OE',  size: '215/60R17' },
          { tag: 'Alt', size: '225/55R17', note: '稍宽，外径相近' },
        ]},
        { name: 'Karoq Style / Sportline (18")', sizes: [
          { tag: 'OE',  size: '235/50R18' },
          { tag: 'Alt', size: '245/45R18', note: '稍宽，运动感更强' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: 'NU 2018+ · Ambition · 17"',        width: '7.0J', diameter: '17"', offset: 'ET46', boltPattern: '5×112' },
    { label: 'NU 2018+ · Style/Sportline · 18"', width: '7.5J', diameter: '18"', offset: 'ET46', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '57.1mm',
    stud: 'M14×1.5 bolt',
    torque: '120 Nm',
    notes: 'Skoda Karoq uses 5×112 bolt pattern, 57.1mm centre bore — VW Group standard. Compatible with VW Golf/Tiguan/Passat, Audi A3/A4, Seat Leon wheels of matching offset. M14×1.5 bolts, torque 120 Nm.',
  },

  priceTabs: [
    {
      size: '215/60R17',
      tabLabel: '215/60R17 · Karoq Ambition 17"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 节能 SUV 胎 · Karoq Ambition 预算首选',
        price: 88,
        also: 'Also: Kumho Ecsta KH27, Nexen N\'Blue HD Plus',
        waText: 'Skoda Karoq 215%2F60R17 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '17" 静音舒适 · Karoq 家用最推荐',
        price: 168,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza T005',
        waText: 'Skoda Karoq 215%2F60R17 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 7',
        desc: '17" 旗舰 · Karoq 换胎提升驾感',
        price: 218,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza 6',
        waText: 'Skoda Karoq 215%2F60R17 premium tyre quote (Continental PremiumContact 7)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $672–$800 · Premium $872–$1,040',
    },
    {
      size: '235/50R18',
      tabLabel: '235/50R18 · Karoq Style / Sportline 18"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" 运动节能胎 · Karoq Style 预算选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Skoda Karoq Style 235%2F50R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '18" 干湿均衡旗舰 · Karoq Style 最推荐',
        price: 208,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Skoda Karoq Style 235%2F50R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '18" 运动旗舰 · Karoq Sportline 驾感升级',
        price: 258,
        also: 'Also: Continental PremiumContact 7, Bridgestone Potenza Sport',
        waText: 'Skoda Karoq Sportline 235%2F50R18 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $472–$600 · Mid-range $832–$1,000 · Premium $1,032–$1,240',
    },
  ],

  radarSize: '215/60R17',
  radarSource: 'Continental (10 reviews) · Michelin (8 reviews) · Hankook (7 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [70, 72, 78, 72, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 84, 90, 78, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [90, 90, 88, 80, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Continental\nPremiumContact 7',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Karoq Ambition（215/60R17）— VW 系紧凑 SUV，选大众偏好品牌',
      color: 'blue',
      genKey: 'nu',
      body: 'Skoda Karoq 与 VW Tiguan 共平台（MQB），换胎选择与大众系车型基本一致。215/60R17 的 <strong>Michelin Primacy 4（$168/条）</strong>在 Karoq 车主中口碑最佳，整套约 $672，静音且耐磨。Style 版（235/50R18）推荐 Continental PremiumContact 6（$208/条），是 VW 集团 OE 首选，干湿抓地力均属旗舰，整套约 $832。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Skoda Karoq use in Singapore?',
      a: 'Skoda Karoq NU (2018+): Ambition uses 215/60R17; Style and Sportline use 235/50R18. 5×112 bolt pattern (VW Group), 57.1mm centre bore.',
    },
    {
      q: 'How much does it cost to replace Skoda Karoq tyres in Singapore?',
      a: 'For Ambition 215/60R17: budget from $88/tyre; mid-range (Michelin Primacy 4) $168; premium $218. Full set $352–$872. For Style 235/50R18: from $118 budget; mid $208; premium $258.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 215/60R17',         brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 215/60R17',           brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Continental PremiumContact 6 235/50R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
