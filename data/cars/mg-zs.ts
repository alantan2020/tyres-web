import type { CarData } from './types'

const data: CarData = {
  make: 'MG',
  model: 'ZS',
  makeSlug: 'mg',
  modelSlug: 'zs',
  bgWord: 'MGZS',

  seo: {
    title: 'MG ZS / ZS EV Tyre Size & Best Price Singapore | SGCarPass',
    description: 'MG ZS petrol uses 215/55R17 (mid) or 215/60R16 (base). MG ZS EV uses 215/50R18. From $88 installed in Singapore. 5×100 (petrol) / 5×112 (EV).',
    ogDescription: 'MG ZS petrol: 215/60R16 (base) or 215/55R17 (mid). MG ZS EV: 215/50R18. Petrol bolt 5×100 CB 56.1mm; EV bolt 5×112 CB 57.1mm. From $88.',
    twitterDescription: 'MG ZS petrol 215/55R17, ZS EV 215/50R18. From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '215/55R17',
  },

  defaultGen: 'gen2',

  generations: [
    {
      key: 'gen2',
      label: '2nd Gen ZS / ZS EV (2022–2026)',
      years: '2022–2026',
      note: '⚠️ MG ZS petrol and ZS EV have DIFFERENT bolt patterns — petrol uses 5×100, EV uses 5×112. Confirm your variant before ordering aftermarket rims.',
      heroChips: [
        { label: 'ZS petrol base OE',  value: '215/60R16' },
        { label: 'ZS petrol mid OE',   value: '215/55R17' },
        { label: 'ZS EV OE',           value: '215/50R18' },
        { label: 'From installed',      value: '$88', green: true },
      ],
      variants: [
        { name: 'ZS 1.5L Excite (base, 16")', sizes: [
          { tag: 'OE',  size: '215/60R16' },
          { tag: 'Alt', size: '215/55R17', note: '升 17"，中配尺码' },
        ]},
        { name: 'ZS 1.5L Essence / Trophy (mid, 17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '215/50R17', note: '略矮，操控感稍提升' },
        ]},
        { name: 'ZS EV Long Range (18")', sizes: [
          { tag: 'OE',  size: '215/50R18' },
          { tag: 'Alt', size: '215/55R17', note: '降 17"，舒适性更好' },
        ]},
      ],
    },
    {
      key: 'gen1',
      label: '1st Gen ZS (2018–2022)',
      years: '2018–2022',
      heroChips: [
        { label: 'Base OE',        value: '215/60R16' },
        { label: 'Mid OE',         value: '215/55R17' },
        { label: 'From installed',  value: '$88', green: true },
      ],
      variants: [
        { name: 'T180 (base, 16")', sizes: [
          { tag: 'OE',  size: '215/60R16' },
        ]},
        { name: 'T260 (mid/high, 17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · ZS EV · 18"',          width: '7.0J', diameter: '18"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2018+ · ZS petrol · mid 17"',   width: '6.5J', diameter: '17"', offset: 'ET43', boltPattern: '5×100' },
    { label: '2018+ · ZS petrol · base 16"',  width: '6.5J', diameter: '16"', offset: 'ET43', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '56.1mm (petrol) / 57.1mm (EV)',
    stud: 'M12×1.5',
    torque: '110 Nm',
    warning: '⚠️ MG ZS petrol uses 5×100 bolt pattern (same as Toyota Sienta, Vios, VW Polo). MG ZS EV uses 5×112 (same as VW Golf, Audi A3). These two variants are NOT rim-compatible with each other. Always confirm your specific variant (petrol vs EV) before purchasing aftermarket rims.',
  },

  priceTabs: [
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · ZS petrol 中配主力',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 舒适节能胎 · MG ZS 预算首选',
        price: 88,
        also: 'Also: Nankang Econex NA-1, Kumho Ecsta KH31',
        waText: 'MG ZS 215%2F55R17 budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音耐磨 · 日常通勤最佳 · ZS 中配推荐',
        price: 158,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'MG ZS 215%2F55R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '静音顶级 · 湿地安全优先 · ZS 高配推荐',
        price: 198,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato P7',
        waText: 'MG ZS 215%2F55R17 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $632–$760 · Premium $792–$920',
    },
    {
      size: '215/50R18',
      tabLabel: '215/50R18 · ZS EV 尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" EV 友好胎 · ZS EV 预算首选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'MG ZS EV 215%2F50R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '18" 干湿均衡 · ZS EV 推荐中端选择',
        price: 178,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'MG ZS EV 215%2F50R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: 'EV 专用低滚阻 · ZS EV 续航提升',
        price: 228,
        also: 'Also: Goodyear Eagle F1 Asymmetric 6, Pirelli P-Zero PZ4',
        waText: 'MG ZS EV 215%2F50R18 premium tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $712–$840 · Premium $912–$1,040',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Bridgestone (14 reviews) · Michelin (11 reviews) · Hankook (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [66, 70, 72, 80, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '70', hi: false }, { k: 'NVH', v: '72', hi: false }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [82, 84, 86, 82, 80, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [86, 86, 88, 84, 82, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'ZS petrol（5×100）— 性价比紧凑 SUV 日常换胎',
      color: 'blue',
      genKey: 'gen2',
      body: 'MG ZS 燃油版 17" 配 <strong>215/55R17</strong> 是新加坡最常换的尺码。Bridgestone Turanza T005（$158/条）静音耐磨均衡，日常通勤感受出色，整套约 $632。预算型选 Hankook Kinergy Eco2（$88/条），价格实惠、货源充足，适合纯代步使用。<strong>注意螺栓孔 5×100：</strong>MG ZS 燃油版与 Toyota Sienta / Vios 同为 5×100，但中心孔 56.1mm 与丰田（54.1mm）有差异，换轮圈时需核对。',
    },
    {
      title: 'ZS EV（5×112）— EV 版本螺栓孔不同，切勿混用',
      color: 'red',
      genKey: 'gen2',
      body: 'MG ZS EV 使用 <strong>5×112 螺栓孔</strong>（与 VW Golf、Audi A3 相同），而燃油版是 5×100——两者<strong>不能共用轮圈</strong>。ZS EV 原配 <strong>215/50R18</strong>，推荐 Continental SportContact 6（$178/条）——干湿地均衡，适合 EV 即时扭力。想提升续航可选 Michelin Pilot Sport EV（$228/条），低滚阻设计。整备重约 1,600 kg，换胎周期比同级燃油车稍短，建议每 8,000 km 检查一次胎纹。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the MG ZS use in Singapore?',
      a: 'MG ZS petrol (2018+): base trim uses 215/60R16; mid/high trim uses 215/55R17. MG ZS EV uses 215/50R18. ⚠️ Important: petrol uses 5×100 bolt pattern; EV uses 5×112 — they are not the same.',
    },
    {
      q: 'What is the bolt pattern of the MG ZS in Singapore?',
      a: 'MG ZS petrol uses 5×100 bolt pattern, 56.1mm centre bore. MG ZS EV uses 5×112 bolt pattern, 57.1mm centre bore. These are different and rims cannot be swapped between petrol and EV versions. Both use M12×1.5 lug nuts, torque 110 Nm.',
    },
    {
      q: 'How much does it cost to replace MG ZS tyres in Singapore?',
      a: 'For 215/55R17 (petrol): from $88/tyre; mid-range $158; premium $198. Full set: $352–$792. For 215/50R18 (EV): from $98/tyre; mid-range $178; premium $228. Full set: $392–$912.',
    },
    {
      q: 'Can I use Toyota Vios rims on an MG ZS petrol?',
      a: 'Both use 5×100 bolt pattern, but centre bore differs: Toyota is 54.1mm, MG ZS petrol is 56.1mm. A larger hub bore on the rim is acceptable with hub-centric rings, but if the Toyota rim has 54.1mm bore it is too small to fit the MG ZS hub. Offset (ET) values also differ — professional consultation recommended before cross-fitting.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 215/55R17',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/55R17', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/55R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 215/50R18',  brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 215/50R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport EV 215/50R18', brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
