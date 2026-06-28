import type { CarData } from './types'

const data: CarData = {
  make: 'MINI',
  model: 'Countryman',
  makeSlug: 'mini',
  modelSlug: 'countryman',
  bgWord: 'COUNTRY',

  seo: {
    title: 'MINI Countryman Tyre Size & Best Price Singapore | SGCarPass',
    description: 'MINI Countryman U25 3rd Gen (2024+) uses 205/60R17 (base) or 225/50R18 (Cooper S). F60 2nd Gen (2017+) uses 205/60R16 or 225/50R18. 5×112 bolt. From $88 installed.',
    ogDescription: 'MINI Countryman U25 3rd Gen: 205/60R17 (base), 225/50R18 (Cooper S), 235/45R20 (JCW). F60: 205/60R16, 225/50R18, 225/45R19. 5×112, 56.1mm. From $88.',
    twitterDescription: 'MINI Countryman uses 225/50R18 (Cooper S) or 235/45R20 (JCW). 5×112. From $88 installed.',
    priceFrom: 88,
    oeSize: '225/50R18',
  },

  defaultGen: 'u25',

  generations: [
    {
      key: 'u25',
      label: 'U25 3rd Gen (2024–2026)',
      years: '2024–2026',
      note: 'U25 Countryman is now BMW UKL2 platform (same as new 1 Series). Significantly larger than F60. PHEV E model weighs ~1,820 kg.',
      heroChips: [
        { label: 'base OE',        value: '205/60R17' },
        { label: 'Cooper S OE',    value: '225/50R18' },
        { label: 'JCW OE',         value: '235/45R20' },
        { label: 'From installed',  value: '$98', green: true },
      ],
      variants: [
        { name: 'Cooper / base (17")', sizes: [
          { tag: 'OE',  size: '205/60R17' },
          { tag: 'Alt', size: '225/50R18', note: '升 18"，Cooper S 同款' },
        ]},
        { name: 'Cooper S (18")', sizes: [
          { tag: 'OE',  size: '225/50R18' },
          { tag: 'Alt', size: '235/50R18', note: '稍宽，操控感提升' },
        ]},
        { name: 'JCW (20")', sizes: [
          { tag: 'OE',  size: '235/45R20' },
        ]},
      ],
    },
    {
      key: 'f60',
      label: 'F60 2nd Gen (2017–2024)',
      years: '2017–2024',
      heroChips: [
        { label: 'One / Cooper OE', value: '205/60R16' },
        { label: 'Cooper S OE',     value: '225/50R18' },
        { label: 'JCW OE',          value: '225/45R19' },
        { label: 'From installed',   value: '$88', green: true },
      ],
      variants: [
        { name: 'One / Cooper base (16")', sizes: [
          { tag: 'OE',  size: '205/60R16' },
          { tag: 'Alt', size: '205/55R17', note: '升 17"' },
        ]},
        { name: 'Cooper S (18")', sizes: [
          { tag: 'OE',  size: '225/50R18' },
          { tag: 'Alt', size: '235/50R18', note: '稍宽' },
        ]},
        { name: 'JCW (19")', sizes: [
          { tag: 'OE',  size: '225/45R19' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2024+ · U25 · JCW · 20"',        width: '8.0J', diameter: '20"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2024+ · U25 · Cooper S · 18"',   width: '7.5J', diameter: '18"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2024+ · U25 · base · 17"',       width: '7.0J', diameter: '17"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2017–2024 · F60 · JCW · 19"',   width: '7.5J', diameter: '19"', offset: 'ET48', boltPattern: '5×112' },
    { label: '2017–2024 · F60 · Cooper S · 18"', width: '7.0J', diameter: '18"', offset: 'ET48', boltPattern: '5×112' },
    { label: '2017–2024 · F60 · base · 16"',  width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M14×1.25 bolt',
    torque: '120 Nm',
    notes: 'MINI Countryman uses 5×112 bolt pattern, 56.1mm centre bore — same as MINI Cooper. BMW rims (66.6mm CB) require hub rings to fit. M14×1.25 lug bolts, torque 120 Nm. U25 3rd Gen is significantly heavier than F60 — PHEV variant needs XL-rated tyres.',
  },

  priceTabs: [
    {
      size: '225/50R18',
      tabLabel: '225/50R18 · Cooper S 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 紧凑 SUV 运动胎 · Countryman Cooper S 预算首选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'MINI Countryman 225%2F50R18 Cooper S budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 7',
        desc: '干湿地均衡 · Countryman S 首选换胎',
        price: 188,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Turanza T005A',
        waText: 'MINI Countryman 225%2F50R18 Cooper S mid-range tyre quote (Continental PremiumContact 7 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '18" 紧凑 SUV 极限操控 · Countryman JCW 首选',
        price: 238,
        also: 'Also: Continental SportContact 6, Pirelli P-Zero',
        waText: 'MINI Countryman 225%2F50R18 Cooper S premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $952–$1,100',
    },
    {
      size: '205/60R16',
      tabLabel: '205/60R16 · F60 base 16"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 城市 SUV 舒适胎 · Countryman base 预算首选',
        price: 88,
        also: 'Also: Nankang SP-7, Bridgestone Ecopia',
        waText: 'MINI Countryman F60 205%2F60R16 base budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '16" 静音舒适 · Countryman 日常通勤最佳',
        price: 138,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'MINI Countryman F60 205%2F60R16 base mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4',
        desc: '16" 静音安全 · 雨天最佳选择',
        price: 158,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato P7',
        waText: 'MINI Countryman F60 205%2F60R16 base premium tyre quote (Michelin Primacy 4)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $552–$680 · Premium $632–$760',
    },
  ],

  radarSize: '225/50R18',
  radarSource: 'Continental (13 reviews) · Michelin (11 reviews) · Bridgestone (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [70, 74, 76, 74, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '76', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 88, 86, 80, 80, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 7',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [88, 92, 84, 80, 84, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '84', hi: false }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Countryman Cooper S F60 / U25（225/50R18）— 城市 SUV 换胎策略',
      color: 'blue',
      genKey: 'u25',
      body: 'Countryman Cooper S 18" 是最主流的换胎尺码，Continental PremiumContact 7（$188/条）是 SG MINI 车主评价最高的选择——静音性和雨天安全均衡，整套约 $752。Michelin Pilot Sport 4S（$238/条）操控极限更高，适合 JCW 车主或喜欢运动驾驶感的 Cooper S 车主。<strong>U25 3rd Gen 注意：</strong>新款 Countryman 比 F60 重约 200–300 kg，PHEV 版超过 1,800 kg，建议选 XL 等级（LI 94+ for 225 width）。',
    },
    {
      title: 'F60 Countryman base（205/60R16）— 实惠城市 SUV 换胎',
      color: 'red',
      genKey: 'f60',
      body: 'F60 Countryman 16" base 版换胎费用是 MINI 家族里最亲民的，Bridgestone Turanza T005（$138/条）是日常通勤最佳选择，静音耐磨，整套约 $552。Hankook Kinergy Eco2（$88/条）是最具性价比的预算选择，整套仅 $352。F60 车重约 1,450–1,600 kg，对轮胎磨损不严苛，正常行驶一套轮胎寿命可达 40,000–50,000 km。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the MINI Countryman use in Singapore?',
      a: 'MINI Countryman U25 3rd Gen (2024+): base uses 205/60R17; Cooper S uses 225/50R18; JCW uses 235/45R20. F60 2nd Gen (2017–2024): base uses 205/60R16; Cooper S uses 225/50R18; JCW uses 225/45R19. All use 5×112 bolt pattern, 56.1mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the MINI Countryman?',
      a: 'MINI Countryman (F60 and U25) uses 5×112 bolt pattern, 56.1mm centre bore, M14×1.25 lug bolts, torque 120 Nm. Same as MINI Cooper (F56). Important: BMW rims (66.6mm CB) require hub rings to fit on MINI.',
    },
    {
      q: 'How much does it cost to replace MINI Countryman tyres in Singapore?',
      a: 'For 225/50R18 (Cooper S): budget from $108/tyre; mid-range $188; premium $238. Full set: $432–$952. For 205/60R16 (F60 base): from $88/tyre; mid-range $138. JCW 19" or 20" sizes from $128/tyre; premium $268.',
    },
    {
      q: 'Can I use MINI Cooper rims on a MINI Countryman?',
      a: 'Yes, MINI Cooper F56 and Countryman F60/U25 all share 5×112 bolt pattern and 56.1mm centre bore, so rims are technically interchangeable. However, rim widths and diameters differ — a 15" or 16" Cooper rim would look tiny on a Countryman. Verify the specific offset and tyre clearance before swapping.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/50R18',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 7 225/50R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 225/50R18',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 205/60R16',         brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 205/60R16',     brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4 205/60R16',           brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
