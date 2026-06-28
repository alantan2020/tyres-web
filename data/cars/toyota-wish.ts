import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Wish',
  makeSlug: 'toyota',
  modelSlug: 'wish',
  bgWord: 'WISH',

  seo: {
    title: 'Toyota Wish Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Wish ZGE20 2nd Gen (2009–2017) uses 205/65R15 base or 215/45R17 (1.8 S / 2.0). 5×114.3 bolt pattern, 60.1mm CB. Discontinued but large SG road presence. From $78 installed.',
    ogDescription: 'Toyota Wish: 205/65R15 (base), 215/45R17 (1.8S/2.0). 5×114.3, 60.1mm. Discontinued but many on SG roads. From $78.',
    twitterDescription: 'Toyota Wish uses 205/65R15 or 215/45R17. 5×114.3 bolt. From $78.',
    priceFrom: 78,
    oeSize: '205/65R15',
  },

  defaultGen: 'zge20',

  generations: [
    {
      key: 'zge20',
      label: 'ZGE20 2nd Gen (2009–2017)',
      years: '2009–2017',
      note: 'Toyota Wish ZGE20 was popular in Singapore and there is still a large number on the roads. Base 1.8 X grade uses 205/65R15; 1.8 S and 2.0 grades use 215/45R17. Tyre replacement is straightforward as both sizes are common in Singapore.',
      heroChips: [
        { label: '1.8 X base OE', value: '205/65R15' },
        { label: '1.8 S / 2.0 OE', value: '215/45R17' },
        { label: 'From installed',  value: '$78', green: true },
      ],
      variants: [
        { name: 'Wish 1.8 X base (15")', sizes: [
          { tag: 'OE',  size: '205/65R15' },
          { tag: 'Alt', size: '205/60R15', note: '常见替代尺码，外径稍小' },
        ]},
        { name: 'Wish 1.8 S / 2.0 (17")', sizes: [
          { tag: 'OE',  size: '215/45R17' },
          { tag: 'Alt', size: '225/45R17', note: '稍宽，保持 17" 外径' },
        ]},
      ],
    },
    {
      key: 'ane10',
      label: 'ANE10 1st Gen (2003–2009)',
      years: '2003–2009',
      note: '1st Gen Wish ANE10. Rarely seen in Singapore now but tyre replacement still needed. Uses 195/65R15 (base) or 205/55R16 (higher).',
      heroChips: [
        { label: '1st Gen base OE', value: '195/65R15' },
        { label: '1st Gen high OE',  value: '205/55R16' },
        { label: 'From installed',    value: '$68', green: true },
      ],
      variants: [
        { name: '1st Gen base (15")', sizes: [
          { tag: 'OE',  size: '195/65R15' },
        ]},
        { name: '1st Gen higher (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2009–2017 · ZGE20 · 1.8 X base · 15"', width: '6.0J', diameter: '15"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2009–2017 · ZGE20 · 1.8 S / 2.0 · 17"', width: '6.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5 nut',
    torque: '103 Nm',
    notes: 'Toyota Wish uses 5×114.3 bolt pattern, 60.1mm centre bore — same as Camry, Harrier, Alphard. M12×1.5 lug nuts, torque 103 Nm. Wheels from most Toyota 5×114.3 models fit Wish without adapter (check diameter).',
  },

  priceTabs: [
    {
      size: '205/65R15',
      tabLabel: '205/65R15 · ZGE20 1.8 X base',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '15" 节能城市胎 · Wish 通勤预算首选',
        price: 78,
        also: 'Also: Kumho Ecowing ES31, Nankang Econex NA-1',
        waText: 'Toyota Wish 205%2F65R15 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '15" 静音舒适 · Wish 日用最佳',
        price: 118,
        also: 'Also: Bridgestone Turanza T005, Continental PremiumContact 6',
        waText: 'Toyota Wish 205%2F65R15 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza T005',
        desc: '15" 静音耐磨 · Wish 停产二手车换胎首选',
        price: 138,
        also: 'Also: Michelin Primacy 4+, Continental PremiumContact 7',
        waText: 'Toyota Wish 205%2F65R15 premium tyre quote (Bridgestone Turanza T005)',
      },
      setEstimate: 'Budget $312–$400 · Mid-range $472–$560 · Premium $552–$680',
    },
    {
      size: '215/45R17',
      tabLabel: '215/45R17 · ZGE20 1.8 S / 2.0',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '17" 节能运动胎 · Wish 1.8 S / 2.0 预算选',
        price: 88,
        also: 'Also: Kumho Ecsta PS91, Nexen N\'Blue HD Plus',
        waText: 'Toyota Wish 1.8S 215%2F45R17 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '17" 干湿均衡 · Wish 最佳平衡',
        price: 158,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'Toyota Wish 1.8S 215%2F45R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '17" 运动旗舰 · Wish 2.0 驾感升级',
        price: 198,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Toyota Wish 1.8S 215%2F45R17 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $632–$760 · Premium $792–$960',
    },
  ],

  radarSize: '205/65R15',
  radarSource: 'Michelin (12 reviews) · Bridgestone (10 reviews) · Continental (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 78, 72, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 82, 88, 78, 80, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [84, 84, 90, 82, 82, 74], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Wish ZGE20（205/65R15）— 停产车换胎，15" 货源充足',
      color: 'blue',
      genKey: 'zge20',
      body: 'Toyota Wish 已停产，但 SG 路面保有量依然很大。15" 的 205/65R15 属于最基础的轿车尺码，在新加坡所有轮胎店均有现货，价格实惠。<strong>Michelin Primacy 4（$118/条）</strong>是停产车换胎的最佳选择，寿命长（约 50,000 km+），静音性好，整套约 $472。如果预算有限，Hankook Kinergy Eco2（$78/条）也是可靠选择，整套约 $312。15" 胎的价格比 17" 便宜约 20–30%，经济实惠。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Wish use in Singapore?',
      a: 'Toyota Wish ZGE20 2nd Gen (2009–2017): 1.8 X base uses 205/65R15; 1.8 S and 2.0 use 215/45R17. 5×114.3 bolt pattern, 60.1mm centre bore.',
    },
    {
      q: 'Are Toyota Wish tyres easy to find in Singapore?',
      a: 'Yes. Both 205/65R15 (base) and 215/45R17 (higher trims) are standard sizes widely available at all Singapore tyre shops. The Wish may be discontinued but its tyre sizes are still used by many other cars.',
    },
    {
      q: 'How much does it cost to replace Toyota Wish tyres in Singapore?',
      a: 'For 205/65R15 (base): budget from $78/tyre; mid-range (Michelin Primacy 4) $118; premium $138. Full set $312–$552. For 215/45R17 (1.8 S/2.0): from $88 budget; mid $158; premium $198.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 205/65R15',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '78',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 205/65R15',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 205/65R15',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus Prime4 215/45R17',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental PremiumContact 6 215/45R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
