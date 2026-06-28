import type { CarData } from './types'

const data: CarData = {
  make: 'Lexus',
  model: 'ES',
  makeSlug: 'lexus',
  modelSlug: 'es',
  bgWord: 'ES',

  seo: {
    title: 'Lexus ES Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Lexus ES XV70 (2018+) uses 215/55R17 (standard) or 235/45R18 (F Sport). FWD flagship sedan — 5×114.3 bolt, NOT 5×112. From $78 installed Singapore.',
    ogDescription: 'Lexus ES XV70 tyre sizes: 215/55R17 standard, 235/45R18 F Sport. 5×114.3 Japanese bolt pattern, NOT European 5×112. From $78 installed.',
    twitterDescription: 'Lexus ES XV70 uses 215/55R17 (standard) or 235/45R18 (F Sport). 5×114.3, FWD flagship sedan. From $78 installed Singapore.',
    priceFrom: 78,
    oeSize: '215/55R17',
  },

  defaultGen: 'xv70',

  generations: [
    {
      key: 'xv70',
      label: 'XV70 7th Gen (2018–2026)',
      years: '2018–2026',
      note: 'ES XV70 is Lexus\' FWD flagship sedan. Only one generation in Singapore. Uses Toyota-spec 5×114.3 bolt pattern — same as most Toyota and Lexus models. Front tyres may wear faster than rear due to FWD.',
      heroChips: [
        { label: 'ES 250 / 300h standard', value: '215/55R17' },
        { label: 'F Sport 18"',             value: '235/45R18' },
        { label: 'From installed',          value: '$78', green: true },
      ],
      variants: [
        { name: 'ES 250 / ES 300h standard (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '225/50R17', note: '宽 10mm，同外径' },
          { tag: 'Up',  size: '235/45R18', note: '升 18"，需配 7.5J 轮毂' },
        ]},
        { name: 'ES 300h F Sport (18")', sizes: [
          { tag: 'OE',  size: '235/45R18' },
          { tag: 'Alt', size: '245/40R18', note: '宽 10mm 运动感升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2018–2026 · XV70 · F Sport · 18"',   width: '8.0J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2018–2026 · XV70 · standard · 17"',   width: '7.0J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    notes: 'Lexus ES uses 5×114.3 bolt pattern — same as Toyota Camry and Lexus NX/RX. ES is FWD, so front tyres carry both steering and drive load; front tyre wear is typically 20–30% faster than rear. Recommend rotating front-to-rear every 10,000–15,000km.',
  },

  priceTabs: [
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · ES 标准版主力尺码',
      budget: {
        name: 'Nankang NS-20 UHP',
        desc: '17" 豪华旗舰轿车胎 · ES 入门实惠选择',
        price: 78,
        also: 'Also: Kumho Ecsta HS51, Hankook Ventus Prime4',
        waText: 'Lexus ES 215%2F55R17 budget tyre quote (Nankang or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '静音舒适最佳 · Lexus ES 豪华旗舰定位首选',
        price: 148,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Lexus ES 215%2F55R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '舒适旗舰 + 操控均衡 · ES 最均衡顶级选择',
        price: 198,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'Lexus ES 215%2F55R17 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $312–$380 · Mid-range $592–$700 · Premium $792–$920',
    },
    {
      size: '235/45R18',
      tabLabel: '235/45R18 · ES F Sport 18"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 运动旗舰轿车胎 · ES F Sport 预算首选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Lexus ES F Sport 235%2F45R18 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干地操控 + 静音均衡 · F Sport 最受好评',
        price: 198,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'Lexus ES F Sport 235%2F45R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'F Sport 最顶级配胎 · 干湿地全面领先',
        price: 268,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Lexus ES F Sport 235%2F45R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $792–$920 · Premium $1,072–$1,240',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Nankang (9 reviews) · Continental (17 reviews) · Michelin (14 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [64, 72, 74, 66, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nankang\nNS-20 UHP',
      stats: [{ k: 'Wet', v: '64', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [84, 88, 90, 82, 84, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '82', hi: true }],
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
      title: 'ES 250 / 300h 标准版（215/55R17）— 重点：FWD 前轮磨损快',
      color: 'blue',
      genKey: 'xv70',
      body: 'ES 是 Lexus 旗舰级 FWD 豪华轿车，标准版原配 <strong>215/55R17</strong>。FWD 前轮同时承担驱动和转向，前轮磨耗比后轮快约 20-30%，建议每 10,000-15,000km 做一次前后轮互换（rotation）。Continental PremiumContact 6（$148/条）静音极佳，与 ES 的豪华定位最契合，整套约 $592。',
    },
    {
      title: 'ES F Sport 车主（235/45R18）',
      color: 'red',
      genKey: 'xv70',
      body: 'F Sport ES 配 <strong>235/45R18</strong>，宽胎低扁平比带来更精准的驾驶响应。Continental SportContact 6（$198/条）是最受 F Sport 车主好评的选择，整套约 $792。同样需要注意 FWD 前轮磨耗偏快的特性，定期旋转轮胎可延长整体寿命约 20-30%。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Lexus ES use in Singapore?',
      a: 'Lexus ES XV70 7th gen (2018+): ES 250 and ES 300h standard use 215/55R17; F Sport trim uses 235/45R18. ES has only one generation in Singapore (XV70).',
    },
    {
      q: 'What is the bolt pattern of the Lexus ES?',
      a: 'Lexus ES XV70 uses 5×114.3 bolt pattern with 60.1mm centre bore. Stud M12×1.5, torque 103 Nm. Same specs as Lexus NX, RX, and Toyota Camry.',
    },
    {
      q: 'Why do Lexus ES front tyres wear faster?',
      a: 'The Lexus ES is front-wheel drive (FWD) — all power goes through the front wheels, which also handle steering. This dual load causes front tyres to wear 20–30% faster than rear tyres. Regular tyre rotation (every 10,000–15,000km) evens out wear and extends total tyre life.',
    },
    {
      q: 'How much does it cost to replace Lexus ES tyres in Singapore?',
      a: 'For 215/55R17 (most common): budget from $78 per tyre installed; mid-range $148–$168; premium $198–$225. Full set of 4: approximately $312–$920. For F Sport 235/45R18: budget from $108; mid $198–$225; premium $268–$308.',
    },
    {
      q: 'Are Lexus ES and Toyota Camry tyres interchangeable?',
      a: 'The Lexus ES XV70 uses 215/55R17 and the Toyota Camry (XV70) also uses 215/55R17 — the same size. Both also share 5×114.3 bolt pattern and 60.1mm CB. Tyres and rims are interchangeable between ES XV70 and Camry XV70, as they share the same TNGA-K platform.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nankang NS-20 UHP 215/55R17',           brand: { '@type': 'Brand', name: 'Nankang' },     offers: { '@type': 'Offer', price: '78',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 6 215/55R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 215/55R17',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/45R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 235/45R18',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/45R18',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
