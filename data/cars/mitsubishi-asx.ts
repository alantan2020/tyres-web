import type { CarData } from './types'

const data: CarData = {
  make: 'Mitsubishi',
  model: 'ASX',
  makeSlug: 'mitsubishi',
  modelSlug: 'asx',
  bgWord: 'ASX',

  seo: {
    title: 'Mitsubishi ASX Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mitsubishi ASX GA3W (2013–2023) uses 215/60R17 (5×114.3). Important: 2023+ XC gen is Renault-based with different 4×108 bolt pattern. From $88 installed in Singapore.',
    ogDescription: 'Mitsubishi ASX GA3W tyre size: 215/60R17, 5×114.3. ⚠️ New 2023+ XC gen uses 4×108 (Renault Captur based) — different bolt pattern. From $88 installed.',
    twitterDescription: 'Mitsubishi ASX GA3W uses 215/60R17, 5×114.3. New 2023+ XC: 4×108 (Renault based). From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '215/60R17',
  },

  defaultGen: 'ga3w-fl',

  generations: [
    {
      key: 'ga3w-fl',
      label: 'GA3W Facelift (2019–2023)',
      years: '2019–2023',
      heroChips: [
        { label: 'All trims (SG)', value: '215/60R17' },
        { label: 'From installed',  value: '$88', green: true },
      ],
      variants: [
        { name: '2WD / 4WD (all SG trims)', sizes: [
          { tag: 'OE',  size: '215/60R17' },
          { tag: 'Alt', size: '225/55R17', note: '宽 10mm，高度相近，常见升级' },
        ]},
      ],
    },
    {
      key: 'ga3w',
      label: 'GA3W Gen 3 (2013–2019)',
      years: '2013–2019',
      heroChips: [
        { label: 'Standard / top', value: '215/60R17' },
        { label: 'Base (some)',    value: '215/65R16' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '2.0 / 2WD standard and above', sizes: [
          { tag: 'OE',  size: '215/60R17' },
          { tag: 'Alt', size: '225/55R17', note: '略宽升级' },
        ]},
        { name: 'Base (some early trims, 16")', sizes: [
          { tag: 'OE',  size: '215/65R16' },
          { tag: 'Alt', size: '215/60R17', note: '升级 17"，需换 17" 钢圈或合金圈' },
        ]},
      ],
    },
    {
      key: 'xc',
      label: 'XC Gen 4 (2023+) — Renault-based',
      years: '2023+',
      note: '⚠️ IMPORTANT: XC is based on the Renault Captur platform and uses a DIFFERENT bolt pattern (4×108, NOT 5×114.3). Rims and tyres are NOT cross-compatible with GA3W. Confirm your generation before ordering rims.',
      heroChips: [
        { label: 'All trims', value: '215/55R17' },
        { label: '4×108 bolt pattern ⚠️', value: 'DIFFERENT', green: false },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.3T (all XC trims)', sizes: [
          { tag: 'OE',  size: '215/55R17' },
          { tag: 'Alt', size: '225/50R17', note: '宽 10mm，需确认轮拱间隙' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019–2023 · GA3W FL · all trims · 17"',  width: '7.0J', diameter: '17"', offset: 'ET46', boltPattern: '5×114.3' },
    { label: '2013–2019 · GA3W · standard · 17"',       width: '6.5J', diameter: '17"', offset: 'ET46', boltPattern: '5×114.3' },
    { label: '2013–2019 · GA3W · base · 16"',            width: '6.5J', diameter: '16"', offset: 'ET46', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    warning: '⚠️ 2023+ XC generation ASX uses 4×108 bolt pattern (Renault Captur platform) — completely different from GA3W (5×114.3). If you have a 2023+ XC, do NOT order rims or use specs from this page. Confirm your generation first.',
  },

  priceTabs: [
    {
      size: '215/60R17',
      tabLabel: '215/60R17 · GA3W 主力尺码',
      budget: {
        name: 'Blackhawk Street-H HH11',
        desc: '17" 日常 SUV 用途 · 耐磨实惠 · 新加坡 ASX 车主常见选择',
        price: 88,
        also: 'Also: Hankook Kinergy 4S2 H750, Kumho Ecsta HS51',
        waText: 'Mitsubishi ASX 215%2F60R17 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · 湿地 A 级抓地 · ASX 车主好评最多',
        price: 128,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Mitsubishi ASX 215%2F60R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地安全 · Wet grip A 级 · 提升 ASX 日常驾驶信心',
        price: 158,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'Mitsubishi ASX 215%2F60R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $352–$430 · Mid-range $512–$600 · Premium $632–$730',
    },
    {
      size: '215/65R16',
      tabLabel: '215/65R16 · GA3W base 16"',
      budget: {
        name: 'Hankook Kinergy Eco 2 K435',
        desc: '16" 经济省油胎 · ASX base 款实惠选择',
        price: 78,
        also: 'Also: Kumho Ecowing ES31, Blackhawk Street-H HH11',
        waText: 'Mitsubishi ASX 215%2F65R16 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音耐磨 · 轻松升级 ASX base 款体验',
        price: 108,
        also: 'Also: Continental ComfortContact CC6, Dunlop SP Sport Eco 270',
        waText: 'Mitsubishi ASX 215%2F65R16 mid-range tyre quote (Bridgestone or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地安全 · 16" SUV 性价比最高的安全升级',
        price: 138,
        also: 'Also: Goodyear EfficientGrip Performance 2',
        waText: 'Mitsubishi ASX 215%2F65R16 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $312–$380 · Mid-range $432–$510 · Premium $552–$640',
    },
  ],

  radarSize: '215/60R17',
  radarSource: 'Blackhawk (8 reviews) · Bridgestone (16 reviews) · Michelin (13 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [62, 72, 74, 64, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nStreet-H HH11',
      stats: [{ k: 'Wet', v: '62', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '82', hi: true }],
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
      title: 'GA3W 车主（215/60R17，2013–2023 款）',
      color: 'blue',
      genKey: 'ga3w-fl',
      body: 'GA3W ASX 是新加坡保有量最多的 Mitsubishi SUV 之一，原配 <strong>215/60R17</strong>，货源充足价格有竞争力。Bridgestone Turanza T005（$128/条）是最多 ASX 车主好评的选择——湿地 A 级，静音，里程超 60,000km，整套约 $512。若预算有限，Blackhawk Street-H HH11（$88/条）足够日常通勤，整套 $352。',
    },
    {
      title: '2023+ XC 车主（注意螺栓孔不同）',
      color: 'red',
      genKey: 'xc',
      body: '2023 款 ASX（XC 代）是基于雷诺 Captur 平台重新开发的全新车型，<strong>螺栓孔型改为 4×108</strong>，与 GA3W 的 5×114.3 完全不同。若您的车是 2023 年后购买的 XC 代，请不要用本页的规格订购钢圈，应根据 XC 专属规格（215/55R17，4×108）另行查询。WhatsApp 我们确认您的车型年份，我们会提供正确建议。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mitsubishi ASX use in Singapore?',
      a: 'The Mitsubishi ASX GA3W 3rd gen (2013–2023) in Singapore uses 215/60R17 for standard and above trims, and 215/65R16 for some base trims. The newer XC 4th gen (2023+, Renault Captur-based) uses 215/55R17. Check your door jamb sticker to confirm.',
    },
    {
      q: 'What is the bolt pattern of the Mitsubishi ASX?',
      a: 'This depends on the generation. The GA3W (2013–2023) uses 5×114.3 bolt pattern with 67.1mm centre bore. The new XC (2023+) is Renault Captur-based and uses 4×108 bolt pattern — completely different. Always confirm your generation before purchasing rims.',
    },
    {
      q: 'Does the 2023 Mitsubishi ASX have a different bolt pattern?',
      a: 'Yes. The 2023+ ASX XC is built on the Renault CMF-B platform (same as Renault Captur) and uses a 4×108 bolt pattern. This is completely different from the outgoing GA3W which uses 5×114.3. Rims from the old ASX, Outlander, or any other 5×114.3 vehicle will NOT fit the new XC.',
    },
    {
      q: 'How much does it cost to replace Mitsubishi ASX tyres in Singapore?',
      a: 'For 215/60R17 (most common, GA3W): budget from $88 per tyre installed; mid-range $128–$145; premium $158–$180. A full set of 4 mid-range tyres costs approximately $512–$600. For 215/65R16 (base trim): budget from $78; mid $108–$120; premium $138–$158.',
    },
    {
      q: 'Is the Mitsubishi ASX still sold in Singapore?',
      a: 'Yes. The XC generation ASX (Renault Captur-based) is the current model. The GA3W was sold until around 2022–2023 in Singapore. Both generations\' tyres are readily available, though they are completely different vehicles with different platforms, drivetrains, and — critically — different bolt patterns.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Street-H HH11 215/60R17',   brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/60R17',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/60R17',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy Eco 2 K435 215/65R16', brand: { '@type': 'Brand', name: 'Hankook' },   offers: { '@type': 'Offer', price: '78',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/65R16',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/65R16',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
