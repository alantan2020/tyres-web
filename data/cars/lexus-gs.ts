import type { CarData } from './types'

const data: CarData = {
  make: 'Lexus',
  model: 'GS',
  makeSlug: 'lexus',
  modelSlug: 'gs',
  bgWord: 'GS',

  seo: {
    title: 'Lexus GS Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Lexus GS250/GS350/GS450h (L10 4th Gen 2012–2019) uses 225/45R18 base or 245/40R19 F Sport. 5×114.3 bolt pattern, 60.1mm CB. From $108 installed.',
    ogDescription: 'Lexus GS: 225/45R18 (base), 245/40R19 (F Sport). 5×114.3, 60.1mm CB. From $108 installed.',
    twitterDescription: 'Lexus GS uses 225/45R18 or 245/40R19 (F Sport). 5×114.3 bolt. From $108.',
    priceFrom: 108,
    oeSize: '225/45R18',
  },

  defaultGen: 'l10',

  generations: [
    {
      key: 'l10',
      label: 'L10 4th Gen (2012–2019)',
      years: '2012–2019',
      note: 'Final generation of GS. GS250 and GS350 standard use 225/45R18; F Sport package upgrades to 245/40R19. GS450h hybrid uses 225/45R18. Discontinued in 2019 but road presence remains strong in Singapore.',
      heroChips: [
        { label: 'GS250 / GS350 / GS450h OE', value: '225/45R18' },
        { label: 'F Sport OE',                 value: '245/40R19' },
        { label: 'From installed',              value: '$108', green: true },
      ],
      variants: [
        { name: 'GS250 / GS350 / GS450h base (18")', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '小幅升宽，保持 18" 外径' },
        ]},
        { name: 'GS F Sport (19")', sizes: [
          { tag: 'OE',  size: '245/40R19' },
          { tag: 'Alt', size: '255/35R19', note: '更宽但需检查挡泥板间隙' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2012–2019 · GS250 / GS350 / GS450h · 18"', width: '8.0J', diameter: '18"', offset: 'ET35', boltPattern: '5×114.3' },
    { label: '2012–2019 · F Sport · 19"',                 width: '8.5J', diameter: '19"', offset: 'ET35', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5 nut',
    torque: '103 Nm',
    notes: 'Lexus GS uses 5×114.3 bolt pattern, 60.1mm centre bore — same as Lexus IS, ES, NX, RX. M12×1.5 lug nuts, torque 103 Nm. Aftermarket wheels from IS300h fit GS without adapter (same hub spec).',
  },

  priceTabs: [
    {
      size: '225/45R18',
      tabLabel: '225/45R18 · GS250 / GS350 / GS450h',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" 运动节能胎 · GS 通勤预算首选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Lexus GS 225%2F45R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4+',
        desc: '18" 静音豪华 · GS 日用最佳平衡',
        price: 188,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza T005',
        waText: 'Lexus GS 225%2F45R18 mid-range tyre quote (Michelin Primacy 4+ or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '18" 运动旗舰 · 匹配 GS 的后驱驾感',
        price: 248,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Lexus GS 225%2F45R18 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $432–$560 · Mid-range $752–$920 · Premium $992–$1,200',
    },
    {
      size: '245/40R19',
      tabLabel: '245/40R19 · F Sport 19"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" 运动胎 · F Sport 预算选',
        price: 138,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Lexus GS F Sport 245%2F40R19 budget tyre quote (Hankook Ventus S1 Evo3 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 7',
        desc: '19" 干湿均衡 · F Sport 驾感最佳',
        price: 228,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Lexus GS F Sport 245%2F40R19 mid-range tyre quote (Continental PremiumContact 7 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '19" 运动旗舰 · 弯道性能最强',
        price: 288,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero PZ4',
        waText: 'Lexus GS F Sport 245%2F40R19 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $912–$1,080 · Premium $1,152–$1,360',
    },
  ],

  radarSize: '225/45R18',
  radarSource: 'Michelin (12 reviews) · Continental (10 reviews) · Bridgestone (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [72, 74, 78, 74, 74, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus Prime4',
      stats: [{ k: 'Wet', v: '72', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [88, 86, 88, 78, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '9.0',
      scores: [90, 92, 82, 84, 86, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 5',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '82', hi: false }, { k: 'Grip', v: '86', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'GS250 / GS350（225/45R18）— 停产不停换，货源充足',
      color: 'blue',
      genKey: 'l10',
      body: 'Lexus GS 虽已停产，但 18" 225/45R18 是主流 18" 规格，新加坡市场货源完全无忧。<strong>Michelin Primacy 4+（$188/条）</strong>是 GS 车主最常选的换胎方案，结合 GS 的大型豪华 sedan 定位，静音性和雨天安全感均属顶级，整套约 $752。GS350 后驱版建议选干湿均衡的运动胎——Continental PremiumContact 7 或 Michelin Pilot Sport 5 都是热门选择，驾感比原装更锐利。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Lexus GS use in Singapore?',
      a: 'Lexus GS250, GS350, GS450h (L10 4th Gen 2012–2019): 225/45R18 standard. F Sport package: 245/40R19. All use 5×114.3 bolt pattern, 60.1mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Lexus GS?',
      a: 'Lexus GS uses 5×114.3 bolt pattern, 60.1mm centre bore. Same as Lexus IS, ES, NX, RX. M12×1.5 lug nuts, torque 103 Nm.',
    },
    {
      q: 'How much does it cost to replace Lexus GS tyres in Singapore?',
      a: 'For 225/45R18: budget from $108/tyre; mid-range (Michelin Primacy 4+) $188; premium (Michelin Pilot Sport 5) $248. Full set $432–$992. F Sport 245/40R19: from $138 budget, $228 mid-range.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus Prime4 225/45R18',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/45R18',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 5 225/45R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/40R19',   brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental PremiumContact 7 245/40R19', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
