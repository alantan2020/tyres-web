import type { CarData } from './types'

const data: CarData = {
  make: 'BYD',
  model: 'Seal',
  makeSlug: 'byd',
  modelSlug: 'seal',
  bgWord: 'BYDSEAL',

  seo: {
    title: 'BYD Seal Tyre Size & Best Price Singapore | SGCarPass',
    description: 'BYD Seal RWD uses 225/50R18; Long Range AWD uses 235/45R19; Performance uses 245/45R20 (staggered). 5×120 bolt. From $108 installed in Singapore.',
    ogDescription: 'BYD Seal: RWD 225/50R18; Long Range AWD 235/45R19; Performance staggered 245/40R19 front + 265/40R19 rear. 5×120, 64.1mm CB. From $108.',
    twitterDescription: 'BYD Seal RWD 225/50R18, AWD 235/45R19, Performance 245/40R19 staggered. 5×120. From $108 installed.',
    priceFrom: 108,
    oeSize: '235/45R19',
  },

  defaultGen: 'gen1',

  generations: [
    {
      key: 'gen1',
      label: 'Seal (2023–2026)',
      years: '2023–2026',
      note: 'BYD Seal Performance uses staggered fitment — front and rear tyres are different widths. Cannot rotate between axles.',
      heroChips: [
        { label: 'RWD OE',         value: '225/50R18' },
        { label: 'Long Range OE',   value: '235/45R19' },
        { label: 'Performance OE',  value: '245/40R19 + 265/40R19' },
        { label: 'From installed',  value: '$108', green: true },
      ],
      variants: [
        { name: 'RWD Standard (18")', sizes: [
          { tag: 'OE',  size: '225/50R18' },
          { tag: 'Alt', size: '235/45R18', note: '稍宽，操控感提升' },
          { tag: 'Alt', size: '235/45R19', note: '升 19"，Long Range 尺码' },
        ]},
        { name: 'Long Range AWD (19")', sizes: [
          { tag: 'OE',  size: '235/45R19' },
          { tag: 'Alt', size: '245/45R19', note: '稍宽，接地感更强' },
        ]},
        { name: 'Performance AWD front (19", staggered)', sizes: [
          { tag: 'OE',  size: '245/40R19' },
        ]},
        { name: 'Performance AWD rear (19", staggered)', sizes: [
          { tag: 'OE',  size: '265/40R19' },
          { tag: 'Alt', size: '255/40R19', note: '略窄，货源更充足' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2023+ · Performance · front 19"', width: '8.0J', diameter: '19"', offset: 'ET43', boltPattern: '5×120' },
    { label: '2023+ · Performance · rear 19"',  width: '9.0J', diameter: '19"', offset: 'ET45', boltPattern: '5×120' },
    { label: '2023+ · Long Range AWD · 19"',    width: '8.0J', diameter: '19"', offset: 'ET43', boltPattern: '5×120' },
    { label: '2023+ · RWD · 18"',               width: '7.5J', diameter: '18"', offset: 'ET43', boltPattern: '5×120' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M14×1.5',
    torque: '120 Nm',
    warning: '⚠️ BYD Seal uses 5×120 bolt pattern — unusual for Chinese brands. 5×120 is also used by BMW (some models) and Land Rover Defender/Discovery. NOT compatible with most Japanese cars (5×114.3) or other BYD models like ATTO 3 (5×114.3). Performance staggered fitment: front 245/40R19 ≠ rear 265/40R19 — cannot swap between axles.',
  },

  priceTabs: [
    {
      size: '235/45R19',
      tabLabel: '235/45R19 · Long Range AWD 主力',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" EV 运动胎 · Seal AWD 预算首选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'BYD Seal 235%2F45R19 AWD budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Michelin Pilot Sport 4',
        desc: '湿地 A 级 · 低噪音 · Seal AWD 最受好评选择',
        price: 208,
        also: 'Also: Continental SportContact 6, Bridgestone Potenza Sport',
        waText: 'BYD Seal 235%2F45R19 AWD mid-range tyre quote (Michelin Pilot Sport 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: 'EV 专用 · 低滚阻 · Seal 续航最优方案',
        price: 268,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'BYD Seal 235%2F45R19 AWD premium tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $832–$960 · Premium $1,072–$1,200',
    },
    {
      size: '225/50R18',
      tabLabel: '225/50R18 · RWD 18" 尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" EV 运动胎 · Seal RWD 预算首选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang Sportnex NS-25',
        waText: 'BYD Seal 225%2F50R18 RWD budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '18" 干湿均衡 · Seal RWD 操控提升',
        price: 188,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'BYD Seal 225%2F50R18 RWD mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: 'EV 专用低滚阻 · Seal RWD 续航最优',
        price: 238,
        also: 'Also: Goodyear Eagle F1 Asymmetric 6, Pirelli P-Zero PZ4',
        waText: 'BYD Seal 225%2F50R18 RWD premium tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $952–$1,100',
    },
  ],

  radarSize: '235/45R19',
  radarSource: 'Michelin (12 reviews) · Continental (10 reviews) · Hankook (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 74, 70, 76, 70, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '70', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [86, 88, 84, 80, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPilot Sport 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [88, 88, 86, 82, 90, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport EV',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'EV Range', v: '90', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Seal AWD Long Range（235/45R19）— 运动 EV sedan 换胎',
      color: 'blue',
      genKey: 'gen1',
      body: 'BYD Seal Long Range 整备重约 2,010 kg，原配 <strong>235/45R19</strong>。Michelin Pilot Sport 4（$208/条）是综合最佳——湿地 A 级制动，低噪音，EV 大扭力下抓地稳定，整套约 $832。想最大化续航选 Michelin Pilot Sport EV（$268/条），专为 EV 优化的低滚阻配方，实测续航提升约 3–5%。EV 大电池重量加速了轮胎磨损，建议每 10,000 km 检查胎纹深度。',
    },
    {
      title: 'Seal 5×120 螺栓孔 — 重要提醒，勿与 ATTO 3 混用',
      color: 'red',
      genKey: 'gen1',
      body: 'BYD Seal 使用 <strong>5×120</strong> 螺栓孔，而 BYD ATTO 3 使用 <strong>5×114.3</strong>——两者<strong>不兼容</strong>。5×120 在新加坡较少见，和 BMW 5 Series、Land Rover Defender 相同，但与大多数日系车和其他中国品牌 EV 不同。购买售后轮圈时务必确认 5×120 规格，货源比 5×114.3 少，请提前确认现货。Performance 版 staggered 尺码（前 245/40R19，后 265/40R19），前后不同，<strong>禁止前后互换</strong>。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the BYD Seal use in Singapore?',
      a: 'BYD Seal RWD uses 225/50R18; Long Range AWD uses 235/45R19; Performance AWD uses staggered 245/40R19 front + 265/40R19 rear. All use 5×120 bolt pattern, 64.1mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the BYD Seal?',
      a: 'BYD Seal uses 5×120 bolt pattern, 64.1mm centre bore, M14×1.5 lug nuts, torque 120 Nm. This is DIFFERENT from BYD ATTO 3 (5×114.3). 5×120 is the same as BMW 5 Series and Land Rover Defender, making some BMW/LR aftermarket rims technically compatible (offset verification required).',
    },
    {
      q: 'How much does it cost to replace BYD Seal tyres in Singapore?',
      a: 'For 235/45R19 (Long Range AWD): from $118/tyre; mid-range $208; premium $268. Full set: $472–$1,072. For 225/50R18 (RWD): from $108/tyre; mid-range $188; premium $238. Performance staggered set (4 tyres, front + rear): budget $520–$680.',
    },
    {
      q: 'Can I use BYD ATTO 3 rims on a BYD Seal?',
      a: 'No — BYD ATTO 3 uses 5×114.3 bolt pattern while BYD Seal uses 5×120. These are completely different and not interchangeable. Even hub centric rings cannot bridge a bolt pattern difference.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/45R19',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 235/45R19',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport EV 235/45R19',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/50R18',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 225/50R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport EV 225/50R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
