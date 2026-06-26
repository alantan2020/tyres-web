import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'RAV4',
  makeSlug: 'toyota',
  modelSlug: 'rav4',
  bgWord: 'RAV4',

  seo: {
    title: 'Toyota RAV4 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota RAV4 XA50 uses 225/65R17 or 225/60R18. XA60 uses 235/60R18 or 235/65R17. From $118 installed. Compare Michelin vs Bridgestone vs Yokohama. WhatsApp for a quote.',
    ogDescription: 'Toyota RAV4 XA50 uses 225/65R17 or 225/60R18. XA60 uses 235/60R18. From $118 installed in Singapore. WhatsApp for a quote.',
    twitterDescription: 'Toyota RAV4 uses 225/65R17 or 225/60R18 (XA50). From $118 installed in Singapore.',
    priceFrom: 118,
    oeSize: '225/65R17',
  },

  defaultGen: 'xa50',

  generations: [
    {
      key: 'xa60',
      label: 'Gen 6 XA60',
      years: '2024–2026',
      heroChips: [
        { label: '2.5 HEV base', value: '235/65R17' },
        { label: '2.5 HEV mid',  value: '235/60R18' },
        { label: 'From installed', value: '$148', green: true },
      ],
      variants: [
        { name: '2.5 HEV (base trim)', sizes: [
          { tag: 'OE',  size: '235/65R17', note: '入门标配' },
          { tag: 'Alt', size: '235/60R18', note: '升级常见替换' },
        ]},
        { name: '2.5 HEV (mid / top trim)', sizes: [
          { tag: 'OE',  size: '235/60R18', note: '标配' },
          { tag: 'OE',  size: '235/50R20', note: '顶配标配' },
          { tag: 'Alt', size: '235/65R18', note: '同直径宽胎' },
        ]},
      ],
    },
    {
      key: 'xa50',
      label: 'Gen 5 XA50',
      years: '2019–2024',
      heroChips: [
        { label: '2.0 / 2.5 base', value: '225/65R17' },
        { label: '2.5 mid / HEV',  value: '225/60R18' },
        { label: 'From installed',  value: '$118', green: true },
      ],
      variants: [
        { name: '2.0 VVT-i / 2.5 (base trim)', sizes: [
          { tag: 'OE',  size: '225/65R17', note: '入门标配，最常见' },
          { tag: 'Alt', size: '235/60R17', note: '稍宽，同直径' },
        ]},
        { name: '2.5 VVT-i / 2.5 HEV (higher trim)', sizes: [
          { tag: 'OE',  size: '225/60R18', note: '标配' },
          { tag: 'Alt', size: '235/55R18', note: '宽胎升级' },
          { tag: 'Alt', size: '235/55R19', note: '19" 升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2024–2026 · XA60 · top 20"',        width: '7.5J', diameter: '20"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2024–2026 · XA60 · mid/top 18"',    width: '7.5J', diameter: '18"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2024–2026 · XA60 · base 17"',       width: '7.5J', diameter: '17"', offset: 'ET35', boltPattern: '5×114.3' },
    { label: '2019–2024 · XA50 · mid/HEV 18"',   width: '7J',   diameter: '18"', offset: 'ET35', boltPattern: '5×114.3' },
    { label: '2019–2024 · XA50 · base 17"',       width: '7J',   diameter: '17"', offset: 'ET35', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    notes: 'All RAV4 generations use 5×114.3 bolt pattern — same as Camry, Harrier, and most Toyota passenger cars.',
  },

  priceTabs: [
    {
      size: '225/65R17',
      tabLabel: '225/65R17 · XA50 入门标配',
      budget: {
        name: 'Nexen NFERA RU1',
        desc: 'SUV 全天候 · Wet grip: B · 日常驾驶性价比首选',
        price: 118,
        also: 'Also: Triangle TR259, Goodyear Assurance MaxGuard SUV',
        waText: 'Toyota RAV4 XA50 225%2F65R17 budget tyre quote (Nexen NFERA or similar)',
      },
      mid: {
        name: 'Yokohama Geolandar CV G058',
        desc: '静音 · 舒适 · SUV 专用 · 最受新加坡 RAV4 车主好评',
        price: 155,
        also: 'Also: Bridgestone D470, Dunlop GrandTrek PT5',
        waText: 'Toyota RAV4 XA50 225%2F65R17 mid-range tyre quote (Yokohama Geolandar or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地制动 · 超低滚阻 · 适合 HEV 版省油要求',
        price: 218,
        also: 'Also: Michelin Primacy 4 SUV, Continental CrossContact LX2',
        waText: 'Toyota RAV4 XA50 225%2F65R17 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $620–$740 · Premium $872–$1,000',
    },
    {
      size: '235/60R18',
      tabLabel: '235/60R18 · XA50 高配 / XA60 主力',
      budget: {
        name: 'Yokohama Geolandar G055',
        desc: 'SUV 全天候 · 耐磨 · 适合城市使用',
        price: 148,
        also: 'Also: Blackhawk Agility SUV, Triangle TR259 SUV',
        waText: 'Toyota RAV4 235%2F60R18 budget tyre quote (Yokohama G055 or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6',
        desc: '静音 · 舒适 · A 级湿地 · SUV 舒适向首选',
        price: 198,
        also: 'Also: Yokohama Advan Sport V105, Dunlop GrandTrek PT5',
        waText: 'Toyota RAV4 235%2F60R18 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地制动 · 低滚阻 · 5年保用',
        price: 248,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde',
        waText: 'Toyota RAV4 235%2F60R18 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $592–$700 · Mid-range $792–$920 · Premium $992–$1,140',
    },
  ],

  radarSize: '225/65R17',
  radarSource: 'Nexen (18 reviews) · Yokohama (30 reviews) · Michelin (34 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.5',
      scores: [70, 74, 72, 70, 85, 72], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nexen\nNFERA RU1',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '72', hi: false }, { k: 'Value', v: '85', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [77, 80, 82, 80, 76, 78], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Yokohama\nGeolandar CV G058',
      stats: [{ k: 'Wet', v: '77', hi: false }, { k: 'Dry', v: '80', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [84, 86, 85, 84, 72, 82], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy SUV+',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Fuel', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'XA50 Gen 5 (2019–2024) · 225/65R17 车主',
      color: 'red',
      genKey: 'xa50',
      body: 'XA50 入门版标配 <strong>225/65R17</strong>，货源充足，价格合理。推荐 Yokohama Geolandar CV G058（$155/条）——SUV 专用，静音舒适，适合新加坡城市 SUV 的定位，是最多 XA50 车主的首选。HEV 版标配 225/60R18，换胎时注意核对轮辋尺寸。',
    },
    {
      title: 'XA50 / XA60 · 235/60R18 高配车主',
      color: 'blue',
      genKey: 'xa60',
      body: '235/60R18 是 XA50 高配版和 XA60 标准版的主力尺码。推荐 Bridgestone Turanza 6（$198/条）——静音舒适优先，A 级湿地表现，适合新加坡雨季。想进一步提升驾驶感受，Michelin Primacy SUV+（$248/条）是最佳选择，湿地制动距离在同类 SUV 胎中最短。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota RAV4 use in Singapore?',
      a: 'Gen 5 XA50 (2019–2024): OE 225/65R17 (base trim) or 225/60R18 (2.5 HEV / higher trim); Alt 235/55R19. Gen 6 XA60 (2024+): OE 235/65R17 (base), 235/60R18 (standard), or 235/50R20 (top trim). Check the tyre sidewall or door jamb sticker to confirm your size.',
    },
    {
      q: 'What is the bolt pattern of the Toyota RAV4?',
      a: 'All Toyota RAV4 generations (XA50, XA60) use 5×114.3 bolt pattern — same as Camry, Corolla Altis, and most Toyota passenger cars. Centre bore is 60.1mm, lug nut thread M12×1.5, tightening torque 103 Nm.',
    },
    {
      q: 'How much does it cost to change Toyota RAV4 tyres in Singapore?',
      a: 'For 225/65R17 (XA50 base): budget $118/tyre; mid-range $155 (Yokohama Geolandar, popular); premium $218 (Michelin Primacy SUV+). Full set: ~$472–$872. For 235/60R18 (XA50 high / XA60): budget $148; mid $198; premium $248. Full set: ~$592–$992.',
    },
    {
      q: 'Can I use 225/65R17 on a XA50 RAV4 with 18" rims?',
      a: 'No — 225/65R17 requires 17" rims. If your RAV4 came with 18" OE wheels (2.5 HEV / higher trims), you need 225/60R18 or another 18" size. Fitting a 17" tyre on an 18" rim is not possible. To use 17" tyres, you would need to purchase 17" wheels separately.',
    },
    {
      q: 'How long do Toyota RAV4 tyres last in Singapore?',
      a: 'RAV4 tyres typically last 3–5 years or 40,000–60,000 km in Singapore. Yokohama Geolandar averages 50,000–60,000 km. Michelin Primacy SUV+ is rated 60,000+ km. Budget brands average 30,000–40,000 km. Heavier SUV weight accelerates wear — inspect every 6 months and rotate front/rear every 10,000 km.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nexen NFERA RU1 225/65R17',            brand: { '@type': 'Brand', name: 'Nexen' },       offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Yokohama Geolandar CV G058 225/65R17', brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '155', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 225/65R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Yokohama Geolandar G055 235/60R18',   brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 235/60R18',     brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 235/60R18',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
