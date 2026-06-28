import type { CarData } from './types'

const data: CarData = {
  make: 'Kia',
  model: 'Cerato',
  makeSlug: 'kia',
  modelSlug: 'cerato',
  bgWord: 'CERATO',

  seo: {
    title: 'Kia Cerato Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Kia Cerato BD 4th Gen (2019+) uses 205/55R16 (1.6 LX base) or 225/45R17 (1.6 GT Line). 5×114.3, 67.1mm CB, M12×1.5 nut, 110 Nm. Popular private hire sedan. From $78 installed.',
    ogDescription: 'Kia Cerato BD: 205/55R16 (1.6 LX base), 225/45R17 (GT Line). 5×114.3, 67.1mm. Private hire favourite. From $78.',
    twitterDescription: 'Kia Cerato uses 205/55R16 (base) or 225/45R17 (GT Line). 5×114.3 bolt. From $78.',
    priceFrom: 78,
    oeSize: '205/55R16',
  },

  defaultGen: 'bd',

  generations: [
    {
      key: 'bd',
      label: 'BD 4th Gen (2019–2024)',
      years: '2019–2024',
      note: 'Current Kia Cerato. Extremely popular as private hire (Grab) vehicle in Singapore. 1.6 LX and EX base grades use 205/55R16; 1.6 GT Line uses 225/45R17 with sportier alloys.',
      heroChips: [
        { label: '1.6 LX / EX OE', value: '205/55R16' },
        { label: 'GT Line OE',      value: '225/45R17' },
        { label: 'From installed',  value: '$78', green: true },
      ],
      variants: [
        { name: 'Cerato 1.6 LX / EX (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
          { tag: 'Alt', size: '215/50R16', note: '稍宽，保持 16" 外径' },
        ]},
        { name: 'Cerato 1.6 GT Line (17")', sizes: [
          { tag: 'OE',  size: '225/45R17' },
          { tag: 'Alt', size: '215/45R17', note: '外径接近，略窄' },
        ]},
      ],
    },
    {
      key: 'yd',
      label: 'YD 3rd Gen (2013–2019)',
      years: '2013–2019',
      note: 'Previous Cerato. Common private hire fleet vehicle. 205/55R16 (base) or 225/45R17 (SX sport).',
      heroChips: [
        { label: 'YD base OE',  value: '205/55R16' },
        { label: 'YD SX OE',   value: '225/45R17' },
        { label: 'From installed', value: '$78', green: true },
      ],
      variants: [
        { name: 'YD base (16")', sizes: [{ tag: 'OE', size: '205/55R16' }] },
        { name: 'YD SX sport (17")', sizes: [{ tag: 'OE', size: '225/45R17' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'BD 2019+ · LX/EX base · 16"',  width: '6.5J', diameter: '16"', offset: 'ET51', boltPattern: '5×114.3' },
    { label: 'BD 2019+ · GT Line · 17"',      width: '7.0J', diameter: '17"', offset: 'ET51', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5 nut',
    torque: '110 Nm',
    notes: 'Kia Cerato uses 5×114.3 bolt pattern, 67.1mm centre bore. M12×1.5 lug nuts (not bolts), torque 110 Nm — similar to Hyundai Elantra. Same bolt pattern as most Hyundai/Kia models.',
  },

  priceTabs: [
    {
      size: '205/55R16',
      tabLabel: '205/55R16 · Cerato 1.6 LX / EX base',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 节能耐磨胎 · Cerato 私召首选，里程党必备',
        price: 78,
        also: 'Also: Kumho Ecowing ES31, Nexen N\'Blue HD Plus',
        waText: 'Kia Cerato 205%2F55R16 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '16" 静音耐磨旗舰 · Cerato Grab 司机最受推荐',
        price: 128,
        also: 'Also: Bridgestone Turanza T005, Continental PremiumContact 6',
        waText: 'Kia Cerato 205%2F55R16 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza T005',
        desc: '16" 高里程静音 · Cerato 长期使用最佳',
        price: 148,
        also: 'Also: Michelin Primacy 4+, Continental ComfortContact 7',
        waText: 'Kia Cerato 205%2F55R16 premium tyre quote (Bridgestone Turanza T005)',
      },
      setEstimate: 'Budget $312–$400 · Mid-range $512–$640 · Premium $592–$720',
    },
    {
      size: '225/45R17',
      tabLabel: '225/45R17 · Cerato GT Line 17"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '17" 运动节能胎 · Cerato GT Line 预算选',
        price: 88,
        also: 'Also: Kumho Ecsta PS91, Nexen N\'Blue HD Plus',
        waText: 'Kia Cerato GT Line 225%2F45R17 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '17" 干湿均衡 · GT Line 最推荐平衡选择',
        price: 158,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'Kia Cerato GT Line 225%2F45R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '17" 静音旗舰 · GT Line 驾感升级',
        price: 198,
        also: 'Also: Bridgestone Turanza 6, Continental PremiumContact 7',
        waText: 'Kia Cerato GT Line 225%2F45R17 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $632–$760 · Premium $792–$960',
    },
  ],

  radarSize: '205/55R16',
  radarSource: 'Michelin (16 reviews) · Bridgestone (12 reviews) · Hankook (11 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 70, 78, 72, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '70', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 84, 90, 78, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [84, 84, 90, 82, 82, 74], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Cerato（205/55R16）— 新加坡私召车王，耐磨里程首选',
      color: 'blue',
      genKey: 'bd',
      body: 'Kia Cerato 是新加坡 Grab 私召车最常见车型之一，高里程使用场景下换胎需求侧重 <strong>超长寿命和性价比</strong>。205/55R16 是最主流规格。<strong>Michelin Primacy 4（$128/条）</strong>在 Cerato 私召车主中口碑最佳，50,000 km+ 寿命保证，整套约 $512。预算有限的情况下 Hankook Kinergy Eco2（$78/条）是性价比最高的高里程选择，整套约 $312，适合 5 万公里大换。GT Line（225/45R17）若追求运动驾感，Continental PremiumContact 6 是干湿平衡最佳选择。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Kia Cerato use in Singapore?',
      a: 'Kia Cerato BD 4th Gen (2019+): 1.6 LX/EX base uses 205/55R16; GT Line uses 225/45R17. YD 3rd Gen (2013–2019): same sizes. 5×114.3 bolt pattern, 67.1mm centre bore.',
    },
    {
      q: 'What are the best tyres for Grab drivers using a Kia Cerato?',
      a: 'For high-mileage private hire use: Michelin Primacy 4 (205/55R16, $128/tyre) offers 50,000 km+ lifespan. Budget option: Hankook Kinergy Eco2 ($78/tyre) with solid mileage. Continental PremiumContact 6 is recommended for wet-weather performance.',
    },
    {
      q: 'How much does it cost to replace Kia Cerato tyres in Singapore?',
      a: 'For 205/55R16 (base): budget from $78/tyre; mid-range (Michelin Primacy 4) $128; premium $148. Full set $312–$592. For GT Line 225/45R17: from $88 budget; mid $158; premium $198.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 205/55R16',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '78',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 205/55R16',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Continental PremiumContact 6 225/45R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
