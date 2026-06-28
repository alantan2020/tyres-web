import type { CarData } from './types'

const data: CarData = {
  make: 'Mercedes-Benz',
  model: 'E-Class',
  makeSlug: 'mercedes',
  modelSlug: 'e-class',
  bgWord: 'ECLASS',

  seo: {
    title: 'Mercedes-Benz E-Class Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mercedes E-Class W213 (2016–2023) and W214 (2023+) use 245/45R18 (standard) or 245/40R19 (AMG Line). 5×112 bolt, M14×1.5. From $118 installed in Singapore.',
    ogDescription: 'Mercedes E-Class tyre sizes: 245/45R18 standard, 245/40R19 AMG Line. 5×112, 66.6mm CB, M14×1.5. From $118 installed in Singapore.',
    twitterDescription: 'Mercedes E-Class W213/W214 uses 245/45R18 or 245/40R19 AMG Line. 5×112, M14×1.5. From $118 installed in Singapore.',
    priceFrom: 118,
    oeSize: '245/45R18',
  },

  defaultGen: 'w213',

  generations: [
    {
      key: 'w214',
      label: 'W214 10th Gen (2023–2026)',
      years: '2023–2026',
      note: 'W214 comes with run-flat tyres as OE. AMG Line and E300 trims have 19" wheels.',
      heroChips: [
        { label: 'E200 / E250 standard', value: '245/45R18' },
        { label: 'E300 / AMG Line 19"', value: '245/40R19' },
        { label: 'From installed',       value: '$118', green: true },
      ],
      variants: [
        { name: 'E200 / E250 standard (18")', sizes: [
          { tag: 'OE',  size: '245/45R18' },
          { tag: 'Alt', size: '255/40R18', note: '宽 10mm，同外径' },
        ]},
        { name: 'E300 / AMG Line (19")', sizes: [
          { tag: 'OE',  size: '245/40R19' },
          { tag: 'Alt', size: '255/35R19', note: '更宽选项' },
        ]},
      ],
    },
    {
      key: 'w213',
      label: 'W213 9th Gen (2016–2023)',
      years: '2016–2023',
      note: 'Most common E-Class in Singapore. Run-flat OE on most trims.',
      heroChips: [
        { label: 'E200 / E250 standard', value: '245/45R18' },
        { label: 'E300 / AMG Line 19"', value: '245/40R19' },
        { label: 'From installed',       value: '$118', green: true },
      ],
      variants: [
        { name: 'E200 / E250 standard (18")', sizes: [
          { tag: 'OE',  size: '245/45R18' },
          { tag: 'Alt', size: '255/40R18', note: '宽 10mm 运动感升级' },
        ]},
        { name: 'E300 / AMG Line (19")', sizes: [
          { tag: 'OE',  size: '245/40R19' },
          { tag: 'Alt', size: '255/35R19', note: '更宽选项，货源充足' },
        ]},
      ],
    },
    {
      key: 'w212',
      label: 'W212 8th Gen (2009–2016)',
      years: '2009–2016',
      heroChips: [
        { label: 'E200 / E250 standard', value: '245/45R18' },
        { label: 'E350 / AMG',           value: '245/40R19' },
        { label: 'From installed',        value: '$118', green: true },
      ],
      variants: [
        { name: 'E200 / E250 standard (18")', sizes: [
          { tag: 'OE',  size: '245/45R18' },
          { tag: 'Alt', size: '255/40R18', note: '宽 10mm' },
        ]},
        { name: 'E350 / AMG (19")', sizes: [
          { tag: 'OE',  size: '245/40R19' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2023–2026 · W214 · AMG Line · 19"',  width: '8.5J', diameter: '19"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2023–2026 · W214 · standard · 18"',   width: '8.0J', diameter: '18"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2016–2023 · W213 · AMG Line · 19"',  width: '8.5J', diameter: '19"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2016–2023 · W213 · standard · 18"',   width: '8.0J', diameter: '18"', offset: 'ET44', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Mercedes E-Class uses the same 5×112 bolt pattern as BMW 5 Series, but with M14×1.5 thread vs BMW\'s M14×1.25. Lug bolts are NOT interchangeable between brands. E-Class W213/W214 rims are compatible with C-Class W205/W206 (same 5×112, but verify offset).',
  },

  priceTabs: [
    {
      size: '245/45R18',
      tabLabel: '245/45R18 · E200 / E250 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 豪华轿车胎 · E-Class 入门实惠选择',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'Mercedes E-Class 245%2F45R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '旗舰轿车静音 + 操控均衡 · E-Class 最受好评',
        price: 208,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'Mercedes E-Class 245%2F45R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'Mercedes OE 供应品牌 · E-Class 豪华旗舰最配',
        price: 278,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Mercedes E-Class 245%2F45R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $472–$570 · Mid-range $832–$960 · Premium $1,112–$1,300',
    },
    {
      size: '245/40R19',
      tabLabel: '245/40R19 · E300 / AMG Line 19"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" UHP 豪华轿车胎 · E-Class AMG Line 预算首选',
        price: 148,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'Mercedes E-Class AMG 245%2F40R19 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" 顶级表现 · 干地极限 + 湿地安全 · AMG Line 最推荐',
        price: 258,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'Mercedes E-Class AMG 245%2F40R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'E-Class AMG Line 旗舰配胎 · 干湿地全面领先',
        price: 328,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Mercedes E-Class AMG 245%2F40R19 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $1,032–$1,200 · Premium $1,312–$1,540',
    },
  ],

  radarSize: '245/45R18',
  radarSource: 'Hankook (12 reviews) · Continental (19 reviews) · Michelin (17 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [70, 78, 74, 70, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '78', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 92, 84, 80, 86, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 82, 88, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'E200 / E250 标准版（245/45R18）',
      color: 'blue',
      genKey: 'w213',
      body: 'E-Class 标准版原配 <strong>245/45R18</strong>，是豪华旗舰轿车尺码中货源最充足之一。Continental SportContact 6（$208/条）是新加坡 E-Class 车主好评最高的选择——静音出色，干地操控精准，整套约 $832。E-Class 定位舒适豪华，若更在意行驶安静，也可考虑 Bridgestone Turanza T005 或 Pirelli Cinturato P7，在 NVH 静音方面表现更突出。',
    },
    {
      title: 'E300 / AMG Line 车主（245/40R19）',
      color: 'red',
      genKey: 'w213',
      body: 'AMG Line E-Class 配 <strong>245/40R19</strong>，低扁平比带来更锐利的操控响应。Continental SportContact 6（$258/条，整套 $1,032）是最受 AMG Line E-Class 车主认可的选择。需注意：19" 薄胎侧壁更薄，遇减速带或路边石边缘时需放慢速度，以避免碰圈（rim damage），修复费用通常 $200-500+/个。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mercedes E-Class use in Singapore?',
      a: 'Mercedes E-Class W213 (2016–2023) and W214 (2023+): E200/E250 standard uses 245/45R18; E300 and AMG Line use 245/40R19. W212 (2009–2016): similar sizes. Check the door jamb sticker to confirm your trim.',
    },
    {
      q: 'What is the bolt pattern of the Mercedes E-Class?',
      a: 'All Mercedes E-Class generations (W212, W213, W214) use 5×112 bolt pattern with 66.6mm centre bore. Bolt thread is M14×1.5, torque 130 Nm. Note: same 5×112 pattern as BMW 5 Series, but bolt thread is different (Mercedes M14×1.5 vs BMW M14×1.25).',
    },
    {
      q: 'How much does it cost to replace Mercedes E-Class tyres in Singapore?',
      a: 'For 245/45R18 (most common): budget from $118 per tyre installed; mid-range $208–$235; premium $278–$320. Full set of 4: approximately $472–$1,300. For AMG Line 245/40R19: budget from $148; mid $258–$290; premium $328–$380. Full set: approximately $592–$1,540.',
    },
    {
      q: 'Are E-Class and C-Class tyres interchangeable?',
      a: 'No — E-Class uses 245/45R18 (or 245/40R19) while C-Class uses 225/45R18 (or 245/40R18). The widths are different. However, both share 5×112 bolt pattern, so rims with correct offset and size can be swapped between E-Class and C-Class. Always verify offset values before swapping rims.',
    },
    {
      q: 'Can I replace run-flat tyres on an E-Class with regular tyres?',
      a: 'Yes. Switching from RFT (RSC) to regular tyres on the E-Class is common and typically improves comfort and reduces cost. However, the E-Class has no spare tyre bay — ensure you keep the Mercedes Tyre Mobility Kit (inflation kit) in the boot. Your tyre workshop should reset the TPMS and note the tyre type change.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/45R18',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 245/45R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/45R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '278', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/40R19',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 245/40R19', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/40R19',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '328', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
