import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'CR-V',
  makeSlug: 'honda',
  modelSlug: 'cr-v',
  bgWord: 'CR-V',

  seo: {
    title: 'Honda CR-V Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda CR-V uses 235/65R17 or 235/60R18 tyres. Compare Michelin ($225) vs Bridgestone ($185). From $118 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Honda CR-V uses 235/65R17 or 235/60R18 tyres. Compare Michelin ($225) vs Bridgestone ($185). From $118 installed in Singapore. WhatsApp for a quote.',
    twitterDescription: 'Honda CR-V uses 235/65R17 or 235/60R18 tyres. From $118 installed in Singapore.',
    priceFrom: 118,
    oeSize: '235/65R17',
  },

  defaultGen: 'rw_fl',

  generations: [
    {
      key: 'gen6',
      label: 'Gen 6 YH2 / RS',
      years: '2022–2026',
      heroChips: [
        { label: 'Standard', value: '235/60R18' },
        { label: 'RS / e:HEV', value: '235/55R19' },
        { label: 'From installed', value: '$145', green: true },
      ],
      variants: [
        { name: 'Standard / Sensing', sizes: [
          { tag: 'OE',  size: '235/60R18' },
          { tag: 'Alt', size: '235/65R17', note: '17" 省油替代' },
        ]},
        { name: 'RS / e:HEV Sensing', sizes: [
          { tag: 'OE',  size: '235/55R19' },
          { tag: 'Alt', size: '235/60R18', note: '18" 降价替代' },
        ]},
      ],
    },
    {
      key: 'rw_fl',
      label: 'Gen 5 RW/RT FL',
      years: '2019–2022',
      heroChips: [
        { label: '1.5T / 2.0 HV', value: '235/60R18' },
        { label: 'Hybrid', value: '235/55R19' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: '1.5 Turbo / 2.0 i-MMD', sizes: [
          { tag: 'OE',  size: '235/60R18' },
          { tag: 'Alt', size: '235/65R17', note: '17" 省油替代' },
        ]},
        { name: 'Hybrid AWD', sizes: [
          { tag: 'OE',  size: '235/55R19' },
          { tag: 'Alt', size: '235/60R18', note: '18" 替代' },
        ]},
      ],
    },
    {
      key: 'rw',
      label: 'Gen 5 RW/RT',
      years: '2017–2019',
      heroChips: [
        { label: '1.5T standard', value: '235/65R17' },
        { label: '1.5T premium', value: '235/60R18' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: '1.5 Turbo (base)', sizes: [
          { tag: 'OE',  size: '235/65R17' },
          { tag: 'Alt', size: '235/60R18', note: '18" 升级' },
        ]},
        { name: '1.5 Turbo (higher trim)', sizes: [
          { tag: 'OE',  size: '235/60R18' },
        ]},
      ],
    },
    {
      key: 'rm',
      label: 'Gen 4 RM1/RM3',
      years: '2013–2017',
      heroChips: [
        { label: '2.0 i-VTEC', value: '225/65R17' },
        { label: 'Higher trim', value: '225/60R18' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: '2.0 i-VTEC (base)', sizes: [
          { tag: 'OE',  size: '225/65R17' },
          { tag: 'Alt', size: '225/60R18', note: '18" 升级' },
        ]},
        { name: '2.4 i-VTEC / higher trim', sizes: [
          { tag: 'OE',  size: '225/60R18' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · Gen 6 RS · 19"',          width: '7.5J', diameter: '19"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2019–2026 · Gen 5/6 standard · 18"',  width: '7.5J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2017–2022 · Gen 5 RW base · 17"',     width: '7.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2013–2017 · Gen 4 RM higher · 18"',   width: '7J',   diameter: '18"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2013–2017 · Gen 4 RM base · 17"',     width: '6.5J', diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'All CR-V generations use 5×114.3 bolt pattern',
  },

  priceTabs: [
    {
      size: '235/65R17',
      tabLabel: '235/65R17 · Gen 4 / Gen 5 base',
      budget: {
        name: 'Nexen Roadian AT Pro RA8',
        desc: '耐用 · 全路况 · 适合 SUV 日常',
        price: 118,
        also: 'Also: Triangle TR257, Kumho Crugen HP91',
        waText: 'Honda CR-V 235%2F65R17 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001',
        desc: '豪华 SUV 专用 · 静音 · Wet grip: A',
        price: 165,
        also: 'Also: Dunlop SP Sport Maxx 050+, Yokohama BluEarth-XT AE61',
        waText: 'Honda CR-V 235%2F65R17 mid-range tyre quote (Bridgestone Alenza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地制动 · 低滚阻 · 旗舰静音',
        price: 198,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde',
        waText: 'Honda CR-V 235%2F65R17 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $660–$760 · Premium $792–$920',
    },
    {
      size: '235/60R18',
      tabLabel: '235/60R18 · Gen 5 FL / Gen 6 主流',
      budget: {
        name: 'Triangle Sportex TH201',
        desc: '高性价比 · 日常 SUV 行驶',
        price: 140,
        also: 'Also: Radar Renegade R7, MatraX Pragmatica 2',
        waText: 'Honda CR-V 235%2F60R18 budget tyre quote (Triangle or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001',
        desc: '豪华 SUV 专用 · 极静音 · Wet grip: A',
        price: 185,
        also: 'Also: Continental CrossContact RX, Dunlop Grandtrek PT3A',
        waText: 'Honda CR-V 235%2F60R18 mid-range tyre quote (Bridgestone Alenza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Latitude Sport 3',
        desc: '旗舰 SUV 胎 · 最佳湿地 + 操控',
        price: 225,
        also: 'Also: Pirelli Scorpion Verde, Goodyear Eagle F1 SUV',
        waText: 'Honda CR-V 235%2F60R18 premium tyre quote (Michelin Latitude Sport 3)',
      },
      setEstimate: 'Budget $560–$650 · Mid-range $740–$860 · Premium $900–$1040',
    },
  ],

  radarSize: '235/65R17',
  radarSource: 'Nexen (12 reviews) · Bridgestone (20 reviews) · Michelin (25 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [63, 72, 78, 68, 75, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nexen\nRoadian AT Pro',
      stats: [{ k: 'Wet', v: '63', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '78', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [78, 82, 80, 85, 80, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nAlenza 001',
      stats: [{ k: 'Wet', v: '78', hi: false }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '85', hi: true }, { k: 'Value', v: '74', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [85, 84, 82, 86, 83, 73], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy SUV+',
      stats: [{ k: 'Wet', v: '85', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Value', v: '73', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Gen 6 (2022–2026) · RS / e:HEV 车主',
      color: 'red',
      genKey: 'gen6',
      body: 'RS 和 e:HEV 版原配 <strong>235/55R19</strong>——19" 大脚操控犀利，但换胎成本较高（Budget 从 $140/条起）。想省成本可降 18" 配 <strong>235/60R18</strong>，需要换回 18" 轮辋。Bridgestone Alenza 001 ($185/条) 是这两个尺码最受好评的中端选择，极静音适合 CR-V 的豪华定位。',
    },
    {
      title: 'Gen 5 RW/RT / FL (2017–2022) 车主',
      color: 'blue',
      genKey: 'rw_fl',
      body: '标配版 OE 尺码 <strong>235/65R17</strong> 或 <strong>235/60R18</strong>，取决于配置。两个尺码货源都很充足。推荐 Bridgestone Alenza 001——专为豪华 SUV 设计，新加坡雨天表现出色，多项 SUV 胎测评中排名第一。预算有限可选 Nexen/Triangle，日常通勤没问题。',
    },
    {
      title: 'Gen 4 RM1/RM3 (2013–2017) 车主',
      color: 'red',
      genKey: 'rm',
      body: '基本款 OE 尺码 <strong>225/65R17</strong>，这是一个相对冷门的尺码，货源比 235/65R17 少。不少 RM 车主会换 18" 轮辋配 <strong>225/60R18</strong> 或直接升 <strong>235/60R18</strong>——操控感更好，货源更充足。WhatsApp 我们你的轮辋尺寸，我们会为你推荐合适的轮胎。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda CR-V use in Singapore?',
      a: 'Gen 6 (2022+): standard 235/60R18, RS/e:HEV 235/55R19. Gen 5 FL (2019–2022): 1.5T/Hybrid 235/60R18, Hybrid AWD 235/55R19. Gen 5 RW (2017–2019): base 235/65R17, higher trim 235/60R18. Gen 4 RM (2013–2017): base 225/65R17, higher trim 225/60R18. All generations use 5×114.3 bolt pattern.',
    },
    {
      q: 'What is the bolt pattern of the Honda CR-V?',
      a: 'All Honda CR-V generations sold in Singapore use the 5×114.3 bolt pattern. Centre bore is 64.1mm, lug nut thread is M12×1.5, tightening torque is 108 Nm.',
    },
    {
      q: 'How much does it cost to change tyres on a Honda CR-V in Singapore?',
      a: 'For 235/65R17: budget from $118/tyre; mid-range $165–$185; premium $198–$225. Full set of 4: budget ~$472, mid ~$660, premium ~$792. For 235/60R18: budget from $140; mid-range $185; premium $225. CR-V tyres cost more than sedans due to larger SUV sizes.',
    },
    {
      q: 'Can I use 235/65R17 instead of 235/60R18 on a Gen 5 CR-V?',
      a: 'Only if you also swap to 17" wheels. You cannot mix tyre diameter with rim size. If you have 18" rims (standard on higher-trim Gen 5), you need 18" tyres. If you prefer the cheaper 235/65R17, you would need to fit 17" wheels. WhatsApp us for advice on your specific configuration.',
    },
    {
      q: 'How long do Honda CR-V tyres last in Singapore?',
      a: 'CR-V tyres typically last 3–5 years or 40,000–55,000 km in Singapore\'s climate. SUV tyres wear faster than sedan tyres due to heavier vehicle weight. Budget tyres may need replacing at 30,000 km; premium brands like Michelin and Bridgestone are rated for 50,000+ km.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nexen Roadian AT Pro RA8 235/65R17',  brand: { '@type': 'Brand', name: 'Nexen' },       offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 235/65R17',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '165', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 235/65R17',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Triangle Sportex TH201 235/60R18',    brand: { '@type': 'Brand', name: 'Triangle' },    offers: { '@type': 'Offer', price: '140', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 235/60R18',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '185', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Latitude Sport 3 235/60R18', brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '225', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
