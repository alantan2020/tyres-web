import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Rush',
  makeSlug: 'toyota',
  modelSlug: 'rush',
  bgWord: 'RUSH',

  seo: {
    title: 'Toyota Rush Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Rush uses 215/65R16 or 215/60R17 tyres. 5×114.3 bolt pattern. Centre bore 66.6mm. From $88 installed. Compare Michelin vs Bridgestone. WhatsApp for a quote.',
    ogDescription: 'Toyota Rush uses 215/65R16 or 215/60R17. Note: CB 66.6mm (not 60.1mm like most Toyota). From $88 installed in Singapore.',
    twitterDescription: 'Toyota Rush uses 215/65R16 or 215/60R17. From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '215/65R16',
  },

  defaultGen: 'f800',

  generations: [
    {
      key: 'f800',
      label: 'F800',
      years: '2018–2023',
      heroChips: [
        { label: '1.5 base OE',   value: '215/65R16' },
        { label: '1.5 higher OE', value: '215/60R17' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.5 VVT-i (base / S trim)', sizes: [
          { tag: 'OE',  size: '215/65R16', note: '标配，最常见' },
          { tag: 'Alt', size: '215/60R17', note: '17" 升级' },
        ]},
        { name: '1.5 VVT-i (G / GR Sport trim)', sizes: [
          { tag: 'OE',  size: '215/60R17', note: '高配标配' },
          { tag: 'Alt', size: '225/55R17', note: '宽胎升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2018–2023 · F800 · higher trim 17"', width: '6.5J', diameter: '17"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: '2018–2023 · F800 · base trim 16"',   width: '6.5J', diameter: '16"', offset: 'ET50', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    warning: '⚠️ Rush centre bore is 66.6mm — different from most Toyota (60.1mm). Bolt pattern is 5×114.3 (same), but the wider CB means you need Rush-specific or universal-fit wheels. A 60.1mm CB wheel will not seat correctly on a 66.6mm hub without a hub-centric ring.',
  },

  priceTabs: [
    {
      size: '215/65R16',
      tabLabel: '215/65R16 · F800 入门标配',
      budget: {
        name: 'Yokohama A580',
        desc: 'SUV 舒适 · 日常通勤 · 货源充足',
        price: 88,
        also: 'Also: Blackhawk Agility SUV, Triangle TR259',
        waText: 'Toyota Rush 215%2F65R16 budget tyre quote (Yokohama A580 or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6',
        desc: '静音 · 舒适 · A 级湿地 · 新加坡最受好评',
        price: 148,
        also: 'Also: Dunlop GrandTrek PT5, Yokohama Geolandar CV G058',
        waText: 'Toyota Rush 215%2F65R16 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '最佳湿地制动 · 超低滚阻 · 5年保用',
        price: 185,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato Rosso',
        waText: 'Toyota Rush 215%2F65R16 premium tyre quote (Michelin Primacy 5)',
      },
      setEstimate: 'Budget $352–$415 · Mid-range $592–$680 · Premium $740–$860',
    },
    {
      size: '215/60R17',
      tabLabel: '215/60R17 · F800 高配 / 升级',
      budget: {
        name: 'Yokohama Advan V61',
        desc: 'SUV 运动 · 操控稳定 · 日常全天候',
        price: 108,
        also: 'Also: Nexen N\'Priz AH5, Triangle TR259 SUV',
        waText: 'Toyota Rush 215%2F60R17 budget tyre quote (Yokohama or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001',
        desc: '静音 · SUV 舒适向 · 湿地 A',
        price: 158,
        also: 'Also: Bridgestone Turanza 6, Dunlop GrandTrek PT5',
        waText: 'Toyota Rush 215%2F60R17 mid-range tyre quote (Bridgestone Alenza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '最佳湿地制动 · 低滚阻 · 7座 SUV 首选',
        price: 218,
        also: 'Also: Continental PremiumContact 7, Goodyear EfficientGrip 2 SUV',
        waText: 'Toyota Rush 215%2F60R17 premium tyre quote (Michelin Primacy 5)',
      },
      setEstimate: 'Budget $432–$500 · Mid-range $632–$730 · Premium $872–$1,000',
    },
  ],

  radarSize: '215/65R16',
  radarSource: 'Yokohama (20 reviews) · Bridgestone (28 reviews) · Michelin (32 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.4',
      scores: [68, 74, 74, 70, 84, 72], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Yokohama\nA580',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '74', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [78, 82, 82, 80, 76, 78], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza 6',
      stats: [{ k: 'Wet', v: '78', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '76', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [84, 86, 84, 85, 72, 82], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 5',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '85', hi: true }, { k: 'Fuel', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Rush 7 座家用 · 215/65R16 标配',
      color: 'red',
      genKey: 'f800',
      body: 'Rush 是新加坡入门 7 座 SUV，标配 <strong>215/65R16</strong>。推荐 Bridgestone Turanza 6（$148/条）——静音舒适，A 级湿地，整套四条约 $592，适合家庭日常使用。预算有限选 Yokohama A580（$88/条），货源充足，性价比高。<br>⚠️ Rush 的中心孔距是 <strong>66.6mm</strong>（非常见的 60.1mm），购买非原厂轮辋时要特别注意，或选购附带轴毂环的款式。',
    },
    {
      title: 'Rush 高配 / 215/60R17 车主',
      color: 'blue',
      genKey: 'f800',
      body: '高配 G / GR Sport 版标配 <strong>215/60R17</strong>，操控感比 16" 更好。推荐 Bridgestone Alenza 001（$158/条）——SUV 专属设计，静音舒适，湿地表现优秀。想升级到更好的驾驶感受，直接考虑 Michelin Primacy 5（$218/条），湿地制动距离明显更短，尤其在新加坡雨季安全感更强。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Rush use in Singapore?',
      a: 'Toyota Rush F800 (2018–2023): base / S trim uses OE 215/65R16; G / GR Sport trim uses OE 215/60R17. Both trims use the same 5×114.3 bolt pattern but with a 66.6mm centre bore — different from most Toyota cars (60.1mm).',
    },
    {
      q: 'What is the bolt pattern of the Toyota Rush?',
      a: 'Toyota Rush uses 5×114.3 bolt pattern — same as Camry, RAV4, and most Toyota. However, the centre bore is 66.6mm, which is different from typical Toyota CB of 60.1mm. If buying aftermarket wheels, confirm both 5×114.3 AND 66.6mm CB, or use hub-centric rings to adapt 60.1mm wheels.',
    },
    {
      q: 'How much does it cost to change Toyota Rush tyres in Singapore?',
      a: 'For 215/65R16: budget $88/tyre (Yokohama A580); mid-range $148 (Bridgestone Turanza 6); premium $185 (Michelin Primacy 5). Full set: ~$352–$740. For 215/60R17: budget $108; mid $158; premium $218. Full set: ~$432–$872.',
    },
    {
      q: 'Is the Toyota Rush still sold in Singapore?',
      a: 'The Toyota Rush F800 was discontinued in Singapore around 2022–2023 when Toyota replaced it with the Veloz for the budget 7-seater segment. However, many Rush units remain on Singapore roads and all tyre sizes (215/65R16, 215/60R17) remain widely available.',
    },
    {
      q: 'How long do Toyota Rush tyres last in Singapore?',
      a: 'Rush tyres typically last 3–5 years or 40,000–55,000 km. Being a heavier 7-seater, Rush tyres wear slightly faster than sedans. Bridgestone Turanza 6 averages 50,000–55,000 km. Inspect tread every 6 months. Rotate front/rear every 10,000 km as the heavier Rush chassis accelerates front tyre wear.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Yokohama A580 215/65R16',         brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 215/65R16', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 5 215/65R16',   brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '185', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Yokohama Advan V61 215/60R17',   brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Alenza 001 215/60R17', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 5 215/60R17',   brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
