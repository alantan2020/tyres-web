import type { CarData } from './types'

const data: CarData = {
  make: 'Hyundai',
  model: 'Palisade',
  makeSlug: 'hyundai',
  modelSlug: 'palisade',
  bgWord: 'PALISADE',

  seo: {
    title: 'Hyundai Palisade Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Hyundai Palisade LX2 (2018+) uses 245/55R19 (2WD/base) or 245/50R20 (HTRAC AWD). 5×114.3, 67.1mm CB, M14×1.5. 3-row family SUV. From $138 installed.',
    ogDescription: 'Hyundai Palisade: 245/55R19 (2WD base), 245/50R20 (HTRAC AWD). 5×114.3, 67.1mm. 3-row SUV. From $138.',
    twitterDescription: 'Hyundai Palisade uses 245/55R19 or 245/50R20 (HTRAC AWD). 5×114.3 bolt. From $138.',
    priceFrom: 138,
    oeSize: '245/55R19',
  },

  defaultGen: 'lx2',

  generations: [
    {
      key: 'lx2',
      label: 'LX2 1st Gen (2018–2026)',
      years: '2018–2026',
      note: 'Hyundai Palisade is a large 3-row family SUV. 2WD and entry AWD trims use 245/55R19 (19"); higher HTRAC AWD trims use 245/50R20 (20"). At 2,000–2,200 kg, XL-rated tyres recommended for the 20" variant especially.',
      heroChips: [
        { label: '2WD base OE',    value: '245/55R19' },
        { label: 'HTRAC AWD OE',  value: '245/50R20' },
        { label: 'From installed', value: '$138', green: true },
      ],
      variants: [
        { name: 'Palisade 2WD / base AWD (19")', sizes: [
          { tag: 'OE',  size: '245/55R19' },
          { tag: 'Alt', size: '255/50R19', note: '稍宽，保持 19" 外径' },
        ]},
        { name: 'Palisade HTRAC AWD (20")', sizes: [
          { tag: 'OE',  size: '245/50R20' },
          { tag: 'XL',  size: '245/50R20 XL', note: 'XL 规格推荐 —— 车重 2,200 kg+' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2018+ · 2WD base · 19"',     width: '8.0J', diameter: '19"', offset: 'ET48', boltPattern: '5×114.3' },
    { label: '2018+ · HTRAC AWD · 20"',    width: '8.5J', diameter: '20"', offset: 'ET48', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M14×1.5 bolt',
    torque: '140 Nm',
    notes: 'Hyundai Palisade uses 5×114.3 bolt pattern, 67.1mm centre bore — same as Santa Fe, Tucson, Ioniq 5/6. M14×1.5 wheel bolts, torque 140 Nm. XL-rated tyres recommended for 20" AWD variant given the 2,200 kg vehicle weight.',
  },

  priceTabs: [
    {
      size: '245/55R19',
      tabLabel: '245/55R19 · 2WD base 19"',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '19" SUV 全路况胎 · Palisade 2WD 预算首选',
        price: 138,
        also: 'Also: Kumho Crugen HP71, Nankang Cross Sport SP-9',
        waText: 'Hyundai Palisade 245%2F55R19 budget tyre quote (Hankook Dynapro HP2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4+',
        desc: '19" 静音豪华 SUV 胎 · Palisade 家用最佳',
        price: 238,
        also: 'Also: Continental CrossContact RX, Bridgestone Dueler H/P Sport',
        waText: 'Hyundai Palisade 245%2F55R19 mid-range tyre quote (Michelin Primacy 4+ or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental CrossContact RX',
        desc: '19" SUV 旗舰 · Palisade 全家大 SUV 推荐',
        price: 298,
        also: 'Also: Michelin Latitude Sport 3, Bridgestone Alenza 001',
        waText: 'Hyundai Palisade 245%2F55R19 premium tyre quote (Continental CrossContact RX)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $952–$1,120 · Premium $1,192–$1,440',
    },
    {
      size: '245/50R20',
      tabLabel: '245/50R20 · HTRAC AWD 20"',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '20" SUV 胎 · Palisade AWD 预算选',
        price: 168,
        also: 'Also: Kumho Crugen HP71, Nankang Cross Sport SP-9',
        waText: 'Hyundai Palisade AWD 245%2F50R20 budget tyre quote (Hankook Dynapro HP2 or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '20" SUV 旗舰 XL · Palisade AWD 最佳平衡',
        price: 278,
        also: 'Also: Michelin Latitude Sport 3, Pirelli Scorpion Verde',
        waText: 'Hyundai Palisade AWD 245%2F50R20 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Alenza 001',
        desc: '20" SUV 旗舰 · Palisade AWD 极致静音',
        price: 348,
        also: 'Also: Michelin Latitude Tour HP, Continental CrossContact LX2',
        waText: 'Hyundai Palisade AWD 245%2F50R20 premium tyre quote (Bridgestone Alenza 001)',
      },
      setEstimate: 'Budget $672–$840 · Mid-range $1,112–$1,360 · Premium $1,392–$1,680',
    },
  ],

  radarSize: '245/55R19',
  radarSource: 'Michelin (14 reviews) · Continental (11 reviews) · Hankook (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [70, 72, 78, 74, 74, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nDynapro HP2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 84, 90, 78, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [88, 86, 86, 82, 84, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Continental\nCrossContact RX',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Palisade（245/55R19）— 三排大 SUV，推荐静音 SUV 胎',
      color: 'blue',
      genKey: 'lx2',
      body: 'Hyundai Palisade 是 7/8 座三排家用 SUV，日常使用场景以家庭出行为主，换胎重点是 <strong>静音</strong> 和 <strong>舒适</strong>。<strong>Michelin Primacy 4+（$238/条）</strong>在 245/55R19 规格的寿命和静音性表现顶级，整套约 $952，是新加坡 Palisade 车主最常选的方案。AWD 版（245/50R20）车重超 2,200 kg，推荐 Continental CrossContact RX XL 规格（$278/条），整套约 $1,112。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Hyundai Palisade use in Singapore?',
      a: 'Hyundai Palisade LX2 (2018+): 2WD and base AWD use 245/55R19; HTRAC AWD higher trims use 245/50R20. 5×114.3 bolt pattern, 67.1mm centre bore.',
    },
    {
      q: 'How much does it cost to replace Hyundai Palisade tyres in Singapore?',
      a: 'For 245/55R19 (2WD): budget from $138/tyre; mid-range (Michelin Primacy 4+) $238; premium $298. Full set $552–$1,192. For AWD 245/50R20: from $168 budget; mid $278; premium $348.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Dynapro HP2 245/55R19',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 245/55R19',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Continental CrossContact RX 245/50R20', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '278', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
