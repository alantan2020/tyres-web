import type { CarData } from './types'

const data: CarData = {
  make: 'Volkswagen',
  model: 'T-Cross',
  makeSlug: 'volkswagen',
  modelSlug: 't-cross',
  bgWord: 'TCROSS',

  seo: {
    title: 'Volkswagen T-Cross Tyre Size & Best Price Singapore | SGCarPass',
    description: 'VW T-Cross C11 (2019+) uses 195/60R16 (base) or 205/50R17 (R-Line). 5×100 bolt, 57.1mm CB. From $88 installed in Singapore.',
    ogDescription: 'VW T-Cross C11: 195/60R16 (Life/Comfortline), 205/50R17 (Style/R-Line). 5×100, 57.1mm CB. Shares platform with Polo AW. From $88 installed.',
    twitterDescription: 'VW T-Cross uses 195/60R16 (base) or 205/50R17 (R-Line). 5×100 bolt. From $88 installed.',
    priceFrom: 88,
    oeSize: '205/50R17',
  },

  defaultGen: 'c11',

  generations: [
    {
      key: 'c11',
      label: 'C11 1st Gen (2019–2026)',
      years: '2019–2026',
      note: 'T-Cross shares the MQB-A0 platform with Polo AW. Same bolt pattern (5×100). Singapore gets Life (16") and Style/R-Line (17") trims.',
      heroChips: [
        { label: 'Life / Comfortline OE', value: '195/60R16' },
        { label: 'Style OE',              value: '205/50R17' },
        { label: 'R-Line OE',             value: '205/50R17' },
        { label: 'From installed',         value: '$88', green: true },
      ],
      variants: [
        { name: 'Life / Comfortline (16")', sizes: [
          { tag: 'OE',  size: '195/60R16' },
          { tag: 'Alt', size: '205/55R16', note: '稍宽，接地面积更大' },
          { tag: 'Alt', size: '205/50R17', note: '升 17"，Style 同款' },
        ]},
        { name: 'Style / R-Line (17")', sizes: [
          { tag: 'OE',  size: '205/50R17' },
          { tag: 'Alt', size: '215/50R17', note: '稍宽，操控提升' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019+ · C11 · Style / R-Line · 17"', width: '7.0J', diameter: '17"', offset: 'ET45', boltPattern: '5×100' },
    { label: '2019+ · C11 · Life · 16"',           width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '57.1mm',
    stud: 'M14×1.5 bolt',
    torque: '120 Nm',
    notes: 'VW T-Cross uses 5×100 bolt pattern — same as VW Polo AW. Different from most other VW Group vehicles (5×112). 57.1mm centre bore. M14×1.5 lug bolts, torque 120 Nm. T-Cross rims are interchangeable with Polo AW rims of the same diameter.',
  },

  priceTabs: [
    {
      size: '205/50R17',
      tabLabel: '205/50R17 · Style / R-Line 主力',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '17" 紧凑 SUV 运动胎 · T-Cross 预算首选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'VW T-Cross 205%2F50R17 R-Line budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '干湿地均衡 · T-Cross R-Line 首选换胎',
        price: 168,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'VW T-Cross 205%2F50R17 R-Line mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '17" 紧凑 SUV 运动操控最佳 · T-Cross R-Line 驾驶感升级',
        price: 198,
        also: 'Also: Continental SportContact 6, Pirelli P-Zero',
        waText: 'VW T-Cross 205%2F50R17 R-Line premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $672–$800 · Premium $792–$920',
    },
    {
      size: '195/60R16',
      tabLabel: '195/60R16 · Life / Comfortline 基础版',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 舒适节能胎 · T-Cross Life 预算首选',
        price: 88,
        also: 'Also: Nankang Econex NA-1, Bridgestone Ecopia',
        waText: 'VW T-Cross 195%2F60R16 Life budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '16" 静音舒适 · T-Cross 城市通勤最佳',
        price: 138,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'VW T-Cross 195%2F60R16 Life mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4',
        desc: '16" 舒适驾驶 · 雨天安全首选 · T-Cross 通勤升级',
        price: 168,
        also: 'Also: Pirelli Cinturato P7, Continental PremiumContact 7',
        waText: 'VW T-Cross 195%2F60R16 Life premium tyre quote (Michelin Primacy 4)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $552–$680 · Premium $672–$800',
    },
  ],

  radarSize: '205/50R17',
  radarSource: 'Continental (14 reviews) · Bridgestone (11 reviews) · Michelin (10 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [70, 74, 76, 74, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '76', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 86, 86, 80, 80, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [88, 90, 86, 80, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: false }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'T-Cross R-Line（205/50R17）— 紧凑城市 SUV 换胎首选',
      color: 'blue',
      genKey: 'c11',
      body: 'VW T-Cross R-Line 17" 在新加坡城市通勤表现优秀，Continental PremiumContact 6（$168/条）是干湿地均衡最佳，与 T-Cross 轻盈的 MQB 底盘搭配体验最好，整套约 $672。Michelin Pilot Sport 4（$198/条）操控极限更高，适合更喜欢运动驾驶感的车主。T-Cross 车重约 1,200 kg，比同级 SUV 轻，对轮胎磨损相对友好，正常驾驶条件下一套胎可达 40,000–50,000 km。<strong>5×100 提醒：</strong>与同厂 Tiguan / T-Roc（5×112）轮圈不兼容。',
    },
    {
      title: 'T-Cross Life（195/60R16）— 最实惠换胎方案',
      color: 'red',
      genKey: 'c11',
      body: 'T-Cross Life 16" 是新加坡最具性价比的换胎方案之一。Hankook Kinergy Eco2（$88/条）满足日常通勤，整套仅 $352，适合预算敏感的车主。Bridgestone Turanza T005（$138/条）静音明显更好，湿地制动更安全，整套 $552。新加坡多雨天气，建议不要过于压低预算——Turanza T005 是最合理的中间选择。T-Cross Life 可升级到 17" 轮圈 + 205/50R17 轮胎，运动感提升，费用约 $1,000–$1,500（轮圈+轮胎）。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Volkswagen T-Cross use in Singapore?',
      a: 'VW T-Cross C11 (2019+): Life/Comfortline uses 195/60R16; Style/R-Line uses 205/50R17. All use 5×100 bolt pattern, 57.1mm centre bore — same as VW Polo AW.',
    },
    {
      q: 'What is the bolt pattern of the Volkswagen T-Cross?',
      a: 'VW T-Cross uses 5×100 bolt pattern, 57.1mm centre bore, M14×1.5 lug bolts, torque 120 Nm. Same as VW Polo AW. Note: This is different from VW Tiguan, T-Roc, Golf (all 5×112).',
    },
    {
      q: 'How much does it cost to replace VW T-Cross tyres in Singapore?',
      a: 'For 205/50R17 (R-Line/Style): budget from $98/tyre; mid-range $168; premium $198. Full set: $392–$792. For 195/60R16 (Life): from $88/tyre; mid-range $138. T-Cross tyres are among the most affordable to replace in the Singapore SUV segment.',
    },
    {
      q: 'Can I use VW Tiguan rims on a VW T-Cross?',
      a: 'No — VW Tiguan uses 5×112 bolt pattern while T-Cross uses 5×100. These are different and rims cannot be interchanged. You can use VW Polo AW rims on a T-Cross (same 5×100) but verify offset compatibility first. Always check bolt pattern AND offset before attempting any rim swap.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 205/50R17',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 6 205/50R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 205/50R17',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 195/60R16',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 195/60R16',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4 195/60R16',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
