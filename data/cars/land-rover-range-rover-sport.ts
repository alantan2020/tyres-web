import type { CarData } from './types'

const data: CarData = {
  make: 'Land Rover',
  model: 'Range Rover Sport',
  makeSlug: 'land-rover',
  modelSlug: 'range-rover-sport',
  bgWord: 'RRSPORT',

  seo: {
    title: 'Range Rover Sport Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Range Rover Sport L461 3rd Gen (2022+) uses 255/55R20 or 275/40R22. 5×120 bolt. From $148 installed in Singapore.',
    ogDescription: 'Range Rover Sport 3rd Gen L461: 255/55R20 (SE), 275/40R22 (Dynamic/Autobiography). 2nd Gen L494: 235/65R19, 255/55R19. 5×120, 72.6mm CB.',
    twitterDescription: 'Range Rover Sport L461 uses 255/55R20 (base) or 275/40R22 (Dynamic). 5×120. From $148 installed.',
    priceFrom: 148,
    oeSize: '255/55R20',
  },

  defaultGen: 'l461',

  generations: [
    {
      key: 'l461',
      label: '3rd Gen L461 (2022–2026)',
      years: '2022–2026',
      heroChips: [
        { label: 'SE / HSE OE',          value: '255/55R20' },
        { label: 'Dynamic SE/HSE OE',    value: '275/40R22' },
        { label: 'Autobiography OE',     value: '275/35R23' },
        { label: 'From installed',        value: '$148', green: true },
      ],
      variants: [
        { name: 'SE / HSE (20")', sizes: [
          { tag: 'OE',  size: '255/55R20' },
          { tag: 'Alt', size: '275/45R21', note: '升 21"，Dynamic 尺码' },
        ]},
        { name: 'Dynamic SE / HSE (22")', sizes: [
          { tag: 'OE',  size: '275/40R22' },
        ]},
        { name: 'Autobiography (23")', sizes: [
          { tag: 'OE',  size: '275/35R23' },
        ]},
      ],
    },
    {
      key: 'l494',
      label: '2nd Gen L494 (2013–2022)',
      years: '2013–2022',
      heroChips: [
        { label: 'SE base OE',   value: '235/65R19' },
        { label: 'HSE / SVR OE', value: '255/55R19' },
        { label: 'From installed', value: '$138', green: true },
      ],
      variants: [
        { name: 'SE / HSE base (19")', sizes: [
          { tag: 'OE',  size: '235/65R19' },
          { tag: 'Alt', size: '255/55R19', note: '升宽胎' },
        ]},
        { name: 'HSE Dynamic / SVR (21")', sizes: [
          { tag: 'OE',  size: '275/40R21' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · L461 · Autobiography · 23"', width: '9.5J',  diameter: '23"', offset: 'ET53', boltPattern: '5×120' },
    { label: '2022+ · L461 · Dynamic · 22"',       width: '9.5J',  diameter: '22"', offset: 'ET53', boltPattern: '5×120' },
    { label: '2022+ · L461 · SE/HSE · 20"',        width: '8.5J',  diameter: '20"', offset: 'ET53', boltPattern: '5×120' },
    { label: '2013–2022 · L494 · SVR · 21"',       width: '9.5J',  diameter: '21"', offset: 'ET53', boltPattern: '5×120' },
    { label: '2013–2022 · L494 · SE/HSE · 19"',    width: '8.0J',  diameter: '19"', offset: 'ET53', boltPattern: '5×120' },
  ],
  rimCommon: {
    centreBore: '72.6mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Range Rover Sport uses 5×120 — same as Defender L663, Land Rover Discovery 3/4/5, and Range Rover full size. Also same bolt pattern as BMW 5 Series. NOT compatible with Evoque or Discovery Sport (5×108). 72.6mm centre bore. M14×1.5 lug bolts, torque 130 Nm.',
  },

  priceTabs: [
    {
      size: '255/55R20',
      tabLabel: '255/55R20 · L461 SE / HSE 主力',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '20" 豪华 SUV 公路胎 · RR Sport 预算首选',
        price: 148,
        also: 'Also: Kumho Crugen HP71, Bridgestone Dueler HP Sport',
        waText: 'Range Rover Sport 255%2F55R20 budget tyre quote (Hankook Dynapro or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '20" SUV 综合最强 · 干湿地均衡 · RR Sport 首选',
        price: 268,
        also: 'Also: Michelin Pilot Sport 4 SUV, Bridgestone Alenza 001',
        waText: 'Range Rover Sport 255%2F55R20 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '20" 顶级豪华 4×4 · 湿地 A 级 · RR Sport 操控最大化',
        price: 368,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 5 SUV',
        waText: 'Range Rover Sport 255%2F55R20 premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $1,072–$1,280 · Premium $1,472–$1,760',
    },
    {
      size: '255/55R19',
      tabLabel: '255/55R19 · L494 HSE 尺码',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '19" 大型 SUV 胎 · L494 预算选择',
        price: 138,
        also: 'Also: Kumho Crugen HP71, Bridgestone Dueler',
        waText: 'Range Rover Sport L494 255%2F55R19 budget tyre quote (Hankook Dynapro or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001',
        desc: '19" 豪华 SUV 静音耐磨 · L494 通勤首选',
        price: 238,
        also: 'Also: Continental CrossContact RX, Michelin Pilot Sport 4 SUV',
        waText: 'Range Rover Sport L494 255%2F55R19 mid-range tyre quote (Bridgestone Alenza 001 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '19" 豪华 SUV 顶级 · L494 驾驶感提升最明显',
        price: 318,
        also: 'Also: Pirelli Scorpion Verde, Continental CrossContact RX',
        waText: 'Range Rover Sport L494 255%2F55R19 premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $952–$1,120 · Premium $1,272–$1,560',
    },
  ],

  radarSize: '255/55R20',
  radarSource: 'Michelin (11 reviews) · Continental (9 reviews) · Bridgestone (7 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '6.9',
      scores: [66, 72, 74, 78, 70, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nDynapro HP2',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '74', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.3',
      scores: [82, 86, 84, 82, 80, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nCrossContact RX',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [86, 88, 88, 84, 84, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPS4 SUV',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'RR Sport L461（255/55R20）— 新一代重量级豪华 SUV',
      color: 'blue',
      genKey: 'l461',
      body: 'L461 RR Sport 整备重 2,300–2,700 kg（取决于 PHEV 或 MHEV 版本），属于最重量级的豪华 SUV 之一。<strong>必须使用 XL 承载等级轮胎</strong>（Load Index 111 以上）。Continental CrossContact RX（$268/条，255/55R20）是干湿地综合最佳，静音性媲美原配，整套约 $1,072。Michelin Pilot Sport 4 SUV（$368/条）在豪华 SUV 胎中操控性能最强，适合追求驾驶感的车主。<strong>注意：</strong>Dynamic 版 22" 和 Autobiography 23" 在新加坡货源极少，请提前 2–3 周预订。',
    },
    {
      title: 'L494 RR Sport（2013–2022）— 存量庞大，配件充足',
      color: 'red',
      genKey: 'l494',
      body: 'L494 在新加坡路面保有量极大，主流尺码 255/55R19（HSE/SVR）货源充足。Bridgestone Alenza 001（$238/条）是最受 L494 车主好评的选择——静音耐磨均衡，与豪华 SUV 定位完美匹配，整套约 $952。SVR 21"（275/40R21）因扁平比低，新加坡弹弓路要特别注意减速，容易爆胎或损坏轮毂。建议 SVR 车主备用一组 19" 轮圈 + 轮胎，城市日用时使用舒适型，特殊驾驶时换回 21"。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Range Rover Sport use in Singapore?',
      a: 'Range Rover Sport 3rd Gen L461 (2022+): SE/HSE uses 255/55R20; Dynamic SE/HSE uses 275/40R22; Autobiography uses 275/35R23. 2nd Gen L494 (2013–2022): SE/HSE uses 235/65R19 or 255/55R19; Dynamic/SVR uses 275/40R21. All use 5×120 bolt pattern, 72.6mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Range Rover Sport?',
      a: 'Range Rover Sport (L461 and L494) uses 5×120 bolt pattern, 72.6mm centre bore, M14×1.5 lug bolts, torque 130 Nm. Same as Land Rover Defender and Discovery. NOT the same as Range Rover Evoque or Discovery Sport (both use 5×108).',
    },
    {
      q: 'How much does it cost to replace Range Rover Sport tyres in Singapore?',
      a: 'For 255/55R20 (L461 SE/HSE): budget from $148/tyre; mid-range $268; premium $368. Full set: $592–$1,472. For 255/55R19 (L494 HSE): from $138/tyre; premium $318. Dynamic/SVR sizes (22" or 21") are rare in Singapore — budget $500–$800+ per tyre for premium brands. XL-rated tyres are essential for all RR Sport variants due to high vehicle weight.',
    },
    {
      q: 'Can I downsize from 22" to 20" tyres on a Range Rover Sport L461?',
      a: 'Yes, many L461 Dynamic owners downsize to 20" wheels with 255/55R20 tyres — the overall rolling diameter is maintained, ride comfort improves significantly (especially on Singapore speed bumps), and tyre costs drop by $100–$200 per tyre. You\'ll need to purchase 20" rims as well. Keep the original 22" as a spare or weekend set.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Dynapro HP2 255/55R20',          brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 255/55R20',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 255/55R20',  brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '368', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Dynapro HP2 255/55R19',          brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 255/55R19',        brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 255/55R19',  brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '318', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
