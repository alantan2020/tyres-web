import type { CarData } from './types'

const data: CarData = {
  make: 'BMW',
  model: '5 Series',
  makeSlug: 'bmw',
  modelSlug: '5-series',
  bgWord: 'BMW5',

  seo: {
    title: 'BMW 5 Series Tyre Size & Best Price Singapore | SGCarPass',
    description: 'BMW 5 Series G30 (2017–2023) uses 245/45R18 (standard) or 245/40R19 (M Sport). G60 (2024+) uses 245/45R18. 5×112 bolt, run-flat OE. From $118 installed in Singapore.',
    ogDescription: 'BMW 5 Series tyre sizes: G30/G60 245/45R18 standard; 245/40R19 M Sport. 5×112, 66.6mm CB, M14×1.25 bolt. From $118 installed in Singapore.',
    twitterDescription: 'BMW 5 Series G30 uses 245/45R18 (standard) or 245/40R19 (M Sport). 5×112 bolt. From $118 installed in Singapore.',
    priceFrom: 118,
    oeSize: '245/45R18',
  },

  defaultGen: 'g30',

  generations: [
    {
      key: 'g30',
      label: 'G30 / G31 6th Gen (2017–2023)',
      years: '2017–2023',
      note: 'G30 comes with run-flat tyres as OE. M Sport may have staggered fitment — confirm front/rear sizes before ordering.',
      heroChips: [
        { label: '520i / 530i standard', value: '245/45R18' },
        { label: '540i / M Sport 19"',  value: '245/40R19' },
        { label: 'From installed',       value: '$118', green: true },
      ],
      variants: [
        { name: '520i / 530i Sport Line / Luxury Line (18")', sizes: [
          { tag: 'OE',  size: '245/45R18' },
          { tag: 'Alt', size: '255/40R18', note: '宽 10mm，同外径升级' },
        ]},
        { name: '540i / M Sport front (staggered 19")', sizes: [
          { tag: 'OE',  size: '245/40R19' },
        ]},
        { name: '540i / M Sport rear (staggered 19")', sizes: [
          { tag: 'OE',  size: '275/35R19' },
          { tag: 'Alt', size: '265/35R19', note: '货源更多，略窄' },
        ]},
      ],
    },
    {
      key: 'g60',
      label: 'G60 7th Gen (2024–2026)',
      years: '2024–2026',
      heroChips: [
        { label: '520i / 530i standard', value: '245/45R18' },
        { label: 'M Sport / 540i',       value: '245/40R19' },
        { label: 'From installed',        value: '$118', green: true },
      ],
      variants: [
        { name: '520i / 530i standard (18")', sizes: [
          { tag: 'OE',  size: '245/45R18' },
        ]},
        { name: 'M Sport / 540i (19")', sizes: [
          { tag: 'OE',  size: '245/40R19' },
          { tag: 'Alt', size: '255/35R19', note: '后轴可选升级' },
        ]},
      ],
    },
    {
      key: 'f10',
      label: 'F10 5th Gen (2010–2017)',
      years: '2010–2017',
      heroChips: [
        { label: '520i / 528i standard', value: '245/45R18' },
        { label: 'M Sport / 535i',       value: '245/40R19' },
        { label: 'From installed',        value: '$118', green: true },
      ],
      variants: [
        { name: '520i / 528i (18")', sizes: [
          { tag: 'OE',  size: '245/45R18' },
          { tag: 'Alt', size: '255/40R18', note: '宽 10mm 运动升级' },
        ]},
        { name: 'M Sport / 535i front (19")', sizes: [
          { tag: 'OE',  size: '245/40R19' },
        ]},
        { name: 'M Sport / 535i rear (19")', sizes: [
          { tag: 'OE',  size: '275/35R19' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2017–2026 · G30/G60 · M Sport · rear 19"',  width: '9.5J', diameter: '19"', offset: 'ET22', boltPattern: '5×112' },
    { label: '2017–2026 · G30/G60 · M Sport · front 19"', width: '8.0J', diameter: '19"', offset: 'ET25', boltPattern: '5×112' },
    { label: '2017–2026 · G30/G60 · standard · 18"',      width: '8.0J', diameter: '18"', offset: 'ET30', boltPattern: '5×112' },
    { label: '2010–2017 · F10 · M Sport · 19"',            width: '8.5J', diameter: '19"', offset: 'ET25', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.25 bolt',
    torque: '120 Nm',
    warning: 'BMW uses BOLTS (not nuts) — M14×1.25 thread. Do not use M12 Japanese-spec nuts. ⚠️ Staggered 5 Series (M Sport): front and rear tyres are DIFFERENT sizes. Never rotate front to rear. 5×112 is shared with Mercedes-Benz but offset values differ — verify before swapping cross-brand rims.',
  },

  priceTabs: [
    {
      size: '245/45R18',
      tabLabel: '245/45R18 · 520i / 530i 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 舒适性能胎 · 5系 日常通勤实惠选择',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'BMW 5 Series 245%2F45R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地极佳 · 静音舒适 · 旗舰轿车最均衡首选',
        price: 208,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'BMW 5 Series 245%2F45R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'BMW 5系 OE 认证品牌 · 旗舰豪华轿车最值得投资的胎',
        price: 278,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'BMW 5 Series 245%2F45R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $472–$570 · Mid-range $832–$960 · Premium $1,112–$1,300',
    },
    {
      size: '245/40R19',
      tabLabel: '245/40R19 · M Sport / 540i 前轴',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" UHP 胎 · 5系 M Sport 前轴预算选择',
        price: 148,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'BMW 5 Series M Sport 245%2F40R19 front budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" 顶级表现 · 干地操控 + 湿地安全兼顾',
        price: 248,
        also: 'Also: Bridgestone Potenza Sport, Dunlop Sport Maxx RT2',
        waText: 'BMW 5 Series M Sport 245%2F40R19 front mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '5系旗舰配置 · 19" 最顶级选择',
        price: 318,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'BMW 5 Series M Sport 245%2F40R19 front premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: '仅前 2 条：Budget $296–$360 · Mid-range $496–$580 · Premium $636–$750',
    },
  ],

  radarSize: '245/45R18',
  radarSource: 'Hankook (12 reviews) · Continental (20 reviews) · Michelin (18 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.4',
      scores: [70, 78, 74, 70, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '78', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 92, 84, 80, 86, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 82, 88, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: '520i / 530i 标准版（245/45R18，非 staggered）',
      color: 'blue',
      genKey: 'g30',
      body: 'G30 5系标准版和 Sport Line 原配 <strong>245/45R18</strong>，是 18" 旗舰轿车胎中最常见尺码。Continental SportContact 6（$208/条）是新加坡 5系车主好评最高的选择——干地操控极出色，湿地 A 级，NVH 静音适合旗舰轿车定位，整套约 $832。若追求最佳综合表现，Michelin Pilot Sport 4S（$278/条）是宝马原厂 OE 供应商品牌，整套约 $1,112，但里程寿命通常不如 SportContact 6。',
    },
    {
      title: '540i / M Sport 车主（staggered 19"，须前后区分）',
      color: 'red',
      genKey: 'g30',
      body: 'G30 M Sport 配 <strong>staggered</strong> 装配，前 245/40R19、后 275/35R19，前后宽度差 30mm。<strong>严禁前后互换</strong>，否则会导致操控特性改变和轮拱干涉。请先确认是前轮还是后轮需要更换再下单。通常前后成对更换可获更好报价，4条全换整套 Continental SportContact 6 约 $1,800-2,000，Michelin PS4S 约 $2,400-2,800。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the BMW 5 Series use in Singapore?',
      a: 'BMW 5 Series G30/G60 (2017+): 520i and 530i standard use 245/45R18 (all round). 540i and M Sport trims use staggered 245/40R19 (front) + 275/35R19 (rear). F10 (2010–2017): similar sizes. Check your trim level and confirm front/rear sizes before ordering.',
    },
    {
      q: 'Does the BMW 5 Series use run-flat tyres in Singapore?',
      a: 'Yes, the G30 and G60 5 Series come with run-flat tyres (RFT) as standard from the factory. The F10 may or may not have RFT depending on the trim. Check the tyre sidewall for markings like "RSC", "ROF", or "RFT". Switching from RFT to regular tyres means you lose run-flat capability and must carry an inflation kit.',
    },
    {
      q: 'What is the bolt pattern of the BMW 5 Series?',
      a: 'All BMW 5 Series (F10, G30, G60) use 5×112 bolt pattern with 66.6mm centre bore. BMW uses lug BOLTS (not nuts) with M14×1.25 thread, torque 120 Nm. The 5×112 pattern is shared with Mercedes-Benz, but BMW lug bolts are not the same as Mercedes lug bolts.',
    },
    {
      q: 'How much does it cost to replace BMW 5 Series tyres in Singapore?',
      a: 'For 245/45R18 (most common): budget from $118 per tyre installed; mid-range $208–$235; premium $278–$320. Full set of 4 mid-range: approximately $832–$960. For M Sport staggered 19": budget for 4 total approximately $800–$1,200; premium approximately $2,000–$2,800. BMW 5 Series owners generally opt for mid to premium brands to match the vehicle\'s character.',
    },
    {
      q: 'Can I rotate tyres on a staggered BMW 5 Series?',
      a: 'No. If your 5 Series has staggered fitment (wider rear tyres than front), you CANNOT rotate tyres between front and rear axles because the sizes are different. If the front and rear tyres are the same size (square fitment, common on standard 520i/530i), you can rotate in a straight-swap pattern (front to rear, rear to front — do not cross sides on RWD vehicles).',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/45R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 245/45R18',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/45R18',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '278', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/40R19',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 245/40R19',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/40R19',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '318', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
