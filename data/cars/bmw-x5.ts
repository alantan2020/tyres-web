import type { CarData } from './types'

const data: CarData = {
  make: 'BMW',
  model: 'X5',
  makeSlug: 'bmw',
  modelSlug: 'x5',
  bgWord: 'X5',

  seo: {
    title: 'BMW X5 Tyre Size & Best Price Singapore | SGCarPass',
    description: 'BMW X5 G05 (2018+) uses 255/50R19 (standard) or 275/40R20 (M Sport/xDrive45e). 5×112 bolt pattern. Large luxury SUV, high-value tyres. From $138 installed in Singapore.',
    ogDescription: 'BMW X5 G05 tyre sizes: 255/50R19 standard, 275/40R20 M Sport. 5×112, 66.6mm CB, M14×1.25 bolt. From $138 installed in Singapore.',
    twitterDescription: 'BMW X5 G05 uses 255/50R19 (standard) or 275/40R20 (M Sport). 5×112 bolt. From $138 installed in Singapore.',
    priceFrom: 138,
    oeSize: '255/50R19',
  },

  defaultGen: 'g05',

  generations: [
    {
      key: 'g05',
      label: 'G05 4th Gen (2018–2026)',
      years: '2018–2026',
      note: 'G05 X5 is one of BMW\'s heaviest models (~2,100kg). Tyre load rating matters — ensure replacements meet or exceed OE load index. M Sport and xDrive45e PHEV may have staggered fitment.',
      heroChips: [
        { label: 'xDrive40i standard 19"', value: '255/50R19' },
        { label: 'M Sport / xDrive45e 20"', value: '275/40R20' },
        { label: 'From installed',          value: '$138', green: true },
      ],
      variants: [
        { name: 'xDrive40i standard (19")', sizes: [
          { tag: 'OE',  size: '255/50R19' },
          { tag: 'Alt', size: '265/45R19', note: '宽 10mm，高度相近，同等承重' },
        ]},
        { name: 'M Sport front (staggered 20")', sizes: [
          { tag: 'OE',  size: '275/40R20' },
        ]},
        { name: 'M Sport rear (staggered 20")', sizes: [
          { tag: 'OE',  size: '315/35R20' },
          { tag: 'Alt', size: '305/35R20', note: '货源较多，略窄' },
        ]},
        { name: 'xDrive45e PHEV (non-staggered 20")', sizes: [
          { tag: 'OE',  size: '275/40R20' },
        ]},
      ],
    },
    {
      key: 'f15',
      label: 'F15 3rd Gen (2013–2018)',
      years: '2013–2018',
      heroChips: [
        { label: 'xDrive35i standard', value: '255/50R19' },
        { label: 'M Sport / top',      value: '275/40R20' },
        { label: 'From installed',     value: '$138', green: true },
      ],
      variants: [
        { name: 'xDrive35i standard (19")', sizes: [
          { tag: 'OE',  size: '255/50R19' },
          { tag: 'Alt', size: '265/45R19', note: '宽 10mm 升级选项' },
        ]},
        { name: 'M Sport (20")', sizes: [
          { tag: 'OE',  size: '275/40R20' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2018–2026 · G05 · M Sport · rear 20"',      width: '11.0J', diameter: '20"', offset: 'ET37', boltPattern: '5×112' },
    { label: '2018–2026 · G05 · M Sport · front 20"',     width: '9.5J',  diameter: '20"', offset: 'ET40', boltPattern: '5×112' },
    { label: '2018–2026 · G05 · standard · 19"',           width: '9.0J',  diameter: '19"', offset: 'ET44', boltPattern: '5×112' },
    { label: '2013–2018 · F15 · M Sport · 20"',            width: '9.5J',  diameter: '20"', offset: 'ET38', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.25 bolt',
    torque: '120 Nm',
    warning: '⚠️ X5 G05 weighs ~2,100kg (PHEV ~2,400kg). Always ensure replacement tyres meet or exceed OE load index (typically 100+ for 19" and 101+ for 20"). Low load-index budget tyres can be dangerous. ⚠️ Staggered M Sport (front 275/40R20, rear 315/35R20): never swap front/rear — severely different sizes. ⚠️ PHEV xDrive45e: replace all 4 tyres at once.',
  },

  priceTabs: [
    {
      size: '255/50R19',
      tabLabel: '255/50R19 · xDrive40i 标准 19"',
      budget: {
        name: 'Hankook Ventus S1 Evo3 SUV',
        desc: '19" 大型 SUV 胎 · X5 标准版实惠入门',
        price: 138,
        also: 'Also: Kumho Ecsta PS91 SUV, Nankang SP-9 Cross',
        waText: 'BMW X5 255%2F50R19 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Continental CrossContact RX',
        desc: '大 SUV 专用 · 湿地制动 + 静音 + 耐磨兼顾 · X5 标准版首选',
        price: 248,
        also: 'Also: Pirelli Scorpion Verde All Season, Bridgestone Alenza Sport',
        waText: 'BMW X5 255%2F50R19 mid-range tyre quote (Continental CrossContact RX or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: 'BMW X5 OE 供应品牌 · 豪华大 SUV 最安全首选',
        price: 338,
        also: 'Also: Pirelli P-Zero PZ4 SUV, Goodyear Eagle F1 Asymmetric 6 SUV',
        waText: 'BMW X5 255%2F50R19 premium tyre quote (Michelin Pilot Sport 4 SUV)',
      },
      setEstimate: 'Budget $552–$680 · Mid-range $992–$1,160 · Premium $1,352–$1,600',
    },
    {
      size: '275/40R20',
      tabLabel: '275/40R20 · M Sport / xDrive45e 20"',
      budget: {
        name: 'Hankook Ventus S1 Evo3 SUV',
        desc: '20" 宽胎 · X5 M Sport 预算首选',
        price: 168,
        also: 'Also: Kumho Ecsta PS91 SUV, Nankang NS-20S',
        waText: 'BMW X5 M Sport 275%2F40R20 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Pirelli P-Zero PZ4',
        desc: '20" UHP SUV · M Sport 干地性能首选 · 新加坡高速最佳表现',
        price: 318,
        also: 'Also: Continental SportContact 6, Goodyear Eagle F1 Asymmetric 6',
        waText: 'BMW X5 M Sport 275%2F40R20 mid-range tyre quote (Pirelli P-Zero PZ4)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '20" 终极豪华 · BMW X5 M Sport 最顶级配胎',
        price: 428,
        also: 'Also: Pirelli P-Zero Corsa, Goodyear Eagle F1 SuperSport',
        waText: 'BMW X5 M Sport 275%2F40R20 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $672–$820 · Mid-range $1,272–$1,480 · Premium $1,712–$2,000',
    },
  ],

  radarSize: '255/50R19',
  radarSource: 'Hankook (10 reviews) · Continental (16 reviews) · Michelin (14 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [66, 74, 72, 66, 72, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '72', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [84, 88, 84, 78, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nCrossContact RX',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [86, 92, 82, 80, 86, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4 SUV',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'X5 标准版（255/50R19，xDrive40i）',
      color: 'blue',
      genKey: 'g05',
      body: 'G05 X5 xDrive40i 标准版原配 <strong>255/50R19</strong>。Continental CrossContact RX（$248/条）是新加坡 X5 标准版车主最推荐的选择——专为大型豪华 SUV 设计，湿地制动 A 级，静音出色，整套约 $992。若追求干地极限操控，Michelin Pilot Sport 4 SUV（$338/条）性能更全面，整套约 $1,352。选胎时请确认承重指数（load index）不低于原配规格。',
    },
    {
      title: 'M Sport / xDrive45e PHEV 车主（275/40R20）',
      color: 'red',
      genKey: 'g05',
      body: 'M Sport X5 配 <strong>275/40R20</strong>（标准）或 staggered 275/40R20 前 + 315/35R20 后（M Competition）。<strong>xDrive45e PHEV 整车约 2,400kg，对胎面承重要求极高</strong>——请务必选择承重指数 ≥ 105 的轮胎，切勿选低档次的轻型胎。Pirelli P-Zero PZ4（$318/条）是 X5 M Sport 最多车主认可的品牌，干地操控极出色，整套约 $1,272。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the BMW X5 use in Singapore?',
      a: 'BMW X5 G05 4th gen (2018+): xDrive40i standard uses 255/50R19; M Sport uses 275/40R20 (square or staggered with 315/35R20 rear on M Competition). F15 3rd gen (2013–2018): similar sizes. Check the door jamb sticker and confirm front/rear sizes for M Sport staggered models.',
    },
    {
      q: 'What is the bolt pattern of the BMW X5?',
      a: 'BMW X5 G05 and F15 use 5×112 bolt pattern with 66.6mm centre bore. Lug bolt thread M14×1.25, torque 120 Nm. BMW uses bolts, not lug nuts.',
    },
    {
      q: 'How much does it cost to replace BMW X5 tyres in Singapore?',
      a: 'For 255/50R19 (standard): budget from $138 per tyre installed; mid-range $248–$278; premium $338–$390. Full set of 4 mid-range: approximately $992–$1,160. For M Sport 275/40R20: budget from $168; mid $318–$360; premium $428–$500. Full set M Sport: approximately $672–$2,000. X5 is a large premium vehicle — budget tyres are a false economy.',
    },
    {
      q: 'Does the BMW X5 PHEV need special tyres?',
      a: 'The xDrive45e PHEV weighs approximately 2,400kg (400kg more than the petrol model). Always ensure replacement tyres meet or exceed the OE load index. Low-load-index budget tyres can overheat and fail under sustained highway speeds with a fully loaded X5 PHEV. Replace all 4 tyres at once for AWD system health.',
    },
    {
      q: 'Can BMW X5 use the same tyres as BMW X3?',
      a: 'No — the X5 uses significantly larger tyres (255/50R19 or 275/40R20) vs X3 (245/50R18 or 245/45R19). The tyre sizes are incompatible. Both share the same 5×112 bolt pattern, but the rim sizes, widths, and offsets are different. Never mix X5 and X3 wheels.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 255/50R19',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental CrossContact RX 255/50R19', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 255/50R19',  brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '338', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 275/40R20',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Pirelli P-Zero PZ4 275/40R20',          brand: { '@type': 'Brand', name: 'Pirelli' },     offers: { '@type': 'Offer', price: '318', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 275/40R20',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '428', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
