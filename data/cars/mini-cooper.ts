import type { CarData } from './types'

const data: CarData = {
  make: 'MINI',
  model: 'Cooper',
  makeSlug: 'mini',
  modelSlug: 'cooper',
  bgWord: 'MINI',

  seo: {
    title: 'MINI Cooper Tyre Size & Best Price Singapore | SGCarPass',
    description: 'MINI Cooper F56 3rd Gen (2014+) uses 175/65R15 (base) or 195/55R16 (Cooper S). 5×112 bolt, 56.1mm CB. From $78 installed in Singapore.',
    ogDescription: 'MINI Cooper F56: 175/65R15 (One base), 195/55R16 (Cooper), 205/45R17 (Cooper S), 215/45R17 (JCW). 5×112, 56.1mm CB. From $78.',
    twitterDescription: 'MINI Cooper F56 uses 195/55R16 (Cooper) or 205/45R17 (Cooper S). 5×112. From $78 installed.',
    priceFrom: 78,
    oeSize: '195/55R16',
  },

  defaultGen: 'f56',

  generations: [
    {
      key: 'f56',
      label: 'F56 3rd Gen (2014–2023)',
      years: '2014–2023',
      note: 'F56 is the 3-door hatch. MINI One/Cooper are FWD; JCW is also FWD but with sport tuning. MINI uses lug bolts, not nuts.',
      heroChips: [
        { label: 'One / base OE',    value: '175/65R15' },
        { label: 'Cooper OE',        value: '195/55R16' },
        { label: 'Cooper S OE',      value: '205/45R17' },
        { label: 'From installed',    value: '$78', green: true },
      ],
      variants: [
        { name: 'One (15")', sizes: [
          { tag: 'OE',  size: '175/65R15' },
          { tag: 'Alt', size: '195/55R16', note: '升 16"，Cooper 同款' },
        ]},
        { name: 'Cooper (16")', sizes: [
          { tag: 'OE',  size: '195/55R16' },
          { tag: 'Alt', size: '205/45R17', note: '升 17"，Cooper S 同款' },
        ]},
        { name: 'Cooper S (17")', sizes: [
          { tag: 'OE',  size: '205/45R17' },
          { tag: 'Alt', size: '215/45R17', note: '稍宽运动选项' },
        ]},
        { name: 'JCW (17" or 18")', sizes: [
          { tag: 'OE',  size: '205/45R17' },
          { tag: 'OE',  size: '205/40R18', note: '选配 18"' },
        ]},
      ],
    },
    {
      key: 'f55',
      label: 'F55 3rd Gen 5-door (2014–2023)',
      years: '2014–2023',
      note: '5-door F55 uses the same tyre sizes as the 3-door F56.',
      heroChips: [
        { label: 'Cooper OE',    value: '195/55R16' },
        { label: 'Cooper S OE',  value: '205/45R17' },
        { label: 'From installed', value: '$78', green: true },
      ],
      variants: [
        { name: 'Cooper (16")', sizes: [
          { tag: 'OE',  size: '195/55R16' },
        ]},
        { name: 'Cooper S (17")', sizes: [
          { tag: 'OE',  size: '205/45R17' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2014+ · F56 · JCW · 18"',      width: '7.5J', diameter: '18"', offset: 'ET48', boltPattern: '5×112' },
    { label: '2014+ · F56 · Cooper S · 17"', width: '7.0J', diameter: '17"', offset: 'ET48', boltPattern: '5×112' },
    { label: '2014+ · F56 · Cooper · 16"',   width: '6.5J', diameter: '16"', offset: 'ET48', boltPattern: '5×112' },
    { label: '2014+ · F56 · One · 15"',      width: '5.5J', diameter: '15"', offset: 'ET45', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M14×1.25 bolt',
    torque: '120 Nm',
    notes: 'MINI F56/F55 uses 5×112 bolt pattern — same as BMW and Mercedes (all 5×112), but the centre bore is 56.1mm (smaller than BMW\'s 66.6mm). Do NOT use BMW rims without hub rings, as the larger bore would mean the wheel floats on the bolt rather than the hub. Uses M14×1.25 lug bolts, torque 120 Nm.',
  },

  priceTabs: [
    {
      size: '195/55R16',
      tabLabel: '195/55R16 · Cooper 主力尺码',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 城市小车舒适胎 · MINI Cooper 预算首选',
        price: 88,
        also: 'Also: Nankang Econex NA-1, Bridgestone Ecopia EP300',
        waText: 'MINI Cooper 195%2F55R16 budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · MINI Cooper 城市通勤最受好评',
        price: 138,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'MINI Cooper 195%2F55R16 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '16" 城市小车运动升级 · MINI 个性化驾驶首选',
        price: 168,
        also: 'Also: Continental SportContact 5, Pirelli Cinturato P7',
        waText: 'MINI Cooper 195%2F55R16 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $552–$680 · Premium $672–$800',
    },
    {
      size: '205/45R17',
      tabLabel: '205/45R17 · Cooper S / JCW',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '17" 城市运动胎 · MINI Cooper S 预算首选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'MINI Cooper S 205%2F45R17 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · MINI Cooper S 最受好评换胎',
        price: 168,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'MINI Cooper S 205%2F45R17 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '17" 驾驶乐趣最大化 · JCW / Cooper S 极限首选',
        price: 218,
        also: 'Also: Pirelli P-Zero, Goodyear Eagle F1 Asymmetric 6',
        waText: 'MINI Cooper S 205%2F45R17 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $672–$800 · Premium $872–$1,000',
    },
  ],

  radarSize: '195/55R16',
  radarSource: 'Bridgestone (16 reviews) · Michelin (12 reviews) · Continental (10 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [70, 74, 78, 74, 72, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 86, 88, 80, 80, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [88, 90, 84, 82, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '84', hi: false }, { k: 'Wear', v: '82', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'MINI Cooper F56 Cooper S（205/45R17）— 驾驶乐趣最大化',
      color: 'blue',
      genKey: 'f56',
      body: 'MINI Cooper S 17" 的换胎策略应以操控为优先——Continental SportContact 6（$168/条）干湿地均衡顶级，与 MINI 灵活的底盘配合极佳，整套约 $672。Michelin Pilot Sport 4S（$218/条）是 JCW 车主的首选——干地极限最高，雨天制动明显更安全，新加坡多雨天气下优势明显。<strong>5×112 中心孔 56.1mm 特别注意：</strong>MINI F56 的中心孔比 BMW（66.6mm）小，换装 BMW 轮圈时必须加装中心套环（hub ring），否则上路后轮圈会在螺栓上偏心，造成振动甚至脱轮事故。',
    },
    {
      title: 'MINI Cooper 16"（195/55R16）— 最实用城市日用换胎',
      color: 'red',
      genKey: 'f56',
      body: 'MINI Cooper 16" 是 MINI 大家庭里最实惠的换胎方案，Bridgestone Turanza T005（$138/条）是最受好评的选择，静音度和雨天安全性是同价位最佳，整套约 $552，使用寿命可达 40,000 km+。Hankook Kinergy Eco2（$88/条）是最实惠的预算选择，货源充足，全套仅 $352。MINI 车重约 1,300 kg，对轮胎磨损较为友好，正常驾驶一套轮胎可以维持相当长时间。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the MINI Cooper use in Singapore?',
      a: 'MINI Cooper F56 / F55 (2014+): One base uses 175/65R15; Cooper uses 195/55R16; Cooper S uses 205/45R17; JCW uses 205/45R17 or 205/40R18. All F56/F55 use 5×112 bolt pattern, 56.1mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the MINI Cooper?',
      a: 'MINI Cooper F56/F55 uses 5×112 bolt pattern, 56.1mm centre bore, M14×1.25 lug bolts, torque 120 Nm. Important: although it is 5×112 like BMW, the centre bore is 56.1mm (smaller than BMW\'s 66.6mm) — BMW rims need hub rings to fit properly on a MINI.',
    },
    {
      q: 'How much does it cost to replace MINI Cooper tyres in Singapore?',
      a: 'For 195/55R16 (Cooper): budget from $88/tyre; mid-range $138; premium $168. Full set: $352–$672. For 205/45R17 (Cooper S/JCW): from $98/tyre; premium $218. For 175/65R15 (One base): from $68/tyre.',
    },
    {
      q: 'Can I use BMW rims on a MINI Cooper F56?',
      a: 'Technically 5×112 bolt pattern matches BMW and MINI, but the centre bore is different: MINI is 56.1mm while BMW is 66.6mm. You would need hub rings (bore reducers) to make BMW rims sit properly on a MINI. Without hub rings, the wheel sits on the bolts rather than the hub centre, which can cause vibration and is unsafe. Always use hub rings when cross-fitting rims from BMW to MINI.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 195/55R16',         brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 195/55R16',     brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 195/55R16',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 205/45R17',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 205/45R17',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 205/45R17',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
