import type { CarData } from './types'

const data: CarData = {
  make: 'BMW',
  model: '1 Series',
  makeSlug: 'bmw',
  modelSlug: '1-series',
  bgWord: 'BMW1',

  seo: {
    title: 'BMW 1 Series Tyre Size & Best Price Singapore | SGCarPass',
    description: 'BMW 1 Series F40 3rd Gen (2020+) uses 205/55R17 (base) or 225/40R18 (M Sport). F20 2nd Gen uses 205/55R17 or 225/40R18. 5×112 bolt. From $88 installed.',
    ogDescription: 'BMW 1 Series F40: 205/55R17 (118i base), 225/40R18 (M Sport), 225/35R19 (M135i). F20: 195/55R16, 205/55R17, 225/40R18. 5×112, 66.6mm CB. From $88.',
    twitterDescription: 'BMW 1 Series uses 205/55R17 (base) or 225/40R18 (M Sport). 5×112 bolt. From $88 installed.',
    priceFrom: 88,
    oeSize: '225/40R18',
  },

  defaultGen: 'f40',

  generations: [
    {
      key: 'f40',
      label: 'F40 3rd Gen (2020–2026)',
      years: '2020–2026',
      note: 'F40 switched to FWD (118i) and xDrive (128ti/M135i). M135i xDrive may have staggered fitment. Run-flat tyres standard on most variants.',
      heroChips: [
        { label: '118i OE',        value: '205/55R17' },
        { label: 'M Sport OE',     value: '225/40R18' },
        { label: 'M135i OE',       value: '225/35R19' },
        { label: 'From installed',  value: '$88', green: true },
      ],
      variants: [
        { name: '118i / 120i standard (17")', sizes: [
          { tag: 'OE',  size: '205/55R17' },
          { tag: 'Alt', size: '225/40R18', note: '升 18"，M Sport 尺码' },
        ]},
        { name: '118i / 120i M Sport (18")', sizes: [
          { tag: 'OE',  size: '225/40R18' },
          { tag: 'Alt', size: '235/40R18', note: '稍宽，运动感提升' },
        ]},
        { name: 'M135i xDrive (19")', sizes: [
          { tag: 'OE',  size: '225/35R19' },
          { tag: 'Alt', size: '245/35R19', note: '宽胎，操控极限提升' },
        ]},
      ],
    },
    {
      key: 'f20',
      label: 'F20 2nd Gen (2015–2020)',
      years: '2015–2020',
      heroChips: [
        { label: '116i base OE',   value: '195/55R16' },
        { label: '118i / 120i OE', value: '205/55R17' },
        { label: 'M Sport OE',     value: '225/40R18' },
        { label: 'From installed',  value: '$78', green: true },
      ],
      variants: [
        { name: '116i standard (16")', sizes: [
          { tag: 'OE',  size: '195/55R16' },
          { tag: 'Alt', size: '205/55R17', note: '升 17"' },
        ]},
        { name: '118i / 120i standard (17")', sizes: [
          { tag: 'OE',  size: '205/55R17' },
        ]},
        { name: '118i / 120i M Sport (18")', sizes: [
          { tag: 'OE',  size: '225/40R18' },
        ]},
        { name: 'M140i (18" or 19")', sizes: [
          { tag: 'OE',  size: '225/40R18' },
          { tag: 'OE',  size: '225/35R19', note: '选配 19"' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2020+ · F40 · M135i · 19"',       width: '7.5J', diameter: '19"', offset: 'ET47', boltPattern: '5×112' },
    { label: '2020+ · F40 · M Sport · 18"',     width: '7.5J', diameter: '18"', offset: 'ET47', boltPattern: '5×112' },
    { label: '2015+ · F20 / F40 · base · 17"',  width: '7.0J', diameter: '17"', offset: 'ET47', boltPattern: '5×112' },
    { label: '2015+ · F20 · 116i · 16"',        width: '6.5J', diameter: '16"', offset: 'ET47', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.25 bolt',
    torque: '120 Nm',
    notes: 'BMW 1 Series uses BOLTS (not nuts) with M14×1.25 thread. 5×112 bolt pattern, 66.6mm centre bore — same as BMW 3 Series, 5 Series, and also Mercedes-Benz, Audi A6/A8. F40 uses FWD/xDrive (unlike older RWD F20), so tyre wear patterns differ — front tyres wear faster on 118i FWD variants.',
  },

  priceTabs: [
    {
      size: '225/40R18',
      tabLabel: '225/40R18 · M Sport 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 运动胎 · 1 Series M Sport 预算首选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'BMW 1 Series 225%2F40R18 M Sport budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · 静音 · 1 Series M Sport 最受好评',
        price: 178,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'BMW 1 Series 225%2F40R18 M Sport mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'M Sport 极限操控 · 干地顶级 · BMW OE 认证',
        price: 238,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'BMW 1 Series 225%2F40R18 M Sport premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $712–$840 · Premium $952–$1,100',
    },
    {
      size: '205/55R17',
      tabLabel: '205/55R17 · 118i / 120i 标准版',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 舒适节能胎 · 1 Series 标准版预算首选',
        price: 88,
        also: 'Also: Nankang Econex NA-1, Bridgestone Ecopia EP300',
        waText: 'BMW 1 Series 205%2F55R17 standard budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '17" 静音舒适 · 1 Series 日常通勤最佳',
        price: 158,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'BMW 1 Series 205%2F55R17 standard mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '17" 运动舒适兼顾 · 升级驾驶感首选',
        price: 188,
        also: 'Also: Continental SportContact 6, Pirelli P-Zero',
        waText: 'BMW 1 Series 205%2F55R17 standard premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $632–$760 · Premium $752–$880',
    },
  ],

  radarSize: '225/40R18',
  radarSource: 'Continental (17 reviews) · Michelin (14 reviews) · Hankook (10 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
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
      title: 'F40 1 Series M Sport（225/40R18）— 入门 BMW 换胎首选',
      color: 'blue',
      genKey: 'f40',
      body: 'F40 1 Series 是新加坡入门豪华掀背中保有量最大的之一，M Sport 18" 配 <strong>225/40R18</strong> 操控取向明显。Continental SportContact 6（$178/条）干湿地均衡性顶级，是 SG 最受 1 Series 车主好评的选择，整套约 $712。Michelin Pilot Sport 4S（$238/条）干地极限高但噪音稍大。预算型选 Hankook Ventus S1 Evo3（$108/条），价格实惠、货源充足，新加坡多家店备有现货。<strong>Run-flat 提醒：</strong>F40 原配 RFT，换非 RFT 时需配备补胎套装。',
    },
    {
      title: 'F20 1 Series（2015–2020）— 停产但路面存量大',
      color: 'red',
      genKey: 'f20',
      body: 'F20 是新加坡路面存量最大的 BMW 之一，17" 标准版（205/55R17）换胎费用最实惠，Bridgestone Turanza T005（$158/条）静音日用首选，整套约 $632。118i M Sport 18"（225/40R18）和 116i 16"（195/55R16）货源均充足，无需特别预订。F20 是 RWD 布局，后轮磨损比前轮快约 20%，如车轮可互换（非 staggered），建议定期轮换延长轮胎寿命。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the BMW 1 Series use in Singapore?',
      a: 'BMW 1 Series F40 (2020+): 118i/120i standard uses 205/55R17; M Sport uses 225/40R18; M135i xDrive uses 225/35R19. F20 (2015–2020): 116i uses 195/55R16; 118i/120i uses 205/55R17; M Sport uses 225/40R18. All use 5×112 bolt pattern, 66.6mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the BMW 1 Series?',
      a: 'All BMW 1 Series (F20, F40) use 5×112 bolt pattern, 66.6mm centre bore. BMW uses lug BOLTS (not nuts) with M14×1.25 thread, torque 120 Nm. Same bolt pattern as BMW 3 Series, 5 Series, and also Mercedes-Benz and Audi A6/A8 models.',
    },
    {
      q: 'How much does it cost to replace BMW 1 Series tyres in Singapore?',
      a: 'For 225/40R18 (M Sport): budget from $108/tyre; mid-range $178; premium $238. Full set: $432–$952. For 205/55R17 (standard): from $88/tyre; mid-range $158. For 195/55R16 (116i base): from $78/tyre.',
    },
    {
      q: 'Should I switch from run-flat to regular tyres on my BMW 1 Series?',
      a: 'Run-flat tyres (RFT) allow driving after a puncture but are heavier and can feel stiffer. Switching to non-RFT tyres improves ride comfort and usually reduces tyre cost. However, the F40 has no spare wheel — you must carry a tyre inflation kit (repair aerosol + compressor) when using non-RFT. Regular tyres are a popular choice among Singapore owners who prefer comfort over RFT convenience.',
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
