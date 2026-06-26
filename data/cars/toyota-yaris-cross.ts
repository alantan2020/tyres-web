import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Yaris Cross',
  makeSlug: 'toyota',
  modelSlug: 'yaris-cross',
  bgWord: 'CROSS',

  seo: {
    title: 'Toyota Yaris Cross Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Yaris Cross AC200 uses 215/60R17 or 215/55R18. XP150 uses 195/50R16. ⚠️ 5×100 bolt pattern. From $88 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Toyota Yaris Cross uses 215/60R17 (AC200) or 195/50R16 (XP150). ⚠️ 5×100 bolt pattern — not 5×114.3. From $88 installed.',
    twitterDescription: 'Toyota Yaris Cross uses 215/60R17 (AC200) or 195/50R16 (XP150). From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '215/60R17',
  },

  defaultGen: 'ac200',

  generations: [
    {
      key: 'ac200',
      label: 'Gen 2 AC200',
      years: '2023–2026',
      heroChips: [
        { label: '1.5i / HEV base', value: '215/60R17' },
        { label: 'GR Sport / HEV top', value: '215/55R18' },
        { label: 'From installed', value: '$108', green: true },
      ],
      variants: [
        { name: '1.5i / 1.5 HEV (standard trim)', sizes: [
          { tag: 'OE',  size: '215/60R17', note: '标配，最常见' },
          { tag: 'Alt', size: '215/65R17', note: '同尺寸系列，更高扁平比' },
        ]},
        { name: '1.5 HEV GR Sport / top trim', sizes: [
          { tag: 'OE',  size: '215/55R18', note: 'GR Sport 标配' },
          { tag: 'Alt', size: '215/60R17', note: '17" 降价替代' },
        ]},
      ],
    },
    {
      key: 'xp150',
      label: 'Gen 1 XP150',
      years: '2021–2023',
      heroChips: [
        { label: '1.5 VVT-i OE', value: '195/50R16' },
        { label: 'Alt 17"',       value: '205/45R17' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.5 VVT-i', sizes: [
          { tag: 'OE',  size: '195/50R16', note: '标配' },
          { tag: 'Alt', size: '205/45R17', note: '17" 升级选项' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2023–2026 · AC200 · GR Sport 18"',   width: '7J',   diameter: '18"', offset: 'ET40', boltPattern: '5×100' },
    { label: '2023–2026 · AC200 · standard 17"',   width: '6.5J', diameter: '17"', offset: 'ET40', boltPattern: '5×100' },
    { label: '2021–2023 · XP150 · OE 16"',         width: '6J',   diameter: '16"', offset: 'ET39', boltPattern: '5×100' },
    { label: '2021–2023 · XP150 · Alt 17"',        width: '6.5J', diameter: '17"', offset: 'ET40', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    warning: '⚠️ Yaris Cross uses 5×100 bolt pattern — NOT the 5×114.3 used on Vios, Corolla Altis, Camry, and most Toyota passenger cars. Always confirm before buying aftermarket wheels.',
  },

  priceTabs: [
    {
      size: '215/60R17',
      tabLabel: '215/60R17 · AC200 标配',
      budget: {
        name: 'Nexen N\'Blue HD Plus',
        desc: '日常通勤 · 全天候 · 性价比高',
        price: 108,
        also: 'Also: Kumho Ecsta HS51, Triangle TR259 SUV',
        waText: 'Toyota Yaris Cross AC200 215%2F60R17 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Yokohama Advan V61',
        desc: '静音 · 舒适 · 适合 Yaris Cross 日常定位',
        price: 158,
        also: 'Also: Dunlop GrandTrek PT5, Bridgestone Alenza 001',
        waText: 'Toyota Yaris Cross AC200 215%2F60R17 mid-range tyre quote (Yokohama or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '最佳湿地制动 · 低滚阻 · 5年保用',
        price: 218,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato Rosso',
        waText: 'Toyota Yaris Cross AC200 215%2F60R17 premium tyre quote (Michelin Primacy 5)',
      },
      setEstimate: 'Budget $432–$500 · Mid-range $632–$740 · Premium $872–$1,000',
    },
    {
      size: '195/50R16',
      tabLabel: '195/50R16 · XP150 Gen 1',
      budget: {
        name: 'Nexen N\'Blue HD Plus',
        desc: '操控稳定 · 日常通勤 · 新加坡常见库存',
        price: 88,
        also: 'Also: Triangle ReliaX TE307, Zeetex HP5000',
        waText: 'Toyota Yaris Cross XP150 195%2F50R16 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音 · 湿地 A · 适合小型 SUV 定位',
        price: 118,
        also: 'Also: Dunlop SP Sport Maxx 050, Goodyear EfficientGrip Performance',
        waText: 'Toyota Yaris Cross XP150 195%2F50R16 mid-range tyre quote (Bridgestone or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Energy XM2+',
        desc: '最耐磨 · 超低滚阻 · 最省油',
        price: 148,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'Toyota Yaris Cross XP150 195%2F50R16 premium tyre quote (Michelin XM2%2B)',
      },
      setEstimate: 'Budget $352–$415 · Mid-range $472–$540 · Premium $592–$680',
    },
  ],

  radarSize: '215/60R17',
  radarSource: 'Nexen (16 reviews) · Yokohama (28 reviews) · Michelin (34 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.4',
      scores: [68, 74, 72, 68, 86, 74], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nexen\nN\'Blue HD Plus',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '72', hi: false }, { k: 'Value', v: '86', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [76, 82, 80, 80, 78, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Yokohama\nAdvan V61',
      stats: [{ k: 'Wet', v: '76', hi: false }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [85, 87, 85, 86, 72, 84], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 5',
      stats: [{ k: 'Wet', v: '85', hi: true }, { k: 'Dry', v: '87', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Fuel', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Gen 2 AC200 (2023+) · 215/60R17 标配车主',
      color: 'red',
      genKey: 'ac200',
      body: 'AC200 标配 <strong>215/60R17</strong>，这个尺码在新加坡货源充足，价格合理。推荐 Yokohama Advan V61（$158/条）——静音舒适，湿地表现稳定，非常适合 Yaris Cross 的城市 SUV 定位。若有 GR Sport 的 18" 轮辋，对应 <strong>215/55R18</strong>，WhatsApp 告知即可报价。<br>⚠️ Yaris Cross 用 <strong>5×100</strong> 孔距，和 Vios、Corolla Altis 用的 5×114.3 不兼容，换轮辋前必须确认。',
    },
    {
      title: 'Gen 1 XP150 (2021–2023) · 195/50R16 车主',
      color: 'blue',
      genKey: 'xp150',
      body: 'XP150 用 <strong>195/50R16</strong>，是一个扁平比较低的小尺码，操控感好但在新加坡库存不如 215/60R17 充足，建议提前 WhatsApp 确认库存。推荐 Bridgestone Turanza T005（$118/条），湿地 A 级，静音舒适，整套四条约 $472。也可升级 17" 轮辋配 <strong>205/45R17</strong>，操控感会更好。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Yaris Cross use in Singapore?',
      a: 'Gen 2 AC200 (2023+): OE 215/60R17 (standard trim) or 215/55R18 (GR Sport / top HEV trim). Gen 1 XP150 (2021–2023): OE 195/50R16, Alt 205/45R17. If unsure, check the tyre sidewall or look at the sticker inside the driver\'s door jamb.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Yaris Cross?',
      a: 'Toyota Yaris Cross uses 5×100 bolt pattern — NOT 5×114.3. This is different from Vios, Corolla Altis, Camry, and most Toyota passenger cars. Centre bore is 60.1mm, lug nut thread M12×1.5, tightening torque 103 Nm. Always confirm before buying aftermarket wheels.',
    },
    {
      q: 'How much does it cost to change Toyota Yaris Cross tyres in Singapore?',
      a: 'For 215/60R17 (AC200 standard): budget $108/tyre (Nexen N\'Blue); mid-range $158 (Yokohama Advan V61, popular); premium $218 (Michelin Primacy 5). Full set: budget ~$432, mid ~$632, premium ~$872. For 195/50R16 (XP150): budget $88; mid $118; premium $148. Full set: ~$352–$592.',
    },
    {
      q: 'Can I use 215/60R17 tyres on a XP150 Yaris Cross?',
      a: 'No — the XP150 has 16" OE rims (195/50R16). To fit 215/60R17, you would need to change to 17" wheels. The GEN 2 AC200 uses 17" rims as standard, so if you\'ve upgraded to AC200-spec wheels, 215/60R17 would fit. Confirm the rim size before purchasing tyres.',
    },
    {
      q: 'How long do Toyota Yaris Cross tyres last in Singapore?',
      a: 'In Singapore, Yaris Cross tyres typically last 3–5 years or 40,000–55,000 km. Budget options average 30,000–40,000 km. Michelin Primacy 5 and Yokohama Advan V61 are rated 50,000+ km. Inspect tread depth every 6 months — Singapore\'s heat and frequent braking on flyovers accelerate tread wear.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nexen N\'Blue HD Plus 215/60R17',    brand: { '@type': 'Brand', name: 'Nexen' },       offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Yokohama Advan V61 215/60R17',      brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 5 215/60R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Nexen N\'Blue HD Plus 195/50R16',   brand: { '@type': 'Brand', name: 'Nexen' },       offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 195/50R16', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Energy XM2+ 195/50R16',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
