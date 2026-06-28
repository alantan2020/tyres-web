import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'ZR-V',
  makeSlug: 'honda',
  modelSlug: 'zr-v',
  bgWord: 'ZRV',

  seo: {
    title: 'Honda ZR-V Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda ZR-V RZ (2023+) uses 225/55R17 (e:HEV base) or 235/45R18 (Z e:HEV). 5×114.3 bolt pattern, 64.1mm CB. Honda\'s newest SUV in Singapore. From $108 installed.',
    ogDescription: 'Honda ZR-V: 225/55R17 (base e:HEV), 235/45R18 (Z e:HEV). 5×114.3, 64.1mm CB. From $108.',
    twitterDescription: 'Honda ZR-V uses 225/55R17 or 235/45R18. 5×114.3 bolt. From $108.',
    priceFrom: 108,
    oeSize: '225/55R17',
  },

  defaultGen: 'rz',

  generations: [
    {
      key: 'rz',
      label: 'RZ 1st Gen (2022–2026)',
      years: '2022–2026',
      note: 'Honda ZR-V is a new SUV positioned above HR-V and below CR-V. e:HEV hybrid-only in Singapore (both base and Z). Base grade uses 225/55R17; Z grade uses 235/45R18 with 18" alloys. Available as official Honda Singapore import.',
      heroChips: [
        { label: 'e:HEV base OE', value: '225/55R17' },
        { label: 'Z e:HEV OE',    value: '235/45R18' },
        { label: 'From installed', value: '$108', green: true },
      ],
      variants: [
        { name: 'ZR-V e:HEV base (17")', sizes: [
          { tag: 'OE',  size: '225/55R17' },
          { tag: 'Alt', size: '235/50R17', note: '稍宽，保持 17" 外径' },
        ]},
        { name: 'ZR-V Z e:HEV (18")', sizes: [
          { tag: 'OE',  size: '235/45R18' },
          { tag: 'Alt', size: '245/40R18', note: '小幅升宽，保持外径' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · e:HEV base · 17"', width: '7.0J', diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2022+ · Z e:HEV · 18"',    width: '7.5J', diameter: '18"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M12×1.5 bolt',
    torque: '108 Nm',
    notes: 'Honda ZR-V uses 5×114.3 bolt pattern, 64.1mm centre bore — same as Honda Civic, Accord, CR-V, Vezel. M12×1.5 wheel bolts (not nuts), torque 108 Nm. Wheels from other Honda 5×114.3 models fit ZR-V if diameter and offset match.',
  },

  priceTabs: [
    {
      size: '225/55R17',
      tabLabel: '225/55R17 · ZR-V e:HEV base',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" SUV 节能胎 · ZR-V base 预算首选',
        price: 108,
        also: 'Also: Kumho Solus 4, Nankang Econex NA-1',
        waText: 'Honda ZR-V 225%2F55R17 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin e.Primacy',
        desc: '17" 低滚阻 · ZR-V e:HEV 混动续航最优',
        price: 188,
        also: 'Also: Continental EcoContact 6, Bridgestone Turanza Eco',
        waText: 'Honda ZR-V 225%2F55R17 mid-range tyre quote (Michelin e.Primacy or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 7',
        desc: '17" 静音旗舰 · ZR-V base 最佳平衡',
        price: 228,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza 6',
        waText: 'Honda ZR-V 225%2F55R17 premium tyre quote (Continental PremiumContact 7)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$920 · Premium $912–$1,080',
    },
    {
      size: '235/45R18',
      tabLabel: '235/45R18 · ZR-V Z e:HEV 18"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" 运动节能胎 · ZR-V Z 预算选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Honda ZR-V Z 235%2F45R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '18" 干湿均衡 · ZR-V Z 驾感最佳',
        price: 208,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza T005',
        waText: 'Honda ZR-V Z 235%2F45R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '18" 运动旗舰 · ZR-V Z 驾感升级',
        price: 258,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Honda ZR-V Z 235%2F45R18 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $472–$600 · Mid-range $832–$1,000 · Premium $1,032–$1,240',
    },
  ],

  radarSize: '225/55R17',
  radarSource: 'Michelin (11 reviews) · Continental (9 reviews) · Bridgestone (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 78, 74, 72, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ EV/HEV Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 84, 90, 80, 86, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\ne.Primacy',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Range', v: '86', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [88, 88, 88, 80, 84, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Continental\nPremiumContact 7',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'ZR-V e:HEV（225/55R17）— 新款混动 SUV，推荐低滚阻胎',
      color: 'blue',
      genKey: 'rz',
      body: 'Honda ZR-V 是本田最新 SUV，全系 e:HEV 混动。225/55R17 是舒适 SUV 尺码，推荐 <strong>Michelin e.Primacy（$188/条）</strong>——这款低滚阻胎对混动车最友好，与 e:HEV 系统配合可将综合油耗降低约 3–5%，整套约 $752。如果侧重运动驾感，Continental PremiumContact 7 在 225/55R17 规格的干湿表现均属顶级，选 Z 版 18" 的车主也可考虑该型号（235/45R18 $208/条）。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda ZR-V use in Singapore?',
      a: 'Honda ZR-V RZ 1st Gen (2022+): base e:HEV uses 225/55R17; Z e:HEV uses 235/45R18. 5×114.3 bolt pattern, 64.1mm centre bore.',
    },
    {
      q: 'What bolt pattern does the Honda ZR-V have?',
      a: 'Honda ZR-V uses 5×114.3 bolt pattern, 64.1mm centre bore. Same as Honda Civic, Accord, CR-V, HR-V. M12×1.5 wheel bolts, torque 108 Nm.',
    },
    {
      q: 'How much does it cost to replace Honda ZR-V tyres in Singapore?',
      a: 'For 225/55R17 (base): budget from $108/tyre; mid-range (Michelin e.Primacy) $188; premium $228. Full set $432–$912. For Z 235/45R18: from $118 budget; mid $208; premium $258.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 225/55R17',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin e.Primacy 225/55R17',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Continental PremiumContact 7 225/55R17', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Continental PremiumContact 6 235/45R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
