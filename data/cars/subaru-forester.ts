import type { CarData } from './types'

const data: CarData = {
  make: 'Subaru',
  model: 'Forester',
  makeSlug: 'subaru',
  modelSlug: 'forester',
  bgWord: 'FORESTER',

  seo: {
    title: 'Subaru Forester Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Subaru Forester SK (2018+) uses 225/60R17. SJ (2013–2018) uses 225/55R17. 5×100 bolt pattern — NOT 5×114.3. Must replace all 4 tyres due to Symmetrical AWD. From $88 in SG.',
    ogDescription: 'Subaru Forester tyre sizes: SK uses 225/60R17; SJ uses 225/55R17. 5×100 bolt pattern, 56.1mm CB. Replace all 4 — Symmetrical AWD requirement. From $88 installed.',
    twitterDescription: 'Subaru Forester SK uses 225/60R17; SJ uses 225/55R17. 5×100 bolt. Must replace all 4 tyres. From $88 in Singapore.',
    priceFrom: 88,
    oeSize: '225/60R17',
  },

  defaultGen: 'sk',

  generations: [
    {
      key: 'sk',
      label: 'SK 5th Gen (2018–2024)',
      years: '2018–2024',
      note: 'Subaru Symmetrical AWD: always replace all 4 tyres together. Even 2/32" tread depth difference between front and rear can damage the centre differential.',
      heroChips: [
        { label: 'i-L / i-S / EyeSight', value: '225/60R17' },
        { label: 'Sport / XT top',       value: '225/50R18' },
        { label: 'From installed',        value: '$88', green: true },
      ],
      variants: [
        { name: '2.0i-L / 2.0i-S / EyeSight (most SG trims)', sizes: [
          { tag: 'OE',  size: '225/60R17' },
          { tag: 'Alt', size: '235/55R17', note: '宽 10mm，高度相近，常见升级' },
        ]},
        { name: '2.0 Sport / XT turbo (top trim, 18")', sizes: [
          { tag: 'OE',  size: '225/50R18' },
          { tag: 'Alt', size: '235/45R18', note: '更宽运动感，需确认轮拱间隙' },
        ]},
      ],
    },
    {
      key: 'sj',
      label: 'SJ 4th Gen (2013–2018)',
      years: '2013–2018',
      note: 'Subaru Symmetrical AWD: always replace all 4 tyres at once.',
      heroChips: [
        { label: 'All SG trims', value: '225/55R17' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '2.0i / 2.0i-L / 2.0i-S / XT (all SG)', sizes: [
          { tag: 'OE',  size: '225/55R17' },
          { tag: 'Alt', size: '225/60R17', note: '高 10mm，更舒适，同孔位可装' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2018–2024 · SK · Sport / XT · 18"',    width: '7.5J', diameter: '18"', offset: 'ET55', boltPattern: '5×100' },
    { label: '2018–2024 · SK · i-L / i-S · 17"',     width: '7.0J', diameter: '17"', offset: 'ET55', boltPattern: '5×100' },
    { label: '2013–2018 · SJ · all trims · 17"',      width: '7.0J', diameter: '17"', offset: 'ET55', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M12×1.25',
    torque: '89 Nm',
    warning: 'Subaru uses 5×100 bolt pattern — NOT compatible with Honda (5×114.3), Nissan (5×114.3), or Toyota (5×114.3 / 4×100). Centre bore 56.1mm is narrower than most Japanese brands. ⚠️ Symmetrical AWD: always replace all 4 tyres together; mismatched tread depths can damage the centre differential.',
  },

  priceTabs: [
    {
      size: '225/60R17',
      tabLabel: '225/60R17 · SK 主力尺码',
      budget: {
        name: 'Hankook Kinergy 4S2 H750',
        desc: '17" 日常 SUV 用途 · 耐磨静音 · Forester 价格实惠选择',
        price: 88,
        also: 'Also: Kumho Ecsta HS51, Blackhawk Street-H HH11',
        waText: 'Subaru Forester SK 225%2F60R17 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · 湿地 A 级 · 户外爱好者 Forester 首选',
        price: 138,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Subaru Forester SK 225%2F60R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: 'Wet grip A 级 · 最佳湿地安全 · Subaru AWD 全套换装首选',
        price: 178,
        also: 'Also: Pirelli Scorpion Verde, Goodyear EfficientGrip Performance 2 SUV',
        waText: 'Subaru Forester SK 225%2F60R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $352–$430 · Mid-range $552–$640 · Premium $712–$820',
    },
    {
      size: '225/55R17',
      tabLabel: '225/55R17 · SJ 4th gen',
      budget: {
        name: 'Hankook Kinergy 4S2 H750',
        desc: '17" 舒适 SUV 胎 · SJ Forester 日常代步推荐',
        price: 88,
        also: 'Also: Kumho Ecsta HS51, Nankang NS-25',
        waText: 'Subaru Forester SJ 225%2F55R17 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '湿地 A 级 · 静音耐磨 · SJ 车主好评最多',
        price: 138,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Subaru Forester SJ 225%2F55R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地安全 · 4 条全换 AWD 安心方案',
        price: 178,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'Subaru Forester SJ 225%2F55R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $352–$430 · Mid-range $552–$640 · Premium $712–$820',
    },
  ],

  radarSize: '225/60R17',
  radarSource: 'Hankook (13 reviews) · Bridgestone (21 reviews) · Michelin (16 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [66, 74, 76, 68, 74, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy 4S2 H750',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '76', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [80, 84, 82, 78, 84, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [86, 88, 82, 80, 82, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'Wear', v: '82', hi: true }, { k: 'Value', v: '72', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Forester SK 车主（225/60R17，必须 4 条全换）',
      color: 'blue',
      genKey: 'sk',
      body: 'SK Forester 配 Subaru Symmetrical AWD，<strong>必须全套 4 条同时更换</strong>，不能只换 2 条。前后轮胎直径相差超过 2/32"（约 1.6mm）会造成中央差速器长期在过载状态运转，修理费用昂贵。Bridgestone Turanza T005（$138/条，整套 $552）是新加坡最多 Forester 车主好评的选择——湿地 A 级，静音，适合新加坡多雨环境。若预算充足，Michelin Primacy 4+（$178/条）湿地制动更短，适合经常上高速或郊外的驾驶风格。',
    },
    {
      title: 'Forester SJ 车主（225/55R17，同样须 4 条全换）',
      color: 'blue',
      genKey: 'sj',
      body: 'SJ Forester 原配 <strong>225/55R17</strong>，尺码与 SK 的 225/60R17 高度有差异，不可混用。同样因为 AWD 系统要求，请 4 条统一型号同时更换。Bridgestone Turanza T005（$138/条）是热门首选；若想换成更高侧壁的 225/60R17，技术上在 17" 圈上可行（外径仅大约 1.4%），但需向店家确认轮拱间隙，并建议更新 speedometer calibration。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Subaru Forester use in Singapore?',
      a: 'Subaru Forester SK 5th gen (2018–2024): most trims (i-L, i-S, EyeSight) use 225/60R17; Sport and XT top trims use 225/50R18. Forester SJ 4th gen (2013–2018): all Singapore trims use 225/55R17. Check the door jamb sticker for your exact size.',
    },
    {
      q: 'What is the bolt pattern of the Subaru Forester?',
      a: 'All Subaru Forester generations use 5×100 bolt pattern with 56.1mm centre bore. Lug nut thread is M12×1.25 (finer pitch than most Japanese cars which use M12×1.5). Tightening torque is 89 Nm. Important: 5×100 is NOT compatible with Honda, Nissan, Toyota (5×114.3) or even some Subaru models — always confirm before swapping rims.',
    },
    {
      q: 'Do I need to replace all 4 tyres on a Subaru Forester at once?',
      a: 'Yes. Subaru Symmetrical AWD requires all 4 tyres to be within 2/32" (approximately 1.6mm) of tread depth. Replacing only 2 tyres causes a permanent diameter mismatch between axles, forcing the centre differential to compensate continuously. This leads to premature wear and expensive differential damage. Always replace the full set of 4, and use the same brand and model.',
    },
    {
      q: 'How much does it cost to replace Subaru Forester tyres in Singapore?',
      a: 'For 225/60R17 (SK most common): budget from $88 per tyre installed; mid-range $138–$155; premium $178–$210. A full set of 4 mid-range tyres costs approximately $552–$640. For 225/55R17 (SJ): similar pricing. Remember: always budget for 4 tyres, not 2, due to AWD requirements.',
    },
    {
      q: 'Can I use rims from a Toyota or Honda on a Subaru Forester?',
      a: 'No. Subaru Forester uses 5×100 bolt pattern with 56.1mm centre bore. Toyota uses 5×114.3 or 4×100, Honda uses 5×114.3, and Nissan uses 5×114.3 — all incompatible. Even within Subaru, some models use different offsets. Rims compatible with the Forester include other Subaru models (XV, Legacy, Outback) with the same 5×100 pattern, and some older VW/Audi 5×100 models (but check offset and CB).',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 H750 225/60R17',  brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 225/60R17',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/60R17',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 H750 225/55R17', brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 225/55R17',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/55R17',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
