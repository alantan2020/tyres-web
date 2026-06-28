import type { CarData } from './types'

const data: CarData = {
  make: 'Mercedes-Benz',
  model: 'C-Class',
  makeSlug: 'mercedes',
  modelSlug: 'c-class',
  bgWord: 'CCLASS',

  seo: {
    title: 'Mercedes-Benz C-Class Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mercedes C-Class W206 (2021+) uses 225/45R18 (standard) or staggered 225/45R18 + 245/40R18 (AMG Line). W205 (2014–2021) similar. 5×112 bolt, M14×1.5. From $108 installed in Singapore.',
    ogDescription: 'Mercedes C-Class tyre sizes: W206 225/45R18 standard or staggered AMG Line. 5×112, 66.6mm CB, M14×1.5 bolt — NOT same as BMW M14×1.25. From $108 installed.',
    twitterDescription: 'Mercedes C-Class W206 uses 225/45R18 or staggered AMG Line. 5×112, M14×1.5 bolt. From $108 installed in Singapore.',
    priceFrom: 108,
    oeSize: '225/45R18',
  },

  defaultGen: 'w206',

  generations: [
    {
      key: 'w206',
      label: 'W206 5th Gen (2021–2026)',
      years: '2021–2026',
      note: 'W206 comes with run-flat tyres as OE. AMG Line trims in Singapore typically have staggered fitment — confirm front and rear sizes separately before ordering.',
      heroChips: [
        { label: 'C200 Avantgarde / Sport', value: '225/45R18 (square)' },
        { label: 'C300 AMG Line rear',      value: '245/40R18 (staggered)' },
        { label: 'From installed',          value: '$108', green: true },
      ],
      variants: [
        { name: 'C200 Avantgarde / Sport Line (non-staggered)', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '宽 10mm 运动感升级' },
        ]},
        { name: 'C300 / AMG Line front (staggered)', sizes: [
          { tag: 'OE',  size: '225/45R18' },
        ]},
        { name: 'C300 / AMG Line rear (staggered)', sizes: [
          { tag: 'OE',  size: '245/40R18' },
          { tag: 'Alt', size: '255/35R18', note: '更宽，更激进的运动外观' },
        ]},
      ],
    },
    {
      key: 'w205',
      label: 'W205 4th Gen (2014–2021)',
      years: '2014–2021',
      note: 'W205 may or may not have RFT depending on trim. Check tyre sidewall for RSC/ROF/RFT marking.',
      heroChips: [
        { label: 'C180 / C200 standard', value: '225/45R18' },
        { label: 'C300 AMG Line rear',  value: '245/40R18 (staggered)' },
        { label: 'From installed',      value: '$108', green: true },
      ],
      variants: [
        { name: 'C180 / C200 standard (non-staggered)', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '宽 10mm 升级' },
        ]},
        { name: 'C300 / AMG Line front', sizes: [
          { tag: 'OE',  size: '225/45R18' },
        ]},
        { name: 'C300 / AMG Line rear (wider)', sizes: [
          { tag: 'OE',  size: '245/40R18' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021–2026 · W206 · AMG Line · rear 18"',   width: '9.0J', diameter: '18"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2021–2026 · W206 · standard · front 18"',  width: '8.0J', diameter: '18"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2014–2021 · W205 · AMG Line · rear 18"',   width: '8.5J', diameter: '18"', offset: 'ET42', boltPattern: '5×112' },
    { label: '2014–2021 · W205 · standard · 18"',         width: '7.5J', diameter: '18"', offset: 'ET44', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    warning: 'Mercedes uses M14×1.5 bolt thread — NOT compatible with BMW M14×1.25 bolts even though both are 5×112. Using wrong bolt pitch will cross-thread and damage the hub. ⚠️ AMG Line staggered: front 225/45R18 and rear 245/40R18 are DIFFERENT sizes — never swap front to rear.',
  },

  priceTabs: [
    {
      size: '225/45R18',
      tabLabel: '225/45R18 · C200 主力尺码 / AMG Line 前轴',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 性能舒适胎 · C-Class 实惠入门选择',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'Mercedes C-Class 225%2F45R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡极佳 · 静音舒适 · C-Class 新加坡车主最多好评',
        price: 188,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'Mercedes C-Class 225%2F45R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'Mercedes OE 供应商 · 旗舰豪华轿车最高性价比选择',
        price: 258,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Mercedes C-Class 225%2F45R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $1,032–$1,200',
    },
    {
      size: '245/40R18',
      tabLabel: '245/40R18 · AMG Line 后轴 (staggered)',
      budget: {
        name: 'Kumho Ecsta PS91',
        desc: '宽后胎 · C-Class AMG Line 后轴预算首选',
        price: 128,
        also: 'Also: Hankook Ventus S1 Evo3, Nankang NS-25',
        waText: 'Mercedes C-Class AMG Line 245%2F40R18 rear budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '宽后胎最优均衡 · C-Class AMG 最受好评',
        price: 218,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'Mercedes C-Class AMG Line 245%2F40R18 rear mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'AMG Line 后轴最顶级配胎 · 干湿地全面领先',
        price: 298,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Mercedes C-Class AMG Line 245%2F40R18 rear premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: '仅后 2 条：Budget $256–$320 · Mid-range $436–$520 · Premium $596–$700',
    },
  ],

  radarSize: '225/45R18',
  radarSource: 'Hankook (13 reviews) · Continental (21 reviews) · Michelin (18 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [70, 78, 74, 70, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '78', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 92, 84, 82, 86, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 82, 88, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'C200 标准版（225/45R18，非 staggered）',
      color: 'blue',
      genKey: 'w206',
      body: 'W206 C200 标准版和 Avantgarde 原配 <strong>225/45R18</strong>，前后同尺码可旋转。Continental SportContact 6（$188/条）是新加坡 C-Class 车主好评最高的选择——干地操控极出色，湿地 A 级，整套约 $752。若从 run-flat 换成普通胎，建议同时配备胎压充气套装（$30-50），因为 W206 无备胎仓。',
    },
    {
      title: 'C300 / AMG Line 车主（staggered，前 225 后 245）',
      color: 'red',
      genKey: 'w206',
      body: 'AMG Line C-Class 配 <strong>staggered 前 225/45R18 + 后 245/40R18</strong>，前后宽度差 20mm。<strong>严禁前后互换</strong>。后轮负责驱动（C-Class 是后驱），后胎磨耗通常比前胎快 20-30%，建议每次只换后 2 条，保持相同品牌型号。Continental SportContact 6（后轴 $218/条）或 Michelin Pilot Sport 4S（$298/条）是最受 AMG Line 车主认可的品牌。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mercedes-Benz C-Class use in Singapore?',
      a: 'Mercedes C-Class W206 5th gen (2021+): C200 Avantgarde/Sport uses 225/45R18 (square, all round). C300 and AMG Line may use staggered 225/45R18 (front) + 245/40R18 (rear). W205 4th gen (2014–2021): similar sizes. Always check front and rear sizes separately for AMG Line trims.',
    },
    {
      q: 'What is the bolt pattern of the Mercedes C-Class?',
      a: 'Mercedes-Benz C-Class (W205, W206) uses 5×112 bolt pattern with 66.6mm centre bore. Bolt thread is M14×1.5, torque 130 Nm. Important: Mercedes uses M14×1.5 thread — NOT the same as BMW M14×1.25. Using BMW lug bolts on a Mercedes will cross-thread the hub.',
    },
    {
      q: 'Can I use BMW rims on a Mercedes C-Class?',
      a: 'Both BMW 3 Series and Mercedes C-Class use 5×112 bolt pattern and similar 66.6mm centre bore. However, rim offset (ET) values differ, and more critically: BMW uses M14×1.25 lug bolts while Mercedes uses M14×1.5 — you cannot use BMW bolts on a Mercedes hub. Hub-centric rings and correct Mercedes M14×1.5 bolts would be required. Consult a professional before attempting cross-brand rim fitment.',
    },
    {
      q: 'How much does it cost to replace Mercedes C-Class tyres in Singapore?',
      a: 'For 225/45R18 (most common): budget from $108 per tyre installed; mid-range $188–$210; premium $258–$290. Full set of 4: approximately $432–$1,200. For AMG Line staggered rear 245/40R18: budget $128; mid $218–$245; premium $298–$340. Rear-only replacement (2 tyres): approximately $256–$680.',
    },
    {
      q: 'Does the Mercedes C-Class come with run-flat tyres?',
      a: 'Yes, the W206 C-Class comes with run-flat tyres (RSC — Runflat System Component) as standard. Switching to regular tyres is popular as regular tyres are cheaper and more comfortable, but ensure you carry Mercedes\' tyre inflation kit (Mobility Kit) since the C-Class has no spare tyre bay.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/45R18',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 225/45R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 225/45R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta PS91 245/40R18',           brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 245/40R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/40R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '298', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
