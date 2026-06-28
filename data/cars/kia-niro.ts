import type { CarData } from './types'

const data: CarData = {
  make: 'Kia',
  model: 'Niro',
  makeSlug: 'kia',
  modelSlug: 'niro',
  bgWord: 'NIRO',

  seo: {
    title: 'Kia Niro Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Kia Niro SG3 2nd Gen (2023+) uses 215/55R17. SG2 1st Gen (2017–2022) uses 205/60R16. Niro EV uses 215/55R17. 5×114.3 bolt, 67.1mm CB. From $88 installed.',
    ogDescription: 'Kia Niro SG3 2nd Gen: 215/55R17 (HEV/PHEV/EV). SG2 1st Gen: 205/60R16 (base), 215/55R17 (Hybrid). 5×114.3, 67.1mm CB. From $88 installed.',
    twitterDescription: 'Kia Niro 2nd Gen uses 215/55R17. 1st Gen uses 205/60R16 or 215/55R17. 5×114.3 bolt. From $88 installed.',
    priceFrom: 88,
    oeSize: '215/55R17',
  },

  defaultGen: 'sg3',

  generations: [
    {
      key: 'sg3',
      label: 'SG3 2nd Gen (2023–2026)',
      years: '2023–2026',
      note: 'SG3 Niro available in Hybrid (HEV), PHEV, and EV in Singapore. All use 215/55R17. EV variant weighs ~1,680 kg — recommend low rolling resistance XL-rated tyres.',
      heroChips: [
        { label: 'HEV / PHEV OE', value: '215/55R17' },
        { label: 'EV OE',          value: '215/55R17' },
        { label: 'From installed',  value: '$98', green: true },
      ],
      variants: [
        { name: 'Niro HEV / PHEV (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '225/50R17', note: '稍宽，接地面积更大' },
        ]},
        { name: 'Niro EV (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '215/55R17', note: '推荐选低滚阻型（Michelin e.Primacy 或 Continental EcoContact 6）' },
        ]},
      ],
    },
    {
      key: 'sg2',
      label: 'SG2 1st Gen (2017–2022)',
      years: '2017–2022',
      heroChips: [
        { label: 'base OE',         value: '205/60R16' },
        { label: 'Hybrid mid OE',   value: '215/55R17' },
        { label: 'From installed',   value: '$88', green: true },
      ],
      variants: [
        { name: '1st Gen base / entry (16")', sizes: [
          { tag: 'OE',  size: '205/60R16' },
          { tag: 'Alt', size: '215/55R17', note: '升 17"，Hybrid mid 同款' },
        ]},
        { name: '1st Gen Hybrid / EV mid (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2023+ · SG3 · HEV/PHEV/EV · 17"', width: '7.0J', diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2017–2022 · SG2 · Hybrid · 17"',  width: '7.0J', diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2017–2022 · SG2 · base · 16"',    width: '6.5J', diameter: '16"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5 nut',
    torque: '110 Nm',
    notes: 'Kia Niro uses 5×114.3 bolt pattern, 67.1mm centre bore — same as most Kia and Hyundai models. Note: this 67.1mm CB is slightly larger than Toyota/Lexus (60.1mm) despite same 5×114.3 bolt pattern. Lug NUTS, M12×1.5, torque 110 Nm. Niro EV should use low rolling resistance tyres for best range.',
  },

  priceTabs: [
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · 全系主力尺码',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" 低滚阻节能胎 · Niro HEV/EV 预算首选',
        price: 98,
        also: 'Also: Kumho Solus 4, Nankang AW-1',
        waText: 'Kia Niro 215%2F55R17 budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Michelin e.Primacy',
        desc: '低滚阻旗舰 · Niro EV 续航最优 · 静音湿地安全',
        price: 178,
        also: 'Also: Continental EcoContact 6, Bridgestone Turanza Eco',
        waText: 'Kia Niro 215%2F55R17 mid-range tyre quote (Michelin e.Primacy or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '17" 静音豪华 · 雨天 A 级 · Niro PHEV 首选',
        price: 218,
        also: 'Also: Bridgestone Turanza T005, Continental PremiumContact 7',
        waText: 'Kia Niro 215%2F55R17 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $712–$840 · Premium $872–$1,020',
    },
    {
      size: '205/60R16',
      tabLabel: '205/60R16 · SG2 base 16"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 城市节能胎 · Niro SG2 基础版预算首选',
        price: 88,
        also: 'Also: Nankang Econex NA-1, Bridgestone Ecopia',
        waText: 'Kia Niro SG2 205%2F60R16 base budget tyre quote (Hankook Kinergy or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '16" 静音舒适 · Niro SG2 通勤首选',
        price: 138,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'Kia Niro SG2 205%2F60R16 base mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4',
        desc: '16" 静音安全 · 雨天最佳首选',
        price: 158,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato P7',
        waText: 'Kia Niro SG2 205%2F60R16 base premium tyre quote (Michelin Primacy 4)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $552–$680 · Premium $632–$760',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Michelin (15 reviews) · Continental (12 reviews) · Bridgestone (10 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 78, 76, 72, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ EV Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 84, 90, 80, 84, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\ne.Primacy',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Range', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [88, 88, 88, 80, 84, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Niro EV / HEV（215/55R17）— EV 专属换胎建议',
      color: 'blue',
      genKey: 'sg3',
      body: 'Kia Niro EV 和 HEV 均使用 215/55R17，但选胎策略不同：<strong>EV 版推荐低滚阻型</strong>，Michelin e.Primacy（$178/条）是新加坡 EV 主机厂认证最广泛的低滚阻胎，静音性顶级，整套约 $712。Continental EcoContact 6（$158/条）是更实惠的低滚阻选择，整套约 $632。<strong>HEV/PHEV 版</strong>车主对续航要求不那么严苛，可选 Bridgestone Turanza T005 或 Michelin Primacy 4+——静音日用体验更好。',
    },
    {
      title: 'Niro SG2（2017–2022）— 存量大，16" 换胎实惠',
      color: 'red',
      genKey: 'sg2',
      body: 'SG2 Niro 在新加坡保有量大，16" base 版（205/60R16）和 17" mid（215/55R17）两个尺码货源充足。Bridgestone Turanza T005（16" $138/条，17" $148/条）是最受 SG2 车主好评的换胎选择，整套约 $552–$592。SG2 Niro HEV 车重约 1,400 kg，对轮胎磨损友好，一套轮胎寿命可达 50,000 km+。建议同时检查刹车片——Niro HEV 的再生制动系统会减少刹车片磨损，但并非完全不磨，约每 3 年检查一次。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Kia Niro use in Singapore?',
      a: 'Kia Niro SG3 2nd Gen (2023+): all trims (HEV/PHEV/EV) use 215/55R17. SG2 1st Gen (2017–2022): base uses 205/60R16; Hybrid mid uses 215/55R17. All use 5×114.3 bolt pattern, 67.1mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the Kia Niro?',
      a: 'Kia Niro (SG2 and SG3) uses 5×114.3 bolt pattern, 67.1mm centre bore, M12×1.5 lug nuts, torque 110 Nm. Same as other Kia models (Sportage, Sorento) and most Hyundai models.',
    },
    {
      q: 'How much does it cost to replace Kia Niro tyres in Singapore?',
      a: 'For 215/55R17: budget from $98/tyre; mid-range (Michelin e.Primacy) $178; premium (Michelin Primacy 4+) $218. Full set: $392–$872. For 205/60R16 (SG2 base): from $88/tyre; mid-range $138.',
    },
    {
      q: 'Should I use EV-specific tyres on a Kia Niro EV?',
      a: 'It is recommended but not mandatory. EV-specific tyres like Michelin e.Primacy or Continental EcoContact 6 are optimised for low rolling resistance (less energy loss per km = more range) and higher load capacity (EVs are heavier). For the Kia Niro EV (~1,680 kg), they will give the best range and quiet ride. Regular tyres will work but may reduce range by 3–8% compared to low-rolling-resistance options.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 215/55R17',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin e.Primacy 215/55R17',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/55R17',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 205/60R16',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 205/60R16',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4 205/60R16',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
