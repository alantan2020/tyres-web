import type { CarData } from './types'

const data: CarData = {
  make: 'Nissan',
  model: 'Leaf',
  makeSlug: 'nissan',
  modelSlug: 'leaf',
  bgWord: 'LEAF',

  seo: {
    title: 'Nissan Leaf Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Nissan Leaf AZE0 (2018–2022) uses 215/50R17; ZE0 1st Gen (2010–2017) uses 195/65R15. 5×114.3, 66.1mm CB, M14×1.5 bolt. EV — XL-rated recommended. Low rolling resistance preferred. From $88 installed.',
    ogDescription: 'Nissan Leaf: AZE0 uses 215/50R17; ZE0 uses 195/65R15. 5×114.3, 66.1mm CB. EV. From $88.',
    twitterDescription: 'Nissan Leaf AZE0 uses 215/50R17; ZE0 uses 195/65R15. 5×114.3. EV. From $88.',
    priceFrom: 88,
    oeSize: '215/50R17',
  },

  defaultGen: 'aze0',

  generations: [
    {
      key: 'aze0',
      label: 'AZE0 2nd Gen (2018–2022)',
      years: '2018–2022',
      note: 'Nissan Leaf 2nd Gen. Available as 40 kWh (standard range) and 62 kWh (e+). All use 215/50R17. As an EV weighing ~1,550 kg, low rolling resistance tyres recommended.',
      heroChips: [
        { label: 'All trims OE',       value: '215/50R17' },
        { label: 'Low-RR preferred',   value: 'eco-tyre' },
        { label: 'From installed',     value: '$88', green: true },
      ],
      variants: [
        { name: 'Leaf AZE0 40 kWh / e+ (17")', sizes: [
          { tag: 'OE',  size: '215/50R17' },
          { tag: 'Eco', size: '205/55R17', note: '外径接近，低滚阻型更省电' },
        ]},
      ],
    },
    {
      key: 'ze0',
      label: 'ZE0 1st Gen (2010–2017)',
      years: '2010–2017',
      note: 'Original Nissan Leaf. Uses 195/65R15 on 15" steel or alloy rims.',
      heroChips: [
        { label: 'All trims OE', value: '195/65R15' },
        { label: 'From installed', value: '$78', green: true },
      ],
      variants: [
        { name: 'Leaf ZE0 (15")', sizes: [
          { tag: 'OE',  size: '195/65R15' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: 'AZE0 2018+ · 17"', width: '6.5J', diameter: '17"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: 'ZE0 2010–2017 · 15"', width: '6.0J', diameter: '15"', offset: 'ET40', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '66.1mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Nissan Leaf uses 5×114.3 bolt pattern, 66.1mm centre bore — same as Nissan Serena, X-Trail, Qashqai. M14×1.5 wheel bolts, torque 130 Nm. Low rolling resistance tyres strongly recommended to maximise EV range.',
  },

  priceTabs: [
    {
      size: '215/50R17',
      tabLabel: '215/50R17 · Leaf AZE0 2nd Gen',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 低滚阻节能胎 · Leaf AZE0 预算首选',
        price: 88,
        also: 'Also: Kumho Ecowing ES31, Nexen N\'Blue HD Plus',
        waText: 'Nissan Leaf 215%2F50R17 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin e.Primacy',
        desc: '17" 低滚阻旗舰 · Leaf 续航最大化首选',
        price: 168,
        also: 'Also: Continental EcoContact 6, Bridgestone Turanza Eco',
        waText: 'Nissan Leaf 215%2F50R17 mid-range EV tyre quote (Michelin e.Primacy or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 6',
        desc: '17" 干湿均衡 · Leaf 换胎性能升级',
        price: 218,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'Nissan Leaf 215%2F50R17 premium tyre quote (Continental PremiumContact 6)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $672–$800 · Premium $872–$1,040',
    },
    {
      size: '195/65R15',
      tabLabel: '195/65R15 · Leaf ZE0 1st Gen',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '15" 节能城市胎 · Leaf 1st Gen 预算选',
        price: 78,
        also: 'Also: Kumho Ecowing ES31, Nexen N\'Blue HD Plus',
        waText: 'Nissan Leaf ZE0 195%2F65R15 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '15" 静音舒适 · ZE0 换胎首选',
        price: 118,
        also: 'Also: Bridgestone Turanza T005, Continental ComfortContact 6',
        waText: 'Nissan Leaf ZE0 195%2F65R15 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza T005',
        desc: '15" 静音耐磨 · ZE0 最佳平衡',
        price: 138,
        also: 'Also: Michelin Primacy 4+, Continental PremiumContact 6',
        waText: 'Nissan Leaf ZE0 195%2F65R15 premium tyre quote (Bridgestone Turanza T005)',
      },
      setEstimate: 'Budget $312–$400 · Mid-range $472–$560 · Premium $552–$680',
    },
  ],

  radarSize: '215/50R17',
  radarSource: 'Michelin (12 reviews) · Continental (9 reviews) · Hankook (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget · EV', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 80, 74, 76, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ EV Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 84, 90, 80, 88, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\ne.Primacy',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Range', v: '88', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [88, 88, 86, 80, 82, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Leaf AZE0（215/50R17）— EV 省电首选低滚阻胎',
      color: 'blue',
      genKey: 'aze0',
      body: 'Nissan Leaf 是新加坡最早普及的纯电车，AZE0 使用 215/50R17。换胎推荐 <strong>低滚阻（Low Rolling Resistance）型号</strong>以最大化续航。<strong>Michelin e.Primacy（$168/条）</strong>是 Leaf 车主评价最高的换胎方案，低滚阻且静音，整套约 $672。预算选 Hankook Kinergy Eco2（$88/条），也有良好的低滚阻表现，整套约 $352，非常适合二手车性价比换胎。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Nissan Leaf use in Singapore?',
      a: 'Nissan Leaf AZE0 2nd Gen (2018+): all trims use 215/50R17. ZE0 1st Gen (2010–2017): 195/65R15. 5×114.3 bolt pattern, 66.1mm centre bore. Low rolling resistance tyres recommended.',
    },
    {
      q: 'How much does it cost to replace Nissan Leaf tyres in Singapore?',
      a: 'For AZE0 215/50R17: budget from $88/tyre; mid-range (Michelin e.Primacy) $168; premium $218. Full set $352–$872. For ZE0 195/65R15: from $78 budget; mid $118; premium $138.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 215/50R17',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin e.Primacy 215/50R17',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Continental PremiumContact 6 215/50R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
