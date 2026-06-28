import type { CarData } from './types'

const data: CarData = {
  make: 'Audi',
  model: 'A4',
  makeSlug: 'audi',
  modelSlug: 'a4',
  bgWord: 'A4',

  seo: {
    title: 'Audi A4 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Audi A4 B9 (2016–2023) uses 225/50R17 (standard) or 245/40R18 (S-Line). B10 (2024+) uses 235/45R18. 5×112, 66.6mm CB — same as BMW/Mercedes, NOT same as VW Golf. From $88 installed Singapore.',
    ogDescription: 'Audi A4 B9/B10 tyre sizes: 225/50R17 standard, 245/40R18 S-Line. 5×112, 66.6mm CB — same as BMW/Mercedes despite being VAG. From $88 installed.',
    twitterDescription: 'Audi A4 B9 uses 225/50R17 (standard) or 245/40R18 (S-Line). 5×112, 66.6mm CB. From $88 installed Singapore.',
    priceFrom: 88,
    oeSize: '225/50R17',
  },

  defaultGen: 'b9',

  generations: [
    {
      key: 'b10',
      label: 'B10 9th Gen (2024–2026)',
      years: '2024–2026',
      note: 'B10 A4 is a complete redesign with larger body. Standard size moves to 18". All trims use 5×112 with 66.6mm CB — same as BMW 3 Series and Mercedes C-Class.',
      heroChips: [
        { label: 'A4 / Advanced 18"',  value: '235/45R18' },
        { label: 'S-Line 19"',          value: '255/40R19' },
        { label: 'From installed',      value: '$108', green: true },
      ],
      variants: [
        { name: 'A4 / Advanced (18")', sizes: [
          { tag: 'OE',  size: '235/45R18' },
          { tag: 'Alt', size: '245/40R18', note: '宽 10mm，同外径' },
        ]},
        { name: 'S-Line (19")', sizes: [
          { tag: 'OE',  size: '255/40R19' },
          { tag: 'Alt', size: '265/35R19', note: '宽 10mm 运动感升级' },
        ]},
      ],
    },
    {
      key: 'b9',
      label: 'B9 8th Gen (2016–2023)',
      years: '2016–2023',
      note: 'B9 is the most common A4 in Singapore. Run-flat tyres on some trims. Note: Audi A4 B9 uses 66.6mm centre bore — same as BMW 3 Series — NOT 57.1mm like VW Golf.',
      heroChips: [
        { label: 'A4 / Advanced 17"',  value: '225/50R17' },
        { label: 'S-Line 18"',          value: '245/40R18' },
        { label: 'From installed',      value: '$88', green: true },
      ],
      variants: [
        { name: 'A4 Advanced / Sport (17")', sizes: [
          { tag: 'OE',  size: '225/50R17' },
          { tag: 'Alt', size: '235/45R17', note: '宽 10mm，同外径' },
          { tag: 'Up',  size: '245/40R18', note: '升 18"，需配 7.5J 轮毂' },
        ]},
        { name: 'S-Line / 40 TFSI (18")', sizes: [
          { tag: 'OE',  size: '245/40R18' },
          { tag: 'Alt', size: '255/35R18', note: '宽 10mm 运动感升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2024–2026 · B10 · S-Line · 19"',    width: '8.5J', diameter: '19"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2024–2026 · B10 · standard · 18"',   width: '7.5J', diameter: '18"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2016–2023 · B9 · S-Line · 18"',     width: '8.0J', diameter: '18"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2016–2023 · B9 · standard · 17"',    width: '7.0J', diameter: '17"', offset: 'ET37', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Audi A4 uses 66.6mm centre bore — same as BMW 3 Series and Mercedes C-Class, NOT the 57.1mm of VW Golf/Tiguan despite being from the same VAG group. Rims from BMW 3 Series or Mercedes C-Class may be compatible with correct offset, but always verify before swapping.',
  },

  priceTabs: [
    {
      size: '225/50R17',
      tabLabel: '225/50R17 · A4 B9 标准版主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '17" 行政轿车胎 · A4 入门实惠，日常通勤足够',
        price: 88,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'Audi A4 225%2F50R17 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '静音舒适 + 湿地 A 级 · A4 行政级首选',
        price: 168,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Audi A4 225%2F50R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'A4 旗舰配胎 · 干湿地全面领先',
        price: 228,
        also: 'Also: Pirelli P-Zero PZ4, Continental SportContact 6',
        waText: 'Audi A4 225%2F50R17 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $352–$430 · Mid-range $672–$790 · Premium $912–$1,060',
    },
    {
      size: '245/40R18',
      tabLabel: '245/40R18 · A4 S-Line 18"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" UHP 运动胎 · A4 S-Line 预算首选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Audi A4 S-Line 245%2F40R18 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干地操控极佳 + 湿地 A 级 · A4 S-Line 最受好评',
        price: 218,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'Audi A4 S-Line 245%2F40R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'A4 S-Line 顶级配胎 · 全面领先的德系运动轿车体验',
        price: 288,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Audi A4 S-Line 245%2F40R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $472–$580 · Mid-range $872–$1,020 · Premium $1,152–$1,340',
    },
  ],

  radarSize: '225/50R17',
  radarSource: 'Hankook (11 reviews) · Continental (18 reviews) · Michelin (16 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [70, 76, 74, 68, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [84, 88, 88, 82, 86, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 80, 86, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'A4 标准版（225/50R17，B9）',
      color: 'blue',
      genKey: 'b9',
      body: 'B9 A4 标准版原配 <strong>225/50R17</strong>，侧壁较高，乘坐舒适。Continental PremiumContact 6（$168/条）是 A4 行政级车主最受好评的选择——静音出色，湿地 A 级，整套约 $672。A4 定位舒适运动兼顾，若更在意操控，可升级 Michelin Pilot Sport 4S（$228/条），整套约 $912。',
    },
    {
      title: 'A4 S-Line 车主（245/40R18）',
      color: 'red',
      genKey: 'b9',
      body: 'S-Line A4 配 <strong>245/40R18</strong>，低扁平比带来更精准的操控。Continental SportContact 6（$218/条）是 S-Line 最受认可的选择，干地操控感极佳，整套约 $872。18" 薄胎在新加坡路面需注意减速带——边缘碰圈修复费用 $200-500+。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Audi A4 use in Singapore?',
      a: 'Audi A4 B9 (2016–2023): standard Advanced/Sport uses 225/50R17; S-Line uses 245/40R18. B10 (2024+): standard uses 235/45R18; S-Line uses 255/40R19. Check the door jamb sticker to confirm your trim.',
    },
    {
      q: 'What is the bolt pattern of the Audi A4?',
      a: 'Audi A4 B9 and B10 use 5×112 bolt pattern with 66.6mm centre bore. Bolt thread M14×1.5, torque 130 Nm. Note: Audi A4 uses 66.6mm CB — same as BMW 3 Series and Mercedes C-Class, NOT the 57.1mm CB of VW Golf or Tiguan, despite Audi and VW being in the same group.',
    },
    {
      q: 'Can I use BMW 3 Series or Mercedes C-Class rims on an Audi A4?',
      a: 'BMW 3 Series and Audi A4 share the same 5×112 bolt pattern and 66.6mm centre bore. Rims may be compatible if the offset (ET) values are similar. Mercedes C-Class is also 5×112, 66.6mm but uses M14×1.5 bolts — same as Audi, so bolt compatibility is fine. Always verify the specific ET value and tyre size before swapping rims between brands.',
    },
    {
      q: 'How much does it cost to replace Audi A4 tyres in Singapore?',
      a: 'For 225/50R17 (B9 standard): budget from $88 per tyre installed; mid-range $168–$190; premium $228–$265. Full set of 4: approximately $352–$1,060. For S-Line 245/40R18: budget from $118; mid $218–$248; premium $288–$330.',
    },
    {
      q: 'What is the difference between Audi A4 and VW Passat wheel specs?',
      a: 'Both Audi A4 and VW Passat use 5×112, but their centre bore is different: A4 uses 66.6mm (same as BMW/Mercedes) while Passat uses 57.1mm (same as Golf/Tiguan). Rims between A4 and Passat are NOT directly interchangeable without hub-centric rings.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/50R17',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 6 225/50R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 225/50R17',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/40R18',    brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 245/40R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/40R18',   brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '288', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
