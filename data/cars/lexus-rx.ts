import type { CarData } from './types'

const data: CarData = {
  make: 'Lexus',
  model: 'RX',
  makeSlug: 'lexus',
  modelSlug: 'rx',
  bgWord: 'RX',

  seo: {
    title: 'Lexus RX Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Lexus RX AL30 5th gen (2022+) and AL20 4th gen (2015–2022) use 235/55R20. RX 500h / 450h+: replace all 4 tyres. 5×114.3 bolt, NOT 5×112. From $148 installed Singapore.',
    ogDescription: 'Lexus RX AL30/AL20 tyre sizes: 235/55R20 all trims. 5×114.3 Japanese bolt pattern — NOT 5×112 like BMW X5 or Mercedes GLC. From $148 installed.',
    twitterDescription: 'Lexus RX AL30/AL20 uses 235/55R20. 5×114.3, NOT 5×112 like BMW/Mercedes. From $148 installed Singapore.',
    priceFrom: 148,
    oeSize: '235/55R20',
  },

  defaultGen: 'al30',

  generations: [
    {
      key: 'al30',
      label: 'AL30 5th Gen (2022–2026)',
      years: '2022–2026',
      note: 'AL30 RX offers RX 350 (petrol), RX 350h (hybrid), RX 500h (PHEV/performance), and RX 450h+. All Singapore trims use 235/55R20 as standard. AWD versions (500h, 450h+) must replace all 4 tyres together.',
      heroChips: [
        { label: 'RX 350 / 350h standard', value: '235/55R20' },
        { label: 'RX 500h / F Sport',      value: '235/55R20' },
        { label: 'From installed',          value: '$148', green: true },
      ],
      variants: [
        { name: 'All RX AL30 trims (20")', sizes: [
          { tag: 'OE',  size: '235/55R20' },
          { tag: 'Alt', size: '245/50R20', note: '宽 10mm，同外径' },
          { tag: 'Alt', size: '255/45R20', note: '宽 20mm，更运动化，需确认轮拱间隙' },
        ]},
      ],
    },
    {
      key: 'al20',
      label: 'AL20 4th Gen (2015–2022)',
      years: '2015–2022',
      heroChips: [
        { label: 'RX 200t / 300 / 350h', value: '235/55R20' },
        { label: 'From installed',        value: '$148', green: true },
      ],
      variants: [
        { name: 'RX 200t / RX 300 / RX 350h (20")', sizes: [
          { tag: 'OE',  size: '235/55R20' },
          { tag: 'Alt', size: '245/50R20', note: '宽 10mm，同外径' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · AL30 · F Sport · 21"',   width: '8.5J', diameter: '21"', offset: 'ET35', boltPattern: '5×114.3' },
    { label: '2022–2026 · AL30 · standard · 20"',   width: '8.0J', diameter: '20"', offset: 'ET35', boltPattern: '5×114.3' },
    { label: '2015–2022 · AL20 · standard · 20"',   width: '7.5J', diameter: '20"', offset: 'ET35', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    warning: '⚠️ Lexus RX uses 5×114.3 — NOT 5×112 like BMW X5 or Mercedes GLC. European luxury SUV rims will not fit. RX 500h / 450h+ (AWD): must replace all 4 tyres together — E-Four or DIRECT4 AWD systems require matched tread depths.',
  },

  priceTabs: [
    {
      size: '235/55R20',
      tabLabel: '235/55R20 · RX 全系主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '20" 豪华大型 SUV 胎 · RX 入门实惠选择',
        price: 148,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'Lexus RX 235%2F55R20 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '20" 旗舰 SUV 胎 · 豪华大型 SUV 干湿均衡首选',
        price: 278,
        also: 'Also: Michelin Pilot Sport 4 SUV, Pirelli Scorpion Verde',
        waText: 'Lexus RX 235%2F55R20 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'RX 旗舰配胎 · 豪华 SUV 最高性能选择',
        price: 368,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 6 SUV',
        waText: 'Lexus RX 235%2F55R20 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $1,112–$1,300 · Premium $1,472–$1,720',
    },
  ],

  radarSize: '235/55R20',
  radarSource: 'Hankook (10 reviews) · Continental (15 reviews) · Michelin (12 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [68, 74, 72, 66, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '72', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.7',
      scores: [86, 90, 86, 82, 88, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nCrossContact RX',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 92, 84, 80, 88, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'RX 350 / 350h 标准版（235/55R20）',
      color: 'blue',
      genKey: 'al30',
      body: 'RX 全系统一使用 <strong>235/55R20</strong>，是新加坡市场最常见的 20" SUV 尺码之一。Continental CrossContact RX（$278/条）是专为大型豪华 SUV 研发的顶级选择——20" 大圈静音出色，湿地 A 级，整套约 $1,112。Lexus 以安静著称，CrossContact RX 在 NVH 方面的表现与 RX 的豪华定位最为契合。',
    },
    {
      title: 'RX 500h / 450h+ AWD 车主（必须 4 条全换）',
      color: 'red',
      genKey: 'al30',
      body: 'RX 500h 和 450h+ 配备全时 AWD（DIRECT4 或 E-Four），<strong>必须 4 条同型号一起换</strong>。前后胎纹差异会导致 AWD 系统持续补偿，加速差速器磨损。RX 500h 是高性能调校版（306kW），建议选 Michelin Pilot Sport 4S（$368/条）获得最佳干地操控表现。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Lexus RX use in Singapore?',
      a: 'All Lexus RX AL30 5th gen (2022+) and AL20 4th gen (2015–2022) use 235/55R20 as standard across all trims (350, 350h, 450h+, 500h). The size is consistent regardless of whether it is 2WD or AWD.',
    },
    {
      q: 'What is the bolt pattern of the Lexus RX?',
      a: 'Lexus RX uses 5×114.3 bolt pattern with 60.1mm centre bore. Stud M12×1.5, torque 103 Nm. This is the Japanese standard, different from European luxury SUVs like BMW X5 (5×112) or Mercedes GLC (5×112).',
    },
    {
      q: 'How much does it cost to replace Lexus RX tyres in Singapore?',
      a: 'For 235/55R20: budget from $148 per tyre installed; mid-range $278–$315; premium $368–$425. Full set of 4: approximately $592–$1,720.',
    },
    {
      q: 'Can I use BMW X5 or Mercedes GLC rims on a Lexus RX?',
      a: 'No. Lexus RX uses 5×114.3 while BMW X5 and Mercedes GLC use 5×112. The bolt spacing is different — European luxury SUV rims physically cannot be bolted onto a Lexus RX.',
    },
    {
      q: 'Does the Lexus RX 450h+ or 500h require all 4 tyres replaced at once?',
      a: 'Yes. AWD variants (RX 450h+, RX 500h) use E-Four or DIRECT4 AWD which continuously monitors wheel speed differences to distribute torque. If front and rear tyres have different tread depths, the AWD system operates under constant correction mode, accelerating wear of AWD components. Always replace all 4 with the same brand, model, and size.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/55R20',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 235/55R20',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '278', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/55R20',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '368', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
