import type { CarData } from './types'

const data: CarData = {
  make: 'BMW',
  model: '7 Series',
  makeSlug: 'bmw',
  modelSlug: '7-series',
  bgWord: 'BMW7',

  seo: {
    title: 'BMW 7 Series Tyre Size & Best Price Singapore | SGCarPass',
    description: 'BMW 7 Series G70 (2022+) uses 245/50R19 (base) or 275/35R21 (M Sport). G11/G12 (2016–2022) uses 245/50R18 or 275/35R20. 5×112, 66.6mm CB. From $138 installed.',
    ogDescription: 'BMW 7 Series G70: 245/50R19 (740i), 245/45R20 (750e xDrive), 275/35R21 (M760e). G11/G12: 245/50R18, 275/35R20. 5×112, 66.6mm CB. From $138.',
    twitterDescription: 'BMW 7 Series G70 uses 245/50R19 (base) or 275/35R21 (M760e). 5×112 bolt. From $138 installed.',
    priceFrom: 138,
    oeSize: '245/50R19',
  },

  defaultGen: 'g70',

  generations: [
    {
      key: 'g70',
      label: 'G70 8th Gen (2022–2026)',
      years: '2022–2026',
      note: 'G70 is available as 740i (MHEV), 750e xDrive (PHEV), and M760e xDrive. PHEV variants are heavier (~2,400 kg) and must use XL-rated tyres.',
      heroChips: [
        { label: '740i OE',      value: '245/50R19' },
        { label: '750e OE',      value: '245/45R20' },
        { label: 'M760e OE',     value: '275/35R21' },
        { label: 'From installed', value: '$138', green: true },
      ],
      variants: [
        { name: '740i (19")', sizes: [
          { tag: 'OE',  size: '245/50R19' },
          { tag: 'Alt', size: '245/45R20', note: '升 20"，750e 同款' },
        ]},
        { name: '750e xDrive PHEV (20")', sizes: [
          { tag: 'OE',  size: '245/45R20' },
          { tag: 'Alt', size: '245/40R21', note: '升 21"，XL 等级必须' },
        ]},
        { name: 'M760e xDrive (21")', sizes: [
          { tag: 'OE',  size: '275/35R21' },
        ]},
      ],
    },
    {
      key: 'g11',
      label: 'G11/G12 7th Gen (2016–2022)',
      years: '2016–2022',
      heroChips: [
        { label: '740i base OE',   value: '245/50R18' },
        { label: '750i / 745e OE', value: '275/35R20' },
        { label: 'M760Li OE',      value: '275/30R21' },
        { label: 'From installed',  value: '$128', green: true },
      ],
      variants: [
        { name: '730i / 740i standard (18")', sizes: [
          { tag: 'OE',  size: '245/50R18' },
          { tag: 'Alt', size: '275/35R20', note: '升宽胎' },
        ]},
        { name: '740i M Sport / 745e (20")', sizes: [
          { tag: 'OE',  size: '245/45R20' },
          { tag: 'OE',  size: '275/35R20', note: 'staggered 宽胎' },
        ]},
        { name: 'M760Li xDrive (21")', sizes: [
          { tag: 'OE',  size: '245/40R21' },
          { tag: 'OE',  size: '275/30R21', note: 'staggered' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · G70 · M760e · 21"',     width: '9.5J',  diameter: '21"', offset: 'ET26', boltPattern: '5×112' },
    { label: '2022+ · G70 · 750e · 20"',      width: '8.5J',  diameter: '20"', offset: 'ET26', boltPattern: '5×112' },
    { label: '2022+ · G70 · 740i · 19"',      width: '8.0J',  diameter: '19"', offset: 'ET26', boltPattern: '5×112' },
    { label: '2016–2022 · G11 · M760Li · 21"', width: '9.5J', diameter: '21"', offset: 'ET22', boltPattern: '5×112' },
    { label: '2016–2022 · G11 · standard · 18"', width: '8.0J', diameter: '18"', offset: 'ET30', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.25 bolt',
    torque: '120 Nm',
    notes: 'BMW 7 Series uses BOLTS (not nuts), M14×1.25 thread, 5×112 bolt pattern, 66.6mm centre bore — same as all modern BMW models. 7 Series G70 PHEV (750e) weighs ~2,450 kg; run-flat tyres (RSC) or XL-rated regular tyres are mandatory. G70 is one of the heaviest passenger sedans in Singapore.',
  },

  priceTabs: [
    {
      size: '245/50R19',
      tabLabel: '245/50R19 · G70 740i 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" 豪华轿车运动胎 · 7 Series 预算首选',
        price: 138,
        also: 'Also: Kumho Ecsta PS91, Bridgestone Potenza Sport',
        waText: 'BMW 7 Series G70 245%2F50R19 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" 行政轿车综合最佳 · 静音干湿地均衡 · 7 Series 首选',
        price: 238,
        also: 'Also: Michelin Pilot Sport 4S, Pirelli P-Zero',
        waText: 'BMW 7 Series G70 245%2F50R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '顶级豪华轿车胎 · 干地极限最高 · BMW OE 认证',
        price: 338,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'BMW 7 Series G70 245%2F50R19 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $952–$1,120 · Premium $1,352–$1,560',
    },
    {
      size: '245/50R18',
      tabLabel: '245/50R18 · G11 730i / 740i 尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 豪华轿车胎 · G11 基础版预算首选',
        price: 128,
        also: 'Also: Nankang AS-2+, Kumho Ecsta PS91',
        waText: 'BMW 7 Series G11 245%2F50R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '18" 行政舒适静音 · G11 日常通勤最佳',
        price: 208,
        also: 'Also: Continental PremiumContact 7, Michelin Primacy 4',
        waText: 'BMW 7 Series G11 245%2F50R18 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '18" 豪华轿车顶级运动胎 · G11 M Sport 推荐',
        price: 288,
        also: 'Also: Continental SportContact 6, Pirelli P-Zero PZ4',
        waText: 'BMW 7 Series G11 245%2F50R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $512–$640 · Mid-range $832–$1,000 · Premium $1,152–$1,360',
    },
  ],

  radarSize: '245/50R19',
  radarSource: 'Continental (14 reviews) · Michelin (12 reviews) · Bridgestone (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [70, 76, 74, 74, 72, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
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
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 84, 86, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '84', hi: false }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'G70 7 Series（745/750e）— 超重行政轿车，XL 等级必须',
      color: 'blue',
      genKey: 'g70',
      body: 'G70 7 Series 整备重 2,200–2,500 kg（750e PHEV 超过 2,400 kg），是新加坡最重的豪华轿车之一。<strong>必须使用 XL 等级轮胎（Load Index 102+ for 245 width）</strong>。Continental SportContact 6（$238/条，245/50R19）是干湿地综合最佳的 19" 豪华胎，静音性媲美 OE，整套约 $952。Michelin Pilot Sport 4S（$338/条）用于追求极致驾驶感，是 M760e 车主的首选，BMW OE 认证型号可直接替换原配。<strong>注意：</strong>G70 全系 run-flat 标配，换非 RFT 前确认无备胎。',
    },
    {
      title: 'G11/G12 7 Series（2016–2022）— 二手市场主流，配件充足',
      color: 'red',
      genKey: 'g11',
      body: 'G11/G12 在新加坡二手市场保有量大，18" 标准尺码（245/50R18）货源充足，换胎成本相对合理。Bridgestone Turanza T005（$208/条）是静音舒适首选，配合 G11 豪华定位，整套约 $832。G11 M Sport 20" staggered 配（245/45R20 + 275/35R20），因前后不同尺码无法轮换，后胎磨损更快，建议每 15,000 km 检查一次后胎厚度。后胎独立定价，不必等整套同时换。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the BMW 7 Series use in Singapore?',
      a: 'BMW 7 Series G70 (2022+): 740i uses 245/50R19; 750e xDrive PHEV uses 245/45R20; M760e uses 275/35R21. G11/G12 (2016–2022): 730i/740i base uses 245/50R18; 740i M Sport / 745e uses 245/45R20 or 275/35R20 (staggered); M760Li uses 245/40R21 or 275/30R21. All use 5×112, 66.6mm CB.',
    },
    {
      q: 'What is the bolt pattern of the BMW 7 Series?',
      a: 'All BMW 7 Series (G11, G12, G70) use 5×112 bolt pattern, 66.6mm centre bore. Uses M14×1.25 lug BOLTS (not nuts), torque 120 Nm. Same as BMW 3 Series, 5 Series, and also Mercedes-Benz E/S-Class models.',
    },
    {
      q: 'How much does it cost to replace BMW 7 Series tyres in Singapore?',
      a: 'For 245/50R19 (G70 740i): budget from $138/tyre; mid-range $238; premium $338. Full set: $552–$1,352. For 245/50R18 (G11 base): from $128/tyre; premium $288. M760e 21" and M760Li 21" sizes are rare in Singapore — premium brands only, expect $400–$600 per tyre.',
    },
    {
      q: 'Does the BMW 7 Series use run-flat tyres?',
      a: 'Yes, the BMW 7 Series is equipped with run-flat tyres (RSC — Run-flat System Component) as standard. You can replace with non-run-flat regular tyres, but you must carry a tyre inflation/repair kit since there is no spare wheel. Many owners switch to regular tyres for improved ride comfort, particularly the G70 which can feel stiff on Singapore roads with OE run-flat tyres.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/50R19',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 245/50R19', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/50R19',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '338', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/50R18',    brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 245/50R18',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/50R18',   brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '288', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
