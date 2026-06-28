import type { CarData } from './types'

const data: CarData = {
  make: 'Lexus',
  model: 'UX',
  makeSlug: 'lexus',
  modelSlug: 'ux',
  bgWord: 'UX',

  seo: {
    title: 'Lexus UX Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Lexus UX ZA10 (2018+) uses 215/55R17 (standard) or 225/50R18 (F Sport). Entry-level Lexus SUV. 5×114.3 bolt, NOT 5×112. From $78 installed Singapore.',
    ogDescription: 'Lexus UX ZA10 tyre sizes: 215/55R17 standard, 225/50R18 F Sport. 5×114.3 Japanese bolt pattern — NOT European 5×112. From $78 installed.',
    twitterDescription: 'Lexus UX ZA10 uses 215/55R17 (standard) or 225/50R18 (F Sport). 5×114.3, entry Lexus SUV. From $78 installed Singapore.',
    priceFrom: 78,
    oeSize: '215/55R17',
  },

  defaultGen: 'za10',

  generations: [
    {
      key: 'za10',
      label: 'ZA10 1st Gen (2018–2026)',
      years: '2018–2026',
      note: 'UX is Lexus\' entry-level SUV — based on a TNGA-C platform (same as Toyota C-HR). UX 250h is hybrid; UX 300e is full BEV. BEV version uses same tyre sizes. ZA10 is the only generation.',
      heroChips: [
        { label: 'UX 200 / 250h standard', value: '215/55R17' },
        { label: 'F Sport 18"',             value: '225/50R18' },
        { label: 'From installed',          value: '$78', green: true },
      ],
      variants: [
        { name: 'UX 200 / UX 250h standard (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '225/50R17', note: '宽 10mm，同外径' },
          { tag: 'Up',  size: '225/50R18', note: '升 18"，F Sport 尺码' },
        ]},
        { name: 'UX 250h F Sport / UX 300e (18")', sizes: [
          { tag: 'OE',  size: '225/50R18' },
          { tag: 'Alt', size: '235/45R18', note: '宽 10mm，同外径' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2018–2026 · ZA10 · F Sport / 300e · 18"', width: '7.0J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2018–2026 · ZA10 · standard · 17"',         width: '6.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    notes: 'Lexus UX uses 5×114.3 bolt pattern — same as Lexus NX/RX/ES and Toyota C-HR. UX 300e (BEV): same tyre sizes as 250h, but tyre noise is more noticeable in an EV — premium quiet tyres recommended. Standard UX is FWD (UX 200/300e); UX 250h AWD: replace all 4 together.',
  },

  priceTabs: [
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · UX 标准版主力尺码',
      budget: {
        name: 'Nankang NS-20 UHP',
        desc: '17" 入门豪华 SUV 胎 · UX 最实惠选择',
        price: 78,
        also: 'Also: Kumho Ecsta HS51, Hankook Ventus Prime4',
        waText: 'Lexus UX 215%2F55R17 budget tyre quote (Nankang or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '静音舒适 + 湿地 A 级 · UX 日常通勤首选',
        price: 148,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Lexus UX 215%2F55R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '舒适 + 操控均衡 · UX 最均衡顶级选择',
        price: 198,
        also: 'Also: Pirelli Cinturato P7, Continental SportContact 6',
        waText: 'Lexus UX 215%2F55R17 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $312–$380 · Mid-range $592–$700 · Premium $792–$920',
    },
    {
      size: '225/50R18',
      tabLabel: '225/50R18 · F Sport / UX 300e 18"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 豪华小型 SUV 胎 · UX F Sport 预算首选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Lexus UX F Sport 225%2F50R18 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '静音极佳 · UX 300e BEV 必备 · 最推荐',
        price: 178,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Lexus UX F Sport 225%2F50R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'F Sport 最顶级配胎 · 干湿地全面领先',
        price: 238,
        also: 'Also: Pirelli P-Zero PZ4, Continental SportContact 6',
        waText: 'Lexus UX F Sport 225%2F50R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $712–$840 · Premium $952–$1,100',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Nankang (8 reviews) · Continental (16 reviews) · Michelin (13 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [64, 72, 74, 66, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nankang\nNS-20 UHP',
      stats: [{ k: 'Wet', v: '64', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [84, 88, 90, 80, 84, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [86, 90, 86, 80, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'UX 200 / 250h 标准版（215/55R17）',
      color: 'blue',
      genKey: 'za10',
      body: 'UX 标准版原配 <strong>215/55R17</strong>，侧壁较高，乘坐舒适，适合新加坡城市驾驶。Continental PremiumContact 6（$148/条）是最受好评的选择——静音出色，湿地 A 级，整套约 $592。UX 200（FWD）前轮磨耗较快，建议每 10,000-15,000km 做前后轮互换。UX 250h（AWD）建议 4 条一起换。',
    },
    {
      title: 'UX 300e BEV 车主（225/50R18）— 特别建议选低噪胎',
      color: 'red',
      genKey: 'za10',
      body: 'UX 300e 是 Lexus 首款纯电 BEV，原配 <strong>225/50R18</strong>。BEV 行驶时没有发动机噪声，轮胎噪音会被更明显地感知。<strong>特别建议选静音型轮胎</strong>：Continental PremiumContact 6（$178/条）是最受 BEV 车主认可的选择，NVH 抑制极佳，整套约 $712。Michelin Primacy 4+ 也是优秀的安静选择。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Lexus UX use in Singapore?',
      a: 'Lexus UX ZA10 (2018+): standard UX 200 and UX 250h use 215/55R17; F Sport and UX 300e BEV use 225/50R18. The UX has only one generation (ZA10) in Singapore.',
    },
    {
      q: 'What is the bolt pattern of the Lexus UX?',
      a: 'Lexus UX ZA10 uses 5×114.3 bolt pattern with 60.1mm centre bore. Stud M12×1.5, torque 103 Nm. Same as Toyota C-HR (they share the same TNGA-C platform).',
    },
    {
      q: 'What tyres are best for the Lexus UX 300e electric car?',
      a: 'For the UX 300e BEV, tyre noise is more noticeable than in a petrol car since there is no engine sound to mask it. Recommend quiet tyres: Continental PremiumContact 6 ($178) or Michelin Primacy 4+ for the best noise suppression. Avoid budget tyres, which tend to produce more road noise.',
    },
    {
      q: 'How much does it cost to replace Lexus UX tyres in Singapore?',
      a: 'For 215/55R17 (most common): budget from $78 per tyre installed; mid-range $148–$168; premium $198–$225. Full set of 4: approximately $312–$920. For F Sport/UX 300e 225/50R18: budget from $98; mid $178–$198; premium $238–$270.',
    },
    {
      q: 'Are Lexus UX and Toyota C-HR tyres interchangeable?',
      a: 'Yes. Both Lexus UX ZA10 and Toyota C-HR share the TNGA-C platform with 5×114.3 bolt pattern, 60.1mm CB, and the standard 215/55R17 tyre size. Tyres and rims are interchangeable between these two models.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nankang NS-20 UHP 215/55R17',           brand: { '@type': 'Brand', name: 'Nankang' },     offers: { '@type': 'Offer', price: '78',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 6 215/55R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 215/55R17',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/50R18',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental PremiumContact 6 225/50R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 225/50R18',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
