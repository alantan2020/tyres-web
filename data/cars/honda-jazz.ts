import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'Jazz',
  makeSlug: 'honda',
  modelSlug: 'jazz',
  bgWord: 'JAZZ',

  seo: {
    title: 'Honda Jazz Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda Jazz uses 175/65R15 or 185/55R16 tyres. ⚠️ Bolt pattern 4×100 — different from most Hondas. From $78 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Honda Jazz uses 175/65R15 or 185/55R16 tyres. Bolt pattern 4×100. From $78 installed in Singapore. WhatsApp for a quote.',
    twitterDescription: 'Honda Jazz uses 175/65R15 or 185/55R16 tyres. Bolt pattern 4×100. From $78 installed in Singapore.',
    priceFrom: 78,
    oeSize: '175/65R15',
  },

  defaultGen: 'gk_fl',

  generations: [
    {
      key: 'gk_fl',
      label: 'Gen 3 GK FL',
      years: '2017–2022',
      heroChips: [
        { label: '1.5 (standard)', value: '175/65R15' },
        { label: '1.5 RS', value: '185/55R16' },
        { label: 'From installed', value: '$78', green: true },
      ],
      variants: [
        { name: '1.5 i-VTEC (standard)', sizes: [
          { tag: 'OE',  size: '175/65R15' },
          { tag: 'Alt', size: '185/60R15', note: '宽一点，操控更好' },
          { tag: 'Alt', size: '185/55R16', note: '16" 升级' },
        ]},
        { name: '1.5 RS', sizes: [
          { tag: 'OE',  size: '185/55R16' },
          { tag: 'Alt', size: '205/45R17', note: '17" 运动升级' },
        ]},
      ],
    },
    {
      key: 'gk',
      label: 'Gen 3 GK',
      years: '2015–2017',
      heroChips: [
        { label: '1.5 (standard)', value: '175/65R15' },
        { label: '1.5 RS', value: '185/55R16' },
        { label: 'From installed', value: '$78', green: true },
      ],
      variants: [
        { name: '1.5 i-VTEC (standard)', sizes: [
          { tag: 'OE',  size: '175/65R15' },
          { tag: 'Alt', size: '185/60R15', note: '宽一点，操控更好' },
        ]},
        { name: '1.5 i-VTEC (RS)', sizes: [
          { tag: 'OE',  size: '185/55R16' },
        ]},
        { name: '1.3 base', sizes: [
          { tag: 'OE',  size: '175/70R14' },
          { tag: 'Alt', size: '175/65R15', note: '升 15" 更常见' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2015–2022 · GK / GK FL · RS 16"',       width: '6J',   diameter: '16"', offset: 'ET53', boltPattern: '4×100' },
    { label: '2015–2022 · GK / GK FL · standard 15"', width: '5.5J', diameter: '15"', offset: 'ET45', boltPattern: '4×100' },
    { label: '2015–2017 · GK · 1.3 base 14"',         width: '5.5J', diameter: '14"', offset: 'ET45', boltPattern: '4×100' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    warning: '⚠️ Jazz uses 4×100 bolt pattern — different from CR-V, HR-V, Accord (all 5×114.3). Confirm before buying aftermarket rims.',
  },

  priceTabs: [
    {
      size: '175/65R15',
      tabLabel: '175/65R15 · GK / GK FL 标准版',
      budget: {
        name: 'Giti GitiSynergy E1',
        desc: '省油 · 耐磨 · 适合新加坡日常通勤',
        price: 78,
        also: 'Also: Triangle TR928, MatraX Pragmatica',
        waText: 'Honda Jazz 175%2F65R15 budget tyre quote (Giti or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP300',
        desc: '省油 · 湿地 A · 最受 Jazz 车主好评',
        price: 108,
        also: 'Also: Continental EcoContact 6, Dunlop EnaSave EC300',
        waText: 'Honda Jazz 175%2F65R15 mid-range tyre quote (Bridgestone Ecopia or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Energy XM2+',
        desc: '最耐磨 · 超低滚阻 · 适合长途省油驾驶',
        price: 132,
        also: 'Also: Michelin Primacy 4, Yokohama BluEarth AE01',
        waText: 'Honda Jazz 175%2F65R15 premium tyre quote (Michelin Energy XM2%2B)',
      },
      setEstimate: 'Budget $312–$368 · Mid-range $432–$492 · Premium $528–$600',
    },
    {
      size: '185/55R16',
      tabLabel: '185/55R16 · RS 版 / 升级选项',
      budget: {
        name: 'Giti GitiControl P10',
        desc: '运动操控 · 日常全天候',
        price: 92,
        also: 'Also: Triangle Sportex TH201, Nexen N\'Blue HD Plus',
        waText: 'Honda Jazz 185%2F55R16 budget tyre quote (Giti or similar)',
      },
      mid: {
        name: 'Hankook Ventus Prime 4',
        desc: '静音 · 湿地 A · 适合 RS 版定位',
        price: 125,
        also: 'Also: Dunlop SP Sport Maxx 050, Continental PremiumContact 6',
        waText: 'Honda Jazz 185%2F55R16 mid-range tyre quote (Hankook or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4',
        desc: '最佳湿地制动 · Wet grip: A · 5年保用',
        price: 158,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance',
        waText: 'Honda Jazz 185%2F55R16 premium tyre quote (Michelin Primacy 4)',
      },
      setEstimate: 'Budget $368–$420 · Mid-range $500–$568 · Premium $632–$720',
    },
  ],

  radarSize: '175/65R15',
  radarSource: 'Giti (10 reviews) · Bridgestone (22 reviews) · Michelin (28 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [62, 72, 76, 66, 82, 85], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Giti\nGitiSynergy E1',
      stats: [{ k: 'Wet', v: '62', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Fuel', v: '82', hi: true }, { k: 'Value', v: '85', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [77, 80, 83, 78, 86, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nEcopia EP300',
      stats: [{ k: 'Wet', v: '77', hi: false }, { k: 'Dry', v: '80', hi: true }, { k: 'Wear', v: '83', hi: true }, { k: 'Fuel', v: '86', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.4',
      scores: [83, 84, 88, 80, 88, 74], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nEnergy XM2+',
      stats: [{ k: 'Wet', v: '83', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'Wear', v: '88', hi: true }, { k: 'Fuel', v: '88', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'GK / GK FL 标准版 (2015–2022) 车主',
      color: 'red',
      genKey: 'gk_fl',
      body: 'OE 尺码 <strong>175/65R15</strong> 是价格最实惠的主流轿车胎尺码之一，四条含安装只需约 $312–$528。推荐 Bridgestone Ecopia EP300 ($108/条)——超低滚阻、湿地 A 级，Jazz 省油本性 + 这条胎相得益彰，是最多 GK 车主的首选。<br>⚠️ Jazz 用 <strong>4×100</strong> 孔距，购买轮辋时不要误选 4×114.3。',
    },
    {
      title: 'GK / GK FL RS 版车主',
      color: 'blue',
      genKey: 'gk_fl',
      body: 'RS 原配 <strong>185/55R16</strong>，比标准版更宽、更扁，操控感更好。这个尺码在新加坡货源不如 175/65R15 充足，建议提前问货。Hankook Ventus Prime 4 ($125/条) 是 RS 定位最匹配的中端选择——静音 + 湿地 A。想进一步升 17"，可配 <strong>205/45R17</strong>（需换轮辋）。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda Jazz use in Singapore?',
      a: 'Gen 3 GK / GK FL (2015–2022): standard 1.5 uses 175/65R15 (15" OE) or 185/60R15 (alt); RS uses 185/55R16 (16" OE). The 1.3 base (older GK) uses 175/70R14. Note: Honda discontinued the Jazz after the GK generation — the City Hatchback is its successor.',
    },
    {
      q: 'What is the bolt pattern of the Honda Jazz?',
      a: 'The Honda Jazz uses a 4×100 bolt pattern — NOT the 5×114.3 used by CR-V, HR-V, and Accord. This is a critical difference when buying aftermarket rims. Centre bore is 56.1mm, lug nut thread is M12×1.5, tightening torque is 108 Nm.',
    },
    {
      q: 'How much does it cost to change tyres on a Honda Jazz in Singapore?',
      a: 'For 175/65R15 (standard): budget from $78/tyre; mid-range $108 (Bridgestone Ecopia); premium $132 (Michelin Energy XM2+). Full set of 4: budget ~$312, mid ~$432, premium ~$528. The Jazz has one of the cheapest tyre-change costs among small cars in Singapore.',
    },
    {
      q: 'Can I upgrade the Honda Jazz to 185/55R16?',
      a: 'Yes, if you have or purchase 16" rims. The 185/55R16 gives better cornering feel compared to the 175/65R15. However, the RS already comes with 16" rims — standard-trim Jazz owners need to buy 16" wheels separately. The overall tyre diameter difference is less than 1%.',
    },
    {
      q: 'Is the Honda Jazz discontinued in Singapore?',
      a: 'Yes. Honda discontinued the Jazz (GK generation) globally. The last Singapore units were sold around 2021–2022. The successor is the Honda City Hatchback (GM6), which uses different tyre sizes. If you own a GK Jazz, your tyres (175/65R15 or 185/55R16) remain widely available in Singapore.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Giti GitiSynergy E1 175/65R15',        brand: { '@type': 'Brand', name: 'Giti' },        offers: { '@type': 'Offer', price: '78',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 175/65R15',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Energy XM2+ 175/65R15',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '132', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Giti GitiControl P10 185/55R16',       brand: { '@type': 'Brand', name: 'Giti' },        offers: { '@type': 'Offer', price: '92',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Hankook Ventus Prime 4 185/55R16',     brand: { '@type': 'Brand', name: 'Hankook' },    offers: { '@type': 'Offer', price: '125', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4 185/55R16',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
