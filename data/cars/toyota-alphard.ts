import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Alphard',
  makeSlug: 'toyota',
  modelSlug: 'alphard',
  bgWord: 'ALPHARD',

  seo: {
    title: 'Toyota Alphard Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Alphard uses 225/60R17 or 225/60R18 tyres. ⚠️ Bolt pattern 5×120 — not the same as most Toyota cars. From $118 installed. WhatsApp for a quote.',
    ogDescription: 'Toyota Alphard uses 225/60R17 or 225/60R18 tyres. ⚠️ Bolt pattern 5×120 — not the same as most Toyota cars. From $118 installed. WhatsApp for a quote.',
    twitterDescription: 'Toyota Alphard uses 225/60R17 or 225/60R18 tyres. Bolt pattern 5×120. From $118 installed in Singapore.',
    priceFrom: 118,
    oeSize: '225/60R17',
  },

  defaultGen: 'gen3fl',

  generations: [
    {
      key: 'gen4',
      label: 'Gen 4 AH40',
      years: '2023–2025',
      heroChips: [
        { label: '2.5 HEV', value: '225/60R18' },
        { label: 'Sport', value: '225/55R19' },
        { label: 'From installed', value: '$195', green: true },
      ],
      variants: [
        { name: '2.5 HEV (standard)', sizes: [
          { tag: 'OE',  size: '225/60R18' },
          { tag: 'Alt', size: '225/65R17', note: '17" 降价替代' },
          { tag: 'Alt', size: '225/55R19', note: '19" 运动升级' },
        ]},
        { name: '3.5 V6 / Executive Lounge', sizes: [
          { tag: 'OE',  size: '225/60R18' },
          { tag: 'Alt', size: '225/55R19', note: '19" 运动' },
        ]},
      ],
    },
    {
      key: 'gen3fl',
      label: 'Gen 3 FL AH30',
      years: '2018–2023',
      heroChips: [
        { label: '2.5 / 2.5 HV', value: '225/60R17' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: '2.5 / 2.5 HV', sizes: [
          { tag: 'OE',  size: '225/60R17' },
          { tag: 'Alt', size: '215/65R16', note: '16" 省油替代' },
          { tag: 'Alt', size: '235/50R18', note: '18" 运动升级' },
        ]},
      ],
    },
    {
      key: 'gen3',
      label: 'Gen 3 AH30',
      years: '2015–2018',
      heroChips: [
        { label: '2.5', value: '225/60R17' },
        { label: '3.5 V6', value: '235/50R18' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: '2.5 VVT-i (base)', sizes: [
          { tag: 'OE',  size: '215/65R16' },
          { tag: 'Alt', size: '225/60R17', note: '17" 升级，最常见' },
        ]},
        { name: '2.5 VVT-i (standard)', sizes: [
          { tag: 'OE',  size: '225/60R17' },
        ]},
        { name: '3.5 V6', sizes: [
          { tag: 'OE',  size: '235/50R18' },
          { tag: 'Alt', size: '225/60R17', note: '省油替代' },
        ]},
      ],
    },
    {
      key: 'gen2',
      label: 'Gen 2 AH20',
      years: '2008–2015',
      heroChips: [
        { label: '2.4 / 3.0', value: '215/65R16' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: '2.4 / 3.0', sizes: [
          { tag: 'OE',  size: '215/65R16' },
          { tag: 'Alt', size: '215/60R17', note: '17" 升级' },
          { tag: 'Alt', size: '235/50R18', note: '18" 运动升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2023–2025 · Gen 4 AH40 · OE 18"',      width: '7J',   diameter: '18"', offset: 'ET40', boltPattern: '5×120' },
    { label: '2023–2025 · Gen 4 AH40 · Alt 19"',      width: '7J',   diameter: '19"', offset: 'ET40', boltPattern: '5×120' },
    { label: '2018–2023 · Gen 3 FL AH30 · OE 17"',    width: '6.5J', diameter: '17"', offset: 'ET33', boltPattern: '5×120' },
    { label: '2015–2023 · Gen 3 AH30 · Alt 18"',      width: '7.5J', diameter: '18"', offset: 'ET45', boltPattern: '5×120' },
    { label: '2015–2018 · Gen 3 AH30 · base 16"',     width: '6.5J', diameter: '16"', offset: 'ET33', boltPattern: '5×120' },
    { label: '2008–2015 · Gen 2 AH20 · OE 16"',       width: '6.5J', diameter: '16"', offset: 'ET50', boltPattern: '5×120' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    warning: '⚠️ Alphard uses 5×120 bolt pattern — different from most Toyota cars (5×114.3). Confirm before buying aftermarket rims.',
  },

  priceTabs: [
    {
      size: '225/60R17',
      tabLabel: '225/60R17 · Gen 3 FL 主流尺码',
      budget: {
        name: 'Nexen N\'Blue HD Plus',
        desc: '静音舒适 · 省油 · 适合日常通勤',
        price: 118,
        also: 'Also: Kumho Solus TA51, Hankook Kinergy Eco 2',
        waText: 'Toyota Alphard 225%2F60R17 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Dunlop SP Sport Maxx 050+',
        desc: '操控均衡 · 静音 · 湿地 A 级',
        price: 158,
        also: 'Also: Bridgestone Alenza 001, Yokohama BluEarth-XT',
        waText: 'Toyota Alphard 225%2F60R17 mid-range tyre quote (Dunlop or Bridgestone)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地制动 · 低滚阻 · 静音旗舰',
        price: 195,
        also: 'Also: Pirelli Scorpion Verde, Continental CrossContact',
        waText: 'Toyota Alphard 225%2F60R17 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $632–$740 · Premium $780–$900',
    },
    {
      size: '225/60R18',
      tabLabel: '225/60R18 · Gen 4 AH40 标配',
      budget: {
        name: 'Hankook Kinergy S2',
        desc: '新款舒适胎 · 适合 AH40 日常行驶',
        price: 185,
        also: 'Also: Nexen N\'Blue, Kumho Solus HA51',
        waText: 'Toyota Alphard 225%2F60R18 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001',
        desc: '豪华 SUV 专用 · 极静音 · Wet grip: A',
        price: 215,
        also: 'Also: Dunlop SP Sport Maxx 050+, Continental CrossContact RX',
        waText: 'Toyota Alphard 225%2F60R18 mid-range tyre quote (Bridgestone Alenza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Latitude Sport 3',
        desc: '旗舰豪华 SUV 胎 · 最佳湿地 + 操控',
        price: 258,
        also: 'Also: Pirelli Scorpion Verde All Season, Goodyear Eagle F1 SUV',
        waText: 'Toyota Alphard 225%2F60R18 premium tyre quote (Michelin Latitude Sport 3)',
      },
      setEstimate: 'Budget $740–$860 · Mid-range $860–$1000 · Premium $1032–$1200',
    },
  ],

  radarSize: '225/60R17',
  radarSource: 'Nexen (15 reviews) · Dunlop (22 reviews) · Michelin (28 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [65, 74, 75, 70, 78, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nexen\nN\'Blue HD Plus',
      stats: [{ k: 'Wet', v: '65', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '70', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.0',
      scores: [76, 82, 80, 82, 78, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Dunlop\nSP Sport Maxx 050+',
      stats: [{ k: 'Wet', v: '76', hi: false }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Value', v: '76', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [86, 85, 85, 88, 84, 75], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy SUV+',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '85', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Value', v: '75', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Gen 4 AH40 (2023–2025) 车主',
      color: 'red',
      genKey: 'gen4',
      body: '全新 AH40 平台 OE 尺码 <strong>225/60R18</strong>，是目前 Alphard 最常见的 18" 胎。推荐 Bridgestone Alenza 001（$215/条）——专为豪华 SUV 设计，极静音、湿地 A 级，适合 Alphard 的定位。想省成本可选 Hankook Kinergy S2（$185/条），日常通勤完全够用。<br>⚠️ AH40 换 Rim 务必选 <strong>5×120</strong> 孔距，不要买成 5×114.3（大多数 Toyota 是这个）。',
    },
    {
      title: 'Gen 3 FL AH30 (2018–2023) 车主',
      color: 'blue',
      genKey: 'gen3fl',
      body: 'AH30 FL 是新加坡路上最多的 Alphard，OE 尺码 <strong>225/60R17</strong>。Dunlop SP Sport Maxx 050+（$158/条）是这一代最受欢迎的中端选择——操控均衡、静音好、货源稳定。想升级舒适感，Michelin Primacy SUV+（$195/条）是同级最佳，湿地制动和噪音控制都优于竞品。',
    },
    {
      title: 'Gen 3 AH30 3.5 V6 车主',
      color: 'red',
      genKey: 'gen3',
      body: '3.5L V6 版原配 <strong>235/50R18</strong>，这个尺码货源比 225/60R17 少，建议预留多一点采购时间。想换回 17" 尺码（225/60R17）也是完全可以的——前提是换回 17" 轮辋，操控变化不大，换胎成本降低约 $30–50/条。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Alphard use in Singapore?',
      a: 'Gen 4 AH40 (2023+): OE 225/60R18, Alt 225/55R19 (19"). Gen 3 FL AH30 (2018–2023): OE 225/60R17, Alt 235/50R18 (18"). Gen 3 AH30 (2015–2018): 2.5 OE 225/60R17; 3.5 V6 OE 235/50R18. Gen 2 AH20 (2008–2015): OE 215/65R16, Alt 215/60R17.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Alphard?',
      a: 'All Toyota Alphard generations use the 5×120 bolt pattern — NOT the 5×114.3 used by most other Toyota cars (Camry, Vios, Corolla Altis). Centre bore is 60.1mm, lug nut thread is M12×1.5, tightening torque is 103 Nm. Always confirm 5×120 before purchasing aftermarket rims.',
    },
    {
      q: 'How much does it cost to change tyres on a Toyota Alphard in Singapore?',
      a: 'For 225/60R17 (Gen 3 FL, most common): budget from $118/tyre; mid-range $158–$180 (Dunlop, Bridgestone); premium $195–$225 (Michelin Primacy SUV+). Full set of 4: budget $472–$560, mid $632–$740, premium $780–$900. For 225/60R18 (Gen 4 AH40): budget from $185, premium from $258.',
    },
    {
      q: 'Can I use 225/60R17 instead of 235/50R18 on the Alphard 3.5 V6?',
      a: 'Yes, but only if you also swap to 17" wheels — you cannot fit a 17" tyre on an 18" rim. The 225/60R17 is a cheaper and more common alternative with similar overall diameter. Many 3.5L Alphard owners make this switch to reduce running costs. If you keep the 18" rims, stick with 235/50R18 or ask us for other compatible 18" options.',
    },
    {
      q: 'Are Alphard tyres more expensive than other Toyota cars?',
      a: 'Yes — Alphard tyres are typically 20–40% more expensive than Camry or Vios tyres. The 225/60R17 is a less common size than 215/55R17, so there are fewer budget options. The Gen 4 AH40\'s 225/60R18 is even pricier. Budget for $472–$900 for a full set depending on brand and size.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nexen N\'Blue HD Plus 225/60R17',     brand: { '@type': 'Brand', name: 'Nexen' },      offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Dunlop SP Sport Maxx 050+ 225/60R17', brand: { '@type': 'Brand', name: 'Dunlop' },      offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 225/60R17',      brand: { '@type': 'Brand', name: 'Michelin' },   offers: { '@type': 'Offer', price: '195', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy S2 225/60R18',         brand: { '@type': 'Brand', name: 'Hankook' },    offers: { '@type': 'Offer', price: '185', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 225/60R18',     brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '215', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Latitude Sport 3 225/60R18',  brand: { '@type': 'Brand', name: 'Michelin' },   offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
