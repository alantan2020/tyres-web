import type { CarData } from './types'

const data: CarData = {
  make: 'Skoda',
  model: 'Octavia',
  makeSlug: 'skoda',
  modelSlug: 'octavia',
  bgWord: 'OCTAVIA',

  seo: {
    title: 'Skoda Octavia Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Skoda Octavia NX (2020+) uses 205/55R16 (Ambition), 225/45R17 (Style) or 225/40R18 (RS). 5×112, 57.1mm CB — VW Group pattern. M14×1.5 bolt, 120 Nm. From $88 installed.',
    ogDescription: 'Skoda Octavia NX: 205/55R16 (Ambition), 225/45R17 (Style), 225/40R18 (RS). 5×112 VW Group. From $88.',
    twitterDescription: 'Skoda Octavia uses 205/55R16 or 225/45R17 (Style). 5×112 VW Group bolt. From $88.',
    priceFrom: 88,
    oeSize: '225/45R17',
  },

  defaultGen: 'nx',

  generations: [
    {
      key: 'nx',
      label: 'NX 4th Gen (2020–2026)',
      years: '2020–2026',
      note: 'Current Skoda Octavia on MQB-A Evo platform (shared with VW Golf 8, Seat Leon). Ambition entry uses 205/55R16; Style uses 225/45R17; RS Sport uses 225/40R18. 5×112 — VW Group pattern, compatible with VW, Audi, Seat wheels of same offset. Popular family car among European car enthusiasts in Singapore.',
      heroChips: [
        { label: 'Ambition OE', value: '205/55R16' },
        { label: 'Style OE',    value: '225/45R17' },
        { label: 'RS OE',       value: '225/40R18' },
      ],
      variants: [
        { name: 'Octavia Ambition (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
          { tag: 'Alt', size: '215/50R16', note: '稍宽，保持 16" 外径' },
        ]},
        { name: 'Octavia Style (17")', sizes: [
          { tag: 'OE',  size: '225/45R17' },
          { tag: 'Alt', size: '235/40R17', note: '稍宽，运动感更强' },
        ]},
        { name: 'Octavia RS (18")', sizes: [
          { tag: 'OE',  size: '225/40R18' },
          { tag: 'Alt', size: '235/35R18', note: '略宽，赛道感更强' },
        ]},
      ],
    },
    {
      key: '5e',
      label: '5E 3rd Gen (2013–2020)',
      years: '2013–2020',
      note: 'Previous Octavia 5E. Ambition uses 205/55R16; Elegance/Style uses 225/45R17; RS uses 225/40R18. Same 5×112 bolt pattern.',
      heroChips: [
        { label: '5E Ambition OE', value: '205/55R16' },
        { label: '5E Elegance OE', value: '225/45R17' },
        { label: 'From installed',  value: '$88', green: true },
      ],
      variants: [
        { name: '5E Ambition (16")', sizes: [{ tag: 'OE', size: '205/55R16' }] },
        { name: '5E Elegance/Style (17")', sizes: [{ tag: 'OE', size: '225/45R17' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'NX 2020+ · Ambition · 16"', width: '6.5J', diameter: '16"', offset: 'ET50', boltPattern: '5×112' },
    { label: 'NX 2020+ · Style · 17"',    width: '7.0J', diameter: '17"', offset: 'ET50', boltPattern: '5×112' },
    { label: 'NX 2020+ · RS · 18"',       width: '7.5J', diameter: '18"', offset: 'ET50', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '57.1mm',
    stud: 'M14×1.5 bolt',
    torque: '120 Nm',
    notes: 'Skoda Octavia uses 5×112 bolt pattern, 57.1mm centre bore — VW Group standard shared with VW Golf/Passat, Audi A3/A4, Seat Leon. M14×1.5 wheel bolts, torque 120 Nm. Aftermarket wheel options very wide due to VW Group commonality.',
  },

  priceTabs: [
    {
      size: '225/45R17',
      tabLabel: '225/45R17 · Octavia Style 17"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '17" 运动节能胎 · Octavia Style 预算首选',
        price: 88,
        also: 'Also: Kumho Ecsta PS91, Nexen N\'Blue HD Plus',
        waText: 'Skoda Octavia 225%2F45R17 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '17" 干湿均衡旗舰 · Octavia VW Group 最推荐',
        price: 178,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'Skoda Octavia 225%2F45R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '17" 运动旗舰 · Octavia RS 换胎首选',
        price: 228,
        also: 'Also: Continental PremiumContact 7, Bridgestone Potenza Sport',
        waText: 'Skoda Octavia 225%2F45R17 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $712–$880 · Premium $912–$1,080',
    },
    {
      size: '205/55R16',
      tabLabel: '205/55R16 · Octavia Ambition base',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 节能城市胎 · Octavia Ambition 预算选',
        price: 88,
        also: 'Also: Kumho Ecowing ES31, Nexen N\'Blue HD Plus',
        waText: 'Skoda Octavia Ambition 205%2F55R16 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '16" 静音舒适 · Octavia 家用最推荐',
        price: 128,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza T005',
        waText: 'Skoda Octavia Ambition 205%2F55R16 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 7',
        desc: '16" 旗舰 · Octavia 换胎驾感升级',
        price: 168,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza 6',
        waText: 'Skoda Octavia Ambition 205%2F55R16 premium tyre quote (Continental PremiumContact 7)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $512–$640 · Premium $672–$800',
    },
  ],

  radarSize: '225/45R17',
  radarSource: 'Continental (12 reviews) · Michelin (10 reviews) · Hankook (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [72, 74, 76, 72, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus Prime4',
      stats: [{ k: 'Wet', v: '72', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '76', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.8',
      scores: [90, 90, 86, 80, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '9.0',
      scores: [90, 92, 82, 84, 86, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 5',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Grip', v: '86', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Octavia Style（225/45R17）— VW Group 5×112，换胎选择极多',
      color: 'blue',
      genKey: 'nx',
      body: 'Skoda Octavia 使用 VW 集团标准 5×112 螺孔，与 VW Golf、Audi A3、Seat Leon 轮圈通用，aftermarket 选择在欧系车中最丰富。轮胎方面，<strong>Continental PremiumContact 6（$178/条）</strong>是 Octavia Style 和 RS 最受推荐的换胎——Continental 是大众集团的首选 OE 供应商，干湿抓地力顶级，整套约 $712。Ambition（205/55R16）换胎性价比很高，Michelin Primacy 4 整套仅约 $512，静音耐磨双优。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Skoda Octavia use in Singapore?',
      a: 'Skoda Octavia NX (2020+): Ambition uses 205/55R16; Style uses 225/45R17; RS uses 225/40R18. 5×112 bolt pattern (VW Group), 57.1mm centre bore.',
    },
    {
      q: 'What bolt pattern does the Skoda Octavia have?',
      a: 'Skoda Octavia uses 5×112 bolt pattern — VW Group standard shared with VW Golf, Audi A3/A4, Seat Leon, Cupra. M14×1.5 bolts, torque 120 Nm. Very wide aftermarket wheel selection.',
    },
    {
      q: 'How much does it cost to replace Skoda Octavia tyres in Singapore?',
      a: 'For Style 225/45R17: budget from $88/tyre; mid-range (Continental PremiumContact 6) $178; premium $228. Full set $352–$912. For Ambition 205/55R16: from $88 budget; mid $128; premium $168.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus Prime4 225/45R17',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 6 225/45R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 5 225/45R17',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
