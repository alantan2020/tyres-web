import type { CarData } from './types'

const data: CarData = {
  make: 'Hyundai',
  model: 'Sonata',
  makeSlug: 'hyundai',
  modelSlug: 'sonata',
  bgWord: 'SONATA',

  seo: {
    title: 'Hyundai Sonata Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Hyundai Sonata DN8 8th Gen (2020+) uses 225/55R17 (2.5 base) or 245/45R18 (2.5 Sport / N Line). 5×114.3, 67.1mm CB. Executive sedan popular with private hire drivers. From $98 installed.',
    ogDescription: 'Hyundai Sonata DN8: 225/55R17 (base), 245/45R18 (Sport/N Line). 5×114.3, 67.1mm. From $98.',
    twitterDescription: 'Hyundai Sonata uses 225/55R17 or 245/45R18 (Sport). 5×114.3 bolt. From $98.',
    priceFrom: 98,
    oeSize: '225/55R17',
  },

  defaultGen: 'dn8',

  generations: [
    {
      key: 'dn8',
      label: 'DN8 8th Gen (2020–2026)',
      years: '2020–2026',
      note: 'Hyundai Sonata DN8 is the current generation. Popular executive sedan, especially with Grab/private hire drivers. 2.5 base and standard use 225/55R17; 2.5 Sport and N Line use 245/45R18 (18" alloys). Also available as Sonata Hybrid.',
      heroChips: [
        { label: '2.5 base OE',         value: '225/55R17' },
        { label: 'Sport / N Line OE',   value: '245/45R18' },
        { label: 'From installed',       value: '$98', green: true },
      ],
      variants: [
        { name: 'Sonata 2.5 base (17")', sizes: [
          { tag: 'OE',  size: '225/55R17' },
          { tag: 'Alt', size: '235/50R17', note: '稍宽，保持 17" 外径' },
        ]},
        { name: 'Sonata 2.5 Sport / N Line (18")', sizes: [
          { tag: 'OE',  size: '245/45R18' },
          { tag: 'Alt', size: '235/45R18', note: '外径接近，略窄' },
        ]},
      ],
    },
    {
      key: 'lf',
      label: 'LF 7th Gen (2014–2019)',
      years: '2014–2019',
      note: '7th gen Sonata LF. Uses 215/55R17 (base) or 235/45R18 (Sport).',
      heroChips: [
        { label: 'LF base OE',   value: '215/55R17' },
        { label: 'LF Sport OE', value: '235/45R18' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: 'Sonata LF base (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
        ]},
        { name: 'Sonata LF Sport (18")', sizes: [
          { tag: 'OE',  size: '235/45R18' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: 'DN8 2020+ · base · 17"',        width: '7.0J', diameter: '17"', offset: 'ET49', boltPattern: '5×114.3' },
    { label: 'DN8 2020+ · Sport/N Line · 18"', width: '7.5J', diameter: '18"', offset: 'ET49', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M14×1.5 bolt',
    torque: '140 Nm',
    notes: 'Hyundai Sonata uses 5×114.3 bolt pattern, 67.1mm centre bore — same as Elantra, Tucson, Ioniq 5/6. M14×1.5 wheel bolts, torque 140 Nm.',
  },

  priceTabs: [
    {
      size: '225/55R17',
      tabLabel: '225/55R17 · Sonata 2.5 base 17"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 节能城市胎 · Sonata 日用通勤预算首选',
        price: 98,
        also: 'Also: Kumho Ecowing ES31, Nexen N\'Blue HD Plus',
        waText: 'Hyundai Sonata 225%2F55R17 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '17" 静音舒适 · Sonata 轿车最受好评',
        price: 178,
        also: 'Also: Bridgestone Turanza T005, Continental PremiumContact 6',
        waText: 'Hyundai Sonata 225%2F55R17 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 7',
        desc: '17" 干湿均衡旗舰 · Sonata Sport 换胎提升',
        price: 228,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza 6',
        waText: 'Hyundai Sonata 225%2F55R17 premium tyre quote (Continental PremiumContact 7)',
      },
      setEstimate: 'Budget $392–$500 · Mid-range $712–$880 · Premium $912–$1,080',
    },
    {
      size: '245/45R18',
      tabLabel: '245/45R18 · Sport / N Line 18"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" 运动节能胎 · Sonata Sport 预算选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Hyundai Sonata Sport 245%2F45R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '18" 干湿均衡 · Sonata N Line 最推荐',
        price: 218,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Hyundai Sonata Sport 245%2F45R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '18" 运动旗舰 · Sonata N Line 驾感升级',
        price: 268,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Hyundai Sonata Sport 245%2F45R18 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $472–$600 · Mid-range $872–$1,040 · Premium $1,072–$1,280',
    },
  ],

  radarSize: '225/55R17',
  radarSource: 'Michelin (14 reviews) · Continental (11 reviews) · Hankook (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [70, 72, 78, 72, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 84, 90, 78, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [90, 90, 88, 80, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Continental\nPremiumContact 7',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Sonata DN8（225/55R17）— 高里程私召车首选静音耐磨胎',
      color: 'blue',
      genKey: 'dn8',
      body: 'Hyundai Sonata 在新加坡以高里程私召（Grab）用车著称，换胎需求侧重 <strong>耐磨、静音</strong>。<strong>Michelin Primacy 4（$178/条）</strong>是最受 Sonata 车主青睐的选择，保质里程 50,000 km+，静音性在同级顶级，整套约 $712，是新加坡私召司机最常选的方案。对于 Sonata N Line 等运动款（245/45R18），Continental PremiumContact 6 是干湿抓地和静音兼顾的最佳选择。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Hyundai Sonata use in Singapore?',
      a: 'Hyundai Sonata DN8 8th Gen (2020+): 2.5 base uses 225/55R17; Sport and N Line use 245/45R18. 5×114.3 bolt pattern, 67.1mm centre bore.',
    },
    {
      q: 'How much does it cost to replace Hyundai Sonata tyres in Singapore?',
      a: 'For 225/55R17 (base): budget from $98/tyre; mid-range (Michelin Primacy 4) $178; premium $228. Full set $392–$912. For Sport 245/45R18: from $118 budget; mid $218; premium $268.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 225/55R17',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 225/55R17',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Continental PremiumContact 6 245/45R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
