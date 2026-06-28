import type { CarData } from './types'

const data: CarData = {
  make: 'Porsche',
  model: 'Cayenne',
  makeSlug: 'porsche',
  modelSlug: 'cayenne',
  bgWord: 'CAYENNE',

  seo: {
    title: 'Porsche Cayenne Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Porsche Cayenne E3 (2018+) uses 255/55R19 (base) or 285/45R21 (S/Turbo). 5×130 bolt pattern. From $168 installed in Singapore.',
    ogDescription: 'Porsche Cayenne: 255/55R19 (base), 275/45R21 (S), 285/45R21 (GTS), 295/35R22 (Turbo). 5×130, 71.6mm CB. From $168 installed.',
    twitterDescription: 'Porsche Cayenne uses 255/55R19 (base) or up to 295/35R22 (Turbo). 5×130 bolt. From $168 installed.',
    priceFrom: 168,
    oeSize: '255/55R19',
  },

  defaultGen: 'e3_fl',

  generations: [
    {
      key: 'e3_fl',
      label: '3rd Gen E3 Facelift (2023–2026)',
      years: '2023–2026',
      note: 'Facelift updated headlights and infotainment. Tyre sizes are the same as pre-facelift E3. Staggered fitment on S/GTS/Turbo — front and rear sizes differ.',
      heroChips: [
        { label: 'Cayenne OE',        value: '255/55R19' },
        { label: 'S / GTS OE',        value: '275/45R21' },
        { label: 'Turbo OE',          value: '295/35R22' },
        { label: 'From installed',     value: '$168', green: true },
      ],
      variants: [
        { name: 'Cayenne base (19", square fitment)', sizes: [
          { tag: 'OE',  size: '255/55R19' },
          { tag: 'Alt', size: '275/45R20', note: '升 20"，操控感提升' },
        ]},
        { name: 'Cayenne S / GTS front (21", staggered)', sizes: [
          { tag: 'OE',  size: '275/45R21' },
        ]},
        { name: 'Cayenne S / GTS rear (21", staggered)', sizes: [
          { tag: 'OE',  size: '305/40R21' },
        ]},
        { name: 'Cayenne Turbo front (22", staggered)', sizes: [
          { tag: 'OE',  size: '285/35R22' },
        ]},
        { name: 'Cayenne Turbo rear (22", staggered)', sizes: [
          { tag: 'OE',  size: '315/30R22' },
        ]},
      ],
    },
    {
      key: 'e3',
      label: '3rd Gen E3 (2018–2023)',
      years: '2018–2023',
      heroChips: [
        { label: 'Cayenne base OE',   value: '255/55R19' },
        { label: 'S / GTS OE',        value: '275/45R21' },
        { label: 'From installed',     value: '$168', green: true },
      ],
      variants: [
        { name: 'Cayenne (19")', sizes: [
          { tag: 'OE',  size: '255/55R19' },
          { tag: 'Alt', size: '255/50R20', note: '升 20"' },
        ]},
        { name: 'Cayenne S / GTS front (21")', sizes: [
          { tag: 'OE',  size: '275/45R21' },
        ]},
        { name: 'Cayenne S / GTS rear (21")', sizes: [
          { tag: 'OE',  size: '305/40R21' },
        ]},
      ],
    },
    {
      key: '958',
      label: '2nd Gen 958 (2010–2018)',
      years: '2010–2018',
      heroChips: [
        { label: 'Cayenne OE',        value: '255/55R18' },
        { label: 'S / GTS OE',        value: '275/45R20' },
        { label: 'From installed',     value: '$148', green: true },
      ],
      variants: [
        { name: 'Cayenne (18")', sizes: [
          { tag: 'OE',  size: '255/55R18' },
        ]},
        { name: 'Cayenne S / GTS (20")', sizes: [
          { tag: 'OE',  size: '275/45R20' },
          { tag: 'OE',  size: '295/40R20', note: '后轴 staggered' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2018+ · E3 · Turbo · front 22"',  width: '10.0J', diameter: '22"', offset: 'ET50', boltPattern: '5×130' },
    { label: '2018+ · E3 · Turbo · rear 22"',   width: '11.5J', diameter: '22"', offset: 'ET58', boltPattern: '5×130' },
    { label: '2018+ · E3 · S/GTS · front 21"',  width: '9.5J',  diameter: '21"', offset: 'ET46', boltPattern: '5×130' },
    { label: '2018+ · E3 · S/GTS · rear 21"',   width: '11.0J', diameter: '21"', offset: 'ET53', boltPattern: '5×130' },
    { label: '2018+ · E3 · base · 19"',         width: '8.5J',  diameter: '19"', offset: 'ET46', boltPattern: '5×130' },
    { label: '2010–2018 · 958 · 18"',           width: '8.0J',  diameter: '18"', offset: 'ET60', boltPattern: '5×130' },
  ],
  rimCommon: {
    centreBore: '71.6mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    warning: '⚠️ Porsche Cayenne uses 5×130 bolt pattern — unique to Porsche (shared only with older Porsche 911 and Panamera). NOT compatible with any BMW, Mercedes, or VW Group cars. 71.6mm centre bore. Lug bolts (not nuts), M14×1.5, torque 130 Nm. Staggered fitment on S/GTS/Turbo — front and rear are different sizes, cannot be rotated.',
  },

  priceTabs: [
    {
      size: '255/55R19',
      tabLabel: '255/55R19 · 基础版 Cayenne 主力',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" 大型 SUV 运动胎 · Cayenne 预算首选',
        price: 168,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'Porsche Cayenne 255%2F55R19 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: 'SUV 路面综合最强 · 干湿地均衡 · Cayenne 首选',
        price: 278,
        also: 'Also: Michelin Pilot Sport 4 SUV, Pirelli Scorpion Verde All Season',
        waText: 'Porsche Cayenne 255%2F55R19 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '豪华 SUV 顶级 · 干湿地 A 级 · Cayenne 原配级别',
        price: 368,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 5 SUV',
        waText: 'Porsche Cayenne 255%2F55R19 premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $672–$840 · Mid-range $1,112–$1,360 · Premium $1,472–$1,760',
    },
    {
      size: '275/45R21',
      tabLabel: '275/45R21 · S / GTS 前轴',
      budget: {
        name: 'Kumho Ecsta PS91',
        desc: '21" 运动胎 · Cayenne S/GTS 预算选择',
        price: 208,
        also: 'Also: Maxxis Victra Sport 5, Nankang NS-25 UHP',
        waText: 'Porsche Cayenne S GTS 275%2F45R21 front budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '21" 干地极限 · S/GTS 操控顶级',
        price: 358,
        also: 'Also: Michelin Pilot Sport 4S, Bridgestone Potenza Sport',
        waText: 'Porsche Cayenne S GTS 275%2F45R21 front mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '21" 顶级操控 · Porsche OE 原配级别 · 干湿地全面领先',
        price: 448,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Porsche Cayenne S GTS 275%2F45R21 front premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: '仅前 2 条：Budget $416–$520 · Mid-range $716–$880 · Premium $896–$1,100',
    },
  ],

  radarSize: '255/55R19',
  radarSource: 'Michelin (14 reviews) · Continental (11 reviews) · Pirelli (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 74, 72, 76, 68, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '72', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 88, 86, 82, 82, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nCrossContact RX',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [88, 92, 86, 84, 86, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPS4 SUV',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Cayenne 基础版（255/55R19）— 豪华 SUV 换胎策略',
      color: 'blue',
      genKey: 'e3_fl',
      body: 'Cayenne 基础版 19" 原配 <strong>255/55R19</strong>，是豪华大型 SUV 中货源较充足的尺码。Continental CrossContact RX（$278/条）在 SUV 高性能胎中干湿地均衡性最佳，操控感保留 Cayenne 原厂调校风格，整套约 $1,112。Michelin Pilot Sport 4 SUV（$368/条）是追求顶级驾驶感的首选，干地极限明显高于同级别，与 Cayenne 的底盘调校相辅相成。<strong>重要：</strong>5×130 螺栓孔为 Porsche 专属规格，全球通用性极低，请务必在知名店家购买并使用正确扭力（130 Nm）安装。',
    },
    {
      title: 'Cayenne S / GTS / Turbo — Staggered 大尺码换胎须知',
      color: 'red',
      genKey: 'e3_fl',
      body: 'Cayenne S 及以上配 staggered 尺码，前后不同宽度，<strong>禁止前后互换</strong>。21" 胎（275/45R21 前，305/40R21 后）或 22" 胎（285/35R22 前，315/30R22 后）在新加坡货源较少，建议提前预订。Michelin Pilot Sport 4S 或 Continental SportContact 6 是 Porsche 车主最常选择，两者均有 Porsche N 认证（N0/N1）版本，建议优先选 N 认证版本以确保匹配 Cayenne 悬挂调校。<strong>极薄扁平比 35/30 系列在过减速带时需减速，否则容易损坏轮毂。</strong>',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Porsche Cayenne use in Singapore?',
      a: 'Porsche Cayenne E3 (2018+): base uses 255/55R19; S/GTS uses staggered 275/45R21 front + 305/40R21 rear; Turbo uses staggered 285/35R22 front + 315/30R22 rear. All Cayenne use 5×130 bolt pattern, 71.6mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Porsche Cayenne?',
      a: 'Porsche Cayenne uses 5×130 bolt pattern, 71.6mm centre bore, M14×1.5 lug bolts, torque 130 Nm. This is unique to Porsche — not compatible with BMW, Mercedes, Audi, or Volkswagen wheels. 5×130 is shared only with older Porsche 911 and Panamera.',
    },
    {
      q: 'How much does it cost to replace Porsche Cayenne tyres in Singapore?',
      a: 'For 255/55R19 (base): budget from $168/tyre; mid-range $278; premium $368. Full set: $672–$1,472. For 275/45R21 (S/GTS front): mid-range from $358/tyre; premium $448. Staggered sets (4 tyres, front + rear different sizes) cost significantly more — expect $3,000–$6,000 for premium brand full replacement on S/GTS.',
    },
    {
      q: 'Should I use Porsche N-rated tyres on my Cayenne?',
      a: 'Porsche N-rated tyres (N0, N1, N2, N3 marked on the sidewall) are specifically tuned for Porsche vehicles — they have different rubber compounds, stiffness, and wear characteristics optimised for Porsche suspension geometry. While non-N-rated tyres work, N-rated options (Michelin PS4S N0, Continental CSC6 N1, Pirelli P-Zero N0) better match Cayenne\'s handling character. Available from specialist tyre shops in Singapore.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 255/55R19',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 255/55R19',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '278', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 255/55R19',   brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '368', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta PS91 275/45R21',              brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 275/45R21',   brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '358', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 275/45R21',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '448', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
