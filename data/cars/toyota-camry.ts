import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Camry',
  makeSlug: 'toyota',
  modelSlug: 'camry',
  bgWord: 'CAMRY',

  seo: {
    title: 'Toyota Camry Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Camry uses 215/55R17 or 235/45R18 tyres. Compare Michelin ($168) vs Bridgestone ($138). From $98 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Toyota Camry uses 215/55R17 or 235/45R18 tyres. Compare Michelin ($168) vs Bridgestone ($138). From $98 installed in Singapore. WhatsApp for a quote.',
    twitterDescription: 'Toyota Camry uses 215/55R17 or 235/45R18 tyres. Compare Michelin ($168) vs Bridgestone ($138). From $98 installed in Singapore.',
    priceFrom: 98,
    oeSize: '215/55R17',
  },

  defaultGen: 'gen8fl',

  generations: [
    {
      key: 'gen9',
      label: 'Gen 9 XV80',
      years: '2024–2026',
      heroChips: [
        { label: '2.5 Hybrid', value: '215/55R17' },
        { label: 'Sport', value: '235/40R19' },
        { label: 'From installed', value: '$138', green: true },
      ],
      variants: [
        { name: '2.5 Hybrid (standard)', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '205/65R16', note: '省油降噪替代' },
          { tag: 'Alt', size: '235/45R18', note: '18" 运动升级' },
        ]},
        { name: '2.5 Hybrid (sport/premium)', sizes: [
          { tag: 'OE',  size: '235/40R19' },
          { tag: 'Alt', size: '235/45R18', note: '18" 降价替代' },
        ]},
      ],
    },
    {
      key: 'gen8fl',
      label: 'Gen 8 XV70 FL',
      years: '2021–2024',
      heroChips: [
        { label: '2.0 VVT-i', value: '215/55R17' },
        { label: '2.5 / HEV', value: '235/45R18' },
        { label: 'From installed', value: '$138', green: true },
      ],
      variants: [
        { name: '2.0 VVT-i', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '235/45R18', note: '18" 运动升级' },
        ]},
        { name: '2.5 / 2.5 HEV', sizes: [
          { tag: 'OE',  size: '235/45R18' },
          { tag: 'OE',  size: '215/55R17', note: '部分配置' },
          { tag: 'Alt', size: '235/40R19', note: '19" 运动升级' },
        ]},
        { name: '2.5 HEV (luxury)', sizes: [
          { tag: 'OE',  size: '205/65R16' },
        ]},
      ],
    },
    {
      key: 'gen8',
      label: 'Gen 8 XV70',
      years: '2018–2021',
      heroChips: [
        { label: '2.5 VVT-i', value: '215/55R17' },
        { label: '2.5 sport', value: '235/45R18' },
        { label: 'From installed', value: '$138', green: true },
      ],
      variants: [
        { name: '2.0 VVT-iW', sizes: [
          { tag: 'OE',  size: '205/65R16' },
          { tag: 'Alt', size: '215/55R17' },
          { tag: 'Alt', size: '235/45R18', note: '18" 升级' },
        ]},
        { name: '2.5 VVT-i / 2.5 HV', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '235/45R18', note: '18" 升级' },
          { tag: 'Alt', size: '235/40R19', note: '19" 运动' },
        ]},
        { name: '2.5 VVT-iE (sport)', sizes: [
          { tag: 'OE',  size: '235/45R18' },
          { tag: 'Alt', size: '235/40R19' },
        ]},
      ],
    },
    {
      key: 'gen7fl',
      label: 'Gen 7 XV50 FL',
      years: '2014–2018',
      heroChips: [
        { label: '2.5 VVT-i', value: '215/55R17' },
        { label: '2.0 VVT-i-W', value: '215/60R16' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: '2.0 VVT-i-W', sizes: [
          { tag: 'OE',  size: '215/60R16' },
          { tag: 'Alt', size: '215/55R17', note: '17" 常见替代' },
          { tag: 'Alt', size: '205/65R16', note: '16" 省油替代' },
        ]},
        { name: '2.5 VVT-i / 2.5', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '215/60R16', note: '更舒适' },
          { tag: 'Alt', size: '225/45R18', note: '18" 运动升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2024–2026 · Gen 9 XV80 · 2.5H standard',     width: '7.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2024–2026 · Gen 9 XV80 · sport 19"',         width: '8J',   diameter: '19"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2018–2024 · Gen 8 XV70 · 17" standard',      width: '7.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2018–2024 · Gen 8 XV70 · 18" premium/sport', width: '8J',   diameter: '18"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2014–2018 · Gen 7 XV50 FL · 2.5',            width: '7J',   diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2014–2018 · Gen 7 XV50 FL · 2.0',            width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    notes: 'All generations share 5×114.3 bolt pattern',
  },

  priceTabs: [
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · 主流标准尺码',
      budget: {
        name: 'Kumho Ecsta HS51',
        desc: '日常通勤 · 操控稳定 · Wet grip: B',
        price: 98,
        also: 'Also: Nexen N\'Blue HD Plus, Maxxis MAP5',
        waText: 'Toyota Camry 215%2F55R17 budget tyre quote (Kumho Ecsta or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音 · 舒适 · Wet grip: A',
        price: 138,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Toyota Camry 215%2F55R17 mid-range tyre quote (Bridgestone Turanza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地制动 · 5年保用 · Wet grip: A',
        price: 168,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'Toyota Camry 215%2F55R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $392–$450 · Mid-range $552–$640 · Premium $672–$780',
    },
    {
      size: '235/45R18',
      tabLabel: '235/45R18 · XV70/XV80 运动配置',
      budget: {
        name: 'Goodyear Eagle Sport',
        desc: '运动操控 · 日常全天候 · Wet grip: B',
        price: 128,
        also: 'Also: Kumho Ecsta PS71, Hankook Ventus V12 evo2',
        waText: 'Toyota Camry 235%2F45R18 budget tyre quote (Goodyear Eagle Sport or similar)',
      },
      mid: {
        name: 'Bridgestone Potenza Sport',
        desc: '运动抓地 · 精准转向 · Wet grip: A',
        price: 168,
        also: 'Also: Continental SportContact 6, Dunlop SP Sport Maxx RT2',
        waText: 'Toyota Camry 235%2F45R18 mid-range tyre quote (Bridgestone Potenza Sport or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '旗舰运动 · 最佳干湿地抓地 · Wet grip: A',
        price: 215,
        also: 'Also: Pirelli P Zero, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Toyota Camry 235%2F45R18 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $512–$600 · Mid-range $672–$780 · Premium $860–$1000',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Kumho (22 reviews) · Bridgestone (28 reviews) · Michelin (35 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [66, 77, 72, 66, 75, 75], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Kumho\nEcsta HS51',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '77', hi: true }, { k: 'Wear', v: '72', hi: false }, { k: 'Value', v: '75', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [79, 84, 83, 80, 81, 80], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '79', hi: false }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '83', hi: true }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [85, 87, 84, 87, 83, 78], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '85', hi: true }, { k: 'Dry', v: '87', hi: true }, { k: 'NVH', v: '87', hi: true }, { k: 'Value', v: '78', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Gen 8/9 XV70 / XV80 (2018–2026) 标配 2.0 / 2.5 车主',
      color: 'red',
      genKey: 'gen8fl',
      body: 'OE 尺码 <strong>215/55R17</strong> 是最平衡的选择——货源足、价格合理、舒适静音。推荐 Bridgestone Turanza T005 ($138/条)，是新加坡豪华轿车最受好评的中端胎，兼顾湿地安全与低噪音，非常适合 Camry 的定位。想省钱可选 Kumho Ecsta HS51，日常通勤完全够用。',
    },
    {
      title: 'Gen 8/9 2.5 VVT-iE / 运动配置车主',
      color: 'blue',
      genKey: 'gen8fl',
      body: 'OE 尺码 <strong>235/45R18</strong> 更宽、更扁，操控犀利。推荐 Bridgestone Potenza Sport ($168/条)——湿地 A 级抓地，比省油胎转向更精准，适合进取型驾驶风格。如果预算充足，Michelin Pilot Sport 5 是旗舰选择，干湿两用全优，四条约 $860 起。<br>⚠️ 注意：235/45R18 和 235/40R19 不可互换，必须确认轮辋直径。',
    },
    {
      title: 'Gen 7 XV50 FL (2014–2018) 车主',
      color: 'red',
      genKey: 'gen7fl',
      body: '2.5 VVT-i OE 尺码 <strong>215/55R17</strong>，同款推荐 Bridgestone Turanza T005 或 Continental PremiumContact 6。2.0 VVT-i-W 原配 <strong>215/60R16</strong>，该尺码市场货源同样充足，Bridgestone Ecopia EP300 ($118/条) 是省油首选。很多 XV50 车主会换 17" 轮辋配 215/55R17，操控感提升明显。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Camry use in Singapore?',
      a: 'It depends on the generation and trim. Gen 9 XV80 (2024+) / Gen 8 XV70 FL (2021–2024): 2.0/2.5 standard trims use OE 215/55R17; 2.5 premium/sport trims use OE 235/45R18 or 235/40R19. Gen 8 XV70 (2018–2021): 2.5 VVT-i OE 215/55R17; 2.5 VVT-iE sport OE 235/45R18. Gen 7 XV50 FL (2014–2018): 2.5 OE 215/55R17; 2.0 OE 215/60R16. All generations use the 5×114.3 bolt pattern.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Camry?',
      a: 'All Toyota Camry generations sold in Singapore use the 5×114.3 bolt pattern. Centre bore is 60.1mm, lug nut thread is M12×1.5, tightening torque is 103 Nm.',
    },
    {
      q: 'How much does it cost to change tyres on a Toyota Camry in Singapore?',
      a: 'For 215/55R17 (most common size): budget from $98 per tyre installed; mid-range $138–$155 (Bridgestone Turanza T005); premium $168–$195 (Michelin Primacy 4+). A full set of 4 mid-range tyres costs $552–$640 all-in. For 235/45R18 (sport/premium trims): budget from $128; mid-range $168–$195; premium $215–$245.',
    },
    {
      q: 'Can I use 235/45R18 instead of 215/55R17 on a Toyota Camry?',
      a: 'Only if your Camry came with 18" wheels. The 215/55R17 and 235/45R18 are not interchangeable without changing the wheel diameter. If you have 17" wheels (standard on 2.0 and 2.5 base trims), you must stick with 17" tyres. If you want to upgrade to 18", you need to change the wheels as well.',
    },
    {
      q: 'How long do Camry tyres last in Singapore?',
      a: 'In Singapore\'s heat and traffic, Toyota Camry tyres typically last 3–5 years or 40,000–60,000 km. The 215/55R17 is a touring-oriented size with excellent mileage choices. Budget tyres usually last 30,000–40,000 km; premium brands like Michelin Primacy 4+ are rated for 50,000+ km. Inspect tread depth every 6 months and replace at 3mm.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Kumho Ecsta HS51 215/55R17',           brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/55R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/55R17',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Goodyear Eagle Sport 235/45R18',       brand: { '@type': 'Brand', name: 'Goodyear' },    offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Potenza Sport 235/45R18',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 5 235/45R18',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '215', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
