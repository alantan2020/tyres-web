import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Estima',
  makeSlug: 'toyota',
  modelSlug: 'estima',
  bgWord: 'ESTIMA',

  seo: {
    title: 'Toyota Estima Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Estima ACR50/GSR50 3rd Gen (2006–2019) uses 215/55R17 (AERAS base) or 215/50R18 (AERAS G). 5×114.3 bolt pattern, 60.1mm CB. Discontinued but still widely used in SG. From $98 installed.',
    ogDescription: 'Toyota Estima ACR50: 215/55R17 (AERAS base), 215/50R18 (AERAS G 18"). 5×114.3, 60.1mm. From $98.',
    twitterDescription: 'Toyota Estima uses 215/55R17 or 215/50R18. 5×114.3 bolt. From $98.',
    priceFrom: 98,
    oeSize: '215/55R17',
  },

  defaultGen: 'acr50',

  generations: [
    {
      key: 'acr50',
      label: 'ACR50 / GSR50 3rd Gen (2006–2019)',
      years: '2006–2019',
      note: 'Final generation Estima, discontinued in 2019. Very popular in Singapore — large road presence remains. AERAS base uses 215/55R17; AERAS G and Hybrid G use 215/50R18. Emina/Lucida grades (if parallel import) also use same specs.',
      heroChips: [
        { label: 'AERAS base OE',  value: '215/55R17' },
        { label: 'AERAS G / Hybrid OE', value: '215/50R18' },
        { label: 'From installed',  value: '$98', green: true },
      ],
      variants: [
        { name: 'Estima AERAS base (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '225/50R17', note: '稍宽，保持外径' },
        ]},
        { name: 'Estima AERAS G / Hybrid G (18")', sizes: [
          { tag: 'OE',  size: '215/50R18' },
          { tag: 'Alt', size: '225/45R18', note: '常见替代，微宽' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2006–2019 · AERAS base · 17"',    width: '7.0J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2006–2019 · AERAS G / Hybrid · 18"', width: '7.0J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5 nut',
    torque: '103 Nm',
    notes: 'Toyota Estima uses 5×114.3 bolt pattern, 60.1mm centre bore — same as Alphard, Vellfire, Camry. M12×1.5 lug nuts, torque 103 Nm. Wheels from Alphard AH20 (5×114.3) fit Estima directly.',
  },

  priceTabs: [
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · AERAS base 17"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" MPV 节能胎 · Estima 通勤预算首选',
        price: 98,
        also: 'Also: Kumho Solus 4, Nankang Econex NA-1',
        waText: 'Toyota Estima 215%2F55R17 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '17" 静音舒适 · Estima 家庭 MPV 最推荐',
        price: 168,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'Toyota Estima 215%2F55R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '17" 雨天 A 级 · Estima 停产车换胎最佳',
        price: 208,
        also: 'Also: Bridgestone Turanza 6, Continental PremiumContact 7',
        waText: 'Toyota Estima 215%2F55R17 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $672–$800 · Premium $832–$1,000',
    },
    {
      size: '215/50R18',
      tabLabel: '215/50R18 · AERAS G / Hybrid 18"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" 节能运动胎 · Estima AERAS G 预算选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Toyota Estima AERAS G 215%2F50R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '18" 干湿均衡 · AERAS G 最佳平衡',
        price: 188,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Toyota Estima AERAS G 215%2F50R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '18" 静音旗舰 · AERAS G Lounge 换胎首选',
        price: 228,
        also: 'Also: Bridgestone Turanza 6, Pirelli Cinturato P7',
        waText: 'Toyota Estima AERAS G 215%2F50R18 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $912–$1,080',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Michelin (13 reviews) · Bridgestone (11 reviews) · Continental (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 70, 80, 72, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '70', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '84', hi: true }],
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
      title: 'Estima ACR50（215/55R17）— 停产 MPV，换胎需求仍旺盛',
      color: 'blue',
      genKey: 'acr50',
      body: 'Toyota Estima 在新加坡路面保有量依然庞大，换胎需求稳定。215/55R17 是极常见的 17" 规格，货源充足，价格实惠。<strong>Bridgestone Turanza T005（$168/条）</strong>是 Estima 车主最常选的换胎方案，NVH 表现优秀，与 Estima 的家庭 MPV 定位完全匹配，整套约 $672。由于是停产车，建议每次换胎时同时检查刹车碟/片和避震器——Estima 的零件供应仍然充足但需要主动维护。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Estima use in Singapore?',
      a: 'Toyota Estima ACR50/GSR50 (2006–2019): AERAS base uses 215/55R17; AERAS G and Hybrid G use 215/50R18. 5×114.3 bolt pattern, 60.1mm centre bore.',
    },
    {
      q: 'Can I use Toyota Alphard wheels on an Estima?',
      a: 'Yes. Alphard AH20/AH30 (5×114.3) wheels fit the Estima directly — same bolt pattern and centre bore. Check that the rim diameter and offset are compatible. Alphard AH40 (5×120) wheels do NOT fit the Estima.',
    },
    {
      q: 'How much does it cost to replace Toyota Estima tyres in Singapore?',
      a: 'For 215/55R17 (AERAS base): budget from $98/tyre; mid-range (Bridgestone Turanza T005) $168; premium (Michelin Primacy 4+) $208. Full set $392–$832. For AERAS G 215/50R18: from $108 budget; mid $188; premium $228.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 215/55R17',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/55R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/55R17',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Continental PremiumContact 6 215/50R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
