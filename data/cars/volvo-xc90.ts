import type { CarData } from './types'

const data: CarData = {
  make: 'Volvo',
  model: 'XC90',
  makeSlug: 'volvo',
  modelSlug: 'xc90',
  bgWord: 'XC90',

  seo: {
    title: 'Volvo XC90 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Volvo XC90 T5/T6/T8 (2015+) uses 235/60R18 (base), 235/55R19 (R-Design), or 275/35R22 (Polestar). 5×108 bolt. From $118 installed in Singapore.',
    ogDescription: 'Volvo XC90 2nd Gen: 235/60R18 (Momentum), 235/55R19 (R-Design/Inscription), 275/35R22 (Polestar). 5×108, 63.4mm CB. From $118.',
    twitterDescription: 'Volvo XC90 uses 235/60R18 (base) or 235/55R19 (R-Design). 5×108 bolt. From $118 installed.',
    priceFrom: 118,
    oeSize: '235/55R19',
  },

  defaultGen: 'gen2_fl',

  generations: [
    {
      key: 'gen2_fl',
      label: '2nd Gen Facelift (2020–2026)',
      years: '2020–2026',
      heroChips: [
        { label: 'Core / Plus OE',  value: '235/60R18' },
        { label: 'R-Design OE',     value: '235/55R19' },
        { label: 'From installed',  value: '$118', green: true },
      ],
      variants: [
        { name: 'B5 / B6 Core / Plus (18")', sizes: [
          { tag: 'OE',  size: '235/60R18' },
          { tag: 'Alt', size: '235/55R19', note: '升 19"，R-Design 尺码' },
        ]},
        { name: 'B5 / B6 R-Design / Ultimate (19")', sizes: [
          { tag: 'OE',  size: '235/55R19' },
          { tag: 'Alt', size: '255/50R19', note: '稍宽，提升接地感' },
        ]},
        { name: 'Polestar Engineered (22")', sizes: [
          { tag: 'OE',  size: '275/35R22' },
        ]},
      ],
    },
    {
      key: 'gen2',
      label: '2nd Gen (2015–2020)',
      years: '2015–2020',
      heroChips: [
        { label: 'Momentum OE',    value: '235/60R18' },
        { label: 'R-Design OE',    value: '235/55R19' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: 'T5 / T6 Momentum / Inscription (18")', sizes: [
          { tag: 'OE',  size: '235/60R18' },
        ]},
        { name: 'T5 / T6 R-Design (19")', sizes: [
          { tag: 'OE',  size: '235/55R19' },
        ]},
        { name: 'T8 Twin Engine PHEV', sizes: [
          { tag: 'OE',  size: '235/55R19' },
          { tag: 'OE',  size: '275/35R22', note: 'Polestar 版' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2015+ · 2nd Gen · Polestar · 22"',   width: '9.0J', diameter: '22"', offset: 'ET49', boltPattern: '5×108' },
    { label: '2015+ · 2nd Gen · R-Design · 19"',   width: '8.0J', diameter: '19"', offset: 'ET49', boltPattern: '5×108' },
    { label: '2015+ · 2nd Gen · Momentum · 18"',   width: '7.5J', diameter: '18"', offset: 'ET49', boltPattern: '5×108' },
  ],
  rimCommon: {
    centreBore: '63.4mm',
    stud: 'M14×1.5 bolt',
    torque: '140 Nm',
    notes: 'Volvo XC90 uses 5×108 bolt pattern — same as XC60, XC40, S60, V60. 63.4mm centre bore; use hub-centric rings when fitting aftermarket rims. XC90 T8 PHEV weighs over 2,350 kg — always use XL-rated tyres (Load Index 104+). M14×1.5 lug bolts, torque 140 Nm.',
  },

  priceTabs: [
    {
      size: '235/55R19',
      tabLabel: '235/55R19 · R-Design / 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" 大型 SUV 胎 · XC90 预算首选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'Volvo XC90 235%2F55R19 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: 'SUV 路面综合最佳 · 静音耐磨均衡',
        price: 208,
        also: 'Also: Michelin Pilot Sport 4 SUV, Bridgestone Alenza 001',
        waText: 'Volvo XC90 235%2F55R19 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '湿地制动 A 级 · 极静音 · XC90 豪华感完美匹配',
        price: 268,
        also: 'Also: Pirelli Scorpion Verde, Goodyear Eagle F1 Asymmetric 5 SUV',
        waText: 'Volvo XC90 235%2F55R19 premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $832–$960 · Premium $1,072–$1,200',
    },
    {
      size: '235/60R18',
      tabLabel: '235/60R18 · Momentum 基础版',
      budget: {
        name: 'Hankook Kinergy 4S2 X',
        desc: '18" 舒适 SUV 胎 · XC90 Momentum 预算选择',
        price: 108,
        also: 'Also: Kumho Solus KH31, Nankang Econex NA-1',
        waText: 'Volvo XC90 235%2F60R18 Momentum budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001',
        desc: '豪华 SUV 舒适胎 · 静音减震出色',
        price: 198,
        also: 'Also: Michelin Primacy 4+ SUV, Continental CrossContact RX',
        waText: 'Volvo XC90 235%2F60R18 Momentum mid-range tyre quote (Bridgestone Alenza 001 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+ SUV',
        desc: '静音舒适顶级 · XC90 豪华 MPV 定位完美匹配',
        price: 248,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato P7',
        waText: 'Volvo XC90 235%2F60R18 Momentum premium tyre quote (Michelin Primacy 4+ SUV)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $792–$920 · Premium $992–$1,150',
    },
  ],

  radarSize: '235/55R19',
  radarSource: 'Michelin (16 reviews) · Continental (12 reviews) · Bridgestone (10 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 74, 78, 70, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '74', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.3',
      scores: [82, 86, 84, 82, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nCrossContact RX',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [86, 88, 88, 84, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPS4 SUV',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'XC90 T8 PHEV — 必须使用 XL 承载胎',
      color: 'red',
      genKey: 'gen2_fl',
      body: 'XC90 T8 Twin Engine 整备重量超过 <strong>2,350 kg</strong>，是新加坡路面最重的量产 7 座 SUV 之一。普通承载等级轮胎（SL / Load Index 102）在满载情况下接近极限——必须使用 <strong>XL 等级（Load Index 104 或以上）</strong>的轮胎，否则胎压问题和爆胎风险显著上升。Michelin Pilot Sport 4 SUV 有 XL 版本（235/55R19 105Y XL），是 XC90 T8 最受好评的选择。',
    },
    {
      title: '19" R-Design vs 18" Momentum — 舒适与操控的取舍',
      color: 'blue',
      genKey: 'gen2_fl',
      body: '19" R-Design 配 <strong>235/55R19</strong> 操控感更好，视觉效果更运动；18" Momentum 配 <strong>235/60R18</strong> 乘坐舒适性更佳，隔振效果好，新加坡弹弓路和石板路感受差异明显。从 19" 换成 18" 同时换舒适胎（如 Bridgestone Alenza 001 $198/条）是不少 XC90 车主减少路噪的方式。如果保持 19"，优先选 Michelin Pilot Sport 4 SUV（$268/条）或 Continental CrossContact RX（$208/条）。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Volvo XC90 use in Singapore?',
      a: 'Volvo XC90 2nd Gen (2015+): Momentum/Plus trims use 235/60R18; R-Design/Inscription use 235/55R19; Polestar Engineered uses 275/35R22. All XC90 use 5×108 bolt pattern, 63.4mm centre bore.',
    },
    {
      q: 'Does the Volvo XC90 T8 PHEV need special tyres?',
      a: 'Yes. XC90 T8 weighs over 2,350 kg — you must use XL-rated tyres (Load Index 104 or higher, marked "XL" or "Extra Load" on the sidewall). Standard SL-rated tyres are under-spec for this vehicle weight and can develop premature wear or pressure issues under full load.',
    },
    {
      q: 'How much does it cost to replace Volvo XC90 tyres in Singapore?',
      a: 'For 235/55R19 (R-Design): budget from $118/tyre; mid-range $208; premium $268. Full set of 4: approximately $472–$1,200. For 235/60R18 (Momentum/Plus): from $108/tyre. T8 PHEV owners should budget for XL-rated tyres, typically $20–$30 more per tyre than standard.',
    },
    {
      q: 'What is the bolt pattern of the Volvo XC90?',
      a: 'All Volvo XC90 (1st and 2nd Gen) use 5×108 bolt pattern, 63.4mm centre bore. This is the same as XC60, XC40, S60, and V60. M14×1.5 lug bolts, torque 140 Nm. Not compatible with 5×112 (BMW/Mercedes) or 5×114.3 (most Japanese cars) rims without hub-centric rings.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/55R19',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 235/55R19',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 235/55R19',   brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 X 235/60R18',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 235/60R18',        brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ SUV 235/60R18',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
