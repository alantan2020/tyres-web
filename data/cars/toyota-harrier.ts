import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Harrier',
  makeSlug: 'toyota',
  modelSlug: 'harrier',
  bgWord: 'HARRIER',

  seo: {
    title: 'Toyota Harrier Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Harrier XU80 uses 225/60R18 or 225/55R19. XU60 (2013–2020) uses 225/65R17. From $118 installed. Compare Michelin vs Dunlop vs Nexen. WhatsApp for a quote.',
    ogDescription: 'Toyota Harrier XU80 uses 225/60R18 or 225/55R19. XU60 uses 225/65R17. From $118 installed in Singapore. WhatsApp for a quote.',
    twitterDescription: 'Toyota Harrier uses 225/60R18 (XU80) or 225/65R17 (XU60). From $118 installed in Singapore.',
    priceFrom: 118,
    oeSize: '225/60R18',
  },

  defaultGen: 'xu80',

  generations: [
    {
      key: 'xu80',
      label: 'Gen 4 XU80',
      years: '2020–2026',
      heroChips: [
        { label: '2.0i standard', value: '225/60R18' },
        { label: '2.0i sport',    value: '225/55R19' },
        { label: 'From installed', value: '$138', green: true },
      ],
      variants: [
        { name: '2.0i (standard / G trim)', sizes: [
          { tag: 'OE',  size: '225/60R18', note: '标配，最常见' },
          { tag: 'Alt', size: '225/65R17', note: '17" 省油替代，省约 $60–80/条' },
        ]},
        { name: '2.0i (Z / PHEV sport trim)', sizes: [
          { tag: 'OE',  size: '225/55R19', note: 'Z 版 / 顶配标配' },
          { tag: 'Alt', size: '225/60R18', note: '18" 降档，舒适性提升' },
        ]},
      ],
    },
    {
      key: 'xu60',
      label: 'Gen 3 XU60',
      years: '2013–2020',
      heroChips: [
        { label: '2.0i standard', value: '225/65R17' },
        { label: '2.0i sport',    value: '225/55R18' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: '2.0i standard', sizes: [
          { tag: 'OE',  size: '225/65R17', note: '标配，货源最充足' },
          { tag: 'Alt', size: '225/60R17', note: '同直径，稍低扁平比' },
        ]},
        { name: '2.0i sport / premium', sizes: [
          { tag: 'OE',  size: '225/55R18', note: '运动版 / 顶配标配' },
          { tag: 'Alt', size: '225/60R18', note: '同直径，更常见尺码' },
        ]},
      ],
    },
    {
      key: 'xu30',
      label: 'Gen 2 XU30',
      years: '2003–2013',
      heroChips: [
        { label: '2.4i / 3.0i', value: '225/65R17' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: '2.4i / 3.0i', sizes: [
          { tag: 'OE',  size: '225/65R17' },
          { tag: 'Alt', size: '235/60R17', note: '稍宽，仍常见' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2020–2026 · XU80 · Z / sport 19"',     width: '7J', diameter: '19"', offset: 'ET35', boltPattern: '5×114.3' },
    { label: '2020–2026 · XU80 · standard 18"',       width: '7J', diameter: '18"', offset: 'ET35', boltPattern: '5×114.3' },
    { label: '2013–2020 · XU60 · sport 18"',          width: '7J', diameter: '18"', offset: 'ET35', boltPattern: '5×114.3' },
    { label: '2003–2020 · XU30 / XU60 · standard 17"', width: '7J', diameter: '17"', offset: 'ET35', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    notes: 'All Harrier generations use 5×114.3 bolt pattern — same as Camry, Corolla Altis, and most Toyota passenger cars.',
  },

  priceTabs: [
    {
      size: '225/60R18',
      tabLabel: '225/60R18 · XU80 标配',
      budget: {
        name: 'Nexen NFERA RU1',
        desc: 'SUV 全天候 · Wet grip: B · 操控稳定 · 性价比高',
        price: 138,
        also: 'Also: Hankook Ventus Prime 4, Kumho Ecsta HS51',
        waText: 'Toyota Harrier XU80 225%2F60R18 budget tyre quote (Nexen NFERA or similar)',
      },
      mid: {
        name: 'Dunlop GrandTrek PT5',
        desc: '静音 · 舒适 · SUV 专用 · A 级湿地',
        price: 185,
        also: 'Also: Bridgestone Alenza 001, Yokohama Advan V61',
        waText: 'Toyota Harrier XU80 225%2F60R18 mid-range tyre quote (Dunlop GrandTrek PT5 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地制动 · 超低滚阻 · 5年保用',
        price: 228,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde',
        waText: 'Toyota Harrier XU80 225%2F60R18 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $552–$650 · Mid-range $740–$860 · Premium $912–$1,060',
    },
    {
      size: '225/65R17',
      tabLabel: '225/65R17 · XU60 / XU30 标配',
      budget: {
        name: 'Nexen NFERA RU1',
        desc: 'SUV 全天候 · 适合日常通勤 · 货源充足',
        price: 118,
        also: 'Also: Goodyear Assurance MaxGuard SUV, Triangle TR259',
        waText: 'Toyota Harrier XU60 225%2F65R17 budget tyre quote (Nexen NFERA or similar)',
      },
      mid: {
        name: 'Yokohama Geolandar CV G058',
        desc: '静音 · 舒适 · 新加坡 Harrier 最受欢迎 17" 胎',
        price: 155,
        also: 'Also: Bridgestone Turanza 6, Dunlop GrandTrek PT5',
        waText: 'Toyota Harrier XU60 225%2F65R17 mid-range tyre quote (Yokohama Geolandar or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最耐磨 · A 级湿地 · 适合长期持有老一代 Harrier',
        price: 218,
        also: 'Also: Michelin Primacy 4 SUV, Continental CrossContact LX2',
        waText: 'Toyota Harrier XU60 225%2F65R17 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $620–$740 · Premium $872–$1,000',
    },
  ],

  radarSize: '225/60R18',
  radarSource: 'Nexen (20 reviews) · Dunlop (32 reviews) · Michelin (36 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.5',
      scores: [70, 74, 72, 70, 85, 72], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nexen\nNFERA RU1',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '72', hi: false }, { k: 'Value', v: '85', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.0',
      scores: [77, 80, 80, 78, 76, 75], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Dunlop\nGrandTrek PT5',
      stats: [{ k: 'Wet', v: '77', hi: false }, { k: 'Dry', v: '80', hi: true }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '76', hi: false }],
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
      title: 'Gen 4 XU80 (2020–2026) · 225/60R18 标配车主',
      color: 'red',
      genKey: 'xu80',
      body: 'XU80 标配 <strong>225/60R18</strong>，是新一代 Harrier 最常见的尺码。推荐 Dunlop GrandTrek PT5（$185/条）——SUV 专用设计，静音舒适，A 级湿地抓地力，非常适合 Harrier 的定位。想省钱可选 Nexen NFERA RU1（$138/条），日常通勤和高速巡航完全够用。若拥有 Z 版 19" 轮辋，对应尺码为 <strong>225/55R19</strong>，WhatsApp 告知款式即可报价。',
    },
    {
      title: 'Gen 3 XU60 (2013–2020) · 225/65R17 标配车主',
      color: 'blue',
      genKey: 'xu60',
      body: 'XU60 标配 <strong>225/65R17</strong>，这个尺码在新加坡货源非常充足、价格实惠。推荐 Yokohama Geolandar CV G058（$155/条）——静音舒适，4 条含安装约 $620。想以最低成本保持 Harrier 安全行驶，Nexen NFERA RU1（$118/条）是性价比之选。长期持有准备再开 5 年的车主，直接上 Michelin Primacy SUV+（$218/条），使用寿命最长。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Harrier use in Singapore?',
      a: 'Gen 4 XU80 (2020–2026): OE 225/60R18 (standard trims), 225/55R19 (Z / sport trim). Gen 3 XU60 (2013–2020): OE 225/65R17 (standard), 225/55R18 (sport / premium trim). Gen 2 XU30 (2003–2013): OE 225/65R17. If unsure, check the tyre sidewall — the size is embossed on the side.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Harrier?',
      a: 'All Toyota Harrier generations (XU30, XU60, XU80) use the 5×114.3 bolt pattern — same as Camry, Corolla Altis, and most Toyota passenger cars. Centre bore is 60.1mm, lug nut thread M12×1.5, tightening torque 103 Nm.',
    },
    {
      q: 'How much does it cost to change Toyota Harrier tyres in Singapore?',
      a: 'For 225/60R18 (XU80): budget $138/tyre (Nexen NFERA RU1); mid-range $185 (Dunlop GrandTrek PT5); premium $228 (Michelin Primacy SUV+). Full set of 4: budget ~$552, mid ~$740, premium ~$912. For 225/65R17 (XU60): budget $118; mid $155; premium $218. Full set: ~$472–$872.',
    },
    {
      q: 'Can I put 225/65R17 tyres on a XU80 Harrier?',
      a: 'Yes, if you swap to 17" wheels. The 225/65R17 has a very similar overall diameter to 225/60R18 (difference < 1%), so the speedometer reading is barely affected. Many XU80 owners downsize to 17" for lower tyre cost — especially fleet or older owners who prefer the 17" look and softer ride. However, you cannot fit 225/65R17 on the original 18" rims.',
    },
    {
      q: 'How long do Toyota Harrier tyres last in Singapore?',
      a: 'In Singapore conditions, Harrier tyres typically last 3–5 years or 40,000–60,000 km. Michelin Primacy SUV+ is rated for 60,000+ km. Dunlop GrandTrek PT5 averages 45,000–55,000 km. Budget brands around 30,000–40,000 km. With the heavier XU80 body and 18"/19" rims, inspect tread every 6 months.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nexen NFERA RU1 225/60R18',        brand: { '@type': 'Brand', name: 'Nexen' },       offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Dunlop GrandTrek PT5 225/60R18',  brand: { '@type': 'Brand', name: 'Dunlop' },      offers: { '@type': 'Offer', price: '185', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 225/60R18', brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Nexen NFERA RU1 225/65R17',        brand: { '@type': 'Brand', name: 'Nexen' },       offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Yokohama Geolandar CV G058 225/65R17', brand: { '@type': 'Brand', name: 'Yokohama' }, offers: { '@type': 'Offer', price: '155', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 225/65R17', brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
