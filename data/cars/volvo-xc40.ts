import type { CarData } from './types'

const data: CarData = {
  make: 'Volvo',
  model: 'XC40',
  makeSlug: 'volvo',
  modelSlug: 'xc40',
  bgWord: 'XC40',

  seo: {
    title: 'Volvo XC40 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Volvo XC40 B4/B5 (2018+) uses 235/55R18 (base) or 235/45R20 (R-Design). XC40 Recharge EV uses 235/50R19. 5×108 bolt. From $108 installed.',
    ogDescription: 'Volvo XC40: 235/55R18 (base), 235/50R18 (mid), 235/45R20 (R-Design), 235/50R19 (Recharge EV). 5×108, 63.4mm CB. From $108 installed.',
    twitterDescription: 'Volvo XC40 uses 235/55R18 or 235/45R20. XC40 Recharge EV 235/50R19. 5×108. From $108 installed.',
    priceFrom: 108,
    oeSize: '235/50R19',
  },

  defaultGen: 'gen1_fl',

  generations: [
    {
      key: 'gen1_fl',
      label: '1st Gen Facelift (2022–2026)',
      years: '2022–2026',
      heroChips: [
        { label: 'Core / Plus OE',       value: '235/55R18' },
        { label: 'Recharge EV OE',       value: '235/50R19' },
        { label: 'From installed',        value: '$108', green: true },
      ],
      variants: [
        { name: 'B4 Core / Plus (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '235/50R18', note: '略低扁平比，操控提升' },
          { tag: 'Alt', size: '235/50R19', note: '升 19"，Recharge 同尺码' },
        ]},
        { name: 'B4 / B5 R-Design (20")', sizes: [
          { tag: 'OE',  size: '235/45R20' },
        ]},
        { name: 'Recharge Pure Electric (19")', sizes: [
          { tag: 'OE',  size: '235/50R19' },
          { tag: 'Alt', size: '235/45R20', note: '升 20"，R-Design 尺码' },
        ]},
      ],
    },
    {
      key: 'gen1',
      label: '1st Gen (2018–2022)',
      years: '2018–2022',
      heroChips: [
        { label: 'Momentum / Inscription', value: '235/55R18' },
        { label: 'R-Design OE',            value: '235/45R19' },
        { label: 'From installed',          value: '$108', green: true },
      ],
      variants: [
        { name: 'T4 / T5 Momentum / Inscription (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
        ]},
        { name: 'T4 / T5 R-Design (19")', sizes: [
          { tag: 'OE',  size: '235/45R19' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · Facelift · R-Design · 20"',      width: '8.0J', diameter: '20"', offset: 'ET49', boltPattern: '5×108' },
    { label: '2022+ · Facelift · Recharge EV · 19"',   width: '7.5J', diameter: '19"', offset: 'ET49', boltPattern: '5×108' },
    { label: '2018+ · all · 18"',                       width: '7.0J', diameter: '18"', offset: 'ET49', boltPattern: '5×108' },
  ],
  rimCommon: {
    centreBore: '63.4mm',
    stud: 'M14×1.5 bolt',
    torque: '140 Nm',
    notes: 'Volvo XC40 uses 5×108 — same as XC60, XC90, S60. 63.4mm centre bore. XC40 Recharge EV weighs ~2,100 kg; use XL-rated tyres. M14×1.5 lug bolts, torque 140 Nm.',
  },

  priceTabs: [
    {
      size: '235/50R19',
      tabLabel: '235/50R19 · Recharge EV / 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" EV 友好胎 · XC40 Recharge 预算首选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'Volvo XC40 235%2F50R19 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: 'SUV 路面综合最佳 · 干湿地均衡 · Recharge 推荐',
        price: 188,
        also: 'Also: Michelin Pilot Sport 4 SUV, Bridgestone Turanza T005',
        waText: 'Volvo XC40 235%2F50R19 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: 'EV 专用 · 低滚阻提升续航 · XC40 Recharge 顶级选择',
        price: 248,
        also: 'Also: Goodyear Eagle F1 Asymmetric 6, Pirelli P-Zero PZ4',
        waText: 'Volvo XC40 235%2F50R19 premium tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $752–$880 · Premium $992–$1,120',
    },
    {
      size: '235/55R18',
      tabLabel: '235/55R18 · 基础版 18"',
      budget: {
        name: 'Hankook Kinergy 4S2 X',
        desc: '18" 舒适 SUV 胎 · XC40 基础版预算选择',
        price: 108,
        also: 'Also: Kumho Solus KH31, Nankang Econex NA-1',
        waText: 'Volvo XC40 235%2F55R18 base budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '18" 静音舒适胎 · XC40 城市通勤最佳',
        price: 168,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 7',
        waText: 'Volvo XC40 235%2F55R18 base mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '静音舒适顶级 · 低噪音 · 城市 SUV 完美匹配',
        price: 218,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato P7 C2',
        waText: 'Volvo XC40 235%2F55R18 base premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $672–$800 · Premium $872–$1,000',
    },
  ],

  radarSize: '235/50R19',
  radarSource: 'Michelin (14 reviews) · Continental (11 reviews) · Hankook (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [68, 74, 72, 78, 70, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '72', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [82, 84, 84, 80, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nCrossContact RX',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [88, 86, 88, 84, 90, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport EV',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'EV Range', v: '90', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'XC40 Recharge EV — EV 专用胎 vs 普通高性能胎',
      color: 'blue',
      genKey: 'gen1_fl',
      body: 'XC40 Recharge（纯电）原配 <strong>235/50R19</strong>，整备重 ~2,100 kg。Michelin Pilot Sport EV（$248/条）是纯电 SUV 最完整的选择——低滚阻可提升续航约 3–5%，还专为 EV 即时扭力设计，磨损比普通胎慢约 15%。如果预算有限，Continental CrossContact RX（$188/条）也非常适合 XC40 Recharge，干湿地均衡，城市路面表现稳定，整套约 $752。',
    },
    {
      title: 'B4/B5 燃油版 — 18" 舒适 vs 20" 操控',
      color: 'red',
      genKey: 'gen1_fl',
      body: '燃油 XC40 Base 18"（235/55R18）走舒适路线，选 Bridgestone Turanza T005（$168/条）——静音表现在 18" SUV 中数一数二，城市通勤体验明显提升。R-Design 20"（235/45R20）操控感更强，但扁平比低，对减速带更敏感，推荐 Continental SportContact 6（$228/条）平衡干湿地性能。从 18" 升到 19" 或 20" 轮圈需要同时购买轮胎，整套费用会比单换胎高，请提前确认预算。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Volvo XC40 use in Singapore?',
      a: 'Volvo XC40 (2018+): B4 Core/Plus uses 235/55R18; R-Design uses 235/45R19 (1st Gen) or 235/45R20 (Facelift); XC40 Recharge (EV) uses 235/50R19. All XC40 use 5×108 bolt pattern, 63.4mm centre bore.',
    },
    {
      q: 'What is the difference between XC40 and XC40 Recharge tyre sizes?',
      a: 'XC40 B4/B5 petrol base trim uses 235/55R18. XC40 Recharge (pure electric) uses 235/50R19 — a size chosen for lower rolling resistance and better EV efficiency. Both share the same 5×108 bolt pattern, so rims are compatible between variants (offset permitting).',
    },
    {
      q: 'How much does it cost to replace Volvo XC40 tyres in Singapore?',
      a: 'For 235/50R19 (Recharge EV): from $118/tyre budget; $188–$248 mid-range/premium. Full set: $472–$992. For 235/55R18 (base petrol): from $108/tyre. Recharge EV owners should prioritise XL-rated or EV-spec tyres due to vehicle weight (~2,100 kg).',
    },
    {
      q: 'Can I fit 19" tyres on a Volvo XC40 with 18" rims?',
      a: 'You cannot change tyre and rim diameter independently. To use 235/50R19 tyres, you need 19" rims. The overall rolling diameter of 235/50R19 is close to 235/55R18, so upgrading is possible. Make sure the new 19" rim has correct offset for XC40 to avoid tyre rub.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/50R19',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 235/50R19',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport EV 235/50R19',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 X 235/55R18',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 235/55R18',      brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 235/55R18',           brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
