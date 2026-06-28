import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'C-HR',
  makeSlug: 'toyota',
  modelSlug: 'c-hr',
  bgWord: 'C-HR',

  seo: {
    title: 'Toyota C-HR Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota C-HR ZYX10/NGX50 (2017–2023) uses 215/55R17 (base) or 225/45R18 (GR Sport / top). 5×100 bolt pattern, 54.1mm CB — same as Sienta/Yaris Cross, not 5×114.3. From $98 installed.',
    ogDescription: 'Toyota C-HR: 215/55R17 (base), 225/45R18 (GR Sport). 5×100 bolt (NOT 5×114.3). From $98 installed.',
    twitterDescription: 'Toyota C-HR uses 215/55R17 or 225/45R18. 5×100 bolt pattern. From $98.',
    priceFrom: 98,
    oeSize: '215/55R17',
  },

  defaultGen: 'zyx10',

  generations: [
    {
      key: 'zyx10',
      label: 'ZYX10 / NGX50 1st Gen (2017–2023)',
      years: '2017–2023',
      note: 'Toyota C-HR is built on the TNGA-C platform (same as Yaris Cross, Sienta) and uses 5×100 bolt pattern — different from Harrier/RAV4/Alphard which use 5×114.3. Hybrid and petrol versions share the same tyre sizes. Most Singapore C-HRs are parallel imports from Japan.',
      heroChips: [
        { label: 'S / G base OE', value: '215/55R17' },
        { label: 'GR Sport OE',   value: '225/45R18' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: 'C-HR S / G / hybrid base (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '225/50R17', note: '稍宽，保持 17" 直径' },
        ]},
        { name: 'C-HR GR Sport / top trims (18")', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '运动感更强但须检查间隙' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2017–2023 · S/G base · 17"',    width: '6.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×100' },
    { label: '2017–2023 · GR Sport · 18"',    width: '7.0J', diameter: '18"', offset: 'ET45', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '54.1mm',
    stud: 'M12×1.5 nut',
    torque: '103 Nm',
    notes: '⚠️ Toyota C-HR uses 5×100 bolt pattern (NOT 5×114.3 like Harrier/RAV4). Built on TNGA-C platform, same as Toyota Sienta, Yaris Cross, and Yaris. Centre bore 54.1mm. M12×1.5 lug nuts, torque 103 Nm. Wheels from 5×114.3 Toyota models will not fit without adapter.',
  },

  priceTabs: [
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · S / G base',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 节能舒适胎 · C-HR 通勤预算首选',
        price: 98,
        also: 'Also: Kumho Ecowing ES31, Nankang Econex NA-1',
        waText: 'Toyota C-HR 215%2F55R17 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '17" 静音舒适 · C-HR 日用最佳平衡',
        price: 168,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza T005',
        waText: 'Toyota C-HR 215%2F55R17 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '17" 雨天 A 级 · 日本平行进口 C-HR 最推荐',
        price: 208,
        also: 'Also: Continental PremiumContact 7, Bridgestone Turanza 6',
        waText: 'Toyota C-HR 215%2F55R17 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $672–$800 · Premium $832–$1,000',
    },
    {
      size: '225/45R18',
      tabLabel: '225/45R18 · GR Sport 18"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" 运动节能胎 · C-HR GR Sport 预算选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nexen N\'Blue HD Plus',
        waText: 'Toyota C-HR GR Sport 225%2F45R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '18" 干湿均衡 · GR Sport 最配驾感',
        price: 188,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Toyota C-HR GR Sport 225%2F45R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '18" 运动旗舰 · 匹配 GR Sport 运动定位',
        price: 248,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Toyota C-HR GR Sport 225%2F45R18 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $472–$600 · Mid-range $752–$920 · Premium $992–$1,200',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Michelin (16 reviews) · Continental (13 reviews) · Bridgestone (11 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [70, 72, 80, 74, 72, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 84, 88, 78, 82, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '78', hi: false }],
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
      title: 'C-HR（215/55R17）— 螺孔是 5×100，不是 5×114.3，注意区分',
      color: 'red',
      genKey: 'zyx10',
      body: 'Toyota C-HR 使用 <strong>5×100 螺孔</strong>（TNGA-C 平台），与 Sienta、Yaris Cross 相同，但与 Harrier、RAV4、Alphard（5×114.3）完全不同。新加坡市场大多数 C-HR 是日本平行进口（JDM 规格），均为 5×100。换装钢圈时务必核对螺孔，否则完全无法安装。轮胎方面，215/55R17 在新加坡货源充足，Michelin Primacy 4（$168/条）是最受 C-HR 车主好评的换胎选择，整套约 $672。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota C-HR use in Singapore?',
      a: 'Toyota C-HR ZYX10/NGX50 (2017–2023): base S/G uses 215/55R17; GR Sport and top trims use 225/45R18. 5×100 bolt pattern, 54.1mm centre bore — NOT 5×114.3 like Harrier/RAV4.',
    },
    {
      q: 'What bolt pattern does the Toyota C-HR have?',
      a: 'Toyota C-HR uses 5×100 bolt pattern, 54.1mm centre bore. This is the TNGA-C platform spec, same as Toyota Yaris, Yaris Cross, and Sienta. It is different from Toyota Harrier, RAV4, and Alphard which use 5×114.3. M12×1.5 lug nuts, torque 103 Nm.',
    },
    {
      q: 'How much does it cost to replace Toyota C-HR tyres in Singapore?',
      a: 'For 215/55R17: budget from $98/tyre; mid-range (Michelin Primacy 4) $168; premium (Michelin Primacy 4+) $208. Full set $392–$832. For GR Sport 225/45R18: from $118 budget; mid $188; premium $248.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 215/55R17',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 215/55R17',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/55R17',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus Prime4 225/45R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental PremiumContact 6 225/45R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
