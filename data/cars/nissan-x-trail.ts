import type { CarData } from './types'

const data: CarData = {
  make: 'Nissan',
  model: 'X-Trail',
  makeSlug: 'nissan',
  modelSlug: 'x-trail',
  bgWord: 'X-TRAIL',

  seo: {
    title: 'Nissan X-Trail Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Nissan X-Trail T33 uses 225/65R17. T32 uses 225/65R17 (mid/4WD) or 215/65R16 (base). From $128 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Nissan X-Trail T32/T33 tyre sizes: 225/65R17 (most trims) or 215/65R16 (T32 base). From $128 installed in Singapore.',
    twitterDescription: 'Nissan X-Trail T32/T33 uses 225/65R17. From $128 installed in Singapore.',
    priceFrom: 128,
    oeSize: '225/65R17',
  },

  defaultGen: 't33',

  generations: [
    {
      key: 't33',
      label: 'T33 (2022–2026)',
      years: '2022–2026',
      heroChips: [
        { label: '1.5 e-Power / 2WD', value: '225/65R17' },
        { label: 'From installed', value: '$128', green: true },
      ],
      variants: [
        { name: '1.5 e-Power (all trims)', sizes: [
          { tag: 'OE',  size: '225/65R17' },
          { tag: 'Alt', size: '235/55R18', note: '18" 升级，顶配款可选' },
        ]},
      ],
    },
    {
      key: 't32fl',
      label: 'T32 FL (2017–2022)',
      years: '2017–2022',
      heroChips: [
        { label: '2.0 / 2.5 mid–top', value: '225/65R17' },
        { label: 'From installed', value: '$128', green: true },
      ],
      variants: [
        { name: '2.0 / 2.5 (mid & 4WD)', sizes: [
          { tag: 'OE',  size: '225/65R17' },
          { tag: 'Alt', size: '225/60R18', note: '18" 升级选装' },
        ]},
        { name: '2.0 2WD base', sizes: [
          { tag: 'OE',  size: '215/65R16', note: 'T32 FL 基础版' },
          { tag: 'Alt', size: '225/65R17', note: '17" 升级，与中高配通用' },
        ]},
      ],
    },
    {
      key: 't32',
      label: 'T32 (2014–2017)',
      years: '2014–2017',
      heroChips: [
        { label: '2.0 / 2.5 mid–4WD', value: '225/65R17' },
        { label: '2.0 2WD base', value: '215/65R16' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: '2.0 2WD base', sizes: [
          { tag: 'OE',  size: '215/65R16' },
          { tag: 'Alt', size: '225/65R17', note: '17" 轮辋升级' },
        ]},
        { name: '2.0 / 2.5 (mid & 4WD)', sizes: [
          { tag: 'OE',  size: '225/65R17' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · T33 · all trims · 17"',      width: '7J',   diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2017–2022 · T32 FL · mid/4WD · 17"',    width: '7J',   diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2014–2022 · T32 / FL · base 2WD · 16"', width: '6.5J', diameter: '16"', offset: 'ET40', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '66.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'All T32 and T33 generations share 5×114.3 bolt pattern. Compatible with Nissan Kicks, Qashqai, and most Nissan SUVs of the same era.',
  },

  priceTabs: [
    {
      size: '225/65R17',
      tabLabel: '225/65R17 · T32 / T33 主力尺码',
      budget: {
        name: 'Blackhawk HH01 Hiscend-H',
        desc: '日常用途 · 耐磨 · 适合新加坡城市 SUV 用车',
        price: 128,
        also: 'Also: Hankook Kinergy S, Triangle AdvanteX SUV TR259',
        waText: 'Nissan X-Trail 225%2F65R17 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Yokohama Geolandar A580',
        desc: 'SUV 向 · 湿地稳定 · 低噪音 · 性价比最高',
        price: 158,
        also: 'Also: Bridgestone Alenza A001, Dunlop GrandTrek PT3',
        waText: 'Nissan X-Trail 225%2F65R17 mid-range tyre quote (Yokohama Geolandar or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Latitude Sport 3',
        desc: '最佳湿地制动 · 高速稳定 · 低滚阻',
        price: 228,
        also: 'Also: Continental CrossContact RX, Pirelli Scorpion Verde',
        waText: 'Nissan X-Trail 225%2F65R17 premium tyre quote (Michelin Latitude Sport 3)',
      },
      setEstimate: 'Budget $512–$600 · Mid-range $632–$730 · Premium $912–$1,050',
    },
    {
      size: '215/65R16',
      tabLabel: '215/65R16 · T32 base 2WD',
      budget: {
        name: 'Blackhawk Hiscend-H',
        desc: '16" SUV 日常用途 · 耐磨',
        price: 98,
        also: 'Also: Kumho Crugen HP91, Triangle AdvanteX',
        waText: 'Nissan X-Trail 215%2F65R16 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler H/P Sport',
        desc: '舒适 SUV 向 · 湿地 B 级 · 适合城市用途',
        price: 148,
        also: 'Also: Yokohama A580, Dunlop GrandTrek PT3',
        waText: 'Nissan X-Trail 215%2F65R16 mid-range tyre quote (Bridgestone Dueler or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental CrossContact RX',
        desc: '城市 SUV 最佳选择 · 静音 · 湿地 A 级',
        price: 185,
        also: 'Also: Michelin Latitude Tour HP, Pirelli Scorpion AS',
        waText: 'Nissan X-Trail 215%2F65R16 premium tyre quote (Continental CrossContact RX)',
      },
      setEstimate: 'Budget $392–$460 · Mid-range $592–$680 · Premium $740–$850',
    },
  ],

  radarSize: '225/65R17',
  radarSource: 'Blackhawk (10 reviews) · Yokohama (18 reviews) · Michelin (14 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [64, 72, 76, 66, 74, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nHiscend-H',
      stats: [{ k: 'Wet', v: '64', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '76', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.0',
      scores: [76, 80, 80, 78, 78, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Yokohama\nGeolandar A580',
      stats: [{ k: 'Wet', v: '76', hi: false }, { k: 'Dry', v: '80', hi: true }, { k: 'Wear', v: '80', hi: true }, { k: 'NVH', v: '78', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.4',
      scores: [84, 86, 78, 82, 82, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nLatitude Sport 3',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Value', v: '72', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'T33 e-Power / T32 FL 中高配 （225/65R17）',
      color: 'blue',
      genKey: 't33',
      body: '新加坡市面 X-Trail 绝大多数配 <strong>225/65R17</strong>，货源充足价格优惠。城市 SUV 用途优先选 <strong>Yokohama Geolandar A580</strong>（$158/条）——静音、湿地稳定、耐磨，整套约 $632，是 X-Trail 最受好评的中档选择。追求最佳湿地安全感选 Michelin Latitude Sport 3（$228/条），代价是整套约 $912。',
    },
    {
      title: 'T32 / T32 FL 2WD 基础版（215/65R16）',
      color: 'red',
      genKey: 't32',
      body: 'T32 基础 2WD 版原配 <strong>215/65R16</strong>，价格比 225/65R17 便宜约 $20–40/条，是预算优先车主的好选择。Bridgestone Dueler H/P Sport（$148/条）静音舒适，适合城市使用。如果考虑升级到 17" 轮辋配 225/65R17，整套轮辋+胎价格约多 $400–600，但搭配更广。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Nissan X-Trail use in Singapore?',
      a: 'Nissan X-Trail T33 (2022+, e-Power): 225/65R17 for all trims. T32 FL (2017–2022): 225/65R17 for mid and 4WD trims; 215/65R16 for base 2WD. T32 (2014–2017): same as T32 FL. Check the door jamb sticker or tyre sidewall to confirm your exact size.',
    },
    {
      q: 'What is the bolt pattern of the Nissan X-Trail T32 and T33?',
      a: 'Both T32 and T33 X-Trail use 5×114.3 bolt pattern with 66.1mm centre bore. Lug nut thread is M12×1.5, tightening torque 108 Nm. This bolt pattern is compatible with Nissan Kicks, Qashqai, and many other Nissan/Infiniti vehicles.',
    },
    {
      q: 'How much does it cost to replace Nissan X-Trail tyres in Singapore?',
      a: 'For 225/65R17 (most common): budget from $128 per tyre installed; mid-range $158–$188; premium $228–$258. A full set of 4 mid-range tyres costs approximately $632–$750. For 215/65R16 (T32 base): budget from $98; mid $148–$165; premium $185–$210.',
    },
    {
      q: 'Should I choose all-season or highway tyres for my X-Trail in Singapore?',
      a: 'In Singapore, all-season tyres are not relevant — we have a tropical climate with heavy rain year-round. Choose SUV highway/touring tyres (H/T) optimised for wet performance. The Yokohama Geolandar A580 and Bridgestone Alenza A001 are top picks. Pure A/T off-road tyres are noisier on tarmac and not necessary for Singapore roads.',
    },
    {
      q: 'Can I use 225/65R17 tyres on a T32 X-Trail that came with 215/65R16?',
      a: 'Not without changing rims — the two sizes require different rim diameters (16" vs 17"). If you upgrade your rims from 16" to 17" (same 5×114.3 bolt pattern), you can then fit 225/65R17. The overall tyre diameter is similar between these two sizes, keeping speedometer readings accurate.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Hiscend-H 225/65R17',        brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Yokohama Geolandar A580 225/65R17',    brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Latitude Sport 3 225/65R17', brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Blackhawk Hiscend-H 215/65R16',        brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Dueler H/P Sport 215/65R16', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Continental CrossContact RX 215/65R16', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '185', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
