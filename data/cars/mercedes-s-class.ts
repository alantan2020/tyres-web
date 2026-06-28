import type { CarData } from './types'

const data: CarData = {
  make: 'Mercedes-Benz',
  model: 'S-Class',
  makeSlug: 'mercedes-benz',
  modelSlug: 's-class',
  bgWord: 'SCLASS',

  seo: {
    title: 'Mercedes-Benz S-Class Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mercedes S-Class W223 (2021+) uses 245/50R19 (S350) or 275/40R20 (S500/AMG Line). W222 (2014–2021) uses 245/50R18 or 275/40R20. 5×112, 66.6mm CB. From $138.',
    ogDescription: 'Mercedes S-Class W223: 245/50R19 (S350d), 245/45R20 (S400d), 275/35R21 (AMG 63). W222: 245/50R18, 275/35R20. 5×112, 66.6mm CB. From $138.',
    twitterDescription: 'Mercedes S-Class W223 uses 245/50R19 (S350) or 275/35R21 (AMG Line). 5×112 bolt. From $138 installed.',
    priceFrom: 138,
    oeSize: '245/50R19',
  },

  defaultGen: 'w223',

  generations: [
    {
      key: 'w223',
      label: 'W223 7th Gen (2021–2026)',
      years: '2021–2026',
      note: 'W223 features air suspension standard. S350d (MHEV) is the entry; S580e PHEV weighs ~2,400 kg. AMG 63 S E Performance is the flagship (19" staggered).',
      heroChips: [
        { label: 'S350d OE',     value: '245/50R19' },
        { label: 'S400d OE',     value: '245/45R20' },
        { label: 'AMG Line OE',  value: '275/35R21' },
        { label: 'From installed', value: '$138', green: true },
      ],
      variants: [
        { name: 'S350d / S400d base (19")', sizes: [
          { tag: 'OE',  size: '245/50R19' },
          { tag: 'Alt', size: '245/45R20', note: '升 20"，高配同款' },
        ]},
        { name: 'S450 / S400d AMG Line (20")', sizes: [
          { tag: 'OE',  size: '245/45R20' },
          { tag: 'Alt', size: '275/40R20', note: '宽胎选配' },
        ]},
        { name: 'AMG S63 E Performance (21")', sizes: [
          { tag: 'OE',  size: '255/35R21' },
          { tag: 'OE',  size: '285/30R21', note: 'rear — staggered' },
        ]},
      ],
    },
    {
      key: 'w222',
      label: 'W222 6th Gen (2014–2021)',
      years: '2014–2021',
      heroChips: [
        { label: 'S300 base OE', value: '245/50R18' },
        { label: 'S500 OE',      value: '275/40R19' },
        { label: 'S63 AMG OE',   value: '275/35R20' },
        { label: 'From installed', value: '$128', green: true },
      ],
      variants: [
        { name: 'S300 / S350 base (18")', sizes: [
          { tag: 'OE',  size: '245/50R18' },
          { tag: 'Alt', size: '275/40R19', note: '升 19"，S500 同款' },
        ]},
        { name: 'S400 / S500 (19")', sizes: [
          { tag: 'OE',  size: '245/45R19' },
          { tag: 'OE',  size: '275/40R19', note: 'staggered 选配' },
        ]},
        { name: 'S63 / S65 AMG (20")', sizes: [
          { tag: 'OE',  size: '255/40R20' },
          { tag: 'OE',  size: '285/35R20', note: 'rear — staggered' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021+ · W223 · AMG S63 · 21"',   width: '9.5J', diameter: '21"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2021+ · W223 · AMG Line · 20"',  width: '8.5J', diameter: '20"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2021+ · W223 · S350d · 19"',     width: '8.0J', diameter: '19"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2014–2021 · W222 · S63 · 20"',   width: '9.5J', diameter: '20"', offset: 'ET29', boltPattern: '5×112' },
    { label: '2014–2021 · W222 · S500 · 19"',  width: '8.0J', diameter: '19"', offset: 'ET36', boltPattern: '5×112' },
    { label: '2014–2021 · W222 · S300 · 18"',  width: '8.0J', diameter: '18"', offset: 'ET36', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.25 bolt',
    torque: '120 Nm',
    notes: 'Mercedes S-Class uses BOLTS (not nuts), 5×112 bolt pattern, 66.6mm centre bore — same as all modern Mercedes-Benz and also BMW models (different offset). W223 S-Class weighs 2,100–2,450 kg depending on variant; PHEV models must use XL-rated tyres. M14×1.25 lug bolts, torque 120 Nm.',
  },

  priceTabs: [
    {
      size: '245/50R19',
      tabLabel: '245/50R19 · W223 S350d 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" 顶级行政轿车胎 · S-Class 预算首选',
        price: 138,
        also: 'Also: Kumho Ecsta PS91, Bridgestone Potenza Sport',
        waText: 'Mercedes S-Class W223 245%2F50R19 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '行政轿车干湿地综合最强 · S-Class 最受好评',
        price: 248,
        also: 'Also: Michelin Pilot Sport 4S, Pirelli P-Zero PZ4',
        waText: 'Mercedes S-Class W223 245%2F50R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '顶级行政轿车胎 · 最高 NVH 评分 · Mercedes OE 认证',
        price: 348,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Mercedes S-Class W223 245%2F50R19 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $992–$1,160 · Premium $1,392–$1,600',
    },
    {
      size: '245/50R18',
      tabLabel: '245/50R18 · W222 S300 / S350 尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 豪华轿车胎 · W222 基础版预算首选',
        price: 128,
        also: 'Also: Nankang AS-2+, Kumho Ecsta PS91',
        waText: 'Mercedes S-Class W222 245%2F50R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '18" 静音豪华 · W222 舒适日用首选',
        price: 218,
        also: 'Also: Continental PremiumContact 7, Michelin Primacy 4+',
        waText: 'Mercedes S-Class W222 245%2F50R18 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '18" 行政豪华顶级 · W222 驾驶感升级',
        price: 298,
        also: 'Also: Continental SportContact 6, Pirelli P-Zero',
        waText: 'Mercedes S-Class W222 245%2F50R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $512–$640 · Mid-range $872–$1,040 · Premium $1,192–$1,400',
    },
  ],

  radarSize: '245/50R19',
  radarSource: 'Continental (13 reviews) · Michelin (11 reviews) · Bridgestone (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [70, 76, 74, 72, 72, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'NVH', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 92, 88, 82, 84, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '9.0',
      scores: [88, 94, 90, 84, 86, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'W223 S-Class（245/50R19）— 旗舰轿车换胎，静音为王',
      color: 'blue',
      genKey: 'w223',
      body: 'W223 S-Class 整备重 2,150–2,450 kg，是新加坡最重的豪华轿车之一。Air Suspension 标配会放大轮胎噪音差异——劣质胎的路噪在 S-Class 机舱里更为明显。<strong>强烈推荐 Continental SportContact 6（$248/条）或 Michelin Pilot Sport 4S（$348/条）</strong>，两者 NVH 评分均比预算胎高 15–20 分。PHEV 版 S580e 整备重超过 2,400 kg，必须选 XL 等级（Load Index 102+ for 245 width）。Pirelli P-Zero PZ4（$328/条）是 S-Class 原配 OE 的常见选择，静音性和舒适性在高速巡航时表现最佳。',
    },
    {
      title: 'W222 S-Class（2014–2021）— 二手市场丰富，换胎实惠',
      color: 'red',
      genKey: 'w222',
      body: 'W222 在新加坡二手豪华轿车市场保有量极大，主流 18" 尺码（245/50R18）货源充足，换胎成本比新款 W223 低约 15%。Bridgestone Turanza T005（$218/条）是 W222 车主评价最高的舒适胎——静音性和乘坐质量媲美原配水平，整套约 $872。<strong>AMG 63 / 65 staggered 20" 注意：</strong>前后不同尺码（255/40R20 + 285/35R20），无法轮换，后胎磨损约快 30%，建议单独换后轮无需等前轮同时换。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mercedes-Benz S-Class use in Singapore?',
      a: 'Mercedes S-Class W223 (2021+): S350d uses 245/50R19; S400d/S450 uses 245/45R20; AMG S63 uses 255/35R21 front + 285/30R21 rear. W222 (2014–2021): S300/S350 uses 245/50R18; S500 uses 245/45R19 or 275/40R19; AMG S63/S65 uses 255/40R20 + 285/35R20. All use 5×112, 66.6mm CB.',
    },
    {
      q: 'What is the bolt pattern of the Mercedes S-Class?',
      a: 'Mercedes S-Class (W222 and W223) uses 5×112 bolt pattern, 66.6mm centre bore, M14×1.25 lug bolts, torque 120 Nm. Same as Mercedes C-Class, E-Class, GLC, and most modern BMW models. Uses lug bolts, not lug nuts.',
    },
    {
      q: 'How much does it cost to replace Mercedes S-Class tyres in Singapore?',
      a: 'For 245/50R19 (W223 S350d): budget from $138/tyre; mid-range $248; premium $348. Full set: $552–$1,392. For 245/50R18 (W222 S300/S350): from $128/tyre; premium $298. AMG staggered sizes (20" or 21") require separate front/rear purchase — $200–$450 per tyre.',
    },
    {
      q: 'Does the Mercedes S-Class use run-flat tyres?',
      a: 'Some S-Class variants come with run-flat tyres (RSC); others come with standard tyres but include a tyre mobility kit. Check your owner manual. W223 S350d typically comes with regular Pirelli P-Zero or Continental SportContact tyres (not run-flat) plus a tyre inflator kit. Run-flat replacements cost 20–40% more than equivalent regular tyres.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/50R19',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 245/50R19', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/50R19',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '348', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/50R18',    brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 245/50R18',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/50R18',   brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '298', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
