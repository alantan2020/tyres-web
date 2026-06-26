import type { CarData } from './types'

const data: CarData = {
  make: 'Mazda',
  model: 'CX-8',
  makeSlug: 'mazda',
  modelSlug: 'cx-8',
  bgWord: 'CX8',

  seo: {
    title: 'Mazda CX-8 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mazda CX-8 KG uses 225/65R17 (base) or 225/55R19 (high). 5×114.3 bolt. From $128 installed. Same tyre sizes as Mazda CX-5. WhatsApp for a quote.',
    ogDescription: 'Mazda CX-8 KG: 225/65R17 (base) or 225/55R19 (high). 5×114.3, CB 67.1mm. From $128 installed in Singapore.',
    twitterDescription: 'Mazda CX-8 uses 225/65R17 (base) or 225/55R19 (high). Same sizes as CX-5. From $128.',
    priceFrom: 128,
    oeSize: '225/65R17',
  },

  defaultGen: 'kg',

  generations: [
    {
      key: 'kg',
      label: 'KG (1st Gen)',
      years: '2017–2026',
      heroChips: [
        { label: '2.5 base OE',    value: '225/65R17' },
        { label: '2.5T high OE',   value: '225/55R19' },
        { label: 'From installed', value: '$128', green: true },
      ],
      variants: [
        { name: '2.5 SkyActiv-G / 2.2D (base/mid, 6–7 seat)', sizes: [
          { tag: 'OE',  size: '225/65R17', note: '标配，与 CX-5 相同尺码' },
          { tag: 'Alt', size: '235/60R17', note: '稍宽同直径' },
          { tag: 'Alt', size: '225/60R18', note: '18" 升级' },
        ]},
        { name: '2.5T SkyActiv-G Turbo (high trim)', sizes: [
          { tag: 'OE',  size: '225/55R19', note: '19" 高配标配，与 CX-5 Turbo 相同' },
          { tag: 'Alt', size: '235/50R19', note: '宽胎升级' },
          { tag: 'Alt', size: '225/65R17', note: '降 17"，降成本' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2017–2026 · KG · high 19"',  width: '7.5J', diameter: '19"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2017–2026 · KG · base 17"',  width: '7J',   diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Mazda CX-8 uses the same tyre sizes (225/65R17 or 225/55R19) and the same bolt pattern (5×114.3, CB 67.1mm) as the Mazda CX-5. Wheels from CX-5 and CX-8 are interchangeable. The CX-8 is Mazda\'s 6–7 seat 3-row SUV, offered only in Asia-Pacific markets.',
  },

  priceTabs: [
    {
      size: '225/65R17',
      tabLabel: '225/65R17 · KG 入门 / 中配（同 CX-5）',
      budget: {
        name: 'Blackhawk Street-H HH11',
        desc: 'SUV 全天候 · 与 CX-5 通用 · 货源充足',
        price: 128,
        also: 'Also: Nexen NFERA RU1, Triangle TR259 SUV',
        waText: 'Mazda CX-8 225%2F65R17 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Yokohama Geolandar X-CV G057',
        desc: 'SUV 专用 · 静音 · 3 排 SUV 最佳载重性',
        price: 154,
        also: 'Also: Bridgestone Alenza 001, Dunlop GrandTrek',
        waText: 'Mazda CX-8 225%2F65R17 mid-range tyre quote (Yokohama G057 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地 · 7 人 SUV 最安全选择',
        price: 218,
        also: 'Also: Continental CrossContact LX2, Bridgestone Dueler H/L',
        waText: 'Mazda CX-8 225%2F65R17 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $512–$600 · Mid-range $616–$720 · Premium $872–$1,000',
    },
    {
      size: '225/55R19',
      tabLabel: '225/55R19 · KG 高配 Turbo（同 CX-5 Turbo）',
      budget: {
        name: 'Nexen NFERA RU1',
        desc: 'SUV 运动向 · 19" 性价比',
        price: 158,
        also: 'Also: Grenlander L-Sport, Kumho Ecsta',
        waText: 'Mazda CX-8 225%2F55R19 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Yokohama BluEarth-XT AE61',
        desc: '低滚阻 · 静音 · 7 人 SUV 19" 首选',
        price: 205,
        also: 'Also: Bridgestone Alenza 001, Hankook Ventus S1 EVO 3',
        waText: 'Mazda CX-8 225%2F55R19 mid-range tyre quote (Yokohama AE61 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '19" 最短湿地制动 · 满载 7 人的安全保障',
        price: 258,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde',
        waText: 'Mazda CX-8 225%2F55R19 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $632–$740 · Mid-range $820–$950 · Premium $1,032–$1,180',
    },
  ],

  radarSize: '225/65R17',
  radarSource: 'Blackhawk (16 reviews) · Yokohama (28 reviews) · Michelin (30 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.4',
      scores: [70, 74, 76, 70, 82, 74], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nStreet-H HH11',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [77, 82, 84, 80, 74, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Yokohama\nGeolandar X-CV G057',
      stats: [{ k: 'Wet', v: '77', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [84, 86, 84, 84, 72, 82], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy SUV+',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Fuel', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'CX-8 · 225/65R17 换胎',
      color: 'red',
      genKey: 'kg',
      body: 'CX-8 的 225/65R17 与 CX-5 完全通用，货源充足。推荐 Yokohama Geolandar X-CV G057（$154/条）——SUV 专用，侧壁强，适合 7 人满载，四条约 $616。CX-8 比 CX-5 更重，更建议选 SUV 专用胎而非轿车胎。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mazda CX-8 use in Singapore?',
      a: 'Mazda CX-8 KG: OE 225/65R17 (base/mid) or 225/55R19 (high/Turbo trim). These are the same tyre sizes as the Mazda CX-5 KF.',
    },
    {
      q: 'Are Mazda CX-8 and CX-5 tyres interchangeable?',
      a: 'Yes — both CX-8 and CX-5 use 225/65R17 (base) or 225/55R19 (high), and share the same 5×114.3 CB 67.1mm bolt pattern. Wheels and tyres are interchangeable between the two models (verify rim width and offset match).',
    },
    {
      q: 'What is the bolt pattern of the Mazda CX-8?',
      a: 'Mazda CX-8 uses 5×114.3 with 67.1mm centre bore, M12×1.5, 108 Nm — same as all Mazda models.',
    },
    {
      q: 'How much does it cost to change Mazda CX-8 tyres in Singapore?',
      a: 'For 225/65R17 (base/mid): budget $128 (Blackhawk); mid $154 (Yokohama G057, popular); premium $218 (Michelin). Full set ~$512–$872. For 225/55R19 (high): $158–$258/tyre.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Street-H HH11 225/65R17',    brand: { '@type': 'Brand', name: 'Blackhawk' }, offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Yokohama Geolandar X-CV G057 225/65R17', brand: { '@type': 'Brand', name: 'Yokohama' }, offers: { '@type': 'Offer', price: '154', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 225/65R17',        brand: { '@type': 'Brand', name: 'Michelin' }, offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
