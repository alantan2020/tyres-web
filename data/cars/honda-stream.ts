import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'Stream',
  makeSlug: 'honda',
  modelSlug: 'stream',
  bgWord: 'STREAM',

  seo: {
    title: 'Honda Stream Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda Stream RN6/RN8 2nd Gen (2006–2014) uses 205/55R16 (iS base) or 225/45R17 (RSZ sport). 5×114.3 bolt pattern, 64.1mm CB. Discontinued but still widely seen in Singapore. From $78 installed.',
    ogDescription: 'Honda Stream RN6/RN8: 205/55R16 (iS base), 225/45R17 (RSZ). 5×114.3, 64.1mm. Discontinued but common in SG. From $78.',
    twitterDescription: 'Honda Stream uses 205/55R16 or 225/45R17. 5×114.3 bolt. From $78.',
    priceFrom: 78,
    oeSize: '205/55R16',
  },

  defaultGen: 'rn6',

  generations: [
    {
      key: 'rn6',
      label: 'RN6 / RN8 2nd Gen (2006–2014)',
      years: '2006–2014',
      note: 'Final generation Honda Stream. Very popular in Singapore — still a large road presence despite discontinuation. iS and iS special grades use 205/55R16; RSZ sport package uses 225/45R17. RN6 = 1.8L, RN8 = 2.0L.',
      heroChips: [
        { label: 'iS / iS special OE', value: '205/55R16' },
        { label: 'RSZ sport OE',        value: '225/45R17' },
        { label: 'From installed',       value: '$78', green: true },
      ],
      variants: [
        { name: 'Stream iS / iS special (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
          { tag: 'Alt', size: '215/50R16', note: '稍宽，保持 16" 外径' },
        ]},
        { name: 'Stream RSZ sport (17")', sizes: [
          { tag: 'OE',  size: '225/45R17' },
          { tag: 'Alt', size: '215/45R17', note: '外径接近，略窄' },
        ]},
      ],
    },
    {
      key: 'rn1',
      label: 'RN1 1st Gen (2001–2006)',
      years: '2001–2006',
      note: '1st gen Honda Stream. Rarely seen in Singapore now. Uses 195/60R15 (base) or 205/55R16.',
      heroChips: [
        { label: '1st Gen base OE', value: '195/60R15' },
        { label: '1st Gen higher OE', value: '205/55R16' },
        { label: 'From installed',    value: '$68', green: true },
      ],
      variants: [
        { name: '1st Gen base (15")', sizes: [
          { tag: 'OE',  size: '195/60R15' },
        ]},
        { name: '1st Gen higher (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2006–2014 · RN6/RN8 · iS base · 16"', width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2006–2014 · RN6/RN8 · RSZ sport · 17"', width: '7.0J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M12×1.5 bolt',
    torque: '108 Nm',
    notes: 'Honda Stream uses 5×114.3 bolt pattern, 64.1mm centre bore — same as Honda Accord, Civic, CR-V. M12×1.5 wheel bolts (not nuts), torque 108 Nm.',
  },

  priceTabs: [
    {
      size: '205/55R16',
      tabLabel: '205/55R16 · iS / iS special base',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 节能城市胎 · Stream 通勤预算首选',
        price: 78,
        also: 'Also: Kumho Ecowing ES31, Nankang Econex NA-1',
        waText: 'Honda Stream 205%2F55R16 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '16" 静音舒适 · Stream 日用最佳',
        price: 128,
        also: 'Also: Bridgestone Turanza T005, Continental PremiumContact 6',
        waText: 'Honda Stream 205%2F55R16 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza T005',
        desc: '16" 静音耐磨 · Stream 换胎性价比最高',
        price: 148,
        also: 'Also: Michelin Primacy 4+, Continental PremiumContact 7',
        waText: 'Honda Stream 205%2F55R16 premium tyre quote (Bridgestone Turanza T005)',
      },
      setEstimate: 'Budget $312–$400 · Mid-range $512–$640 · Premium $592–$720',
    },
    {
      size: '225/45R17',
      tabLabel: '225/45R17 · RSZ sport 17"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '17" 运动节能胎 · Stream RSZ 预算选',
        price: 88,
        also: 'Also: Kumho Ecsta PS91, Nexen N\'Blue HD Plus',
        waText: 'Honda Stream RSZ 225%2F45R17 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '17" 干湿均衡 · RSZ 最佳平衡',
        price: 158,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'Honda Stream RSZ 225%2F45R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '17" 静音旗舰 · RSZ 运动版最推荐',
        price: 198,
        also: 'Also: Bridgestone Potenza S001, Pirelli Cinturato P7',
        waText: 'Honda Stream RSZ 225%2F45R17 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $632–$760 · Premium $792–$960',
    },
  ],

  radarSize: '205/55R16',
  radarSource: 'Michelin (11 reviews) · Bridgestone (9 reviews) · Continental (7 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 70, 78, 72, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '70', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
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
      title: 'Stream RN6/RN8（205/55R16）— 停产 MPV，换胎实惠',
      color: 'blue',
      genKey: 'rn6',
      body: 'Honda Stream 已停产多年，但新加坡路面保有量仍然可观。205/55R16 是最常见的 16" 规格，货源充足且价格实惠。<strong>Michelin Primacy 4（$128/条）</strong>是 Stream 车主最受好评的换胎选择，寿命长达 50,000 km+，静音性好，整套约 $512。对于停产车，建议每次换胎时一同检查避震器和刹车片——Stream 的零件虽然仍有供应，但保养时间较长应提前预防。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda Stream use in Singapore?',
      a: 'Honda Stream RN6/RN8 2nd Gen (2006–2014): iS base uses 205/55R16; RSZ sport uses 225/45R17. 5×114.3 bolt pattern, 64.1mm centre bore.',
    },
    {
      q: 'How much does it cost to replace Honda Stream tyres in Singapore?',
      a: 'For 205/55R16 (iS base): budget from $78/tyre; mid-range (Michelin Primacy 4) $128; premium $148. Full set $312–$592. For RSZ sport 225/45R17: from $88 budget; mid $158; premium $198.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 205/55R16',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '78',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 205/55R16',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 205/55R16',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Continental PremiumContact 6 225/45R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
