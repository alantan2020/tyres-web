import type { CarData } from './types'

const data: CarData = {
  make: 'Audi',
  model: 'A3',
  makeSlug: 'audi',
  modelSlug: 'a3',
  bgWord: 'AUDIA3',

  seo: {
    title: 'Audi A3 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Audi A3 8Y (2021+) uses 205/55R17 (base) or 225/40R18 (S line). 5×112 bolt, 57.1mm CB. From $88 installed in Singapore.',
    ogDescription: 'Audi A3 8Y (2021+): 205/55R17 (35 TFSI base), 225/40R18 (S line), 235/35R19 (S3). 8V (2013–2021): 205/55R16, 225/40R18. 5×112, 57.1mm CB.',
    twitterDescription: 'Audi A3 uses 205/55R17 (base) or 225/40R18 (S line). 5×112 bolt. From $88 installed.',
    priceFrom: 88,
    oeSize: '225/40R18',
  },

  defaultGen: '8y',

  generations: [
    {
      key: '8y',
      label: '8Y 4th Gen (2021–2026)',
      years: '2021–2026',
      note: 'Singapore gets A3 35 TFSI (FWD) and S3 (quattro AWD). S3 uses staggered 19" fitment. 8Y is the current gen.',
      heroChips: [
        { label: '35 TFSI base OE', value: '205/55R17' },
        { label: '35 TFSI S line OE', value: '225/40R18' },
        { label: 'S3 OE',            value: '235/35R19' },
        { label: 'From installed',   value: '$88', green: true },
      ],
      variants: [
        { name: '35 TFSI standard (17")', sizes: [
          { tag: 'OE',  size: '205/55R17' },
          { tag: 'Alt', size: '225/40R18', note: '升 18"，S line 同款' },
        ]},
        { name: '35 TFSI S line (18")', sizes: [
          { tag: 'OE',  size: '225/40R18' },
          { tag: 'Alt', size: '235/40R18', note: '稍宽运动选项' },
        ]},
        { name: 'S3 quattro (19")', sizes: [
          { tag: 'OE',  size: '235/35R19' },
        ]},
      ],
    },
    {
      key: '8v',
      label: '8V 3rd Gen (2013–2021)',
      years: '2013–2021',
      heroChips: [
        { label: '1.4T base OE',   value: '205/60R16' },
        { label: '1.8T / 2.0T OE', value: '225/45R17' },
        { label: 'S line OE',      value: '225/40R18' },
        { label: 'From installed',  value: '$78', green: true },
      ],
      variants: [
        { name: '1.4 TFSI base (16")', sizes: [
          { tag: 'OE',  size: '205/60R16' },
          { tag: 'Alt', size: '225/45R17', note: '升 17"' },
        ]},
        { name: '1.8 TFSI / 2.0 TDI (17")', sizes: [
          { tag: 'OE',  size: '225/45R17' },
          { tag: 'Alt', size: '225/40R18', note: '升 18"，S line 同款' },
        ]},
        { name: 'S line / 2.0 TFSI (18")', sizes: [
          { tag: 'OE',  size: '225/40R18' },
        ]},
        { name: 'S3 (19")', sizes: [
          { tag: 'OE',  size: '235/35R19' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021+ · 8Y · S3 · 19"',        width: '7.5J', diameter: '19"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2021+ · 8Y · S line · 18"',    width: '7.5J', diameter: '18"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2021+ · 8Y · base · 17"',      width: '7.0J', diameter: '17"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2013–2021 · 8V · S line · 18"', width: '7.5J', diameter: '18"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2013–2021 · 8V · base · 17"',  width: '7.0J', diameter: '17"', offset: 'ET43', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '57.1mm',
    stud: 'M14×1.5 bolt',
    torque: '120 Nm',
    notes: 'Audi A3 (8V and 8Y) uses 5×112 bolt pattern, 57.1mm centre bore — DIFFERENT from Audi A6/A8 (66.5mm CB, different hub size). Same 5×112 as VW Golf Mk7/Mk8, Tiguan, Skoda Octavia. Uses lug BOLTS (not nuts), M14×1.5, torque 120 Nm.',
  },

  priceTabs: [
    {
      size: '225/40R18',
      tabLabel: '225/40R18 · S line 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 入门豪华运动胎 · A3 S line 预算首选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'Audi A3 225%2F40R18 S line budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · A3 S line 最受好评中档选择',
        price: 178,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'Audi A3 225%2F40R18 S line mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'A3 S line 极限操控 · 干地顶级 · Audi OE 认证',
        price: 238,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Audi A3 225%2F40R18 S line premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $712–$840 · Premium $952–$1,100',
    },
    {
      size: '205/55R17',
      tabLabel: '205/55R17 · 35 TFSI 标准版',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 舒适节能胎 · A3 35 TFSI 预算首选',
        price: 88,
        also: 'Also: Nankang Econex NA-1, Bridgestone Ecopia EP300',
        waText: 'Audi A3 205%2F55R17 standard budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '17" 静音舒适 · A3 日常通勤最佳',
        price: 158,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'Audi A3 205%2F55R17 standard mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '17" 运动舒适兼顾 · A3 驾驶感升级最佳',
        price: 188,
        also: 'Also: Continental SportContact 6, Pirelli P-Zero',
        waText: 'Audi A3 205%2F55R17 standard premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $632–$760 · Premium $752–$880',
    },
  ],

  radarSize: '225/40R18',
  radarSource: 'Continental (16 reviews) · Michelin (13 reviews) · Hankook (10 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [70, 76, 72, 72, 72, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'NVH', v: '72', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 92, 84, 82, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [88, 94, 84, 82, 86, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '84', hi: false }, { k: 'Wear', v: '82', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'A3 8Y S line（225/40R18）— 入门豪华掀背最常见换胎',
      color: 'blue',
      genKey: '8y',
      body: 'Audi A3 S line 18" 是新加坡入门豪华掀背中最主流的配置。Continental SportContact 6（$178/条）干湿地均衡顶级，是 SG 最受 A3 车主好评的选择，整套约 $712。Michelin Pilot Sport 4S（$238/条）干地极限更高，适合驾驶感要求高的车主。<strong>A3 是前驱（35 TFSI）或全驱（S3）</strong>，前驱型前轮磨损约快 30%，建议定期检查并考虑轮胎轮换延长寿命。',
    },
    {
      title: 'A3 8V（2013–2021）— 存量大，配件充足',
      color: 'red',
      genKey: '8v',
      body: '8V A3 在新加坡二手车市场保有量极大，17" 中配（225/45R17）和 18" S line（225/40R18）货源充足，换胎选择多。Bridgestone Turanza T005（17" $158/条，18" $178/条）是最受 8V 车主欢迎的选择，静音舒适日用最佳。8V S3 19"（235/35R19）因扁平比低，新加坡弹弓路需减速，爆胎风险明显高于 18"，日常开建议适度降低胎压监测阈值，留意胎压变化。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Audi A3 use in Singapore?',
      a: 'Audi A3 8Y (2021+): 35 TFSI standard uses 205/55R17; S line uses 225/40R18; S3 uses 235/35R19. 8V (2013–2021): 1.4T base uses 205/60R16; 1.8T/2.0T uses 225/45R17; S line uses 225/40R18; S3 uses 235/35R19. All use 5×112 bolt pattern, 57.1mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Audi A3?',
      a: 'Audi A3 (8V and 8Y) uses 5×112 bolt pattern, 57.1mm centre bore, M14×1.5 lug bolts, torque 120 Nm. Same as VW Golf Mk7/Mk8, VW Tiguan, and Skoda Octavia. Note: Audi A6/A8 use a different 66.5mm centre bore despite same 5×112 bolt pattern.',
    },
    {
      q: 'How much does it cost to replace Audi A3 tyres in Singapore?',
      a: 'For 225/40R18 (S line): budget from $108/tyre; mid-range $178; premium $238. Full set: $432–$952. For 205/55R17 (standard): from $88/tyre; premium $188. S3 19" (235/35R19) from $128/tyre; premium $278.',
    },
    {
      q: 'Can I use VW Golf rims on my Audi A3?',
      a: 'In principle yes — Audi A3 (8V/8Y) and VW Golf Mk7/Mk8 share the same 5×112 bolt pattern and 57.1mm centre bore. However, offset (ET) values differ by trim and may affect fitment. Always verify the specific offset and rim width match before swapping. A small difference in ET (±5) is usually acceptable with professional checking.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/40R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 225/40R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 225/40R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 205/55R17',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 205/55R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 205/55R17',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
