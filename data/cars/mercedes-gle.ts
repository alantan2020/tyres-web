import type { CarData } from './types'

const data: CarData = {
  make: 'Mercedes',
  model: 'GLE',
  makeSlug: 'mercedes',
  modelSlug: 'gle',
  bgWord: 'GLE',

  seo: {
    title: 'Mercedes-Benz GLE Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mercedes-Benz GLE W167 (2019+) uses 255/55R18 (GLE 300d base), 275/45R20 (GLE 450), or 285/40R21 (AMG Line). 5×112, 66.6mm CB, M14×1.25 bolt, 130 Nm. Luxury SUV. From $148 installed.',
    ogDescription: 'Mercedes GLE W167: 255/55R18 (base), 275/45R20 (450), 285/40R21 (AMG). 5×112, 66.6mm. From $148.',
    twitterDescription: 'Mercedes GLE uses 255/55R18 or 275/45R20 (GLE450). 5×112, 66.6mm bolt. From $148.',
    priceFrom: 148,
    oeSize: '275/45R20',
  },

  defaultGen: 'w167',

  generations: [
    {
      key: 'w167',
      label: 'W167 3rd Gen (2019–2026)',
      years: '2019–2026',
      note: 'Current Mercedes GLE. Base GLE 300d/350e/400e uses 255/55R18 (18"); GLE 450/400d uses 275/45R20 (20"); AMG Line and GLE 53/63 AMG use 285/40R21 (21"). ⚠️ Mercedes uses M14×1.25 wheel bolts — FINER thread than most VW (M14×1.5) or Toyota (M12). Do NOT cross-fit.',
      heroChips: [
        { label: 'GLE 300d base OE',   value: '255/55R18' },
        { label: 'GLE 450 / 400d OE', value: '275/45R20' },
        { label: 'AMG Line / GLE63 OE', value: '285/40R21' },
      ],
      variants: [
        { name: 'GLE 300d / 350e base (18")', sizes: [
          { tag: 'OE',  size: '255/55R18' },
          { tag: 'Alt', size: '265/50R18', note: '稍宽，保持 18" 外径' },
        ]},
        { name: 'GLE 450 / 400d (20")', sizes: [
          { tag: 'OE',  size: '275/45R20' },
          { tag: 'Alt', size: '285/40R20', note: '稍宽，AMG 风格' },
        ]},
        { name: 'GLE AMG Line / GLE 63 AMG (21")', sizes: [
          { tag: 'OE',  size: '285/40R21' },
        ]},
      ],
    },
    {
      key: 'w166',
      label: 'W166 2nd Gen (2015–2019)',
      years: '2015–2019',
      note: 'Previous GLE W166. Uses 255/50R19 (base) or 275/45R20 (AMG Line). Same 5×112 bolt pattern.',
      heroChips: [
        { label: 'W166 base OE',     value: '255/50R19' },
        { label: 'W166 AMG Line OE', value: '275/45R20' },
        { label: 'From installed',    value: '$148', green: true },
      ],
      variants: [
        { name: 'W166 base (19")', sizes: [{ tag: 'OE', size: '255/50R19' }] },
        { name: 'W166 AMG Line (20")', sizes: [{ tag: 'OE', size: '275/45R20' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'W167 2019+ · 300d/350e · 18"',    width: '8.0J', diameter: '18"', offset: 'ET56', boltPattern: '5×112' },
    { label: 'W167 2019+ · 450/400d · 20"',      width: '9.0J', diameter: '20"', offset: 'ET56', boltPattern: '5×112' },
    { label: 'W167 2019+ · AMG/GLE63 · 21"',     width: '9.5J', diameter: '21"', offset: 'ET56', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.25 bolt',
    torque: '130 Nm',
    notes: '⚠️ Mercedes-Benz GLE uses M14×1.25 wheel bolts — finer thread pitch than VW Group (M14×1.5). Never fit M14×1.5 bolts to a Mercedes or vice versa. 5×112 bolt pattern, 66.6mm centre bore. Torque 130 Nm. Front and rear tyres are different sizes on some GLE AMG variants — check staggered fitment before ordering.',
  },

  priceTabs: [
    {
      size: '275/45R20',
      tabLabel: '275/45R20 · GLE 450 / 400d 20"',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '20" SUV 胎 · GLE 450 豪华 SUV 预算首选',
        price: 148,
        also: 'Also: Kumho Crugen HP71, Nankang Cross Sport SP-9',
        waText: 'Mercedes GLE 450 275%2F45R20 budget tyre quote (Hankook Dynapro HP2 or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '20" 豪华 SUV 旗舰 · GLE 首选品牌（梅赛德斯 OE 合作）',
        price: 298,
        also: 'Also: Michelin Latitude Sport 3, Bridgestone Alenza 001',
        waText: 'Mercedes GLE 450 275%2F45R20 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Latitude Sport 3',
        desc: '20" SUV 运动旗舰 · GLE 性能版换胎最强',
        price: 378,
        also: 'Also: Pirelli Scorpion Verde All Season, Bridgestone Alenza 001',
        waText: 'Mercedes GLE 450 275%2F45R20 premium tyre quote (Michelin Latitude Sport 3)',
      },
      setEstimate: 'Budget $592–$760 · Mid-range $1,192–$1,440 · Premium $1,512–$1,840',
    },
    {
      size: '255/55R18',
      tabLabel: '255/55R18 · GLE 300d base 18"',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '18" SUV 胎 · GLE 300d 预算选',
        price: 148,
        also: 'Also: Kumho Crugen HP71, Nexen N\'Fera Primus EV',
        waText: 'Mercedes GLE 300d 255%2F55R18 budget tyre quote (Hankook Dynapro HP2 or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '18" 豪华 SUV 旗舰 · GLE 300d 最推荐',
        price: 268,
        also: 'Also: Michelin Latitude Sport 3, Bridgestone Dueler HP Sport',
        waText: 'Mercedes GLE 300d 255%2F55R18 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Alenza 001',
        desc: '18" 静音豪华 SUV · GLE 极致舒适',
        price: 338,
        also: 'Also: Michelin Latitude Tour HP, Pirelli Scorpion Verde',
        waText: 'Mercedes GLE 300d 255%2F55R18 premium tyre quote (Bridgestone Alenza 001)',
      },
      setEstimate: 'Budget $592–$760 · Mid-range $1,072–$1,280 · Premium $1,352–$1,640',
    },
  ],

  radarSize: '275/45R20',
  radarSource: 'Continental (13 reviews) · Michelin (11 reviews) · Bridgestone (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [70, 72, 78, 74, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nDynapro HP2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ OEM Partner', labelClass: 'tier tier--mid', score: '8.8',
      scores: [88, 88, 86, 82, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nCrossContact RX',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '9.0',
      scores: [90, 88, 86, 86, 86, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nLatitude Sport 3',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '86', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'GLE 450（275/45R20）— ⚠️ 梅赛德斯专用 M14×1.25 螺丝，不能混装',
      color: 'red',
      genKey: 'w167',
      body: '⚠️ <strong>梅赛德斯 GLE 最常见换胎错误</strong>：螺丝规格为 M14×1.25（细牙），与大众系 M14×1.5 不同。强行使用 1.5 牙距螺丝会损坏螺孔，修复费用可观。轮胎方面，<strong>Continental CrossContact RX（$298/条）</strong>是 GLE 450 在 275/45R20 规格中最受推荐的选择——Continental 与梅赛德斯长期 OE 合作，湿地制动和干地表现均属旗舰，整套约 $1,192。Michelin Latitude Sport 3（$378/条）是纯粹性能和操控的最高选择，适合 AMG Line 和 GLE 53 AMG 车主。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mercedes GLE use in Singapore?',
      a: 'Mercedes GLE W167 (2019+): GLE 300d base uses 255/55R18; GLE 450/400d uses 275/45R20; AMG Line/GLE 63 uses 285/40R21. 5×112 bolt pattern, 66.6mm centre bore.',
    },
    {
      q: 'What bolt does the Mercedes GLE use?',
      a: 'Mercedes GLE uses M14×1.25 wheel bolts — finer thread than VW Group M14×1.5. Never cross-fit different bolt threads. 5×112 pattern, torque 130 Nm.',
    },
    {
      q: 'How much does it cost to replace Mercedes GLE tyres in Singapore?',
      a: 'For GLE 450 275/45R20: budget from $148/tyre; mid-range (Continental CrossContact RX) $298; premium $378. Full set $592–$1,512. For base 255/55R18: from $148 budget; mid $268; premium $338.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Dynapro HP2 275/45R20',          brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 275/45R20',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '298', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Latitude Sport 3 275/45R20',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '378', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
