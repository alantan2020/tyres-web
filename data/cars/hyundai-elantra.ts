import type { CarData } from './types'

const data: CarData = {
  make: 'Hyundai',
  model: 'Elantra',
  makeSlug: 'hyundai',
  modelSlug: 'elantra',
  bgWord: 'ELANTRA',

  seo: {
    title: 'Hyundai Elantra Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Hyundai Elantra CN7 uses 195/65R15 (base), 205/55R16 (mid) or 225/45R17 (Sport). 5×114.3 bolt. From $81 installed. Compare Bridgestone vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Hyundai Elantra CN7: 195/65R15 base, 205/55R16 mid, 225/45R17 Sport/N. 5×114.3, CB 67.1mm. From $81 installed.',
    twitterDescription: 'Hyundai Elantra uses 195/65R15 (base), 205/55R16 (mid), or 225/45R17 (Sport). From $81 installed.',
    priceFrom: 81,
    oeSize: '205/55R16',
  },

  defaultGen: 'cn7',

  generations: [
    {
      key: 'cn7',
      label: 'CN7 (7th Gen)',
      years: '2021–2026',
      heroChips: [
        { label: 'Smart OE',       value: '195/65R15' },
        { label: 'Premium OE',     value: '205/55R16' },
        { label: 'Sport / N OE',   value: '225/45R17' },
        { label: 'From installed', value: '$81', green: true },
      ],
      variants: [
        { name: '1.6 MPI / 1.6T (base/Smart trim)', sizes: [
          { tag: 'OE',  size: '195/65R15', note: '最低配 15" 标配' },
          { tag: 'Alt', size: '205/60R15', note: '稍宽同直径' },
          { tag: 'Alt', size: '205/55R16', note: '升 16"' },
        ]},
        { name: '1.6T (mid/Premium trim)', sizes: [
          { tag: 'OE',  size: '205/55R16', note: '主力配置，货源最充足' },
          { tag: 'Alt', size: '215/50R16', note: '稍宽 16"' },
          { tag: 'Alt', size: '215/45R17', note: '17" 升级' },
        ]},
        { name: '1.6T Sport / N-Line (sport trim)', sizes: [
          { tag: 'OE',  size: '225/45R17', note: '运动版标配' },
          { tag: 'Alt', size: '235/40R17', note: '宽胎' },
          { tag: 'Alt', size: '235/40R18', note: '18" 升级' },
        ]},
      ],
    },
    {
      key: 'ad_fl',
      label: 'AD Facelift (6th Gen)',
      years: '2018–2021',
      heroChips: [
        { label: 'All OE', value: '205/60R16' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.6 MPI / 2.0 MPI (all trims)', sizes: [
          { tag: 'OE',  size: '205/60R16', note: '全系标配' },
          { tag: 'Alt', size: '215/55R16', note: '稍宽同直径' },
          { tag: 'Alt', size: '215/50R17', note: '17" 升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021–2026 · CN7 · Sport/N-Line 17"', width: '7J',   diameter: '17"', offset: 'ET48', boltPattern: '5×114.3' },
    { label: '2021–2026 · CN7 · mid 16"',          width: '6.5J', diameter: '16"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2021–2026 · CN7 · base 15"',         width: '6J',   diameter: '15"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2018–2021 · AD FL · 16"',            width: '6.5J', diameter: '16"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '110 Nm',
    notes: 'Hyundai Elantra uses 5×114.3 with 67.1mm centre bore — same as Hyundai Tucson, Kona, and Santa Fe. Compatible with Mazda models (also 5×114.3 CB 67.1mm). Torque 110 Nm.',
  },

  priceTabs: [
    {
      size: '205/55R16',
      tabLabel: '205/55R16 · CN7 中配主力（货源最充足）',
      budget: {
        name: 'Blackhawk Street-H HH31 EV XL',
        desc: '城市轿车 · 200 条现货 · 省油',
        price: 88,
        also: 'Also: Nexen N\'Priz AH5, Yokohama ES32',
        waText: 'Hyundai Elantra CN7 205%2F55R16 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Yokohama BluEarth ES32',
        desc: '静音 · 低滚阻 · 城市轿车首选',
        price: 109,
        also: 'Also: Bridgestone Ecopia EP300, Dunlop SP Touring R1',
        waText: 'Hyundai Elantra CN7 205%2F55R16 mid-range tyre quote (Yokohama ES32 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Ecopia EP300',
        desc: '低碳 · 省油 · 轿车环保首选',
        price: 138,
        also: 'Also: Michelin Energy XM2+, Continental EcoContact 6',
        waText: 'Hyundai Elantra CN7 205%2F55R16 premium tyre quote (Bridgestone EP300 or similar)',
      },
      setEstimate: 'Budget $352–$420 · Mid-range $436–$510 · Premium $552–$640',
    },
    {
      size: '225/45R17',
      tabLabel: '225/45R17 · CN7 Sport / N-Line',
      budget: {
        name: 'Blackhawk Street-H HU71 EV XL',
        desc: '运动向 · 417 条大量现货 · 性价比极高',
        price: 101,
        also: 'Also: Nexen N\'Fera Sport, Kumho Ecsta',
        waText: 'Hyundai Elantra N-Line 225%2F45R17 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Michelin Primacy 5',
        desc: '运动 + 舒适平衡 · 湿地最短制动',
        price: 195,
        also: 'Also: Michelin PS5, Bridgestone Potenza, Continental PC7',
        waText: 'Hyundai Elantra N-Line 225%2F45R17 mid-range tyre quote (Michelin Primacy 5 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '干地操控最强 · Elantra N 极品配置',
        price: 230,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Hyundai Elantra N-Line 225%2F45R17 premium tyre quote (Michelin PS5 or similar)',
      },
      setEstimate: 'Budget $404–$480 · Mid-range $780–$900 · Premium $920–$1,060',
    },
    {
      size: '195/65R15',
      tabLabel: '195/65R15 · CN7 基础版',
      budget: {
        name: 'Blackhawk Street-H HH16',
        desc: '经济实惠 · 255 条大量现货',
        price: 81,
        also: 'Also: Yokohama A580, Nexen N\'Priz AH5',
        waText: 'Hyundai Elantra CN7 195%2F65R15 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Yokohama BluEarth AE50',
        desc: '低滚阻 · 省油 · 小预算最佳升级',
        price: 83,
        also: 'Also: Bridgestone Ecopia EP150, Michelin XM2+',
        waText: 'Hyundai Elantra CN7 195%2F65R15 mid-range tyre quote (Yokohama AE50 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Energy XM2+',
        desc: 'A+ 滚阻 · 省油最强 · 经济型轿车最合适',
        price: 105,
        also: 'Also: Continental EcoContact 6, Bridgestone EP300',
        waText: 'Hyundai Elantra CN7 195%2F65R15 premium tyre quote (Michelin XM2%2B)',
      },
      setEstimate: 'Budget $324–$380 · Mid-range $332–$400 · Premium $420–$490',
    },
  ],

  radarSize: '205/55R16',
  radarSource: 'Blackhawk (16 reviews) · Yokohama (22 reviews) · Bridgestone (26 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 72, 76, 68, 84, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nStreet-H HH31',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.0',
      scores: [75, 80, 80, 80, 78, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Yokohama\nBluEarth ES32',
      stats: [{ k: 'Wet', v: '75', hi: true }, { k: 'Dry', v: '80', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Fuel', v: '78', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.3',
      scores: [78, 82, 82, 84, 82, 80], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nEcopia EP300',
      stats: [{ k: 'Wet', v: '78', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'Wear', v: '84', hi: true }, { k: 'Fuel', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Elantra CN7 · 205/55R16 中配车主',
      color: 'red',
      genKey: 'cn7',
      body: 'CN7 中配的 205/55R16 是新加坡最畅销轿车尺码之一（库存 300 条+）。推荐 Yokohama BluEarth ES32（$109/条）——低滚阻省油，静音，适合日常通勤，四条约 $436。Elantra 是实用轿车定位，不需要运动胎——省油和湿地安全才是重点。',
    },
    {
      title: 'Elantra N-Line / Sport · 225/45R17 车主',
      color: 'blue',
      genKey: 'cn7',
      body: 'N-Line 和 Sport 版的 225/45R17 在我库有 417 条 Blackhawk HU71（$101/条），是新加坡最实惠的运动轿车方案之一，四条约 $404。如果驾驶风格积极，升选 Michelin Primacy 5（$195/条）——湿地制动最短，运动感保留。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Hyundai Elantra use in Singapore?',
      a: 'Hyundai Elantra CN7 (2021+): 195/65R15 (base/Smart), 205/55R16 (mid/Premium), 225/45R17 (Sport/N-Line), 235/40R18 (N Performance). The 205/55R16 is the most common size.',
    },
    {
      q: 'What is the bolt pattern of the Hyundai Elantra?',
      a: 'Hyundai Elantra CN7 uses 5×114.3 with 67.1mm centre bore, M12×1.5, 110 Nm — same as Hyundai Tucson, Kona, Santa Fe, and all Mazda models.',
    },
    {
      q: 'How much does it cost to change Hyundai Elantra tyres in Singapore?',
      a: 'For 205/55R16: budget $88 (Blackhawk); mid $109 (Yokohama ES32, popular); premium $138 (Bridgestone EP300). Set ~$352–$552. For 225/45R17 (N-Line): budget $101 (Blackhawk); mid $195 (Michelin P5). For 195/65R15 (base): from $81.',
    },
    {
      q: 'What is the best tyre for Hyundai Elantra in Singapore?',
      a: 'For mid-trim 205/55R16: Yokohama BluEarth ES32 ($109) — best combination of fuel efficiency and comfort for daily commuting. For N-Line 225/45R17: Michelin Primacy 5 ($195) for safety, or Michelin Pilot Sport 5 ($230) if you enjoy spirited driving.',
    },
    {
      q: 'What is the difference between Elantra and Elantra N in tyre size?',
      a: 'Standard Elantra uses 205/55R16 (mid) or 225/45R17 (Sport trim). Elantra N (performance model) uses 235/40R18 — a wider, lower-profile size for maximum grip. The N is not officially sold in Singapore, but grey imports exist.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Street-H HH31 205/55R16', brand: { '@type': 'Brand', name: 'Blackhawk' }, offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Yokohama BluEarth ES32 205/55R16',  brand: { '@type': 'Brand', name: 'Yokohama' }, offers: { '@type': 'Offer', price: '109', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 205/55R16', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Blackhawk Street-H HU71 225/45R17', brand: { '@type': 'Brand', name: 'Blackhawk' }, offers: { '@type': 'Offer', price: '101', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Michelin Primacy 5 225/45R17',       brand: { '@type': 'Brand', name: 'Michelin' }, offers: { '@type': 'Offer', price: '195', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
