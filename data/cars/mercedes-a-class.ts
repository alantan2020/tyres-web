import type { CarData } from './types'

const data: CarData = {
  make: 'Mercedes-Benz',
  model: 'A-Class',
  makeSlug: 'mercedes-benz',
  modelSlug: 'a-class',
  bgWord: 'ACLASS',

  seo: {
    title: 'Mercedes-Benz A-Class Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mercedes A-Class W177 (2019+) uses 205/55R17 (A180) or 235/40R18 (A200 AMG Line). 5×112 bolt, 66.6mm CB. From $88 installed in Singapore.',
    ogDescription: 'Mercedes A-Class W177: 205/55R17 (A180 base), 225/45R18 (A200), 235/40R18 (AMG Line), 235/35R19 (A35 AMG). 5×112, 66.6mm CB. From $88.',
    twitterDescription: 'Mercedes A-Class uses 205/55R17 (base) or 235/40R18 (AMG Line). 5×112. From $88 installed.',
    priceFrom: 88,
    oeSize: '225/45R18',
  },

  defaultGen: 'w177',

  generations: [
    {
      key: 'w177',
      label: 'W177 4th Gen (2019–2026)',
      years: '2019–2026',
      note: 'Singapore gets A180 (base, FWD), A200 (FWD), A35 AMG (4MATIC). A35 and A45 have staggered 19" fitment.',
      heroChips: [
        { label: 'A180 OE',       value: '205/55R17' },
        { label: 'A200 OE',       value: '225/45R18' },
        { label: 'AMG Line OE',   value: '235/40R18' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'A180 standard (17")', sizes: [
          { tag: 'OE',  size: '205/55R17' },
          { tag: 'Alt', size: '225/45R18', note: '升 18"，A200 同款' },
        ]},
        { name: 'A200 / A180 Sport (18")', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '稍宽，AMG Line 同款' },
        ]},
        { name: 'A200 AMG Line (18")', sizes: [
          { tag: 'OE',  size: '235/40R18' },
        ]},
        { name: 'A35 AMG 4MATIC (19")', sizes: [
          { tag: 'OE',  size: '235/35R19' },
          { tag: 'OE',  size: '255/35R19', note: 'rear — staggered' },
        ]},
      ],
    },
    {
      key: 'w176',
      label: 'W176 3rd Gen (2013–2019)',
      years: '2013–2019',
      heroChips: [
        { label: 'A180 base OE',  value: '195/65R15' },
        { label: 'A200 Sport OE', value: '205/55R17' },
        { label: 'A250 OE',       value: '225/45R18' },
        { label: 'From installed', value: '$78', green: true },
      ],
      variants: [
        { name: 'A180 standard (15")', sizes: [
          { tag: 'OE',  size: '195/65R15' },
          { tag: 'Alt', size: '205/55R17', note: '升 17"' },
        ]},
        { name: 'A180 Sport / A200 (17")', sizes: [
          { tag: 'OE',  size: '205/55R17' },
        ]},
        { name: 'A250 / A250 Sport (18")', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '稍宽运动选项' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019+ · W177 · A35 AMG · 19"',   width: '7.5J', diameter: '19"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2019+ · W177 · AMG Line · 18"',  width: '7.5J', diameter: '18"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2019+ · W177 · A180 · 17"',      width: '7.0J', diameter: '17"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2013–2019 · W176 · 17"',         width: '7.0J', diameter: '17"', offset: 'ET43', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.25 bolt',
    torque: '120 Nm',
    notes: 'Mercedes A-Class W177 uses BOLTS (not nuts), 5×112 bolt pattern, 66.6mm centre bore — same as C-Class, E-Class, GLC, and many BMW models. W177 is FWD (A180/A200) or 4MATIC (A35/A45), so tyre wear pattern differs from RWD Mercedes. M14×1.25 lug bolts, torque 120 Nm.',
  },

  priceTabs: [
    {
      size: '225/45R18',
      tabLabel: '225/45R18 · A200 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 入门豪华掀背 · A-Class A200 预算首选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'Mercedes A-Class 225%2F45R18 A200 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · 静音 · A-Class 最受好评中档',
        price: 178,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'Mercedes A-Class 225%2F45R18 A200 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '18" 豪华掀背极限操控 · A-Class 湿地最佳',
        price: 228,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Mercedes A-Class 225%2F45R18 A200 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $712–$840 · Premium $912–$1,080',
    },
    {
      size: '205/55R17',
      tabLabel: '205/55R17 · A180 标准版',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 舒适节能胎 · A-Class A180 预算首选',
        price: 88,
        also: 'Also: Nankang Econex NA-1, Maxxis Mecotra',
        waText: 'Mercedes A-Class 205%2F55R17 A180 budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '17" 静音舒适 · A180 城市通勤最佳',
        price: 158,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'Mercedes A-Class 205%2F55R17 A180 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '17" 运动舒适兼顾 · A180 驾驶感升级首选',
        price: 188,
        also: 'Also: Continental SportContact 6, Pirelli Cinturato P7',
        waText: 'Mercedes A-Class 205%2F55R17 A180 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $632–$760 · Premium $752–$880',
    },
  ],

  radarSize: '225/45R18',
  radarSource: 'Continental (16 reviews) · Michelin (13 reviews) · Hankook (9 reviews). Source: TyreReviews.com.',
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
      title: 'W177 A-Class（225/45R18）— 入门豪华城市掀背首选换胎指南',
      color: 'blue',
      genKey: 'w177',
      body: 'W177 A-Class 在新加坡入门豪华市场保有量极大，A200 18"（225/45R18）最常见。Continental SportContact 6（$178/条）是 SG A-Class 车主评价最高的选择——干湿地均衡，比 OE 胎更安静，整套约 $712。Michelin Pilot Sport 4S（$228/条）操控极限更高，适合偶尔跑高速的车主。<strong>FWD 提醒：</strong>A180/A200 是前驱，前轮磨损比后轮快约 30%，建议每 15,000 km 检查前胎，并考虑定期轮换（若尺码允许）。',
    },
    {
      title: 'A35 AMG 4MATIC（235/35R19 + 255/35R19）— 前后不同尺码',
      color: 'red',
      genKey: 'w177',
      body: 'A35 AMG 使用前后不同的 staggered 轮胎：前 235/35R19，后 255/35R19。<strong>前后不能互换</strong>，后胎比前胎贵约 $30–$50 / 条。19" 扁平比 35 的轮胎在新加坡弹弓路上爆胎风险高，建议配套胎压监测系统（TPMS），并在避开大坑时减速。OE 胎型为 Continental SportContact 6，替换时建议保持同款或升级至 Michelin Pilot Sport 4S。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mercedes-Benz A-Class use in Singapore?',
      a: 'Mercedes A-Class W177 (2019+): A180 standard uses 205/55R17; A200 uses 225/45R18; A200 AMG Line uses 235/40R18; A35 AMG uses 235/35R19 front + 255/35R19 rear (staggered). W176 (2013–2019): A180 base uses 195/65R15; A200 uses 205/55R17; A250 uses 225/45R18. All use 5×112 bolt pattern.',
    },
    {
      q: 'What is the bolt pattern of the Mercedes A-Class?',
      a: 'Mercedes A-Class W176 and W177 use 5×112 bolt pattern, 66.6mm centre bore, M14×1.25 lug bolts, torque 120 Nm. Same as C-Class, E-Class, GLC, and most modern BMW models. All Mercedes use lug bolts (not lug nuts).',
    },
    {
      q: 'How much does it cost to replace Mercedes A-Class tyres in Singapore?',
      a: 'For 225/45R18 (A200): budget from $108/tyre; mid-range $178; premium $228. Full set: $432–$912. For 205/55R17 (A180): from $88/tyre. For A35 AMG (235/35R19 + 255/35R19): from $128/tyre (front) and $138/tyre (rear); premium per tyre $258–$298.',
    },
    {
      q: 'Is the Mercedes A-Class front-wheel drive or rear-wheel drive?',
      a: 'Mercedes A180 and A200 (both W176 and W177) are front-wheel drive (FWD). Only the A35 AMG and A45 AMG use 4MATIC all-wheel drive. FWD models wear front tyres significantly faster than rear, particularly in Singapore\'s stop-start traffic — check front tyre depth every 15,000 km.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/45R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 225/45R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 225/45R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 205/55R17',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 205/55R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 205/55R17',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
