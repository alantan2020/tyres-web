import type { CarData } from './types'

const data: CarData = {
  make: 'Nissan',
  model: 'Teana',
  makeSlug: 'nissan',
  modelSlug: 'teana',
  bgWord: 'TEANA',

  seo: {
    title: 'Nissan Teana Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Nissan Teana L33 3rd Gen (2014–2022) uses 215/55R17 (2.0 base) or 225/45R18 (2.5 XV). J32 2nd Gen uses same 215/55R17 or 225/45R18. 5×114.3, 66.1mm CB. Discontinued but popular. From $88 installed.',
    ogDescription: 'Nissan Teana L33/J32: 215/55R17 (base), 225/45R18 (XV/2.5). 5×114.3, 66.1mm. Discontinued but common. From $88.',
    twitterDescription: 'Nissan Teana uses 215/55R17 or 225/45R18 (XV). 5×114.3 bolt. From $88.',
    priceFrom: 88,
    oeSize: '215/55R17',
  },

  defaultGen: 'l33',

  generations: [
    {
      key: 'l33',
      label: 'L33 3rd Gen (2014–2022)',
      years: '2014–2022',
      note: 'Final generation Nissan Teana. 2.0 base uses 215/55R17; 2.5 XV top trim uses 225/45R18. Nissan discontinued Teana in 2022 but still large road presence in Singapore.',
      heroChips: [
        { label: '2.0 base OE', value: '215/55R17' },
        { label: '2.5 XV OE',  value: '225/45R18' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'Teana L33 2.0 base (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '225/50R17', note: '稍宽，保持 17" 外径' },
        ]},
        { name: 'Teana L33 2.5 XV (18")', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '稍宽，运动感更强' },
        ]},
      ],
    },
    {
      key: 'j32',
      label: 'J32 2nd Gen (2008–2014)',
      years: '2008–2014',
      note: 'Previous generation Teana J32. 2.0 uses 215/55R17; 2.5/3.5 uses 225/45R18.',
      heroChips: [
        { label: 'J32 2.0 OE',  value: '215/55R17' },
        { label: 'J32 2.5 OE', value: '225/45R18' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'J32 2.0 (17")', sizes: [{ tag: 'OE', size: '215/55R17' }] },
        { name: 'J32 2.5/3.5 (18")', sizes: [{ tag: 'OE', size: '225/45R18' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'L33 2014+ · 2.0 base · 17"', width: '7.0J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: 'L33 2014+ · 2.5 XV · 18"',   width: '7.5J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '66.1mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Nissan Teana uses 5×114.3 bolt pattern, 66.1mm centre bore. M14×1.5 wheel bolts, torque 130 Nm — same as Nissan X-Trail, Serena, Qashqai.',
  },

  priceTabs: [
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · Teana 2.0 base 17"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 节能城市胎 · Teana 通勤预算首选',
        price: 88,
        also: 'Also: Kumho Ecowing ES31, Nexen N\'Blue HD Plus',
        waText: 'Nissan Teana 215%2F55R17 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '17" 静音舒适 · Teana 行政轿车推荐',
        price: 168,
        also: 'Also: Bridgestone Turanza T005, Continental PremiumContact 6',
        waText: 'Nissan Teana 215%2F55R17 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 7',
        desc: '17" 旗舰 · Teana 驾感最佳升级',
        price: 218,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza 6',
        waText: 'Nissan Teana 215%2F55R17 premium tyre quote (Continental PremiumContact 7)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $672–$800 · Premium $872–$1,040',
    },
    {
      size: '225/45R18',
      tabLabel: '225/45R18 · Teana 2.5 XV 18"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" 运动节能胎 · Teana XV 预算选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Nissan Teana XV 225%2F45R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '18" 干湿均衡 · Teana XV 最受推荐',
        price: 198,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'Nissan Teana XV 225%2F45R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '18" 静音旗舰 · Teana XV 最佳平衡',
        price: 248,
        also: 'Also: Bridgestone Turanza 6, Continental PremiumContact 7',
        waText: 'Nissan Teana XV 225%2F45R18 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $792–$960 · Premium $992–$1,200',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Michelin (10 reviews) · Continental (8 reviews) · Hankook (7 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 78, 72, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 84, 90, 78, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [90, 90, 88, 80, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Continental\nPremiumContact 7',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Teana L33（215/55R17）— 停产行政轿车，换胎选静音耐磨',
      color: 'blue',
      genKey: 'l33',
      body: 'Nissan Teana 已于 2022 年停产，但新加坡路面仍可见大量 L33 和 J32。215/55R17 是最主流规格，货源充足。<strong>Michelin Primacy 4（$168/条）</strong>是 Teana 车主最常见的换胎选择，配合 Teana 宽敞安静的行政轿车定位，静音体验匹配。整套约 $672。XV 版（225/45R18）选 Continental PremiumContact 6（$198/条）性价比最佳。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Nissan Teana use in Singapore?',
      a: 'Nissan Teana L33 3rd Gen (2014–2022): 2.0 base uses 215/55R17; 2.5 XV uses 225/45R18. J32 (2008–2014): similar sizes. 5×114.3 bolt pattern, 66.1mm centre bore.',
    },
    {
      q: 'How much does it cost to replace Nissan Teana tyres in Singapore?',
      a: 'For 215/55R17 (base): budget from $88/tyre; mid-range (Michelin Primacy 4) $168; premium $218. Full set $352–$872. For XV 225/45R18: from $108 budget; mid $198; premium $248.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 215/55R17',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 215/55R17',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Continental PremiumContact 6 225/45R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
