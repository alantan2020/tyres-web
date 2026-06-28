import type { CarData } from './types'

const data: CarData = {
  make: 'Subaru',
  model: 'Outback',
  makeSlug: 'subaru',
  modelSlug: 'outback',
  bgWord: 'OUTBACK',

  seo: {
    title: 'Subaru Outback Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Subaru Outback BT 6th gen (2020+) uses 225/60R18. BS 5th gen (2014–2020) uses 225/60R17. 5×100 bolt pattern. Must replace all 4 tyres due to AWD. From $98 installed in Singapore.',
    ogDescription: 'Subaru Outback BT uses 225/60R18; BS uses 225/60R17. 5×100, 56.1mm CB. Replace all 4 for AWD. From $98 installed in Singapore.',
    twitterDescription: 'Subaru Outback BT uses 225/60R18; BS uses 225/60R17. 5×100 bolt. Must replace all 4. From $98 in Singapore.',
    priceFrom: 98,
    oeSize: '225/60R18',
  },

  defaultGen: 'bt',

  generations: [
    {
      key: 'bt',
      label: 'BT 6th Gen (2020–2026)',
      years: '2020–2026',
      note: 'Subaru Symmetrical AWD: always replace all 4 tyres at once. BT also available with e-BOXER mild hybrid in some markets.',
      heroChips: [
        { label: '2.5i / 2.5i-S (all SG)', value: '225/60R18' },
        { label: 'From installed',          value: '$98', green: true },
      ],
      variants: [
        { name: '2.5i / 2.5i-S EyeSight (all SG trims)', sizes: [
          { tag: 'OE',  size: '225/60R18' },
          { tag: 'Alt', size: '235/55R18', note: '宽 10mm，高度相近，同孔位可选' },
        ]},
      ],
    },
    {
      key: 'bs',
      label: 'BS 5th Gen (2014–2020)',
      years: '2014–2020',
      note: 'Subaru Symmetrical AWD: always replace all 4 tyres at once.',
      heroChips: [
        { label: '2.5i / 3.6R (SG)', value: '225/60R17' },
        { label: 'From installed',    value: '$88', green: true },
      ],
      variants: [
        { name: '2.5i / 2.5i Premium / 3.6R (SG trims)', sizes: [
          { tag: 'OE',  size: '225/60R17' },
          { tag: 'Alt', size: '235/55R17', note: '宽 10mm，高度几乎相同' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2020–2026 · BT · 2.5i / 2.5i-S · 18"', width: '7.5J', diameter: '18"', offset: 'ET55', boltPattern: '5×100' },
    { label: '2014–2020 · BS · all trims · 17"',       width: '7.0J', diameter: '17"', offset: 'ET55', boltPattern: '5×100' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M12×1.25',
    torque: '89 Nm',
    warning: 'Subaru 5×100 bolt pattern is NOT compatible with Honda/Nissan/Toyota (5×114.3). ⚠️ Symmetrical AWD: always replace all 4 tyres together. BT 18" and BS 17" rims are NOT interchangeable without spacers/adapters.',
  },

  priceTabs: [
    {
      size: '225/60R18',
      tabLabel: '225/60R18 · BT 6th gen',
      budget: {
        name: 'Kumho Solus HS51',
        desc: '18" SUV 舒适胎 · Outback BT 日常代步实惠选择',
        price: 98,
        also: 'Also: Hankook Kinergy 4S2 H750, Nankang SP-9',
        waText: 'Subaru Outback BT 225%2F60R18 budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '湿地 A 级 · 静音舒适 · BT Outback 新加坡车主首选',
        price: 158,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050+',
        waText: 'Subaru Outback BT 225%2F60R18 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: 'Wet grip A 级 · 4 条全换安全方案 · Outback 最优选择',
        price: 208,
        also: 'Also: Pirelli Scorpion Verde, Goodyear EfficientGrip Performance 2 SUV',
        waText: 'Subaru Outback BT 225%2F60R18 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $392–$470 · Mid-range $632–$730 · Premium $832–$960',
    },
    {
      size: '225/60R17',
      tabLabel: '225/60R17 · BS 5th gen',
      budget: {
        name: 'Hankook Kinergy 4S2 H750',
        desc: '17" SUV 舒适胎 · BS Outback 实惠选择',
        price: 88,
        also: 'Also: Kumho Ecsta HS51, Blackhawk Street-H HH11',
        waText: 'Subaru Outback BS 225%2F60R17 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音耐磨 · 湿地 A 级 · BS Outback 车主好评最多',
        price: 138,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Subaru Outback BS 225%2F60R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '4 条全换最安全方案 · 雨天制动更短',
        price: 178,
        also: 'Also: Pirelli Scorpion Verde, Goodyear EfficientGrip Performance 2',
        waText: 'Subaru Outback BS 225%2F60R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $352–$430 · Mid-range $552–$640 · Premium $712–$820',
    },
  ],

  radarSize: '225/60R18',
  radarSource: 'Kumho (10 reviews) · Bridgestone (18 reviews) · Michelin (14 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [64, 72, 74, 66, 74, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Kumho\nSolus HS51',
      stats: [{ k: 'Wet', v: '64', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '80', hi: true }],
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
      title: 'BT Outback 车主（225/60R18，须 4 条全换）',
      color: 'blue',
      genKey: 'bt',
      body: 'BT Outback 是 Subaru 旗舰 Wagon SUV，原配 <strong>225/60R18</strong>，因为 Symmetrical AWD，<strong>4 条必须统一型号同时更换</strong>。Bridgestone Turanza T005（$158/条，整套 $632）是新加坡 Outback 车主最受好评的选择——静音、湿地 A 级、超 60,000km 寿命，适合新加坡偶尔跨柔佛长途的驾驶风格。追求最佳安全感的选 Michelin Primacy 4+（$208/条），Wet grip A 级认证，雨天制动明显更短。',
    },
    {
      title: 'BS Outback 车主（225/60R17，同样须 4 条全换）',
      color: 'blue',
      genKey: 'bs',
      body: 'BS Outback 原配 <strong>225/60R17</strong>，17" 尺码比 BT 的 18" 便宜约 15-20%，是换胎成本更低的优势。同样因 AWD 需全套更换。Bridgestone Turanza T005（$138/条，整套 $552）是首选。若 BS 已是旧车，建议换前先做四轮定位，旧 Outback 常见后轮轻微内倾，会加速胎肩磨耗。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Subaru Outback use in Singapore?',
      a: 'Subaru Outback BT 6th gen (2020–2026): all Singapore trims use 225/60R18. Outback BS 5th gen (2014–2020): all Singapore trims use 225/60R17. Check the driver\'s door jamb sticker to confirm your generation and size.',
    },
    {
      q: 'What is the bolt pattern of the Subaru Outback?',
      a: 'All Subaru Outback generations use 5×100 bolt pattern with 56.1mm centre bore. Lug nut thread is M12×1.25. Tightening torque is 89 Nm. This is NOT compatible with most Japanese brands — Honda, Nissan, and newer Toyota all use 5×114.3.',
    },
    {
      q: 'Do I need to replace all 4 tyres on the Subaru Outback at once?',
      a: 'Yes. Subaru Symmetrical AWD requires all 4 tyres to have equal tread depth (within 2/32" or 1.6mm). Replacing only 2 tyres forces the centre differential to work constantly to compensate for the diameter difference, leading to premature wear and costly repairs. Always replace the full set of 4 with the same brand and model.',
    },
    {
      q: 'How much does it cost to replace Subaru Outback tyres in Singapore?',
      a: 'For 225/60R18 (BT 2020+): budget from $98 per tyre; mid-range $158–$175; premium $208–$240. Full set of 4 mid-range: approximately $632–$730. For 225/60R17 (BS 2014–2020): budget from $88; mid $138–$155; premium $178–$208. Always budget for all 4 tyres.',
    },
    {
      q: 'Can I use Subaru Forester rims on my Outback?',
      a: 'Both use 5×100 bolt pattern and 56.1mm centre bore, so they are bolt-compatible. However, check the offset: Forester SK uses ET55 for 17", Outback BT uses ET55 for 18". Mixing 17" and 18" rims across axles is not safe. If swapping same-size rims (e.g., 17" to 17"), the offset must match within 5mm to avoid suspension or wheel arch issues.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Kumho Solus HS51 225/60R18',          brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 225/60R18',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/60R18',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 H750 225/60R17', brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 225/60R17',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/60R17',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
