import type { CarData } from './types'

const data: CarData = {
  make: 'Lexus',
  model: 'NX',
  makeSlug: 'lexus',
  modelSlug: 'nx',
  bgWord: 'NX',

  seo: {
    title: 'Lexus NX Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Lexus NX AZ20 2nd gen (2021+) uses 235/55R18 (standard) or 235/50R20 (F Sport). NX 350h / 450h+ PHEV: replace all 4 tyres. 5×114.3 bolt, NOT 5×112. From $108 installed Singapore.',
    ogDescription: 'Lexus NX AZ20/AZ10 tyre sizes: 235/55R18 standard, 235/50R20 F Sport. 5×114.3 — Japanese bolt pattern, NOT European 5×112. From $108 installed.',
    twitterDescription: 'Lexus NX AZ20 uses 235/55R18 (standard) or 235/50R20 (F Sport). 5×114.3, NOT 5×112 like BMW/Mercedes. From $108 installed Singapore.',
    priceFrom: 108,
    oeSize: '235/55R18',
  },

  defaultGen: 'az20',

  generations: [
    {
      key: 'az20',
      label: 'AZ20 2nd Gen (2021–2026)',
      years: '2021–2026',
      note: 'AZ20 NX is a complete redesign offering petrol (NX 250/350), hybrid (NX 350h), and PHEV plug-in (NX 450h+). PHEV is heavier — replace all 4 tyres together. Uses Japanese 5×114.3 bolt pattern, not European 5×112.',
      heroChips: [
        { label: 'NX 250 / 350h standard', value: '235/55R18' },
        { label: 'F Sport / 450h+ PHEV 20"', value: '235/50R20' },
        { label: 'From installed',           value: '$108', green: true },
      ],
      variants: [
        { name: 'NX 250 / NX 350h standard (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '245/50R18', note: '宽 10mm，同外径' },
        ]},
        { name: 'NX 350 / NX 450h+ PHEV / F Sport (20")', sizes: [
          { tag: 'OE',  size: '235/50R20' },
          { tag: 'Alt', size: '245/45R20', note: '宽 10mm，需确认轮拱间隙' },
        ]},
      ],
    },
    {
      key: 'az10',
      label: 'AZ10 1st Gen (2014–2021)',
      years: '2014–2021',
      heroChips: [
        { label: 'NX 200t / 300h standard', value: '235/55R18' },
        { label: 'F Sport',                  value: '235/50R18' },
        { label: 'From installed',            value: '$108', green: true },
      ],
      variants: [
        { name: 'NX 200t / 300h standard (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '245/50R18', note: '宽 10mm' },
        ]},
        { name: 'F Sport (18")', sizes: [
          { tag: 'OE',  size: '235/50R18' },
          { tag: 'Alt', size: '245/45R18', note: '宽 10mm' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021–2026 · AZ20 · F Sport / PHEV · 20"', width: '8.5J', diameter: '20"', offset: 'ET35', boltPattern: '5×114.3' },
    { label: '2021–2026 · AZ20 · standard · 18"',        width: '7.5J', diameter: '18"', offset: 'ET35', boltPattern: '5×114.3' },
    { label: '2014–2021 · AZ10 · F Sport · 18"',         width: '7.5J', diameter: '18"', offset: 'ET35', boltPattern: '5×114.3' },
    { label: '2014–2021 · AZ10 · standard · 18"',         width: '7.0J', diameter: '18"', offset: 'ET35', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    warning: '⚠️ Lexus NX uses 5×114.3 bolt pattern — NOT 5×112 like BMW, Mercedes, or Audi. Rims from European luxury brands will NOT fit the NX. NX 450h+ PHEV: replace all 4 tyres together (heavier PHEV, E-Four AWD system).',
  },

  priceTabs: [
    {
      size: '235/55R18',
      tabLabel: '235/55R18 · NX 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 豪华日系 SUV 胎 · NX 入门实惠选择',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang SP-9 Cross',
        waText: 'Lexus NX 235%2F55R18 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · 静音舒适 · 新加坡 NX 最多车主选用',
        price: 198,
        also: 'Also: Bridgestone Turanza T005, Michelin Primacy 4+',
        waText: 'Lexus NX 235%2F55R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'NX 旗舰配胎 · 豪华 SUV 最均衡顶级选择',
        price: 268,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 6 SUV',
        waText: 'Lexus NX 235%2F55R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $792–$920 · Premium $1,072–$1,240',
    },
    {
      size: '235/50R20',
      tabLabel: '235/50R20 · F Sport / 450h+ PHEV 20"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '20" UHP SUV 胎 · NX F Sport / PHEV 预算首选',
        price: 148,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'Lexus NX F Sport 235%2F50R20 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '20" SUV 专项 · 操控 + 静音均衡 · F Sport 最推荐',
        price: 268,
        also: 'Also: Michelin Pilot Sport 4 SUV, Pirelli Scorpion Verde',
        waText: 'Lexus NX F Sport 235%2F50R20 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'F Sport 顶级配胎 · 干湿地全面领先',
        price: 348,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 6 SUV',
        waText: 'Lexus NX F Sport 235%2F50R20 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $1,072–$1,240 · Premium $1,392–$1,620',
    },
  ],

  radarSize: '235/55R18',
  radarSource: 'Hankook (12 reviews) · Continental (17 reviews) · Michelin (14 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 76, 74, 68, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 90, 84, 80, 86, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 80, 86, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'NX 250 / 350h 标准版（235/55R18）',
      color: 'blue',
      genKey: 'az20',
      body: 'AZ20 NX 标准版原配 <strong>235/55R18</strong>，与 VW Tiguan、Mercedes GLC 同尺码，货源极充足。Continental SportContact 6（$198/条）是新加坡 NX 车主最多好评的选择，整套约 $792。Lexus 以豪华静音著称，可考虑 Michelin Primacy 4+（更强静音）或 Continental SportContact 6（更强操控）两种方向。',
    },
    {
      title: 'NX 450h+ PHEV 车主（必须 4 条全换）',
      color: 'red',
      genKey: 'az20',
      body: 'NX 450h+ 配备 E-Four 双电机 AWD，整车约 2,200kg。<strong>必须 4 条同型号一起换</strong>，前后胎纹差异会影响 E-Four 电机的力矩分配计算，加速磨损。20" 配 <strong>235/50R20</strong>，建议 Continental CrossContact RX（$268/条）——专为大型豪华 SUV 研发，低滚阻版有助于提升纯电续航。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Lexus NX use in Singapore?',
      a: 'Lexus NX AZ20 2nd gen (2021+): NX 250/350h standard uses 235/55R18; NX 350/450h+ PHEV and F Sport use 235/50R20. AZ10 1st gen (2014–2021): standard uses 235/55R18; F Sport uses 235/50R18.',
    },
    {
      q: 'What is the bolt pattern of the Lexus NX?',
      a: 'Lexus NX (AZ10, AZ20) uses 5×114.3 bolt pattern with 60.1mm centre bore. Stud: M12×1.5, torque 103 Nm. This is the Japanese standard shared with Toyota, Honda, and Nissan — NOT the European 5×112 used by BMW, Mercedes, Audi, and VW.',
    },
    {
      q: 'Can I use BMW or Mercedes rims on a Lexus NX?',
      a: 'No. Lexus NX uses 5×114.3 while BMW and Mercedes use 5×112. The bolt hole spacing is different — European luxury brand rims physically cannot be bolted onto a Lexus NX.',
    },
    {
      q: 'How much does it cost to replace Lexus NX tyres in Singapore?',
      a: 'For 235/55R18 (most common): budget from $108 per tyre installed; mid-range $198–$225; premium $268–$308. Full set of 4: approximately $432–$1,240. For F Sport/PHEV 235/50R20: budget from $148; mid $268–$305; premium $348–$400.',
    },
    {
      q: 'Does the Lexus NX 450h+ PHEV require special tyres?',
      a: 'Yes. The NX 450h+ PHEV (~2,200kg, E-Four AWD) requires all 4 tyres to be replaced together — same brand, model, and tread depth within 2/32". The E-Four rear electric motor calculates torque distribution based on wheel speed differences; mismatched tread depths cause incorrect AWD calibration. Low-rolling-resistance tyres can also improve electric range.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/55R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 235/55R18',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/55R18',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/50R20',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental CrossContact RX 235/50R20',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/50R20',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '348', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
