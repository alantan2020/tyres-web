import type { CarData } from './types'

const data: CarData = {
  make: 'Hyundai',
  model: 'Santa Fe',
  makeSlug: 'hyundai',
  modelSlug: 'santa-fe',
  bgWord: 'SANTAFE',

  seo: {
    title: 'Hyundai Santa Fe Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Hyundai Santa Fe MX5 uses 235/60R18 (base) or 235/55R19 (high). 5×114.3 bolt. From $219 installed. Compare Bridgestone vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Hyundai Santa Fe MX5: 235/60R18 (base) to 235/55R19 (high). 5×114.3, CB 67.1mm. From $219 installed.',
    twitterDescription: 'Hyundai Santa Fe uses 235/60R18 (base) or 235/55R19 (high). From $219 installed in Singapore.',
    priceFrom: 219,
    oeSize: '235/60R18',
  },

  defaultGen: 'mx5',

  generations: [
    {
      key: 'mx5',
      label: 'MX5 (5th Gen)',
      years: '2023–2026',
      heroChips: [
        { label: 'Premium OE',     value: '235/60R18' },
        { label: 'Calligraphy OE', value: '235/55R19' },
        { label: 'From installed', value: '$219', green: true },
      ],
      variants: [
        { name: '1.6T / 2.5T (Premium trim)', sizes: [
          { tag: 'OE',  size: '235/60R18', note: '标配，与 Tucson 同尺码' },
          { tag: 'Alt', size: '245/55R18', note: '稍宽同直径' },
          { tag: 'Alt', size: '235/55R19', note: '升 19"' },
        ]},
        { name: '1.6T Hybrid / 2.5T (Calligraphy / high trim)', sizes: [
          { tag: 'OE',  size: '235/55R19', note: '顶配 / 混动 19" 标配' },
          { tag: 'Alt', size: '245/50R19', note: '19" 宽胎' },
          { tag: 'Alt', size: '235/60R18', note: '降 18"，舒适省钱' },
        ]},
      ],
    },
    {
      key: 'tm_fl',
      label: 'TM Facelift (4th Gen)',
      years: '2021–2023',
      heroChips: [
        { label: 'Smart OE',       value: '235/65R17' },
        { label: 'Premium OE',     value: '235/60R18' },
        { label: 'From installed', value: '$219', green: true },
      ],
      variants: [
        { name: '2.5L (Smart/base trim)', sizes: [
          { tag: 'OE',  size: '235/65R17', note: 'Smart 17" 标配（我库无货）' },
          { tag: 'Alt', size: '245/60R17', note: '稍宽同直径' },
        ]},
        { name: '2.5L / 2.5T (Premium / high)', sizes: [
          { tag: 'OE',  size: '235/60R18', note: '中高配 18" 标配' },
          { tag: 'OE',  size: '235/55R19', note: 'Calligraphy / PHEV 19"' },
          { tag: 'OE',  size: '255/45R20', note: '20" 顶配（极少见）' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2023–2026 · MX5 · Calligraphy 19"', width: '7.5J', diameter: '19"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2023–2026 · MX5 · Premium 18"',     width: '7J',   diameter: '18"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2021–2023 · TM FL · top 19"',       width: '7.5J', diameter: '19"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2021–2023 · TM FL · mid 18"',       width: '7J',   diameter: '18"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2021–2023 · TM FL · base 17"',      width: '6.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '110 Nm',
    notes: 'Hyundai Santa Fe uses 5×114.3 with 67.1mm centre bore — same as Tucson, Elantra, Kona. The 235/60R18 size is also shared with the Tucson NX4 mid-trim and Mazda CX-60 base.',
  },

  priceTabs: [
    {
      size: '235/60R18',
      tabLabel: '235/60R18 · MX5 主力（货源充足，同 Tucson）',
      budget: {
        name: 'Bridgestone Alenza 001',
        desc: 'SUV 舒适 · 183 条现货 · 耐磨',
        price: 219,
        also: 'Also: Yokohama Geolandar H/T G056, Nexen NFERA RU1',
        waText: 'Hyundai Santa Fe MX5 235%2F60R18 budget tyre quote (Bridgestone Alenza or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6 XL',
        desc: 'A 级湿地 · 静音 · 7 座 SUV 首选',
        price: 250,
        also: 'Also: Michelin Primacy SUV+, Goodyear Assurance MaxGuard',
        waText: 'Hyundai Santa Fe MX5 235%2F60R18 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '操控性最佳 · 2.5T 旗舰 Santa Fe 终极配置',
        price: 281,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Zero',
        waText: 'Hyundai Santa Fe MX5 235%2F60R18 premium tyre quote (Michelin PS4 SUV or similar)',
      },
      setEstimate: 'Budget $876–$1,000 · Mid-range $1,000–$1,150 · Premium $1,124–$1,280',
    },
    {
      size: '235/55R19',
      tabLabel: '235/55R19 · MX5 Calligraphy / TM FL 高配',
      budget: {
        name: 'Bridgestone Dueler H/L 400',
        desc: 'SUV 高速稳定 · 62 条现货',
        price: 225,
        also: 'Also: Yokohama Advan V61, Nexen NFERA RU1',
        waText: 'Hyundai Santa Fe 235%2F55R19 budget tyre quote (Bridgestone Dueler or similar)',
      },
      mid: {
        name: 'Yokohama Advan V61 E+',
        desc: '运动 SUV · 静音 · 54 条现货',
        price: 230,
        also: 'Also: Bridgestone Alenza 001, Michelin Primacy SUV+',
        waText: 'Hyundai Santa Fe 235%2F55R19 mid-range tyre quote (Yokohama V61 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地 · 低滚阻 · 混动版续航友好',
        price: 285,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde',
        waText: 'Hyundai Santa Fe 235%2F55R19 premium tyre quote (Michelin Primacy SUV%2B or similar)',
      },
      setEstimate: 'Budget $900–$1,040 · Mid-range $920–$1,060 · Premium $1,140–$1,300',
    },
  ],

  radarSize: '235/60R18',
  radarSource: 'Bridgestone (26 reviews) · Yokohama (22 reviews) · Michelin (30 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'In-stock', labelClass: 'tier', score: '8.1',
      scores: [78, 82, 84, 80, 74, 76], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Bridgestone\nAlenza 001',
      stats: [{ k: 'Wet', v: '78', hi: true }, { k: 'Dry', v: '82', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [82, 84, 85, 83, 74, 80], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza 6 XL',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '83', hi: true }, { k: 'Wear', v: '85', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [86, 90, 82, 84, 70, 80], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4 SUV',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '82', hi: false }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Santa Fe MX5 · 235/60R18 入门 / 中配车主',
      color: 'red',
      genKey: 'mx5',
      body: 'Santa Fe 的 235/60R18 与 Hyundai Tucson 中配完全通用，货源充足。推荐 Bridgestone Turanza 6 XL（$250/条）——7 座 SUV 静音首选，A 级湿地，四条约 $1,000。Santa Fe 是家庭 SUV，安全性优先——不建议选运动胎。',
    },
    {
      title: 'Santa Fe · 235/55R19 高配车主',
      color: 'blue',
      genKey: 'mx5',
      body: '高配 235/55R19 我库有货（Bridgestone Dueler H/L400 $225、Yokohama Advan V61 $230）。Calligraphy 顶配或 Hybrid 车主建议 Michelin Primacy SUV+（$285/条）——低滚阻有助于混动燃油效率，四条约 $1,140。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Hyundai Santa Fe use in Singapore?',
      a: 'Hyundai Santa Fe MX5 (2023+): 235/60R18 (Premium base) or 235/55R19 (Calligraphy/Hybrid top). TM Facelift (2021–2023): 235/65R17 (base), 235/60R18 (mid), 235/55R19 (Calligraphy), or 255/45R20 (top). The 235/60R18 is the most common size.',
    },
    {
      q: 'What is the bolt pattern of the Hyundai Santa Fe?',
      a: 'Hyundai Santa Fe uses 5×114.3 with 67.1mm centre bore, M12×1.5, 110 Nm — same as all Hyundai models and Mazda.',
    },
    {
      q: 'How much does it cost to change Hyundai Santa Fe tyres in Singapore?',
      a: 'For 235/60R18: from $219 (Bridgestone Alenza) to $281 (Michelin PS4 SUV). Full set ~$876–$1,124. For 235/55R19: $225–$285 per tyre, set ~$900–$1,140.',
    },
    {
      q: 'Are Hyundai Santa Fe and Tucson tyres interchangeable?',
      a: 'The 235/60R18 size is shared between Santa Fe MX5 (base) and Tucson NX4 (mid) — the same tyre fits both. They also share the same bolt pattern (5×114.3, CB 67.1mm). However, rim offsets may differ, so confirm before swapping wheels.',
    },
    {
      q: 'What is the best tyre for Hyundai Santa Fe Hybrid in Singapore?',
      a: 'For Santa Fe Hybrid (235/60R18 or 235/55R19): Michelin Primacy SUV+ — A-rated rolling resistance helps preserve fuel efficiency in hybrid mode. Avoid high-performance tyres that increase rolling resistance and reduce fuel economy.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 235/60R18',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '219', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 XL 235/60R18', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '250', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin PS4 SUV 235/60R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '281', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Bridgestone Dueler HL400 235/55R19', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '225', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Yokohama Advan V61 E+ 235/55R19',   brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '230', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
