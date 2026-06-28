import type { CarData } from './types'

const data: CarData = {
  make: 'Nissan',
  model: 'Juke',
  makeSlug: 'nissan',
  modelSlug: 'juke',
  bgWord: 'JUKE',

  seo: {
    title: 'Nissan Juke Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Nissan Juke F15 uses 215/55R17. F16 (2019+) uses 215/55R17 (standard) or 225/45R18 (Nismo/N-Sport). From $98 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Nissan Juke F15/F16 tyre sizes: 215/55R17 (most trims) or 225/45R18 (Nismo/N-Sport top). From $98 installed in Singapore.',
    twitterDescription: 'Nissan Juke F15/F16 uses 215/55R17 or 225/45R18 Nismo. From $98 installed in Singapore.',
    priceFrom: 98,
    oeSize: '215/55R17',
  },

  defaultGen: 'f16',

  generations: [
    {
      key: 'f16',
      label: 'F16 Gen 2 (2019–2026)',
      years: '2019–2026',
      heroChips: [
        { label: 'N-Connecta / Acenta', value: '215/55R17' },
        { label: 'Nismo / N-Sport',     value: '225/45R18' },
        { label: 'From installed',      value: '$98', green: true },
      ],
      variants: [
        { name: 'Acenta / N-Connecta / Enigma (standard)', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '225/50R17', note: '略宽升级' },
        ]},
        { name: 'Nismo / N-Sport (top performance)', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '更宽，明显运动感' },
        ]},
      ],
    },
    {
      key: 'f15',
      label: 'F15 Gen 1 (2010–2019)',
      years: '2010–2019',
      heroChips: [
        { label: 'Most trims', value: '215/55R17' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: '1.6 / 1.6 DIG-T (all trims in SG)', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '225/50R17', note: '略宽升级' },
        ]},
        { name: '1.6 DIG-T Nismo (limited)', sizes: [
          { tag: 'OE',  size: '215/50R18' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019–2026 · F16 · Nismo / N-Sport · 18"',         width: '7.5J', diameter: '18"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2019–2026 · F16 · standard · 17"',                width: '6.5J', diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2010–2019 · F15 · most trims · 17"',              width: '6.5J', diameter: '17"', offset: 'ET40', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '66.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'All Juke F15 and F16 generations share 5×114.3 bolt pattern. The F16 uses a European-developed CMF-B platform (Renault-Nissan Alliance) but retains the same Nissan bolt pattern as the F15.',
  },

  priceTabs: [
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · F15 / F16 主力尺码',
      budget: {
        name: 'Hankook Kinergy 4S2 H750',
        desc: '17" 日常用途 · 静音耐磨 · 价格实惠',
        price: 98,
        also: 'Also: Kumho Ecsta HS51, Nexen N\'Blue HD Plus',
        waText: 'Nissan Juke 215%2F55R17 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · 湿地 A 级抓地 · Juke 最多车主选用',
        price: 148,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Nissan Juke 215%2F55R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地制动 · Wet grip A 级 · 5年保用',
        price: 188,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'Nissan Juke 215%2F55R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $392–$460 · Mid-range $592–$680 · Premium $752–$860',
    },
    {
      size: '225/45R18',
      tabLabel: '225/45R18 · Nismo / N-Sport',
      budget: {
        name: 'Kumho Ecsta PS91',
        desc: '18" 运动 UHP 胎 · 干地抓地力强',
        price: 108,
        also: 'Also: Nankang NS-25, Maxxis Premitra HP5',
        waText: 'Nissan Juke 225%2F45R18 budget tyre quote (Kumho Ecsta or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '运动 + 舒适兼顾 · 湿地 A 级 · Nismo 首选',
        price: 178,
        also: 'Also: Continental SportContact 6, Dunlop Sport Maxx RT2',
        waText: 'Nissan Juke 225%2F45R18 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '运动首选 · 最佳干湿地平衡 · Nismo 原厂推荐',
        price: 238,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 5',
        waText: 'Nissan Juke Nismo 225%2F45R18 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $432–$510 · Mid-range $712–$820 · Premium $952–$1,100',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Hankook (11 reviews) · Bridgestone (22 reviews) · Michelin (17 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [66, 74, 76, 68, 76, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy 4S2 H750',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '76', hi: false }, { k: 'Value', v: '78', hi: true }],
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
      title: 'F16 / F15 标准版车主（215/55R17）',
      color: 'blue',
      genKey: 'f16',
      body: 'Juke 绝大多数新加坡车主都配 <strong>215/55R17</strong>，货源充足。Bridgestone Turanza T005（$148/条）是最受好评的选择——静音、湿地 A 级、里程超 60,000km，非常适合新加坡每日通勤。若追求价格最实惠，Hankook Kinergy 4S2（$98/条）也够用，整套约 $392。',
    },
    {
      title: 'F16 Nismo / N-Sport 车主（225/45R18）',
      color: 'red',
      genKey: 'f16',
      body: 'Nismo / N-Sport 原配 <strong>225/45R18</strong> 是低扁平比运动胎，操控感锐利但乘坐稍硬。Michelin Pilot Sport 4（$238/条）是最受 Nismo 车主认可的选择——干地抓地极佳，湿地制动 A 级，是兼顾日常通勤与运动驾驶的最佳平衡。Bridgestone Turanza T005（$178/条）操控稍软，但安静度更好。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Nissan Juke use in Singapore?',
      a: 'Nissan Juke F15 Gen 1 (2010–2019): most trims use 215/55R17. F16 Gen 2 (2019+): standard Acenta/N-Connecta use 215/55R17; Nismo and N-Sport top trims use 225/45R18. The limited F15 DIG-T Nismo used 215/50R18. Check the door jamb sticker to confirm your exact size.',
    },
    {
      q: 'What is the bolt pattern of the Nissan Juke?',
      a: 'Both F15 and F16 Juke generations use 5×114.3 bolt pattern with 66.1mm centre bore. Lug nut thread is M12×1.5, tightening torque is 108 Nm. The F16 uses a European CMF-B platform but retains the same bolt pattern as the F15 and other Nissan models.',
    },
    {
      q: 'How much does it cost to replace Nissan Juke tyres in Singapore?',
      a: 'For 215/55R17 (most common): budget from $98 per tyre installed; mid-range $148–$165; premium $188–$210. Full set of 4: approximately $392–$750. For 225/45R18 (Nismo/N-Sport): budget from $108; mid $178–$198; premium $238–$268. Full set: approximately $432–$1,072.',
    },
    {
      q: 'Is the Nissan Juke F16 officially sold in Singapore?',
      a: 'The F16 Juke was not officially imported by Nissan Singapore (Tan Chong Motor). However, F16 units are available as parallel imports (grey imports) through dealers. The tyre sizes 215/55R17 and 225/45R18 are readily available in Singapore regardless.',
    },
    {
      q: 'Can I swap rims between Nissan Juke F15 and F16?',
      a: 'Both F15 and F16 share 5×114.3 bolt pattern and 66.1mm centre bore, so the bolt pattern is compatible. However, the F16 uses a higher offset (ET50) vs F15 (ET40) — using F15 rims on F16 will push the wheels out by 10mm per side, which may cause rubbing on the F16\'s different body geometry. Stick to rims with the correct ET for each generation.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 H750 215/55R17',   brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/55R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/55R17',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta PS91 225/45R18',           brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 225/45R18',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 225/45R18',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
