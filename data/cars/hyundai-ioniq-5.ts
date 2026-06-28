import type { CarData } from './types'

const data: CarData = {
  make: 'Hyundai',
  model: 'Ioniq 5',
  makeSlug: 'hyundai',
  modelSlug: 'ioniq-5',
  bgWord: 'IONIQ5',

  seo: {
    title: 'Hyundai Ioniq 5 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Hyundai Ioniq 5 NE1 (2021+): RWD Standard uses 235/55R19; Long Range AWD uses 255/45R20. 5×114.3, 67.1mm CB. EV — must use 4 identical tyres. XL-rated recommended. From $138 installed.',
    ogDescription: 'Hyundai Ioniq 5: RWD 235/55R19; AWD 255/45R20. 5×114.3, 67.1mm. EV — 4 tyres must match. XL-rated rec. From $138.',
    twitterDescription: 'Hyundai Ioniq 5 uses 235/55R19 (RWD) or 255/45R20 (AWD). 5×114.3 bolt. EV. From $138.',
    priceFrom: 138,
    oeSize: '235/55R19',
  },

  defaultGen: 'ne1',

  generations: [
    {
      key: 'ne1',
      label: 'NE1 1st Gen (2021–2026)',
      years: '2021–2026',
      note: 'Ioniq 5 is one of the best-selling EVs in Singapore. RWD Standard Range uses 235/55R19; Long Range AWD uses 255/45R20. At 1,800–2,100 kg, XL-rated tyres are strongly recommended. All 4 tyres must be identical — AWD models especially cannot mix different tyres.',
      heroChips: [
        { label: 'RWD Standard OE',  value: '235/55R19' },
        { label: 'Long Range AWD OE', value: '255/45R20' },
        { label: 'From installed',    value: '$138', green: true },
      ],
      variants: [
        { name: 'Ioniq 5 RWD Standard Range (19")', sizes: [
          { tag: 'OE',  size: '235/55R19' },
          { tag: 'XL',  size: '235/55R19 XL', note: '强烈推荐 XL 规格 —— EV 车重 1,800 kg+' },
        ]},
        { name: 'Ioniq 5 Long Range AWD (20")', sizes: [
          { tag: 'OE',  size: '255/45R20' },
          { tag: 'XL',  size: '255/45R20 XL', note: 'AWD 必须 4 条同款 XL 规格，不可混搭' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021+ · RWD Standard · 19"', width: '8.0J', diameter: '19"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2021+ · AWD Long Range · 20"', width: '8.5J', diameter: '20"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M14×1.5 bolt',
    torque: '140 Nm',
    notes: '⚠️ Hyundai Ioniq 5 uses 5×114.3 bolt pattern, 67.1mm centre bore. M14×1.5 wheel bolts (larger than most Toyotas), torque 140 Nm. XL-rated tyres strongly recommended. AWD: all 4 tyres must be identical brand and model — mismatched tyres can damage the AWD system. Low rolling resistance tyres (Michelin e.Primacy, Continental EcoContact 6) are recommended to maximise EV range.',
  },

  priceTabs: [
    {
      size: '235/55R19',
      tabLabel: '235/55R19 · RWD Standard Range 19"',
      budget: {
        name: 'Hankook iON Evo',
        desc: '19" EV 专属胎 · Ioniq 5 RWD 预算首选 · XL 低滚阻',
        price: 138,
        also: 'Also: Kumho EV31, Nexen N\'Fera Primus EV',
        waText: 'Hyundai Ioniq 5 235%2F55R19 budget EV tyre quote (Hankook iON Evo or similar)',
      },
      mid: {
        name: 'Michelin e.Primacy',
        desc: '19" 低滚阻旗舰 XL · Ioniq 5 续航最大化首选',
        price: 238,
        also: 'Also: Continental EcoContact 6, Bridgestone Turanza Eco',
        waText: 'Hyundai Ioniq 5 235%2F55R19 mid-range EV tyre quote (Michelin e.Primacy or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza 6',
        desc: '19" 极致静音 XL · Ioniq 5 NVH 体验最佳',
        price: 298,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato All Season SF3',
        waText: 'Hyundai Ioniq 5 235%2F55R19 premium EV tyre quote (Bridgestone Turanza 6)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $952–$1,120 · Premium $1,192–$1,440',
    },
    {
      size: '255/45R20',
      tabLabel: '255/45R20 · AWD Long Range 20"',
      budget: {
        name: 'Hankook iON Evo',
        desc: '20" EV 专属胎 XL · Ioniq 5 AWD 预算选',
        price: 168,
        also: 'Also: Kumho EV31, Nexen N\'Fera Primus EV',
        waText: 'Hyundai Ioniq 5 AWD 255%2F45R20 budget EV tyre quote (Hankook iON Evo or similar)',
      },
      mid: {
        name: 'Michelin e.Primacy',
        desc: '20" 低滚阻旗舰 XL · AWD 版 4 条必须同款',
        price: 278,
        also: 'Also: Continental EcoContact 6, Bridgestone Alenza 001',
        waText: 'Hyundai Ioniq 5 AWD 255%2F45R20 mid-range EV tyre quote (Michelin e.Primacy or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 7',
        desc: '20" 静音运动 XL · AWD 版最强驾感',
        price: 348,
        also: 'Also: Michelin Pilot Sport EV, Pirelli P Zero All Season',
        waText: 'Hyundai Ioniq 5 AWD 255%2F45R20 premium EV tyre quote (Continental PremiumContact 7)',
      },
      setEstimate: 'Budget $672–$840 · Mid-range $1,112–$1,360 · Premium $1,392–$1,680',
    },
  ],

  radarSize: '235/55R19',
  radarSource: 'Michelin (22 reviews) · Continental (18 reviews) · Hankook (14 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget · EV', labelClass: 'tier', score: '7.5',
      scores: [74, 74, 82, 76, 82, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\niON Evo',
      stats: [{ k: 'Wet', v: '74', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '82', hi: true }, { k: 'Range', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ EV Popular', labelClass: 'tier tier--mid', score: '8.8',
      scores: [88, 86, 92, 82, 90, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\ne.Primacy',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '92', hi: true }, { k: 'Range', v: '90', hi: true }],
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
      title: 'Ioniq 5 RWD（235/55R19）— EV 必须选 XL 低滚阻胎',
      color: 'blue',
      genKey: 'ne1',
      body: 'Hyundai Ioniq 5 车重 1,800–2,100 kg，换胎有两个关键原则：①必须选 <strong>XL（Extra Load）规格</strong>，标准负荷指数胎承载不足易过热；②推荐 <strong>低滚阻型胎</strong>以最大化续航。<strong>Michelin e.Primacy XL（$238/条）</strong>在新加坡 Ioniq 5 车主中评价最高，结合低滚阻和静音性顶级体验，整套约 $952。Continental EcoContact 6 XL（约 $218/条）是更经济的低滚阻选择，性价比极高。<strong>AWD 版：4 条必须同一品牌型号</strong>——不同品牌胎会导致 AWD 系统误判。',
    },
    {
      title: 'Ioniq 5 AWD（255/45R20）— 4 条必须完全一致',
      color: 'red',
      genKey: 'ne1',
      body: 'Ioniq 5 AWD 版使用 255/45R20，<strong>换胎时 4 条必须是同一品牌和型号</strong>。不同品牌的胎直径和周长会有细微差异（通常 ±0.5–1%），AWD 系统会将这种差异误判为轮胎打滑从而介入，长期使用会加速差速器损耗。AWD 版建议整套更换（通常在 30,000–40,000 km），不建议前后单换。Michelin e.Primacy XL 255/45R20（$278/条）是最受推荐的整套换胎方案，整套约 $1,112。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Hyundai Ioniq 5 use in Singapore?',
      a: 'Hyundai Ioniq 5 (2021+): RWD Standard Range uses 235/55R19; Long Range AWD uses 255/45R20. Both require XL-rated tyres. 5×114.3 bolt pattern, 67.1mm centre bore.',
    },
    {
      q: 'Do I need XL tyres for the Hyundai Ioniq 5?',
      a: 'Yes, strongly recommended. Ioniq 5 weighs 1,800–2,100 kg depending on trim. XL (Extra Load) rated tyres have a higher maximum load per tyre and are designed for heavier EVs. Using standard load tyres increases the risk of overloading, overheating, and blowouts.',
    },
    {
      q: 'Can I replace just 2 tyres on the Hyundai Ioniq 5 AWD?',
      a: 'No, not recommended. Ioniq 5 AWD requires all 4 tyres to be identical (same brand, model, and size). Different tyres have different rolling circumferences which confuses the AWD system and can cause premature drivetrain wear. Always replace all 4 tyres together on AWD variants.',
    },
    {
      q: 'How much does it cost to replace Hyundai Ioniq 5 tyres in Singapore?',
      a: 'For RWD 235/55R19: budget from $138/tyre; mid-range (Michelin e.Primacy) $238; premium $298. Full set $552–$1,192. For AWD 255/45R20: from $168 budget; mid $278; premium $348.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook iON Evo 235/55R19',           brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin e.Primacy 235/55R19',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 235/55R19',     brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '298', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Michelin e.Primacy 255/45R20',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '278', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
