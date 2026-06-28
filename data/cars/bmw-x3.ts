import type { CarData } from './types'

const data: CarData = {
  make: 'BMW',
  model: 'X3',
  makeSlug: 'bmw',
  modelSlug: 'x3',
  bgWord: 'X3',

  seo: {
    title: 'BMW X3 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'BMW X3 G01 (2017–2024) uses 245/50R18 (standard) or 245/45R19 (M Sport/xDrive30i). G45 (2024+) similar. 5×112 bolt pattern. From $118 installed in Singapore.',
    ogDescription: 'BMW X3 G01/G45 tyre sizes: 245/50R18 standard, 245/45R19 M Sport. 5×112, 66.6mm CB, M14×1.25 bolt. From $118 installed in Singapore.',
    twitterDescription: 'BMW X3 uses 245/50R18 (standard) or 245/45R19 (M Sport). 5×112 bolt. From $118 installed in Singapore.',
    priceFrom: 118,
    oeSize: '245/50R18',
  },

  defaultGen: 'g01',

  generations: [
    {
      key: 'g01',
      label: 'G01 3rd Gen (2017–2024)',
      years: '2017–2024',
      note: 'G01 uses run-flat tyres as OE. xDrive models dominant in Singapore. M Sport trims have 19" wheels.',
      heroChips: [
        { label: 'xDrive20i / 30i standard', value: '245/50R18' },
        { label: 'M Sport / xDrive30i 19"',  value: '245/45R19' },
        { label: 'From installed',            value: '$118', green: true },
      ],
      variants: [
        { name: 'xDrive20i standard (18")', sizes: [
          { tag: 'OE',  size: '245/50R18' },
          { tag: 'Alt', size: '255/45R18', note: '宽 10mm，同外径升级' },
        ]},
        { name: 'xDrive30i / M Sport (19")', sizes: [
          { tag: 'OE',  size: '245/45R19' },
          { tag: 'Alt', size: '255/40R19', note: '宽 10mm，运动感更强' },
        ]},
      ],
    },
    {
      key: 'g45',
      label: 'G45 4th Gen (2024–2026)',
      years: '2024–2026',
      heroChips: [
        { label: 'xDrive20i standard', value: '245/50R18' },
        { label: 'M Sport / top',      value: '245/45R19' },
        { label: 'From installed',      value: '$118', green: true },
      ],
      variants: [
        { name: 'xDrive20i standard (18")', sizes: [
          { tag: 'OE',  size: '245/50R18' },
        ]},
        { name: 'xDrive30i M Sport (19")', sizes: [
          { tag: 'OE',  size: '245/45R19' },
        ]},
      ],
    },
    {
      key: 'f25',
      label: 'F25 2nd Gen (2010–2017)',
      years: '2010–2017',
      heroChips: [
        { label: 'xDrive20i / 28i', value: '245/50R18' },
        { label: 'M Sport / 35i',   value: '245/45R19' },
        { label: 'From installed',   value: '$118', green: true },
      ],
      variants: [
        { name: 'xDrive20i / 28i standard (18")', sizes: [
          { tag: 'OE',  size: '245/50R18' },
          { tag: 'Alt', size: '255/45R18', note: '宽 10mm，同外径' },
        ]},
        { name: 'M Sport / 35i (19")', sizes: [
          { tag: 'OE',  size: '245/45R19' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2017–2026 · G01/G45 · M Sport · 19"',   width: '8.0J', diameter: '19"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2017–2026 · G01/G45 · standard · 18"',   width: '8.0J', diameter: '18"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2010–2017 · F25 · M Sport · 19"',         width: '8.0J', diameter: '19"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2010–2017 · F25 · standard · 18"',         width: '7.5J', diameter: '18"', offset: 'ET38', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.25 bolt',
    torque: '120 Nm',
    notes: 'BMW 5×112 bolt pattern is shared with Mercedes-Benz GLC / GLE and some Audi models, but rim offset (ET) differs significantly. Hub-centric rings may be needed if using rims with different centre bore. BMW uses lug bolts — not the lug nuts used by Japanese brands.',
  },

  priceTabs: [
    {
      size: '245/50R18',
      tabLabel: '245/50R18 · X3 标准版 18"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" SUV 性能胎 · X3 日常通勤实惠选择',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang SP-9 Cross',
        waText: 'BMW X3 245%2F50R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · 静音 · X3 标准版最受好评选择',
        price: 218,
        also: 'Also: Bridgestone Turanza T005, Pirelli Scorpion Verde',
        waText: 'BMW X3 245%2F50R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'BMW OE 认证品牌 · 豪华 SUV 最佳均衡选择',
        price: 288,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 6 SUV',
        waText: 'BMW X3 245%2F50R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $472–$570 · Mid-range $872–$1,000 · Premium $1,152–$1,340',
    },
    {
      size: '245/45R19',
      tabLabel: '245/45R19 · M Sport / xDrive30i 19"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" UHP SUV 胎 · X3 M Sport 预算首选',
        price: 148,
        also: 'Also: Kumho Ecsta PS91, Nankang SP-9 UHP',
        waText: 'BMW X3 M Sport 245%2F45R19 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" SUV 顶级选择 · 干湿地操控全面领先',
        price: 258,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'BMW X3 M Sport 245%2F45R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'X3 M Sport 最配 · 干地极限 + 湿地 A 级',
        price: 328,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 6 SUV',
        waText: 'BMW X3 M Sport 245%2F45R19 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $1,032–$1,200 · Premium $1,312–$1,540',
    },
  ],

  radarSize: '245/50R18',
  radarSource: 'Hankook (11 reviews) · Continental (19 reviews) · Michelin (15 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 76, 74, 68, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 92, 84, 80, 86, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 82, 86, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'X3 标准版（245/50R18）',
      color: 'blue',
      genKey: 'g01',
      body: 'X3 标准版原配 <strong>245/50R18</strong>，扁平比 50 侧壁较高，乘坐舒适度比 M Sport 的 45 系列好。Continental SportContact 6（$218/条）是新加坡 X3 车主综合好评最高的选择——18" SUV 尺码干地抓地极出色，湿地 A 级，整套约 $872。追求极致安全的选 Michelin Pilot Sport 4S（$288/条），整套约 $1,152。',
    },
    {
      title: 'M Sport / xDrive30i 车主（245/45R19）',
      color: 'red',
      genKey: 'g01',
      body: 'X3 M Sport 配 <strong>245/45R19</strong>，19" 尺码加上低扁平比，操控响应更锐利。Continental SportContact 6（$258/条，整套 $1,032）是 M Sport 车主最推荐的品牌。须注意：19" 轮胎比 18" 贵约 20-30%，且侧壁更薄，遇大坑更容易出现碰圈（rim damage）。新加坡路况不算完美，建议行驶中避开水坑边缘和减速带角落。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the BMW X3 use in Singapore?',
      a: 'BMW X3 G01 3rd gen (2017–2024) and G45 4th gen (2024+): standard xDrive20i uses 245/50R18; M Sport and xDrive30i use 245/45R19. F25 2nd gen (2010–2017): similar sizes. Always confirm your trim level and check the door jamb sticker.',
    },
    {
      q: 'What is the bolt pattern of the BMW X3?',
      a: 'All BMW X3 generations use 5×112 bolt pattern with 66.6mm centre bore. BMW uses lug BOLTS (not nuts) with M14×1.25 thread, torque 120 Nm.',
    },
    {
      q: 'How much does it cost to replace BMW X3 tyres in Singapore?',
      a: 'For 245/50R18 (standard): budget from $118 per tyre installed; mid-range $218–$245; premium $288–$330. Full set of 4: approximately $472–$1,340. For M Sport 245/45R19: budget from $148; mid $258–$290; premium $328–$380. Full set: approximately $592–$1,540.',
    },
    {
      q: 'Do BMW X3 tyres need to be run-flat?',
      a: 'The G01 X3 comes with run-flat tyres (RFT) as OE standard. Switching to regular tyres is common and accepted — just ensure you carry a tyre inflation kit since the X3 has no spare tyre bay. Many X3 owners prefer non-RFT for the better ride comfort and lower replacement cost.',
    },
    {
      q: 'Can I use the same tyres from BMW X3 on a Mercedes GLC?',
      a: 'Both use 5×112 bolt pattern, so rim compatibility is possible with proper hub-centric rings and verified offsets. However, tyres themselves are interchangeable if the size is the same — e.g., Continental SportContact 6 245/50R18 fits both. Tyre brands like Michelin, Continental, and Pirelli supply OE tyres to both BMW and Mercedes.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/50R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 245/50R18',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/50R18',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '288', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 245/45R19',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 245/45R19',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 245/45R19',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '328', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
