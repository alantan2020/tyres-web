import type { CarData } from './types'

const data: CarData = {
  make: 'Kia',
  model: 'EV6',
  makeSlug: 'kia',
  modelSlug: 'ev6',
  bgWord: 'EV6',

  seo: {
    title: 'Kia EV6 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Kia EV6 CV uses 235/60R18 (Standard Range) or 235/55R19 (Long Range). 5×114.3 bolt. From $142 installed. EV-compatible low rolling resistance tyres. WhatsApp for a quote.',
    ogDescription: 'Kia EV6 CV: 235/60R18 (Standard Range) or 235/55R19 (Long Range AWD). 5×114.3, CB 67.1mm. From $142 installed.',
    twitterDescription: 'Kia EV6 uses 235/60R18 (Standard) or 235/55R19 (Long Range). From $142 installed in Singapore.',
    priceFrom: 142,
    oeSize: '235/55R19',
  },

  defaultGen: 'cv',

  generations: [
    {
      key: 'cv',
      label: 'CV (1st Gen)',
      years: '2022–2026',
      heroChips: [
        { label: 'Standard OE',    value: '235/60R18' },
        { label: 'Long Range OE',  value: '235/55R19' },
        { label: 'From installed', value: '$142', green: true },
      ],
      variants: [
        { name: 'Standard Range RWD (Air)', sizes: [
          { tag: 'OE',  size: '235/60R18', note: 'Standard Range 标配' },
          { tag: 'Alt', size: '235/55R19', note: '升 19"，Long Range 尺码' },
        ]},
        { name: 'Long Range RWD / AWD (Earth / GT-Line)', sizes: [
          { tag: 'OE',  size: '235/55R19', note: 'Long Range 19" 标配' },
          { tag: 'OE',  size: '255/45R20', note: 'GT-Line 20"（市场参考）' },
          { tag: 'Alt', size: '235/60R18', note: '降 18"，降噪省电' },
        ]},
        { name: 'GT (high performance AWD)', sizes: [
          { tag: 'OE',  size: '255/40R21', note: 'GT 专属 21"（市场参考）' },
          { tag: 'Alt', size: '255/45R20', note: '降 20"，平衡性能' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · CV · GT 21"',           width: '8.5J', diameter: '21"', offset: 'ET43.5', boltPattern: '5×114.3' },
    { label: '2022–2026 · CV · GT-Line 20"',       width: '8J',   diameter: '20"', offset: 'ET57',   boltPattern: '5×114.3' },
    { label: '2022–2026 · CV · Long Range 19"',    width: '7.5J', diameter: '19"', offset: 'ET54.5', boltPattern: '5×114.3' },
    { label: '2022–2026 · CV · Standard Range 18"', width: '7.5J', diameter: '18"', offset: 'ET50',   boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '114 Nm',
    notes: 'Kia EV6 uses 5×114.3 with 67.1mm centre bore — same as all Kia and Hyundai models. EV tyres should carry the "EV Compatible" or "EV Silent" designation for best range and cabin quiet.',
  },

  priceTabs: [
    {
      size: '235/55R19',
      tabLabel: '235/55R19 · Long Range 主力（65 条现货）',
      budget: {
        name: 'Blackhawk Agility SUV XL',
        desc: 'EV 低噪 · 65 条现货 · 性价比首选',
        price: 148,
        also: 'Also: Nexen NFERA RU1, Hankook Ventus iON',
        waText: 'Kia EV6 235%2F55R19 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia HL001',
        desc: 'EV 专用低滚阻 · 续航友好 · 24 条现货',
        price: 225,
        also: 'Also: Yokohama Advan V61 E+, Michelin E-Primacy',
        waText: 'Kia EV6 235%2F55R19 mid-range tyre quote (Bridgestone Ecopia HL001 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV NEO',
        desc: 'EV 运动操控 · A 级湿地 · 23 条现货',
        price: 305,
        also: 'Also: Pirelli Scorpion Zero EV, Continental CrossContact RX EV',
        waText: 'Kia EV6 235%2F55R19 premium tyre quote (Michelin PS4 SUV or similar)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $900–$1,040 · Premium $1,220–$1,400',
    },
    {
      size: '235/60R18',
      tabLabel: '235/60R18 · Standard Range（53 条现货）',
      budget: {
        name: 'Blackhawk Agility SUV XL',
        desc: 'EV 适用 · 53 条现货 · 低入门成本',
        price: 142,
        also: 'Also: Nexen NFERA RU1, Yokohama Geolandar G055',
        waText: 'Kia EV6 Standard Range 235%2F60R18 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6 XL',
        desc: 'A 级湿地 · 静音 · 107 条现货',
        price: 219,
        also: 'Also: Michelin E-Primacy, Goodyear Eagle F1 AS6 EV',
        waText: 'Kia EV6 Standard Range 235%2F60R18 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: 'EV 高性能 · 静音 · A 级湿地 · 60 条现货',
        price: 281,
        also: 'Also: Pirelli Scorpion Zero EV, Continental CrossContact RX',
        waText: 'Kia EV6 Standard Range 235%2F60R18 premium tyre quote (Michelin PS4 SUV or similar)',
      },
      setEstimate: 'Budget $568–$680 · Mid-range $876–$1,000 · Premium $1,124–$1,280',
    },
  ],

  radarSize: '235/55R19',
  radarSource: 'Blackhawk (12 reviews) · Bridgestone (20 reviews) · Michelin (24 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label (critical for EV range).',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 74, 78, 70, 85, 76], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nAgility SUV',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '70', hi: false }, { k: 'Value', v: '85', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.3',
      scores: [80, 82, 84, 82, 88, 82], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nEcopia HL001',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Range', v: '88', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [86, 90, 83, 84, 78, 82], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4 SUV',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '83', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'EV6 Long Range · 235/55R19 换胎',
      color: 'red',
      genKey: 'cv',
      body: 'EV6 的 235/55R19 我库 65 条现货。EV 首选 Bridgestone Ecopia HL001（$225/条）——低滚阻专为电动车设计，降低能耗，四条约 $900。注意：EV 车重更大（约 1.9 吨），建议 Load Index ≥ 101 的规格。',
    },
    {
      title: 'EV6 选胎三要点',
      color: 'blue',
      genKey: 'cv',
      body: '① 低滚阻（Fuel Efficiency A/B 级）延长续航；② 低噪音（EV 发动机无声，路噪更明显）；③ 高载重（EV 车身重）。Michelin E-Primacy 和 Bridgestone Ecopia 系列都符合以上三点。避免普通运动胎（滚阻大，损续航）。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Kia EV6 use in Singapore?',
      a: 'Kia EV6 CV (2022+): 235/60R18 (Standard Range Air) or 235/55R19 (Long Range Earth/GT-Line). GT-Line top spec uses 255/45R20. The 235/55R19 is the most common size for Long Range AWD versions sold in Singapore.',
    },
    {
      q: 'What is the best tyre for Kia EV6 in Singapore?',
      a: 'For the EV6, prioritize EV-optimised tyres: Bridgestone Ecopia HL001 (235/55R19, $225) for range and NVH, or Michelin Pilot Sport 4 SUV NEO for performance. Avoid standard performance tyres — they increase rolling resistance and reduce range by 5–10%.',
    },
    {
      q: 'What is the bolt pattern of the Kia EV6?',
      a: 'Kia EV6 uses 5×114.3 with 67.1mm centre bore, M12×1.5, 114 Nm — same as all Kia and Hyundai models.',
    },
    {
      q: 'How much does it cost to change Kia EV6 tyres in Singapore?',
      a: 'For 235/55R19 (Long Range): $148 (Blackhawk budget) to $305 (Michelin PS4 SUV). Full set ~$592–$1,220. For 235/60R18 (Standard): $142–$281. EV tyres typically cost 10–15% more than equivalent ICE tyres due to higher load ratings.',
    },
    {
      q: 'Can I use regular tyres on the Kia EV6?',
      a: 'Technically yes, but not recommended. EV-compatible tyres have reinforced sidewalls to handle the heavier battery weight, lower rolling resistance for better range, and acoustic foam to reduce tyre noise in the quiet EV cabin. Standard tyres will fit but may compromise range and comfort.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Agility SUV XL 235/55R19',    brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Ecopia HL001 235/55R19',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '225', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV NEO 235/55R19', brand: { '@type': 'Brand', name: 'Michelin' },  offers: { '@type': 'Offer', price: '305', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Blackhawk Agility SUV XL 235/60R18',    brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '142', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 XL 235/60R18',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '219', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
