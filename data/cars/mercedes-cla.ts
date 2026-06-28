import type { CarData } from './types'

const data: CarData = {
  make: 'Mercedes',
  model: 'CLA',
  makeSlug: 'mercedes',
  modelSlug: 'cla',
  bgWord: 'CLA',

  seo: {
    title: 'Mercedes-Benz CLA Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mercedes-Benz CLA C118 (2019+) uses 205/55R17 (CLA 200) or 225/45R18 (CLA 250/AMG Line). C117 (2013–2019) uses 205/55R16 or 225/45R17. 5×112, 66.6mm, M14×1.25. From $88 installed.',
    ogDescription: 'Mercedes CLA C118: 205/55R17 (CLA 200), 225/45R18 (CLA 250/AMG). C117: 205/55R16 or 225/45R17. 5×112. From $88.',
    twitterDescription: 'Mercedes CLA uses 205/55R17 (200) or 225/45R18 (250/AMG). 5×112 bolt. From $88.',
    priceFrom: 88,
    oeSize: '225/45R18',
  },

  defaultGen: 'c118',

  generations: [
    {
      key: 'c118',
      label: 'C118 2nd Gen (2019–2026)',
      years: '2019–2026',
      note: 'Current Mercedes CLA. CLA 200/200d uses 205/55R17 (17"); CLA 250/250e/45 AMG Line uses 225/45R18 (18"). Very popular entry luxury car in Singapore. ⚠️ M14×1.25 bolts (NOT 1.5 pitch).',
      heroChips: [
        { label: 'CLA 200 OE',          value: '205/55R17' },
        { label: 'CLA 250 / AMG Line OE', value: '225/45R18' },
        { label: 'From installed',       value: '$88', green: true },
      ],
      variants: [
        { name: 'CLA 200 / 200d (17")', sizes: [
          { tag: 'OE',  size: '205/55R17' },
          { tag: 'Alt', size: '215/50R17', note: '稍宽，保持 17" 外径' },
        ]},
        { name: 'CLA 250 / 250e / AMG Line (18")', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '稍宽，运动感更强' },
        ]},
      ],
    },
    {
      key: 'c117',
      label: 'C117 1st Gen (2013–2019)',
      years: '2013–2019',
      note: 'Previous CLA C117. CLA 180/200 uses 205/55R16 (16"); CLA 250 and AMG uses 225/45R17 (17"). Same 5×112 bolt pattern.',
      heroChips: [
        { label: 'C117 CLA 200 OE',     value: '205/55R16' },
        { label: 'C117 CLA 250 OE',     value: '225/45R17' },
        { label: 'From installed',       value: '$88', green: true },
      ],
      variants: [
        { name: 'C117 CLA 200 (16")', sizes: [{ tag: 'OE', size: '205/55R16' }] },
        { name: 'C117 CLA 250 (17")', sizes: [{ tag: 'OE', size: '225/45R17' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'C118 2019+ · CLA 200 · 17"',        width: '7.0J', diameter: '17"', offset: 'ET52', boltPattern: '5×112' },
    { label: 'C118 2019+ · CLA 250/AMG · 18"',    width: '7.5J', diameter: '18"', offset: 'ET52', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.25 bolt',
    torque: '130 Nm',
    notes: '⚠️ Mercedes CLA uses M14×1.25 wheel bolts — FINER thread than VW Group M14×1.5. Never cross-fit different thread pitches. 5×112 bolt pattern, 66.6mm centre bore, torque 130 Nm. Aftermarket CLA wheels compatible with other Mercedes C/A Class models of matching offset.',
  },

  priceTabs: [
    {
      size: '225/45R18',
      tabLabel: '225/45R18 · CLA 250 / AMG Line 18"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" 运动节能胎 · CLA 250 预算首选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Mercedes CLA 250 225%2F45R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 7',
        desc: '18" 干湿均衡旗舰 · CLA 梅赛德斯 OE 合作品牌',
        price: 228,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza 6',
        waText: 'Mercedes CLA 250 225%2F45R18 mid-range tyre quote (Continental PremiumContact 7 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '18" 运动旗舰 · CLA AMG Line 驾感升级',
        price: 288,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Mercedes CLA AMG 225%2F45R18 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $472–$600 · Mid-range $912–$1,080 · Premium $1,152–$1,400',
    },
    {
      size: '205/55R17',
      tabLabel: '205/55R17 · CLA 200 / 200d 17"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 节能城市胎 · CLA 200 预算选',
        price: 88,
        also: 'Also: Kumho Ecowing ES31, Nexen N\'Blue HD Plus',
        waText: 'Mercedes CLA 200 205%2F55R17 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '17" 干湿均衡 · CLA 200 驾感首选',
        price: 178,
        also: 'Also: Michelin Primacy 4, Bridgestone Turanza T005',
        waText: 'Mercedes CLA 200 205%2F55R17 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '17" 静音旗舰 · CLA 200 最佳舒适升级',
        price: 228,
        also: 'Also: Continental PremiumContact 7, Bridgestone Turanza 6',
        waText: 'Mercedes CLA 200 205%2F55R17 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $712–$880 · Premium $912–$1,080',
    },
  ],

  radarSize: '225/45R18',
  radarSource: 'Continental (14 reviews) · Michelin (11 reviews) · Hankook (10 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [72, 74, 76, 72, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus Prime4',
      stats: [{ k: 'Wet', v: '72', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '76', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ OEM Partner', labelClass: 'tier tier--mid', score: '8.9',
      scores: [90, 90, 88, 80, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 7',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '9.0',
      scores: [90, 92, 82, 84, 86, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 5',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Grip', v: '86', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'CLA 250（225/45R18）— ⚠️ M14×1.25 细牙螺丝，需注意换轮圈规格',
      color: 'red',
      genKey: 'c118',
      body: '⚠️ Mercedes CLA 使用 <strong>M14×1.25 细牙螺丝</strong>，与 VW/Skoda 的 M14×1.5 不同。换装轮圈时务必使用梅赛德斯原厂或指定 M14×1.25 螺丝。轮胎方面，<strong>Continental PremiumContact 7（$228/条）</strong>是 CLA 250 AMG Line 在新加坡最受好评的换胎——Continental 是梅赛德斯主力 OE 供应商，干湿均衡性能顶级，整套约 $912。CLA 200（205/55R17）换胎预算相对低，Continental PremiumContact 6（$178/条）整套约 $712，性价比最佳。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mercedes CLA use in Singapore?',
      a: 'Mercedes CLA C118 (2019+): CLA 200/200d uses 205/55R17; CLA 250/250e and AMG Line use 225/45R18. C117 (2013–2019): CLA 200 uses 205/55R16; CLA 250 uses 225/45R17. 5×112 bolt pattern, 66.6mm centre bore.',
    },
    {
      q: 'What bolt pitch does the Mercedes CLA use?',
      a: 'Mercedes CLA uses M14×1.25 wheel bolts — finer thread than VW Group M14×1.5. These are NOT interchangeable. Always use correct Mercedes-spec bolts when fitting aftermarket wheels. Torque 130 Nm.',
    },
    {
      q: 'How much does it cost to replace Mercedes CLA tyres in Singapore?',
      a: 'For CLA 250 225/45R18: budget from $118/tyre; mid-range (Continental PremiumContact 7) $228; premium $288. Full set $472–$1,152. For CLA 200 205/55R17: from $88 budget; mid $178; premium $228.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus Prime4 225/45R18',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 7 225/45R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 5 225/45R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '288', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
