import type { CarData } from './types'

const data: CarData = {
  make: 'Audi',
  model: 'Q7',
  makeSlug: 'audi',
  modelSlug: 'q7',
  bgWord: 'AUDIQ7',

  seo: {
    title: 'Audi Q7 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Audi Q7 4M (2016+) uses 235/65R18 (base) or 255/50R20 (S line). 5×112 bolt, 66.5mm CB. From $128 installed in Singapore.',
    ogDescription: 'Audi Q7 4M: 235/65R18 (base 45 TFSI), 255/55R19 (advanced), 285/45R20 (S line), 285/40R22 (S line+). 5×112, 66.5mm CB. From $128 installed.',
    twitterDescription: 'Audi Q7 uses 235/65R18 (base) or 285/45R20 (S line). 5×112 bolt, 66.5mm CB. From $128 installed.',
    priceFrom: 128,
    oeSize: '255/55R19',
  },

  defaultGen: '4m',

  generations: [
    {
      key: '4m',
      label: '4M 2nd Gen (2016–2026)',
      years: '2016–2026',
      note: 'Q7 4M facelift (2020+) offers 45 TFSI, 55 TFSI, and PHEV 60 TFSIe. Weighs 2,100–2,430 kg. XL tyres recommended for all variants.',
      heroChips: [
        { label: '45 TFSI base OE',  value: '235/65R18' },
        { label: '55 TFSI mid OE',   value: '255/55R19' },
        { label: 'S line OE',        value: '285/45R20' },
        { label: 'From installed',    value: '$128', green: true },
      ],
      variants: [
        { name: '45 TFSI base (18")', sizes: [
          { tag: 'OE',  size: '235/65R18' },
          { tag: 'Alt', size: '255/55R19', note: '升 19"，mid 同款' },
        ]},
        { name: '55 TFSI advanced (19")', sizes: [
          { tag: 'OE',  size: '255/55R19' },
          { tag: 'Alt', size: '285/45R20', note: '升 20"，S line 同款' },
        ]},
        { name: 'S line (20")', sizes: [
          { tag: 'OE',  size: '285/45R20' },
        ]},
        { name: 'S line+ (22")', sizes: [
          { tag: 'OE',  size: '285/40R22' },
        ]},
      ],
    },
    {
      key: '4l',
      label: '4L 1st Gen (2006–2015)',
      years: '2006–2015',
      heroChips: [
        { label: 'base OE',   value: '235/65R17' },
        { label: 'S line OE', value: '255/55R18' },
        { label: 'From installed', value: '$108', green: true },
      ],
      variants: [
        { name: '3.0 TDI / 3.6 FSI base (17")', sizes: [
          { tag: 'OE',  size: '235/65R17' },
          { tag: 'Alt', size: '255/55R18', note: '升 18"' },
        ]},
        { name: 'S line (18")', sizes: [
          { tag: 'OE',  size: '255/55R18' },
          { tag: 'Alt', size: '275/45R20', note: '升 20"' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2016+ · 4M · S line+ · 22"',  width: '10.0J', diameter: '22"', offset: 'ET27', boltPattern: '5×112' },
    { label: '2016+ · 4M · S line · 20"',   width: '9.0J',  diameter: '20"', offset: 'ET27', boltPattern: '5×112' },
    { label: '2016+ · 4M · mid · 19"',      width: '8.5J',  diameter: '19"', offset: 'ET27', boltPattern: '5×112' },
    { label: '2016+ · 4M · base · 18"',     width: '8.0J',  diameter: '18"', offset: 'ET27', boltPattern: '5×112' },
    { label: '2006–2015 · 4L · S line · 18"', width: '8.0J', diameter: '18"', offset: 'ET30', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.5mm',
    stud: 'M14×1.5 bolt',
    torque: '120 Nm',
    notes: 'Audi Q7 uses 5×112 bolt pattern, 66.5mm centre bore — same as Audi A6/A8, Porsche Macan, and VW Touareg. Note: this 66.5mm CB is different from Audi A3 (57.1mm). Q7 is a heavy vehicle (2,100–2,430 kg) — XL-rated tyres recommended. M14×1.5 lug bolts, torque 120 Nm.',
  },

  priceTabs: [
    {
      size: '255/55R19',
      tabLabel: '255/55R19 · 4M 中配主力尺码',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '19" 大型豪华 SUV 胎 · Q7 预算首选',
        price: 148,
        also: 'Also: Kumho Crugen HP71, Bridgestone Dueler HP Sport',
        waText: 'Audi Q7 255%2F55R19 budget tyre quote (Hankook Dynapro or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '19" SUV 综合最强 · 干湿地均衡 · Q7 首选',
        price: 258,
        also: 'Also: Michelin Pilot Sport 4 SUV, Bridgestone Alenza 001',
        waText: 'Audi Q7 255%2F55R19 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '19" 顶级豪华 SUV · Q7 操控性能最大化',
        price: 348,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 5 SUV',
        waText: 'Audi Q7 255%2F55R19 premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $592–$720 · Mid-range $1,032–$1,200 · Premium $1,392–$1,600',
    },
    {
      size: '235/65R18',
      tabLabel: '235/65R18 · 4M base 入门版',
      budget: {
        name: 'Hankook Dynapro HP2',
        desc: '18" 豪华 SUV 胎 · Q7 45 TFSI 基础版',
        price: 128,
        also: 'Also: Kumho Crugen HP71, Bridgestone Dueler',
        waText: 'Audi Q7 235%2F65R18 base budget tyre quote (Hankook Dynapro or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001',
        desc: '18" 豪华 SUV 静音耐磨 · Q7 通勤首选',
        price: 228,
        also: 'Also: Continental CrossContact RX, Michelin Pilot Sport 4 SUV',
        waText: 'Audi Q7 235%2F65R18 base mid-range tyre quote (Bridgestone Alenza 001 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '18" 豪华 SUV 顶级 · Q7 驾驶感升级最明显',
        price: 308,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde',
        waText: 'Audi Q7 235%2F65R18 base premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $512–$640 · Mid-range $912–$1,080 · Premium $1,232–$1,440',
    },
  ],

  radarSize: '255/55R19',
  radarSource: 'Continental (12 reviews) · Michelin (10 reviews) · Bridgestone (9 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '6.9',
      scores: [66, 72, 74, 76, 70, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
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
      title: 'Q7 4M（255/55R19）— 大型豪华 SUV 换胎，XL 必须',
      color: 'blue',
      genKey: '4m',
      body: 'Q7 4M 整备重 2,100–2,430 kg（60 TFSIe 超过 2,400 kg），<strong>必须使用 XL 承载等级轮胎（LI 113+）</strong>。Continental CrossContact RX（$258/条，255/55R19）是干湿地综合最佳的 Q7 换胎选择，耐磨性优秀，整套约 $1,032。Michelin Pilot Sport 4 SUV（$348/条）操控极限更高，湿地 A 级，适合追求性能的 Q7 S line 车主。<strong>S line 20"（285/45R20）</strong>在新加坡货源相对有限，建议提前 1–2 周预订。',
    },
    {
      title: 'Q7 4L（2006–2015）— 老款 Q7 配件仍充足',
      color: 'red',
      genKey: '4l',
      body: '4L Q7 在新加坡路面保有量仍不少，18"（255/55R18）是最主流尺码，货源充足。Bridgestone Alenza 001（$228/条）是老款 Q7 换胎的稳定选择，静音和耐磨均衡。<strong>注意：</strong>4L Q7 使用 5×130（早期型号），而非 5×112。请在换轮圈或选配件前确认你的 Q7 年份，2006–2015 年之间有不同批次，部分型号螺栓孔不同。（注：4L 早期用 5×130，4L 2010 后期款和 4M 全系用 5×112。）',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Audi Q7 use in Singapore?',
      a: 'Audi Q7 4M (2016+): 45 TFSI base uses 235/65R18; 55 TFSI advanced uses 255/55R19; S line uses 285/45R20; S line+ uses 285/40R22. 4L 1st Gen (2006–2015): base uses 235/65R17; S line uses 255/55R18. 4M uses 5×112, 66.5mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Audi Q7?',
      a: 'Audi Q7 4M (2016+) uses 5×112 bolt pattern, 66.5mm centre bore, M14×1.5 lug bolts, torque 120 Nm. Same as Audi A6/A8, Porsche Macan, and VW Touareg. Note: early Audi Q7 4L (2006–2009 models) may use 5×130 — verify before ordering aftermarket rims.',
    },
    {
      q: 'How much does it cost to replace Audi Q7 tyres in Singapore?',
      a: 'For 255/55R19 (Q7 mid trim): budget from $148/tyre; mid-range $258; premium $348. Full set: $592–$1,392. For 235/65R18 (base): from $128/tyre; premium $308. S line 20" (285/45R20): from $168/tyre; premium $388. XL-rated tyres required for PHEV variants (>2,400 kg).',
    },
    {
      q: 'Can I use Porsche Macan rims on an Audi Q7?',
      a: 'Porsche Macan also uses 5×112 and 66.5mm centre bore — so bolt compatibility exists. However, Macan rim widths, diameters (19"–21"), and offsets are specifically sized for the Macan\'s suspension geometry. Direct cross-fitment on a Q7 is not straightforward. Professional verification of rim width, offset, and tyre clearance is essential before attempting.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Dynapro HP2 255/55R19',          brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 255/55R19',  brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 255/55R19',  brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '348', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Dynapro HP2 235/65R18',          brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 235/65R18',       brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 235/65R18',  brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '308', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
