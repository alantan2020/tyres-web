import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Noah',
  makeSlug: 'toyota',
  modelSlug: 'noah',
  bgWord: 'NOAH',

  seo: {
    title: 'Toyota Noah / Voxy Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Noah / Voxy 90 series (2022+) uses 205/55R16 (G base) or 215/45R18 (Z hybrid). 80 series (2014–2022) uses 205/55R16 or 215/45R17. 5×114.3 bolt pattern, 60.1mm CB. From $88 installed.',
    ogDescription: 'Toyota Noah/Voxy: 90 series 205/55R16 or 215/45R18; 80 series 205/55R16 or 215/45R17. 5×114.3 60.1mm. From $88.',
    twitterDescription: 'Toyota Noah/Voxy 90 series uses 205/55R16 or 215/45R18. 5×114.3 bolt. From $88.',
    priceFrom: 88,
    oeSize: '205/55R16',
  },

  defaultGen: 'r90',

  generations: [
    {
      key: 'r90',
      label: '90 Series (2022–2026)',
      years: '2022–2026',
      note: '90 series Noah and Voxy share the same TNGA-based platform and tyre specs. G base uses 205/55R16; Z hybrid top grade uses 215/45R18 with larger diameter. Growing number in Singapore as parallel imports.',
      heroChips: [
        { label: 'G base OE', value: '205/55R16' },
        { label: 'Z hybrid OE', value: '215/45R18' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'Noah / Voxy G base (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
          { tag: 'Alt', size: '215/55R16', note: '稍宽，同 16" 轮圈' },
        ]},
        { name: 'Noah / Voxy Z hybrid (18")', sizes: [
          { tag: 'OE',  size: '215/45R18' },
          { tag: 'Alt', size: '225/40R18', note: '小幅升宽，保持 18" 外径' },
        ]},
      ],
    },
    {
      key: 'r80',
      label: '80 Series (2014–2022)',
      years: '2014–2022',
      note: '80 series Noah/Voxy. Si grade uses 205/55R16; Si W×B and Customization grade use 215/45R17. Hybrid versions share same sizes. Large number of 80 series still on Singapore roads.',
      heroChips: [
        { label: 'Si base OE', value: '205/55R16' },
        { label: 'Si W×B OE',  value: '215/45R17' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '80 Si base (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
        ]},
        { name: '80 Si W×B / Customization (17")', sizes: [
          { tag: 'OE',  size: '215/45R17' },
          { tag: 'Alt', size: '225/45R17', note: '升宽 10mm' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · 90 series · G base · 16"',     width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2022+ · 90 series · Z hybrid · 18"',   width: '7.0J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2014–2022 · 80 series · Si base · 16"', width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2014–2022 · 80 series · W×B · 17"',    width: '7.0J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5 nut',
    torque: '103 Nm',
    notes: 'Toyota Noah/Voxy uses 5×114.3 bolt pattern, 60.1mm centre bore — same as Alphard, Harrier, and most Toyota 7-seaters. M12×1.5 lug nuts, torque 103 Nm. 80 series and 90 series share the same bolt pattern; wheels are interchangeable if rim diameter matches.',
  },

  priceTabs: [
    {
      size: '205/55R16',
      tabLabel: '205/55R16 · G / Si base 16"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" MPV 节能胎 · Noah/Voxy 通勤预算首选',
        price: 88,
        also: 'Also: Kumho Solus 4, Nankang Econex NA-1',
        waText: 'Toyota Noah Voxy 205%2F55R16 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '16" 静音舒适 · MPV 日用最佳',
        price: 138,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'Toyota Noah Voxy 205%2F55R16 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '16" 雨天 A 级 · 安静通勤首选',
        price: 168,
        also: 'Also: Bridgestone Turanza 6, Continental PremiumContact 7',
        waText: 'Toyota Noah Voxy 205%2F55R16 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $552–$680 · Premium $672–$800',
    },
    {
      size: '215/45R18',
      tabLabel: '215/45R18 · 90 series Z hybrid',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" 节能运动胎 · Noah Z hybrid 预算选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Toyota Noah Z hybrid 215%2F45R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '18" 干湿均衡 · Noah Z 驾感最佳',
        price: 178,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Toyota Noah Z hybrid 215%2F45R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '18" 运动旗舰 · Noah Z 最强驾感升级',
        price: 228,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Toyota Noah Z hybrid 215%2F45R18 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $712–$840 · Premium $912–$1,080',
    },
  ],

  radarSize: '205/55R16',
  radarSource: 'Michelin (14 reviews) · Bridgestone (11 reviews) · Continental (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 80, 74, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 82, 90, 78, 82, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [88, 86, 90, 80, 84, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Noah / Voxy（205/55R16）— 80 系和 90 系螺孔相同，钢圈可互换',
      color: 'blue',
      genKey: 'r90',
      body: 'Toyota Noah 和 Voxy 是双胞胎车型，共用完全相同的底盘和螺孔规格（5×114.3，60.1mm）。80 系和 90 系的 5×114.3 钢圈可以互换（前提是轮径一致）。16" 的 205/55R16 是最常见且货源最充足的规格，<strong>Bridgestone Turanza T005（$138/条）</strong>是新加坡 Noah/Voxy 车主最常选的换胎方案，静音性极佳适合家庭 MPV 使用场景，整套约 $552。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Noah / Voxy use in Singapore?',
      a: '90 series (2022+): G base uses 205/55R16; Z hybrid uses 215/45R18. 80 series (2014–2022): Si base uses 205/55R16; Si W×B uses 215/45R17. All use 5×114.3 bolt pattern, 60.1mm centre bore.',
    },
    {
      q: 'Are Toyota Noah and Voxy tyre sizes the same?',
      a: 'Yes. Toyota Noah and Voxy are twin models sharing the same platform, bolt pattern, and tyre sizes. All Noah tyre specs apply identically to Voxy of the same generation.',
    },
    {
      q: 'How much does it cost to replace Toyota Noah tyres in Singapore?',
      a: 'For 205/55R16: budget from $88/tyre; mid-range (Bridgestone Turanza T005) $138; premium (Michelin Primacy 4+) $168. Full set $352–$672. For Z hybrid 215/45R18: from $108 budget; mid $178; premium $228.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 205/55R16',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 205/55R16',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 205/55R16',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Continental PremiumContact 6 215/45R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
