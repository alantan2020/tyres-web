import type { CarData } from './types'

const data: CarData = {
  make: 'BMW',
  model: 'X1',
  makeSlug: 'bmw',
  modelSlug: 'x1',
  bgWord: 'X1',

  seo: {
    title: 'BMW X1 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'BMW X1 U11 (2022+) and F48 (2015–2022) both use 225/50R18 (standard). M Sport may use 225/45R19. 5×112 bolt pattern. Best-selling BMW in Singapore. From $108 installed.',
    ogDescription: 'BMW X1 U11/F48 tyre size: 225/50R18 standard, 225/45R19 M Sport. 5×112, 66.6mm CB, M14×1.25 bolt. From $108 installed in Singapore.',
    twitterDescription: 'BMW X1 uses 225/50R18 (standard) or 225/45R19 (M Sport). 5×112 bolt. From $108 installed in Singapore.',
    priceFrom: 108,
    oeSize: '225/50R18',
  },

  defaultGen: 'u11',

  generations: [
    {
      key: 'u11',
      label: 'U11 3rd Gen (2022–2026)',
      years: '2022–2026',
      note: 'U11 is FWD-based (front-wheel drive dominant), unlike the F48 which was RWD-platform based. Run-flat tyres as OE standard.',
      heroChips: [
        { label: 'sDrive18i / xDrive23i', value: '225/50R18' },
        { label: 'M Sport 19"',           value: '225/45R19' },
        { label: 'From installed',         value: '$108', green: true },
      ],
      variants: [
        { name: 'sDrive18i / xDrive23i standard (18")', sizes: [
          { tag: 'OE',  size: '225/50R18' },
          { tag: 'Alt', size: '235/45R18', note: '宽 10mm，同外径' },
        ]},
        { name: 'xDrive23i M Sport (19")', sizes: [
          { tag: 'OE',  size: '225/45R19' },
          { tag: 'Alt', size: '235/40R19', note: '宽 10mm 升级，运动感更强' },
        ]},
      ],
    },
    {
      key: 'f48',
      label: 'F48 2nd Gen (2015–2022)',
      years: '2015–2022',
      note: 'F48 is RWD-platform (UKL2) with optional xDrive AWD. Most SG units are xDrive.',
      heroChips: [
        { label: 'sDrive18i / xDrive20i', value: '225/50R18' },
        { label: 'M Sport',               value: '225/45R19' },
        { label: 'From installed',         value: '$108', green: true },
      ],
      variants: [
        { name: 'sDrive18i / xDrive20i standard (18")', sizes: [
          { tag: 'OE',  size: '225/50R18' },
          { tag: 'Alt', size: '235/45R18', note: '宽 10mm，高度相近' },
        ]},
        { name: 'M Sport (19")', sizes: [
          { tag: 'OE',  size: '225/45R19' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · U11 · M Sport · 19"',       width: '7.5J', diameter: '19"', offset: 'ET34', boltPattern: '5×112' },
    { label: '2022–2026 · U11 · standard · 18"',       width: '7.0J', diameter: '18"', offset: 'ET34', boltPattern: '5×112' },
    { label: '2015–2022 · F48 · M Sport · 19"',        width: '7.5J', diameter: '19"', offset: 'ET34', boltPattern: '5×112' },
    { label: '2015–2022 · F48 · standard · 18"',        width: '7.0J', diameter: '18"', offset: 'ET34', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.25 bolt',
    torque: '120 Nm',
    warning: 'BMW uses BOLTS (not lug nuts) with M14×1.25 thread. Do not use Japanese-spec M12 lug nuts. ⚠️ U11 X1 is FWD-based — very different driving dynamics from F48. Tyre choice should reflect this: comfort touring tyres are appropriate for most X1 use cases.',
  },

  priceTabs: [
    {
      size: '225/50R18',
      tabLabel: '225/50R18 · X1 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 性能舒适胎 · BMW X1 入门实惠选择',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang SP-9',
        waText: 'BMW X1 225%2F50R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 6',
        desc: '静音舒适 + 湿地 A 级 · X1 日常通勤 + 偶尔郊外首选',
        price: 188,
        also: 'Also: Bridgestone Turanza T005, Michelin Primacy 4+',
        waText: 'BMW X1 225%2F50R18 mid-range tyre quote (Continental PremiumContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: 'SUV 兼顾运动 + 舒适 · X1 M Sport 最受好评',
        price: 238,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'BMW X1 225%2F50R18 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $952–$1,100',
    },
    {
      size: '225/45R19',
      tabLabel: '225/45R19 · M Sport 19"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" 性能胎 · X1 M Sport 预算首选',
        price: 128,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'BMW X1 M Sport 225%2F45R19 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" 最优均衡 · 操控 + 湿地安全 + 静音兼顾',
        price: 228,
        also: 'Also: Bridgestone Potenza Sport, Dunlop Sport Maxx RT2',
        waText: 'BMW X1 M Sport 225%2F45R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'X1 M Sport 最佳配胎 · 干湿地全面领先',
        price: 298,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'BMW X1 M Sport 225%2F45R19 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $512–$620 · Mid-range $912–$1,060 · Premium $1,192–$1,400',
    },
  ],

  radarSize: '225/50R18',
  radarSource: 'Hankook (11 reviews) · Continental (18 reviews) · Michelin (16 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 76, 74, 68, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [84, 88, 86, 80, 86, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nPremiumContact 6',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [86, 90, 84, 82, 86, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'X1 标准版（225/50R18，最多见）',
      color: 'blue',
      genKey: 'u11',
      body: 'X1 是新加坡最畅销的 BMW 车型，标准版原配 <strong>225/50R18</strong>，扁平比 50 侧壁较高，乘坐舒适度比 M Sport 的 45 系列更好。Continental PremiumContact 6（$188/条）在静音、湿地安全和日常舒适方面取得最佳平衡，整套约 $752，是新加坡 X1 车主好评最多的选择。若需要更强的运动感，可升 Michelin Pilot Sport 4（$238/条），但 NVH 比 PCC6 稍高。',
    },
    {
      title: 'U11 vs F48 驾驶感差异',
      color: 'blue',
      genKey: 'u11',
      body: '新款 U11 X1 基于前驱（FWD）平台，与旧款 F48 的后驱（RWD）平台截然不同。U11 驾驶感更接近 Mini Countryman，方向盘轻盈，适合城市通勤。胎型选择上，U11 更适合舒适型（Primacy、PremiumContact 系列），而 F48 xDrive 版本的 RWD 特性更能发挥运动胎（SportContact、PS4S）的优势。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the BMW X1 use in Singapore?',
      a: 'BMW X1 U11 3rd gen (2022+) and F48 2nd gen (2015–2022): standard trims use 225/50R18; M Sport trims use 225/45R19. Check the door jamb sticker to confirm your trim and size.',
    },
    {
      q: 'What is the bolt pattern of the BMW X1?',
      a: 'BMW X1 (U11 and F48) uses 5×112 bolt pattern with 66.6mm centre bore. Lug bolt thread is M14×1.25, torque 120 Nm. BMW uses bolts, not nuts — do not use Japanese-spec M12 lug nuts.',
    },
    {
      q: 'Is the BMW X1 U11 front-wheel drive or AWD?',
      a: 'The X1 U11 is available in sDrive (FWD only) and xDrive (AWD) variants. The U11 is based on a front-wheel-drive platform (unlike the RWD-based F48). For xDrive U11 owners, the AWD system is electronically controlled and less strict about tyre matching than traditional mechanical AWD — but replacing all 4 at once is still recommended for best performance.',
    },
    {
      q: 'How much does it cost to replace BMW X1 tyres in Singapore?',
      a: 'For 225/50R18 (standard, most common): budget from $108 per tyre installed; mid-range $188–$210; premium $238–$270. Full set of 4: approximately $432–$1,100. For M Sport 225/45R19: budget from $128; mid $228–$255; premium $298–$340.',
    },
    {
      q: 'Do BMW X1 tyres need to be run-flat?',
      a: 'The X1 comes with run-flat tyres (RFT) as standard from factory (no spare tyre bay). If you switch to regular tyres, you need to carry a tyre inflation/sealant kit. Many X1 owners switch to non-RFT for better comfort and lower cost — just ensure you have an inflation kit in the car.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/50R18',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental PremiumContact 6 225/50R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 225/50R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/45R19',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 225/45R19',    brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 225/45R19',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '298', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
