import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'Vezel',
  makeSlug: 'honda',
  modelSlug: 'vezel',
  bgWord: 'VEZEL',

  seo: {
    title: 'Honda Vezel Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda Vezel RV5 2nd Gen (2021+) uses 195/60R16 (G) or 215/45R17 (Z e:HEV). RU3/RU4 1st Gen (2014–2021) uses 215/60R16 (base) or 215/50R18 (RS). 5×114.3, 64.1mm CB. From $88 installed.',
    ogDescription: 'Honda Vezel: RV5 2nd gen 195/60R16 or 215/45R17; RU3/RU4 1st gen 215/60R16 or 215/50R18. 5×114.3. From $88.',
    twitterDescription: 'Honda Vezel RV5 uses 195/60R16 or 215/45R17. RU3/RU4 uses 215/60R16 or 215/50R18. From $88.',
    priceFrom: 88,
    oeSize: '215/60R16',
  },

  defaultGen: 'rv5',

  generations: [
    {
      key: 'rv5',
      label: 'RV5 2nd Gen (2021–2026)',
      years: '2021–2026',
      note: '2nd gen Vezel (RV5). e:HEV hybrid only from Japan. G base uses 195/60R16; Z e:HEV uses 215/45R17. Popular parallel import in Singapore for its stylish design and hybrid efficiency. Honda calls this model HR-V in some markets — same car, different name.',
      heroChips: [
        { label: 'G base OE',   value: '195/60R16' },
        { label: 'Z e:HEV OE', value: '215/45R17' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'RV5 G base (16")', sizes: [
          { tag: 'OE',  size: '195/60R16' },
          { tag: 'Alt', size: '205/55R16', note: '稍宽，保持 16" 外径' },
        ]},
        { name: 'RV5 Z e:HEV (17")', sizes: [
          { tag: 'OE',  size: '215/45R17' },
          { tag: 'Alt', size: '225/45R17', note: '稍宽，运动感更强' },
        ]},
      ],
    },
    {
      key: 'ru34',
      label: 'RU3 / RU4 1st Gen (2014–2021)',
      years: '2014–2021',
      note: 'RU3/RU4 Vezel 1st gen. Standard Hybrid X uses 215/60R16; Hybrid RS uses 215/50R18. Large road presence in Singapore as parallel imports from Japan. RU3 = FWD, RU4 = AWD (4WD).',
      heroChips: [
        { label: 'Hybrid X base OE', value: '215/60R16' },
        { label: 'Hybrid RS OE',     value: '215/50R18' },
        { label: 'From installed',    value: '$88', green: true },
      ],
      variants: [
        { name: 'RU3/RU4 Hybrid X (16")', sizes: [
          { tag: 'OE',  size: '215/60R16' },
        ]},
        { name: 'RU3/RU4 Hybrid RS (18")', sizes: [
          { tag: 'OE',  size: '215/50R18' },
          { tag: 'Alt', size: '225/45R18', note: '升宽选择' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021+ · RV5 · G base · 16"',         width: '6.0J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2021+ · RV5 · Z e:HEV · 17"',        width: '6.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2014–2021 · RU3/RU4 · Hybrid X · 16"', width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2014–2021 · RU3/RU4 · Hybrid RS · 18"', width: '7.0J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M12×1.5 bolt',
    torque: '108 Nm',
    notes: 'Honda Vezel uses 5×114.3 bolt pattern, 64.1mm centre bore — same as Honda HR-V, Civic, Accord, CR-V. M12×1.5 wheel bolts (not nuts), torque 108 Nm. RU3/RU4 and RV5 share the same bolt pattern; wheels are interchangeable if diameter matches.',
  },

  priceTabs: [
    {
      size: '215/60R16',
      tabLabel: '215/60R16 · RU3/RU4 Hybrid X base',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" SUV 节能胎 · Vezel 1st gen 通勤预算首选',
        price: 88,
        also: 'Also: Kumho Solus 4, Nankang Econex NA-1',
        waText: 'Honda Vezel 215%2F60R16 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '16" 静音舒适 · Vezel 混动型日用最佳',
        price: 148,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'Honda Vezel 215%2F60R16 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '16" 雨天 A 级 · Vezel 安全首选',
        price: 178,
        also: 'Also: Bridgestone Turanza 6, Continental PremiumContact 7',
        waText: 'Honda Vezel 215%2F60R16 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $592–$720 · Premium $712–$880',
    },
    {
      size: '215/45R17',
      tabLabel: '215/45R17 · RV5 Z e:HEV 17"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '17" 节能运动胎 · RV5 Z e:HEV 预算选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Nexen N\'Blue HD Plus',
        waText: 'Honda Vezel RV5 Z 215%2F45R17 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Michelin e.Primacy',
        desc: '17" 低滚阻 · RV5 e:HEV 续航最优',
        price: 178,
        also: 'Also: Continental EcoContact 6, Bridgestone Turanza Eco',
        waText: 'Honda Vezel RV5 Z e:HEV 215%2F45R17 mid-range tyre quote (Michelin e.Primacy or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 7',
        desc: '17" 静音干湿均衡 · RV5 Z 运动驾感',
        price: 208,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Honda Vezel RV5 Z 215%2F45R17 premium tyre quote (Continental PremiumContact 7)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $712–$840 · Premium $832–$1,000',
    },
  ],

  radarSize: '215/60R16',
  radarSource: 'Michelin (14 reviews) · Bridgestone (11 reviews) · Continental (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [70, 72, 80, 74, 72, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 82, 88, 78, 82, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [88, 86, 90, 80, 84, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Vezel RV5 e:HEV（215/45R17）— 推荐低滚阻胎提升混动续航',
      color: 'blue',
      genKey: 'rv5',
      body: 'Honda Vezel RV5 Z e:HEV 车重约 1,370 kg，混动系统对轮胎效率敏感。推荐 <strong>Michelin e.Primacy（$178/条）</strong>——这款低滚阻胎在 215/45R17 规格中测试节油表现最佳，与 e:HEV 系统协同工作可将市区油耗降低约 3–5%，整套约 $712。RU3/RU4 1st gen 的 215/60R16 货源充足，Bridgestone Turanza T005（$148/条）是最受好评的选择，兼顾静音和耐磨，整套约 $592。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda Vezel use in Singapore?',
      a: 'RV5 2nd Gen (2021+): G base uses 195/60R16; Z e:HEV uses 215/45R17. RU3/RU4 1st Gen (2014–2021): Hybrid X uses 215/60R16; Hybrid RS uses 215/50R18. All use 5×114.3 bolt pattern, 64.1mm CB.',
    },
    {
      q: 'Is Honda Vezel the same as HR-V?',
      a: 'The Honda Vezel is the Japanese domestic market name for what Honda sells as HR-V in many other markets. They are essentially the same car. In Singapore, both official HR-V and parallel-import Vezel share identical tyre and wheel specifications.',
    },
    {
      q: 'How much does it cost to replace Honda Vezel tyres in Singapore?',
      a: 'For 215/60R16 (RU3/RU4 base): budget from $88/tyre; mid-range (Bridgestone Turanza T005) $148; premium $178. Full set $352–$712. For RV5 Z 215/45R17: from $98 budget; mid $178; premium $208.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 215/60R16',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/60R16',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/60R16',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Michelin e.Primacy 215/45R17',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
