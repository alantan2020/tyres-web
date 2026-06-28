import type { CarData } from './types'

const data: CarData = {
  make: 'Mercedes-Benz',
  model: 'GLB',
  makeSlug: 'mercedes',
  modelSlug: 'glb',
  bgWord: 'GLB',

  seo: {
    title: 'Mercedes-Benz GLB Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mercedes GLB X247 (2019+) uses 235/55R18 (standard) or 255/45R19 (AMG Line). 7-seater compact SUV. 5×112 bolt, M14×1.5. From $108 installed in Singapore.',
    ogDescription: 'Mercedes GLB X247 tyre sizes: 235/55R18 standard, 255/45R19 AMG Line. 7-seater SUV. 5×112, 66.6mm CB, M14×1.5. From $108 installed in Singapore.',
    twitterDescription: 'Mercedes GLB X247 uses 235/55R18 or 255/45R19 AMG Line. 7-seater, 5×112. From $108 installed in Singapore.',
    priceFrom: 108,
    oeSize: '235/55R18',
  },

  defaultGen: 'x247',

  generations: [
    {
      key: 'x247',
      label: 'X247 1st Gen (2019–2026)',
      years: '2019–2026',
      note: 'GLB is Mercedes\' only 7-seater in the compact SUV segment. Higher load from 7 occupants — ensure tyres meet OE load index. Run-flat tyres standard.',
      heroChips: [
        { label: 'GLB 200 / 250 4MATIC', value: '235/55R18' },
        { label: 'AMG Line 19"',          value: '255/45R19' },
        { label: 'From installed',         value: '$108', green: true },
      ],
      variants: [
        { name: 'GLB 200 / 250 4MATIC Avantgarde (18")', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '245/50R18', note: '宽 10mm，同外径' },
        ]},
        { name: 'GLB 250 AMG Line / AMG GLB 35 (19")', sizes: [
          { tag: 'OE',  size: '255/45R19' },
          { tag: 'Alt', size: '265/40R19', note: '宽 10mm，需确认轮拱间隙' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019–2026 · X247 · AMG Line · 19"',  width: '8.5J', diameter: '19"', offset: 'ET42', boltPattern: '5×112' },
    { label: '2019–2026 · X247 · standard · 18"',   width: '7.5J', diameter: '18"', offset: 'ET42', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'GLB X247 shares 5×112 bolt pattern with GLC X253/X254. However, offset values differ. GLB uses identical tyre sizes (235/55R18 / 255/45R19) as the GLC — tyres are directly interchangeable; rims require offset verification. Mercedes M14×1.5 bolt — NOT BMW M14×1.25.',
  },

  priceTabs: [
    {
      size: '235/55R18',
      tabLabel: '235/55R18 · GLB 200 / 250 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 7座 SUV 胎 · GLB 入门实惠，足够日常通勤',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang SP-9 Cross',
        waText: 'Mercedes GLB 235%2F55R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '7座 SUV 湿地安全首选 · 新加坡 GLB 最受好评',
        price: 198,
        also: 'Also: Bridgestone Turanza T005, Pirelli Scorpion Verde',
        waText: 'Mercedes GLB 235%2F55R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '7座满载安全 · 最佳湿地制动 · GLB 全家出行首选',
        price: 268,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 6 SUV',
        waText: 'Mercedes GLB 235%2F55R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $792–$920 · Premium $1,072–$1,240',
    },
    {
      size: '255/45R19',
      tabLabel: '255/45R19 · AMG Line / AMG GLB 35',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '19" UHP SUV 胎 · GLB AMG Line 预算首选',
        price: 138,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-20S',
        waText: 'Mercedes GLB AMG Line 255%2F45R19 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '19" 操控 + 湿地安全 · AMG Line GLB 最推荐',
        price: 258,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P-Zero PZ4',
        waText: 'Mercedes GLB AMG Line 255%2F45R19 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: 'AMG GLB 35 最配 · 满载 7 人高速行驶最安全',
        price: 338,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Mercedes GLB AMG 255%2F45R19 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $1,032–$1,200 · Premium $1,352–$1,600',
    },
  ],

  radarSize: '235/55R18',
  radarSource: 'Hankook (10 reviews) · Continental (16 reviews) · Michelin (14 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 76, 74, 68, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 90, 84, 80, 86, 70], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 80, 86, 66], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'GLB 200 / 250 4MATIC 标准版（235/55R18）',
      color: 'blue',
      genKey: 'x247',
      body: 'GLB 是 Mercedes 家族中唯一的 7 座紧凑型 SUV，标准版原配 <strong>235/55R18</strong>。7 人满载时轮胎承受的侧向载荷更大，建议优先考虑中档以上品牌。Continental SportContact 6（$198/条）是新加坡 GLB 车主最多好评的选择——湿地 A 级，静音出色，整套约 $792。7 座家庭用车若预算允许，Michelin Pilot Sport 4S（$268/条）在满载制动方面表现更突出。',
    },
    {
      title: 'AMG Line / AMG GLB 35 车主（255/45R19）',
      color: 'red',
      genKey: 'x247',
      body: 'AMG Line 和 AMG GLB 35 配 <strong>255/45R19</strong>，19" 低扁平比带来更锐利的驾驶感。需注意：7 座 SUV 满载时重心较高，宽胎操控优势更明显，但侧壁薄的 19" 胎遇到减速带和坑洞时碰圈风险也更高。Continental SportContact 6（$258/条）是最受好评的 19" 选择，整套约 $1,032。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mercedes GLB use in Singapore?',
      a: 'Mercedes GLB X247 (2019+): GLB 200 and GLB 250 4MATIC Avantgarde use 235/55R18; AMG Line and AMG GLB 35 use 255/45R19. GLB has only one generation currently available in Singapore.',
    },
    {
      q: 'What is the bolt pattern of the Mercedes GLB?',
      a: 'Mercedes GLB X247 uses 5×112 bolt pattern with 66.6mm centre bore. Bolt thread M14×1.5, torque 130 Nm.',
    },
    {
      q: 'How much does it cost to replace Mercedes GLB tyres in Singapore?',
      a: 'For 235/55R18 (most common): budget from $108 per tyre installed; mid-range $198–$225; premium $268–$308. Full set of 4: approximately $432–$1,240. For AMG Line 255/45R19: budget from $138; mid $258–$290; premium $338–$390.',
    },
    {
      q: 'Are GLB and GLC tyres interchangeable?',
      a: 'Yes — GLB and GLC use identical tyre sizes (235/55R18 standard, 255/45R19 AMG Line). Any tyre that fits a GLC will fit a GLB of the same size. However, the rim dimensions and offsets differ between the two models — rims are NOT directly interchangeable without verifying offset values.',
    },
    {
      q: 'Is the Mercedes GLB suitable as a 7-seater family car in Singapore?',
      a: 'Yes. The GLB X247 offers genuine 7-seat capability (the 3rd row is functional for children or short-distance adult use), making it popular among Singapore families. The 235/55R18 tyre size is well-suited for carrying 7 occupants — the higher aspect ratio provides a comfortable ride for all passengers. Upgrade to mid-range or premium tyres for better wet-weather safety with a full load.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/55R18',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 235/55R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 235/55R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 255/45R19',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 255/45R19', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 255/45R19',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '338', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
