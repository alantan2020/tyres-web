import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'Odyssey',
  makeSlug: 'honda',
  modelSlug: 'odyssey',
  bgWord: 'ODYSSEY',

  seo: {
    title: 'Honda Odyssey Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda Odyssey RC uses 215/55R17 or 215/60R17 (latest facelift). 5×114.3 bolt. From $101 installed in Singapore. Compare Michelin vs Bridgestone. WhatsApp for a quote.',
    ogDescription: 'Honda Odyssey RC uses 215/55R17 (standard) or 215/60R17 (2022 facelift). 5×114.3, CB 64.1mm. From $101 installed.',
    twitterDescription: 'Honda Odyssey RC uses 215/55R17 or 215/60R17. From $101 installed in Singapore.',
    priceFrom: 101,
    oeSize: '215/55R17',
  },

  defaultGen: 'rc_fl2',

  generations: [
    {
      key: 'rc_fl2',
      label: 'RC Facelift 2',
      years: '2022–2026',
      heroChips: [
        { label: '2.4 i-VTEC OE',  value: '215/60R17' },
        { label: 'Alt 18"',         value: '225/50R18' },
        { label: 'From installed',  value: '$101', green: true },
      ],
      variants: [
        { name: '2.4 i-VTEC (all trims)', sizes: [
          { tag: 'OE',  size: '215/60R17', note: '标配，最常见' },
          { tag: 'Alt', size: '225/50R18', note: '18" 升级' },
          { tag: 'Alt', size: '215/55R17', note: '同轮径，稍矮' },
        ]},
      ],
    },
    {
      key: 'rc_fl1',
      label: 'RC Facelift 1',
      years: '2017–2022',
      heroChips: [
        { label: '2.4 standard OE', value: '215/55R17' },
        { label: '2.4 base OE',     value: '215/60R16' },
        { label: 'From installed',   value: '$101', green: true },
      ],
      variants: [
        { name: '2.4 i-VTEC (standard trim)', sizes: [
          { tag: 'OE',  size: '215/55R17', note: '标配' },
          { tag: 'Alt', size: '225/50R17', note: '宽胎升级' },
          { tag: 'Alt', size: '235/45R18', note: '18" 运动升级' },
        ]},
        { name: '2.4 i-VTEC (base trim)', sizes: [
          { tag: 'OE',  size: '215/60R16', note: '基础版 16" 配置' },
          { tag: 'Alt', size: '215/55R17', note: '升 17"' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · RC FL2 · OE 17"',      width: '7J',   diameter: '17"', offset: 'ET55', boltPattern: '5×114.3' },
    { label: '2022–2026 · RC FL2 · Alt 18"',      width: '7J',   diameter: '18"', offset: 'ET55', boltPattern: '5×114.3' },
    { label: '2017–2022 · RC FL1 · standard 17"', width: '7J',   diameter: '17"', offset: 'ET55', boltPattern: '5×114.3' },
    { label: '2017–2022 · RC FL1 · base 16"',     width: '6.5J', diameter: '16"', offset: 'ET55', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Honda Odyssey uses 5×114.3 bolt pattern with 64.1mm centre bore — same as Honda CR-V, Accord, and BR-V. Standard Honda five-lug configuration; compatible with most Honda aftermarket wheels.',
  },

  priceTabs: [
    {
      size: '215/60R17',
      tabLabel: '215/60R17 · RC FL2（2022+）主力',
      budget: {
        name: 'Blackhawk Agility SUV',
        desc: 'SUV 舒适 · 轻量 MPV 用途 · 价格亲民',
        price: 101,
        also: 'Also: Yokohama Advan V61, Triangle TR259',
        waText: 'Honda Odyssey RC 215%2F60R17 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6',
        desc: '静音 · 舒适 · A 级湿地 · 7座 MPV 最佳',
        price: 181,
        also: 'Also: Goodyear Assurance Triplemax 2, Yokohama Advan V61',
        waText: 'Honda Odyssey RC 215%2F60R17 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '最佳湿地制动 · 低滚阻 · 豪华 MPV 匹配',
        price: 226,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato Rosso',
        waText: 'Honda Odyssey RC 215%2F60R17 premium tyre quote (Michelin Primacy 5)',
      },
      setEstimate: 'Budget $404–$480 · Mid-range $724–$830 · Premium $904–$1,040',
    },
    {
      size: '215/55R17',
      tabLabel: '215/55R17 · RC FL1（2017–2022）标配',
      budget: {
        name: 'Blackhawk Street-H HU71',
        desc: '城市通勤 · 货源充足 · 性价比高',
        price: 108,
        also: 'Also: Nexen N\'Priz AH5, Yokohama ES32',
        waText: 'Honda Odyssey RC 215%2F55R17 budget tyre quote (Blackhawk HU71 or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6',
        desc: '静音 · 舒适 · A 级湿地 · MPV 首选',
        price: 181,
        also: 'Also: Bridgestone RE005, Yokohama Advan V61',
        waText: 'Honda Odyssey RC 215%2F55R17 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '最佳湿地制动 · 低滚阻 · Odyssey 豪华 MPV 首选',
        price: 195,
        also: 'Also: Continental PremiumContact 7, Pirelli P7 Cinturato',
        waText: 'Honda Odyssey RC 215%2F55R17 premium tyre quote (Michelin Primacy 5)',
      },
      setEstimate: 'Budget $432–$500 · Mid-range $724–$830 · Premium $780–$900',
    },
  ],

  radarSize: '215/55R17',
  radarSource: 'Blackhawk (16 reviews) · Bridgestone (24 reviews) · Michelin (28 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.4',
      scores: [70, 74, 76, 70, 82, 76], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nStreet-H HU71',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.3',
      scores: [80, 83, 84, 82, 76, 78], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza 6',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '83', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [86, 88, 85, 85, 74, 84], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 5',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'NVH', v: '85', hi: true }, { k: 'Fuel', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Odyssey RC FL2（2022+）· 215/60R17 车主',
      color: 'red',
      genKey: 'rc_fl2',
      body: '2022 年后的 Odyssey FL2 升用 215/60R17，尺码比旧款稍大。推荐 Bridgestone Turanza 6（$181/条）——MPV 静音舒适最佳，整套四条约 $724，是新加坡 Odyssey 车主的首选。Odyssey 是豪华 MPV 定位，七名乘客的舒适感和湿地安全性都不能妥协——预算充足的直接上 Michelin Primacy 5（$226/条），湿地制动最短，适合一家老小。',
    },
    {
      title: 'Odyssey RC FL1（2017–2022）· 215/55R17 车主',
      color: 'blue',
      genKey: 'rc_fl1',
      body: 'RC FL1 标配 215/55R17，是新加坡最常见的 Odyssey 配置。推荐 Bridgestone Turanza 6（$181/条）——舒适静音，四条约 $724。预算优先选 Blackhawk Street-H HU71（$108/条），新加坡库存充足（347 条库存），四条只需 $432，适合有预算压力的家庭。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda Odyssey use in Singapore?',
      a: 'Honda Odyssey RC Facelift 2 (2022+): OE 215/60R17 (all trims). RC Facelift 1 (2017–2022): OE 215/55R17 (standard) or 215/60R16 (base trim). The latest 2022 facelift updated from 215/55R17 to 215/60R17.',
    },
    {
      q: 'What is the bolt pattern of the Honda Odyssey?',
      a: 'Honda Odyssey RC uses 5×114.3 bolt pattern with 64.1mm centre bore — same as Honda Accord, CR-V, and BR-V. Lug nut M12×1.5, torque 108 Nm. Compatible with most Honda five-lug aftermarket wheels.',
    },
    {
      q: 'How much does it cost to change Honda Odyssey tyres in Singapore?',
      a: 'For 215/60R17 (RC FL2 2022+): budget $101/tyre (Blackhawk); mid-range $181 (Bridgestone Turanza 6, popular); premium $226 (Michelin Primacy 5). Full set: ~$404–$904. For 215/55R17 (RC FL1): budget $108; mid $181; premium $195. Full set: ~$432–$780.',
    },
    {
      q: 'What is the best tyre for Honda Odyssey in Singapore?',
      a: 'For most Odyssey owners: Bridgestone Turanza 6 ($181/tyre for 215/55R17 or 215/60R17). It\'s the top-rated MPV tyre for wet Singapore roads — quieter than budget options, longer lasting, and A-rated wet grip. For the safest option with 7 passengers: Michelin Primacy 5 — the shortest wet braking distance in the segment. Avoid ultra-budget tyres on a heavy 7-seat MPV.',
    },
    {
      q: 'Can I upgrade Honda Odyssey RC FL1 from 16" base to 17"?',
      a: 'Yes. The RC FL1 base trim uses 215/60R16. Upgrading to 215/55R17 requires 17" rims (5×114.3, CB 64.1mm, ET50–55). The overall diameter difference between 215/60R16 and 215/55R17 is less than 1%, keeping speedometer accuracy. Standard trim RC FL1 already uses 215/55R17, so this is an approved size.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Agility SUV 215/60R17',    brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '101', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 215/60R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '181', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 5 215/60R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '226', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Blackhawk Street-H HU71 215/55R17', brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 215/55R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '181', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 5 215/55R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '195', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
