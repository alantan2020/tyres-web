import type { CarData } from './types'

const data: CarData = {
  make: 'Volvo',
  model: 'XC60',
  makeSlug: 'volvo',
  modelSlug: 'xc60',
  bgWord: 'XC60',

  seo: {
    title: 'Volvo XC60 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Volvo XC60 T5/T6 2nd Gen (2017+) uses 235/60R18 (base) or 235/55R19 (R-Design). 5×108 bolt pattern. From $108 installed in Singapore.',
    ogDescription: 'Volvo XC60 2nd Gen: 235/60R18 (base), 235/55R19 (R-Design/Inscription), 255/40R21 (Polestar Engineered). 5×108, 63.4mm CB. From $108.',
    twitterDescription: 'Volvo XC60 uses 235/60R18 (base) or 235/55R19 (R-Design). 5×108 bolt. From $108 installed.',
    priceFrom: 108,
    oeSize: '235/55R19',
  },

  defaultGen: 'gen2_fl',

  generations: [
    {
      key: 'gen2_fl',
      label: '2nd Gen Facelift (2021–2026)',
      years: '2021–2026',
      note: 'Facelift added Google infotainment and updated styling. Tyre sizes are identical to pre-facelift 2nd Gen.',
      heroChips: [
        { label: 'Base / Plus OE',  value: '235/60R18' },
        { label: 'R-Design OE',     value: '235/55R19' },
        { label: 'From installed',  value: '$108', green: true },
      ],
      variants: [
        { name: 'B5 / B6 Plus (18")', sizes: [
          { tag: 'OE',  size: '235/60R18' },
          { tag: 'Alt', size: '235/55R18', note: '略矮，操控感提升' },
          { tag: 'Alt', size: '235/55R19', note: '升 19"，R-Design 尺码' },
        ]},
        { name: 'B5 / B6 R-Design (19")', sizes: [
          { tag: 'OE',  size: '235/55R19' },
          { tag: 'Alt', size: '235/50R19', note: '略矮扁平比' },
        ]},
        { name: 'Polestar Engineered (21")', sizes: [
          { tag: 'OE',  size: '255/40R21' },
        ]},
      ],
    },
    {
      key: 'gen2',
      label: '2nd Gen (2017–2021)',
      years: '2017–2021',
      heroChips: [
        { label: 'T5 / T6 base OE', value: '235/60R18' },
        { label: 'R-Design OE',     value: '235/55R19' },
        { label: 'From installed',  value: '$108', green: true },
      ],
      variants: [
        { name: 'T5 / T6 Momentum / Inscription (18")', sizes: [
          { tag: 'OE',  size: '235/60R18' },
          { tag: 'Alt', size: '235/55R19', note: '升 19"' },
        ]},
        { name: 'T5 / T6 R-Design (19")', sizes: [
          { tag: 'OE',  size: '235/55R19' },
        ]},
        { name: 'T8 Twin Engine PHEV', sizes: [
          { tag: 'OE',  size: '235/55R19' },
          { tag: 'OE',  size: '255/40R21', note: '部分 T8 Polestar 高配' },
        ]},
      ],
    },
    {
      key: 'gen1',
      label: '1st Gen (2008–2017)',
      years: '2008–2017',
      heroChips: [
        { label: 'T5 / T6 OE',    value: '235/65R17' },
        { label: 'R-Design OE',   value: '235/60R18' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: 'T5 / T6 Summum / Kinetic (17")', sizes: [
          { tag: 'OE',  size: '235/65R17' },
        ]},
        { name: 'R-Design (18")', sizes: [
          { tag: 'OE',  size: '235/60R18' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2017+ · 2nd Gen · Polestar · 21"', width: '8.5J', diameter: '21"', offset: 'ET49', boltPattern: '5×108' },
    { label: '2017+ · 2nd Gen · R-Design · 19"', width: '8.0J', diameter: '19"', offset: 'ET49', boltPattern: '5×108' },
    { label: '2017+ · 2nd Gen · base · 18"',     width: '7.5J', diameter: '18"', offset: 'ET49', boltPattern: '5×108' },
    { label: '2008–2017 · 1st Gen · 18"',        width: '7.5J', diameter: '18"', offset: 'ET49', boltPattern: '5×108' },
  ],
  rimCommon: {
    centreBore: '63.4mm',
    stud: 'M14×1.5 bolt',
    torque: '140 Nm',
    notes: 'Volvo XC60 uses 5×108 bolt pattern — shared with Volvo XC40, XC90, S60, V60, and also Ford Mondeo/S-Max/Galaxy. 63.4mm centre bore differs from most Japanese and German makes. Use hub-centric rings if fitting non-Volvo aftermarket rims. Volvo uses lug BOLTS (not nuts) with M14×1.5 thread.',
  },

  priceTabs: [
    {
      size: '235/55R19',
      tabLabel: '235/55R19 · R-Design / 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" SUV 胎 · XC60 预算首选 · 干湿地均衡',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'Volvo XC60 235%2F55R19 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: 'SUV 路面 + 操控综合最佳 · XC60 R-Design 首选',
        price: 198,
        also: 'Also: Michelin Pilot Sport 4 SUV, Bridgestone Alenza 001',
        waText: 'Volvo XC60 235%2F55R19 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '湿地制动 A 级 · 静音 · 豪华 SUV 顶级选择',
        price: 258,
        also: 'Also: Pirelli Scorpion Verde All Season, Goodyear Eagle F1 Asymmetric 5 SUV',
        waText: 'Volvo XC60 235%2F55R19 premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $792–$920 · Premium $1,032–$1,200',
    },
    {
      size: '235/60R18',
      tabLabel: '235/60R18 · 基础版 18"',
      budget: {
        name: 'Hankook Kinergy 4S2 X',
        desc: '18" SUV 舒适胎 · XC60 基础版预算首选',
        price: 108,
        also: 'Also: Kumho Solus KH31, Nankang Econex NA-1',
        waText: 'Volvo XC60 235%2F60R18 base 18inch budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001',
        desc: '18" 豪华 SUV 舒适胎 · 静音耐磨兼顾',
        price: 188,
        also: 'Also: Michelin Primacy 4 SUV, Continental CrossContact RX',
        waText: 'Volvo XC60 235%2F60R18 base 18inch mid-range tyre quote (Bridgestone Alenza 001 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+ SUV',
        desc: '静音舒适顶级 · XC60 豪华感完美匹配',
        price: 238,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato P7',
        waText: 'Volvo XC60 235%2F60R18 base 18inch premium tyre quote (Michelin Primacy 4+ SUV)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $952–$1,100',
    },
  ],

  radarSize: '235/55R19',
  radarSource: 'Michelin (18 reviews) · Continental (14 reviews) · Bridgestone (11 reviews). Source: TyreReviews.com.',
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
      title: '2nd Gen XC60 (2017+) — 豪华 SUV 舒适与操控取舍',
      color: 'blue',
      genKey: 'gen2_fl',
      body: 'XC60 2nd Gen 标准配置 <strong>235/60R18</strong>（Momentum/Plus），R-Design 和高配 <strong>235/55R19</strong>。大多数新加坡车主配 R-Design 19"，选 Continental CrossContact RX（$198/条）——干湿地均衡，静音媲美原配，整套约 $792；或 Michelin Pilot Sport 4 SUV（$258/条），湿地制动 A 级，雨季更安心。若配原厂 18"，首选 Bridgestone Alenza 001（$188/条）——舒适性极佳，Volvo 原配风格最搭配。<strong>提醒：</strong>XC60 T8 PHEV 整备重超过 2,100 kg，建议选承载等级 XL 的轮胎（Load Index 104 以上）。',
    },
    {
      title: '5×108 螺栓孔说明 — 非标准，换轮圈需注意',
      color: 'red',
      genKey: 'gen2_fl',
      body: 'Volvo XC60 的 <strong>5×108 螺栓孔</strong>在新加坡市场属于小众规格，大多数日系和德系车是 5×100、5×112 或 5×114.3，不通用。市面上 5×108 的兼容轮圈货源比 5×114.3 少，换装前请确认。中心孔 <strong>63.4mm</strong> 也需核对——若装非 Volvo 专用轮圈，务必配同尺寸导向环（Hub-Centric Ring）以防高速行驶时的抖动。Volvo 原厂使用螺栓（Bolt），而非螺母（Nut）——M14×1.5 线程，扭力 140 Nm。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Volvo XC60 use in Singapore?',
      a: 'Volvo XC60 2nd Gen (2017+): Plus/Momentum trim uses 235/60R18; R-Design and Inscription use 235/55R19; Polestar Engineered uses 255/40R21. 1st Gen (2008–2017): 235/65R17 (standard) or 235/60R18 (R-Design). All XC60 use 5×108 bolt pattern, 63.4mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Volvo XC60?',
      a: 'All Volvo XC60 (1st and 2nd Gen) use 5×108 bolt pattern with 63.4mm centre bore. This is the same across Volvo XC40, XC90, S60, and V60. Note: 5×108 is different from 5×112 (BMW, Mercedes) or 5×114.3 (most Japanese brands) — rims are not cross-compatible. Volvo uses M14×1.5 lug bolts, torque 140 Nm.',
    },
    {
      q: 'How much does it cost to replace Volvo XC60 tyres in Singapore?',
      a: 'For 235/55R19 (most common, R-Design): budget from $118/tyre; mid-range $198–$258; premium $258–$300. Full set: approximately $472–$1,200. For 235/60R18 (Plus/base trim): budget from $108/tyre; mid-range $188. T8 PHEV owners should prioritise XL-rated tyres due to higher vehicle weight.',
    },
    {
      q: 'Can I use Volvo XC90 rims on a Volvo XC60?',
      a: 'Both XC60 and XC90 use 5×108 bolt pattern and 63.4mm centre bore, so the bolt pattern is compatible. However, rim offset (ET) and overall rim size differ between models — always verify the ET value matches your XC60 spec before fitting. Installing XC90 rims on XC60 without checking offset can cause handling issues and tyre rub.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/55R19',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 235/55R19',   brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 235/55R19',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 X 235/60R18',         brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 235/60R18',         brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ SUV 235/60R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
