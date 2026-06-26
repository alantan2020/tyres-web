import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Yaris',
  makeSlug: 'toyota',
  modelSlug: 'yaris',
  bgWord: 'YARIS',

  seo: {
    title: 'Toyota Yaris Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Yaris XP150 uses 185/60R15 or 175/65R14. ⚠️ 4×100 bolt pattern (four lugs). From $72 installed in Singapore. Compare Michelin vs Bridgestone. WhatsApp for a quote.',
    ogDescription: 'Toyota Yaris XP150 uses 185/60R15 or 175/65R14. ⚠️ 4×100 four-lug bolt pattern. From $72 installed in Singapore.',
    twitterDescription: 'Toyota Yaris uses 185/60R15 or 175/65R14. ⚠️ 4×100 bolt. From $72 installed in Singapore.',
    priceFrom: 72,
    oeSize: '185/60R15',
  },

  defaultGen: 'xp150_fl',

  generations: [
    {
      key: 'xp150_fl',
      label: 'XP150 Facelift',
      years: '2017–2022',
      heroChips: [
        { label: '1.5 VVT-i OE', value: '185/60R15' },
        { label: '1.2 VVT-i OE', value: '175/65R14' },
        { label: 'From installed', value: '$72', green: true },
      ],
      variants: [
        { name: '1.5 VVT-i (G / GR Sport)', sizes: [
          { tag: 'OE',  size: '185/60R15', note: '标配' },
          { tag: 'Alt', size: '195/50R16', note: '16" 升级' },
          { tag: 'Alt', size: '195/55R16', note: '16" 升级，更舒适' },
        ]},
        { name: '1.2 VVT-i (base / E trim)', sizes: [
          { tag: 'OE',  size: '175/65R14', note: '14" 标配' },
          { tag: 'Alt', size: '185/60R15', note: '升 15"，更常见' },
        ]},
      ],
    },
    {
      key: 'xp150',
      label: 'XP150',
      years: '2014–2017',
      heroChips: [
        { label: '1.5 VVT-i OE', value: '185/60R15' },
        { label: '1.2 VVT-i OE', value: '175/65R14' },
        { label: 'From installed', value: '$72', green: true },
      ],
      variants: [
        { name: '1.5 VVT-i', sizes: [
          { tag: 'OE',  size: '185/60R15' },
          { tag: 'Alt', size: '195/55R16', note: '16" 升级' },
        ]},
        { name: '1.2 VVT-i', sizes: [
          { tag: 'OE',  size: '175/65R14' },
          { tag: 'Alt', size: '185/60R15', note: '升 15"' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2014–2022 · XP150 / FL · 1.5 OE 15"', width: '5J',   diameter: '15"', offset: 'ET39', boltPattern: '4×100' },
    { label: '2014–2022 · XP150 / FL · 1.2 OE 14"', width: '5J',   diameter: '14"', offset: 'ET39', boltPattern: '4×100' },
    { label: '2014–2022 · XP150 / FL · Alt 16"',     width: '6J',   diameter: '16"', offset: 'ET39', boltPattern: '4×100' },
  ],
  rimCommon: {
    centreBore: '54.1mm',
    stud: 'M12×1.5',
    torque: '103 Nm',
    warning: '⚠️ Toyota Yaris uses 4×100 bolt pattern with FOUR lug nuts — NOT the 5×114.3 used on Vios, Corolla Altis, Camry, or most Toyota. Same bolt as Honda Jazz (4×100) but different centre bore: Yaris CB 54.1mm vs Jazz CB 56.1mm. Always verify before buying aftermarket wheels.',
  },

  priceTabs: [
    {
      size: '185/60R15',
      tabLabel: '185/60R15 · XP150 1.5 标配',
      budget: {
        name: 'Dunlop SP Touring R1',
        desc: '省油 · 耐磨 · 日常通勤首选',
        price: 82,
        also: 'Also: Nexen N\'Priz AH5, Blackhawk Street-H HH31',
        waText: 'Toyota Yaris 185%2F60R15 budget tyre quote (Dunlop SP Touring or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP300',
        desc: '省油 · 湿地 A · 最受小型车车主好评',
        price: 108,
        also: 'Also: Michelin Energy XM2+, Yokohama BluEarth ES32',
        waText: 'Toyota Yaris 185%2F60R15 mid-range tyre quote (Bridgestone Ecopia or similar)',
        popular: true,
      },
      premium: {
        name: 'Yokohama BluEarth-GT AE51',
        desc: '静音 · 湿地优秀 · 适合 Yaris 运动版定位',
        price: 128,
        also: 'Also: Continental PremiumContact 6, Michelin Primacy 4',
        waText: 'Toyota Yaris 185%2F60R15 premium tyre quote (Yokohama AE51)',
      },
      setEstimate: 'Budget $328–$390 · Mid-range $432–$500 · Premium $512–$600',
    },
    {
      size: '175/65R14',
      tabLabel: '175/65R14 · XP150 1.2 基础版',
      budget: {
        name: 'Bridgestone EP150',
        desc: '省油 · 耐磨 · 新加坡 14" 胎货源充足',
        price: 72,
        also: 'Also: Blackhawk Street-H HH11, Dunlop SP Touring',
        waText: 'Toyota Yaris 175%2F65R14 budget tyre quote (Bridgestone EP150 or similar)',
      },
      mid: {
        name: 'Michelin Energy XM2+',
        desc: '超低滚阻 · 省油 A+ · 适合小型车长期使用',
        price: 85,
        also: 'Also: Yokohama BluEarth ES32, Continental EcoContact 6',
        waText: 'Toyota Yaris 175%2F65R14 mid-range tyre quote (Michelin XM2%2B)',
        popular: true,
      },
      premium: {
        name: 'Yokohama BluEarth ES32',
        desc: '静音 · 省油 A · 最佳 14" 综合表现',
        price: 90,
        also: 'Also: Bridgestone Ecopia EP300, Dunlop EC300+',
        waText: 'Toyota Yaris 175%2F65R14 premium tyre quote (Yokohama ES32)',
      },
      setEstimate: 'Budget $288–$340 · Mid-range $340–$400 · Premium $360–$420',
    },
  ],

  radarSize: '185/60R15',
  radarSource: 'Dunlop (16 reviews) · Bridgestone (24 reviews) · Yokohama (20 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
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
      title: 'Yaris 1.5（2014–2022）· 185/60R15 车主',
      color: 'red',
      genKey: 'xp150_fl',
      body: 'Yaris 1.5 的 185/60R15 是新加坡最常见的小型车胎尺码之一，货源充足，价格实惠。推荐 Bridgestone Ecopia EP300（$108/条）——低滚阻省油，湿地 A 级，整套四条约 $432，适合 Yaris 的日常通勤定位。<br>⚠️ Yaris 用 <strong>4×100 四孔</strong>，和 Vios（5×114.3）、Corolla（5×114.3）完全不兼容，购买轮辋必须确认是四孔款。',
    },
    {
      title: 'Yaris 1.2（基础版）· 175/65R14 车主',
      color: 'blue',
      genKey: 'xp150',
      body: '1.2 版本用 175/65R14，是新加坡最便宜的轮胎尺码之一，整套四条最低只需 $288。推荐 Michelin Energy XM2+（$85/条）——超低滚阻，适合 1.2 小排量的省油定位，价格仅比入门 EP150 贵 $13 但使用寿命更长。也可升级到 185/60R15（需换 15" 轮辋），让胎型更现代。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Yaris use in Singapore?',
      a: 'Toyota Yaris XP150 and XP150 Facelift (2014–2022): 1.5 VVT-i uses OE 185/60R15 (standard) or Alt 195/50R16 / 195/55R16 (with 16" wheels). 1.2 VVT-i base uses OE 175/65R14, Alt 185/60R15. Note: Toyota Yaris was discontinued in Singapore after the XP150 generation.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Yaris?',
      a: 'Toyota Yaris uses 4×100 bolt pattern — FOUR lug nuts, not five. This is the same number as Honda Jazz, but Yaris centre bore (54.1mm) differs from Jazz (56.1mm). The 4×100 pattern is also different from Vios, Corolla, RAV4 — all of which use 5×114.3. Always verify bolt pattern and centre bore before buying aftermarket wheels.',
    },
    {
      q: 'How much does it cost to change Toyota Yaris tyres in Singapore?',
      a: 'For 185/60R15 (1.5 trim): budget $82/tyre (Dunlop SP Touring R1); mid-range $108 (Bridgestone Ecopia EP300, popular); premium $128 (Yokohama AE51). Full set: ~$328–$512. For 175/65R14 (1.2 base): budget $72 (Bridgestone EP150); mid $85 (Michelin XM2+); premium $90 (Yokohama ES32). Full set: ~$288–$360.',
    },
    {
      q: 'Is the Toyota Yaris still sold in Singapore?',
      a: 'No. Toyota Singapore discontinued the Yaris (XP150 generation) around 2021–2022. The Yaris Cross has taken over as the successor in the Toyota lineup in Singapore. However, Yaris tyres (185/60R15 and 175/65R14) remain widely available as they are shared with many other small cars.',
    },
    {
      q: 'Can I use Honda Jazz wheels on a Toyota Yaris?',
      a: 'Technically the bolt pattern is the same (4×100), but the centre bore differs: Yaris is 54.1mm, Jazz is 56.1mm. A Jazz wheel on a Yaris hub would have a 2mm gap — it may appear to fit but won\'t be properly hub-centric. This can cause vibration and stress on the lug nuts. Not recommended without proper hub-centric rings.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Dunlop SP Touring R1 185/60R15',       brand: { '@type': 'Brand', name: 'Dunlop' },      offers: { '@type': 'Offer', price: '82',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 185/60R15',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Yokohama BluEarth-GT AE51 185/60R15', brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Bridgestone EP150 175/65R14',          brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '72',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Michelin Energy XM2+ 175/65R14',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '85',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Yokohama BluEarth ES32 175/65R14',    brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '90',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
