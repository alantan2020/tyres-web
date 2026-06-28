import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'Stepwgn',
  makeSlug: 'honda',
  modelSlug: 'stepwgn',
  bgWord: 'STEPWGN',

  seo: {
    title: 'Honda Stepwgn Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda Stepwgn RP6 (2022+) uses 195/60R16 (G base) or 215/45R17 (Air). RP5 (2015–2021) uses 205/60R16 (G) or 215/50R17 (Spada). 5×114.3 bolt, 64.1mm CB. From $88 installed.',
    ogDescription: 'Honda Stepwgn: RP6 195/60R16 or 215/45R17; RP5 205/60R16 or 215/50R17. 5×114.3, 64.1mm CB. From $88.',
    twitterDescription: 'Honda Stepwgn RP6 uses 195/60R16 or 215/45R17. RP5 uses 205/60R16 or 215/50R17. From $88.',
    priceFrom: 88,
    oeSize: '205/60R16',
  },

  defaultGen: 'rp6',

  generations: [
    {
      key: 'rp6',
      label: 'RP6 6th Gen (2022–2026)',
      years: '2022–2026',
      note: 'RP6 Stepwgn (e:HEV hybrid and petrol). G base and G-EX use 195/60R16; Air SPADA and higher use 215/45R17 with larger diameter. Growing number entering Singapore as parallel imports from Japan.',
      heroChips: [
        { label: 'G / G-EX base OE', value: '195/60R16' },
        { label: 'Air / SPADA OE',   value: '215/45R17' },
        { label: 'From installed',    value: '$88', green: true },
      ],
      variants: [
        { name: 'RP6 G / G-EX base (16")', sizes: [
          { tag: 'OE',  size: '195/60R16' },
          { tag: 'Alt', size: '205/55R16', note: '常见替代，稍宽' },
        ]},
        { name: 'RP6 Air / SPADA (17")', sizes: [
          { tag: 'OE',  size: '215/45R17' },
          { tag: 'Alt', size: '225/45R17', note: '稍宽，运动感更强' },
        ]},
      ],
    },
    {
      key: 'rp5',
      label: 'RP5 5th Gen (2015–2021)',
      years: '2015–2021',
      note: 'RP5 Stepwgn. G base uses 205/60R16; Spada and higher grades use 215/50R17. Hybrid (e:HEV) versions share same sizes. Many RP5 are well-established parallel imports in Singapore.',
      heroChips: [
        { label: 'G base OE',    value: '205/60R16' },
        { label: 'Spada OE',     value: '215/50R17' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'RP5 G base (16")', sizes: [
          { tag: 'OE',  size: '205/60R16' },
        ]},
        { name: 'RP5 Spada / higher (17")', sizes: [
          { tag: 'OE',  size: '215/50R17' },
          { tag: 'Alt', size: '225/50R17', note: '稍宽，保持 17" 外径' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · RP6 · G/G-EX base · 16"',   width: '6.0J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2022+ · RP6 · Air/SPADA · 17"',      width: '6.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2015–2021 · RP5 · G base · 16"',     width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2015–2021 · RP5 · Spada · 17"',      width: '7.0J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M12×1.5 bolt',
    torque: '108 Nm',
    notes: 'Honda Stepwgn uses 5×114.3 bolt pattern, 64.1mm centre bore — same as Honda Accord, CR-V, Civic. M12×1.5 wheel bolts (not nuts), torque 108 Nm. Note 64.1mm CB is slightly larger than Toyota\'s 60.1mm — hub rings needed if using Toyota-spec wheels.',
  },

  priceTabs: [
    {
      size: '205/60R16',
      tabLabel: '205/60R16 · RP5 G base 16"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" MPV 节能胎 · Stepwgn 通勤预算首选',
        price: 88,
        also: 'Also: Kumho Solus 4, Nankang Econex NA-1',
        waText: 'Honda Stepwgn 205%2F60R16 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '16" 静音舒适 · Stepwgn MPV 日用最佳',
        price: 138,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'Honda Stepwgn 205%2F60R16 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '16" 雨天 A 级 · Stepwgn 家庭 MPV 最安全选',
        price: 168,
        also: 'Also: Bridgestone Turanza 6, Continental PremiumContact 7',
        waText: 'Honda Stepwgn 205%2F60R16 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $552–$680 · Premium $672–$800',
    },
    {
      size: '215/50R17',
      tabLabel: '215/50R17 · RP5 Spada 17"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '17" 运动节能胎 · Spada 预算选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Honda Stepwgn Spada 215%2F50R17 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '17" 干湿均衡 · Spada 最佳平衡',
        price: 168,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'Honda Stepwgn Spada 215%2F50R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '17" 静音旗舰 · Spada Coolspirit 最推荐',
        price: 208,
        also: 'Also: Bridgestone Turanza 6, Pirelli Cinturato P7',
        waText: 'Honda Stepwgn Spada 215%2F50R17 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $672–$800 · Premium $832–$1,000',
    },
  ],

  radarSize: '205/60R16',
  radarSource: 'Michelin (15 reviews) · Bridgestone (12 reviews) · Continental (10 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 80, 74, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 82, 90, 78, 82, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '78', hi: false }],
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
      title: 'Stepwgn RP5/RP6 — 新加坡最受欢迎家庭 MPV，Honda 最大换胎缺口',
      color: 'blue',
      genKey: 'rp6',
      body: 'Honda Stepwgn 是新加坡最常见的 7 座家庭 MPV 之一，但本地官方渠道供应有限，大多数是日本平行进口。螺孔 5×114.3，60.1mm CB 与 Honda Civic/Accord/CR-V 相同，钢圈可互换。16" 的 <strong>205/60R16</strong> 是最常换的规格，Bridgestone Turanza T005（$138/条）是 RP5 车主最受好评的选择，静音性极佳，整套约 $552。RP6 的 e:HEV 版本推荐选低滚阻型——Michelin e.Primacy（如有 195/60R16 规格）可提升续航。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda Stepwgn use in Singapore?',
      a: 'RP6 6th Gen (2022+): G/G-EX base uses 195/60R16; Air/SPADA uses 215/45R17. RP5 5th Gen (2015–2021): G base uses 205/60R16; Spada uses 215/50R17. All use 5×114.3 bolt pattern, 64.1mm centre bore.',
    },
    {
      q: 'What bolt pattern does the Honda Stepwgn have?',
      a: 'Honda Stepwgn uses 5×114.3 bolt pattern, 64.1mm centre bore. Same as Honda Accord, Civic, CR-V. M12×1.5 wheel bolts (not nuts), torque 108 Nm. Note: Honda uses bolts, not nuts.',
    },
    {
      q: 'How much does it cost to replace Honda Stepwgn tyres in Singapore?',
      a: 'For 205/60R16 (RP5 G base): budget from $88/tyre; mid-range (Bridgestone Turanza T005) $138; premium (Michelin Primacy 4+) $168. Full set $352–$672. For Spada 215/50R17: from $98 budget; mid $168; premium $208.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 205/60R16',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 205/60R16',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 205/60R16',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Continental PremiumContact 6 215/50R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
