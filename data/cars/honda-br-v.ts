import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'BR-V',
  makeSlug: 'honda',
  modelSlug: 'br-v',
  bgWord: 'BRV',

  seo: {
    title: 'Honda BR-V Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda BR-V DG3 uses 215/60R16 (base) or 215/55R17 (high). DG1 uses 195/60R16. 5×114.3 bolt. From $101 installed. Compare Michelin vs Bridgestone. WhatsApp for a quote.',
    ogDescription: 'Honda BR-V DG3 uses 215/60R16 or 215/55R17. 5×114.3, CB 64.1mm. From $101 installed in Singapore.',
    twitterDescription: 'Honda BR-V DG3 uses 215/60R16 or 215/55R17. From $101 installed in Singapore.',
    priceFrom: 101,
    oeSize: '215/60R16',
  },

  defaultGen: 'dg3',

  generations: [
    {
      key: 'dg3',
      label: 'Gen 2 DG3 (N7A)',
      years: '2022–2026',
      heroChips: [
        { label: '1.5 base OE',   value: '215/60R16' },
        { label: '1.5 high OE',   value: '215/55R17' },
        { label: 'From installed', value: '$101', green: true },
      ],
      variants: [
        { name: '1.5 i-VTEC (base trim)', sizes: [
          { tag: 'OE',  size: '215/60R16', note: '入门标配' },
          { tag: 'Alt', size: '215/55R17', note: '升 17"' },
        ]},
        { name: '1.5 i-VTEC (high trim)', sizes: [
          { tag: 'OE',  size: '215/55R17', note: '高配标配' },
          { tag: 'Alt', size: '225/50R17', note: '宽胎升级' },
        ]},
      ],
    },
    {
      key: 'dg1',
      label: 'Gen 1 DG1',
      years: '2016–2022',
      heroChips: [
        { label: '1.5 i-VTEC OE', value: '195/60R16' },
        { label: 'From installed', value: '$136', green: true },
      ],
      variants: [
        { name: '1.5 i-VTEC / i-DTEC', sizes: [
          { tag: 'OE',  size: '195/60R16', note: '全系标配' },
          { tag: 'Alt', size: '205/55R16', note: '稍宽同直径' },
          { tag: 'Alt', size: '215/55R17', note: '17" 升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · DG3 · high 17"',  width: '7J',   diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2022–2026 · DG3 · base 16"',  width: '7J',   diameter: '16"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2016–2022 · DG1 · 16"',       width: '6J',   diameter: '16"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Honda BR-V uses 5×114.3 bolt pattern — same as Honda CR-V, HR-V, and many Toyota/Nissan models. Centre bore 64.1mm is the standard Honda CB (same as Accord, CR-V, Odyssey).',
  },

  priceTabs: [
    {
      size: '215/60R16',
      tabLabel: '215/60R16 · DG3 基础版标配',
      budget: {
        name: 'Yokohama BluEarth ES32',
        desc: '低滚阻 · 耐磨 · 城市 SUV 全天候',
        price: 101,
        also: 'Also: Blackhawk Street-H HH31, Triangle TR259',
        waText: 'Honda BR-V 215%2F60R16 budget tyre quote (Yokohama ES32 or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6',
        desc: '静音 · 舒适 · A 级湿地 · 7座 SUV 首选',
        price: 158,
        also: 'Also: Michelin XM2+, Yokohama Advan V61',
        waText: 'Honda BR-V 215%2F60R16 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '最佳湿地制动 · 超低滚阻 · 5年保用',
        price: 189,
        also: 'Also: Continental PremiumContact 7, Goodyear Assurance MaxGuard',
        waText: 'Honda BR-V 215%2F60R16 premium tyre quote (Michelin Primacy 5)',
      },
      setEstimate: 'Budget $404–$480 · Mid-range $632–$730 · Premium $756–$870',
    },
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · DG3 高配 / DG1 升级',
      budget: {
        name: 'Blackhawk Street-H HU71',
        desc: '城市通勤 · 货源充足 · 性价比首选',
        price: 108,
        also: 'Also: Nexen N\'Priz AH5, Yokohama ES32',
        waText: 'Honda BR-V 215%2F55R17 budget tyre quote (Blackhawk HU71 or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP300',
        desc: '低滚阻 · 省油 · 适合 BR-V 家用定位',
        price: 158,
        also: 'Also: Bridgestone Turanza 6, Yokohama Advan V61',
        waText: 'Honda BR-V 215%2F55R17 mid-range tyre quote (Bridgestone Ecopia or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '最佳湿地 · 低滚阻 · 7座家用最佳',
        price: 195,
        also: 'Also: Continental PremiumContact 7, Goodyear Assurance MaxGuard',
        waText: 'Honda BR-V 215%2F55R17 premium tyre quote (Michelin Primacy 5)',
      },
      setEstimate: 'Budget $432–$500 · Mid-range $632–$730 · Premium $780–$900',
    },
  ],

  radarSize: '215/60R16',
  radarSource: 'Yokohama (22 reviews) · Bridgestone (26 reviews) · Michelin (30 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.6',
      scores: [72, 76, 82, 72, 86, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Yokohama\nBluEarth ES32',
      stats: [{ k: 'Wet', v: '72', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'Wear', v: '82', hi: true }, { k: 'Value', v: '86', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.3',
      scores: [80, 83, 84, 82, 76, 80], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza 6',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '83', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [85, 87, 84, 85, 74, 84], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 5',
      stats: [{ k: 'Wet', v: '85', hi: true }, { k: 'Dry', v: '87', hi: true }, { k: 'NVH', v: '85', hi: true }, { k: 'Fuel', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'BR-V DG3（2022+）· 215/60R16 基础版车主',
      color: 'red',
      genKey: 'dg3',
      body: 'DG3 入门版标配 <strong>215/60R16</strong>，这个尺码在新加坡货源充足，价格合理。推荐 Bridgestone Turanza 6（$158/条）——7 座 SUV 专注静音舒适，A 级湿地，整套四条约 $632，适合家庭使用。预算有限的选 Yokohama BluEarth ES32（$101/条），耐磨省油，整套 $404。',
    },
    {
      title: 'BR-V DG3 高配 / DG1 升级 · 215/55R17',
      color: 'blue',
      genKey: 'dg3',
      body: 'DG3 高配版和从 DG1 升级到 17" 的车主用 <strong>215/55R17</strong>。推荐 Bridgestone Ecopia EP300（$158/条）——低滚阻，省油，适合 BR-V 以家庭用途为主的定位。想要更好的湿地表现，Michelin Primacy 5（$195/条）是最佳选择——新加坡雨季最短制动距离，整套四条约 $780。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda BR-V use?',
      a: 'Gen 2 DG3 (2022+): OE 215/60R16 (base trim) or 215/55R17 (high trim). Gen 1 DG1 (2016–2022): OE 195/60R16 all trims. The DG3 215/60R16 is the most common BR-V size in the Southeast Asia market.',
    },
    {
      q: 'What is the bolt pattern of the Honda BR-V?',
      a: 'Honda BR-V uses 5×114.3 bolt pattern with 64.1mm centre bore — same as Honda CR-V, HR-V, Accord, and Odyssey. Lug nut thread M12×1.5, tightening torque 108 Nm.',
    },
    {
      q: 'How much does it cost to change Honda BR-V tyres in Singapore?',
      a: 'For 215/60R16 (DG3 base): budget ~$101/tyre (Yokohama BluEarth); mid-range $158 (Bridgestone Turanza 6, popular); premium $189 (Michelin Primacy 5). Full set: ~$404–$756. For 215/55R17 (DG3 high): budget $108; mid $158; premium $195. Full set: ~$432–$780.',
    },
    {
      q: 'Can I upgrade Honda BR-V DG1 from 16" to 17" tyres?',
      a: 'Yes. The DG1 uses 195/60R16 OE. You can upgrade to 215/55R17 with 17" rims (5×114.3, CB 64.1mm, ET45–55). The overall diameter difference is less than 1.5%, so speedometer accuracy is maintained. A wider 215 vs 195 tyre also improves grip. You will need to purchase 17" wheels separately.',
    },
    {
      q: 'How long do Honda BR-V tyres last in Singapore?',
      a: 'BR-V tyres typically last 3–5 years or 40,000–55,000 km. Being a 7-seater with more frequent family loads, tyres may wear slightly faster than compact cars. Bridgestone Turanza 6 and Michelin Primacy 5 average 50,000–60,000 km. Rotate every 10,000 km.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Yokohama BluEarth ES32 215/60R16',  brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '101', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 215/60R16',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 5 215/60R16',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '189', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Blackhawk Street-H HU71 215/55R17', brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 215/55R17', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 5 215/55R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '195', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
