import type { CarData } from './types'

const data: CarData = {
  make: 'Mazda',
  model: 'CX-5',
  makeSlug: 'mazda',
  modelSlug: 'cx-5',
  bgWord: 'CX5',

  seo: {
    title: 'Mazda CX-5 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mazda CX-5 KF uses 225/65R17 (base) or 225/55R19 (higher trims). 5×114.3 bolt. From $128 installed. Compare Michelin vs Yokohama vs Bridgestone. WhatsApp for a quote.',
    ogDescription: 'Mazda CX-5 KF uses 225/65R17 or 225/55R19. 5×114.3, CB 67.1mm. From $128 installed in Singapore.',
    twitterDescription: 'Mazda CX-5 uses 225/65R17 (base) or 225/55R19 (high trims). From $128 installed in Singapore.',
    priceFrom: 128,
    oeSize: '225/65R17',
  },

  defaultGen: 'kf',

  generations: [
    {
      key: 'kf',
      label: 'KF (2nd Gen)',
      years: '2017–2026',
      heroChips: [
        { label: '2.0 / 2.5 base OE',  value: '225/65R17' },
        { label: '2.5T / top OE',       value: '225/55R19' },
        { label: 'From installed',       value: '$128', green: true },
      ],
      variants: [
        { name: '2.0 SkyActiv-G / 2.5 SkyActiv-G (base/mid trim)', sizes: [
          { tag: 'OE',  size: '225/65R17', note: '标配，新加坡最常见' },
          { tag: 'Alt', size: '235/60R17', note: '稍宽同直径' },
          { tag: 'Alt', size: '225/60R18', note: '18" 升级' },
        ]},
        { name: '2.5 SkyActiv-G / 2.5T (higher trim / Turbo)', sizes: [
          { tag: 'OE',  size: '225/55R19', note: '顶配 19" 标配' },
          { tag: 'Alt', size: '235/50R19', note: '宽胎升级' },
          { tag: 'Alt', size: '225/65R17', note: '降回 17"，舒适性更好' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2017–2026 · KF · top 19"',   width: '7.5J', diameter: '19"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2017–2026 · KF · base/mid 17"', width: '7J', diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'All Mazda CX-5 use 5×114.3 bolt with 67.1mm centre bore — same across all Mazda models (CX-3, CX-30, Mazda3, CX-8). Compatible with Hyundai (5×114.3 CB 67.1mm). Note: Toyota Camry/RAV4 also use 5×114.3 but with CB 60.1mm — a hub-centric ring is needed to fit Toyota wheels on Mazda (not recommended).',
  },

  priceTabs: [
    {
      size: '225/65R17',
      tabLabel: '225/65R17 · KF 入门 / 中配标配',
      budget: {
        name: 'Blackhawk Street-H HH11',
        desc: 'SUV 全天候 · 耐磨 · 货源充足',
        price: 128,
        also: 'Also: Nexen NFERA RU1, Triangle TR259 SUV',
        waText: 'Mazda CX-5 225%2F65R17 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Yokohama Geolandar X-CV G057',
        desc: '静音 · SUV 专用 · 最受 CX-5 车主好评',
        price: 154,
        also: 'Also: Bridgestone Alenza 001, Dunlop GrandTrek PT5',
        waText: 'Mazda CX-5 225%2F65R17 mid-range tyre quote (Yokohama G057 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地制动 · 低滚阻 · 5年保用',
        price: 218,
        also: 'Also: Continental CrossContact LX2, Pirelli Scorpion Verde',
        waText: 'Mazda CX-5 225%2F65R17 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $512–$600 · Mid-range $616–$720 · Premium $872–$1,000',
    },
    {
      size: '225/55R19',
      tabLabel: '225/55R19 · KF 高配 / Turbo',
      budget: {
        name: 'Nexen NFERA RU1',
        desc: 'SUV 运动向 · 性价比 19" 首选',
        price: 158,
        also: 'Also: Kumho Ecsta, Grenlander L-Sport',
        waText: 'Mazda CX-5 225%2F55R19 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Yokohama BluEarth-XT AE61',
        desc: 'SUV 舒适 · 低滚阻 · 静音 · Mazda 运动款首选',
        price: 205,
        also: 'Also: Bridgestone Alenza 001, Hankook Ventus S1 EVO 3',
        waText: 'Mazda CX-5 225%2F55R19 mid-range tyre quote (Yokohama AE61 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地 · 19" SUV 最短制动距离',
        price: 258,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde',
        waText: 'Mazda CX-5 225%2F55R19 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $632–$740 · Mid-range $820–$950 · Premium $1,032–$1,180',
    },
  ],

  radarSize: '225/65R17',
  radarSource: 'Blackhawk (16 reviews) · Yokohama (28 reviews) · Michelin (30 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
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
      title: 'CX-5 KF · 225/65R17 基础 / 中配车主',
      color: 'red',
      genKey: 'kf',
      body: 'CX-5 入门和中配版的 <strong>225/65R17</strong> 货源充足，价格合理。推荐 Yokohama Geolandar X-CV G057（$154/条）——SUV 专用，侧壁稳定，操控感与 CX-5 底盘特性契合，整套约 $616。Mazda 底盘调校偏运动，轮胎要有足够侧壁支撑，不建议换低扁平比。',
    },
    {
      title: 'CX-5 Turbo / 高配 · 225/55R19 车主',
      color: 'blue',
      genKey: 'kf',
      body: '顶配和 Turbo 版的 225/55R19 是 CX-5 最性能化的配置。推荐 Yokohama BluEarth-XT AE61（$205/条）——低滚阻加上 SUV 抓地，平衡性最佳，整套约 $820。注意 19" 胎价格明显更高，有些车主会将 19" 轮辋替换为原厂 17" 以降低用车成本。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mazda CX-5 use in Singapore?',
      a: 'Mazda CX-5 KF (2017–present): OE 225/65R17 (2.0 / 2.5 base/mid trim) or 225/55R19 (2.5T Turbo / top trim). The 225/65R17 is by far the most common CX-5 size on Singapore roads.',
    },
    {
      q: 'What is the bolt pattern of the Mazda CX-5?',
      a: 'Mazda CX-5 uses 5×114.3 bolt pattern with 67.1mm centre bore — the same across all Mazda models (CX-3, CX-30, CX-8, Mazda3, Mazda6). Also compatible with Hyundai Tucson / Elantra (same 5×114.3 CB 67.1mm). Toyota models like Camry use the same bolt pattern (5×114.3) but a smaller CB (60.1mm) — hub-centric rings required.',
    },
    {
      q: 'How much does it cost to change Mazda CX-5 tyres in Singapore?',
      a: 'For 225/65R17 (base/mid): budget $128/tyre (Blackhawk); mid-range $154 (Yokohama G057, popular); premium $218 (Michelin Primacy SUV+). Full set: ~$512–$872. For 225/55R19 (top/turbo): budget $158; mid $205; premium $258. Full set: ~$632–$1,032.',
    },
    {
      q: 'Can I fit 225/65R17 tyres on a CX-5 that came with 225/55R19?',
      a: 'No — the rim sizes are different. 225/65R17 requires 17" rims, while 225/55R19 requires 19" rims. If you want to use 17" tyres, you would need to purchase a separate set of 17" wheels. Many owners do this to reduce tyre replacement cost — 17" tyres cost significantly less than 19".',
    },
    {
      q: 'How long do Mazda CX-5 tyres last in Singapore?',
      a: 'CX-5 tyres typically last 3–5 years or 40,000–60,000 km. Yokohama Geolandar G057 averages 55,000–65,000 km. Michelin Primacy SUV+ is rated 60,000+ km. Budget tyres average 30,000–40,000 km. CX-5\'s firm suspension is easy on tyres — rotate front/rear every 10,000 km.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Street-H HH11 225/65R17',    brand: { '@type': 'Brand', name: 'Blackhawk' },  offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Yokohama Geolandar X-CV G057 225/65R17', brand: { '@type': 'Brand', name: 'Yokohama' }, offers: { '@type': 'Offer', price: '154', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 225/65R17',        brand: { '@type': 'Brand', name: 'Michelin' },   offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Nexen NFERA RU1 225/55R19',             brand: { '@type': 'Brand', name: 'Nexen' },      offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Yokohama BluEarth-XT AE61 225/55R19',  brand: { '@type': 'Brand', name: 'Yokohama' },   offers: { '@type': 'Offer', price: '205', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 225/55R19',       brand: { '@type': 'Brand', name: 'Michelin' },   offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
