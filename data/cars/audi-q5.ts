import type { CarData } from './types'

const data: CarData = {
  make: 'Audi',
  model: 'Q5',
  makeSlug: 'audi',
  modelSlug: 'q5',
  bgWord: 'Q5',

  seo: {
    title: 'Audi Q5 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Audi Q5 FY (2017+) uses 255/45R20 (standard) or 255/40R21 (S-Line). Q5 TFSI e PHEV: replace all 4 tyres together. 5×112, 66.6mm CB. From $138 installed Singapore.',
    ogDescription: 'Audi Q5 FY tyre sizes: 255/45R20 standard, 255/40R21 S-Line. PHEV: replace all 4. 5×112, 66.6mm CB. From $138 installed Singapore.',
    twitterDescription: 'Audi Q5 FY uses 255/45R20 (standard) or 255/40R21 (S-Line). PHEV requires all 4 tyres same brand. From $138 in Singapore.',
    priceFrom: 138,
    oeSize: '255/45R20',
  },

  defaultGen: 'fy-fl',

  generations: [
    {
      key: 'fy-fl',
      label: 'FY FL (2020–2026)',
      years: '2020–2026',
      note: 'FY FL Q5 is available as 45 TFSI (petrol) and TFSI e (PHEV). PHEV version ~2,200kg — always replace all 4 tyres together. 20" standard on most Singapore trims.',
      heroChips: [
        { label: 'Q5 / Advanced 20"',    value: '255/45R20' },
        { label: 'S-Line 21"',            value: '255/40R21' },
        { label: 'From installed',        value: '$138', green: true },
      ],
      variants: [
        { name: 'Q5 Advanced / Sport (20")', sizes: [
          { tag: 'OE',  size: '255/45R20' },
          { tag: 'Alt', size: '265/40R20', note: '宽 10mm，需确认轮拱间隙' },
        ]},
        { name: 'Q5 S-Line (21")', sizes: [
          { tag: 'OE',  size: '255/40R21' },
          { tag: 'Alt', size: '265/35R21', note: '宽 10mm，更激进外观' },
        ]},
      ],
    },
    {
      key: 'fy',
      label: 'FY 1st Gen (2017–2020)',
      years: '2017–2020',
      note: 'FY original Q5. Some trims shipped with 19" standard in Singapore.',
      heroChips: [
        { label: 'Q5 standard 19"', value: '235/55R19' },
        { label: 'S-Line 20"',      value: '255/45R20' },
        { label: 'From installed',  value: '$128', green: true },
      ],
      variants: [
        { name: 'Q5 standard (19")', sizes: [
          { tag: 'OE',  size: '235/55R19' },
          { tag: 'Alt', size: '245/50R19', note: '宽 10mm' },
        ]},
        { name: 'S-Line (20")', sizes: [
          { tag: 'OE',  size: '255/45R20' },
          { tag: 'Alt', size: '265/40R20', note: '宽 10mm' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2020–2026 · FY FL · S-Line · 21"',   width: '9.0J', diameter: '21"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2020–2026 · FY FL · standard · 20"',  width: '8.5J', diameter: '20"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2017–2020 · FY · S-Line · 20"',      width: '8.5J', diameter: '20"', offset: 'ET38', boltPattern: '5×112' },
    { label: '2017–2020 · FY · standard · 19"',     width: '8.0J', diameter: '19"', offset: 'ET38', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    warning: '⚠️ Q5 TFSI e PHEV (~2,200kg, quattro AWD): always replace all 4 tyres together — same brand, model, and tread depth within 2/32". Mixing tyre wear levels damages the Torsen differential. Load index must meet or exceed OE specification.',
  },

  priceTabs: [
    {
      size: '255/45R20',
      tabLabel: '255/45R20 · Q5 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '20" 豪华 SUV 胎 · Q5 入门实惠选择',
        price: 138,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'Audi Q5 255%2F45R20 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '20" SUV 专项研发 · 干湿地均衡 · Q5 最受好评 SUV 胎',
        price: 248,
        also: 'Also: Pirelli Scorpion Verde, Bridgestone Alenza 001',
        waText: 'Audi Q5 255%2F45R20 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: 'Q5 旗舰 SUV 配胎 · 性能操控兼顾舒适',
        price: 338,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Continental SportContact 6 SUV',
        waText: 'Audi Q5 255%2F45R20 premium tyre quote (Michelin Pilot Sport 4 SUV)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $992–$1,160 · Premium $1,352–$1,600',
    },
    {
      size: '255/40R21',
      tabLabel: '255/40R21 · Q5 S-Line 21"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '21" UHP SUV 胎 · Q5 S-Line 预算首选',
        price: 168,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'Audi Q5 S-Line 255%2F40R21 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '21" 极致操控 + 湿地 A 级 · S-Line 最推荐',
        price: 298,
        also: 'Also: Pirelli P-Zero PZ4, Bridgestone Potenza Sport',
        waText: 'Audi Q5 S-Line 255%2F40R21 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'S-Line Q5 最顶级配胎 · 旗舰 SUV 操控终极体验',
        price: 388,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Audi Q5 S-Line 255%2F40R21 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $672–$820 · Mid-range $1,192–$1,400 · Premium $1,552–$1,820',
    },
  ],

  radarSize: '255/45R20',
  radarSource: 'Hankook (10 reviews) · Continental (15 reviews) · Michelin (13 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 76, 72, 66, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'Wear', v: '72', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.7',
      scores: [86, 90, 86, 82, 88, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nCrossContact RX',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 92, 84, 82, 88, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4 SUV',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Q5 标准版（255/45R20）',
      color: 'blue',
      genKey: 'fy-fl',
      body: 'Q5 FY FL 标准版原配 <strong>255/45R20</strong>，是新加坡豪华 SUV 最常见的 20" 尺码之一。Continental CrossContact RX（$248/条）是针对 SUV 专项研发的顶级选择——SUV 负重、湿地 A 级、静音出色，整套约 $992。若更在意操控，可选 Michelin Pilot Sport 4 SUV（$338/条）。',
    },
    {
      title: 'Q5 TFSI e PHEV 车主（必须 4 条全换）',
      color: 'red',
      genKey: 'fy-fl',
      body: 'Q5 TFSI e PHEV 整车约 2,200kg，配备 quattro 全时四驱（Torsen 差速器）。<strong>必须 4 条同品牌同型号一起换</strong>，前后胎纹差异超过 2/32" 会导致差速器持续承受应力损伤，修复费用极高。建议选 Continental CrossContact RX（$248/条），低滚阻版本还可小幅提升纯电续航。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Audi Q5 use in Singapore?',
      a: 'Audi Q5 FY FL (2020+): most trims use 255/45R20 standard; S-Line uses 255/40R21. FY (2017–2020): 235/55R19 (standard trims) or 255/45R20 (S-Line). Check door jamb sticker to confirm.',
    },
    {
      q: 'What is the bolt pattern of the Audi Q5?',
      a: 'Audi Q5 (FY, FY FL) uses 5×112 bolt pattern with 66.6mm centre bore. Bolt thread M14×1.5, torque 130 Nm.',
    },
    {
      q: 'Does the Audi Q5 TFSI e PHEV require special tyres?',
      a: 'The Q5 TFSI e PHEV weighs ~2,200kg and uses quattro AWD with a Torsen differential. It requires all 4 tyres to be replaced together (same brand, model, tread depth within 2/32"). Mismatched tyre wear strains the differential and can cause expensive damage. Load index must meet or exceed OE specification.',
    },
    {
      q: 'How much does it cost to replace Audi Q5 tyres in Singapore?',
      a: 'For 255/45R20 (most common): budget from $138 per tyre; mid-range $248–$280; premium $338–$385. Full set of 4: approximately $552–$1,600. For S-Line 255/40R21: budget from $168; mid $298–$338; premium $388–$440.',
    },
    {
      q: 'Can I use BMW X3 or Mercedes GLC rims on an Audi Q5?',
      a: 'BMW X3, Mercedes GLC, and Audi Q5 all use 5×112 bolt pattern and similar 66.6mm centre bore. Physical compatibility may be possible, but wheel offsets (ET values) differ significantly — Q5 uses ET38 while BMW X3 and GLC use ET44/ET43. Incorrect offset causes handling issues and potential brake clearance problems. Consult a professional before swapping rims between these brands.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 255/45R20',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 255/45R20',   brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 255/45R20',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '338', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 255/40R21',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 255/40R21',    brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '298', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 255/40R21',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '388', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
