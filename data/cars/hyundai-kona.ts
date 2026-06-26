import type { CarData } from './types'

const data: CarData = {
  make: 'Hyundai',
  model: 'Kona',
  makeSlug: 'hyundai',
  modelSlug: 'kona',
  bgWord: 'KONA',

  seo: {
    title: 'Hyundai Kona Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Hyundai Kona SX2 uses 215/60R17 (base) or 235/45R19 (Electric). 5×114.3 bolt. From $101 installed. Compare Bridgestone vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Hyundai Kona SX2: 215/60R17 (ICE) or 235/45R19 (Electric). 5×114.3, CB 67.1mm. From $101 installed in Singapore.',
    twitterDescription: 'Hyundai Kona uses 215/60R17 (ICE) or 235/45R19 (Electric). From $101 installed.',
    priceFrom: 101,
    oeSize: '215/60R17',
  },

  defaultGen: 'sx2',

  generations: [
    {
      key: 'sx2',
      label: 'SX2 (2nd Gen)',
      years: '2023–2026',
      heroChips: [
        { label: 'Petrol OE',      value: '215/60R17' },
        { label: 'Electric OE',    value: '235/45R19' },
        { label: 'From installed', value: '$101', green: true },
      ],
      variants: [
        { name: '1.6T Petrol (all trims)', sizes: [
          { tag: 'OE',  size: '215/60R17', note: 'ICE 标配' },
          { tag: 'Alt', size: '225/55R17', note: '稍宽同直径' },
          { tag: 'Alt', size: '235/50R18', note: '18" 升级' },
        ]},
        { name: 'Electric (EV)', sizes: [
          { tag: 'OE',  size: '235/45R19', note: 'EV 版 19" 标配' },
          { tag: 'Alt', size: '225/50R19', note: '稍窄，降低能耗' },
          { tag: 'Alt', size: '215/60R17', note: '降 17"（需换轮辋）' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2023–2026 · SX2 · EV 19"',    width: '7.5J', diameter: '19"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2023–2026 · SX2 · Petrol 17"', width: '6.5J', diameter: '17"', offset: 'ET48', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '110 Nm',
    notes: 'Hyundai Kona uses 5×114.3 with 67.1mm centre bore — same as Hyundai Tucson, Elantra, and Santa Fe. Compatible with Mazda models.',
  },

  priceTabs: [
    {
      size: '215/60R17',
      tabLabel: '215/60R17 · SX2 Petrol ICE 标配',
      budget: {
        name: 'Blackhawk Agility SUV',
        desc: '紧凑 SUV · 货源充足 · 88 条现货',
        price: 101,
        also: 'Also: Nexen NFERA RU1, Yokohama ES32',
        waText: 'Hyundai Kona SX2 215%2F60R17 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001A',
        desc: 'SUV 静音 · 耐磨 · 88 条现货',
        price: 181,
        also: 'Also: Yokohama Advan V61, Bridgestone Turanza 6',
        waText: 'Hyundai Kona SX2 215%2F60R17 mid-range tyre quote (Bridgestone Alenza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: 'A 级湿地 · 静音 · 城市 SUV 最佳',
        price: 225,
        also: 'Also: Continental CrossContact LX2, Pirelli Scorpion Verde',
        waText: 'Hyundai Kona SX2 215%2F60R17 premium tyre quote (Michelin Primacy 5 or similar)',
      },
      setEstimate: 'Budget $404–$480 · Mid-range $724–$840 · Premium $900–$1,040',
    },
    {
      size: '235/45R19',
      tabLabel: '235/45R19 · SX2 Electric（市场参考价）',
      budget: {
        name: 'Kumho Ecsta PS71 EV Compatible',
        desc: 'EV 专用 · 低噪 · 市场参考',
        price: 154,
        also: 'Also: Nexen NFERA Sport, Hankook Ventus iON',
        waText: 'Hyundai Kona Electric 235%2F45R19 budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001',
        desc: 'EV 静音 · 低滚阻 · 续航友好',
        price: 208,
        also: 'Also: Michelin Primacy SUV+, Goodyear EfficientGrip SUV',
        waText: 'Hyundai Kona Electric 235%2F45R19 mid-range tyre quote (Bridgestone or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: 'EV 专用运动胎 · 最佳操控 + 低滚阻',
        price: 295,
        also: 'Also: Pirelli Scorpion Zero EV, Continental SportContact 7',
        waText: 'Hyundai Kona Electric 235%2F45R19 premium tyre quote (Michelin PS EV or similar)',
      },
      setEstimate: 'Budget $616–$720 · Mid-range $832–$960 · Premium $1,180–$1,360',
    },
  ],

  radarSize: '215/60R17',
  radarSource: 'Blackhawk (14 reviews) · Bridgestone (24 reviews) · Michelin (26 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 72, 76, 68, 84, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nAgility SUV',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [77, 82, 83, 81, 74, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nAlenza 001A',
      stats: [{ k: 'Wet', v: '77', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '81', hi: true }, { k: 'Wear', v: '83', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [84, 86, 85, 84, 74, 82], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 5',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '85', hi: true }, { k: 'Fuel', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Kona SX2 Petrol · 215/60R17 换胎',
      color: 'red',
      genKey: 'sx2',
      body: 'Kona 1.6T 汽油版的 215/60R17 货源充足。推荐 Bridgestone Alenza 001A（$181/条）——SUV 静音耐磨，四条约 $724，适合城市 SUV 用途。预算换 Blackhawk Agility SUV（$101/条），四条仅约 $404。',
    },
    {
      title: 'Kona Electric · 235/45R19 换胎',
      color: 'blue',
      genKey: 'sx2',
      body: 'Kona EV 的 235/45R19 我库目前无货，为市场参考价。EV 专用胎（Kumho Ecsta EV 或 Bridgestone Alenza）比普通胎更静音、滚阻更低，有助于延长续航。可 WhatsApp 询价代订。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Hyundai Kona use in Singapore?',
      a: 'Hyundai Kona SX2 (2023+): 215/60R17 (1.6T Petrol, all trims) or 235/45R19 (Electric). The petrol Kona is the more common version in Singapore.',
    },
    {
      q: 'What is the bolt pattern of the Hyundai Kona?',
      a: 'Hyundai Kona SX2 uses 5×114.3 with 67.1mm centre bore, M12×1.5, 110 Nm — same as Tucson, Elantra, Santa Fe, and Mazda models.',
    },
    {
      q: 'How much does it cost to change Hyundai Kona tyres in Singapore?',
      a: 'For 215/60R17 (petrol): budget $101 (Blackhawk); mid $181 (Bridgestone Alenza, popular); premium $225 (Michelin). Set ~$404–$900. For 235/45R19 (Electric): market reference $154–$295.',
    },
    {
      q: 'What tyre is best for Hyundai Kona Electric in Singapore?',
      a: 'For the Kona Electric, prioritize EV-compatible tyres with low rolling resistance: Bridgestone Alenza 001 or Michelin Pilot Sport EV. These reduce road noise (critical in a quiet EV cabin) and improve electric range by reducing drag.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Agility SUV 215/60R17',      brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '101', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Alenza 001A 215/60R17',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '181', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 5 215/60R17',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '225', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
