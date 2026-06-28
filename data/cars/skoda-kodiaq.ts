import type { CarData } from './types'

const data: CarData = {
  make: 'Skoda',
  model: 'Kodiaq',
  makeSlug: 'skoda',
  modelSlug: 'kodiaq',
  bgWord: 'KODIAQ',

  seo: {
    title: 'Skoda Kodiaq Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Skoda Kodiaq NS (2024+) and NS7 (2017–2023) uses 235/55R17 (Ambition), 235/50R18 or 235/45R19 (Sportline/RS). 5×112 VW Group, 57.1mm CB, M14×1.5. Large family SUV. From $108 installed.',
    ogDescription: 'Skoda Kodiaq: 235/55R17 (Ambition), 235/50R18 (Style), 235/45R19 (Sportline/RS). 5×112 VW Group. From $108.',
    twitterDescription: 'Skoda Kodiaq uses 235/55R17, 235/50R18, or 235/45R19. 5×112 VW Group bolt. From $108.',
    priceFrom: 108,
    oeSize: '235/50R18',
  },

  defaultGen: 'ns7',

  generations: [
    {
      key: 'ns',
      label: 'NS 2nd Gen (2024–2026)',
      years: '2024–2026',
      note: 'New Kodiaq NS 2nd gen. Ambition uses 235/55R17; Style uses 235/50R18; Sportline uses 235/45R19. 7-seat option. 5×112 VW Group.',
      heroChips: [
        { label: 'Ambition OE',    value: '235/55R17' },
        { label: 'Style OE',       value: '235/50R18' },
        { label: 'Sportline OE',   value: '235/45R19' },
      ],
      variants: [
        { name: 'Kodiaq Ambition (17")', sizes: [
          { tag: 'OE',  size: '235/55R17' },
        ]},
        { name: 'Kodiaq Style (18")', sizes: [
          { tag: 'OE',  size: '235/50R18' },
          { tag: 'Alt', size: '245/45R18', note: '稍宽，保持 18" 外径' },
        ]},
        { name: 'Kodiaq Sportline (19")', sizes: [
          { tag: 'OE',  size: '235/45R19' },
          { tag: 'Alt', size: '245/40R19', note: '稍宽，运动感更强' },
        ]},
      ],
    },
    {
      key: 'ns7',
      label: 'NS7 1st Gen (2017–2023)',
      years: '2017–2023',
      note: 'Previous Kodiaq NS7 1st gen. Ambition uses 235/55R17; Style uses 235/50R18; Sportline/RS uses 235/45R20. Same 5×112 VW Group bolt pattern.',
      heroChips: [
        { label: 'NS7 Ambition OE',  value: '235/55R17' },
        { label: 'NS7 Style OE',     value: '235/50R18' },
        { label: 'NS7 RS OE',        value: '235/45R20' },
      ],
      variants: [
        { name: 'NS7 Ambition (17")', sizes: [{ tag: 'OE', size: '235/55R17' }] },
        { name: 'NS7 Style (18")', sizes: [{ tag: 'OE', size: '235/50R18' }] },
        { name: 'NS7 Sportline/RS (20")', sizes: [{ tag: 'OE', size: '235/45R20' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'NS/NS7 · Ambition · 17"',       width: '7.0J', diameter: '17"', offset: 'ET49', boltPattern: '5×112' },
    { label: 'NS/NS7 · Style · 18"',           width: '7.5J', diameter: '18"', offset: 'ET49', boltPattern: '5×112' },
    { label: 'NS Sportline / NS7 RS · 19/20"', width: '8.0J', diameter: '19"', offset: 'ET49', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '57.1mm',
    stud: 'M14×1.5 bolt',
    torque: '120 Nm',
    notes: 'Skoda Kodiaq uses 5×112 bolt pattern, 57.1mm centre bore — VW Group standard. Compatible with VW Tiguan/Touareg, Audi Q3/Q5 wheels of matching offset. M14×1.5 bolts, torque 120 Nm.',
  },

  priceTabs: [
    {
      size: '235/50R18',
      tabLabel: '235/50R18 · Kodiaq Style 18"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" SUV 胎 · Kodiaq Style 预算首选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang Cross Sport SP-9',
        waText: 'Skoda Kodiaq 235%2F50R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '18" 干湿均衡旗舰 · Kodiaq 最受欢迎换胎',
        price: 208,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Skoda Kodiaq 235%2F50R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '18" 静音豪华 · Kodiaq 旗舰换胎方案',
        price: 258,
        also: 'Also: Continental PremiumContact 7, Bridgestone Turanza 6',
        waText: 'Skoda Kodiaq 235%2F50R18 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $472–$600 · Mid-range $832–$1,000 · Premium $1,032–$1,240',
    },
    {
      size: '235/55R17',
      tabLabel: '235/55R17 · Kodiaq Ambition 17"',
      budget: {
        name: 'Hankook Kinergy 4S2',
        desc: '17" SUV 节能胎 · Kodiaq Ambition 预算选',
        price: 108,
        also: 'Also: Kumho Solus 4S, Nexen N\'Fera SU1',
        waText: 'Skoda Kodiaq Ambition 235%2F55R17 budget tyre quote (Hankook Kinergy 4S2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '17" 静音舒适 · Kodiaq Ambition 家用首选',
        price: 188,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza T005',
        waText: 'Skoda Kodiaq Ambition 235%2F55R17 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 7',
        desc: '17" 旗舰静音 · Kodiaq Ambition 最佳体验',
        price: 238,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza 6',
        waText: 'Skoda Kodiaq Ambition 235%2F55R17 premium tyre quote (Continental PremiumContact 7)',
      },
      setEstimate: 'Budget $432–$560 · Mid-range $752–$960 · Premium $952–$1,200',
    },
  ],

  radarSize: '235/50R18',
  radarSource: 'Continental (11 reviews) · Michelin (9 reviews) · Hankook (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [72, 74, 78, 72, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus Prime4',
      stats: [{ k: 'Wet', v: '72', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.8',
      scores: [90, 90, 86, 80, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [88, 86, 92, 78, 84, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '92', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Kodiaq Style（235/50R18）— VW 集团大型 SUV，换胎选大众偏好品牌',
      color: 'blue',
      genKey: 'ns7',
      body: 'Skoda Kodiaq 是欧洲市场 VW Tiguan 的大型版本，5×112 VW Group 螺孔拥有丰富的轮圈 aftermarket 选择。轮胎方面，<strong>Continental PremiumContact 6（$208/条）</strong>是 Kodiaq 最受推荐的换胎——Continental 是 VW 集团首选 OE 供应商，湿地制动和干地抓地力顶级，整套约 $832。Michelin Primacy 4+ 更静，适合注重 NVH 的家用车主（$258/条，整套约 $1,032）。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Skoda Kodiaq use in Singapore?',
      a: 'Skoda Kodiaq NS (2024+): Ambition 235/55R17; Style 235/50R18; Sportline 235/45R19. NS7 (2017–2023): Ambition 235/55R17; Style 235/50R18; RS 235/45R20. 5×112 bolt pattern (VW Group), 57.1mm centre bore.',
    },
    {
      q: 'How much does it cost to replace Skoda Kodiaq tyres in Singapore?',
      a: 'For Style 235/50R18: budget from $118/tyre; mid-range (Continental PremiumContact 6) $208; premium $258. Full set $472–$1,032. For Ambition 235/55R17: from $108 budget; mid $188; premium $238.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus Prime4 235/50R18',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 6 235/50R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 235/50R18',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
