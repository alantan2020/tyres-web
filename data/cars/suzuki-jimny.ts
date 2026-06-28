import type { CarData } from './types'

const data: CarData = {
  make: 'Suzuki',
  model: 'Jimny',
  makeSlug: 'suzuki',
  modelSlug: 'jimny',
  bgWord: 'JIMNY',

  seo: {
    title: 'Suzuki Jimny Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Suzuki Jimny JB74 (2018+) uses 195/80R15 (all trims). ⚠️ 5×139.7 bolt pattern (truck PCD, NOT car PCD), 108.1mm CB, M12×1.25 nut. Mini off-roader. From $108 installed.',
    ogDescription: 'Suzuki Jimny JB74: 195/80R15 (all trims). ⚠️ 5×139.7 PCD — truck pattern. 108.1mm CB. Off-roader. From $108.',
    twitterDescription: 'Suzuki Jimny uses 195/80R15. ⚠️ 5×139.7 bolt pattern (truck PCD). From $108.',
    priceFrom: 108,
    oeSize: '195/80R15',
  },

  defaultGen: 'jb74',

  generations: [
    {
      key: 'jb74',
      label: 'JB74 4th Gen (2018–2026)',
      years: '2018–2026',
      note: '⚠️ Important: Suzuki Jimny JB74 uses 5×139.7 bolt pattern — the same pattern used by Mitsubishi Triton, Isuzu D-Max, Toyota Fortuner, and Land Cruiser Prado. This is a truck/SUV pattern, NOT compatible with standard 5×114.3 passenger car wheels. All trims use 195/80R15 on 15" rims. Very popular for off-road upgrades in Singapore.',
      heroChips: [
        { label: 'All trims OE',     value: '195/80R15' },
        { label: '⚠️ 5×139.7 PCD', value: 'Truck pattern' },
        { label: 'From installed',   value: '$108', green: true },
      ],
      variants: [
        { name: 'Jimny JB74 — all trims (15")', sizes: [
          { tag: 'OE',   size: '195/80R15' },
          { tag: 'AT',   size: '205/75R15', note: 'A/T 越野升级，高边墙通过性更好' },
          { tag: 'MT',   size: '195/80R15 MT', note: 'M/T 泥地胎，极端越野使用' },
        ]},
      ],
    },
    {
      key: 'jb43',
      label: 'JB43 3rd Gen (1998–2018)',
      years: '1998–2018',
      note: 'Previous Jimny JB43 / JB33. Uses 195/80R15 or 205/70R15. Same 5×139.7 bolt pattern.',
      heroChips: [
        { label: 'JB43 base OE', value: '195/80R15' },
        { label: 'JB43 higher OE', value: '205/70R15' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: 'JB43 base (15")', sizes: [{ tag: 'OE', size: '195/80R15' }] },
        { name: 'JB43 higher (15")', sizes: [{ tag: 'OE', size: '205/70R15' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'JB74 2018+ · 15"',  width: '5.5J', diameter: '15"', offset: 'ET5',  boltPattern: '5×139.7' },
    { label: 'JB43 1998–2018 · 15"', width: '5.5J', diameter: '15"', offset: 'ET5', boltPattern: '5×139.7' },
  ],
  rimCommon: {
    centreBore: '108.1mm',
    stud: 'M12×1.25 nut',
    torque: '100 Nm',
    notes: '⚠️ Suzuki Jimny uses 5×139.7 bolt pattern, 108.1mm centre bore — same as Mitsubishi Triton, Isuzu D-Max, Land Cruiser 70/Prado. This is a commercial/truck PCD, NOT compatible with passenger car 5×114.3 wheels. Off-road enthusiasts commonly upgrade to 15" or 16" aftermarket steel wheels with AT tyres.',
  },

  priceTabs: [
    {
      size: '195/80R15',
      tabLabel: '195/80R15 · Jimny JB74 all trims',
      budget: {
        name: 'Hankook Dynapro AT2',
        desc: '15" AT 全地形胎 · Jimny 城市越野预算首选',
        price: 108,
        also: 'Also: Kumho Road Venture AT51, Nankang Conqueror AT-5',
        waText: 'Suzuki Jimny 195%2F80R15 budget AT tyre quote (Hankook Dynapro AT2 or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler AT 001',
        desc: '15" AT 全地形旗舰 · Jimny 城市越野静音最佳',
        price: 188,
        also: 'Also: Yokohama Geolandar AT G015, Falken Wildpeak AT3W',
        waText: 'Suzuki Jimny 195%2F80R15 mid-range AT tyre quote (Bridgestone Dueler AT 001 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin LTX AT2',
        desc: '15" AT 旗舰 · Jimny 城市越野全能最佳',
        price: 238,
        also: 'Also: BFGoodrich All-Terrain T/A KO2, Continental CrossContact AT',
        waText: 'Suzuki Jimny 195%2F80R15 premium AT tyre quote (Michelin LTX AT2)',
      },
      setEstimate: 'Budget $432–$600 · Mid-range $752–$1,000 · Premium $952–$1,200',
    },
  ],

  radarSize: '195/80R15',
  radarSource: 'Bridgestone (8 reviews) · Hankook (7 reviews) · Michelin (6 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget · AT', labelClass: 'tier', score: '7.5',
      scores: [72, 76, 72, 78, 76, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nDynapro AT2',
      stats: [{ k: 'Wet', v: '72', hi: false }, { k: 'Off-road', v: '76', hi: true }, { k: 'NVH', v: '72', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [78, 82, 80, 82, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nDueler AT 001',
      stats: [{ k: 'Wet', v: '78', hi: false }, { k: 'Off-road', v: '82', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [82, 84, 78, 84, 84, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nLTX AT2',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Off-road', v: '84', hi: true }, { k: 'NVH', v: '78', hi: false }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Jimny JB74（195/80R15）— ⚠️ 5×139.7 卡车螺孔，买轮圈必须确认',
      color: 'red',
      genKey: 'jb74',
      body: '⚠️ Suzuki Jimny <strong>最常见换轮圈错误</strong>：5×139.7 是卡车/越野螺孔，与新加坡常见的日韩系乘用车 5×114.3 螺孔完全不兼容。AT（全地形）胎是 Jimny 最常见的换胎选择，<strong>Bridgestone Dueler AT 001（$188/条）</strong>是城市越野使用场景中静音与越野能力最佳平衡的选择，整套约 $752。如以城市通勤为主，也可保留 HT（公路胎）规格，选 Bridgestone Dueler H/P Sport 或 Michelin Latitude Cross，更静更省油。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Suzuki Jimny use in Singapore?',
      a: 'Suzuki Jimny JB74 (2018+): all trims use 195/80R15. ⚠️ 5×139.7 bolt pattern (truck/SUV PCD) — same as Mitsubishi Triton and Land Cruiser, NOT compatible with standard 5×114.3 passenger car wheels. Centre bore 108.1mm.',
    },
    {
      q: 'What tyres should I put on my Suzuki Jimny in Singapore?',
      a: 'For city use with occasional off-road: Bridgestone Dueler AT 001 (195/80R15, ~$188/tyre) — good balance of road quietness and off-road capability. Purely city driving: keep highway tyre for better fuel economy and quietness. For serious off-road: BFGoodrich KO2 or similar MT (mud terrain) tyres.',
    },
    {
      q: 'How much does it cost to replace Suzuki Jimny tyres in Singapore?',
      a: 'For 195/80R15: budget AT from $108/tyre; mid-range (Bridgestone Dueler AT) $188; premium $238. Full set $432–$952. Note: 5×139.7 wheels are limited in aftermarket options versus mainstream 5×114.3.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Dynapro AT2 195/80R15',         brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Dueler AT 001 195/80R15',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin LTX AT2 195/80R15',            brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
