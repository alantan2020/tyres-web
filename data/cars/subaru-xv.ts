import type { CarData } from './types'

const data: CarData = {
  make: 'Subaru',
  model: 'XV / Crosstrek',
  makeSlug: 'subaru',
  modelSlug: 'xv',
  bgWord: 'CROSSTREK',

  seo: {
    title: 'Subaru XV / Crosstrek Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Subaru XV GT (2017–2023) and Crosstrek GU (2023+) both use 225/60R17. 5×100 bolt pattern — NOT 5×114.3. Must replace all 4 tyres due to AWD. From $88 installed in Singapore.',
    ogDescription: 'Subaru XV GT / Crosstrek GU: 225/60R17 across all trims. 5×100, 56.1mm CB, M12×1.25. Replace all 4 for AWD. From $88 installed in Singapore.',
    twitterDescription: 'Subaru XV / Crosstrek uses 225/60R17. 5×100 bolt pattern. Must replace all 4 tyres. From $88 in Singapore.',
    priceFrom: 88,
    oeSize: '225/60R17',
  },

  defaultGen: 'gu',

  generations: [
    {
      key: 'gu',
      label: 'GU Crosstrek (2023–2026)',
      years: '2023–2026',
      note: 'Renamed from XV to Crosstrek globally in 2023. Same platform as GT, same tyre sizes, same bolt pattern. Subaru AWD: always replace all 4 tyres together.',
      heroChips: [
        { label: 'All trims', value: '225/60R17' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '2.0 / e-BOXER hybrid (all SG trims)', sizes: [
          { tag: 'OE',  size: '225/60R17' },
          { tag: 'Alt', size: '235/55R17', note: '宽 10mm，高度相近' },
        ]},
      ],
    },
    {
      key: 'gt',
      label: 'GT XV 3rd Gen (2017–2023)',
      years: '2017–2023',
      note: 'Subaru AWD: always replace all 4 tyres together. Never replace fewer than a full set.',
      heroChips: [
        { label: 'GT3 / GT7 (all SG)', value: '225/60R17' },
        { label: 'From installed',     value: '$88', green: true },
      ],
      variants: [
        { name: '2.0i / 2.0i-S / EyeSight (GT3/GT7)', sizes: [
          { tag: 'OE',  size: '225/60R17' },
          { tag: 'Alt', size: '235/55R17', note: '宽 10mm 升级，高度保持一致' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2023–2026 · GU Crosstrek · all trims · 17"', width: '7.0J', diameter: '17"', offset: 'ET55', boltPattern: '5×100' },
    { label: '2017–2023 · GT XV · all SG trims · 17"',     width: '7.0J', diameter: '17"', offset: 'ET55', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M12×1.25',
    torque: '89 Nm',
    warning: 'Subaru 5×100 bolt pattern is NOT compatible with Honda/Nissan/Toyota (5×114.3). ⚠️ e-BOXER hybrid XV/Crosstrek owners: replace all 4 tyres together — rear electric motor requires matched tyre circumferences. Using mismatched tyres can overheat the rear motor.',
  },

  priceTabs: [
    {
      size: '225/60R17',
      tabLabel: '225/60R17 · XV / Crosstrek 全系',
      budget: {
        name: 'Hankook Kinergy 4S2 H750',
        desc: '17" 日常 SUV 舒适胎 · XV 城市代步实惠首选',
        price: 88,
        also: 'Also: Kumho Ecsta HS51, Blackhawk Street-H HH11',
        waText: 'Subaru XV 225%2F60R17 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '湿地 A 级 · 静音舒适 · 新加坡 Subaru XV 车主最多好评',
        price: 138,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Subaru XV 225%2F60R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地安全 · e-BOXER hybrid 推荐低滚阻设计延续续航',
        price: 178,
        also: 'Also: Pirelli Scorpion Verde, Goodyear EfficientGrip Performance 2',
        waText: 'Subaru XV Crosstrek 225%2F60R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $352–$430 · Mid-range $552–$640 · Premium $712–$820',
    },
  ],

  radarSize: '225/60R17',
  radarSource: 'Hankook (11 reviews) · Bridgestone (19 reviews) · Michelin (15 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [66, 74, 76, 68, 74, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy 4S2 H750',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '76', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [80, 84, 82, 78, 84, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [86, 88, 82, 80, 80, 74], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'Wear', v: '82', hi: true }, { k: 'Value', v: '74', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'GT XV / GU Crosstrek 车主（225/60R17，须 4 条全换）',
      color: 'blue',
      genKey: 'gu',
      body: 'XV / Crosstrek 全系配 Subaru Symmetrical AWD，<strong>4 条必须同时更换、同一品牌型号</strong>。Bridgestone Turanza T005（$138/条，整套 $552）是新加坡 XV 车主最多好评的选择——湿地 A 级，NVH 静音，日常通勤与偶尔郊外穿越都胜任。e-BOXER hybrid 版本：选低滚阻胎（Michelin Primacy 4+ 或 Bridgestone Ecopia）可额外延长电池续航约 3-5%。',
    },
    {
      title: 'e-BOXER hybrid 车主特别提醒',
      color: 'red',
      genKey: 'gu',
      body: 'e-BOXER XV / Crosstrek 的后轴由电动马达驱动，对 4 条轮胎直径一致性要求更严格。请避免：① 只换 2 条；② 前后用不同品牌；③ 更换不同高度尺码（如把前轮的 225/60R17 换成 225/55R17）。任何前后直径差都会让电动马达持续过补偿，缩短电机寿命。换胎前务必告知店家您的车型是 e-BOXER。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Subaru XV use in Singapore?',
      a: 'The Subaru XV GT (2017–2023) and Crosstrek GU (2023+) both use 225/60R17 across all Singapore trims. There is only one tyre size for the XV/Crosstrek in Singapore regardless of trim level. Check the door jamb sticker to confirm.',
    },
    {
      q: 'Is the Subaru XV the same as the Subaru Crosstrek?',
      a: 'Yes. Subaru renamed the XV to Crosstrek globally starting from the GU generation (2023). In Singapore, the Motor Image-sold version was called XV (GT generation, 2017–2023) and is now called Crosstrek (GU, 2023+). Both use identical tyre sizes (225/60R17) and bolt patterns (5×100).',
    },
    {
      q: 'What is the bolt pattern of the Subaru XV / Crosstrek?',
      a: 'Subaru XV and Crosstrek use 5×100 bolt pattern with 56.1mm centre bore. Lug nut thread is M12×1.25 (finer than most Japanese cars). Tightening torque is 89 Nm. This is NOT compatible with Honda, Nissan, or Toyota which use 5×114.3.',
    },
    {
      q: 'How much does it cost to replace Subaru XV / Crosstrek tyres in Singapore?',
      a: 'For 225/60R17: budget from $88 per tyre installed; mid-range $138–$155; premium $178–$205. A full set of 4 mid-range tyres costs approximately $552–$640. Note: due to Subaru AWD requirements, always budget for 4 tyres, not 2.',
    },
    {
      q: 'Do I have to replace all 4 tyres on a Subaru XV at once?',
      a: 'Yes. Subaru Symmetrical AWD (and e-BOXER rear motor on hybrid variants) requires all 4 tyres to be within 2/32" of tread depth. Replacing only 2 tyres puts stress on the AWD centre differential or rear electric motor. Always replace all 4 at once with the same brand and model.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 H750 225/60R17', brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 225/60R17', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/60R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
