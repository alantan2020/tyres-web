import type { CarData } from './types'

const data: CarData = {
  make: 'Volkswagen',
  model: 'Golf',
  makeSlug: 'volkswagen',
  modelSlug: 'golf',
  bgWord: 'GOLF',

  seo: {
    title: 'Volkswagen Golf Tyre Size & Best Price Singapore | SGCarPass',
    description: 'VW Golf Mk8 (2020+) uses 205/55R16 (standard) or 225/40R18 (GTI). Mk7.5 FL uses 205/55R16 or 225/45R17. 5×112, 57.1mm CB — NOT same CB as BMW/Mercedes. From $68 installed Singapore.',
    ogDescription: 'VW Golf tyre sizes: Mk8 205/55R16 standard, 225/40R18 GTI. 5×112, 57.1mm CB (different from BMW 66.6mm despite same bolt pattern). From $68 installed.',
    twitterDescription: 'VW Golf Mk8 uses 205/55R16 (standard) or 225/40R18 (GTI). 5×112, 57.1mm CB. From $68 installed in Singapore.',
    priceFrom: 68,
    oeSize: '205/55R16',
  },

  defaultGen: 'mk8',

  generations: [
    {
      key: 'mk8',
      label: 'Mk8 8th Gen (2020–2026)',
      years: '2020–2026',
      note: 'Mk8 standard Golf uses 205/55R16 on the base trim; GTI comes with 225/40R18. Both use the same 5×112 bolt pattern as BMW and Mercedes, but VW\'s centre bore is 57.1mm — BMW/Mercedes rims will not fit without hub-centric rings.',
      heroChips: [
        { label: 'Golf / Life / Style (base)', value: '205/55R16' },
        { label: 'GTI / R-Line 18"',           value: '225/40R18' },
        { label: 'From installed',              value: '$68', green: true },
      ],
      variants: [
        { name: 'Golf Life / Style (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
          { tag: 'Alt', size: '215/55R16', note: '宽 10mm，同外径' },
          { tag: 'Up',  size: '225/45R17', note: '升 17"，外径相近，需配 7J 17" 轮毂' },
        ]},
        { name: 'Golf Style+ / GTE (17")', sizes: [
          { tag: 'OE',  size: '225/45R17' },
          { tag: 'Alt', size: '235/40R17', note: '宽 10mm 运动感升级' },
        ]},
        { name: 'GTI / R-Line (18")', sizes: [
          { tag: 'OE',  size: '225/40R18' },
          { tag: 'Alt', size: '235/35R18', note: '宽 10mm，需确认轮拱间隙' },
        ]},
      ],
    },
    {
      key: 'mk7-5',
      label: 'Mk7.5 FL 7th Gen (2017–2020)',
      years: '2017–2020',
      heroChips: [
        { label: 'Golf / Comfortline', value: '205/55R16' },
        { label: 'GTI 18"',           value: '225/40R18' },
        { label: 'From installed',    value: '$68', green: true },
      ],
      variants: [
        { name: 'Golf Comfortline / Highline (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
          { tag: 'Alt', size: '225/45R17', note: '升 17" 改装轮毂' },
        ]},
        { name: 'GTI / GTD (18")', sizes: [
          { tag: 'OE',  size: '225/40R18' },
          { tag: 'Alt', size: '235/35R18', note: '宽 10mm' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2020–2026 · Mk8 · GTI · 18"',    width: '7.5J', diameter: '18"', offset: 'ET51', boltPattern: '5×112' },
    { label: '2020–2026 · Mk8 · Style+ · 17"',  width: '7.0J', diameter: '17"', offset: 'ET48', boltPattern: '5×112' },
    { label: '2020–2026 · Mk8 · base · 16"',    width: '6.5J', diameter: '16"', offset: 'ET46', boltPattern: '5×112' },
    { label: '2017–2020 · Mk7.5 · GTI · 18"',  width: '7.5J', diameter: '18"', offset: 'ET51', boltPattern: '5×112' },
    { label: '2017–2020 · Mk7.5 · base · 16"', width: '6.5J', diameter: '16"', offset: 'ET46', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '57.1mm',
    stud: 'M14×1.5 bolt',
    torque: '120 Nm',
    warning: '⚠️ VW Golf uses 5×112 like BMW and Mercedes, but centre bore is 57.1mm — NOT 66.6mm. BMW or Mercedes rims will not sit correctly without 57.1→66.6mm hub-centric rings. Wrong CB causes vibration at speed even if bolts fit.',
  },

  priceTabs: [
    {
      size: '205/55R16',
      tabLabel: '205/55R16 · Golf 标准版主力尺码',
      budget: {
        name: 'Nankang NS-20 UHP',
        desc: '16" 紧凑型轿车胎 · Golf 入门最实惠，日常通勤足够',
        price: 68,
        also: 'Also: Kumho Ecsta PS91, Hankook Ventus Prime4',
        waText: 'VW Golf 205%2F55R16 budget tyre quote (Nankang or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '静音舒适 + 湿地 A 级 · Golf 通勤车最佳均衡选择',
        price: 118,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'VW Golf 205%2F55R16 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '舒适与操控兼顾 · Golf 最均衡顶级选择',
        price: 158,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'VW Golf 205%2F55R16 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $272–$340 · Mid-range $472–$560 · Premium $632–$740',
    },
    {
      size: '225/40R18',
      tabLabel: '225/40R18 · Golf GTI / R-Line 18"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" UHP 热血小钢炮胎 · GTI 预算首选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'VW Golf GTI 225%2F40R18 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干地操控极佳 + 湿地 A 级 · GTI 最受好评',
        price: 188,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'VW Golf GTI 225%2F40R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'GTI 旗舰配胎 · 热血操控的最终答案',
        price: 248,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'VW Golf GTI 225%2F40R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $752–$880 · Premium $992–$1,160',
    },
  ],

  radarSize: '205/55R16',
  radarSource: 'Nankang (10 reviews) · Continental (19 reviews) · Michelin (16 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [66, 72, 72, 66, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nankang\nNS-20 UHP',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '72', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [84, 88, 86, 82, 84, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [86, 90, 84, 80, 86, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Golf 标准版通勤党（205/55R16）',
      color: 'blue',
      genKey: 'mk8',
      body: 'Golf 标准版配 <strong>205/55R16</strong>，侧壁较高，乘坐舒适，是新加坡最省钱的家用轿车胎之一。Continental PremiumContact 6（$118/条）是最受好评的选择——静音出色，湿地 A 级，整套约 $472。日常通勤为主的车主也可考虑 Michelin Primacy 4+，静音度更好。',
    },
    {
      title: 'Golf GTI 热血车主（225/40R18）',
      color: 'red',
      genKey: 'mk8',
      body: 'GTI 配 <strong>225/40R18</strong>，低扁平比带来精准操控响应。Continental SportContact 6（$188/条）是 GTI 圈最认可的选择——干地操控媲美纯性能胎，湿地同样稳定，整套约 $752。Michelin Pilot Sport 4S（$248/条）是操控追求者的终极答案。注意：18" 薄胎遇减速带要放慢速度，避免碰圈损毁。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Volkswagen Golf use in Singapore?',
      a: 'VW Golf Mk8 (2020+): base Golf Life/Style uses 205/55R16; Style+ and GTE use 225/45R17; GTI and R-Line use 225/40R18. Mk7.5 FL (2017–2020): same size range. Check the door jamb sticker to confirm your trim.',
    },
    {
      q: 'What is the bolt pattern of the VW Golf?',
      a: 'VW Golf Mk7.5 and Mk8 use 5×112 bolt pattern with 57.1mm centre bore. Bolt thread M14×1.5, torque 120 Nm. Important: the 5×112 pattern is shared with BMW and Mercedes, but VW\'s centre bore is 57.1mm while BMW/Mercedes use 66.6mm — rim swapping between these brands requires hub-centric rings.',
    },
    {
      q: 'Can I use BMW or Mercedes rims on a VW Golf?',
      a: 'Both use 5×112, so the bolts will fit — but BMW/Mercedes have 66.6mm centre bore while the Golf has 57.1mm. The rim will sit off-centre unless you install 57.1→66.6mm hub-centric rings. Driving without hub-centric rings causes vibration at highway speeds and increases bearing wear.',
    },
    {
      q: 'How much does it cost to replace VW Golf tyres in Singapore?',
      a: 'For 205/55R16 (most common): budget from $68 per tyre installed; mid-range $118–$135; premium $158–$185. Full set of 4: approximately $272–$740. For GTI 225/40R18: budget from $98; mid $188–$210; premium $248–$285. Full set: approximately $392–$1,160.',
    },
    {
      q: 'Is the Golf GTI tyre fitment staggered (front and rear different sizes)?',
      a: 'Standard Golf GTI uses the same 225/40R18 on all four wheels (square fitment) — front and rear can be rotated. Some optional performance packages or aftermarket setups may use staggered, but Singapore-spec GTI as standard is square. Always verify your specific trim before ordering.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nankang NS-20 UHP 205/55R16',           brand: { '@type': 'Brand', name: 'Nankang' },     offers: { '@type': 'Offer', price: '68',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 6 205/55R16', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 205/55R16',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/40R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 225/40R18',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 225/40R18',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
