import type { CarData } from './types'

const data: CarData = {
  make: 'Land Rover',
  model: 'Range Rover Evoque',
  makeSlug: 'land-rover',
  modelSlug: 'range-rover-evoque',
  bgWord: 'EVOQUE',

  seo: {
    title: 'Range Rover Evoque Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Range Rover Evoque L551 2nd Gen (2019+) uses 235/55R18 (base) or 235/50R20 (R-Dynamic). 5×108 bolt. From $108 installed in Singapore.',
    ogDescription: 'Range Rover Evoque 2nd Gen (L551): 235/55R18 (S/SE), 235/50R19, 245/45R20 (R-Dynamic). 5×108, 63.4mm CB. From $108 installed.',
    twitterDescription: 'Range Rover Evoque uses 235/55R18 (base) or 245/45R20 (R-Dynamic). 5×108. From $108 installed.',
    priceFrom: 108,
    oeSize: '235/50R19',
  },

  defaultGen: 'l551',

  generations: [
    {
      key: 'l551',
      label: '2nd Gen L551 (2019–2026)',
      years: '2019–2026',
      heroChips: [
        { label: 'S / SE OE',       value: '235/55R18' },
        { label: 'SE (19") OE',     value: '235/50R19' },
        { label: 'R-Dynamic OE',    value: '245/45R20' },
        { label: 'From installed',  value: '$108', green: true },
      ],
      variants: [
        { name: 'S / SE base (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '235/50R19', note: '升 19"' },
        ]},
        { name: 'SE / First Edition (19")', sizes: [
          { tag: 'OE',  size: '235/50R19' },
          { tag: 'Alt', size: '245/45R20', note: '升 20"，R-Dynamic 尺码' },
        ]},
        { name: 'R-Dynamic S / SE / HSE (20")', sizes: [
          { tag: 'OE',  size: '245/45R20' },
          { tag: 'Alt', size: '235/50R20', note: '稍窄，货源更充足' },
        ]},
      ],
    },
    {
      key: 'l538',
      label: '1st Gen L538 (2011–2018)',
      years: '2011–2018',
      heroChips: [
        { label: 'Pure / SE OE',   value: '235/55R17' },
        { label: 'Dynamic OE',     value: '235/55R18' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: 'Pure / SE (17")', sizes: [
          { tag: 'OE',  size: '235/55R17' },
        ]},
        { name: 'Dynamic / Prestige (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '235/50R19', note: '升 19"' },
        ]},
        { name: 'Dynamic (19")', sizes: [
          { tag: 'OE',  size: '235/50R19' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019+ · L551 · R-Dynamic · 20"', width: '8.0J', diameter: '20"', offset: 'ET53', boltPattern: '5×108' },
    { label: '2019+ · L551 · SE · 19"',        width: '7.5J', diameter: '19"', offset: 'ET53', boltPattern: '5×108' },
    { label: '2019+ · L551 · base · 18"',      width: '7.0J', diameter: '18"', offset: 'ET53', boltPattern: '5×108' },
    { label: '2011–2018 · L538 · 18"',         width: '7.5J', diameter: '18"', offset: 'ET53', boltPattern: '5×108' },
  ],
  rimCommon: {
    centreBore: '63.4mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Range Rover Evoque uses 5×108 — same as Land Rover Discovery Sport, Volvo XC40/XC60/XC90, and Ford Mondeo/S-Max. 63.4mm centre bore. Note: Defender and Range Rover Sport use 5×120 (different). M14×1.5 lug bolts, torque 130 Nm.',
  },

  priceTabs: [
    {
      size: '235/50R19',
      tabLabel: '235/50R19 · SE 19" 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" SUV 运动胎 · Evoque SE 预算首选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'Range Rover Evoque 235%2F50R19 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: 'SUV 路面综合最佳 · 干湿地均衡 · Evoque 首选',
        price: 208,
        also: 'Also: Michelin Pilot Sport 4 SUV, Bridgestone Turanza T005',
        waText: 'Range Rover Evoque 235%2F50R19 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '19" 豪华 SUV 顶级 · 湿地 A 级 · Evoque 城市驾驶最佳',
        price: 268,
        also: 'Also: Pirelli Scorpion Verde All Season, Goodyear Eagle F1 Asymmetric 5 SUV',
        waText: 'Range Rover Evoque 235%2F50R19 premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $832–$960 · Premium $1,072–$1,200',
    },
    {
      size: '235/55R18',
      tabLabel: '235/55R18 · 基础版 18"',
      budget: {
        name: 'Hankook Kinergy 4S2 X',
        desc: '18" 舒适 SUV 胎 · Evoque 基础版预算首选',
        price: 108,
        also: 'Also: Kumho Crugen HP71, Nankang SP-7',
        waText: 'Range Rover Evoque 235%2F55R18 base budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '18" 静音舒适 · Evoque 城市通勤推荐',
        price: 188,
        also: 'Also: Michelin Primacy 4 SUV, Continental CrossContact RX',
        waText: 'Range Rover Evoque 235%2F55R18 base mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+ SUV',
        desc: '静音顶级 · 豪华 SUV 最佳匹配',
        price: 238,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato P7',
        waText: 'Range Rover Evoque 235%2F55R18 base premium tyre quote (Michelin Primacy 4+ SUV)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $952–$1,100',
    },
  ],

  radarSize: '235/50R19',
  radarSource: 'Michelin (12 reviews) · Continental (10 reviews) · Bridgestone (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 74, 78, 70, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '74', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.3',
      scores: [82, 86, 84, 82, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nCrossContact RX',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [86, 88, 88, 84, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPS4 SUV',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Evoque L551（2019+）— 紧凑豪华 SUV 日常换胎',
      color: 'blue',
      genKey: 'l551',
      body: 'Evoque 2nd Gen 在新加坡最常见的是 SE 19"（235/50R19）和 R-Dynamic 20"（245/45R20）配置。Continental CrossContact RX（19" $208/条，20" $228/条）干湿地均衡，静音性能接近原配水平，整套约 $832–$912。Michelin Pilot Sport 4 SUV（$268/条）是追求操控和豪华感的首选，湿地制动 A 级，与 Evoque 城市定位完美匹配。<strong>注意：</strong>Evoque 的 5×108 螺栓孔与 Defender / Range Rover Sport（5×120）不同，两者轮圈不兼容。',
    },
    {
      title: '5×108 螺栓孔说明 — 与 Defender 不同',
      color: 'red',
      genKey: 'l551',
      body: 'Range Rover Evoque 使用 <strong>5×108</strong> 螺栓孔，与 Land Rover Discovery Sport 和 Volvo XC60/XC90 相同，<strong>但与 Land Rover Defender / Range Rover Sport（5×120）不同</strong>。这是同品牌内最常见的混淆点——同为 Land Rover，Evoque 和 Defender 的轮圈无法互换。Evoque L551 中心孔 63.4mm，与 Volvo 相同，但 offset 差异大，换装 Volvo 轮圈前需专业核对。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Range Rover Evoque use in Singapore?',
      a: 'Range Rover Evoque 2nd Gen L551 (2019+): S/SE base uses 235/55R18; SE mid uses 235/50R19; R-Dynamic SE/HSE uses 245/45R20. 1st Gen L538 (2011–2018): base uses 235/55R17; Dynamic uses 235/55R18 or 235/50R19. All Evoque use 5×108 bolt pattern, 63.4mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Range Rover Evoque?',
      a: 'Range Rover Evoque (1st and 2nd Gen) uses 5×108 bolt pattern, 63.4mm centre bore. This is the same as Discovery Sport, and Volvo XC40/XC60/XC90. Important: NOT the same as Defender or Range Rover Sport (both use 5×120). M14×1.5 lug bolts, torque 130 Nm.',
    },
    {
      q: 'How much does it cost to replace Range Rover Evoque tyres in Singapore?',
      a: 'For 235/50R19 (SE trim): budget from $118/tyre; mid-range $208; premium $268. Full set: $472–$1,072. For 235/55R18 (base): from $108/tyre. For 245/45R20 (R-Dynamic): from $128/tyre; premium $288. Evoque weighs approximately 1,900–2,100 kg depending on variant.',
    },
    {
      q: 'Can I use Land Rover Defender rims on a Range Rover Evoque?',
      a: 'No — Defender uses 5×120 bolt pattern while Evoque uses 5×108. These are completely different and rims cannot be interchanged, even with adapters (hub adapters for bolt patterns are not recommended for road use).',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/50R19',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 235/50R19',   brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 235/50R19',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 X 235/55R18',          brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 235/55R18',        brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ SUV 235/55R18',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
