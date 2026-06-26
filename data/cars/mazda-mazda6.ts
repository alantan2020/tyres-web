import type { CarData } from './types'

const data: CarData = {
  make: 'Mazda',
  model: 'Mazda6',
  makeSlug: 'mazda',
  modelSlug: 'mazda6',
  bgWord: 'MAZDA6',

  seo: {
    title: 'Mazda6 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mazda6 GJ/GL uses 225/55R17 (base) or 225/45R19 (high). 5×114.3 bolt. From $108 installed. Compare Michelin vs Bridgestone vs Blackhawk. WhatsApp for a quote.',
    ogDescription: 'Mazda6 GJ/GL FL: 225/55R17 (base) or 225/45R19 (high). 5×114.3, CB 67.1mm. From $108. Discontinued in SG 2022 but tyres remain available.',
    twitterDescription: 'Mazda6 uses 225/55R17 (base) or 225/45R19 (high). From $108 installed in Singapore.',
    priceFrom: 108,
    oeSize: '225/55R17',
  },

  defaultGen: 'gj_fl',

  generations: [
    {
      key: 'gj_fl',
      label: 'GJ/GL Facelift',
      years: '2017–2022',
      heroChips: [
        { label: '2.0 / 2.5 base OE', value: '225/55R17' },
        { label: '2.5T high OE',       value: '225/45R19' },
        { label: 'From installed',      value: '$108', green: true },
      ],
      variants: [
        { name: '2.0 SkyActiv-G / 2.5 SkyActiv-G (base/mid)', sizes: [
          { tag: 'OE',  size: '225/55R17', note: '17" 标配，货源充足' },
          { tag: 'Alt', size: '235/50R17', note: '宽胎同直径' },
          { tag: 'Alt', size: '225/50R18', note: '18" 升级' },
        ]},
        { name: '2.5T Turbo (high/top trim)', sizes: [
          { tag: 'OE',  size: '225/45R19', note: '19" 顶配标配' },
          { tag: 'Alt', size: '235/40R19', note: '宽胎' },
          { tag: 'Alt', size: '225/55R17', note: '降回 17"，降成本' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2017–2022 · GJ FL · high 19"', width: '7.5J', diameter: '19"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2017–2022 · GJ FL · base 17"', width: '7J',   diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Mazda6 uses 5×114.3 with 67.1mm centre bore — same as all Mazda models. The Mazda6 was discontinued in Singapore in 2022. 225/55R17 remains a very common size stocked locally.',
  },

  priceTabs: [
    {
      size: '225/55R17',
      tabLabel: '225/55R17 · GJ FL 入门 / 中配标配',
      budget: {
        name: 'Blackhawk Street-H HU71 EV XL',
        desc: '运动轿车 · 货源充足 · 性价比高',
        price: 108,
        also: 'Also: Nexen N\'Priz AH5, Yokohama ES32',
        waText: 'Mazda6 225%2F55R17 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Yokohama BluEarth AE50',
        desc: '低滚阻 · 静音 · 轿车舒适首选',
        price: 173,
        also: 'Also: Bridgestone Turanza 6, Goodyear Assurance Triplemax',
        waText: 'Mazda6 225%2F55R17 mid-range tyre quote (Yokohama AE50 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '最佳湿地 · 豪华轿车定位最配',
        price: 244,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato P7',
        waText: 'Mazda6 225%2F55R17 premium tyre quote (Michelin Primacy 5)',
      },
      setEstimate: 'Budget $432–$510 · Mid-range $692–$800 · Premium $976–$1,120',
    },
    {
      size: '225/45R19',
      tabLabel: '225/45R19 · GJ FL Turbo 19"',
      budget: {
        name: 'Nexen NFERA RU1',
        desc: '19" 性价比 · 运动轿车日常用途',
        price: 165,
        also: 'Also: Kumho Ecsta, Hankook Ventus',
        waText: 'Mazda6 225%2F45R19 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Michelin Pilot Sport 5',
        desc: '运动轿车最佳 19" 选择',
        price: 225,
        also: 'Also: Bridgestone Potenza Sport, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Mazda6 225%2F45R19 mid-range tyre quote (Michelin PS5 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '19" 舒适 + 湿地 · 日常使用最佳平衡',
        price: 248,
        also: 'Also: Continental PremiumContact 7, Pirelli P Zero',
        waText: 'Mazda6 225%2F45R19 premium tyre quote (Michelin Primacy 5)',
      },
      setEstimate: 'Budget $660–$760 · Mid-range $900–$1,040 · Premium $992–$1,140',
    },
  ],

  radarSize: '225/55R17',
  radarSource: 'Blackhawk (16 reviews) · Yokohama (22 reviews) · Michelin (28 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 73, 76, 70, 82, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nStreet-H HU71',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '73', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [76, 80, 82, 80, 78, 80], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Yokohama\nBluEarth AE50',
      stats: [{ k: 'Wet', v: '76', hi: true }, { k: 'Dry', v: '80', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Fuel', v: '78', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [86, 88, 85, 84, 74, 84], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 5',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '85', hi: true }, { k: 'Fuel', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Mazda6 · 225/55R17 换胎',
      color: 'red',
      genKey: 'gj_fl',
      body: 'Mazda6 虽于 2022 年在新加坡停售，但 225/55R17 是库存充足的主流尺码（Blackhawk 98 条、Michelin 87 条、Yokohama 76 条）。推荐 Yokohama BluEarth AE50（$173/条）——静音舒适，适合 Mazda6 的豪华轿车定位，四条约 $692。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mazda6 use in Singapore?',
      a: 'Mazda6 GJ/GL Facelift (2017–2022): OE 225/55R17 (base/mid) or 225/45R19 (Turbo/top trim). The 225/55R17 is the more common size. Mazda6 was discontinued in Singapore in 2022.',
    },
    {
      q: 'What is the bolt pattern of the Mazda6?',
      a: 'Mazda6 uses 5×114.3 with 67.1mm centre bore, M12×1.5, 108 Nm — same as all Mazda models.',
    },
    {
      q: 'How much do Mazda6 tyres cost in Singapore?',
      a: 'For 225/55R17: from $108 (Blackhawk); mid $173 (Yokohama AE50, popular); premium $244 (Michelin Primacy 5). Full set ~$432–$976. For 225/45R19 (Turbo): $165–$248.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Street-H HU71 225/55R17', brand: { '@type': 'Brand', name: 'Blackhawk' }, offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Yokohama BluEarth AE50 225/55R17',  brand: { '@type': 'Brand', name: 'Yokohama' }, offers: { '@type': 'Offer', price: '173', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 5 225/55R17',      brand: { '@type': 'Brand', name: 'Michelin' }, offers: { '@type': 'Offer', price: '244', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
