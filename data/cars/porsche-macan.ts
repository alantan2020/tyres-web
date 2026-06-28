import type { CarData } from './types'

const data: CarData = {
  make: 'Porsche',
  model: 'Macan',
  makeSlug: 'porsche',
  modelSlug: 'macan',
  bgWord: 'MACAN',

  seo: {
    title: 'Porsche Macan Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Porsche Macan 95B (2014–2024) uses 235/55R19 (base) or 265/45R20 (S/GTS). Macan EV (2024+) uses 235/55R20. 5×112 bolt. From $138 installed.',
    ogDescription: 'Porsche Macan 95B: 235/55R19 (base), 265/45R20 (GTS, staggered). Macan EV (J1): 235/55R20. 5×112, 66.5mm CB. From $138 installed.',
    twitterDescription: 'Porsche Macan uses 235/55R19 (base) or 265/45R20 (GTS). Macan EV uses 235/55R20. 5×112. From $138 installed.',
    priceFrom: 138,
    oeSize: '235/55R19',
  },

  defaultGen: 'macan_ev',

  generations: [
    {
      key: 'macan_ev',
      label: 'Macan EV J1 (2024–2026)',
      years: '2024–2026',
      note: 'Macan EV is built on the PPE platform (different from 95B). Same 5×112 bolt pattern as 95B.',
      heroChips: [
        { label: 'Macan EV OE',    value: '235/55R20' },
        { label: 'Macan EV S OE',  value: '265/40R21' },
        { label: 'From installed',  value: '$148', green: true },
      ],
      variants: [
        { name: 'Macan EV (20")', sizes: [
          { tag: 'OE',  size: '235/55R20' },
          { tag: 'Alt', size: '265/40R21', note: '升 21"，Macan EV S 尺码' },
        ]},
        { name: 'Macan EV S (21")', sizes: [
          { tag: 'OE',  size: '265/40R21' },
        ]},
      ],
    },
    {
      key: '95b_fl',
      label: '95B Macan Facelift (2019–2024)',
      years: '2019–2024',
      heroChips: [
        { label: 'Macan base OE', value: '235/55R19' },
        { label: 'S / GTS OE',    value: '265/45R20' },
        { label: 'From installed', value: '$138', green: true },
      ],
      variants: [
        { name: 'Macan 2.0T (19")', sizes: [
          { tag: 'OE',  size: '235/55R19' },
          { tag: 'Alt', size: '265/45R20', note: '升 20"，S/GTS 尺码' },
        ]},
        { name: 'Macan S front (20", staggered)', sizes: [
          { tag: 'OE',  size: '265/45R20' },
        ]},
        { name: 'Macan GTS rear (20", staggered)', sizes: [
          { tag: 'OE',  size: '295/40R20' },
        ]},
      ],
    },
    {
      key: '95b',
      label: '95B Macan 1st Gen (2014–2019)',
      years: '2014–2019',
      heroChips: [
        { label: 'Macan base OE', value: '235/60R18' },
        { label: 'S / GTS OE',    value: '265/45R20' },
        { label: 'From installed', value: '$128', green: true },
      ],
      variants: [
        { name: 'Macan 2.0T (18")', sizes: [
          { tag: 'OE',  size: '235/60R18' },
          { tag: 'Alt', size: '235/55R19', note: '升 19"，操控感提升' },
        ]},
        { name: 'Macan S / GTS (20")', sizes: [
          { tag: 'OE',  size: '265/45R20' },
          { tag: 'OE',  size: '295/40R20', note: '后轴（staggered）' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2024+ · EV J1 · S 21"',            width: '8.5J', diameter: '21"', offset: 'ET26', boltPattern: '5×112' },
    { label: '2024+ · EV J1 · base 20"',         width: '8.0J', diameter: '20"', offset: 'ET26', boltPattern: '5×112' },
    { label: '2014+ · 95B · GTS rear 20"',       width: '9.5J', diameter: '20"', offset: 'ET26', boltPattern: '5×112' },
    { label: '2014+ · 95B · S/GTS front 20"',   width: '9.0J', diameter: '20"', offset: 'ET26', boltPattern: '5×112' },
    { label: '2014+ · 95B · base 19"',           width: '8.0J', diameter: '19"', offset: 'ET26', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.5mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Porsche Macan uses 5×112 — different from Cayenne (5×130). 5×112 is shared with Audi Q5, VW Tiguan, BMW, and Mercedes-Benz models. However, centre bore (66.5mm), offset (ET26), and rim width differ significantly from other 5×112 cars — always verify before cross-fitting. Lug bolts (not nuts), M14×1.5, torque 130 Nm. N-rated tyres are available and recommended for GTS/Turbo variants.',
  },

  priceTabs: [
    {
      size: '235/55R19',
      tabLabel: '235/55R19 · 95B 基础 Macan 主力',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" SUV 运动胎 · Macan 基础版预算首选',
        price: 138,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'Porsche Macan 235%2F55R19 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" 干湿地均衡 · Macan 操控保留最佳',
        price: 248,
        also: 'Also: Michelin Pilot Sport 4 SUV, Pirelli P-Zero PZ4',
        waText: 'Porsche Macan 235%2F55R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '19" 顶级操控 · Porsche N 认证 · Macan 运动驾驶最佳',
        price: 328,
        also: 'Also: Pirelli P-Zero PZ4 N0, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Porsche Macan 235%2F55R19 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $992–$1,200 · Premium $1,312–$1,600',
    },
    {
      size: '235/55R20',
      tabLabel: '235/55R20 · Macan EV 尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '20" EV SUV 胎 · Macan EV 预算首选',
        price: 148,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'Porsche Macan EV 235%2F55R20 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '20" SUV EV 综合最佳 · Macan EV 静音推荐',
        price: 268,
        also: 'Also: Michelin Pilot Sport EV, Bridgestone Alenza 001',
        waText: 'Porsche Macan EV 235%2F55R20 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: 'EV 专用低滚阻 · Macan EV 续航最优',
        price: 358,
        also: 'Also: Pirelli P-Zero PZ4 Elect, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Porsche Macan EV 235%2F55R20 premium tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $1,072–$1,280 · Premium $1,432–$1,720',
    },
  ],

  radarSize: '235/55R19',
  radarSource: 'Continental (13 reviews) · Michelin (11 reviews) · Pirelli (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 74, 72, 76, 68, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '72', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 90, 84, 82, 84, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 82, 88, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '84', hi: false }, { k: 'Wear', v: '82', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: '95B Macan — 运动 SUV 换胎取舍',
      color: 'blue',
      genKey: '95b_fl',
      body: 'Macan 95B 基础版 19"（235/55R19）是 Porsche 小型 SUV 中货源最充足的尺码。Continental SportContact 6（$248/条）干湿地均衡性极佳，保留 Macan 运动操控风格，整套约 $992。Michelin Pilot Sport 4S（$328/条）是追求操控极限的首选——Porsche 原配 OE 供应商，干地抓地力明显高于其他品牌。<strong>提醒：</strong>Macan 95B 使用 5×112 螺栓孔，与 Cayenne（5×130）不同，两者<strong>不可共用轮圈</strong>。',
    },
    {
      title: 'Macan EV（235/55R20）— 新平台，EV 专用胎更划算',
      color: 'red',
      genKey: 'macan_ev',
      body: 'Macan EV（J1 平台，2024+）整备重约 2,100–2,300 kg，比 95B 重约 30%。原配 <strong>235/55R20</strong>，建议选 EV 专用胎如 Michelin Pilot Sport EV（$358/条）或 Continental CrossContact RX（$268/条）。EV 即时扭力对轮胎磨损比 95B 燃油版快约 25–35%，需要更频繁的胎纹检查（建议每 8,000 km 一次）。Macan EV S 的 265/40R21 在新加坡货源较少，建议提前预订。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Porsche Macan use in Singapore?',
      a: 'Porsche Macan 95B (2014–2024): base uses 235/55R19; S/GTS uses staggered 265/45R20 front + 295/40R20 rear. Macan EV (2024+): standard uses 235/55R20; Macan EV S uses 265/40R21. All Macan use 5×112 bolt pattern, 66.5mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Porsche Macan?',
      a: 'Porsche Macan (both 95B and EV) uses 5×112 bolt pattern, 66.5mm centre bore, M14×1.5 lug bolts, torque 130 Nm. This is different from Porsche Cayenne (5×130). 5×112 is shared with Audi Q5, VW Tiguan, BMW, and Mercedes.',
    },
    {
      q: 'How much does it cost to replace Porsche Macan tyres in Singapore?',
      a: 'For 235/55R19 (base 95B): budget from $138/tyre; mid-range $248; premium $328. Full set: $552–$1,312. For 235/55R20 (Macan EV): from $148/tyre; premium $358. Staggered 20" (S/GTS): expect $3,000–$5,000 for a full set of premium brand tyres.',
    },
    {
      q: 'Can I use Audi Q5 rims on a Porsche Macan?',
      a: 'Both use 5×112, but centre bore, offset (ET), and rim width differ. Macan uses ET26 (relatively low offset) while Audi Q5 uses ~ET38–45. Using Q5 rims on a Macan can cause tyre rub or handling issues. Hub-centric rings may also be needed. Professional consultation is strongly recommended before cross-fitting Porsche wheels.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/55R19',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 235/55R19', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/55R19',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '328', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/55R20',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental CrossContact RX 235/55R20', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport EV 235/55R20',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '358', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
