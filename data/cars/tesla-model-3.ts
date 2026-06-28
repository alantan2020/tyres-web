import type { CarData } from './types'

const data: CarData = {
  make: 'Tesla',
  model: 'Model 3',
  makeSlug: 'tesla',
  modelSlug: 'model-3',
  bgWord: 'MODEL3',

  seo: {
    title: 'Tesla Model 3 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Tesla Model 3 Highland (2024+) RWD uses 235/45R18; AWD uses 235/40R19. Performance uses 235/35R20. 5×114.3 bolt pattern. From $108 installed in Singapore.',
    ogDescription: 'Tesla Model 3 tyre sizes: Highland RWD 235/45R18, AWD 235/40R19, Performance 235/35R20. 5×114.3, 64.1mm CB. From $108 installed.',
    twitterDescription: 'Tesla Model 3 Highland RWD 235/45R18, AWD 235/40R19, Performance 235/35R20. From $108 installed.',
    priceFrom: 108,
    oeSize: '235/45R18',
  },

  defaultGen: 'highland',

  generations: [
    {
      key: 'highland',
      label: 'Highland 2nd Gen (2024–2026)',
      years: '2024–2026',
      note: 'Highland refresh introduced new aero wheel covers and updated sizes. RWD has square fitment; Performance has staggered fitment — front and rear sizes differ.',
      heroChips: [
        { label: 'RWD OE',         value: '235/45R18' },
        { label: 'AWD / LR OE',    value: '235/40R19' },
        { label: 'From installed',  value: '$108', green: true },
      ],
      variants: [
        { name: 'RWD (standard range)', sizes: [
          { tag: 'OE',  size: '235/45R18' },
          { tag: 'Alt', size: '235/40R19', note: '升 19"，操控提升，适合换轮圈' },
        ]},
        { name: 'Long Range AWD', sizes: [
          { tag: 'OE',  size: '235/40R19' },
          { tag: 'Alt', size: '235/45R18', note: '降 18"，舒适性更佳，降低滚动阻力' },
        ]},
        { name: 'Performance (front, staggered)', sizes: [
          { tag: 'OE',  size: '235/35R20' },
        ]},
        { name: 'Performance (rear, staggered)', sizes: [
          { tag: 'OE',  size: '255/35R20' },
          { tag: 'Alt', size: '245/35R20', note: '略窄，货源更充足' },
        ]},
      ],
    },
    {
      key: 'gen1',
      label: '1st Gen (2019–2023)',
      years: '2019–2023',
      heroChips: [
        { label: 'SR+ / LR RWD OE',  value: '235/45R18' },
        { label: 'AWD / LR AWD OE',  value: '235/40R19' },
        { label: 'From installed',    value: '$108', green: true },
      ],
      variants: [
        { name: 'Standard Range+ / Long Range RWD', sizes: [
          { tag: 'OE',  size: '235/45R18' },
        ]},
        { name: 'Long Range AWD', sizes: [
          { tag: 'OE',  size: '235/40R19' },
        ]},
        { name: 'Performance (front)', sizes: [
          { tag: 'OE',  size: '235/35R20' },
        ]},
        { name: 'Performance (rear)', sizes: [
          { tag: 'OE',  size: '265/35R20' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2024+ · Highland · Performance · front 20"',  width: '8.5J', diameter: '20"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2024+ · Highland · Performance · rear 20"',   width: '9.0J', diameter: '20"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2019+ · AWD / LR · 19"',                      width: '8.0J', diameter: '19"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2019+ · RWD / SR+ · 18"',                     width: '8.0J', diameter: '18"', offset: 'ET40', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M14×1.5 lug nut',
    torque: '175 Nm',
    warning: 'Tesla uses M14×1.5 lug nuts — larger than most Japanese cars (M12×1.5). Always use Tesla-spec torque 175 Nm; overtightening can damage the aluminium hub. ⚠️ Performance staggered fitment: front 235/35R20 and rear 255/35R20 (or 265/35R20) — CANNOT rotate tyres between axles. Confirm front vs rear before ordering.',
  },

  priceTabs: [
    {
      size: '235/45R18',
      tabLabel: '235/45R18 · RWD 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 舒适性能胎 · Model 3 RWD 预算首选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'Tesla Model 3 235%2F45R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Michelin Pilot Sport 4',
        desc: '湿地抓地 A 级 · EV 低噪音 · Model 3 最受好评中端选择',
        price: 188,
        also: 'Also: Continental SportContact 6, Bridgestone Potenza Sport',
        waText: 'Tesla Model 3 235%2F45R18 mid-range tyre quote (Michelin Pilot Sport 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: '专为 EV 设计 · 低滚阻提升续航 · 湿地制动顶级',
        price: 248,
        also: 'Also: Goodyear Eagle F1 Asymmetric 6, Pirelli P-Zero PZ4',
        waText: 'Tesla Model 3 235%2F45R18 premium tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $992–$1,120',
    },
    {
      size: '235/40R19',
      tabLabel: '235/40R19 · AWD / LR 尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" AWD 预算选择 · 抓地力与续航均衡',
        price: 118,
        also: 'Also: Kumho Ecsta PS91 19", Maxxis Victra Sport 5',
        waText: 'Tesla Model 3 235%2F40R19 AWD budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" 综合最佳 · 干湿地均衡 · AWD 操控提升',
        price: 208,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'Tesla Model 3 235%2F40R19 AWD mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: 'EV 专用 · 低滚阻续航提升 · AWD 操控顶级',
        price: 268,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Tesla Model 3 235%2F40R19 AWD premium tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $832–$960 · Premium $1,072–$1,200',
    },
  ],

  radarSize: '235/45R18',
  radarSource: 'Michelin (28 reviews) · Continental (19 reviews) · Hankook (14 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [70, 76, 72, 74, 72, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'NVH', v: '72', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 88, 84, 82, 84, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPilot Sport 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [90, 88, 88, 84, 90, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport EV',
      stats: [{ k: 'Wet', v: '90', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'EV Range', v: '90', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'RWD / Long Range — 舒适续航优先（235/45R18 或 235/40R19）',
      color: 'blue',
      genKey: 'highland',
      body: 'Model 3 RWD 原配 <strong>235/45R18</strong>，是 EV 友好的舒适向尺码。首选 Michelin Pilot Sport 4（$188/条）——湿地制动 A 级，噪音控制优于多数运动胎，续航损耗最小，整套约 $752。要进一步提升续航选 Michelin Pilot Sport EV（$248/条），该胎专为 EV 设计，低滚动阻力可延长约 3–5% 续航。预算有限选 Hankook Ventus S1 Evo3（$108/条），性价比最佳。<strong>注意：</strong>EV 胎重（电机 + 电池）对轮胎磨损比燃油车快约 20–30%，建议每 8,000–10,000 km 检查胎纹深度。',
    },
    {
      title: 'Performance 车主 — Staggered 换胎须知（前 235 / 后 255 或 265）',
      color: 'red',
      genKey: 'highland',
      body: 'Performance 版前轮 235/35R20，后轮 255/35R20（或 265/35R20），前后尺码不同，<strong>严禁前后互换</strong>。建议前后同品牌同型号，否则操控特性会因抓地力失衡而变差。Continental SportContact 6 或 Michelin Pilot Sport 4S 是 Model 3 Performance 车主最常选择。更换时务必同时检查刹车盘磨损——Performance 加速强劲，刹车系统负荷更大。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Tesla Model 3 use in Singapore?',
      a: 'Tesla Model 3 Highland (2024+): RWD uses 235/45R18; Long Range AWD uses 235/40R19; Performance has staggered 235/35R20 front + 255/35R20 rear. 1st Gen (2019–2023): Standard Range+ uses 235/45R18; Long Range AWD uses 235/40R19; Performance uses 235/35R20 front + 265/35R20 rear. All variants use 5×114.3 bolt pattern.',
    },
    {
      q: 'Which tyre brand is best for Tesla Model 3 in Singapore?',
      a: 'Michelin Pilot Sport 4 (235/45R18 from $188/tyre) is the most popular choice among Singapore Model 3 owners — excellent wet grip, low road noise, and minimal impact on range. For maximum range, the Michelin Pilot Sport EV ($248/tyre) is purpose-built for EVs with low rolling resistance. Budget option: Hankook Ventus S1 Evo3 ($108/tyre).',
    },
    {
      q: 'How often should I replace tyres on a Tesla Model 3?',
      a: 'More frequently than petrol cars. EV motors deliver instant torque, and the Model 3 is heavier than comparable petrol sedans — expect 25,000–35,000 km on rear tyres (RWD) or 30,000–40,000 km on AWD. Check tread depth every 10,000 km. Rotating tyres is not possible on staggered Performance fitments.',
    },
    {
      q: 'What is the bolt pattern of the Tesla Model 3?',
      a: 'Tesla Model 3 uses 5×114.3 bolt pattern with 64.1mm centre bore. Lug nut is M14×1.5 (larger than most Japanese cars which use M12×1.5). Torque is 175 Nm — important to get right as Tesla hubs are aluminium.',
    },
    {
      q: 'Can I change from 18" to 19" wheels on a Tesla Model 3 RWD?',
      a: 'Yes, upgrading from OE 18" to 19" is a popular modification. You need 235/40R19 tyres. The overall diameter stays similar, so speedometer accuracy is maintained. Note that 19" rims are heavier which slightly increases unsprung weight and may marginally reduce range, but handling improves noticeably.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/45R18',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 235/45R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport EV 235/45R18',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/40R19',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 235/40R19',   brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport EV 235/40R19',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
