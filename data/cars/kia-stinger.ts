import type { CarData } from './types'

const data: CarData = {
  make: 'Kia',
  model: 'Stinger',
  makeSlug: 'kia',
  modelSlug: 'stinger',
  bgWord: 'STINGER',

  seo: {
    title: 'Kia Stinger Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Kia Stinger CK uses staggered tyres: 225/45R18 front + 255/40R18 rear (base). 5×114.3 bolt. From $115 (front) installed. WhatsApp for rear tyre availability.',
    ogDescription: 'Kia Stinger CK: staggered 225/45R18 (front) + 255/40R18 (rear). 5×114.3, CB 67.1mm. Front from $115. Rear special order.',
    twitterDescription: 'Kia Stinger uses staggered tyres — 225/45R18 front + 255/40R18 rear. From $115 (front) installed in Singapore.',
    priceFrom: 115,
    oeSize: '225/45R18',
  },

  defaultGen: 'ck_fl',

  generations: [
    {
      key: 'ck_fl',
      label: 'CK Facelift',
      years: '2020–2023 (已停售)',
      heroChips: [
        { label: 'Front OE',       value: '225/45R18' },
        { label: 'Rear OE',        value: '255/40R18' },
        { label: 'Front from',     value: '$115', green: true },
      ],
      variants: [
        { name: '2.0T (base trim) — 错配（Staggered）', sizes: [
          { tag: 'OE',  size: '225/45R18', note: '前胎，我库 193 条现货' },
          { tag: 'OE',  size: '255/40R18', note: '后胎，特批订货' },
        ]},
        { name: '3.3T (mid trim) — 错配（Staggered）', sizes: [
          { tag: 'OE',  size: '225/40R19', note: '前胎 19"（市场参考）' },
          { tag: 'OE',  size: '255/35R19', note: '后胎 19"（市场参考）' },
        ]},
        { name: '3.3T GT (top trim) — 错配（Staggered）', sizes: [
          { tag: 'OE',  size: '225/35R20', note: '前胎 20"（市场参考）' },
          { tag: 'OE',  size: '255/30R20', note: '后胎 20"（市场参考）' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2020–2023 · CK FL · GT 20" front',   width: '8J',   diameter: '20"', offset: 'ET35',   boltPattern: '5×114.3' },
    { label: '2020–2023 · CK FL · GT 20" rear',    width: '9J',   diameter: '20"', offset: 'ET45',   boltPattern: '5×114.3' },
    { label: '2020–2023 · CK FL · mid 19" front',  width: '8J',   diameter: '19"', offset: 'ET34',   boltPattern: '5×114.3' },
    { label: '2020–2023 · CK FL · mid 19" rear',   width: '8.5J', diameter: '19"', offset: 'ET46.5', boltPattern: '5×114.3' },
    { label: '2020–2023 · CK FL · base 18" front', width: '8J',   diameter: '18"', offset: 'ET34',   boltPattern: '5×114.3' },
    { label: '2020–2023 · CK FL · base 18" rear',  width: '8.5J', diameter: '18"', offset: 'ET45',   boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '110 Nm',
    notes: '⚠ Stagger setup: front and rear are DIFFERENT widths and cannot be rotated. Replace front and rear separately. Kia Stinger uses 5×114.3 with 67.1mm centre bore — same as all Kia and Hyundai models.',
  },

  priceTabs: [
    {
      size: '225/45R18',
      tabLabel: '225/45R18 · base 前胎（193 条现货）',
      budget: {
        name: 'Blackhawk Street-H HU71 EV XL',
        desc: '运动前胎 · 193 条现货 · 超大库存',
        price: 115,
        also: 'Also: Dunlop SP Maxx 060+, Nexen NFERA Sport',
        waText: 'Kia Stinger base 225%2F45R18 front tyre quote (Blackhawk HU71 or similar)',
      },
      mid: {
        name: 'Bridgestone Potenza RE005',
        desc: '运动操控 · 干湿平衡 · 46 条现货',
        price: 194,
        also: 'Also: Bridgestone Techno Sport, Yokohama Advan Sport V105',
        waText: 'Kia Stinger base 225%2F45R18 front tyre quote (Bridgestone RE005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '旗舰运动胎 · 最佳干地操控 · 84 条现货',
        price: 244,
        also: 'Also: Pirelli P Zero PZ5, Continental SportContact 7',
        waText: 'Kia Stinger base 225%2F45R18 front tyre quote (Michelin PS5 or similar)',
      },
      setEstimate: '前两条 $230–$560（需另询价后胎 255/40R18）',
    },
    {
      size: '255/40R18',
      tabLabel: '255/40R18 · base 后胎（市场参考价）',
      budget: {
        name: 'Nexen NFERA Sport',
        desc: '市场参考 · 运动后胎 · 需询价',
        price: 185,
        also: 'Also: Hankook Ventus S1 evo3, Kumho Ecsta PS91',
        waText: 'Kia Stinger base 255%2F40R18 rear tyre quote',
      },
      mid: {
        name: 'Dunlop SP Sport Maxx 060+',
        desc: '运动后胎 · 干湿平衡 · 市场参考',
        price: 230,
        also: 'Also: Bridgestone Potenza S001, Goodyear Eagle F1 AS6',
        waText: 'Kia Stinger base 255%2F40R18 rear tyre quote (Dunlop or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '旗舰运动胎后轮 · 最强抓地 · 市场参考',
        price: 295,
        also: 'Also: Pirelli P Zero PZ4, Continental SportContact 7',
        waText: 'Kia Stinger base 255%2F40R18 rear tyre quote (Michelin PS5 or similar)',
      },
      setEstimate: '后两条 $370–$600（市场参考价，需联系确认货源）',
    },
  ],

  radarSize: '225/45R18',
  radarSource: 'Blackhawk (16 reviews) · Bridgestone (24 reviews) · Michelin (22 reviews). Source: TyreReviews.com. Performance tyres — Dry/Wet/Handling weighted.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.6',
      scores: [74, 80, 76, 72, 88, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nHU71 EV XL',
      stats: [{ k: 'Wet', v: '74', hi: false }, { k: 'Dry', v: '80', hi: false }, { k: 'Handling', v: '76', hi: false }, { k: 'Value', v: '88', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [82, 86, 85, 80, 74, 78], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nPotenza RE005',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'Handling', v: '85', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [86, 92, 90, 82, 72, 82], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 5',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'Handling', v: '90', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Stinger CK · 错配前胎 225/45R18',
      color: 'red',
      genKey: 'ck_fl',
      body: 'Stinger 前胎 225/45R18 我库 193 条现货。推荐 Bridgestone Potenza RE005（$194/条），运动性能均衡，两条前胎约 $388。顶配用 Michelin PS5（$244/条），两条约 $488。⚠ 前后不能互换，需前后分别购买。',
    },
    {
      title: 'Stinger CK · 错配后胎 255/40R18',
      color: 'blue',
      genKey: 'ck_fl',
      body: '后胎 255/40R18 我库目前无现货，为市场参考价（$185–$295/条）。可 WhatsApp 询价代订，约需 3–5 工作日到货。建议前后同时换同品牌同系列，操控平衡感最佳。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Kia Stinger use in Singapore?',
      a: 'Kia Stinger CK Facelift uses staggered sizing — different front and rear: base 2.0T: 225/45R18 (front) + 255/40R18 (rear); 3.3T: 225/40R19 (front) + 255/35R19 (rear); GT: 225/35R20 (front) + 255/30R20 (rear). Note that front and rear cannot be interchanged.',
    },
    {
      q: 'What is "staggered" fitment on the Kia Stinger?',
      a: 'Staggered means the rear tyres are wider than the front. On the Stinger, the front uses 225mm-wide tyres and the rear uses 255mm-wide tyres. This improves cornering grip and power delivery, but means you cannot rotate tyres front-to-rear, and you must replace each axle separately.',
    },
    {
      q: 'Is the Kia Stinger still available in Singapore?',
      a: 'The Kia Stinger was discontinued in Singapore in 2023. However, tyres for existing Stingers are still readily available — especially the front 225/45R18 (193 units in stock at SGCarPass). Rear tyres (255/40R18) may require special ordering.',
    },
    {
      q: 'What is the bolt pattern of the Kia Stinger?',
      a: 'Kia Stinger uses 5×114.3 with 67.1mm centre bore, M12×1.5, 110 Nm — same as all Kia and Hyundai models. However, the unique rim offsets (front ET34, rear ET45) mean you cannot swap rims from other Kia/Hyundai models.',
    },
    {
      q: 'How much does it cost to change Kia Stinger tyres in Singapore?',
      a: 'Front 225/45R18: $115 (Blackhawk budget) to $244 (Michelin PS5 premium) per tyre — two fronts $230–$488. Rear 255/40R18: market reference $185–$295 per tyre — two rears $370–$590. Full set (4 tyres): approximately $600–$1,080 depending on brand.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk HU71 EV XL 225/45R18',   brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '115', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Potenza RE005 225/45R18', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '194', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 5 225/45R18',  brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '244', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
