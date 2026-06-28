import type { CarData } from './types'

const data: CarData = {
  make: 'Subaru',
  model: 'Legacy',
  makeSlug: 'subaru',
  modelSlug: 'legacy',
  bgWord: 'LEGACY',

  seo: {
    title: 'Subaru Legacy Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Subaru Legacy BS 6th gen (2014–2019) uses 215/50R17. 5×100 bolt pattern — NOT 5×114.3. Must replace all 4 tyres due to Symmetrical AWD. From $88 installed in Singapore.',
    ogDescription: 'Subaru Legacy BS: 215/50R17 across all trims. 5×100, 56.1mm CB, M12×1.25. AWD requires replacing all 4 tyres. From $88 installed in Singapore.',
    twitterDescription: 'Subaru Legacy BS uses 215/50R17. 5×100 bolt pattern. Must replace all 4 tyres. From $88 in Singapore.',
    priceFrom: 88,
    oeSize: '215/50R17',
  },

  defaultGen: 'bs',

  generations: [
    {
      key: 'bs',
      label: 'BS 6th Gen (2014–2019)',
      years: '2014–2019',
      note: 'Subaru Legacy BS was officially sold by Motor Image Singapore. The 7th gen BT Legacy is not widely available here. Symmetrical AWD: always replace all 4 tyres at once.',
      heroChips: [
        { label: '2.5i / 2.5i-S (SG)', value: '215/50R17' },
        { label: 'From installed',       value: '$88', green: true },
      ],
      variants: [
        { name: '2.5i / 2.5i-S EyeSight (all SG trims)', sizes: [
          { tag: 'OE',  size: '215/50R17' },
          { tag: 'Alt', size: '225/45R17', note: '宽 10mm 运动感升级，外径相近' },
        ]},
      ],
    },
    {
      key: 'bn',
      label: 'BN / B4 5th Gen (2009–2014)',
      years: '2009–2014',
      heroChips: [
        { label: '2.5i / 3.6R', value: '215/50R17' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '2.5i GT / 3.6R (SG trims)', sizes: [
          { tag: 'OE',  size: '215/50R17' },
          { tag: 'Alt', size: '225/45R17', note: '稳定性小幅提升' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2014–2019 · BS · 2.5i-S · 17"',  width: '7.0J', diameter: '17"', offset: 'ET55', boltPattern: '5×100' },
    { label: '2014–2019 · BS · 2.5i · 17"',     width: '7.0J', diameter: '17"', offset: 'ET55', boltPattern: '5×100' },
    { label: '2009–2014 · BN/B4 · all · 17"',   width: '7.0J', diameter: '17"', offset: 'ET55', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M12×1.25',
    torque: '89 Nm',
    warning: 'Subaru 5×100 bolt pattern is NOT compatible with Honda/Nissan/Toyota (5×114.3). ⚠️ Legacy Symmetrical AWD: always replace all 4 tyres at once with the same brand and model.',
  },

  priceTabs: [
    {
      size: '215/50R17',
      tabLabel: '215/50R17 · Legacy BS/BN 主力尺码',
      budget: {
        name: 'Hankook Kinergy 4S2 H750',
        desc: '17" 舒适轿车胎 · Legacy 日常通勤实惠选择',
        price: 88,
        also: 'Also: Kumho Ecsta HS51, Nankang NS-25',
        waText: 'Subaru Legacy 215%2F50R17 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · 湿地 A 级 · Legacy 车主好评最稳定',
        price: 138,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Subaru Legacy 215%2F50R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: 'Wet grip A 级 · 4 条全换最佳方案 · 雨天制动最短',
        price: 178,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'Subaru Legacy 215%2F50R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $352–$430 · Mid-range $552–$640 · Premium $712–$820',
    },
  ],

  radarSize: '215/50R17',
  radarSource: 'Hankook (10 reviews) · Bridgestone (17 reviews) · Michelin (13 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
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
      scores: [86, 88, 82, 80, 82, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'Wear', v: '82', hi: true }, { k: 'Value', v: '72', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Legacy BS 车主（215/50R17，须 4 条全换）',
      color: 'blue',
      genKey: 'bs',
      body: 'Legacy BS 是 Subaru 的旗舰轿车，原配 <strong>215/50R17</strong>，扁平比 50 代表侧壁较低、操控反应较锐利但路面震动也稍多。同 Outback/Forester 一样，<strong>AWD 系统要求 4 条统一型号同时更换</strong>。Bridgestone Turanza T005（$138/条，整套 $552）是平衡操控、静音与安全性的最佳选择。Legacy 车主若追求更运动的驾驶感，可考虑升 225/45R17（宽 10mm，同直径），但需确认轮拱间隙。',
    },
    {
      title: 'Legacy 换胎必须做四轮定位',
      color: 'red',
      genKey: 'bs',
      body: '215/50R17 扁平比较低，轮胎侧壁薄，<strong>不当的四轮定位会导致异常磨耗</strong>（胎肩磨耗或中间磨耗）。换完轮胎后强烈建议做四轮定位，新加坡价格约 $80-120。Legacy 由于全时 AWD，四轮定位超差还可能影响 AWD 系统的扭矩分配，导致一侧轮胎比另一侧磨耗更快。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Subaru Legacy use in Singapore?',
      a: 'The Subaru Legacy BS 6th gen (2014–2019) uses 215/50R17 across all Singapore trims (2.5i and 2.5i-S EyeSight). The earlier BN/B4 5th gen (2009–2014) also uses 215/50R17. Check the door jamb sticker to confirm your size.',
    },
    {
      q: 'What is the bolt pattern of the Subaru Legacy?',
      a: 'All Subaru Legacy generations use 5×100 bolt pattern with 56.1mm centre bore. Lug nut thread is M12×1.25 (finer thread than most Japanese cars). Tightening torque is 89 Nm. NOT compatible with Honda, Nissan, or Toyota which use 5×114.3.',
    },
    {
      q: 'Is the Subaru Legacy still available in Singapore?',
      a: 'The BS 6th gen Legacy was sold by Motor Image Singapore until around 2019. The newer BT 7th gen Legacy is not officially imported to Singapore in meaningful volumes — Motor Image focuses on the Outback instead. Many BS Legacy units are still on the road, and 215/50R17 tyres are readily available.',
    },
    {
      q: 'How much does it cost to replace Subaru Legacy tyres in Singapore?',
      a: 'For 215/50R17: budget from $88 per tyre installed; mid-range $138–$155; premium $178–$205. A full set of 4 mid-range tyres costs approximately $552–$640. Due to Symmetrical AWD requirements, always replace all 4 tyres at the same time.',
    },
    {
      q: 'Can I put 225/45R17 instead of 215/50R17 on the Subaru Legacy?',
      a: 'Yes, 225/45R17 is a common upgrade for Legacy owners seeking a sportier look. The overall diameter difference is less than 1%, which is within acceptable tolerance. The tyre is 10mm wider, which gives marginally better dry grip at the expense of slightly more road noise. Ensure all 4 tyres are the same size if you make this change.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 H750 215/50R17', brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/50R17', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/50R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
