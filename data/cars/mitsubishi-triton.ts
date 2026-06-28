import type { CarData } from './types'

const data: CarData = {
  make: 'Mitsubishi',
  model: 'Triton',
  makeSlug: 'mitsubishi',
  modelSlug: 'triton',
  bgWord: 'TRITON',

  seo: {
    title: 'Mitsubishi Triton Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mitsubishi Triton MR (2019+) uses 265/65R17 (base) or 265/60R18 (Athlete Plus). ⚠️ 6×139.7 bolt pattern, 67.1mm CB, M12×1.5 nut. 4WD pickup truck. From $108 installed.',
    ogDescription: 'Mitsubishi Triton MR: 265/65R17 (base), 265/60R18 (Athlete+). ⚠️ 6×139.7 bolt pattern. Pickup truck. From $108.',
    twitterDescription: 'Mitsubishi Triton uses 265/65R17 or 265/60R18. ⚠️ 6×139.7 bolt pattern (truck). From $108.',
    priceFrom: 108,
    oeSize: '265/65R17',
  },

  defaultGen: 'mr',

  generations: [
    {
      key: 'mr',
      label: 'MR 6th Gen (2019–2026)',
      years: '2019–2026',
      note: 'Current generation Mitsubishi Triton. GLX and GLS base grades use 265/65R17 (17"); Athlete Plus and top trims use 265/60R18 (18"). ⚠️ 6×139.7 bolt pattern — same as Isuzu D-Max, Suzuki Jimny, and Land Cruiser. Popular as a work and lifestyle pickup in Singapore.',
      heroChips: [
        { label: 'GLX / GLS OE',       value: '265/65R17' },
        { label: 'Athlete Plus OE',     value: '265/60R18' },
        { label: '⚠️ 6×139.7 bolt',  value: 'Truck pattern' },
      ],
      variants: [
        { name: 'Triton GLX / GLS (17")', sizes: [
          { tag: 'OE',  size: '265/65R17' },
          { tag: 'AT',  size: '265/65R17 AT', note: 'A/T 全地形胎，越野性能更强' },
        ]},
        { name: 'Triton Athlete Plus (18")', sizes: [
          { tag: 'OE',  size: '265/60R18' },
          { tag: 'AT',  size: '265/60R18 AT', note: '18" AT 升级，城市越野首选' },
        ]},
      ],
    },
    {
      key: 'mq',
      label: 'MQ 5th Gen (2015–2019)',
      years: '2015–2019',
      note: 'Previous Triton MQ. GLX uses 265/65R17; GLS/Athlete uses 265/60R18. Same 6×139.7 bolt pattern.',
      heroChips: [
        { label: 'MQ GLX OE', value: '265/65R17' },
        { label: 'MQ Athlete OE', value: '265/60R18' },
        { label: 'From installed', value: '$108', green: true },
      ],
      variants: [
        { name: 'MQ GLX (17")', sizes: [{ tag: 'OE', size: '265/65R17' }] },
        { name: 'MQ Athlete (18")', sizes: [{ tag: 'OE', size: '265/60R18' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'MR 2019+ · GLX/GLS · 17"',       width: '7.0J', diameter: '17"', offset: 'ET30', boltPattern: '6×139.7' },
    { label: 'MR 2019+ · Athlete Plus · 18"',   width: '7.5J', diameter: '18"', offset: 'ET30', boltPattern: '6×139.7' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5 nut',
    torque: '130 Nm',
    notes: '⚠️ Mitsubishi Triton uses 6×139.7 bolt pattern, 67.1mm centre bore — same as Isuzu D-Max, Toyota HiLux/Fortuner, Suzuki Jimny, and Land Cruiser 70/Prado. This is a commercial truck pattern, NOT compatible with standard 5×114.3 passenger car wheels.',
  },

  priceTabs: [
    {
      size: '265/65R17',
      tabLabel: '265/65R17 · Triton GLX / GLS 17"',
      budget: {
        name: 'Hankook Dynapro AT2',
        desc: '17" AT 全地形胎 · Triton 城市越野预算首选',
        price: 108,
        also: 'Also: Kumho Road Venture AT51, Nankang Conqueror AT-5',
        waText: 'Mitsubishi Triton 265%2F65R17 budget AT tyre quote (Hankook Dynapro AT2 or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler AT 001',
        desc: '17" AT 旗舰 · Triton 城市越野静音首选',
        price: 188,
        also: 'Also: Yokohama Geolandar AT G015, Falken Wildpeak AT3W',
        waText: 'Mitsubishi Triton 265%2F65R17 mid-range AT tyre quote (Bridgestone Dueler AT 001 or similar)',
        popular: true,
      },
      premium: {
        name: 'BFGoodrich All-Terrain T/A KO2',
        desc: '17" AT 硬派越野旗舰 · Triton 全地形最强',
        price: 258,
        also: 'Also: Michelin LTX AT2, Continental CrossContact AT',
        waText: 'Mitsubishi Triton 265%2F65R17 premium AT tyre quote (BFGoodrich KO2)',
      },
      setEstimate: 'Budget $432–$600 · Mid-range $752–$1,000 · Premium $1,032–$1,280',
    },
    {
      size: '265/60R18',
      tabLabel: '265/60R18 · Triton Athlete Plus 18"',
      budget: {
        name: 'Hankook Dynapro AT2',
        desc: '18" AT 城市越野胎 · Triton Athlete 预算选',
        price: 118,
        also: 'Also: Kumho Road Venture AT51, Nankang Conqueror AT-5',
        waText: 'Mitsubishi Triton Athlete 265%2F60R18 budget AT tyre quote (Hankook Dynapro AT2 or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler HP Sport',
        desc: '18" HT 公路 SUV 胎 · Athlete Plus 城市通勤推荐',
        price: 218,
        also: 'Also: Continental CrossContact RX, Michelin Latitude Sport 3',
        waText: 'Mitsubishi Triton Athlete 265%2F60R18 mid-range tyre quote (Bridgestone Dueler HP Sport or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental CrossContact RX',
        desc: '18" SUV 旗舰 · Athlete Plus 干湿均衡最佳',
        price: 278,
        also: 'Also: Michelin Latitude Sport 3, Pirelli Scorpion Verde',
        waText: 'Mitsubishi Triton Athlete 265%2F60R18 premium tyre quote (Continental CrossContact RX)',
      },
      setEstimate: 'Budget $472–$640 · Mid-range $872–$1,120 · Premium $1,112–$1,440',
    },
  ],

  radarSize: '265/65R17',
  radarSource: 'Bridgestone (9 reviews) · BFGoodrich (8 reviews) · Hankook (7 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget · AT', labelClass: 'tier', score: '7.4',
      scores: [72, 74, 72, 78, 76, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nDynapro AT2',
      stats: [{ k: 'Wet', v: '72', hi: false }, { k: 'Off-road', v: '78', hi: true }, { k: 'NVH', v: '72', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.4',
      scores: [78, 80, 78, 82, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nDueler AT 001',
      stats: [{ k: 'Wet', v: '78', hi: false }, { k: 'Off-road', v: '82', hi: true }, { k: 'NVH', v: '78', hi: false }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium · AT', labelClass: 'tier tier--premium', score: '8.7',
      scores: [78, 82, 72, 88, 86, 74], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'BFGoodrich\nAll-Terrain KO2',
      stats: [{ k: 'Wet', v: '78', hi: false }, { k: 'Off-road', v: '88', hi: true }, { k: 'NVH', v: '72', hi: false }, { k: 'Durability', v: '86', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Triton（265/65R17）— ⚠️ 6×139.7 卡车螺孔，不能混用乘用车轮圈',
      color: 'red',
      genKey: 'mr',
      body: '⚠️ Mitsubishi Triton 是 6×139.7 卡车螺孔——与 Isuzu D-Max、HiLux 相同，但与新加坡常见的 5×114.3 日韩乘用车轮圈不兼容。Triton 使用场景通常分两类：①<strong>城市通勤为主</strong>：选 HT（公路胎）如 Bridgestone Dueler HP Sport，更静、更省油；②<strong>有越野需求</strong>：选 AT（全地形）如 Bridgestone Dueler AT 001（$188/条），城市与越野兼顾，静音性比纯越野胎好得多。纯越野爱好者可选 BFGoodrich KO2，但在新加坡路面噪音较大。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mitsubishi Triton use in Singapore?',
      a: 'Mitsubishi Triton MR (2019+): GLX/GLS base uses 265/65R17; Athlete Plus uses 265/60R18. ⚠️ 6×139.7 bolt pattern (truck PCD) — NOT compatible with standard passenger car wheels. Centre bore 67.1mm.',
    },
    {
      q: 'What are the best tyres for the Mitsubishi Triton in Singapore?',
      a: 'For city driving: Bridgestone Dueler HP Sport or Continental CrossContact RX (quieter, better fuel economy). For mixed city/off-road: Bridgestone Dueler AT 001 (265/65R17, $188/tyre). For off-road: BFGoodrich All-Terrain KO2 ($258/tyre).',
    },
    {
      q: 'How much does it cost to replace Mitsubishi Triton tyres in Singapore?',
      a: 'For 265/65R17 (base): budget AT from $108/tyre; mid-range (Bridgestone Dueler AT) $188; premium (BFGoodrich KO2) $258. Full set $432–$1,032. For Athlete Plus 265/60R18: from $118 budget; mid $218; premium $278.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Dynapro AT2 265/65R17',         brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Dueler AT 001 265/65R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Continental CrossContact RX 265/60R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '278', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
