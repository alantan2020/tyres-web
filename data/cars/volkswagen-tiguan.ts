import type { CarData } from './types'

const data: CarData = {
  make: 'Volkswagen',
  model: 'Tiguan',
  makeSlug: 'volkswagen',
  modelSlug: 'tiguan',
  bgWord: 'TIGUAN',

  seo: {
    title: 'Volkswagen Tiguan Tyre Size & Best Price Singapore | SGCarPass',
    description: 'VW Tiguan Mk2 FL (2020–2024) and Mk2.5 (2024+) use 235/55R18 (standard) or 235/50R19 (R-Line). 5×112, 57.1mm CB. From $108 installed in Singapore.',
    ogDescription: 'VW Tiguan tyre sizes: 235/55R18 standard, 235/50R19 R-Line. 5×112, 57.1mm CB — different from BMW/Mercedes 66.6mm. From $108 installed.',
    twitterDescription: 'VW Tiguan uses 235/55R18 (standard) or 235/50R19 (R-Line). 5×112, 57.1mm CB. From $108 installed in Singapore.',
    priceFrom: 108,
    oeSize: '235/55R18',
  },

  defaultGen: 'mk2-fl',

  generations: [
    {
      key: 'mk2-5',
      label: 'Mk2.5 (2024–2026)',
      years: '2024–2026',
      note: 'Mk2.5 Tiguan updated styling and features; tyre sizes largely unchanged from Mk2 FL.',
      heroChips: [
        { label: 'Tiguan / Life standard', value: '235/55R18' },
        { label: 'R-Line 19"',             value: '235/50R19' },
        { label: 'From installed',          value: '$108', green: true },
      ],
      variants: [
        { name: 'Tiguan / Life / Style (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '245/50R18', note: '宽 10mm，同外径' },
        ]},
        { name: 'R-Line (19")', sizes: [
          { tag: 'OE',  size: '235/50R19' },
          { tag: 'Alt', size: '245/45R19', note: '宽 10mm 运动感升级' },
        ]},
      ],
    },
    {
      key: 'mk2-fl',
      label: 'Mk2 FL (2020–2024)',
      years: '2020–2024',
      note: 'Most common Tiguan in Singapore. Tiguan Allspace (7-seater) uses identical tyre sizes.',
      heroChips: [
        { label: 'Tiguan / Allspace standard', value: '235/55R18' },
        { label: 'R-Line 19"',                 value: '235/50R19' },
        { label: 'From installed',              value: '$108', green: true },
      ],
      variants: [
        { name: 'Tiguan / Allspace Life / Style (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '245/50R18', note: '宽 10mm，同外径' },
        ]},
        { name: 'R-Line (19")', sizes: [
          { tag: 'OE',  size: '235/50R19' },
          { tag: 'Alt', size: '245/45R19', note: '宽 10mm 升级' },
        ]},
      ],
    },
    {
      key: 'mk2',
      label: 'Mk2 (2016–2020)',
      years: '2016–2020',
      heroChips: [
        { label: 'Tiguan standard', value: '235/55R17 or 235/55R18' },
        { label: 'From installed',  value: '$98', green: true },
      ],
      variants: [
        { name: 'Tiguan Comfortline (17")', sizes: [
          { tag: 'OE',  size: '235/55R17' },
          { tag: 'Alt', size: '235/50R18', note: '升 18" 改装常见选择' },
        ]},
        { name: 'Tiguan Highline / R-Line (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2024–2026 · Mk2.5 · R-Line · 19"',   width: '8.0J', diameter: '19"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2024–2026 · Mk2.5 · standard · 18"',  width: '7.5J', diameter: '18"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2020–2024 · Mk2 FL · R-Line · 19"',  width: '8.0J', diameter: '19"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2020–2024 · Mk2 FL · standard · 18"', width: '7.5J', diameter: '18"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2016–2020 · Mk2 · standard · 17"',    width: '7.0J', diameter: '17"', offset: 'ET49', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '57.1mm',
    stud: 'M14×1.5 bolt',
    torque: '120 Nm',
    notes: 'VW Tiguan shares 5×112 bolt pattern with BMW and Mercedes, but VW\'s centre bore is 57.1mm vs BMW/Mercedes 66.6mm. BMW or Mercedes rims require 57.1→66.6mm hub-centric rings to fit properly. Tiguan Allspace (7-seater) uses identical rim and tyre specs as the standard Tiguan.',
  },

  priceTabs: [
    {
      size: '235/55R18',
      tabLabel: '235/55R18 · Tiguan 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 紧凑型 SUV 胎 · Tiguan 入门实惠选择',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang SP-9 Cross',
        waText: 'VW Tiguan 235%2F55R18 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · 静音舒适 · 新加坡 Tiguan 最多车主选用',
        price: 188,
        also: 'Also: Bridgestone Turanza T005, Michelin Primacy 4+',
        waText: 'VW Tiguan 235%2F55R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'Tiguan 旗舰配胎 · 操控与舒适全面领先',
        price: 258,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 6 SUV',
        waText: 'VW Tiguan 235%2F55R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $1,032–$1,200',
    },
    {
      size: '235/50R19',
      tabLabel: '235/50R19 · R-Line 19"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" UHP SUV 胎 · Tiguan R-Line 预算首选',
        price: 138,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'VW Tiguan R-Line 235%2F50R19 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" 操控 + 湿地均衡 · R-Line 最推荐',
        price: 228,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'VW Tiguan R-Line 235%2F50R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'R-Line 最顶级配胎 · 干湿地全面领先',
        price: 308,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'VW Tiguan R-Line 235%2F50R19 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $912–$1,060 · Premium $1,232–$1,440',
    },
  ],

  radarSize: '235/55R18',
  radarSource: 'Hankook (12 reviews) · Continental (17 reviews) · Michelin (14 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 76, 74, 68, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 90, 84, 80, 84, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 78, 86, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Tiguan 标准版（235/55R18）',
      color: 'blue',
      genKey: 'mk2-fl',
      body: 'Mk2 FL Tiguan 标准版原配 <strong>235/55R18</strong>，是新加坡最畅销的德系 SUV 尺码之一。Continental SportContact 6（$188/条）是最受好评的选择，干湿地均衡，整套约 $752。Tiguan Allspace（7 座版）使用完全相同的尺码，同样适用。如果偏好更安静的乘坐体验，可考虑 Bridgestone Turanza T005，静音度更突出。',
    },
    {
      title: 'Tiguan R-Line 车主（235/50R19）',
      color: 'red',
      genKey: 'mk2-fl',
      body: 'R-Line 配 <strong>235/50R19</strong>，低扁平比提升操控精准度。Continental SportContact 6（$228/条）是最受 R-Line 好评的选择，整套约 $912。19" 薄胎遇减速带时碰圈风险较高，建议通过时放慢速度。新加坡常见修复费用 $200-500+/个圈。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the VW Tiguan use in Singapore?',
      a: 'VW Tiguan Mk2 FL (2020–2024) and Mk2.5 (2024+): standard trim uses 235/55R18; R-Line uses 235/50R19. Mk2 (2016–2020): Comfortline uses 235/55R17; Highline/R-Line uses 235/55R18. Tiguan Allspace (7-seater) uses the same sizes as the standard Tiguan.',
    },
    {
      q: 'What is the bolt pattern of the VW Tiguan?',
      a: 'All VW Tiguan (Mk2, Mk2 FL, Mk2.5) use 5×112 bolt pattern with 57.1mm centre bore. Bolt thread M14×1.5, torque 120 Nm. Note: same 5×112 as BMW and Mercedes, but VW centre bore is 57.1mm vs BMW/Mercedes 66.6mm.',
    },
    {
      q: 'Are Tiguan and GLC tyres the same?',
      a: 'Yes — both VW Tiguan and Mercedes GLC use 235/55R18 (standard) and 235/50R19 or 255/45R19 (performance trims). The tyre sizes are interchangeable. However, rim bolt specs differ: same 5×112 pattern but different centre bore (VW 57.1mm vs Mercedes 66.6mm), so rims are not directly swappable.',
    },
    {
      q: 'How much does it cost to replace VW Tiguan tyres in Singapore?',
      a: 'For 235/55R18 (most common): budget from $108 per tyre installed; mid-range $188–$210; premium $258–$295. Full set of 4: approximately $432–$1,200. For R-Line 235/50R19: budget from $138; mid $228–$258; premium $308–$355.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/55R18',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 235/55R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/55R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/50R19',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 235/50R19', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/50R19',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '308', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
