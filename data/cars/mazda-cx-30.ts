import type { CarData } from './types'

const data: CarData = {
  make: 'Mazda',
  model: 'CX-30',
  makeSlug: 'mazda',
  modelSlug: 'cx-30',
  bgWord: 'CX30',

  seo: {
    title: 'Mazda CX-30 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mazda CX-30 DM uses 215/65R16 (base) or 215/55R18 (high trims). 5×114.3 bolt. From $88 installed. Compare Michelin vs Yokohama. WhatsApp for a quote.',
    ogDescription: 'Mazda CX-30 DM: 215/65R16 (base) or 215/55R18 (high). 5×114.3, CB 67.1mm. From $88 installed in Singapore.',
    twitterDescription: 'Mazda CX-30 uses 215/65R16 or 215/55R18. From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '215/65R16',
  },

  defaultGen: 'dm',

  generations: [
    {
      key: 'dm',
      label: 'DM (1st Gen)',
      years: '2019–2026',
      heroChips: [
        { label: '2.0 base OE',  value: '215/65R16' },
        { label: '2.0 high OE',  value: '215/55R18' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '2.0 SkyActiv-G / e-SKYACTIV X (base/mid)', sizes: [
          { tag: 'OE',  size: '215/65R16', note: '16" 标配，货源充足' },
          { tag: 'Alt', size: '225/60R16', note: '同轮径稍宽' },
          { tag: 'Alt', size: '215/55R17', note: '17" 升级' },
        ]},
        { name: '2.0 SkyActiv-G / e-SKYACTIV X (high/top trim)', sizes: [
          { tag: 'OE',  size: '215/55R18', note: '18" 高配标配' },
          { tag: 'Alt', size: '225/50R18', note: '18" 宽胎升级' },
          { tag: 'Alt', size: '215/65R16', note: '降 16"，降低换胎成本' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019–2026 · DM · high trim 18"', width: '7J',   diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2019–2026 · DM · base 16"',      width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Mazda CX-30 uses 5×114.3 with 67.1mm centre bore — same as all Mazda passenger models (CX-5, Mazda3, CX-3). Wheels interchangeable within Mazda lineup. Also fits Hyundai Tucson / Elantra (same CB 67.1mm).',
  },

  priceTabs: [
    {
      size: '215/65R16',
      tabLabel: '215/65R16 · DM 入门 / 中配标配',
      budget: {
        name: 'Blackhawk Agility SUV',
        desc: 'SUV 用途 · 耐磨 · 价格亲民',
        price: 88,
        also: 'Also: Nexen NFERA RU1, Triangle TR259',
        waText: 'Mazda CX-30 215%2F65R16 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Yokohama BluEarth A580',
        desc: '静音 · 舒适 · 日常通勤首选',
        price: 134,
        also: 'Also: Bridgestone Alenza 001, Dunlop SP Touring R1',
        waText: 'Mazda CX-30 215%2F65R16 mid-range tyre quote (Yokohama A580 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地 · 低滚阻 · CX-30 性能调校完美匹配',
        price: 198,
        also: 'Also: Continental CrossContact LX2, Pirelli Scorpion Verde',
        waText: 'Mazda CX-30 215%2F65R16 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $352–$420 · Mid-range $536–$620 · Premium $792–$900',
    },
    {
      size: '215/55R18',
      tabLabel: '215/55R18 · DM 高配 18"',
      budget: {
        name: 'Kumho Ecsta HS51',
        desc: '18" 性价比 · 市场常见参考价',
        price: 119,
        also: 'Also: Triangle EffeXSport, Dunlop SpMaxx050',
        waText: 'Mazda CX-30 215%2F55R18 budget tyre quote',
      },
      mid: {
        name: 'Dunlop SP Sport Maxx 050',
        desc: '静音 · 运动感 · 18" 平衡之选',
        price: 157,
        also: 'Also: Goodyear Assurance MaxGuard SUV, Nexen NFERA SU1',
        waText: 'Mazda CX-30 215%2F55R18 mid-range tyre quote (Dunlop or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '最佳湿地 · 低滚阻 · 18" 首选',
        price: 210,
        also: 'Also: Continental PremiumContact 7, Goodyear EfficientGrip Performance',
        waText: 'Mazda CX-30 215%2F55R18 premium tyre quote (Michelin Primacy 5)',
      },
      setEstimate: 'Budget $476–$560 · Mid-range $628–$730 · Premium $840–$960',
    },
  ],

  radarSize: '215/65R16',
  radarSource: 'Blackhawk (14 reviews) · Yokohama (26 reviews) · Michelin (28 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 73, 76, 68, 84, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nAgility SUV',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '73', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [76, 80, 82, 80, 74, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Yokohama\nBluEarth A580',
      stats: [{ k: 'Wet', v: '76', hi: true }, { k: 'Dry', v: '80', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [83, 85, 84, 84, 72, 82], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy SUV+',
      stats: [{ k: 'Wet', v: '83', hi: true }, { k: 'Dry', v: '85', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Fuel', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'CX-30 · 215/65R16 基础 / 中配车主',
      color: 'red',
      genKey: 'dm',
      body: 'CX-30 入门版的 215/65R16 货源充裕，推荐 Yokohama BluEarth A580（$134/条）——综合评分高，静音耐磨，四条约 $536。Mazda 的 GVC Plus 车身稳定系统对轮胎侧壁要求较高，不建议换极低扁平比。',
    },
    {
      title: 'CX-30 · 215/55R18 高配车主',
      color: 'blue',
      genKey: 'dm',
      body: '高配 18" 的 215/55R18 我库目前没有现货，以上为市场参考价。如果换胎成本是考量，可以考虑购置一套 16" 轮辋换用 215/65R16——价格节省 30–40%，舒适性也会提升。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mazda CX-30 use in Singapore?',
      a: 'Mazda CX-30 DM: 215/65R16 (base/mid trims) or 215/55R18 (high/top trims). The 16" size is more common and significantly cheaper to replace than the 18".',
    },
    {
      q: 'What is the bolt pattern of the Mazda CX-30?',
      a: 'Mazda CX-30 uses 5×114.3 with 67.1mm centre bore — same as all Mazda models (CX-5, CX-3, Mazda3). Lug M12×1.5, torque 108 Nm.',
    },
    {
      q: 'How much does it cost to change Mazda CX-30 tyres in Singapore?',
      a: 'For 215/65R16: budget $88 (Blackhawk); mid $134 (Yokohama A580); premium $198 (Michelin). Full set ~$352–$792. For 215/55R18: market reference $119–$210. We stock the 16" size; the 18" is available on request.',
    },
    {
      q: 'Can I use CX-5 wheels on a CX-30?',
      a: 'CX-5 and CX-30 share the same bolt pattern (5×114.3, CB 67.1mm) and stud size, so the bolt pattern fits. However, rim width, offset, and tyre size differ — a CX-5 17" wheel (7J, ET50) may interfere with the CX-30 brake caliper or bodywork. Confirm fitment with a professional before swapping.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Agility SUV 215/65R16',    brand: { '@type': 'Brand', name: 'Blackhawk' }, offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Yokohama BluEarth A580 215/65R16',   brand: { '@type': 'Brand', name: 'Yokohama' }, offers: { '@type': 'Offer', price: '134', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 215/65R16',    brand: { '@type': 'Brand', name: 'Michelin' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
