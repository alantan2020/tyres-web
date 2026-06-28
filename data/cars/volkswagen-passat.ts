import type { CarData } from './types'

const data: CarData = {
  make: 'Volkswagen',
  model: 'Passat',
  makeSlug: 'volkswagen',
  modelSlug: 'passat',
  bgWord: 'PASSAT',

  seo: {
    title: 'Volkswagen Passat Tyre Size & Best Price Singapore | SGCarPass',
    description: 'VW Passat B8 FL (2019–2024) uses 215/55R17 (standard) or 235/45R18 (R-Line). 5×112, 57.1mm CB. From $78 installed in Singapore.',
    ogDescription: 'VW Passat B8 FL tyre sizes: 215/55R17 standard, 235/45R18 R-Line. 5×112, 57.1mm CB. From $78 installed in Singapore.',
    twitterDescription: 'VW Passat B8 FL uses 215/55R17 (standard) or 235/45R18 (R-Line). 5×112. From $78 installed in Singapore.',
    priceFrom: 78,
    oeSize: '215/55R17',
  },

  defaultGen: 'b8-fl',

  generations: [
    {
      key: 'b8-fl',
      label: 'B8 FL (2019–2024)',
      years: '2019–2024',
      note: 'B8 FL Passat is sold as both sedan and Estate (wagon) in Singapore. Both use identical tyre sizes. Passat GTE PHEV also uses 235/45R18.',
      heroChips: [
        { label: 'Passat / Elegance standard', value: '215/55R17' },
        { label: 'R-Line / GTE 18"',           value: '235/45R18' },
        { label: 'From installed',              value: '$78', green: true },
      ],
      variants: [
        { name: 'Passat Comfortline / Elegance (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '225/50R17', note: '宽 10mm，同外径' },
          { tag: 'Up',  size: '235/45R18', note: '升 18"，需配 7.5J 18" 轮毂' },
        ]},
        { name: 'R-Line / GTE PHEV (18")', sizes: [
          { tag: 'OE',  size: '235/45R18' },
          { tag: 'Alt', size: '245/40R18', note: '宽 10mm 运动感升级' },
        ]},
      ],
    },
    {
      key: 'b8',
      label: 'B8 (2015–2019)',
      years: '2015–2019',
      heroChips: [
        { label: 'Passat Comfortline', value: '215/55R17' },
        { label: 'Highline / R-Line', value: '235/45R18' },
        { label: 'From installed',    value: '$78', green: true },
      ],
      variants: [
        { name: 'Comfortline (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '225/50R17', note: '宽 10mm，同外径' },
        ]},
        { name: 'Highline / R-Line (18")', sizes: [
          { tag: 'OE',  size: '235/45R18' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019–2024 · B8 FL · R-Line / GTE · 18"',  width: '7.5J', diameter: '18"', offset: 'ET51', boltPattern: '5×112' },
    { label: '2019–2024 · B8 FL · Elegance · 17"',       width: '7.0J', diameter: '17"', offset: 'ET54', boltPattern: '5×112' },
    { label: '2015–2019 · B8 · R-Line · 18"',            width: '7.5J', diameter: '18"', offset: 'ET51', boltPattern: '5×112' },
    { label: '2015–2019 · B8 · Comfortline · 17"',       width: '7.0J', diameter: '17"', offset: 'ET54', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '57.1mm',
    stud: 'M14×1.5 bolt',
    torque: '120 Nm',
    notes: 'Passat B8/B8 FL shares 5×112 bolt pattern with BMW, Mercedes, and Audi, but VW centre bore is 57.1mm. BMW/Mercedes rim swapping requires 57.1→66.6mm hub-centric rings. Passat Estate (wagon) uses identical wheel specs as the sedan.',
  },

  priceTabs: [
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · Passat 标准版主力尺码',
      budget: {
        name: 'Nankang NS-20 UHP',
        desc: '17" 行政级轿车胎 · Passat 入门最实惠',
        price: 78,
        also: 'Also: Kumho Ecsta HS51, Hankook Ventus Prime4',
        waText: 'VW Passat 215%2F55R17 budget tyre quote (Nankang or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '静音舒适 + 湿地 A 级 · Passat 行政级首选',
        price: 148,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'VW Passat 215%2F55R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '舒适与操控兼顾 · Passat 最均衡顶级选择',
        price: 198,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'VW Passat 215%2F55R17 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $312–$380 · Mid-range $592–$700 · Premium $792–$920',
    },
    {
      size: '235/45R18',
      tabLabel: '235/45R18 · R-Line / GTE 18"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 行政级运动胎 · Passat R-Line / GTE 预算首选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'VW Passat R-Line 235%2F45R18 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干地操控 + 静音均衡 · R-Line 最受好评',
        price: 198,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'VW Passat R-Line 235%2F45R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'R-Line 最顶级配胎 · 干湿地全面领先',
        price: 268,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'VW Passat R-Line 235%2F45R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $792–$920 · Premium $1,072–$1,240',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Nankang (9 reviews) · Continental (18 reviews) · Michelin (15 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [64, 72, 74, 66, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nankang\nNS-20 UHP',
      stats: [{ k: 'Wet', v: '64', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [84, 88, 88, 82, 84, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [86, 90, 86, 80, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Passat 标准版通勤党（215/55R17）',
      color: 'blue',
      genKey: 'b8-fl',
      body: 'Passat 标准版原配 <strong>215/55R17</strong>，侧壁较高，乘坐舒适，适合长途驾驶和城市通勤。Continental PremiumContact 6（$148/条）是最受好评的行政级轿车选择——静音极佳，湿地 A 级，整套约 $592。Passat 定位舒适行政级，可以考虑比运动取向的 SportContact 6 更偏静音的 Michelin Primacy 4+（$158/条），噪声抑制更突出。',
    },
    {
      title: 'Passat R-Line / GTE PHEV 车主（235/45R18）',
      color: 'red',
      genKey: 'b8-fl',
      body: 'R-Line 和 GTE PHEV 配 <strong>235/45R18</strong>，宽胎提供更好的驾驶反馈。Continental SportContact 6（$198/条）是 R-Line 最受认可的选择，整套约 $792。GTE PHEV 车主注意：建议选低滚阻认证胎（如 Michelin Primacy 4+ 或 Continental EcoContact 6），可小幅提升纯电续航。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the VW Passat use in Singapore?',
      a: 'VW Passat B8 FL (2019–2024): Comfortline/Elegance uses 215/55R17; R-Line and GTE PHEV use 235/45R18. B8 (2015–2019): same sizes. Both sedan and Estate (wagon) variants use identical tyre sizes.',
    },
    {
      q: 'What is the bolt pattern of the VW Passat?',
      a: 'VW Passat B8 and B8 FL use 5×112 bolt pattern with 57.1mm centre bore. Bolt thread M14×1.5, torque 120 Nm.',
    },
    {
      q: 'How much does it cost to replace VW Passat tyres in Singapore?',
      a: 'For 215/55R17 (most common): budget from $78 per tyre installed; mid-range $148–$168; premium $198–$225. Full set of 4: approximately $312–$920. For R-Line 235/45R18: budget from $108; mid $198–$225; premium $268–$308.',
    },
    {
      q: 'Are VW Passat and VW Golf tyres interchangeable?',
      a: 'Not directly — Passat (215/55R17) and Golf base (205/55R16) use different sizes. However, both share the same 5×112 bolt pattern and 57.1mm centre bore, so rims of the same size and offset are interchangeable. The Passat R-Line (235/45R18) and Golf GTI (225/40R18) are also different sizes.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nankang NS-20 UHP 215/55R17',           brand: { '@type': 'Brand', name: 'Nankang' },     offers: { '@type': 'Offer', price: '78',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 6 215/55R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 215/55R17',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/45R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 235/45R18',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/45R18',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
