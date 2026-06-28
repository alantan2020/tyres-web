import type { CarData } from './types'

const data: CarData = {
  make: 'Lexus',
  model: 'LM',
  makeSlug: 'lexus',
  modelSlug: 'lm',
  bgWord: 'LM',

  seo: {
    title: 'Lexus LM Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Lexus LM300h / LM350h (AXH40 2020+) uses 225/55R18. 5×114.3 bolt pattern, 60.1mm CB. SG ultra-luxury MPV with high demand for quality tyres. From $128 installed.',
    ogDescription: 'Lexus LM: 225/55R18 (all trims). 5×114.3, 60.1mm CB. Ultra-luxury MPV. From $128 installed.',
    twitterDescription: 'Lexus LM uses 225/55R18. 5×114.3 bolt. From $128.',
    priceFrom: 128,
    oeSize: '225/55R18',
  },

  defaultGen: 'axh40',

  generations: [
    {
      key: 'axh40',
      label: 'AXH40 1st Gen (2020–2026)',
      years: '2020–2026',
      note: 'Lexus LM is a premium luxury MPV based on the Toyota Alphard/Vellfire H40 platform. Extremely popular in Singapore especially with Chinese business community. 4-seat executive or 7-seat layout. LM 300h and LM 350h all use 225/55R18. Being a near-2,800 kg luxury MPV, XL-rated tyres are strongly recommended.',
      heroChips: [
        { label: 'LM300h / LM350h OE', value: '225/55R18' },
        { label: 'Recommend XL rated',  value: '⚠ XL', green: false },
        { label: 'From installed',       value: '$128', green: true },
      ],
      variants: [
        { name: 'LM300h / LM350h (18")', sizes: [
          { tag: 'OE',  size: '225/55R18' },
          { tag: 'XL',  size: '225/55R18 XL', note: 'XL 规格承载更高，强烈推荐 —— LM 车重接近 2,800 kg' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2020+ · LM300h / LM350h · 18"', width: '7.5J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5 nut',
    torque: '103 Nm',
    notes: 'Lexus LM uses 5×114.3 bolt pattern, 60.1mm centre bore — same as Lexus IS/NX/RX. M12×1.5 lug nuts, torque 103 Nm. ⚠️ Strongly recommend XL-rated tyres (extra load index): LM at near 2,800 kg is one of the heaviest Lexus models and needs higher load-rated tyres for safe handling and longevity.',
  },

  priceTabs: [
    {
      size: '225/55R18',
      tabLabel: '225/55R18 · LM300h / LM350h',
      budget: {
        name: 'Hankook Kinergy 4S2',
        desc: '18" SUV 胎 · LM 预算选 · 建议确认 XL 规格',
        price: 128,
        also: 'Also: Kumho Solus 4S, Nankang Cross Sport SP-9',
        waText: 'Lexus LM 225%2F55R18 budget tyre quote (Hankook Kinergy 4S2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4+',
        desc: '18" 静音豪华 XL · LM 超豪华 MPV 最受欢迎选择',
        price: 218,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza T005',
        waText: 'Lexus LM 225%2F55R18 mid-range tyre quote (Michelin Primacy 4+ or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza 6',
        desc: '18" 极致静音 · 匹配 LM 旗舰地位',
        price: 278,
        also: 'Also: Michelin e.Primacy XL, Continental PremiumContact 7',
        waText: 'Lexus LM 225%2F55R18 premium tyre quote (Bridgestone Turanza 6 or similar)',
      },
      setEstimate: 'Budget $512–$640 · Mid-range $872–$1,040 · Premium $1,112–$1,320',
    },
  ],

  radarSize: '225/55R18',
  radarSource: 'Michelin (13 reviews) · Bridgestone (11 reviews) · Continental (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 80, 74, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy 4S2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [88, 86, 92, 78, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '92', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 86, 94, 80, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nTuranza 6',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '94', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'LM300h / LM350h（225/55R18）— 超重豪华 MPV 必须选 XL 规格',
      color: 'blue',
      genKey: 'axh40',
      body: 'Lexus LM 车重约 2,700–2,800 kg，是 Lexus 最重的量产车型。换胎时务必选择 <strong>XL（Extra Load）规格</strong>的 225/55R18，普通载重指数的胎在极端情况下会过热变形。<strong>Michelin Primacy 4+ XL（$218/条）</strong>是新加坡 LM 车主最常选的换胎方案，静音性极佳，匹配 LM 4 座奢华座舱的安静体验，整套约 $872。Bridgestone Turanza 6 XL（$278/条）是更静更豪华的选择，NVH 测试中名列前茅。不建议选非 XL 规格的预算胎——车重太大，安全裕度不足。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Lexus LM use in Singapore?',
      a: 'Lexus LM300h and LM350h (AXH40 2020+): all trims use 225/55R18. XL-rated tyres strongly recommended due to near 2,800 kg vehicle weight. 5×114.3 bolt pattern, 60.1mm centre bore.',
    },
    {
      q: 'Do I need XL tyres for the Lexus LM?',
      a: 'Yes, strongly recommended. Lexus LM weighs approximately 2,700–2,800 kg. XL (Extra Load) rated 225/55R18 tyres have a higher maximum load capacity and are safer for this heavy luxury MPV, especially under Singapore\'s hot conditions.',
    },
    {
      q: 'How much does it cost to replace Lexus LM tyres in Singapore?',
      a: 'For 225/55R18 XL: budget from $128/tyre; mid-range (Michelin Primacy 4+) $218; premium (Bridgestone Turanza 6) $278. Full set $512–$1,112. Given the luxury positioning, most LM owners opt for premium tyres.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 225/55R18',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/55R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 225/55R18',      brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '278', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
