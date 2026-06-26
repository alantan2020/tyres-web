import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'City',
  makeSlug: 'honda',
  modelSlug: 'city',
  bgWord: 'CITY',

  seo: {
    title: 'Honda City Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda City GN uses 185/55R16 or 185/60R15 (base). 4×100 bolt pattern (same as Jazz). From $88 installed. Compare Michelin vs Bridgestone. WhatsApp for a quote.',
    ogDescription: 'Honda City GN uses 185/55R16 or 185/60R15. 4×100 bolt, CB 56.1mm — same as Jazz. From $88 installed in Singapore.',
    twitterDescription: 'Honda City uses 185/55R16 (GN) or 185/60R15 (base). From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '185/55R16',
  },

  defaultGen: 'gn',

  generations: [
    {
      key: 'gn',
      label: 'Gen 6 GN',
      years: '2021–2026',
      heroChips: [
        { label: '1.5 i-VTEC / HEV OE', value: '185/55R16' },
        { label: '1.5 base OE',          value: '185/60R15' },
        { label: 'From installed',         value: '$88', green: true },
      ],
      variants: [
        { name: '1.5 i-VTEC / 1.5 e:HEV (standard / high trim)', sizes: [
          { tag: 'OE',  size: '185/55R16', note: '标配，最常见' },
          { tag: 'Alt', size: '195/50R16', note: '稍宽，同直径' },
          { tag: 'Alt', size: '205/45R17', note: '17" 升级' },
        ]},
        { name: '1.5 i-VTEC (base trim)', sizes: [
          { tag: 'OE',  size: '185/60R15', note: '入门版 15" 标配' },
          { tag: 'Alt', size: '185/55R16', note: '升 16"，更现代' },
        ]},
      ],
    },
    {
      key: 'gm6_fl',
      label: 'Gen 5 GM6 Facelift',
      years: '2017–2022',
      heroChips: [
        { label: '1.5 i-VTEC high OE', value: '185/55R16' },
        { label: '1.5 base OE',         value: '175/65R15' },
        { label: 'From installed',        value: '$88', green: true },
      ],
      variants: [
        { name: '1.5 i-VTEC / i-DTEC (high trim)', sizes: [
          { tag: 'OE',  size: '185/55R16', note: '高配标配' },
          { tag: 'Alt', size: '185/60R15', note: '15" 替换，更好找货' },
        ]},
        { name: '1.5 i-VTEC / i-DTEC (base trim)', sizes: [
          { tag: 'OE',  size: '175/65R15', note: '入门版 15" 标配' },
          { tag: 'Alt', size: '185/60R15', note: '稍宽，同直径' },
        ]},
      ],
    },
    {
      key: 'gm6',
      label: 'Gen 5 GM6',
      years: '2014–2017',
      heroChips: [
        { label: '1.5 high OE',  value: '185/55R16' },
        { label: '1.5 mid OE',   value: '185/60R15' },
        { label: '1.5 base OE',  value: '175/65R15' },
      ],
      variants: [
        { name: '1.5 i-VTEC (high trim)', sizes: [
          { tag: 'OE',  size: '185/55R16', note: '高配标配' },
        ]},
        { name: '1.5 i-VTEC / i-DTEC (mid trim)', sizes: [
          { tag: 'OE',  size: '185/60R15', note: '中配标配' },
          { tag: 'Alt', size: '185/55R16', note: '升 16"' },
        ]},
        { name: '1.5 i-DTEC (base trim)', sizes: [
          { tag: 'OE',  size: '175/65R15', note: '最入门' },
          { tag: 'Alt', size: '185/60R15', note: '升档替换' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021–2026 · GN · high / HEV 16"',   width: '6J',   diameter: '16"', offset: 'ET53', boltPattern: '4×100' },
    { label: '2021–2026 · GN · base 15"',          width: '6J',   diameter: '15"', offset: 'ET53', boltPattern: '4×100' },
    { label: '2017–2022 · GM6 FL · high 16"',      width: '6J',   diameter: '16"', offset: 'ET53', boltPattern: '4×100' },
    { label: '2014–2022 · GM6 / FL · base 15"',    width: '5.5J', diameter: '15"', offset: 'ET51', boltPattern: '4×100' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Honda City uses 4×100 four-lug bolt pattern with 56.1mm centre bore — same as Honda Jazz. Wheels are interchangeable between City and Jazz (confirm offset compatibility). NOT compatible with five-lug Toyota (Vios 5×114.3, Corolla 5×114.3).',
  },

  priceTabs: [
    {
      size: '185/55R16',
      tabLabel: '185/55R16 · GN 主力 / GM6 高配',
      budget: {
        name: 'Nexen N\'Blue HD Plus',
        desc: '低滚阻 · 日常通勤 · 性价比首选',
        price: 88,
        also: 'Also: Triangle ReliaX TE307, Blackhawk Street-H HU71',
        waText: 'Honda City 185%2F55R16 budget tyre quote (Nexen NBlue or similar)',
      },
      mid: {
        name: 'Hankook Ventus Prime 4 (K135)',
        desc: '湿地优秀 · 静音 · 最受 City GN 车主好评',
        price: 118,
        also: 'Also: Yokohama AE51, Dunlop Sport Blue Response',
        waText: 'Honda City 185%2F55R16 mid-range tyre quote (Hankook Ventus Prime 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: '最佳湿地制动 · 超低滚阻 · 5年保用',
        price: 158,
        also: 'Also: Continental PremiumContact 7, Bridgestone Turanza 6',
        waText: 'Honda City 185%2F55R16 premium tyre quote (Michelin Primacy 5)',
      },
      setEstimate: 'Budget $352–$415 · Mid-range $472–$540 · Premium $632–$730',
    },
    {
      size: '185/60R15',
      tabLabel: '185/60R15 · GM6 中配 / GN 基础版',
      budget: {
        name: 'Dunlop SP Touring R1',
        desc: '耐磨 · 省油 · 货源充足',
        price: 82,
        also: 'Also: Blackhawk Street-H HH31, Nexen N\'Priz AH5',
        waText: 'Honda City 185%2F60R15 budget tyre quote (Dunlop SP Touring or similar)',
      },
      mid: {
        name: 'Michelin Energy XM2+',
        desc: '超低滚阻 · 省油 A+ · 最受小型车车主好评',
        price: 110,
        also: 'Also: Yokohama BluEarth ES32, Bridgestone Ecopia EP300',
        waText: 'Honda City 185%2F60R15 mid-range tyre quote (Michelin XM2%2B or similar)',
        popular: true,
      },
      premium: {
        name: 'Yokohama BluEarth-GT AE51',
        desc: '静音 · 湿地优秀 · 驾驶感强',
        price: 128,
        also: 'Also: Bridgestone Ecopia EP300, Continental PremiumContact 6',
        waText: 'Honda City 185%2F60R15 premium tyre quote (Yokohama AE51)',
      },
      setEstimate: 'Budget $328–$390 · Mid-range $440–$510 · Premium $512–$600',
    },
  ],

  radarSize: '185/55R16',
  radarSource: 'Nexen (14 reviews) · Hankook (22 reviews) · Michelin (28 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 72, 76, 70, 84, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nexen\nN\'Blue HD Plus',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.3',
      scores: [80, 83, 82, 80, 76, 78], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Hankook\nVentus Prime 4',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '83', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.7',
      scores: [85, 87, 85, 84, 76, 84], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 5',
      stats: [{ k: 'Wet', v: '85', hi: true }, { k: 'Dry', v: '87', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Fuel', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'City GN（2021+）· 185/55R16 标配车主',
      color: 'red',
      genKey: 'gn',
      body: 'GN 世代 City（2021年后）全系标配 <strong>185/55R16</strong>，是新加坡最常见的 City 轮胎尺码。推荐 Hankook Ventus Prime 4（$118/条）——湿地抓地优秀，静音，适合 City 的城市通勤定位，整套四条约 $472。想要更省油选 Michelin Primacy 5（$158/条），EU A 级滚阻，最省油，适合 e:HEV 混动版。',
    },
    {
      title: 'City GM6（2014–2022）· 185/60R15 中配车主',
      color: 'blue',
      genKey: 'gm6_fl',
      body: 'GM6 中配版用 185/60R15，尺码货源充足，价格最实惠。推荐 Michelin Energy XM2+（$110/条）——超低滚阻，省油 A+，整套约 $440，是最值得投入的一款。Dunlop SP Touring R1（$82/条）整套只需 $328，性价比最高，适合预算有限的车主。<br>City 与 Jazz 用同一螺孔（4×100, CB 56.1mm），轮辋可互换（需确认 ET 值兼容）。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda City use in Singapore?',
      a: 'Gen 6 GN (2021–present): OE 185/55R16 (standard / HEV) or 185/60R15 (base trim). Gen 5 GM6 Facelift (2017–2022): OE 185/55R16 (high) or 175/65R15 (base). Gen 5 GM6 (2014–2017): OE 185/55R16 (high), 185/60R15 (mid), or 175/65R15 (base). Most City on Singapore roads use 185/55R16.',
    },
    {
      q: 'What is the bolt pattern of the Honda City?',
      a: 'Honda City uses 4×100 bolt pattern with 56.1mm centre bore — the same as Honda Jazz. This means City and Jazz wheels are interchangeable (check offset matches). This is a four-lug pattern — NOT compatible with the five-lug Toyota Vios (5×114.3) or Corolla.',
    },
    {
      q: 'How much does it cost to change Honda City tyres in Singapore?',
      a: 'For 185/55R16 (GN standard): budget ~$88/tyre; mid-range ~$118 (Hankook Ventus Prime 4, popular); premium ~$158 (Michelin Primacy 5). Full set: ~$352–$632. For 185/60R15 (GM6 mid / GN base): budget $82 (Dunlop); mid $110 (Michelin XM2+); premium $128 (Yokohama AE51). Full set: ~$328–$512.',
    },
    {
      q: 'Are Honda City and Honda Jazz wheels interchangeable?',
      a: 'Yes — both use 4×100 bolt pattern with 56.1mm centre bore. However, confirm the offset (ET value) is compatible before swapping. City GM6 uses ET51–ET53, Jazz uses ET45–ET50. Mixing significantly different offsets can cause tyre rubbing. Tyre size must also be appropriate for the rim width.',
    },
    {
      q: 'How long do Honda City tyres last in Singapore?',
      a: 'Honda City tyres typically last 3–5 years or 40,000–55,000 km. Michelin Energy XM2+ (for 185/60R15) averages 50,000–60,000 km. Hankook Ventus Prime 4 (185/55R16) averages 45,000–55,000 km. Budget tyres typically last 30,000–40,000 km. Rotate front/rear every 10,000 km.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nexen N\'Blue HD Plus 185/55R16',      brand: { '@type': 'Brand', name: 'Nexen' },       offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Hankook Ventus Prime 4 185/55R16',    brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 5 185/55R16',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Dunlop SP Touring R1 185/60R15',      brand: { '@type': 'Brand', name: 'Dunlop' },      offers: { '@type': 'Offer', price: '82',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Michelin Energy XM2+ 185/60R15',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '110', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Yokohama BluEarth-GT AE51 185/60R15', brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
