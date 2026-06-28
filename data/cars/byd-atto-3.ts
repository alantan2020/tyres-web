import type { CarData } from './types'

const data: CarData = {
  make: 'BYD',
  model: 'ATTO 3',
  makeSlug: 'byd',
  modelSlug: 'atto-3',
  bgWord: 'ATTO3',

  seo: {
    title: 'BYD ATTO 3 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'BYD ATTO 3 Standard (49.9 kWh) uses 215/60R17; Extended (60.5 kWh) uses 215/55R18. 5×114.3 bolt pattern. From $88 installed in Singapore.',
    ogDescription: 'BYD ATTO 3: Standard 215/60R17 or 215/55R18; Extended 215/55R18 or 235/50R18. 5×114.3, 60.1mm CB. From $88 installed.',
    twitterDescription: 'BYD ATTO 3 Standard uses 215/60R17; Extended uses 215/55R18. 5×114.3 bolt. From $88 installed.',
    priceFrom: 88,
    oeSize: '215/55R18',
  },

  defaultGen: 'bn1',

  generations: [
    {
      key: 'bn1_fl',
      label: 'BN1 Facelift (2024–2026)',
      years: '2024–2026',
      heroChips: [
        { label: 'Standard OE',   value: '215/60R17' },
        { label: 'Extended OE',   value: '215/55R18' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'Standard Range 49.9 kWh (17")', sizes: [
          { tag: 'OE',  size: '215/60R17' },
          { tag: 'Alt', size: '215/55R18', note: '升 18"，Extended 同款' },
        ]},
        { name: 'Extended Range 60.5 kWh (18")', sizes: [
          { tag: 'OE',  size: '215/55R18' },
          { tag: 'Alt', size: '235/50R18', note: '稍宽，操控感提升' },
        ]},
      ],
    },
    {
      key: 'bn1',
      label: 'BN1 1st Gen (2022–2024)',
      years: '2022–2024',
      heroChips: [
        { label: 'Standard OE',   value: '215/60R17' },
        { label: 'Extended OE',   value: '235/50R18' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'Standard Range (17")', sizes: [
          { tag: 'OE',  size: '215/60R17' },
        ]},
        { name: 'Extended Range (18")', sizes: [
          { tag: 'OE',  size: '235/50R18' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · BN1 · Extended · 18"',  width: '7.0J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2022+ · BN1 · Standard · 17"',  width: '6.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '120 Nm',
    notes: 'BYD ATTO 3 uses 5×114.3 bolt pattern — same as most Japanese cars (Toyota, Honda, Nissan, Hyundai, Kia). Centre bore 60.1mm is slightly different from Toyota (60.1mm, same) and Honda (64.1mm). M12×1.5 lug nuts, torque 120 Nm.',
  },

  priceTabs: [
    {
      size: '215/55R18',
      tabLabel: '215/55R18 · Extended Range 主力',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" EV 友好胎 · ATTO 3 预算首选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'BYD ATTO 3 215%2F55R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音耐磨 · EV SUV 日常通勤最佳选择',
        price: 178,
        also: 'Also: Michelin Primacy 4 SUV, Continental PremiumContact 6',
        waText: 'BYD ATTO 3 215%2F55R18 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: 'EV 专用低滚阻 · 续航提升 · ATTO 3 顶级选择',
        price: 228,
        also: 'Also: Michelin Pilot Sport 4 SUV, Continental SportContact 6',
        waText: 'BYD ATTO 3 215%2F55R18 premium tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $712–$840 · Premium $912–$1,040',
    },
    {
      size: '215/60R17',
      tabLabel: '215/60R17 · Standard Range 17"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 节能舒适胎 · ATTO 3 Standard 预算首选',
        price: 88,
        also: 'Also: Nankang Econex NA-1, Bridgestone Ecopia EP300',
        waText: 'BYD ATTO 3 215%2F60R17 Standard budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4 SUV',
        desc: '17" 静音舒适 · Standard Range 日常通勤推荐',
        price: 158,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza T005',
        waText: 'BYD ATTO 3 215%2F60R17 Standard mid-range tyre quote (Michelin Primacy 4 SUV or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '17" 操控舒适兼顾 · Standard 驾驶感提升',
        price: 198,
        also: 'Also: Continental CrossContact RX, Bridgestone Alenza 001',
        waText: 'BYD ATTO 3 215%2F60R17 Standard premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $632–$760 · Premium $792–$920',
    },
  ],

  radarSize: '215/55R18',
  radarSource: 'Michelin (11 reviews) · Bridgestone (9 reviews) · Hankook (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '6.9',
      scores: [66, 70, 70, 78, 68, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '70', hi: false }, { k: 'NVH', v: '70', hi: false }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [80, 82, 86, 82, 78, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [86, 84, 86, 82, 90, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport EV',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'EV Range', v: '90', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'ATTO 3 Extended Range（215/55R18）— EV 专用胎优先',
      color: 'blue',
      genKey: 'bn1_fl',
      body: 'ATTO 3 Extended Range 整备重约 1,750 kg，原配 <strong>215/55R18</strong>。日常通勤优先选 Bridgestone Turanza T005（$178/条）——静音性能出色，耐磨性优秀，适合 SG 拥挤路况，整套约 $712。最大化续航选 Michelin Pilot Sport EV（$228/条），专为 EV 大扭力设计，低滚阻可延伸约 3–5% 续航。<strong>注意：</strong>ATTO 3 使用 5×114.3 螺栓孔，与市面上大多数日系车相同，售后轮圈货源充足。',
    },
    {
      title: 'ATTO 3 Standard Range（215/60R17）— 舒适日用首选',
      color: 'red',
      genKey: 'bn1_fl',
      body: 'Standard Range 17" 配 <strong>215/60R17</strong>，走舒适取向。Michelin Primacy 4 SUV（$158/条）静音舒适，湿地制动优秀，是城市代步最佳选择，整套约 $632。想升级操控感，可换 18" 轮圈配 215/55R18，但需额外购买轮圈（整套费用约 $1,500–$2,500）。ATTO 3 Standard 续航约 320 km（WLTP），比 Extended（480 km）短，选低滚阻胎（如 Michelin Primacy 4 SUV）可部分弥补。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the BYD ATTO 3 use in Singapore?',
      a: 'BYD ATTO 3 Standard Range uses 215/60R17; Extended Range uses 215/55R18 (Facelift) or 235/50R18 (1st Gen). All use 5×114.3 bolt pattern, 60.1mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the BYD ATTO 3?',
      a: 'BYD ATTO 3 uses 5×114.3 bolt pattern, 60.1mm centre bore, M12×1.5 lug nuts, torque 120 Nm. This is the same bolt pattern as most Japanese brands (Toyota, Honda, Hyundai, Kia, Nissan), making aftermarket rim options plentiful.',
    },
    {
      q: 'How much does it cost to replace BYD ATTO 3 tyres in Singapore?',
      a: 'For 215/55R18 (Extended): from $98/tyre; mid-range $178; premium $228. Full set: $392–$912. For 215/60R17 (Standard): from $88/tyre; mid-range $158. EV tyres wear faster due to regenerative braking patterns and heavier vehicle weight.',
    },
    {
      q: 'Can I use Toyota Camry rims on a BYD ATTO 3?',
      a: 'Both use 5×114.3, but centre bore may differ (Camry is 60.1mm, same as ATTO 3). Rim offset (ET) varies significantly between the two models — Toyota uses ~ET45–50, while ATTO 3 may differ. Professional consultation recommended before cross-fitting. Hub-centric rings may be needed.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 215/55R18',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/55R18',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport EV 215/55R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 215/60R17',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Michelin Primacy 4 SUV 215/60R17',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 215/60R17', brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
