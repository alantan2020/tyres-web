import type { CarData } from './types'

const data: CarData = {
  make: 'MG',
  model: 'MG4',
  makeSlug: 'mg',
  modelSlug: '4',
  bgWord: 'MG4',

  seo: {
    title: 'MG4 EV Tyre Size & Best Price Singapore | SGCarPass',
    description: 'MG4 EV Standard uses 215/50R17; Long Range uses 235/40R19; Trophy uses 235/40R19 or 235/35R20. 5×112 bolt. From $88 installed in Singapore.',
    ogDescription: 'MG4 EV: 215/50R17 (Standard), 235/40R19 (Long Range/Trophy), 235/35R20 (Trophy+). 5×112, 57.1mm CB. From $88 installed.',
    twitterDescription: 'MG4 EV Standard 215/50R17, Long Range 235/40R19. 5×112 bolt. From $88 installed.',
    priceFrom: 88,
    oeSize: '235/40R19',
  },

  defaultGen: 'eg4_fl',

  generations: [
    {
      key: 'eg4_fl',
      label: 'MG4 EV Facelift (2024–2026)',
      years: '2024–2026',
      heroChips: [
        { label: 'Standard OE',    value: '215/50R17' },
        { label: 'Long Range OE',  value: '235/40R19' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'Standard (51.4 kWh, 17")', sizes: [
          { tag: 'OE',  size: '215/50R17' },
          { tag: 'Alt', size: '235/40R19', note: '升 19"，Long Range 尺码，操控提升' },
        ]},
        { name: 'Long Range (77 kWh, 19")', sizes: [
          { tag: 'OE',  size: '235/40R19' },
          { tag: 'Alt', size: '235/35R20', note: '升 20"，Trophy 尺码' },
        ]},
        { name: 'Trophy+ (AWD, 20")', sizes: [
          { tag: 'OE',  size: '235/35R20' },
        ]},
      ],
    },
    {
      key: 'eg4',
      label: 'MG4 EV 1st Gen (2023–2024)',
      years: '2023–2024',
      heroChips: [
        { label: 'Standard OE',   value: '215/50R17' },
        { label: 'Trophy OE',     value: '235/40R19' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'Standard (51.4 kWh, 17")', sizes: [
          { tag: 'OE',  size: '215/50R17' },
        ]},
        { name: 'Trophy (64 kWh, 19")', sizes: [
          { tag: 'OE',  size: '235/40R19' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2024+ · Trophy+ AWD · 20"',    width: '8.0J', diameter: '20"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2023+ · Long Range · 19"',     width: '7.5J', diameter: '19"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2023+ · Standard · 17"',       width: '6.5J', diameter: '17"', offset: 'ET43', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '57.1mm',
    stud: 'M14×1.5',
    torque: '120 Nm',
    notes: 'MG4 EV uses 5×112 bolt pattern — same as VW Golf 8, Audi A3 (8Y), BMW, Mercedes-Benz (for some sizes). Centre bore 57.1mm. This is different from MG ZS petrol (5×100). Lug nuts M14×1.5, torque 120 Nm.',
  },

  priceTabs: [
    {
      size: '235/40R19',
      tabLabel: '235/40R19 · Long Range 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" EV 运动胎 · MG4 Long Range 预算首选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'MG4 EV 235%2F40R19 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · 低噪音 · MG4 最受好评中端选择',
        price: 208,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'MG4 EV 235%2F40R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: 'EV 专用 · 低滚阻提升续航 · MG4 顶级选择',
        price: 258,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'MG4 EV 235%2F40R19 premium tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $832–$960 · Premium $1,032–$1,200',
    },
    {
      size: '215/50R17',
      tabLabel: '215/50R17 · Standard 版本',
      budget: {
        name: 'Nankang NS-25 UHP',
        desc: '17" 性价比运动胎 · MG4 Standard 预算首选',
        price: 88,
        also: 'Also: Hankook Ventus Prime4, Kumho Ecsta KH31',
        waText: 'MG4 EV 215%2F50R17 Standard budget tyre quote (Nankang NS-25 or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '17" 静音舒适 · MG4 Standard 日常通勤推荐',
        price: 158,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'MG4 EV 215%2F50R17 Standard mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '17" 性能舒适兼顾 · MG4 Standard 驾驶感提升',
        price: 198,
        also: 'Also: Continental SportContact 6, Pirelli P-Zero',
        waText: 'MG4 EV 215%2F50R17 Standard premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $632–$760 · Premium $792–$920',
    },
  ],

  radarSize: '235/40R19',
  radarSource: 'Continental (13 reviews) · Michelin (11 reviews) · Hankook (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 74, 70, 76, 70, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '70', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 90, 82, 80, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '82', hi: false }, { k: 'Wear', v: '80', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [88, 88, 86, 82, 90, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport EV',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'EV Range', v: '90', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'MG4 Long Range（235/40R19）— EV 性能胎首选',
      color: 'blue',
      genKey: 'eg4_fl',
      body: 'MG4 Long Range 原配 <strong>235/40R19</strong>，是紧凑 EV hatchback 中操控感最强的尺码之一。Continental SportContact 6（$208/条）干地表现顶级，湿地制动 A 级，与 MG4 的运动调校完美匹配，整套约 $832。想最大化续航选 Michelin Pilot Sport EV（$258/条），低滚阻设计专为大扭力 EV 优化。预算有限选 Hankook Ventus S1 Evo3（$118/条），性价比最佳。',
    },
    {
      title: 'MG4 vs MG ZS — 螺栓孔不同，千万别搞混',
      color: 'red',
      genKey: 'eg4_fl',
      body: 'MG4 EV 使用 <strong>5×112</strong> 螺栓孔（与 VW Golf 8 相同），MG ZS 燃油版使用 <strong>5×100</strong>，MG ZS EV 也使用 5×112。三者中只有 MG4 和 ZS EV 的轮圈可以互换（同为 5×112）——但 MG4 的轮圈 offset（ET）可能与 ZS EV 不同，换装前务必确认。切勿将 ZS 燃油版（5×100）轮圈装到 MG4 上。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the MG4 EV use in Singapore?',
      a: 'MG4 EV Standard uses 215/50R17; Long Range uses 235/40R19; Trophy+ AWD uses 235/35R20. All MG4 use 5×112 bolt pattern, 57.1mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the MG4 EV?',
      a: 'MG4 EV uses 5×112 bolt pattern, 57.1mm centre bore, M14×1.5 lug nuts, torque 120 Nm. This is the same as VW Golf 8, Audi A3 (8Y), and some BMW/Mercedes models. Note: MG ZS petrol uses 5×100 — do not confuse the two.',
    },
    {
      q: 'How much does it cost to replace MG4 EV tyres in Singapore?',
      a: 'For 235/40R19 (Long Range): budget from $118/tyre; mid-range $208; premium $258. Full set: $472–$1,032. For 215/50R17 (Standard): from $88/tyre; mid-range $158; premium $198. EV tyres wear faster than petrol cars due to instant torque — check tread every 8,000 km.',
    },
    {
      q: 'Can I use Volkswagen Golf 8 rims on an MG4 EV?',
      a: 'Both use 5×112 and similar 57.1mm centre bore, so the bolt pattern is technically compatible. However, rim offset (ET) and overall width differ between Golf 8 and MG4 — professional verification recommended before fitting. Hub-centric rings may be needed if centre bore differs slightly.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/40R19',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 235/40R19',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport EV 235/40R19',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Nankang NS-25 UHP 215/50R17',           brand: { '@type': 'Brand', name: 'Nankang' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/50R17',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 215/50R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
