import type { CarData } from './types'

const data: CarData = {
  make: 'Tesla',
  model: 'Model Y',
  makeSlug: 'tesla',
  modelSlug: 'model-y',
  bgWord: 'MODELY',

  seo: {
    title: 'Tesla Model Y Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Tesla Model Y RWD / Long Range uses 255/45R19; Performance uses 255/40R20 (staggered). 5×114.3 bolt. From $118 installed in Singapore.',
    ogDescription: 'Tesla Model Y tyre sizes: RWD/LR 255/45R19; Performance staggered 255/35R21 front + 275/35R21 rear. 5×114.3, 64.1mm CB. From $118 installed.',
    twitterDescription: 'Tesla Model Y RWD/LR uses 255/45R19; Performance 255/35R21 + 275/35R21. From $118 installed.',
    priceFrom: 118,
    oeSize: '255/45R19',
  },

  defaultGen: 'juniper',

  generations: [
    {
      key: 'juniper',
      label: 'Juniper Facelift (2024–2026)',
      years: '2024–2026',
      note: 'Juniper refresh updated interior and exterior. Tyre sizes remain the same as Gen 1 for RWD and Long Range. Performance has staggered 21" fitment.',
      heroChips: [
        { label: 'RWD / LR OE',    value: '255/45R19' },
        { label: 'Performance OE', value: '255/35R21 + 275/35R21' },
        { label: 'From installed',  value: '$118', green: true },
      ],
      variants: [
        { name: 'RWD (standard / long range)', sizes: [
          { tag: 'OE',  size: '255/45R19' },
          { tag: 'Alt', size: '255/40R20', note: '升 20"，操控提升' },
        ]},
        { name: 'Performance (front, staggered 21")', sizes: [
          { tag: 'OE',  size: '255/35R21' },
        ]},
        { name: 'Performance (rear, staggered 21")', sizes: [
          { tag: 'OE',  size: '275/35R21' },
        ]},
      ],
    },
    {
      key: 'gen1',
      label: '1st Gen (2021–2024)',
      years: '2021–2024',
      heroChips: [
        { label: 'RWD / LR OE',    value: '255/45R19' },
        { label: 'Performance OE', value: '255/40R20' },
        { label: 'From installed',  value: '$118', green: true },
      ],
      variants: [
        { name: 'RWD / Long Range AWD', sizes: [
          { tag: 'OE',  size: '255/45R19' },
        ]},
        { name: 'Performance AWD', sizes: [
          { tag: 'OE',  size: '255/40R20' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2024+ · Juniper · Performance · 21"',  width: '9.0J', diameter: '21"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2021+ · Gen1 · Performance · 20"',     width: '9.0J', diameter: '20"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2021+ · RWD / LR · 19"',               width: '8.5J', diameter: '19"', offset: 'ET40', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M14×1.5 lug nut',
    torque: '175 Nm',
    warning: 'Tesla Model Y uses M14×1.5 lug nuts — same as Model 3. Torque 175 Nm; use a torque wrench, not an impact gun, to avoid damaging aluminium hubs. ⚠️ Performance 21" staggered: front 255/35R21 ≠ rear 275/35R21 — cannot rotate between axles.',
  },

  priceTabs: [
    {
      size: '255/45R19',
      tabLabel: '255/45R19 · RWD / LR 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" EV 友好 · Model Y RWD / LR 预算首选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'Tesla Model Y 255%2F45R19 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '低滚阻 + 静音 · EV SUV 综合最佳 · 湿地 A 级',
        price: 208,
        also: 'Also: Continental SportContact 6 SUV, Bridgestone Turanza T005',
        waText: 'Tesla Model Y 255%2F45R19 mid-range tyre quote (Michelin PS4 SUV or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: 'EV 专用 · 低滚阻续航延伸 · 大尺码 SUV EV 顶级选择',
        price: 268,
        also: 'Also: Goodyear Eagle F1 Asymmetric 6 SUV, Pirelli P-Zero PZ4',
        waText: 'Tesla Model Y 255%2F45R19 premium tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $832–$960 · Premium $1,072–$1,200',
    },
    {
      size: '255/40R20',
      tabLabel: '255/40R20 · Performance 尺码',
      budget: {
        name: 'Kumho Ecsta PS91',
        desc: '20" 运动胎 · Performance 车主预算选择',
        price: 138,
        also: 'Also: Nankang Sportnex NS-25, Maxxis Victra Sport 5',
        waText: 'Tesla Model Y 255%2F40R20 Performance budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '20" 综合最强 · 干湿地均衡 · Performance 最受好评',
        price: 238,
        also: 'Also: Michelin Pilot Sport 4S, Bridgestone Potenza Sport',
        waText: 'Tesla Model Y 255%2F40R20 Performance mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '极限操控 · 干地顶级 · Performance 原配级别',
        price: 308,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Tesla Model Y 255%2F40R20 Performance premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $552–$640 · Mid-range $952–$1,100 · Premium $1,232–$1,400',
    },
  ],

  radarSize: '255/45R19',
  radarSource: 'Michelin (24 reviews) · Continental (17 reviews) · Hankook (12 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [68, 74, 70, 76, 70, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '70', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [84, 86, 86, 82, 84, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPS4 SUV',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [88, 86, 88, 84, 90, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport EV',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'EV Range', v: '90', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'RWD / Long Range — 续航与舒适优先（255/45R19）',
      color: 'blue',
      genKey: 'juniper',
      body: 'Model Y 原配 <strong>255/45R19</strong>，是 EV SUV 中偏舒适取向的尺码。Michelin Pilot Sport 4 SUV（$208/条）是最受 SG Model Y 车主好评的选择——湿地 A 级制动，静音性能比多数运动胎好 10–15%，低滚阻对续航影响最小，整套约 $832。追求最长续航选 Michelin Pilot Sport EV（$268/条），专为重型 EV 设计，滚动阻力测试成绩领先。<strong>EV 换胎周期提醒：</strong>Model Y 整备重约 2,000 kg，胎磨速率比同级别 SUV 快约 30%，建议每年检查一次胎纹。',
    },
    {
      title: 'Performance — 21" Staggered 换胎注意（前后尺码不同）',
      color: 'red',
      genKey: 'juniper',
      body: 'Performance 版（Juniper）前轮 <strong>255/35R21</strong>，后轮 <strong>275/35R21</strong>，宽窄不同，<strong>不能前后互换</strong>。请务必分开订购前后数量（各 2 条），并在安装前确认每条轮胎放置的位置。Continental SportContact 6 或 Michelin Pilot Sport 4S 是 Performance 车主首选。极薄扁平比（35）在过减速带或坑洞时更脆弱，新加坡雨季要特别注意路况。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Tesla Model Y use in Singapore?',
      a: 'Tesla Model Y: RWD and Long Range AWD use 255/45R19. Performance 1st Gen uses 255/40R20. Juniper Performance (2024+) uses staggered 255/35R21 front + 275/35R21 rear. All versions use 5×114.3 bolt pattern, 64.1mm centre bore.',
    },
    {
      q: 'Which tyre is best for Tesla Model Y in Singapore?',
      a: 'For RWD/LR 255/45R19: Michelin Pilot Sport 4 SUV ($208/tyre) is the most popular — low rolling resistance, quiet, excellent wet grip. For maximum range: Michelin Pilot Sport EV ($268/tyre). Budget pick: Hankook Ventus S1 Evo3 ($118/tyre). For Performance 20": Continental SportContact 6 is the top choice.',
    },
    {
      q: 'How long do Tesla Model Y tyres last in Singapore?',
      a: 'Expect 25,000–40,000 km depending on driving style and variant. RWD rear tyres wear fastest due to motor torque. AWD is more even. Aggressive driving (common with Performance) can wear tyres in 20,000 km. Check tread depth every 8,000–10,000 km — minimum legal depth in Singapore is 1.6mm, but replace at 3mm for safe wet-weather braking.',
    },
    {
      q: 'Can I use regular tyres on a Tesla Model Y instead of EV tyres?',
      a: 'Yes — regular high-performance tyres (Michelin Pilot Sport 4, Continental SportContact 6) work well on Model Y. EV-specific tyres (Michelin Pilot Sport EV) offer lower rolling resistance which can extend range by 2–5%. The trade-off is slightly less sporty feel. Most SG owners choose PS4 or CSC6 for better all-round performance.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 255/45R19',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 255/45R19',  brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport EV 255/45R19',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta PS91 255/40R20',            brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 255/40R20', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 255/40R20',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '308', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
