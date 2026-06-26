import type { CarData } from './types'

const data: CarData = {
  make: 'Hyundai',
  model: 'Tucson',
  makeSlug: 'hyundai',
  modelSlug: 'tucson',
  bgWord: 'TUCSON',

  seo: {
    title: 'Hyundai Tucson Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Hyundai Tucson NX4 uses 235/65R17 (base), 235/60R18 (mid) or 235/55R19 (top). 5×114.3 bolt. From $135 installed. Compare Bridgestone vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Hyundai Tucson NX4: 235/65R17 base, 235/60R18 mid, 235/55R18 or 235/55R19 high. 5×114.3, CB 67.1mm. From $135 installed.',
    twitterDescription: 'Hyundai Tucson uses 235/65R17 (base) to 235/55R19 (top). From $135 installed in Singapore.',
    priceFrom: 135,
    oeSize: '235/65R17',
  },

  defaultGen: 'nx4',

  generations: [
    {
      key: 'nx4',
      label: 'NX4 (4th Gen)',
      years: '2021–2026',
      heroChips: [
        { label: 'Smart OE',        value: '235/65R17' },
        { label: 'Premium OE',      value: '235/60R18' },
        { label: 'From installed',  value: '$135', green: true },
      ],
      variants: [
        { name: 'Smart / Essential (base trim)', sizes: [
          { tag: 'OE',  size: '235/65R17', note: '基础版 17" 标配' },
          { tag: 'Alt', size: '235/60R18', note: '升 18"' },
          { tag: 'Alt', size: '245/60R18', note: '18" 稍宽' },
        ]},
        { name: 'Premium / Premium Plus (mid trim)', sizes: [
          { tag: 'OE',  size: '235/60R18', note: '中配 18" 标配' },
          { tag: 'Alt', size: '235/55R18', note: '稍矮，更运动' },
          { tag: 'Alt', size: '235/65R17', note: '降 17"，舒适省钱' },
        ]},
        { name: 'Hybrid / Plug-in Hybrid (high trim)', sizes: [
          { tag: 'OE',  size: '235/55R18', note: 'PHEV / HEV 高配 18"' },
          { tag: 'OE',  size: '235/55R19', note: '部分高配 19"' },
          { tag: 'Alt', size: '235/60R18', note: '稍高（+3mm 总直径）' },
        ]},
      ],
    },
    {
      key: 'tl_fl',
      label: 'TL Facelift (3rd Gen)',
      years: '2018–2021',
      heroChips: [
        { label: 'Mid OE',         value: '225/60R17' },
        { label: 'High OE',        value: '225/55R18' },
        { label: 'From installed', value: '$108', green: true },
      ],
      variants: [
        { name: '1.6T / 2.0L (mid trim)', sizes: [
          { tag: 'OE',  size: '225/60R17', note: '中配标配' },
          { tag: 'Alt', size: '235/55R17', note: '稍宽同直径' },
        ]},
        { name: '1.6T / 2.0L (high trim)', sizes: [
          { tag: 'OE',  size: '225/55R18', note: '高配 18" 标配' },
          { tag: 'Alt', size: '235/50R18', note: '18" 宽胎' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021–2026 · NX4 · high 19"',   width: '7.5J', diameter: '19"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2021–2026 · NX4 · mid 18"',    width: '7J',   diameter: '18"', offset: 'ET48', boltPattern: '5×114.3' },
    { label: '2021–2026 · NX4 · base 17"',   width: '6.5J', diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2018–2021 · TL FL · high 18"', width: '7J',   diameter: '18"', offset: 'ET48', boltPattern: '5×114.3' },
    { label: '2018–2021 · TL FL · mid 17"',  width: '6.5J', diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '110 Nm',
    notes: 'Hyundai Tucson uses 5×114.3 with 67.1mm centre bore — same as Hyundai Elantra, Kona, and Santa Fe. Also compatible with all Mazda models (same CB 67.1mm). Lug torque 110 Nm.',
  },

  priceTabs: [
    {
      size: '235/60R18',
      tabLabel: '235/60R18 · NX4 中配主力（货源充足）',
      budget: {
        name: 'Bridgestone Alenza 001',
        desc: 'SUV 舒适 · 耐磨 · 183 条现货',
        price: 219,
        also: 'Also: Yokohama Geolandar H/T G056, Nexen NFERA RU1',
        waText: 'Hyundai Tucson NX4 235%2F60R18 budget tyre quote (Bridgestone Alenza or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6 XL',
        desc: 'A 级湿地 · 静音 · 最受 Tucson 车主好评',
        price: 250,
        also: 'Also: Michelin Primacy SUV+, Goodyear Assurance MaxGuard SUV',
        waText: 'Hyundai Tucson NX4 235%2F60R18 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '最佳干湿地操控 · Tucson PHEV 运动套件最配',
        price: 281,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde',
        waText: 'Hyundai Tucson NX4 235%2F60R18 premium tyre quote (Michelin PS4 SUV or similar)',
      },
      setEstimate: 'Budget $876–$1,000 · Mid-range $1,000–$1,150 · Premium $1,124–$1,280',
    },
    {
      size: '235/55R18',
      tabLabel: '235/55R18 · NX4 PHEV/HEV 高配',
      budget: {
        name: 'Blackhawk Hiscend-H HS01',
        desc: 'SUV · 货源充足（250 条）· 价格亲民',
        price: 135,
        also: 'Also: Blackhawk Agility SUV, Nexen NFERA RU1',
        waText: 'Hyundai Tucson NX4 235%2F55R18 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6',
        desc: 'A 级湿地 · 静音 · Tucson 混动版最佳',
        price: 212,
        also: 'Also: Yokohama Advan V61, Goodyear Assurance MaxGuard',
        waText: 'Hyundai Tucson NX4 235%2F55R18 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '低滚阻 · PHEV 续航友好 · 最佳湿地制动',
        price: 268,
        also: 'Also: Continental CrossContact LX2, Pirelli Scorpion Verde',
        waText: 'Hyundai Tucson NX4 235%2F55R18 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $540–$640 · Mid-range $848–$980 · Premium $1,072–$1,220',
    },
    {
      size: '235/65R17',
      tabLabel: '235/65R17 · NX4 基础版（市场参考）',
      budget: {
        name: 'MatraX / Nexen',
        desc: '市场参考 · 我库目前无现货',
        price: 117,
        also: 'Also: Hankook Dynapro, Dunlop GrandTrek',
        waText: 'Hyundai Tucson NX4 235%2F65R17 budget tyre quote',
      },
      mid: {
        name: 'Hankook Dynapro HP2',
        desc: 'SUV 高速稳定 · 市场常见',
        price: 181,
        also: 'Also: Yokohama Geolandar H/T, Nexen NFERA RU1',
        waText: 'Hyundai Tucson NX4 235%2F65R17 mid-range tyre quote (Hankook or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin LTX Force',
        desc: '最佳湿地 · 高载荷 SUV 首选',
        price: 248,
        also: 'Also: Bridgestone Alenza 001, Continental CrossContact',
        waText: 'Hyundai Tucson NX4 235%2F65R17 premium tyre quote (Michelin LTX Force or similar)',
      },
      setEstimate: 'Budget $468–$560 · Mid-range $724–$840 · Premium $992–$1,140',
    },
  ],

  radarSize: '235/60R18',
  radarSource: 'Bridgestone (26 reviews) · Michelin (30 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'In-stock', labelClass: 'tier', score: '8.1',
      scores: [78, 82, 84, 80, 74, 76], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Bridgestone\nAlenza 001',
      stats: [{ k: 'Wet', v: '78', hi: true }, { k: 'Dry', v: '82', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [82, 84, 85, 83, 74, 80], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza 6 XL',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '83', hi: true }, { k: 'Wear', v: '85', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [86, 90, 82, 84, 70, 80], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4 SUV',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '90', hi: true }, { k: 'NVH', v: '82', hi: false }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Tucson NX4 · 235/60R18 中配车主',
      color: 'red',
      genKey: 'nx4',
      body: 'NX4 中配的 235/60R18 是新加坡最常见的 Tucson 配置。推荐 Bridgestone Turanza 6 XL（$250/条）——SUV 舒适首选，静音 A 级湿地，四条约 $1,000。Tucson 是五座家用 SUV，湿地制动比操控更重要——不建议选运动胎。',
    },
    {
      title: 'Tucson NX4 · 235/55R18 PHEV/HEV 车主',
      color: 'blue',
      genKey: 'nx4',
      body: 'Tucson PHEV/HEV 高配的 235/55R18 我库大量现货（250+ 条）。预算选 Blackhawk Hiscend-H HS01（$135/条，250 条库存）；综合首选 Bridgestone Turanza 6（$212/条）。混动车主建议 Michelin Primacy SUV+（$268/条）——低滚阻 A 级，有助于节省油电费用。',
    },
    {
      title: 'Tucson NX4 · 235/65R17 基础版车主',
      color: 'red',
      genKey: 'nx4',
      body: '基础版的 235/65R17 我库目前无现货，以上为市场参考价。可 WhatsApp 询价，我们会帮您安排。如果预算允许，可考虑升 235/60R18（换 18" 轮辋），换胎价格差距不大但运动感更好。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Hyundai Tucson use in Singapore?',
      a: 'Hyundai Tucson NX4 (2021+): 235/65R17 (base/Smart trim), 235/60R18 (mid/Premium), 235/55R18 (Hybrid/PHEV high), 235/55R19 (some high variants). Tucson TL Facelift (2018–2021): 225/60R17 (mid) or 225/55R18 (high).',
    },
    {
      q: 'What is the bolt pattern of the Hyundai Tucson?',
      a: 'Hyundai Tucson uses 5×114.3 with 67.1mm centre bore, M12×1.5, 110 Nm — same as Hyundai Elantra, Kona, Santa Fe, and all Mazda models.',
    },
    {
      q: 'How much does it cost to change Hyundai Tucson tyres in Singapore?',
      a: 'For 235/60R18 (mid): from $219 (Bridgestone Alenza) to $281 (Michelin PS4 SUV). Full set ~$876–$1,124. For 235/55R18 (PHEV): from $135 (Blackhawk) to $268 (Michelin). Full set ~$540–$1,072.',
    },
    {
      q: 'What is the best tyre for Hyundai Tucson in Singapore?',
      a: 'For most NX4 owners: Bridgestone Turanza 6 XL ($250 for 235/60R18 or $212 for 235/55R18) — best wet-road performance for a family SUV. Tucson PHEV owners: Michelin Primacy SUV+ for low rolling resistance to preserve electric range. Budget: Blackhawk Hiscend-H HS01 ($135 for 235/55R18, 250+ in stock).',
    },
    {
      q: 'Are Hyundai Tucson and Mazda CX-5 wheels interchangeable?',
      a: 'Both use 5×114.3 bolt pattern and 67.1mm centre bore, so the bolt pattern fits. However, rim dimensions (width, offset) differ between Tucson and CX-5. Always verify offset and clearance before swapping — do not assume fitment without professional advice.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 235/60R18',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '219', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 235/60R18',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '250', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin PS4 SUV 235/60R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '281', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Blackhawk Hiscend-H HS01 235/55R18', brand: { '@type': 'Brand', name: 'Blackhawk' }, offers: { '@type': 'Offer', price: '135', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 235/55R18',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '212', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 235/55R18',   brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
