import type { CarData } from './types'

const data: CarData = {
  make: 'Suzuki',
  model: 'Swift',
  makeSlug: 'suzuki',
  modelSlug: 'swift',
  bgWord: 'SWIFT',

  seo: {
    title: 'Suzuki Swift Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Suzuki Swift AZ (2017+) uses 175/65R15 (base) or 185/60R16 (RS sport). ⚠️ 4×100 bolt pattern, 54.1mm CB, M12×1.25 nut. Lightest city car in Singapore. From $68 installed.',
    ogDescription: 'Suzuki Swift AZ: 175/65R15 (base), 185/60R16 (RS). ⚠️ 4×100 bolt pattern, 54.1mm CB. City car. From $68.',
    twitterDescription: 'Suzuki Swift uses 175/65R15 (base) or 185/60R16 (RS). ⚠️ 4×100 bolt. From $68.',
    priceFrom: 68,
    oeSize: '175/65R15',
  },

  defaultGen: 'az',

  generations: [
    {
      key: 'az',
      label: 'AZ 4th Gen (2017–2026)',
      years: '2017–2026',
      note: 'Current Suzuki Swift. GL and GLX base grades use 175/65R15 on 15" steel/alloy; RS Sport uses 185/60R16 on 16" alloys. Very light car (~800–1,000 kg), cheapest tyres in Singapore to replace. ⚠️ 4×100 bolt pattern — not compatible with 5-bolt Japanese/Korean car wheels.',
      heroChips: [
        { label: 'GL / GLX OE',     value: '175/65R15' },
        { label: 'RS sport OE',     value: '185/60R16' },
        { label: '⚠️ 4×100 bolt', value: 'NOT 5-bolt' },
      ],
      variants: [
        { name: 'Swift GL / GLX (15")', sizes: [
          { tag: 'OE',  size: '175/65R15' },
          { tag: 'Alt', size: '185/60R15', note: '稍宽，保持 15" 外径' },
        ]},
        { name: 'Swift RS Sport (16")', sizes: [
          { tag: 'OE',  size: '185/60R16' },
          { tag: 'Alt', size: '195/55R16', note: '外径接近，稍宽' },
        ]},
      ],
    },
    {
      key: 'zc',
      label: 'ZC 3rd Gen (2011–2017)',
      years: '2011–2017',
      note: 'Previous Swift ZC generation. Base uses 185/55R15; Sport uses 195/50R16. Same 4×100 bolt pattern.',
      heroChips: [
        { label: 'ZC base OE',   value: '185/55R15' },
        { label: 'ZC Sport OE', value: '195/50R16' },
        { label: 'From installed', value: '$68', green: true },
      ],
      variants: [
        { name: 'Swift ZC base (15")', sizes: [{ tag: 'OE', size: '185/55R15' }] },
        { name: 'Swift ZC Sport (16")', sizes: [{ tag: 'OE', size: '195/50R16' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'AZ 2017+ · GL/GLX · 15"',  width: '5.5J', diameter: '15"', offset: 'ET45', boltPattern: '4×100' },
    { label: 'AZ 2017+ · RS Sport · 16"', width: '6.0J', diameter: '16"', offset: 'ET45', boltPattern: '4×100' },
  ],
  rimCommon: {
    centreBore: '54.1mm',
    stud: 'M12×1.25 nut',
    torque: '85 Nm',
    notes: '⚠️ Suzuki Swift uses 4×100 bolt pattern, 54.1mm centre bore — same as BYD Dolphin, Honda Jazz/Fit (older), Toyota Yaris (older). M12×1.25 lug nuts (finer thread than standard M12×1.5), torque 85 Nm. NOT compatible with 5-bolt Japanese/Korean car wheels.',
  },

  priceTabs: [
    {
      size: '175/65R15',
      tabLabel: '175/65R15 · Swift GL / GLX base',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '15" 节能城市胎 · Swift base 新加坡最便宜换胎',
        price: 68,
        also: 'Also: Kumho Ecowing ES31, Nankang Econex NA-1',
        waText: 'Suzuki Swift 175%2F65R15 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '15" 静音舒适 · Swift 最佳换胎升级',
        price: 108,
        also: 'Also: Bridgestone Turanza T001, Continental ComfortContact 6',
        waText: 'Suzuki Swift 175%2F65R15 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza T005',
        desc: '15" 静音耐磨 · Swift 长期使用最佳',
        price: 118,
        also: 'Also: Michelin Primacy 4+, Continental PremiumContact 6',
        waText: 'Suzuki Swift 175%2F65R15 premium tyre quote (Bridgestone Turanza T005)',
      },
      setEstimate: 'Budget $272–$360 · Mid-range $432–$520 · Premium $472–$560',
    },
    {
      size: '185/60R16',
      tabLabel: '185/60R16 · Swift RS Sport 16"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '16" 运动节能胎 · Swift RS 预算选',
        price: 78,
        also: 'Also: Kumho Ecsta KH27, Nexen N\'Blue HD Plus',
        waText: 'Suzuki Swift RS 185%2F60R16 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '16" 干湿均衡 · Swift RS 驾感提升',
        price: 138,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'Suzuki Swift RS 185%2F60R16 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '16" 运动旗舰 · Swift RS 极致操控',
        price: 178,
        also: 'Also: Bridgestone Potenza Sport, Continental PremiumContact 7',
        waText: 'Suzuki Swift RS 185%2F60R16 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $312–$400 · Mid-range $552–$680 · Premium $712–$880',
    },
  ],

  radarSize: '175/65R15',
  radarSource: 'Michelin (9 reviews) · Bridgestone (7 reviews) · Hankook (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 70, 78, 72, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '70', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 82, 88, 78, 80, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [84, 84, 88, 80, 82, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Swift（175/65R15）— 最便宜换胎的城市小车，但注意 4×100 螺孔',
      color: 'blue',
      genKey: 'az',
      body: 'Suzuki Swift 是新加坡換胎成本最低的车型，175/65R15 全套仅需约 $272–$472。⚠️ <strong>注意：Swift 是 4×100 螺孔</strong>，与日韩系主流 5×114.3 完全不同，换装轮圈时请确认为 4 孔。轮胎方面，<strong>Michelin Primacy 4（$108/条）</strong>是 Swift 车主最常选的中端品牌，整套约 $432，静音性与耐磨性均大幅优于预算胎，十分推荐。RS Sport 版（185/60R16）如追求运动驾感，Continental PremiumContact 6 是性价比最高的升级选择。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Suzuki Swift use in Singapore?',
      a: 'Suzuki Swift AZ 4th Gen (2017+): GL/GLX base uses 175/65R15; RS Sport uses 185/60R16. ⚠️ 4×100 bolt pattern, 54.1mm centre bore. NOT compatible with standard 5-bolt Japanese/Korean car wheels.',
    },
    {
      q: 'How much does it cost to replace Suzuki Swift tyres in Singapore?',
      a: 'For 175/65R15 (base): budget from $68/tyre; mid-range (Michelin Primacy 4) $108; premium $118. Full set $272–$472 — the most affordable tyre replacement of any Singapore new car. For RS Sport 185/60R16: from $78 budget; mid $138; premium $178.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 175/65R15',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '68',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 175/65R15',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 175/65R15',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
