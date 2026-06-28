import type { CarData } from './types'

const data: CarData = {
  make: 'Audi',
  model: 'Q3',
  makeSlug: 'audi',
  modelSlug: 'q3',
  bgWord: 'Q3',

  seo: {
    title: 'Audi Q3 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Audi Q3 F3 2nd gen (2018+) uses 235/55R18 (standard) or 235/50R19 (S-Line). 5×112, 66.6mm CB — NOT same as VW Tiguan (57.1mm). From $108 installed Singapore.',
    ogDescription: 'Audi Q3 F3 tyre sizes: 235/55R18 standard, 235/50R19 S-Line. 5×112, 66.6mm CB (same as BMW/Mercedes, NOT VW Tiguan). From $108 installed.',
    twitterDescription: 'Audi Q3 F3 uses 235/55R18 (standard) or 235/50R19 (S-Line). 5×112, 66.6mm CB. From $108 installed Singapore.',
    priceFrom: 108,
    oeSize: '235/55R18',
  },

  defaultGen: 'f3',

  generations: [
    {
      key: 'f3',
      label: 'F3 2nd Gen (2018–2026)',
      years: '2018–2026',
      note: 'F3 Q3 is a significant improvement over the 8U — larger interior, better technology. Standard models use 235/55R18; S-Line has 235/50R19. All use 66.6mm centre bore — same as BMW X1 and Mercedes GLA.',
      heroChips: [
        { label: 'Q3 / Advanced 18"', value: '235/55R18' },
        { label: 'S-Line 19"',         value: '235/50R19' },
        { label: 'From installed',     value: '$108', green: true },
      ],
      variants: [
        { name: 'Q3 Advanced / Sport (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '245/50R18', note: '宽 10mm，同外径' },
        ]},
        { name: 'Q3 S-Line (19")', sizes: [
          { tag: 'OE',  size: '235/50R19' },
          { tag: 'Alt', size: '245/45R19', note: '宽 10mm 运动升级' },
        ]},
      ],
    },
    {
      key: '8u',
      label: '8U 1st Gen (2011–2018)',
      years: '2011–2018',
      heroChips: [
        { label: 'Q3 standard 18"',  value: '235/55R18' },
        { label: 'From installed',   value: '$108', green: true },
      ],
      variants: [
        { name: 'Q3 standard (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '245/50R18', note: '宽 10mm' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2018–2026 · F3 · S-Line · 19"',  width: '8.0J', diameter: '19"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2018–2026 · F3 · standard · 18"', width: '7.5J', diameter: '18"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2011–2018 · 8U · standard · 18"', width: '7.5J', diameter: '18"', offset: 'ET38', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Audi Q3 F3 uses 66.6mm centre bore — same as BMW X1 and Mercedes GLA, NOT the 57.1mm of VW Tiguan. Q3 and VW Tiguan both use 5×112 but rims are NOT cross-compatible without hub-centric rings. Tyre sizes (235/55R18) are interchangeable with Tiguan, GLA, and GLC of the same size.',
  },

  priceTabs: [
    {
      size: '235/55R18',
      tabLabel: '235/55R18 · Q3 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 豪华紧凑 SUV 胎 · Q3 入门实惠选择',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang SP-9 Cross',
        waText: 'Audi Q3 235%2F55R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡极佳 · 新加坡 Q3 最多车主选用',
        price: 198,
        also: 'Also: Bridgestone Turanza T005, Michelin Primacy 4+',
        waText: 'Audi Q3 235%2F55R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'Q3 旗舰配胎 · 豪华紧凑 SUV 最均衡顶级选择',
        price: 268,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 6 SUV',
        waText: 'Audi Q3 235%2F55R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $792–$920 · Premium $1,072–$1,240',
    },
    {
      size: '235/50R19',
      tabLabel: '235/50R19 · Q3 S-Line 19"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" UHP SUV 胎 · Q3 S-Line 预算首选',
        price: 138,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'Audi Q3 S-Line 235%2F50R19 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" 操控 + 静音均衡 · Q3 S-Line 最推荐',
        price: 228,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'Audi Q3 S-Line 235%2F50R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'S-Line 最顶级配胎 · 干湿地全面领先',
        price: 308,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Audi Q3 S-Line 235%2F50R19 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $912–$1,060 · Premium $1,232–$1,440',
    },
  ],

  radarSize: '235/55R18',
  radarSource: 'Hankook (11 reviews) · Continental (16 reviews) · Michelin (14 reviews). Source: TyreReviews.com.',
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
      scores: [88, 94, 84, 78, 86, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Q3 标准版（235/55R18）',
      color: 'blue',
      genKey: 'f3',
      body: 'Q3 F3 标准版原配 <strong>235/55R18</strong>，与 VW Tiguan、Mercedes GLC 尺码相同，货源极充足。Continental SportContact 6（$198/条）是新加坡 Q3 车主最多好评的选择——干湿地全面均衡，静音出色，整套约 $792。Michelin Pilot Sport 4S（$268/条）在操控方面更运动化，适合追求驾驶乐趣的 Q3 车主。',
    },
    {
      title: 'Q3 S-Line 车主（235/50R19）',
      color: 'red',
      genKey: 'f3',
      body: 'S-Line Q3 配 <strong>235/50R19</strong>，低扁平比提升操控感。Continental SportContact 6（$228/条）是最受好评的 19" 选择，整套约 $912。需注意：19" 薄胎侧壁更薄，遇新加坡减速带和路边石时放慢速度，可有效避免碰圈，修复费用通常 $200-500+/个。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Audi Q3 use in Singapore?',
      a: 'Audi Q3 F3 2nd gen (2018+): standard Advanced/Sport uses 235/55R18; S-Line uses 235/50R19. 1st gen 8U (2011–2018): 235/55R18. Check the door jamb sticker to confirm your trim.',
    },
    {
      q: 'What is the bolt pattern of the Audi Q3?',
      a: 'Audi Q3 (8U and F3) uses 5×112 bolt pattern with 66.6mm centre bore. Bolt thread M14×1.5, torque 130 Nm. Note: Audi Q3 has 66.6mm CB — same as BMW X1 and Mercedes GLA, NOT the 57.1mm of VW Tiguan despite being from the same group.',
    },
    {
      q: 'Are Audi Q3 and VW Tiguan tyres and rims interchangeable?',
      a: 'Tyres: yes — both use 235/55R18 (standard) so tyres are interchangeable. Rims: NO — Audi Q3 has 66.6mm centre bore while VW Tiguan has 57.1mm. Rims will not sit hub-centric between these two models without adapter rings, causing vibration at speed.',
    },
    {
      q: 'How much does it cost to replace Audi Q3 tyres in Singapore?',
      a: 'For 235/55R18 (most common): budget from $108 per tyre installed; mid-range $198–$225; premium $268–$308. Full set of 4: approximately $432–$1,240. For S-Line 235/50R19: budget from $138; mid $228–$258; premium $308–$355.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/55R18',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 235/55R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/55R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/50R19',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 235/50R19', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/50R19',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '308', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
