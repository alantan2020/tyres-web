import type { CarData } from './types'

const data: CarData = {
  make: 'Land Rover',
  model: 'Defender',
  makeSlug: 'land-rover',
  modelSlug: 'defender',
  bgWord: 'DEFENDER',

  seo: {
    title: 'Land Rover Defender Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Land Rover Defender L663 (2020+) uses 255/70R18 (base), 255/65R19, or 255/60R20. 5×120 bolt pattern. From $138 installed in Singapore.',
    ogDescription: 'Land Rover Defender L663: 255/70R18 (base D90), 255/65R19, 255/60R20 (D110 high). 5×120, 72.6mm CB. From $138 installed.',
    twitterDescription: 'Land Rover Defender uses 255/70R18 (base) to 255/60R20 (high trim). 5×120 bolt. From $138 installed.',
    priceFrom: 138,
    oeSize: '255/65R19',
  },

  defaultGen: 'l663',

  generations: [
    {
      key: 'l663',
      label: 'L663 New Defender (2020–2026)',
      years: '2020–2026',
      note: 'New Defender available in 90 (3-door) and 110 (5-door) body styles. Tyre sizes are the same between 90 and 110 for matching trim levels.',
      heroChips: [
        { label: 'S/SE base OE',   value: '255/70R18' },
        { label: 'X / Explorer OE', value: '255/65R19' },
        { label: 'X-Dynamic OE',   value: '255/60R20' },
        { label: 'From installed',  value: '$138', green: true },
      ],
      variants: [
        { name: 'Defender S / SE (base, 18")', sizes: [
          { tag: 'OE',  size: '255/70R18' },
          { tag: 'Alt', size: '255/65R19', note: '升 19"，X 同款' },
        ]},
        { name: 'Defender X / Explorer (19")', sizes: [
          { tag: 'OE',  size: '255/65R19' },
          { tag: 'Alt', size: '255/60R20', note: '升 20"，X-Dynamic 同款' },
        ]},
        { name: 'Defender X-Dynamic SE / HSE (20")', sizes: [
          { tag: 'OE',  size: '255/60R20' },
          { tag: 'Alt', size: '275/50R20', note: '稍宽，接地感更强' },
        ]},
        { name: 'Defender X (21")', sizes: [
          { tag: 'OE',  size: '265/45R21' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2020+ · L663 · X 21"',          width: '9.0J', diameter: '21"', offset: 'ET53', boltPattern: '5×120' },
    { label: '2020+ · L663 · X-Dynamic 20"',  width: '8.5J', diameter: '20"', offset: 'ET53', boltPattern: '5×120' },
    { label: '2020+ · L663 · X/Explorer 19"', width: '8.0J', diameter: '19"', offset: 'ET53', boltPattern: '5×120' },
    { label: '2020+ · L663 · base 18"',       width: '7.5J', diameter: '18"', offset: 'ET53', boltPattern: '5×120' },
  ],
  rimCommon: {
    centreBore: '72.6mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Land Rover Defender L663 uses 5×120 bolt pattern, 72.6mm centre bore — same as Land Rover Discovery 3/4/5 and Range Rover Sport L494/L461. Also compatible with BMW 5 Series and BYD Seal (same bolt pattern). Lug bolts (not nuts), M14×1.5, torque 130 Nm. The 255/70R18 and 255/65R19 are proper off-road capable sizes with high load capacity — important for towing or payload.',
  },

  priceTabs: [
    {
      size: '255/65R19',
      tabLabel: '255/65R19 · X / Explorer 主力尺码',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '19" SUV/4×4 胎 · Defender 预算首选 · 高承载',
        price: 138,
        also: 'Also: Kumho Crugen HP71, Nankang SP-7',
        waText: 'Land Rover Defender 255%2F65R19 budget tyre quote (Hankook Dynapro or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001',
        desc: '高承载公路胎 · Defender 日常通勤最佳 · 静音耐磨',
        price: 228,
        also: 'Also: Michelin Primacy 4 SUV, Continental CrossContact RX',
        waText: 'Land Rover Defender 255%2F65R19 mid-range tyre quote (Bridgestone Alenza 001 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '19" 豪华 4×4 顶级 · 操控与承载兼顾',
        price: 318,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde All Season',
        waText: 'Land Rover Defender 255%2F65R19 premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $912–$1,120 · Premium $1,272–$1,560',
    },
    {
      size: '255/60R20',
      tabLabel: '255/60R20 · X-Dynamic 20"',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '20" 高承载 SUV 胎 · Defender 城市通勤预算选择',
        price: 148,
        also: 'Also: Kumho Crugen HP71, Bridgestone Dueler HP Sport',
        waText: 'Land Rover Defender 255%2F60R20 X-Dynamic budget tyre quote (Hankook Dynapro or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '20" SUV 路面综合最强 · 干湿地均衡 · Defender 高配首选',
        price: 268,
        also: 'Also: Bridgestone Alenza 001, Michelin Pilot Sport 4 SUV',
        waText: 'Land Rover Defender 255%2F60R20 X-Dynamic mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '20" 顶级豪华 4×4 · Defender 操控最大化',
        price: 358,
        also: 'Also: Pirelli P-Zero SUV, Goodyear Eagle F1 Asymmetric 5 SUV',
        waText: 'Land Rover Defender 255%2F60R20 X-Dynamic premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $1,072–$1,280 · Premium $1,432–$1,720',
    },
  ],

  radarSize: '255/65R19',
  radarSource: 'Bridgestone (11 reviews) · Continental (9 reviews) · Michelin (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [66, 72, 74, 78, 72, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nDynapro HP2',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '74', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [80, 84, 86, 82, 78, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nAlenza 001',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [84, 86, 88, 82, 82, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPS4 SUV',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Defender 日常公路使用 — 静音耐磨优先',
      color: 'blue',
      genKey: 'l663',
      body: '新 Defender 在新加坡路面几乎全天公路行驶，选舒适路面胎更划算。Bridgestone Alenza 001（$228/条，255/65R19）静音优秀，承载等级高（Defender 整备重超过 2,200 kg），耐磨性是同价位最佳，整套约 $912。Continental CrossContact RX（$268/条，255/60R20）干湿地操控明显提升，适合偶尔出差或高速行驶较多的车主。<strong>提醒：</strong>Defender 整备重 2,200–2,450 kg，部分高配超过 2,500 kg，务必选 Load Index 111 以上（XL 等级）的轮胎。',
    },
    {
      title: 'Defender X（265/45R21）— 大尺码宽胎货源稀少',
      color: 'red',
      genKey: 'l663',
      body: 'Defender X 顶配 21" 配 <strong>265/45R21</strong>，在新加坡这个尺码货源极少，普通轮胎店可能没有现货。建议提前 1–2 周预订，或考虑降尺换 255/65R19（配合 19" 轮圈），可以更换为静音舒适胎，同时大幅降低换胎费用（21" 每条比 19" 贵约 $100–$200）。<strong>5×120 螺栓孔提醒：</strong>Defender 与 BMW 5 Series 同为 5×120，但中心孔 72.6mm（BMW 是 72.6mm，接近）——换装 BMW 轮圈前请专业核对 offset 和宽度。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Land Rover Defender use in Singapore?',
      a: 'Land Rover Defender L663 (2020+): S/SE base uses 255/70R18; X/Explorer uses 255/65R19; X-Dynamic SE/HSE uses 255/60R20; X top spec uses 265/45R21. All Defender use 5×120 bolt pattern, 72.6mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Land Rover Defender?',
      a: 'Land Rover Defender L663 uses 5×120 bolt pattern, 72.6mm centre bore, M14×1.5 lug bolts, torque 130 Nm. Same as Range Rover Sport L461/L494. Also matches BMW 5 Series bolt pattern, though centre bore and offset differ — verify before cross-fitting.',
    },
    {
      q: 'How much does it cost to replace Land Rover Defender tyres in Singapore?',
      a: 'For 255/65R19 (X/Explorer trim): budget from $138/tyre; mid-range $228; premium $318. Full set: $552–$1,272. For 255/60R20 (X-Dynamic): from $148/tyre; premium $358. Defender is a heavy vehicle (2,200–2,450 kg+) — use XL-rated tyres with Load Index 111+ for safety under full load.',
    },
    {
      q: 'Can I use all-terrain tyres on a Land Rover Defender in Singapore?',
      a: 'Yes, all-terrain tyres (AT tyres) work well on the Defender and are popular among Singapore owners who do occasional off-road driving in Malaysia. Common choices: BFGoodrich All-Terrain T/A KO2, Toyo Open Country AT3. However, AT tyres produce noticeably more road noise and slightly worse fuel economy than highway tyres. For full Singapore city use, highway tyres like Bridgestone Alenza 001 or Continental CrossContact RX are more practical.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Dynapro HP2 255/65R19',         brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 255/65R19',      brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 255/65R19', brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '318', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Dynapro HP2 255/60R20',         brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental CrossContact RX 255/60R20', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 255/60R20', brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '358', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
