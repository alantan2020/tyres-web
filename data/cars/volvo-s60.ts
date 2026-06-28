import type { CarData } from './types'

const data: CarData = {
  make: 'Volvo',
  model: 'S60',
  makeSlug: 'volvo',
  modelSlug: 's60',
  bgWord: 'S60',

  seo: {
    title: 'Volvo S60 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Volvo S60 T5/T6/T8 3rd Gen (2019+) uses 225/50R17 (base), 235/40R19 (R-Design), or 245/35R20 (Polestar). 5×108 bolt. From $98 installed.',
    ogDescription: 'Volvo S60 3rd Gen: 225/50R17 (Momentum), 235/45R18 (Plus), 235/40R19 (R-Design), 245/35R20 (Polestar). 5×108, 63.4mm CB. From $98.',
    twitterDescription: 'Volvo S60 uses 225/50R17 (base) or 235/40R19 (R-Design). 5×108 bolt. From $98 installed.',
    priceFrom: 98,
    oeSize: '235/45R18',
  },

  defaultGen: 'gen3',

  generations: [
    {
      key: 'gen3',
      label: '3rd Gen (2019–2026)',
      years: '2019–2026',
      heroChips: [
        { label: 'Momentum / Plus OE', value: '225/50R17' },
        { label: 'R-Design OE',        value: '235/40R19' },
        { label: 'From installed',      value: '$98', green: true },
      ],
      variants: [
        { name: 'T5 / T6 Momentum (17")', sizes: [
          { tag: 'OE',  size: '225/50R17' },
          { tag: 'Alt', size: '235/45R17', note: '稍宽，操控感提升' },
          { tag: 'Alt', size: '235/45R18', note: '升 18"，Plus 尺码' },
        ]},
        { name: 'T5 / B5 Plus (18")', sizes: [
          { tag: 'OE',  size: '235/45R18' },
          { tag: 'Alt', size: '225/40R18', note: '稍窄，更多可选品牌' },
        ]},
        { name: 'T6 / B6 R-Design (19")', sizes: [
          { tag: 'OE',  size: '235/40R19' },
        ]},
        { name: 'T8 Polestar Engineered (20")', sizes: [
          { tag: 'OE',  size: '245/35R20' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019+ · Polestar · 20"',   width: '8.5J', diameter: '20"', offset: 'ET49', boltPattern: '5×108' },
    { label: '2019+ · R-Design · 19"',   width: '8.0J', diameter: '19"', offset: 'ET49', boltPattern: '5×108' },
    { label: '2019+ · Plus · 18"',       width: '7.5J', diameter: '18"', offset: 'ET49', boltPattern: '5×108' },
    { label: '2019+ · Momentum · 17"',   width: '7.0J', diameter: '17"', offset: 'ET49', boltPattern: '5×108' },
  ],
  rimCommon: {
    centreBore: '63.4mm',
    stud: 'M14×1.5 bolt',
    torque: '140 Nm',
    notes: 'Volvo S60 uses 5×108 — same as XC40, XC60, XC90, V60. M14×1.5 lug bolts, torque 140 Nm. 63.4mm centre bore — use hub-centric rings with aftermarket rims.',
  },

  priceTabs: [
    {
      size: '235/45R18',
      tabLabel: '235/45R18 · Plus 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 舒适性能胎 · S60 预算首选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'Volvo S60 235%2F45R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · 静音 · S60 Plus 最受好评选择',
        price: 188,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'Volvo S60 235%2F45R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '干地操控极限 · 湿地 A 级 · S60 R-Design 首选',
        price: 248,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Volvo S60 235%2F45R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $992–$1,120',
    },
    {
      size: '225/50R17',
      tabLabel: '225/50R17 · Momentum 17"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 舒适节能胎 · S60 Momentum 预算首选',
        price: 88,
        also: 'Also: Bridgestone Ecopia EP300, Kumho Ecsta KH31',
        waText: 'Volvo S60 225%2F50R17 Momentum budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · S60 日常通勤完美选择',
        price: 158,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'Volvo S60 225%2F50R17 Momentum mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '17" 静音顶级 · 豪华 sedan 最佳匹配',
        price: 198,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato P7',
        waText: 'Volvo S60 225%2F50R17 Momentum premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $632–$760 · Premium $792–$920',
    },
  ],

  radarSize: '235/45R18',
  radarSource: 'Continental (16 reviews) · Michelin (13 reviews) · Hankook (10 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [70, 76, 72, 74, 72, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'NVH', v: '72', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 90, 84, 82, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [88, 92, 84, 82, 88, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '84', hi: false }, { k: 'Wear', v: '82', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'S60 Plus / R-Design — 豪华 sedan 运动感首选',
      color: 'blue',
      genKey: 'gen3',
      body: 'S60 3rd Gen Plus（18"）和 R-Design（19"）是 SG 市场最常见配置。Continental SportContact 6（18" $188/条，19" $208/条）是最受 S60 车主认可的中端选择——干湿地均衡，操控比原配 Pirelli P-Zero 更线性，整套约 $752–$832。Michelin Pilot Sport 4S（$248–$268/条）是追求极限操控的首选，与 S60 的整体运动调校非常匹配。<strong>提醒：</strong>S60 T8 Polestar Engineered 的 245/35R20 是极扁平比轮胎，过减速带需减速，货源相对少，换胎前请确认现货。',
    },
    {
      title: 'S60 Momentum（17"）— 日常通勤舒适优先',
      color: 'red',
      genKey: 'gen3',
      body: '17" Momentum 原配 <strong>225/50R17</strong>，走舒适路线。Bridgestone Turanza T005（$158/条）是城市通勤最佳选择——静音性能出色，新加坡雨季湿地制动安全，整套约 $632。想提升操控可考虑升 18" 轮圈换 235/45R18，但需同时购买轮圈，总费用约 $1,500–$2,500（轮圈 + 轮胎安装）。单纯换 17" 胎的话，舒适胎比运动胎更合适这个定位。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Volvo S60 use in Singapore?',
      a: 'Volvo S60 3rd Gen (2019+): Momentum uses 225/50R17; Plus uses 235/45R18; R-Design uses 235/40R19; Polestar Engineered uses 245/35R20. All S60 use 5×108 bolt pattern, 63.4mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Volvo S60?',
      a: 'Volvo S60 3rd Gen uses 5×108 bolt pattern, 63.4mm centre bore. This is the same as XC40, XC60, and XC90. M14×1.5 lug bolts, torque 140 Nm.',
    },
    {
      q: 'How much does it cost to replace Volvo S60 tyres in Singapore?',
      a: 'For 235/45R18 (Plus): from $108/tyre budget; mid-range $188; premium $248. Full set: $432–$992. For 225/50R17 (Momentum): from $88/tyre. For 235/40R19 (R-Design): from $118/tyre.',
    },
    {
      q: 'Can I upgrade a Volvo S60 Momentum from 17" to 18" tyres?',
      a: 'Yes, but you need 18" rims as well. The 235/45R18 is physically close in overall diameter to 225/50R17 (~668mm vs ~672mm), making it a common upgrade. You\'ll need to purchase both new rims and tyres — budget $1,500–$2,500 total. Keep your original 17" as a spare set.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/45R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 235/45R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/45R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 225/50R17',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 225/50R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/50R17',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
