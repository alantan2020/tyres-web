import type { CarData } from './types'

const data: CarData = {
  make: 'Nissan',
  model: 'Sylphy',
  makeSlug: 'nissan',
  modelSlug: 'sylphy',
  bgWord: 'SYLPHY',

  seo: {
    title: 'Nissan Sylphy Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Nissan Sylphy B17 uses 195/65R15 (G trim) or 205/55R16 (V top trim). From $88 installed. Most common ex-taxi tyre in Singapore. WhatsApp for a quote.',
    ogDescription: 'Nissan Sylphy B17 uses 195/65R15 or 205/55R16. From $88 installed in Singapore. Compare Bridgestone vs Michelin.',
    twitterDescription: 'Nissan Sylphy B17 uses 195/65R15 or 205/55R16. From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '195/65R15',
  },

  defaultGen: 'b17fl',

  generations: [
    {
      key: 'b17fl',
      label: 'B17 FL (2016–2019)',
      years: '2016–2019',
      heroChips: [
        { label: '1.6 G / GL', value: '195/65R15' },
        { label: '1.6 V top', value: '205/55R16' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.6 G / GL (base & mid)', sizes: [
          { tag: 'OE',  size: '195/65R15' },
          { tag: 'Alt', size: '205/55R16', note: '16" 升级，操控更精准' },
        ]},
        { name: '1.6 V (top)', sizes: [
          { tag: 'OE',  size: '205/55R16' },
          { tag: 'Alt', size: '195/65R15', note: '降级保留 15" 轮辋' },
        ]},
      ],
    },
    {
      key: 'b17',
      label: 'B17 (2012–2016)',
      years: '2012–2016',
      heroChips: [
        { label: '1.6 G / GL', value: '195/65R15' },
        { label: '1.6 V top', value: '205/55R16' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.6 G / GL', sizes: [
          { tag: 'OE',  size: '195/65R15' },
        ]},
        { name: '1.6 V top', sizes: [
          { tag: 'OE',  size: '205/55R16' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2016–2019 · B17 FL · V top / 16"',  width: '6.5J', diameter: '16"', offset: 'ET50', boltPattern: '4×114.3' },
    { label: '2012–2019 · B17 / FL · G / GL · 15"', width: '5.5J', diameter: '15"', offset: 'ET50', boltPattern: '4×114.3' },
  ],
  rimCommon: {
    centreBore: '66.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    warning: '⚠️ Sylphy uses 4×114.3 bolt pattern — NOT compatible with Toyota Vios / Honda City (both 4×100). Double-check before swapping rims from another car.',
  },

  priceTabs: [
    {
      size: '195/65R15',
      tabLabel: '195/65R15 · B17 G/GL 主力尺码',
      budget: {
        name: 'Blackhawk Street-H HH11',
        desc: '日常通勤 · 耐磨 · 新加坡常用预算胎',
        price: 81,
        also: 'Also: Hankook Kinergy Eco 2, Kumho Ecsta HS51',
        waText: 'Nissan Sylphy 195%2F65R15 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP300',
        desc: '省油 · 湿地抓地 A 级 · 最多 Sylphy 车主选用',
        price: 108,
        also: 'Also: Continental ComfortContact CC6, Dunlop EnaSave EC300',
        waText: 'Nissan Sylphy 195%2F65R15 mid-range tyre quote (Bridgestone Ecopia EP300 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Energy XM2+',
        desc: '最长里程 · 湿地安全 · 5年保用',
        price: 128,
        also: 'Also: Pirelli Cinturato P1, Goodyear EfficientGrip Performance',
        waText: 'Nissan Sylphy 195%2F65R15 premium tyre quote (Michelin Energy XM2%2B)',
      },
      setEstimate: 'Budget $324–$380 · Mid-range $432–$500 · Premium $512–$590',
    },
    {
      size: '205/55R16',
      tabLabel: '205/55R16 · V 顶配 / 升级款',
      budget: {
        name: 'Hankook Kinergy Eco 2 K435',
        desc: '16" 日常用途 · 湿地稳定',
        price: 91,
        also: 'Also: Kumho Ecsta HS51, Nankang NS-25',
        waText: 'Nissan Sylphy 205%2F55R16 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · A 级湿地抓地',
        price: 128,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Nissan Sylphy 205%2F55R16 mid-range tyre quote (Bridgestone Turanza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地制动 · Wet grip A 级 · 5年保用',
        price: 155,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'Nissan Sylphy 205%2F55R16 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $364–$420 · Mid-range $512–$600 · Premium $620–$720',
    },
  ],

  radarSize: '195/65R15',
  radarSource: 'Blackhawk (12 reviews) · Bridgestone (25 reviews) · Michelin (20 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [62, 72, 74, 64, 74, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nStreet-H HH11',
      stats: [{ k: 'Wet', v: '62', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [77, 82, 86, 80, 84, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nEcopia EP300',
      stats: [{ k: 'Wet', v: '77', hi: false }, { k: 'Dry', v: '82', hi: true }, { k: 'Wear', v: '86', hi: true }, { k: 'Fuel', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [84, 86, 88, 86, 82, 74], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nEnergy XM2+',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'Wear', v: '88', hi: true }, { k: 'Value', v: '74', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'B17 G / GL 1.6 车主（195/65R15，最常见）',
      color: 'blue',
      genKey: 'b17fl',
      body: 'Sylphy 是新加坡最常见的前 Comfort/SMRT 的士车型，OE 尺码 <strong>195/65R15</strong> 货源非常充足、价格最优。Bridgestone Ecopia EP300 是最多 Sylphy 车主选用的胎——省油 A 级、湿地 A 级、里程超 50,000km，特别适合每日通勤。整套四条约 $432，性价比高。<br>⚠️ Sylphy 是 <strong>4×114.3</strong> 孔距，与 Toyota Vios / Honda City 的 4×100 不兼容，二手轮辋购买前务必核实。',
    },
    {
      title: 'B17 V 顶配 1.6 车主（205/55R16）',
      color: 'red',
      genKey: 'b17fl',
      body: 'V 顶配原配 <strong>205/55R16</strong>，操控感比 195/65R15 更精准，但价格约高 $20–30/条。推荐 Bridgestone Turanza T005（$128/条）——静音舒适，湿地制动优秀，非常适合家用。追求里程最长的选 Michelin Primacy 4+（$155/条，Wet A 级）。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Nissan Sylphy use in Singapore?',
      a: 'The Nissan Sylphy B17 (2012–2019) uses 195/65R15 for the 1.6 G and GL trims, and 205/55R16 for the top-spec 1.6 V trim. Check the tyre sidewall or door jamb sticker for your exact size. Both sizes share the same 4×114.3 bolt pattern.',
    },
    {
      q: 'What is the bolt pattern of the Nissan Sylphy?',
      a: 'The Nissan Sylphy B17 uses a 4×114.3 bolt pattern with a 66.1mm centre bore. Lug nut thread is M12×1.5 and tightening torque is 108 Nm. Note: this is NOT the same as Toyota Vios or Honda City (both 4×100) — rims are not interchangeable.',
    },
    {
      q: 'How much does it cost to replace Nissan Sylphy tyres in Singapore?',
      a: 'For 195/65R15 (G/GL trim): budget from $81 per tyre installed; mid-range $108–$120; premium $128–$145. A full set of 4 mid-range tyres costs approximately $432–$500. For 205/55R16 (V top trim): budget from $91; mid $128–$145; premium $155–$175. Full set about $512–$600.',
    },
    {
      q: 'Can I upgrade from 195/65R15 to 205/55R16 on a Nissan Sylphy B17 G trim?',
      a: 'Yes, if you also swap the rims to 16-inch. Both sizes use the same 4×114.3 bolt pattern, so upgrading from 15" to 16" wheels is straightforward. The overall diameter change is less than 1%, within Singapore\'s legal tolerance. The 205/55R16 setup gives slightly sharper handling but costs $20–30 more per tyre.',
    },
    {
      q: 'How long do tyres last on a Nissan Sylphy in Singapore?',
      a: 'In Singapore\'s climate, Sylphy tyres typically last 3–5 years or 40,000–60,000 km. Bridgestone Ecopia EP300 and Michelin Energy XM2+ are rated for 50,000+ km. Budget tyres typically need replacement at 3–4 years. Replace when tread depth reaches 3mm (legal minimum is 1.6mm).',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Street-H HH11 195/65R15',   brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '81',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 195/65R15',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Energy XM2+ 195/65R15',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy Eco 2 K435 205/55R16', brand: { '@type': 'Brand', name: 'Hankook' },    offers: { '@type': 'Offer', price: '91',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 205/55R16',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 205/55R16',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '155', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
