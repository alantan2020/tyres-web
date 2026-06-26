import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'HR-V',
  makeSlug: 'honda',
  modelSlug: 'hr-v',
  bgWord: 'HR-V',

  seo: {
    title: 'Honda HR-V Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda HR-V uses 215/55R17 or 225/50R18 tyres. Compare Michelin ($168) vs Bridgestone ($138). From $98 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Honda HR-V uses 215/55R17 or 225/50R18 tyres. Compare Michelin ($168) vs Bridgestone ($138). From $98 installed in Singapore. WhatsApp for a quote.',
    twitterDescription: 'Honda HR-V uses 215/55R17 or 225/50R18 tyres. From $98 installed in Singapore.',
    priceFrom: 98,
    oeSize: '215/55R17',
  },

  defaultGen: 'ru_fl',

  generations: [
    {
      key: 'rv_fl',
      label: 'Gen 2 RV FL',
      years: '2024–2026',
      heroChips: [
        { label: 'e:HEV / 1.5T', value: '225/50R18' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: 'e:HEV / 1.5 Turbo', sizes: [
          { tag: 'OE',  size: '225/50R18' },
          { tag: 'Alt', size: '215/55R17', note: '17" 省油替代' },
        ]},
      ],
    },
    {
      key: 'rv',
      label: 'Gen 2 RV',
      years: '2021–2023',
      heroChips: [
        { label: '1.5T / e:HEV', value: '225/50R18' },
        { label: '1.5 NA', value: '215/60R17' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: '1.5 i-VTEC (base)', sizes: [
          { tag: 'OE',  size: '215/60R17' },
          { tag: 'Alt', size: '215/55R17', note: '常见替代尺码' },
        ]},
        { name: '1.5 Turbo / e:HEV', sizes: [
          { tag: 'OE',  size: '225/50R18' },
          { tag: 'Alt', size: '215/60R17', note: '17" 降价替代' },
        ]},
      ],
    },
    {
      key: 'ru_fl',
      label: 'Gen 1 RU FL',
      years: '2018–2021',
      heroChips: [
        { label: '1.8 i-VTEC', value: '215/55R17' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: '1.8 i-VTEC', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '215/60R16', note: '16" 省油替代' },
          { tag: 'Alt', size: '225/45R18', note: '18" 运动升级' },
        ]},
      ],
    },
    {
      key: 'ru',
      label: 'Gen 1 RU',
      years: '2015–2018',
      heroChips: [
        { label: '1.8 i-VTEC', value: '215/55R17' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: '1.8 i-VTEC', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '215/60R16', note: '16" 省油替代' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021–2026 · Gen 2 RV · e:HEV / Turbo 18"',  width: '7.5J', diameter: '18"', offset: 'ET55', boltPattern: '5×114.3' },
    { label: '2021–2023 · Gen 2 RV · base 17"',            width: '7.5J', diameter: '17"', offset: 'ET55', boltPattern: '5×114.3' },
    { label: '2015–2021 · Gen 1 RU / RU FL · OE 17"',      width: '7J',   diameter: '17"', offset: 'ET55', boltPattern: '5×114.3' },
    { label: '2015–2021 · Gen 1 RU · Alt 16"',             width: '7J',   diameter: '16"', offset: 'ET55', boltPattern: '5×114.3' },
    { label: '2018–2021 · Gen 1 RU FL · Alt 18"',          width: '7J',   diameter: '18"', offset: 'ET55', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'All HR-V generations use 5×114.3 bolt pattern',
  },

  priceTabs: [
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · Gen 1 RU 主流尺码',
      budget: {
        name: 'Kumho Ecsta HS51',
        desc: '日常通勤 · 操控稳定 · Wet grip: B',
        price: 98,
        also: 'Also: Nexen N\'Blue HD Plus, Hankook Kinergy Eco 2',
        waText: 'Honda HR-V 215%2F55R17 budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音 · 舒适 · A 级湿地抓地',
        price: 138,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Honda HR-V 215%2F55R17 mid-range tyre quote (Bridgestone Turanza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地制动 · 5年保用 · Wet grip: A',
        price: 168,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'Honda HR-V 215%2F55R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $392–$450 · Mid-range $552–$640 · Premium $672–$780',
    },
    {
      size: '225/50R18',
      tabLabel: '225/50R18 · Gen 2 RV e:HEV / Turbo',
      budget: {
        name: 'Kumho Ecsta HS51',
        desc: '运动操控 · 日常通勤 · 性价比高',
        price: 108,
        also: 'Also: MasterSteel SportsMax 2, Triangle Sportex TH201',
        waText: 'Honda HR-V 225%2F50R18 budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Dunlop SP Sport Maxx 050+',
        desc: '操控均衡 · 静音 · Wet grip: A',
        price: 158,
        also: 'Also: Bridgestone Turanza T005, Yokohama BluEarth-GT AE51',
        waText: 'Honda HR-V 225%2F50R18 mid-range tyre quote (Dunlop or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地制动 · 低滚阻 · Wet grip: A',
        price: 195,
        also: 'Also: Continental PremiumContact 6, Pirelli Cinturato P7',
        waText: 'Honda HR-V 225%2F50R18 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $432–$500 · Mid-range $632–$720 · Premium $780–$900',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Kumho (18 reviews) · Bridgestone (26 reviews) · Michelin (32 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [66, 77, 72, 66, 75, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Kumho\nEcsta HS51',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '77', hi: true }, { k: 'Wear', v: '72', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [79, 84, 83, 80, 81, 78], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '79', hi: false }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [85, 87, 84, 87, 83, 76], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '85', hi: true }, { k: 'Dry', v: '87', hi: true }, { k: 'NVH', v: '87', hi: true }, { k: 'Value', v: '76', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Gen 2 RV (2021–2026) · e:HEV / 1.5T 车主',
      color: 'red',
      genKey: 'rv',
      body: 'OE 尺码 <strong>225/50R18</strong> 是新一代 HR-V 的标配。Dunlop SP Sport Maxx 050+ ($158/条) 是操控与静音的平衡之选，非常适合 HR-V 的驾驶定位。想省钱可选 Kumho Ecsta HS51 ($108/条)，e:HEV 版本滚阻要求不高，预算胎日常完全够用。',
    },
    {
      title: 'Gen 1 RU / RU FL (2015–2021) · 1.8 i-VTEC 车主',
      color: 'blue',
      genKey: 'ru_fl',
      body: 'OE 尺码 <strong>215/55R17</strong> 是 SG 路上最常见的 HR-V 尺码，货源充足。推荐 Bridgestone Turanza T005 ($138/条)——同级最受好评，湿地 A 级，适合新加坡雨季。想升级运动感可换 18" 轮辋配 225/50R18，但成本增加约 $60–80/条。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda HR-V use in Singapore?',
      a: 'Gen 2 RV FL (2024+) and Gen 2 RV e:HEV/Turbo (2021–2023): OE 225/50R18. Gen 2 RV 1.5 base (2021–2023): OE 215/60R17. Gen 1 RU / RU FL (2015–2021): OE 215/55R17, Alt 215/60R16. All HR-V generations use the 5×114.3 bolt pattern.',
    },
    {
      q: 'What is the bolt pattern of the Honda HR-V?',
      a: 'All Honda HR-V generations use the 5×114.3 bolt pattern. Centre bore is 64.1mm, lug nut thread is M12×1.5, tightening torque is 108 Nm.',
    },
    {
      q: 'How much does it cost to change tyres on a Honda HR-V in Singapore?',
      a: 'For 215/55R17 (Gen 1 RU): budget from $98/tyre installed; mid-range $138–$158; premium $168–$195. Full set of 4: budget ~$392, mid ~$552, premium ~$672. For 225/50R18 (Gen 2 RV): budget from $108; mid-range $158–$175; premium $195–$225.',
    },
    {
      q: 'Can I use 215/55R17 instead of 225/50R18 on the Gen 2 HR-V?',
      a: 'Yes, but only if you swap to 17" wheels — the 215/55R17 cannot fit on 18" rims. If you have 18" OE wheels (RV e:HEV / Turbo), stick with 225/50R18 or other 18" options. If you have 17" base wheels, the 215/55R17 is the standard size.',
    },
    {
      q: 'How long do Honda HR-V tyres last in Singapore?',
      a: 'In Singapore, HR-V tyres typically last 3–5 years or 40,000–55,000 km. Budget tyres may need replacing after 30,000 km; premium brands (Michelin, Bridgestone) are rated 50,000+ km. With the higher rolling resistance of the 18" size on the RV, inspect tread depth every 6 months.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Kumho Ecsta HS51 215/55R17',         brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/55R17', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/55R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta HS51 225/50R18',         brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Dunlop SP Sport Maxx 050+ 225/50R18',brand: { '@type': 'Brand', name: 'Dunlop' },      offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/50R18',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '195', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
