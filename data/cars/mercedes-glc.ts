import type { CarData } from './types'

const data: CarData = {
  make: 'Mercedes-Benz',
  model: 'GLC',
  makeSlug: 'mercedes',
  modelSlug: 'glc',
  bgWord: 'GLC',

  seo: {
    title: 'Mercedes-Benz GLC Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mercedes GLC X254 (2022+) uses 235/55R18 (standard) or 255/45R19 (AMG Line). X253 (2015–2022) similar. GLC 300e PHEV: replace all 4 tyres. From $108 installed in Singapore.',
    ogDescription: 'Mercedes GLC X254/X253 tyre sizes: 235/55R18 standard, 255/45R19 AMG Line. PHEV: all 4 at once. 5×112, M14×1.5. From $108 installed in Singapore.',
    twitterDescription: 'Mercedes GLC uses 235/55R18 (standard) or 255/45R19 (AMG Line). GLC 300e PHEV: replace all 4. From $108 in Singapore.',
    priceFrom: 108,
    oeSize: '235/55R18',
  },

  defaultGen: 'x254',

  generations: [
    {
      key: 'x254',
      label: 'X254 2nd Gen (2022–2026)',
      years: '2022–2026',
      note: 'X254 GLC available as 300 petrol and 300e PHEV. PHEV version is heavier — replace all 4 tyres together. Run-flat tyres OE standard.',
      heroChips: [
        { label: 'GLC 200 / 300 standard', value: '235/55R18' },
        { label: 'AMG Line / 300e PHEV',   value: '255/45R19' },
        { label: 'From installed',          value: '$108', green: true },
      ],
      variants: [
        { name: 'GLC 200 / 300 Avantgarde / Sport (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '245/50R18', note: '宽 10mm，高度相近' },
        ]},
        { name: 'AMG Line / GLC 300e PHEV (19")', sizes: [
          { tag: 'OE',  size: '255/45R19' },
          { tag: 'Alt', size: '265/40R19', note: '宽 10mm，需确认轮拱间隙' },
        ]},
      ],
    },
    {
      key: 'x253',
      label: 'X253 1st Gen (2015–2022)',
      years: '2015–2022',
      note: 'X253 most common GLC in Singapore. Run-flat OE on most trims.',
      heroChips: [
        { label: 'GLC 200 / 250 standard', value: '235/55R18' },
        { label: 'GLC 300 / AMG Line 19"', value: '255/45R19' },
        { label: 'From installed',          value: '$108', green: true },
      ],
      variants: [
        { name: 'GLC 200 / 250 Avantgarde (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '245/50R18', note: '宽 10mm，同外径' },
        ]},
        { name: 'GLC 300 / AMG Line (19")', sizes: [
          { tag: 'OE',  size: '255/45R19' },
          { tag: 'Alt', size: '265/40R19', note: '宽 10mm 运动感更强' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · X254 · AMG Line · 19"',  width: '9.0J', diameter: '19"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2022–2026 · X254 · standard · 18"',   width: '8.0J', diameter: '18"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2015–2022 · X253 · AMG Line · 19"',  width: '8.5J', diameter: '19"', offset: 'ET40', boltPattern: '5×112' },
    { label: '2015–2022 · X253 · standard · 18"',   width: '7.5J', diameter: '18"', offset: 'ET40', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    warning: '⚠️ GLC 300e PHEV owners: always replace all 4 tyres together (heavier vehicle, 4MATIC AWD requires matched tread depths). Mercedes M14×1.5 bolts only — NOT compatible with BMW M14×1.25 bolts despite same 5×112 pattern.',
  },

  priceTabs: [
    {
      size: '235/55R18',
      tabLabel: '235/55R18 · GLC 200 / 300 标准 18"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 豪华 SUV 胎 · GLC 入门实惠选择',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang SP-9 Cross',
        waText: 'Mercedes GLC 235%2F55R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · 静音舒适 · 新加坡 GLC 最多车主选用',
        price: 198,
        also: 'Also: Bridgestone Turanza T005, Pirelli Scorpion Verde',
        waText: 'Mercedes GLC 235%2F55R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'GLC 旗舰 SUV 最佳配胎 · 全面领先干湿地表现',
        price: 268,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 6 SUV',
        waText: 'Mercedes GLC 235%2F55R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $792–$920 · Premium $1,072–$1,240',
    },
    {
      size: '255/45R19',
      tabLabel: '255/45R19 · AMG Line / 300e PHEV 19"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" UHP SUV 胎 · GLC AMG Line 预算选择',
        price: 138,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'Mercedes GLC AMG Line 255%2F45R19 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" 顶级均衡 · 干地操控 + 湿地 A 级 · AMG Line 最受好评',
        price: 258,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4 SUV',
        waText: 'Mercedes GLC AMG Line 255%2F45R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'GLC AMG 最顶级配胎 · SUV 性能操控最强选择',
        price: 338,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Mercedes GLC AMG Line 255%2F45R19 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $1,032–$1,200 · Premium $1,352–$1,600',
    },
  ],

  radarSize: '235/55R18',
  radarSource: 'Hankook (12 reviews) · Continental (18 reviews) · Michelin (15 reviews). Source: TyreReviews.com.',
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
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 80, 86, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'GLC 200 / 300 标准版（235/55R18）',
      color: 'blue',
      genKey: 'x254',
      body: 'GLC 标准版原配 <strong>235/55R18</strong>，是新加坡销量最高的 Mercedes SUV 尺码。Continental SportContact 6（$198/条）是 GLC 车主评分最高的选择——干湿地全面均衡，静音适合豪华 SUV 定位，整套约 $792。Michelin Pilot Sport 4S（$268/条）操控更运动化，整套约 $1,072。',
    },
    {
      title: 'GLC 300e PHEV 车主（必须 4 条全换）',
      color: 'red',
      genKey: 'x254',
      body: 'GLC 300e PHEV 整车约 2,100kg，装配 4MATIC 全时四驱。<strong>必须 4 条同型号一起换</strong>，前后不得有超过 2/32" 的胎纹差异，否则 4MATIC 差速器持续过载。PHEV 还有额外要求：建议选低滚阻认证胎（如 Michelin 的 Green 或 Eco 系列），能小幅提升纯电续航。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mercedes GLC use in Singapore?',
      a: 'Mercedes GLC X254 2nd gen (2022+): standard GLC 200/300 uses 235/55R18; AMG Line and GLC 300e PHEV use 255/45R19. X253 1st gen (2015–2022): similar sizes. Check the door jamb sticker to confirm your trim.',
    },
    {
      q: 'What is the bolt pattern of the Mercedes GLC?',
      a: 'All Mercedes GLC (X253, X254) use 5×112 bolt pattern with 66.6mm centre bore. Bolt thread M14×1.5, torque 130 Nm.',
    },
    {
      q: 'How much does it cost to replace Mercedes GLC tyres in Singapore?',
      a: 'For 235/55R18 (most common): budget from $108 per tyre; mid-range $198–$225; premium $268–$308. Full set of 4: approximately $432–$1,240. For AMG Line 255/45R19: budget from $138; mid $258–$290; premium $338–$390. Full set: approximately $552–$1,600.',
    },
    {
      q: 'Does the GLC 300e PHEV require special tyres?',
      a: 'The GLC 300e PHEV weighs ~2,100kg and uses 4MATIC full-time AWD. It requires all 4 tyres to be replaced together (same brand, model, and tread depth within 2/32"). Some owners prefer low-rolling-resistance tyres to extend electric range. Always ensure the tyre load index meets or exceeds OE specifications.',
    },
    {
      q: 'Are GLC and GLB tyres interchangeable?',
      a: 'Both GLC and GLB use the same tyre sizes (235/55R18 standard, 255/45R19 AMG Line) and the same 5×112 bolt pattern. Tyres with the same size are directly interchangeable. However, GLC and GLB have different rim sizes and offsets — rims are not directly swappable without verification.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/55R18',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 235/55R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/55R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 255/45R19',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 255/45R19', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 255/45R19',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '338', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
