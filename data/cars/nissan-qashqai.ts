import type { CarData } from './types'

const data: CarData = {
  make: 'Nissan',
  model: 'Qashqai',
  makeSlug: 'nissan',
  modelSlug: 'qashqai',
  bgWord: 'QASHQAI',

  seo: {
    title: 'Nissan Qashqai Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Nissan Qashqai J12 (2021+) uses 225/55R17 (Acenta) or 235/50R18 (Tekna). J11 (2014–2021) uses 225/55R17 or 225/50R18. 5×114.3, 66.1mm CB, M14×1.5 bolt. From $98 installed.',
    ogDescription: 'Nissan Qashqai: J12 225/55R17 or 235/50R18; J11 225/55R17 or 225/50R18. 5×114.3, 66.1mm. From $98.',
    twitterDescription: 'Nissan Qashqai uses 225/55R17 or 235/50R18. 5×114.3 bolt. From $98.',
    priceFrom: 98,
    oeSize: '225/55R17',
  },

  defaultGen: 'j12',

  generations: [
    {
      key: 'j12',
      label: 'J12 3rd Gen (2021–2026)',
      years: '2021–2026',
      note: 'Current generation Nissan Qashqai. Acenta (entry) uses 225/55R17; N-Connecta and Tekna use 235/50R18. Available as petrol and mild hybrid (e-Power) in Singapore.',
      heroChips: [
        { label: 'Acenta OE',         value: '225/55R17' },
        { label: 'N-Connecta/Tekna OE', value: '235/50R18' },
        { label: 'From installed',     value: '$98', green: true },
      ],
      variants: [
        { name: 'Qashqai J12 Acenta (17")', sizes: [
          { tag: 'OE',  size: '225/55R17' },
          { tag: 'Alt', size: '235/50R17', note: '稍宽，保持 17" 外径' },
        ]},
        { name: 'Qashqai J12 N-Connecta / Tekna (18")', sizes: [
          { tag: 'OE',  size: '235/50R18' },
          { tag: 'Alt', size: '235/45R18', note: '外径稍小，注意里程表偏差' },
        ]},
      ],
    },
    {
      key: 'j11',
      label: 'J11 2nd Gen (2014–2021)',
      years: '2014–2021',
      note: 'Previous generation Qashqai J11. Very common in Singapore. Base grade uses 225/55R17; higher trims use 225/50R18.',
      heroChips: [
        { label: 'J11 base OE',  value: '225/55R17' },
        { label: 'J11 higher OE', value: '225/50R18' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: 'J11 base (17")', sizes: [
          { tag: 'OE',  size: '225/55R17' },
        ]},
        { name: 'J11 higher trims (18")', sizes: [
          { tag: 'OE',  size: '225/50R18' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: 'J12 2021+ · Acenta · 17"',             width: '7.0J', diameter: '17"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: 'J12 2021+ · N-Connecta/Tekna · 18"',  width: '7.5J', diameter: '18"', offset: 'ET40', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '66.1mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Nissan Qashqai uses 5×114.3 bolt pattern, 66.1mm centre bore — same as Nissan X-Trail, Serena, Juke. M14×1.5 wheel bolts, torque 130 Nm.',
  },

  priceTabs: [
    {
      size: '225/55R17',
      tabLabel: '225/55R17 · Acenta 17"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 节能城市胎 · Qashqai base 预算首选',
        price: 98,
        also: 'Also: Kumho Ecsta KH27, Nexen N\'Blue HD Plus',
        waText: 'Nissan Qashqai 225%2F55R17 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '17" 静音舒适 · Qashqai 城市 SUV 最推荐',
        price: 178,
        also: 'Also: Bridgestone Turanza T005, Continental PremiumContact 6',
        waText: 'Nissan Qashqai 225%2F55R17 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 7',
        desc: '17" 干湿均衡旗舰 · Qashqai 换胎提升驾感',
        price: 228,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza 6',
        waText: 'Nissan Qashqai 225%2F55R17 premium tyre quote (Continental PremiumContact 7)',
      },
      setEstimate: 'Budget $392–$500 · Mid-range $712–$880 · Premium $912–$1,080',
    },
    {
      size: '235/50R18',
      tabLabel: '235/50R18 · N-Connecta / Tekna 18"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" 运动节能胎 · Qashqai Tekna 预算选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Nissan Qashqai Tekna 235%2F50R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '18" 干湿均衡 · Tekna 驾感最佳',
        price: 218,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Nissan Qashqai Tekna 235%2F50R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '18" 运动旗舰 · Qashqai Tekna 驾感升级',
        price: 268,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Nissan Qashqai Tekna 235%2F50R18 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $472–$600 · Mid-range $872–$1,040 · Premium $1,072–$1,280',
    },
  ],

  radarSize: '225/55R17',
  radarSource: 'Michelin (12 reviews) · Continental (10 reviews) · Hankook (8 reviews). Source: TyreReviews.com.',
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
      title: 'Qashqai（225/55R17）— 城市紧凑 SUV，推荐静音舒适胎',
      color: 'blue',
      genKey: 'j12',
      body: 'Nissan Qashqai 定位城市紧凑 SUV，使用场景以公路通勤为主。225/55R17 是最常见的 17" 规格，<strong>Michelin Primacy 4（$178/条）</strong>是最受 Qashqai 车主推荐的静音舒适选择，整套约 $712。Tekna 版（235/50R18）如升级运动驾感，Continental PremiumContact 7 在 18" 规格湿地制动和干地抓地力均属旗舰水准（$228/条）。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Nissan Qashqai use in Singapore?',
      a: 'Nissan Qashqai J12 (2021+): Acenta uses 225/55R17; N-Connecta and Tekna use 235/50R18. J11 (2014–2021): base 225/55R17; higher trims 225/50R18. 5×114.3 bolt pattern, 66.1mm centre bore.',
    },
    {
      q: 'How much does it cost to replace Nissan Qashqai tyres in Singapore?',
      a: 'For 225/55R17 (base): budget from $98/tyre; mid-range (Michelin Primacy 4) $178; premium $228. Full set $392–$912. For Tekna 235/50R18: from $118 budget; mid $218; premium $268.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 225/55R17',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 225/55R17',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Continental PremiumContact 7 225/55R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
