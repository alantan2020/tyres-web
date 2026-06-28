import type { CarData } from './types'

const data: CarData = {
  make: 'Subaru',
  model: 'Impreza',
  makeSlug: 'subaru',
  modelSlug: 'impreza',
  bgWord: 'IMPREZA',

  seo: {
    title: 'Subaru Impreza Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Subaru Impreza GK/GT (2017+) uses 205/55R16 (base) or 215/50R17 (Sport/RS). ⚠️ 5×100 bolt pattern (NOT 5×114.3), 56.1mm CB. AWD. From $88 installed.',
    ogDescription: 'Subaru Impreza GK/GT: 205/55R16 (base), 215/50R17 (Sport). ⚠️ 5×100 bolt — NOT 5×114.3. AWD. From $88.',
    twitterDescription: 'Subaru Impreza uses 205/55R16 or 215/50R17. ⚠️ 5×100 bolt pattern (not 5×114.3). AWD. From $88.',
    priceFrom: 88,
    oeSize: '205/55R16',
  },

  defaultGen: 'gk',

  generations: [
    {
      key: 'gk',
      label: 'GK/GT 5th Gen (2017–2026)',
      years: '2017–2026',
      note: '⚠️ Important: Subaru Impreza uses 5×100 bolt pattern — NOT the 5×114.3 used by most Japanese/Korean cars. Base grade (GK sedan / GT hatchback) uses 205/55R16; Sport and RS use 215/50R17. All trims are Subaru Symmetrical AWD.',
      heroChips: [
        { label: 'Base OE',         value: '205/55R16' },
        { label: 'Sport / RS OE',  value: '215/50R17' },
        { label: '⚠️ 5×100 PCD', value: 'NOT 5×114.3' },
      ],
      variants: [
        { name: 'Impreza base (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
          { tag: 'Alt', size: '215/50R16', note: '稍宽，保持 16" 外径' },
        ]},
        { name: 'Impreza Sport / RS (17")', sizes: [
          { tag: 'OE',  size: '215/50R17' },
          { tag: 'Alt', size: '225/45R17', note: '稍宽，运动感更强' },
        ]},
      ],
    },
    {
      key: 'gj',
      label: 'GJ/GP 4th Gen (2011–2017)',
      years: '2011–2017',
      note: '4th gen Impreza. 205/55R16 (base) or 225/45R17 (Sport/WRX-based). Same 5×100 bolt pattern.',
      heroChips: [
        { label: 'GJ base OE',   value: '205/55R16' },
        { label: 'GJ Sport OE', value: '225/45R17' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'GJ base (16")', sizes: [{ tag: 'OE', size: '205/55R16' }] },
        { name: 'GJ Sport (17")', sizes: [{ tag: 'OE', size: '225/45R17' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'GK/GT 2017+ · base · 16"',       width: '6.5J', diameter: '16"', offset: 'ET48', boltPattern: '5×100' },
    { label: 'GK/GT 2017+ · Sport/RS · 17"',   width: '7.0J', diameter: '17"', offset: 'ET48', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M12×1.25 nut',
    torque: '120 Nm',
    notes: '⚠️ Subaru Impreza uses 5×100 bolt pattern, 56.1mm centre bore — same as all Subaru Impreza/WRX (non-STI), Forester, XV/Crosstrek (pre-2019), and Toyota Celica/GT-S. NOT compatible with 5×114.3 wheels. AWD: replace all 4 tyres together to avoid drivetrain damage.',
  },

  priceTabs: [
    {
      size: '205/55R16',
      tabLabel: '205/55R16 · Impreza base 16"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 节能城市胎 · Impreza base 预算首选',
        price: 88,
        also: 'Also: Kumho Ecowing ES31, Nexen N\'Blue HD Plus',
        waText: 'Subaru Impreza 205%2F55R16 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '16" 静音舒适 · Impreza AWD 推荐整套换胎',
        price: 128,
        also: 'Also: Bridgestone Turanza T005, Continental PremiumContact 6',
        waText: 'Subaru Impreza 205%2F55R16 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza T005',
        desc: '16" 静音耐磨 · Impreza AWD 最佳平衡',
        price: 148,
        also: 'Also: Michelin Primacy 4+, Continental PremiumContact 7',
        waText: 'Subaru Impreza 205%2F55R16 premium tyre quote (Bridgestone Turanza T005)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $512–$640 · Premium $592–$720',
    },
    {
      size: '215/50R17',
      tabLabel: '215/50R17 · Impreza Sport / RS 17"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '17" 运动节能胎 · Impreza Sport 预算选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Nexen N\'Fera SU1',
        waText: 'Subaru Impreza Sport 215%2F50R17 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '17" 干湿均衡 · Impreza Sport AWD 最推荐',
        price: 178,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'Subaru Impreza Sport 215%2F50R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '17" 静音旗舰 · Impreza Sport 驾感升级',
        price: 218,
        also: 'Also: Bridgestone Turanza 6, Continental PremiumContact 7',
        waText: 'Subaru Impreza Sport 215%2F50R17 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $712–$880 · Premium $872–$1,040',
    },
  ],

  radarSize: '205/55R16',
  radarSource: 'Michelin (11 reviews) · Continental (9 reviews) · Hankook (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 78, 72, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
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
      title: 'Impreza（205/55R16）— ⚠️ 5×100 螺孔，AWD 必须 4 条一起换',
      color: 'red',
      genKey: 'gk',
      body: '⚠️ Subaru Impreza 两大注意事项：①<strong>5×100 螺孔</strong>——不能使用 5×114.3 轮圈（如 Toyota/Honda/Nissan/Hyundai 轮圈）。②<strong>Symmetrical AWD 必须 4 条同款换胎</strong>——如只换 2 条，前后胎直径差异会导致中央差速器过热损坏，修理费用极高。整套 Michelin Primacy 4（$128/条，约 $512）是新加坡 Impreza 车主最常见的最优方案。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Subaru Impreza use in Singapore?',
      a: 'Subaru Impreza GK/GT (2017+): base uses 205/55R16; Sport and RS use 215/50R17. ⚠️ 5×100 bolt pattern (NOT 5×114.3). 56.1mm centre bore. AWD: replace all 4 tyres together.',
    },
    {
      q: 'Can I replace just 2 tyres on the Subaru Impreza?',
      a: 'Not recommended. Subaru Symmetrical AWD requires all 4 tyres to be the same. Different tyres with different rolling circumferences stress the centre differential, potentially causing overheating and premature failure. Always replace all 4 at once.',
    },
    {
      q: 'How much does it cost to replace Subaru Impreza tyres in Singapore?',
      a: 'For 205/55R16 (base): budget from $88/tyre; mid-range (Michelin Primacy 4) $128; premium $148. Full set $352–$592. For Sport 215/50R17: from $98 budget; mid $178; premium $218.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 205/55R16',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 205/55R16',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Continental PremiumContact 6 215/50R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
