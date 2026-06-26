import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Sienta',
  makeSlug: 'toyota',
  modelSlug: 'sienta',
  bgWord: 'SIENTA',

  seo: {
    title: 'Toyota Sienta Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Sienta uses 185/60R15 tyres. ⚠️ 5×100 bolt pattern (not 5×114.3). From $82 installed in Singapore. Compare Bridgestone vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Toyota Sienta uses 185/60R15. ⚠️ 5×100 bolt — different from Vios/Corolla. From $82 installed in Singapore. WhatsApp for a quote.',
    twitterDescription: 'Toyota Sienta uses 185/60R15 tyres. From $82 installed in Singapore.',
    priceFrom: 82,
    oeSize: '185/60R15',
  },

  defaultGen: 'xp170_fl',

  generations: [
    {
      key: 'xp170_fl',
      label: 'Gen 2 XP170 FL',
      years: '2019–2022',
      heroChips: [
        { label: '1.5 VVT-i OE', value: '185/60R15' },
        { label: 'Alt 16"',       value: '195/50R16' },
        { label: 'From installed', value: '$82', green: true },
      ],
      variants: [
        { name: '1.5 VVT-i / 1.8i', sizes: [
          { tag: 'OE',  size: '185/60R15', note: '标配，最常见' },
          { tag: 'Alt', size: '195/50R16', note: '16" 升级，操控感稍好' },
          { tag: 'Alt', size: '195/55R16', note: '16" 升级，更舒适' },
        ]},
      ],
    },
    {
      key: 'xp170',
      label: 'Gen 2 XP170',
      years: '2016–2019',
      heroChips: [
        { label: '1.5 VVT-i OE', value: '185/60R15' },
        { label: 'From installed', value: '$82', green: true },
      ],
      variants: [
        { name: '1.5 VVT-i', sizes: [
          { tag: 'OE',  size: '185/60R15', note: '标配' },
          { tag: 'Alt', size: '195/50R16', note: '16" 升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2016–2022 · XP170 / FL · OE 15"',  width: '5.5J', diameter: '15"', offset: 'ET39', boltPattern: '5×100' },
    { label: '2016–2022 · XP170 / FL · Alt 16"', width: '6J',   diameter: '16"', offset: 'ET45', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '54.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    warning: '⚠️ Sienta uses 5×100 bolt pattern with centre bore 54.1mm — NOT the 5×114.3 used on Vios, Corolla, and most Toyota. Sienta CB (54.1mm) is also different from Yaris Cross CB (60.1mm). Always confirm both bolt pattern AND centre bore before buying wheels.',
  },

  priceTabs: [
    {
      size: '185/60R15',
      tabLabel: '185/60R15 · XP170 / FL 标配',
      budget: {
        name: 'Dunlop SP Touring R1',
        desc: '日常通勤 · 耐磨 · 新加坡常见选择',
        price: 82,
        also: 'Also: Blackhawk Street-H HH31, Nexen N\'Priz AH5',
        waText: 'Toyota Sienta 185%2F60R15 budget tyre quote (Dunlop SP Touring or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP300',
        desc: '省油 · 湿地 A · 最受 Sienta 车主好评',
        price: 108,
        also: 'Also: Michelin Energy XM2+, Yokohama BluEarth ES32',
        waText: 'Toyota Sienta 185%2F60R15 mid-range tyre quote (Bridgestone Ecopia or similar)',
        popular: true,
      },
      premium: {
        name: 'Yokohama BluEarth-GT AE51',
        desc: '高抓地 · 静音 · 适合 Sienta 家用定位',
        price: 132,
        also: 'Also: Continental PremiumContact 6, Pirelli Cinturato P7',
        waText: 'Toyota Sienta 185%2F60R15 premium tyre quote (Yokohama AE51)',
      },
      setEstimate: 'Budget $328–$390 · Mid-range $432–$500 · Premium $528–$620',
    },
  ],

  radarSize: '185/60R15',
  radarSource: 'Dunlop (18 reviews) · Bridgestone (26 reviews) · Yokohama (22 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [66, 72, 76, 68, 84, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Dunlop\nSP Touring R1',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [78, 80, 84, 76, 88, 82], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nEcopia EP300',
      stats: [{ k: 'Wet', v: '78', hi: true }, { k: 'Dry', v: '80', hi: true }, { k: 'Wear', v: '84', hi: true }, { k: 'Fuel', v: '88', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [83, 85, 82, 84, 76, 80], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Yokohama\nBluEarth-GT AE51',
      stats: [{ k: 'Wet', v: '83', hi: true }, { k: 'Dry', v: '85', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Value', v: '76', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Sienta 家用 / 接送孩子用途',
      color: 'red',
      genKey: 'xp170_fl',
      body: 'Sienta 是家庭首选 MPV，轮胎注重舒适和省油。推荐 <strong>Bridgestone Ecopia EP300</strong>（$108/条）——超低滚阻，配合 Sienta 的省油本性，湿地 A 级，整套四条约 $432。这是新加坡最多 Sienta 车主选的一款。<br>⚠️ Sienta 用 <strong>5×100、CB 54.1mm</strong>，与 Yaris Cross（5×100、CB 60.1mm）不同，换轮辋时两个数据都要核对。',
    },
    {
      title: 'Sienta 想升级 16" 的车主',
      color: 'blue',
      genKey: 'xp170_fl',
      body: '原厂 15" 可升级到 16" 轮辋配 <strong>195/50R16</strong> 或 <strong>195/55R16</strong>。195/55R16 比 195/50R16 稍高，整体外径更接近原厂，乘坐感更舒适；195/50R16 扁平比更低，操控感更好。升 16" 的主要好处是外观更好看，实际行驶差异不大。建议先确认 5×100 / CB 54.1mm 轮辋有货再下决定。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Sienta use in Singapore?',
      a: 'Gen 2 XP170 and XP170 Facelift (2016–2022): OE 185/60R15. Alternative upgrades: 195/50R16 or 195/55R16 (requires 16" rims). All Sienta trims in Singapore use the same base size 185/60R15.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Sienta?',
      a: 'Toyota Sienta uses 5×100 bolt pattern with a 54.1mm centre bore. This is different from most Toyota passenger cars (5×114.3) and also different from the Yaris Cross (which is 5×100 but with 60.1mm centre bore). Centre bore matters — always confirm both numbers before buying aftermarket wheels.',
    },
    {
      q: 'How much does it cost to change Toyota Sienta tyres in Singapore?',
      a: 'For 185/60R15: budget from $82/tyre (Dunlop SP Touring R1); mid-range $108 (Bridgestone Ecopia EP300, most popular); premium $132 (Yokohama BluEarth-GT AE51). Full set of 4: budget ~$328, mid ~$432, premium ~$528. The Sienta has one of the most affordable tyre-change costs among family MPVs in Singapore.',
    },
    {
      q: 'Can I upgrade Toyota Sienta tyres to 16 inch?',
      a: 'Yes. You can fit 195/50R16 or 195/55R16 with 16" rims (5×100, CB 54.1mm). The 195/55R16 has a very similar overall diameter to 185/60R15 (less than 0.5% difference), keeping speedometer accuracy. The 195/50R16 has a slightly smaller diameter. Both upgrades require purchasing compatible 16" wheels separately.',
    },
    {
      q: 'How long do Toyota Sienta tyres last in Singapore?',
      a: 'Sienta tyres in Singapore typically last 4–6 years or 45,000–60,000 km, as MPV use tends to be gentler than sports cars. Bridgestone Ecopia EP300 usually lasts 50,000+ km with normal family use. Inspect tread depth every 6 months. Replace before 2mm remaining tread depth.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Dunlop SP Touring R1 185/60R15',       brand: { '@type': 'Brand', name: 'Dunlop' },      offers: { '@type': 'Offer', price: '82',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 185/60R15',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Yokohama BluEarth-GT AE51 185/60R15', brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '132', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
