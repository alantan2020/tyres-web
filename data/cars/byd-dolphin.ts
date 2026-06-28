import type { CarData } from './types'

const data: CarData = {
  make: 'BYD',
  model: 'Dolphin',
  makeSlug: 'byd',
  modelSlug: 'dolphin',
  bgWord: 'DOLPHIN',

  seo: {
    title: 'BYD Dolphin Tyre Size & Best Price Singapore | SGCarPass',
    description: 'BYD Dolphin EA1 (2022+) uses 195/60R16 (Active/Comfort) or 205/50R17 (Boost+). ⚠️ 4×100 bolt pattern (NOT 5-bolt). 56.1mm CB. EV. XL-rated recommended. From $88 installed.',
    ogDescription: 'BYD Dolphin EA1: 195/60R16 (Active/Comfort), 205/50R17 (Boost+). ⚠️ 4×100 bolt — NOT 5-bolt. From $88.',
    twitterDescription: 'BYD Dolphin uses 195/60R16 or 205/50R17. ⚠️ 4×100 bolt pattern. EV. From $88.',
    priceFrom: 88,
    oeSize: '195/60R16',
  },

  defaultGen: 'ea1',

  generations: [
    {
      key: 'ea1',
      label: 'EA1 1st Gen (2022–2026)',
      years: '2022–2026',
      note: '⚠️ Important: BYD Dolphin uses a 4×100 bolt pattern — 4 studs, NOT the 5-bolt pattern used by most Japanese and Korean cars. Active and Comfort grades use 195/60R16; Boost+ and higher use 205/50R17 with 17" alloys. As an EV (~1,500 kg), XL-rated low rolling resistance tyres recommended.',
      heroChips: [
        { label: 'Active/Comfort OE', value: '195/60R16' },
        { label: 'Boost+ OE',         value: '205/50R17' },
        { label: '⚠️ 4×100 bolt',   value: 'NOT 5-bolt' },
      ],
      variants: [
        { name: 'Dolphin Active / Comfort (16")', sizes: [
          { tag: 'OE',  size: '195/60R16' },
          { tag: 'XL',  size: '195/60R16 XL', note: 'XL 规格推荐 —— EV 车重约 1,500 kg' },
        ]},
        { name: 'Dolphin Boost+ (17")', sizes: [
          { tag: 'OE',  size: '205/50R17' },
          { tag: 'XL',  size: '205/50R17 XL', note: 'XL 规格推荐' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · Active/Comfort · 16"', width: '6.5J', diameter: '16"', offset: 'ET40', boltPattern: '4×100' },
    { label: '2022+ · Boost+ · 17"',          width: '7.0J', diameter: '17"', offset: 'ET40', boltPattern: '4×100' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M12×1.5 bolt',
    torque: '120 Nm',
    notes: '⚠️ BYD Dolphin uses 4×100 bolt pattern, 56.1mm centre bore. 4-stud wheels ONLY — compatible with Suzuki Swift, Volkswagen Polo (older), Fiat 500 (4×100), but NOT compatible with 5×114.3 Nissan/Toyota/Honda/Hyundai wheels. Verify 4-bolt pattern before purchasing aftermarket wheels.',
  },

  priceTabs: [
    {
      size: '195/60R16',
      tabLabel: '195/60R16 · Dolphin Active / Comfort 16"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 低滚阻节能胎 · Dolphin Active EV 预算首选',
        price: 88,
        also: 'Also: Kumho Ecowing ES31, Nexen N\'Blue HD Plus',
        waText: 'BYD Dolphin 195%2F60R16 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin e.Primacy',
        desc: '16" 低滚阻旗舰 · Dolphin 续航最大化首选',
        price: 168,
        also: 'Also: Continental EcoContact 6, Bridgestone Turanza Eco',
        waText: 'BYD Dolphin 195%2F60R16 mid-range EV tyre quote (Michelin e.Primacy or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental EcoContact 6',
        desc: '16" 低滚阻 · Dolphin 干湿均衡最佳',
        price: 208,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'BYD Dolphin 195%2F60R16 premium EV tyre quote (Continental EcoContact 6)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $672–$800 · Premium $832–$1,000',
    },
    {
      size: '205/50R17',
      tabLabel: '205/50R17 · Dolphin Boost+ 17"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 低滚阻节能胎 · Dolphin Boost+ 预算选',
        price: 98,
        also: 'Also: Kumho Ecowing ES31, Nexen N\'Blue HD Plus',
        waText: 'BYD Dolphin Boost 205%2F50R17 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin e.Primacy',
        desc: '17" 低滚阻旗舰 · Dolphin Boost+ 续航首选',
        price: 188,
        also: 'Also: Continental EcoContact 6, Bridgestone Turanza Eco',
        waText: 'BYD Dolphin Boost 205%2F50R17 mid-range EV tyre quote (Michelin e.Primacy or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 7',
        desc: '17" 运动低滚阻 · Dolphin Boost+ 最佳平衡',
        price: 228,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza 6',
        waText: 'BYD Dolphin Boost 205%2F50R17 premium EV tyre quote (Continental PremiumContact 7)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $752–$920 · Premium $912–$1,080',
    },
  ],

  radarSize: '195/60R16',
  radarSource: 'Michelin (9 reviews) · Continental (8 reviews) · Hankook (7 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget · EV', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 80, 74, 76, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ EV Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 84, 90, 80, 88, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\ne.Primacy',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Range', v: '88', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [88, 86, 86, 82, 84, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Continental\nEcoContact 6',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Range', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Dolphin（195/60R16）— ⚠️ 4×100 螺孔，只能配 4 孔轮圈',
      color: 'red',
      genKey: 'ea1',
      body: '⚠️ <strong>最常见换轮圈错误</strong>：BYD Dolphin 是 4×100 螺孔，很多车主误以为与日韩系车相同（实际上日韩系多为 5×114.3）。4 孔轮圈可选范围少，但原厂轮圈二手货源充足。轮胎方面，195/60R16 是最常见规格，推荐低滚阻型号以最大化续航：<strong>Michelin e.Primacy（$168/条）</strong>在 Dolphin 车主中评价最佳，整套约 $672，续航与噪音表现双优。节省预算则选 Hankook Kinergy Eco2（$88/条），整套约 $352。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the BYD Dolphin use in Singapore?',
      a: 'BYD Dolphin EA1 (2022+): Active and Comfort grades use 195/60R16; Boost+ uses 205/50R17. ⚠️ Important: Dolphin uses 4×100 bolt pattern (4 studs) — NOT compatible with standard 5-bolt wheels. Centre bore 56.1mm.',
    },
    {
      q: 'What bolt pattern does the BYD Dolphin have?',
      a: 'BYD Dolphin has 4×100 bolt pattern — 4 wheel studs on a 100mm bolt circle. This is different from the 5×114.3 used by most Japanese/Korean cars in Singapore. Compatible with Suzuki Swift and other 4×100 vehicles, but NOT with 5-bolt wheels.',
    },
    {
      q: 'How much does it cost to replace BYD Dolphin tyres in Singapore?',
      a: 'For 195/60R16: budget from $88/tyre; mid-range (Michelin e.Primacy) $168; premium $208. Full set $352–$832. For Boost+ 205/50R17: from $98 budget; mid $188; premium $228.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 195/60R16',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin e.Primacy 195/60R16',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin e.Primacy 205/50R17',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
