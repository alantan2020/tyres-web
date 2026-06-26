import type { CarData } from './types'

const data: CarData = {
  make: 'Mazda',
  model: 'Mazda3',
  makeSlug: 'mazda',
  modelSlug: 'mazda3',
  bgWord: 'MAZDA3',

  seo: {
    title: 'Mazda3 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mazda3 BP (4th Gen) uses 205/60R16 (base) or 215/45R18 (high). 5×114.3 bolt. From $88 installed. Compare Michelin vs Bridgestone vs Yokohama. WhatsApp for a quote.',
    ogDescription: 'Mazda3 BP: 205/60R16 (base) or 215/45R18 (high). 5×114.3, CB 67.1mm. From $88 installed in Singapore.',
    twitterDescription: 'Mazda3 uses 205/60R16 (base) or 215/45R18 (top). From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '205/60R16',
  },

  defaultGen: 'bp',

  generations: [
    {
      key: 'bp',
      label: 'BP (4th Gen)',
      years: '2019–2026',
      heroChips: [
        { label: '2.0 base OE',     value: '205/60R16' },
        { label: '2.0 Sport OE',    value: '215/45R18' },
        { label: 'From installed',  value: '$88', green: true },
      ],
      variants: [
        { name: '2.0 SkyActiv-G (base/mid — Sedan and Hatchback)', sizes: [
          { tag: 'OE',  size: '205/60R16', note: '标配，货源极充足' },
          { tag: 'Alt', size: '205/55R17', note: '17" 升级，同直径' },
          { tag: 'Alt', size: '215/50R17', note: '稍宽 17"' },
        ]},
        { name: '2.0 SkyActiv-G (high trim / Turbo Sport)', sizes: [
          { tag: 'OE',  size: '215/45R18', note: '顶配 18" 标配' },
          { tag: 'Alt', size: '225/40R18', note: '宽胎升级' },
          { tag: 'Alt', size: '205/60R16', note: '降 16"，舒适性更好' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019–2026 · BP · top 18"',  width: '7J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2019–2026 · BP · base 16"', width: '6.5J', diameter: '16"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Mazda3 uses 5×114.3 with 67.1mm centre bore — same across all Mazda models. Compatible with Hyundai Elantra / Tucson (also 5×114.3 CB 67.1mm). Toyota Corolla Altis shares the bolt pattern but with CB 60.1mm — not directly interchangeable.',
  },

  priceTabs: [
    {
      size: '205/60R16',
      tabLabel: '205/60R16 · BP 入门 / 中配标配',
      budget: {
        name: 'Blackhawk Street-H HH31 EV',
        desc: '城市用途 · 货源极充足（500+ 条）· 性价比高',
        price: 88,
        also: 'Also: Nexen N\'Priz AH5, Yokohama ES32',
        waText: 'Mazda3 205%2F60R16 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6',
        desc: '静音 · 舒适 · A 级湿地 · 轿车首选',
        price: 158,
        also: 'Also: Yokohama Advan V61, Goodyear Assurance Triplemax 2',
        waText: 'Mazda3 205%2F60R16 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 5',
        desc: '最佳干地 + 湿地 · 操控感与 Mazda3 运动定位完美匹配',
        price: 212,
        also: 'Also: Michelin Primacy 5, Pirelli Cinturato Rosso',
        waText: 'Mazda3 205%2F60R16 premium tyre quote (Continental PC5 or similar)',
      },
      setEstimate: 'Budget $352–$420 · Mid-range $632–$730 · Premium $848–$960',
    },
    {
      size: '215/45R18',
      tabLabel: '215/45R18 · BP 高配 18"',
      budget: {
        name: 'Nexen NFERA SU1',
        desc: '18" 运动向 · 性价比首选',
        price: 157,
        also: 'Also: Kumho Ecsta PS71, Pirelli Rosso',
        waText: 'Mazda3 215%2F45R18 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Michelin Primacy 5',
        desc: '18" 舒适 + 湿地 · 适合日常通勤高配 Mazda3',
        price: 196,
        also: 'Also: Goodyear Eagle F1 Asymmetric 6, Continental PC7',
        waText: 'Mazda3 215%2F45R18 mid-range tyre quote (Michelin Primacy 5 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '最佳干地操控 · Mazda3 Turbo / 运动款终极配置',
        price: 245,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Mazda3 215%2F45R18 premium tyre quote (Michelin PS5 or similar)',
      },
      setEstimate: 'Budget $628–$730 · Mid-range $784–$900 · Premium $980–$1,120',
    },
  ],

  radarSize: '205/60R16',
  radarSource: 'Blackhawk (18 reviews) · Bridgestone (26 reviews) · Continental (24 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 73, 76, 68, 84, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nStreet-H HH31 EV',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '73', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [81, 83, 85, 83, 76, 80], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza 6',
      stats: [{ k: 'Wet', v: '81', hi: true }, { k: 'Dry', v: '83', hi: true }, { k: 'NVH', v: '83', hi: true }, { k: 'Wear', v: '85', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [86, 88, 84, 85, 72, 84], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Continental\nPremiumContact 5',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '85', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Mazda3 BP · 205/60R16 入门 / 中配车主',
      color: 'red',
      genKey: 'bp',
      body: 'BP Mazda3 入门版的 205/60R16 货源极充足，是新加坡库存最多的尺码之一（500+ 条）。推荐 Bridgestone Turanza 6（$158/条）——静音舒适，A 级湿地，整套约 $632，非常适合每日通勤。Mazda3 底盘调校偏运动，一条好轮胎会让底盘潜力充分发挥。',
    },
    {
      title: 'Mazda3 BP · 215/45R18 高配 / Turbo 车主',
      color: 'blue',
      genKey: 'bp',
      body: '高配 215/45R18 属于低扁平比运动尺码，市场参考价 $157–$245。喜欢日常舒适首选 Michelin Primacy 5（~$196）；如果追求操控极致可上 Michelin Pilot Sport 5（~$245），是 Mazda3 Turbo 的最佳搭档。这个尺码我库目前无货，可 WhatsApp 询价代订。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mazda3 use in Singapore?',
      a: 'Mazda3 BP (2019–present): OE 205/60R16 (base/mid trims) or 215/45R18 (high trim / Turbo Sport). The 205/60R16 is by far the most common size. Earlier Mazda3 BN (2014–2018) used 205/65R16 (base) or 205/55R17 (higher trims).',
    },
    {
      q: 'What is the bolt pattern of the Mazda3?',
      a: 'Mazda3 BP uses 5×114.3 with 67.1mm centre bore, M12×1.5 studs, 108 Nm torque. Same as all Mazda models and Hyundai Tucson / Elantra.',
    },
    {
      q: 'How much does it cost to change Mazda3 tyres in Singapore?',
      a: 'For 205/60R16 (base): budget $88 (Blackhawk); mid $158 (Bridgestone Turanza 6); premium $212 (Continental PC5). Full set ~$352–$848. For 215/45R18 (top): market reference $157–$245.',
    },
    {
      q: 'What is the best tyre for Mazda3 in Singapore?',
      a: 'For 205/60R16: Bridgestone Turanza 6 ($158) for most owners — best balance of quiet ride and wet safety. Continental PremiumContact 5 ($212) for those who enjoy Mazda3\'s sporty feel. For 215/45R18 high-trim: Michelin Primacy 5 for comfort, or Pilot Sport 5 if you track-drive.',
    },
    {
      q: 'Is the Mazda3 Turbo available in Singapore?',
      a: 'Yes, the Mazda3 2.0T Turbo (2021+) is available in Singapore. It uses 215/45R18 tyres on 18" rims. The Turbo delivers 186 hp and is known for its sporty handling — pair it with performance-oriented tyres like Michelin Pilot Sport 5 or Bridgestone Potenza Sport for best results.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Street-H HH31 EV 205/60R16', brand: { '@type': 'Brand', name: 'Blackhawk' },    offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 205/60R16',      brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Continental PremiumContact 5 205/60R16', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '212', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
