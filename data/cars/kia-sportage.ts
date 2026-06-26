import type { CarData } from './types'

const data: CarData = {
  make: 'Kia',
  model: 'Sportage',
  makeSlug: 'kia',
  modelSlug: 'sportage',
  bgWord: 'SPORTAGE',

  seo: {
    title: 'Kia Sportage Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Kia Sportage NQ5 uses 235/60R18 (mid) or 235/55R18 (GT-Line). 5×114.3 bolt. From $135 installed. Compare Bridgestone vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Kia Sportage NQ5: 235/60R18 (mid) or 235/55R18 (GT-Line). 5×114.3, CB 67.1mm. From $135 installed in Singapore.',
    twitterDescription: 'Kia Sportage uses 235/60R18 (mid) or 235/55R18 (GT-Line). From $135 installed in Singapore.',
    priceFrom: 135,
    oeSize: '235/60R18',
  },

  defaultGen: 'nq5',

  generations: [
    {
      key: 'nq5',
      label: 'NQ5 (5th Gen)',
      years: '2022–2026',
      heroChips: [
        { label: 'Mid OE',         value: '235/60R18' },
        { label: 'GT-Line OE',     value: '235/55R18' },
        { label: 'From installed', value: '$135', green: true },
      ],
      variants: [
        { name: '1.6T (base trim)', sizes: [
          { tag: 'OE',  size: '235/65R17', note: '基础版 17"（市场参考）' },
          { tag: 'Alt', size: '235/60R18', note: '升 18"，中配尺码' },
        ]},
        { name: '1.6T / HEV (mid trim)', sizes: [
          { tag: 'OE',  size: '235/60R18', note: '中配 18" 最常见' },
          { tag: 'Alt', size: '235/55R18', note: '稍矮，更运动' },
          { tag: 'Alt', size: '235/65R17', note: '降 17"，舒适省钱' },
        ]},
        { name: '1.6T GT-Line / PHEV (high trim)', sizes: [
          { tag: 'OE',  size: '235/55R18', note: 'GT-Line / PHEV 高配标配' },
          { tag: 'OE',  size: '235/55R19', note: '部分顶配 19"' },
          { tag: 'Alt', size: '235/60R18', note: '升高 (+6mm)，稍舒适' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · NQ5 · GT-Line 19"',   width: '7.5J', diameter: '19"', offset: 'ET51',   boltPattern: '5×114.3' },
    { label: '2022–2026 · NQ5 · GT-Line 18"',   width: '7.5J', diameter: '18"', offset: 'ET51',   boltPattern: '5×114.3' },
    { label: '2022–2026 · NQ5 · mid 18"',       width: '7.5J', diameter: '18"', offset: 'ET51',   boltPattern: '5×114.3' },
    { label: '2022–2026 · NQ5 · base 17"',      width: '7J',   diameter: '17"', offset: 'ET43.5', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '110 Nm',
    notes: 'Kia Sportage uses 5×114.3 with 67.1mm centre bore — same as all Kia and Hyundai models. The 235/55R18 is shared with the Hyundai Tucson NQ4 PHEV/HEV high trim.',
  },

  priceTabs: [
    {
      size: '235/55R18',
      tabLabel: '235/55R18 · GT-Line / PHEV 主力（442 条现货！）',
      budget: {
        name: 'Blackhawk Hiscend-H HS01 XL',
        desc: 'SUV 全能 · 442 条现货 · 超高性价比',
        price: 135,
        also: 'Also: Blackhawk Agility SUV, Nexen NFERA RU1',
        waText: 'Kia Sportage GT-Line 235%2F55R18 budget tyre quote (Blackhawk HS01 or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6',
        desc: 'A 级湿地 · 静音 · SUV 首选 · 82 条现货',
        price: 212,
        also: 'Also: Michelin Primacy 5, Yokohama AE61',
        waText: 'Kia Sportage GT-Line 235%2F55R18 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: 'A 级湿地+滚阻 · PHEV 续航友好 · 29 条现货',
        price: 244,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde',
        waText: 'Kia Sportage GT-Line 235%2F55R18 premium tyre quote (Michelin Primacy 5 or similar)',
      },
      setEstimate: 'Budget $540–$640 · Mid-range $848–$980 · Premium $976–$1,120',
    },
    {
      size: '235/60R18',
      tabLabel: '235/60R18 · mid 标配（53 条现货）',
      budget: {
        name: 'Blackhawk Agility SUV XL',
        desc: 'SUV 耐磨 · 53 条现货 · 日常性价比',
        price: 142,
        also: 'Also: Nexen NFERA RU1, Yokohama Geolandar G055',
        waText: 'Kia Sportage mid 235%2F60R18 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6 XL',
        desc: 'A 级湿地 · 静音 · 107 条现货',
        price: 219,
        also: 'Also: Michelin Primacy SUV+, Goodyear EfficientGrip 2 SUV',
        waText: 'Kia Sportage mid 235%2F60R18 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '操控最佳 · SUV 终极配置 · 60 条现货',
        price: 281,
        also: 'Also: Bridgestone Alenza 001, Continental CrossContact RX',
        waText: 'Kia Sportage mid 235%2F60R18 premium tyre quote (Michelin PS4 SUV or similar)',
      },
      setEstimate: 'Budget $568–$680 · Mid-range $876–$1,000 · Premium $1,124–$1,280',
    },
  ],

  radarSize: '235/55R18',
  radarSource: 'Blackhawk (16 reviews) · Bridgestone (28 reviews) · Michelin (26 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.5',
      scores: [72, 76, 78, 74, 86, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nHS01 XL',
      stats: [{ k: 'Wet', v: '72', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'NVH', v: '74', hi: false }, { k: 'Value', v: '86', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [83, 85, 85, 83, 76, 80], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza 6',
      stats: [{ k: 'Wet', v: '83', hi: true }, { k: 'Dry', v: '85', hi: true }, { k: 'NVH', v: '83', hi: true }, { k: 'Wear', v: '85', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [85, 87, 85, 84, 80, 82], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 5',
      stats: [{ k: 'Wet', v: '85', hi: true }, { k: 'Dry', v: '87', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Fuel', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Sportage NQ5 GT-Line / PHEV · 235/55R18',
      color: 'red',
      genKey: 'nq5',
      body: '235/55R18 是我库存量最大的 SUV 尺码之一（442 条！）。GT-Line 推荐 Bridgestone Turanza 6（$212/条），A 级湿地，四条约 $848。PHEV 版建议 Michelin Primacy 5（$244/条），低滚阻延长纯电续航。预算选 Blackhawk HS01（$135/条），四条仅约 $540。',
    },
    {
      title: 'Sportage 中配 · 235/60R18',
      color: 'blue',
      genKey: 'nq5',
      body: '235/60R18 与 Kia Sorento、Hyundai Santa Fe 共用同一尺码，货源永远充足。Bridgestone Turanza 6 XL（$219/条）是 SUV 用家最多选择，四条约 $876。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Kia Sportage use in Singapore?',
      a: 'Kia Sportage NQ5 (2022+): 235/65R17 (base trim), 235/60R18 (mid), or 235/55R18 (GT-Line/PHEV high). Some top-spec versions use 235/55R19. The 235/60R18 and 235/55R18 are the most common sizes in Singapore.',
    },
    {
      q: 'What is the bolt pattern of the Kia Sportage?',
      a: 'Kia Sportage NQ5 uses 5×114.3 with 67.1mm centre bore, M12×1.5, 110 Nm — same as all Kia and Hyundai models.',
    },
    {
      q: 'How much does it cost to change Kia Sportage tyres in Singapore?',
      a: 'For 235/55R18 (GT-Line): budget $135 (Blackhawk HS01); mid $212 (Bridgestone Turanza 6, popular); premium $244 (Michelin Primacy 5). Full set ~$540–$976. For 235/60R18 (mid): $142–$281 per tyre.',
    },
    {
      q: 'Are Kia Sportage and Hyundai Tucson tyres interchangeable?',
      a: 'Yes — the 235/55R18 size is shared between the Sportage NQ5 GT-Line and Tucson NX4 PHEV/HEV. Both use 5×114.3 CB 67.1mm, so the tyre fits both. Confirm rim offsets before swapping actual wheels.',
    },
    {
      q: 'What tyre should I choose for the Kia Sportage PHEV?',
      a: 'For the Sportage PHEV (235/55R18 or 235/55R19): Michelin Primacy 5 — A-rated fuel efficiency helps preserve electric range. Avoid pure performance tyres that increase rolling resistance. Bridgestone Turanza 6 is also a good mid-range choice with A-rated rolling resistance.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk HS01 XL 235/55R18',          brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '135', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 235/55R18',      brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '212', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 5 235/55R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '244', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Blackhawk Agility SUV XL 235/60R18', brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '142', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 XL 235/60R18', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '219', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
