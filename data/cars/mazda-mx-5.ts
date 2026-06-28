import type { CarData } from './types'

const data: CarData = {
  make: 'Mazda',
  model: 'MX-5',
  makeSlug: 'mazda',
  modelSlug: 'mx-5',
  bgWord: 'MX5',

  seo: {
    title: 'Mazda MX-5 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mazda MX-5 ND 4th Gen (2015+) uses 195/50R16 (soft top base) or 205/45R17 (Sport RF). 5×114.3, 67.1mm CB, M12×1.5 nut. Iconic roadster. From $78 installed.',
    ogDescription: 'Mazda MX-5 ND: 195/50R16 (soft top), 205/45R17 (Sport/RF). 5×114.3, 67.1mm. From $78.',
    twitterDescription: 'Mazda MX-5 ND uses 195/50R16 or 205/45R17 (RF). 5×114.3 bolt. From $78.',
    priceFrom: 78,
    oeSize: '195/50R16',
  },

  defaultGen: 'nd',

  generations: [
    {
      key: 'nd',
      label: 'ND 4th Gen (2015–2026)',
      years: '2015–2026',
      note: 'Current Mazda MX-5 (Miata). Soft top base uses 195/50R16; Sport soft top and RF retractable fastback use 205/45R17. Lightweight sports car (1,030–1,098 kg) — performance-oriented tyres recommended. Available as Skyactiv-G 1.5/2.0.',
      heroChips: [
        { label: 'Soft top base OE', value: '195/50R16' },
        { label: 'Sport / RF OE',    value: '205/45R17' },
        { label: 'From installed',   value: '$78', green: true },
      ],
      variants: [
        { name: 'MX-5 soft top base (16")', sizes: [
          { tag: 'OE',  size: '195/50R16' },
          { tag: 'Alt', size: '205/45R16', note: '稍宽，保持 16" 外径' },
        ]},
        { name: 'MX-5 Sport / RF (17")', sizes: [
          { tag: 'OE',  size: '205/45R17' },
          { tag: 'Alt', size: '215/40R17', note: '略宽，运动感强' },
        ]},
      ],
    },
    {
      key: 'nc',
      label: 'NC 3rd Gen (2005–2015)',
      years: '2005–2015',
      note: '3rd gen MX-5 (Roadster NC). 205/50R16 (base) or 205/45R17 (S / RHT). 5×114.3, 67.1mm.',
      heroChips: [
        { label: 'NC base OE', value: '205/50R16' },
        { label: 'NC S / RHT OE', value: '205/45R17' },
        { label: 'From installed', value: '$78', green: true },
      ],
      variants: [
        { name: 'NC base (16")', sizes: [{ tag: 'OE', size: '205/50R16' }] },
        { name: 'NC S / RHT (17")', sizes: [{ tag: 'OE', size: '205/45R17' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'ND 2015+ · soft top base · 16"', width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: 'ND 2015+ · Sport/RF · 17"',       width: '7.0J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5 nut',
    torque: '108 Nm',
    notes: 'Mazda MX-5 ND uses 5×114.3 bolt pattern, 67.1mm centre bore — same as CX-5, CX-9, Mazda 3/6. M12×1.5 lug nuts, torque 108 Nm. As a lightweight sports car, performance-oriented tyres with good wet-weather handling recommended.',
  },

  priceTabs: [
    {
      size: '195/50R16',
      tabLabel: '195/50R16 · MX-5 soft top base',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '16" 运动节能胎 · MX-5 base 预算首选',
        price: 78,
        also: 'Also: Kumho Ecsta PS91, Nexen N\'Fera SU1',
        waText: 'Mazda MX-5 195%2F50R16 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '16" 干湿均衡 · MX-5 最受欢迎驾感提升',
        price: 148,
        also: 'Also: Michelin Pilot Sport 5, Bridgestone Potenza Sport',
        waText: 'Mazda MX-5 195%2F50R16 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '16" 运动旗舰 · MX-5 轻量跑车配最佳',
        price: 198,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Mazda MX-5 195%2F50R16 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $312–$400 · Mid-range $592–$720 · Premium $792–$960',
    },
    {
      size: '205/45R17',
      tabLabel: '205/45R17 · MX-5 Sport / RF 17"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '17" 运动胎 · MX-5 Sport/RF 预算选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Nexen N\'Fera SU1',
        waText: 'Mazda MX-5 RF 205%2F45R17 budget tyre quote (Hankook Ventus S1 Evo3 or similar)',
      },
      mid: {
        name: 'Michelin Pilot Sport 5',
        desc: '17" 运动旗舰 · MX-5 RF 换胎首选',
        price: 188,
        also: 'Also: Continental PremiumContact 7, Bridgestone Potenza Sport',
        waText: 'Mazda MX-5 RF 205%2F45R17 mid-range tyre quote (Michelin Pilot Sport 5 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Potenza Sport',
        desc: '17" 极致操控 · MX-5 RF 追求极限首选',
        price: 238,
        also: 'Also: Pirelli P Zero, Michelin Pilot Sport 4S',
        waText: 'Mazda MX-5 RF 205%2F45R17 premium tyre quote (Bridgestone Potenza Sport)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $752–$920 · Premium $952–$1,160',
    },
  ],

  radarSize: '195/50R16',
  radarSource: 'Michelin (11 reviews) · Continental (9 reviews) · Hankook (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [72, 74, 76, 74, 74, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus Prime4',
      stats: [{ k: 'Wet', v: '72', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '76', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Sports Popular', labelClass: 'tier tier--mid', score: '8.7',
      scores: [88, 90, 82, 82, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Grip', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '9.0',
      scores: [90, 92, 80, 84, 86, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 5',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '80', hi: false }, { k: 'Grip', v: '86', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'MX-5 ND（195/50R16）— 轻量跑车，优先选干湿抓地力强的运动胎',
      color: 'blue',
      genKey: 'nd',
      body: 'Mazda MX-5 ND 车重仅约 1,030 kg，是新加坡最轻的市售跑车之一。换胎时可以选比一般家用车更偏向 <strong>抓地力和干湿操控</strong> 的运动型号。<strong>Continental PremiumContact 6（$148/条）</strong>是 MX-5 195/50R16 最受欢迎的换胎选择——干地抓地力强、湿地制动短，配合 MX-5 精准指向的转向，驾感大幅提升，整套约 $592。追求极致的 RF 版（205/45R17）车主，Michelin Pilot Sport 5 是目前市售最好的运动路胎之一（$188/条）。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mazda MX-5 use in Singapore?',
      a: 'Mazda MX-5 ND 4th Gen (2015+): soft top base uses 195/50R16; Sport and RF retractable fastback use 205/45R17. 5×114.3 bolt pattern, 67.1mm centre bore.',
    },
    {
      q: 'How much does it cost to replace Mazda MX-5 tyres in Singapore?',
      a: 'For 195/50R16 (base): budget from $78/tyre; mid-range (Continental PremiumContact 6) $148; premium (Michelin Pilot Sport 5) $198. Full set $312–$792. For RF 205/45R17: from $98 budget; mid $188; premium $238.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus Prime4 195/50R16',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '78',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 6 195/50R16', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 5 205/45R17',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
