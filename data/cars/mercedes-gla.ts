import type { CarData } from './types'

const data: CarData = {
  make: 'Mercedes-Benz',
  model: 'GLA',
  makeSlug: 'mercedes',
  modelSlug: 'gla',
  bgWord: 'GLA',

  seo: {
    title: 'Mercedes-Benz GLA Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mercedes GLA H247 (2020+) uses 235/50R18 (standard) or 235/45R19 (AMG Line). X156 (2013–2019) uses 235/50R18. 5×112 bolt, M14×1.5. From $108 installed in Singapore.',
    ogDescription: 'Mercedes GLA tyre sizes: H247 235/50R18 standard, 235/45R19 AMG Line. 5×112, 66.6mm CB, M14×1.5. From $108 installed in Singapore.',
    twitterDescription: 'Mercedes GLA H247 uses 235/50R18 or 235/45R19 AMG Line. 5×112, M14×1.5. From $108 installed in Singapore.',
    priceFrom: 108,
    oeSize: '235/50R18',
  },

  defaultGen: 'h247',

  generations: [
    {
      key: 'h247',
      label: 'H247 2nd Gen (2020–2026)',
      years: '2020–2026',
      note: 'H247 GLA is significantly larger and more refined than the X156. Run-flat tyres as OE standard.',
      heroChips: [
        { label: 'GLA 200 / 250 4MATIC', value: '235/50R18' },
        { label: 'AMG Line 19"',          value: '235/45R19' },
        { label: 'From installed',         value: '$108', green: true },
      ],
      variants: [
        { name: 'GLA 200 / 250 4MATIC standard (18")', sizes: [
          { tag: 'OE',  size: '235/50R18' },
          { tag: 'Alt', size: '245/45R18', note: '宽 10mm，同外径' },
        ]},
        { name: 'GLA 250 4MATIC AMG Line (19")', sizes: [
          { tag: 'OE',  size: '235/45R19' },
          { tag: 'Alt', size: '245/40R19', note: '宽 10mm 运动感升级' },
        ]},
      ],
    },
    {
      key: 'x156',
      label: 'X156 1st Gen (2013–2019)',
      years: '2013–2019',
      heroChips: [
        { label: 'GLA 200 / 250 standard', value: '235/50R18' },
        { label: 'AMG Line',               value: '235/45R19' },
        { label: 'From installed',          value: '$108', green: true },
      ],
      variants: [
        { name: 'GLA 200 / 250 standard (18")', sizes: [
          { tag: 'OE',  size: '235/50R18' },
          { tag: 'Alt', size: '245/45R18', note: '宽 10mm 升级' },
        ]},
        { name: 'AMG Line (19")', sizes: [
          { tag: 'OE',  size: '235/45R19' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2020–2026 · H247 · AMG Line · 19"',  width: '7.5J', diameter: '19"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2020–2026 · H247 · standard · 18"',   width: '7.0J', diameter: '18"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2013–2019 · X156 · AMG Line · 19"',  width: '7.5J', diameter: '19"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2013–2019 · X156 · standard · 18"',   width: '7.0J', diameter: '18"', offset: 'ET38', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'GLA H247 and X156 share 5×112 bolt pattern, but offset values differ — verify before swapping rims between generations. Mercedes M14×1.5 bolts are NOT interchangeable with BMW M14×1.25 bolts despite the same 5×112 pattern.',
  },

  priceTabs: [
    {
      size: '235/50R18',
      tabLabel: '235/50R18 · GLA 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 紧凑型豪华 SUV 胎 · GLA 入门实惠选择',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang SP-9',
        waText: 'Mercedes GLA 235%2F50R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '静音舒适 + 湿地 A 级 · GLA 日常通勤首选',
        price: 188,
        also: 'Also: Bridgestone Turanza T005, Michelin Primacy 4+',
        waText: 'Mercedes GLA 235%2F50R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '舒适 + 操控兼顾 · GLA 最均衡的顶级选择',
        price: 238,
        also: 'Also: Pirelli P-Zero PZ4, Continental SportContact 6',
        waText: 'Mercedes GLA 235%2F50R18 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $952–$1,100',
    },
    {
      size: '235/45R19',
      tabLabel: '235/45R19 · AMG Line 19"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" UHP SUV 胎 · GLA AMG Line 预算首选',
        price: 128,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'Mercedes GLA AMG Line 235%2F45R19 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" 操控 + 静音均衡 · GLA AMG Line 最推荐',
        price: 228,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'Mercedes GLA AMG Line 235%2F45R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'AMG Line 最顶级配胎 · 全面领先的干湿地表现',
        price: 298,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Mercedes GLA AMG Line 235%2F45R19 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $512–$620 · Mid-range $912–$1,060 · Premium $1,192–$1,400',
    },
  ],

  radarSize: '235/50R18',
  radarSource: 'Hankook (11 reviews) · Continental (17 reviews) · Michelin (15 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 76, 74, 68, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [84, 88, 86, 80, 86, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [86, 90, 84, 82, 86, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'GLA 200 / 250 标准版（235/50R18）',
      color: 'blue',
      genKey: 'h247',
      body: 'H247 GLA 标准版原配 <strong>235/50R18</strong>，扁平比 50 侧壁较高，乘坐舒适度比 AMG Line 的 45 系列好。Continental PremiumContact 6（$188/条）是 GLA 车主最推荐的选择——静音、湿地 A 级、适合新加坡城市通勤，整套约 $752。从 run-flat 换成普通胎后舒适度提升明显，但记得同时配备轮胎充气套装。',
    },
    {
      title: 'GLA AMG Line 车主（235/45R19）',
      color: 'red',
      genKey: 'h247',
      body: 'AMG Line GLA 配 <strong>235/45R19</strong>，低扁平比带来更精准的操控响应，但路面震动反馈更清晰。Continental SportContact 6（$228/条）是最受好评的 19" 选择。新加坡路面状况不理想，建议通过减速带时放慢速度，避免侧壁薄的 19" 轮胎碰圈。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mercedes GLA use in Singapore?',
      a: 'Mercedes GLA H247 2nd gen (2020+): standard GLA 200/250 uses 235/50R18; AMG Line uses 235/45R19. X156 1st gen (2013–2019): same sizes. Check the door jamb sticker to confirm your trim.',
    },
    {
      q: 'What is the bolt pattern of the Mercedes GLA?',
      a: 'All Mercedes GLA (X156, H247) use 5×112 bolt pattern with 66.6mm centre bore. Bolt thread M14×1.5, torque 130 Nm.',
    },
    {
      q: 'How much does it cost to replace Mercedes GLA tyres in Singapore?',
      a: 'For 235/50R18 (most common): budget from $108 per tyre installed; mid-range $188–$210; premium $238–$268. Full set of 4: approximately $432–$1,100. For AMG Line 235/45R19: budget from $128; mid $228–$255; premium $298–$338.',
    },
    {
      q: 'Can I swap GLA tyres or rims with a GLC or GLB?',
      a: 'All three share 5×112 bolt pattern. However, the GLA uses smaller tyre sizes (235/50R18) compared to GLC and GLB (235/55R18). The wider GLC/GLB wheels would not fit under the GLA\'s narrower wheel arches. Rims may physically bolt on but tyre selection would need to match the new rim width.',
    },
    {
      q: 'What is the difference between GLA H247 and X156?',
      a: 'The H247 (2020+) is a complete redesign — significantly larger interior, more vertical roofline (better headroom), and fundamentally better as a compact SUV rather than a lifted hatchback. Both use the same tyre sizes (235/50R18 standard), making tyres interchangeable, but the H247 has different rim dimensions and offsets.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/50R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 6 235/50R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 235/50R18',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/45R19',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 235/45R19',   brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/45R19',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '298', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
