import type { CarData } from './types'

const data: CarData = {
  make: 'Hyundai',
  model: 'Staria',
  makeSlug: 'hyundai',
  modelSlug: 'staria',
  bgWord: 'STARIA',

  seo: {
    title: 'Hyundai Staria Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Hyundai Staria US4 (2021+) uses 235/55R18 (all trims). ⚠️ 6×139.7 bolt pattern — commercial van platform, NOT 5-bolt like Tucson/Kona. 110.1mm CB, M14×1.5. From $108 installed.',
    ogDescription: 'Hyundai Staria: 235/55R18 (all trims). ⚠️ 6×139.7 bolt — van platform. NOT 5×114.3. 110.1mm CB. From $108.',
    twitterDescription: 'Hyundai Staria uses 235/55R18. ⚠️ 6×139.7 bolt pattern (van platform). From $108.',
    priceFrom: 108,
    oeSize: '235/55R18',
  },

  defaultGen: 'us4',

  generations: [
    {
      key: 'us4',
      label: 'US4 1st Gen (2021–2026)',
      years: '2021–2026',
      note: '⚠️ Critical: Hyundai Staria is built on the Starex/H1 commercial van platform and uses a 6×139.7 bolt pattern — completely different from the 5×114.3 used by Hyundai Tucson, Kona, or Ioniq 5. Do NOT attempt to fit 5-bolt wheels. All trims (Smart, Premium, Signature) use 235/55R18.',
      heroChips: [
        { label: 'All trims OE',       value: '235/55R18' },
        { label: '⚠️ 6×139.7 bolt',   value: 'NOT 5×114.3' },
        { label: 'From installed',      value: '$108', green: true },
      ],
      variants: [
        { name: 'Staria Smart / Premium / Signature (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '235/60R18', note: '稍高边墙，舒适性更好' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021+ · All trims · 18"', width: '7.0J', diameter: '18"', offset: 'ET38', boltPattern: '6×139.7' },
  ],
  rimCommon: {
    centreBore: '110.1mm',
    stud: 'M14×1.5 nut',
    torque: '135 Nm',
    notes: '⚠️ Hyundai Staria uses 6×139.7 bolt pattern, 110.1mm centre bore — same as Hyundai Starex H1, some Kia commercial vans. This is a commercial vehicle platform bolt pattern, NOT compatible with typical 5×114.3 Hyundai passenger car wheels. Always verify 6-bolt pattern before purchasing aftermarket wheels.',
  },

  priceTabs: [
    {
      size: '235/55R18',
      tabLabel: '235/55R18 · All trims 18"',
      budget: {
        name: 'Hankook Kinergy 4S2',
        desc: '18" 节能 SUV 胎 · Staria MPV 预算首选',
        price: 108,
        also: 'Also: Kumho Solus 4S, Nankang Cross Sport SP-9',
        waText: 'Hyundai Staria 235%2F55R18 budget tyre quote (Hankook Kinergy 4S2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4+',
        desc: '18" 静音豪华 · Staria 商务 MPV 最佳舒适选',
        price: 208,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza T005',
        waText: 'Hyundai Staria 235%2F55R18 mid-range tyre quote (Michelin Primacy 4+ or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza 6',
        desc: '18" 极致静音 · Staria 旗舰换胎方案',
        price: 268,
        also: 'Also: Michelin e.Primacy, Continental PremiumContact 7',
        waText: 'Hyundai Staria 235%2F55R18 premium tyre quote (Bridgestone Turanza 6)',
      },
      setEstimate: 'Budget $432–$600 · Mid-range $832–$1,040 · Premium $1,072–$1,280',
    },
  ],

  radarSize: '235/55R18',
  radarSource: 'Michelin (12 reviews) · Bridgestone (9 reviews) · Hankook (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [70, 72, 80, 74, 72, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy 4S2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [88, 86, 92, 78, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '92', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 86, 94, 80, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nTuranza 6',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '94', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Staria（235/55R18）— ⚠️ 必须用 6×139.7 螺孔换装，不能混用 5 孔轮圈',
      color: 'red',
      genKey: 'us4',
      body: '⚠️ <strong>Hyundai Staria 最常见换轮圈错误</strong>：车主误将其与 Tucson/Kona 同平台处理，选购了 5×114.3 轮圈。Staria 基于 Starex 商用车平台，螺孔为 <strong>6×139.7</strong>，中心孔 110.1mm，与一般现代乘用车轮圈完全不兼容。轮胎方面，235/55R18 货源充足，<strong>Michelin Primacy 4+（$208/条）</strong>在舒适 MPV 场景下静音性和操控性均优秀，整套约 $832，是 Staria 最受好评的换胎选择。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Hyundai Staria use in Singapore?',
      a: 'Hyundai Staria US4 (2021+): all trims use 235/55R18. ⚠️ Important: Staria uses 6×139.7 bolt pattern (commercial van platform), NOT 5×114.3 like Hyundai Tucson or Kona. Centre bore 110.1mm.',
    },
    {
      q: 'What bolt pattern does the Hyundai Staria have?',
      a: 'Hyundai Staria has 6×139.7 bolt pattern — 6 wheel studs on a 139.7mm (5.5") bolt circle. This is a commercial vehicle pattern shared with the Hyundai Starex H1. NOT compatible with standard Hyundai passenger car wheels (5×114.3).',
    },
    {
      q: 'How much does it cost to replace Hyundai Staria tyres in Singapore?',
      a: 'For 235/55R18: budget from $108/tyre; mid-range (Michelin Primacy 4+) $208; premium (Bridgestone Turanza 6) $268. Full set $432–$1,072.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 235/55R18',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 235/55R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 235/55R18',      brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
