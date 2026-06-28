import type { CarData } from './types'

const data: CarData = {
  make: 'Volkswagen',
  model: 'Polo',
  makeSlug: 'volkswagen',
  modelSlug: 'polo',
  bgWord: 'POLO',

  seo: {
    title: 'Volkswagen Polo Tyre Size & Best Price Singapore | SGCarPass',
    description: 'VW Polo AW 6th Gen (2018+) uses 195/65R15 (base) or 205/45R17 (Style). 5×100 bolt, 57.1mm CB. From $78 installed in Singapore.',
    ogDescription: 'VW Polo AW 6th Gen: 195/65R15 (Trendline), 195/55R16 (Comfortline), 205/45R17 (Highline/Style). 5×100, 57.1mm CB. From $78.',
    twitterDescription: 'VW Polo uses 195/65R15 (base) or 205/45R17 (Style). 5×100 bolt. From $78 installed.',
    priceFrom: 78,
    oeSize: '195/55R16',
  },

  defaultGen: 'aw',

  generations: [
    {
      key: 'aw',
      label: 'AW 6th Gen (2018–2026)',
      years: '2018–2026',
      note: 'AW Polo launched in Singapore as Comfortline (16") and Highline (17"). Current Polo Life and Style trims. Shares MQB-A0 platform with VW T-Cross.',
      heroChips: [
        { label: 'Trendline / Life OE',   value: '195/65R15' },
        { label: 'Comfortline OE',        value: '195/55R16' },
        { label: 'Highline / Style OE',   value: '205/45R17' },
        { label: 'From installed',         value: '$78', green: true },
      ],
      variants: [
        { name: 'Life / Trendline (15")', sizes: [
          { tag: 'OE',  size: '195/65R15' },
          { tag: 'Alt', size: '195/55R16', note: '升 16"，Comfortline 同款' },
        ]},
        { name: 'Comfortline (16")', sizes: [
          { tag: 'OE',  size: '195/55R16' },
          { tag: 'Alt', size: '205/55R16', note: '稍宽，接地面积更大' },
        ]},
        { name: 'Highline / Style (17")', sizes: [
          { tag: 'OE',  size: '205/45R17' },
          { tag: 'Alt', size: '215/45R17', note: '稍宽，运动感升级' },
        ]},
      ],
    },
    {
      key: '6c',
      label: '6C 5th Gen (2014–2018)',
      years: '2014–2018',
      heroChips: [
        { label: 'base OE',    value: '185/60R15' },
        { label: 'mid OE',     value: '195/55R16' },
        { label: 'From installed', value: '$68', green: true },
      ],
      variants: [
        { name: '6C base (15")', sizes: [
          { tag: 'OE',  size: '185/60R15' },
          { tag: 'Alt', size: '195/55R16', note: '升 16"' },
        ]},
        { name: '6C Sport / R-Line (16")', sizes: [
          { tag: 'OE',  size: '195/55R16' },
          { tag: 'Alt', size: '205/50R16', note: '稍宽' },
        ]},
        { name: '6C GTI (17")', sizes: [
          { tag: 'OE',  size: '205/45R17' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2018+ · AW · Style / Highline · 17"', width: '7.0J', diameter: '17"', offset: 'ET45', boltPattern: '5×100' },
    { label: '2018+ · AW · Comfortline · 16"',      width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×100' },
    { label: '2018+ · AW · Life · 15"',             width: '6.0J', diameter: '15"', offset: 'ET45', boltPattern: '5×100' },
    { label: '2014–2018 · 6C · 16"',               width: '6.5J', diameter: '16"', offset: 'ET42', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '57.1mm',
    stud: 'M14×1.5 bolt',
    torque: '120 Nm',
    notes: 'VW Polo uses 5×100 bolt pattern — different from most VW Group cars (which use 5×112). 57.1mm centre bore. Same as VW Golf Mk4, older Skoda Octavia, and MG ZS petrol (5×100). Note: VW T-Cross also uses 5×100. M14×1.5 lug bolts, torque 120 Nm.',
  },

  priceTabs: [
    {
      size: '195/55R16',
      tabLabel: '195/55R16 · Comfortline 主力',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 舒适节能胎 · Polo Comfortline 预算首选',
        price: 88,
        also: 'Also: Nankang Econex NA-1, Bridgestone Ecopia EP300',
        waText: 'VW Polo 195%2F55R16 Comfortline budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '16" 静音舒适 · Polo 城市通勤最受欢迎',
        price: 138,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'VW Polo 195%2F55R16 Comfortline mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '16" 城市小车运动升级 · 干湿地提升明显',
        price: 168,
        also: 'Also: Continental SportContact 5, Pirelli Cinturato P7',
        waText: 'VW Polo 195%2F55R16 Comfortline premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $552–$680 · Premium $672–$800',
    },
    {
      size: '205/45R17',
      tabLabel: '205/45R17 · Style / Highline 17"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '17" 城市运动胎 · Polo Highline 预算首选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'VW Polo 205%2F45R17 Style budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · Polo Style 首选换胎',
        price: 168,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'VW Polo 205%2F45R17 Style mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '17" 城市小车顶级 · Polo 驾驶感最大提升',
        price: 218,
        also: 'Also: Pirelli P-Zero, Goodyear Eagle F1 Asymmetric 6',
        waText: 'VW Polo 205%2F45R17 Style premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $672–$800 · Premium $872–$1,000',
    },
  ],

  radarSize: '195/55R16',
  radarSource: 'Bridgestone (18 reviews) · Michelin (14 reviews) · Hankook (12 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [70, 74, 78, 76, 74, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 86, 88, 82, 80, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [88, 90, 86, 82, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: false }, { k: 'Wear', v: '82', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Polo AW Comfortline（195/55R16）— 新加坡最实惠豪华入门换胎',
      color: 'blue',
      genKey: 'aw',
      body: 'VW Polo Comfortline 16" 是新加坡性价比最高的换胎选项之一。Bridgestone Turanza T005（$138/条）在同尺码中静音评分最高，耐磨和湿地制动均优于韩系预算胎，整套约 $552——对一辆 $100k+ 的 Polo 来说非常划算。Hankook Kinergy Eco2（$88/条）是最受预算车主欢迎的选择，货源充足，全套约 $352。<strong>5×100 提醒：</strong>Polo 使用 5×100，与 Golf / Passat / Tiguan（5×112）不同，轮圈不能互换。',
    },
    {
      title: 'Polo Style 17"（205/45R17）— 城市运动款注意扁平比',
      color: 'red',
      genKey: 'aw',
      body: 'Polo Style 17" 配 205/45R17，扁平比 45 在新加坡减速带和弹弓路有一定风险，建议降低速度避开大坑。Continental SportContact 6（$168/条）是该尺码操控最佳，干湿地均衡，整套约 $672。如觉得 17" 侧壁太薄，可考虑降为 16"（195/55R16）——换轮圈 + 舒适胎，过减速带明显更舒适，整体费用差不多甚至更低。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Volkswagen Polo use in Singapore?',
      a: 'VW Polo AW 6th Gen (2018+): Life/Trendline uses 195/65R15; Comfortline uses 195/55R16; Highline/Style uses 205/45R17. 5th Gen 6C (2014–2018): base uses 185/60R15; mid uses 195/55R16; GTI uses 205/45R17. All use 5×100 bolt pattern, 57.1mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Volkswagen Polo?',
      a: 'VW Polo (5th and 6th Gen) uses 5×100 bolt pattern, 57.1mm centre bore, M14×1.5 lug bolts, torque 120 Nm. This is different from VW Golf / Passat / Tiguan (5×112). Same as VW T-Cross and MG ZS petrol.',
    },
    {
      q: 'How much does it cost to replace VW Polo tyres in Singapore?',
      a: 'For 195/55R16 (Comfortline): budget from $88/tyre; mid-range $138; premium $168. Full set: $352–$672. For 205/45R17 (Style/Highline): from $98/tyre; premium $218. VW Polo is one of the most affordable cars to maintain tyres for in Singapore.',
    },
    {
      q: 'Can I use VW Golf rims on a VW Polo?',
      a: 'No — VW Golf (Mk5 onwards) uses 5×112 bolt pattern while VW Polo uses 5×100. These are different and rims cannot be swapped directly. Only older Golf Mk4 (also 5×100) rims are compatible with Polo, subject to offset matching. Always verify before attempting any rim swap.',
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
