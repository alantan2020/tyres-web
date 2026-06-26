import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Land Cruiser Prado',
  makeSlug: 'toyota',
  modelSlug: 'land-cruiser-prado',
  bgWord: 'PRADO',

  seo: {
    title: 'Toyota Land Cruiser Prado Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Land Cruiser Prado 150 uses 265/65R17 or 265/55R19. ⚠️ 6×139.7 bolt, CB 95.2mm. From $148 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Toyota Land Cruiser Prado 150 uses 265/65R17 or 265/55R19. ⚠️ 6×139.7 six-lug, CB 95.2mm. From $148 installed.',
    twitterDescription: 'Toyota Land Cruiser Prado 150 uses 265/65R17 or 265/55R19. From $148 installed in Singapore.',
    priceFrom: 148,
    oeSize: '265/65R17',
  },

  defaultGen: 'j150_fl',

  generations: [
    {
      key: 'j250',
      label: 'J250 Series',
      years: '2024–2026',
      heroChips: [
        { label: '2.8D base OE',   value: '265/65R17' },
        { label: '2.8D top OE',    value: '265/60R20' },
        { label: 'From installed',  value: '$148', green: true },
      ],
      variants: [
        { name: '2.8 D-4D (base trim)', sizes: [
          { tag: 'OE',  size: '265/65R17', note: '入门标配' },
          { tag: 'Alt', size: '265/60R18', note: '18" 常见升级' },
        ]},
        { name: '2.8 D-4D (top trim)', sizes: [
          { tag: 'OE',  size: '265/60R20', note: '顶配 20" 标配' },
          { tag: 'Alt', size: '265/55R20', note: '同直径稍窄' },
        ]},
      ],
    },
    {
      key: 'j150_fl',
      label: 'J150 FL 系列',
      years: '2018–2024',
      heroChips: [
        { label: '2.8D base OE',  value: '265/65R17' },
        { label: '2.8D mid OE',   value: '265/60R18' },
        { label: '2.8D top OE',   value: '265/55R19' },
      ],
      variants: [
        { name: '2.8 D-4D (base trim TX/TXL)', sizes: [
          { tag: 'OE',  size: '265/65R17', note: '标配，最常见' },
          { tag: 'Alt', size: '275/60R17', note: '稍宽同直径' },
        ]},
        { name: '2.8 D-4D (mid trim VX)', sizes: [
          { tag: 'OE',  size: '265/60R18', note: '中配标配' },
          { tag: 'Alt', size: '275/55R18', note: '宽胎升级' },
        ]},
        { name: '2.8 D-4D (top trim VX-L)', sizes: [
          { tag: 'OE',  size: '265/55R19', note: '顶配标配' },
          { tag: 'Alt', size: '275/50R19', note: '宽胎' },
        ]},
      ],
    },
    {
      key: 'j150',
      label: 'J150 初代',
      years: '2009–2018',
      heroChips: [
        { label: '4.0V6 / 3.0D OE', value: '265/65R17' },
        { label: 'From installed',    value: '$148', green: true },
      ],
      variants: [
        { name: '4.0 VVT-i V6 / 3.0 D-4D', sizes: [
          { tag: 'OE',  size: '265/65R17', note: '标配' },
          { tag: 'Alt', size: '265/70R17', note: '稍高侧壁，越野感更好' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2024–2026 · J250 · top 20"',          width: '8J',   diameter: '20"', offset: 'ET30', boltPattern: '6×139.7' },
    { label: '2018–2024 · J150 FL · top 19"',        width: '7.5J', diameter: '19"', offset: 'ET25', boltPattern: '6×139.7' },
    { label: '2018–2024 · J150 FL · mid 18"',        width: '7.5J', diameter: '18"', offset: 'ET25', boltPattern: '6×139.7' },
    { label: '2009–2024 · J150 · base 17"',          width: '7.5J', diameter: '17"', offset: 'ET25', boltPattern: '6×139.7' },
  ],
  rimCommon: {
    centreBore: '95.2mm',
    stud: 'M12×1.5',
    torque: '120 Nm',
    warning: '⚠️ Land Cruiser Prado uses 6×139.7 six-lug with centre bore 95.2mm — different from Toyota Hilux / Fortuner (also 6×139.7 but CB 106.1mm). The bolt pattern is the same, but the smaller CB means Hilux/Fortuner wheels will not seat correctly on the Prado hub without an adapter ring.',
  },

  priceTabs: [
    {
      size: '265/65R17',
      tabLabel: '265/65R17 · J150 基础配 / J250 入门',
      budget: {
        name: 'Nexen NFERA RU1',
        desc: 'SUV H/T 全天候 · 城市公路 · 耐磨',
        price: 148,
        also: 'Also: Triangle TR259 SUV, Sailun Terramax HLT',
        waText: 'Toyota Land Cruiser Prado 265%2F65R17 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler H/T 684',
        desc: '城市 H/T · 静音 · 舒适 · Prado 城市车主首选',
        price: 218,
        also: 'Also: Yokohama Geolandar H/T G056, Dunlop GrandTrek PT5',
        waText: 'Toyota Land Cruiser Prado 265%2F65R17 mid-range tyre quote (Bridgestone Dueler or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin LTX Force',
        desc: '最佳湿地 · 高速稳定 · Prado 豪华 SUV 首选',
        price: 288,
        also: 'Also: Continental CrossContact LX2, Michelin Primacy SUV+',
        waText: 'Toyota Land Cruiser Prado 265%2F65R17 premium tyre quote (Michelin LTX Force)',
      },
      setEstimate: 'Budget $592–$700 · Mid-range $872–$1,000 · Premium $1,152–$1,320',
    },
    {
      size: '265/60R18',
      tabLabel: '265/60R18 · J150 FL VX / 升级',
      budget: {
        name: 'Yokohama Geolandar H/T G056',
        desc: 'SUV H/T · 公路舒适 · 耐磨',
        price: 188,
        also: 'Also: Nexen NFERA RU1, Triangle TR259 SUV',
        waText: 'Toyota Land Cruiser Prado 265%2F60R18 budget tyre quote (Yokohama G056 or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler H/T 684 II',
        desc: '城市公路 · 静音舒适 · Prado 中配首选',
        price: 258,
        also: 'Also: Dunlop GrandTrek PT5, Continental CrossContact LX2',
        waText: 'Toyota Land Cruiser Prado 265%2F60R18 mid-range tyre quote (Bridgestone Dueler H%2FT or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地制动 · 低滚阻 · Prado 豪华定位匹配',
        price: 328,
        also: 'Also: Pirelli Scorpion Verde All Season, Continental CrossContact RX',
        waText: 'Toyota Land Cruiser Prado 265%2F60R18 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $752–$880 · Mid-range $1,032–$1,180 · Premium $1,312–$1,480',
    },
  ],

  radarSize: '265/65R17',
  radarSource: 'Nexen (12 reviews) · Bridgestone (18 reviews) · Michelin (16 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 74, 76, 68, 82, 72], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nexen\nNFERA RU1',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.0',
      scores: [76, 82, 84, 80, 74, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nDueler H/T 684',
      stats: [{ k: 'Wet', v: '76', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '80', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [83, 86, 82, 84, 72, 78], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nLTX Force',
      stats: [{ k: 'Wet', v: '83', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Prado J150 FL · 265/65R17 城市车主',
      color: 'red',
      genKey: 'j150_fl',
      body: 'Prado 是新加坡高端 SUV 市场的代表车型，轮胎要匹配其豪华定位。推荐 Bridgestone Dueler H/T 684（$218/条）——城市公路静音，耐磨，外观大气，整套约 $872。想要更顶级的体验，Michelin LTX Force（$288/条）拥有最短的湿地制动距离，最适合新加坡多雨气候。<br>⚠️ Prado 的中心孔是 <strong>95.2mm</strong>，比 Hilux / Fortuner（106.1mm）小，买二手轮辋时必须核对，不可混用。',
    },
    {
      title: 'Prado J150 VX / J250 · 18"/19"/20" 升级车主',
      color: 'blue',
      genKey: 'j250',
      body: 'J150 VX（265/60R18）和 VX-L（265/55R19）以及 J250 顶配（265/60R20）的轮胎价格明显更高，但 Prado 的定位值得投入。推荐 Michelin Primacy SUV+（$328/条 for 265/60R18）——与 Prado 的豪华 SUV 形象完全匹配，湿地制动领先同级竞品，胎声静，使用寿命 60,000km+。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Land Cruiser Prado use in Singapore?',
      a: 'J150 FL (2018–2024): OE 265/65R17 (base TX/TXL), 265/60R18 (mid VX), or 265/55R19 (top VX-L). J250 (2024+): OE 265/65R17 (base) or 265/60R20 (top). J150 base (2009–2018): OE 265/65R17. Most common in Singapore is 265/65R17 (J150 base / TX).',
    },
    {
      q: 'What is the bolt pattern of the Toyota Land Cruiser Prado?',
      a: 'Toyota Land Cruiser Prado uses 6×139.7 bolt pattern with SIX lug nuts, same as Hilux and Fortuner. However, the centre bore is 95.2mm — different from Hilux/Fortuner (106.1mm). Tightening torque is 120 Nm. Always confirm BOTH the bolt pattern AND centre bore (95.2mm, not 106.1mm) when buying aftermarket wheels.',
    },
    {
      q: 'Can I use Hilux or Fortuner wheels on my Land Cruiser Prado?',
      a: 'Not directly — while Hilux, Fortuner, and Prado all use 6×139.7 bolt pattern, the centre bore differs: Prado is 95.2mm, Hilux/Fortuner is 106.1mm. A larger-bore wheel can physically mount on a smaller hub using hub-centric rings, but it is not advisable without the correct adapter ring. Using mismatched CB wheels can cause vibration and is a safety risk.',
    },
    {
      q: 'How much does it cost to change Toyota Land Cruiser Prado tyres in Singapore?',
      a: 'For 265/65R17 (J150 base): budget $148/tyre (Nexen); mid-range $218 (Bridgestone Dueler H/T, popular); premium $288 (Michelin LTX Force). Full set: ~$592–$1,152. For 265/60R18 (J150 VX): budget $188; mid $258; premium $328. Full set: ~$752–$1,312.',
    },
    {
      q: 'H/T vs A/T tyres for Land Cruiser Prado — which is better for Singapore?',
      a: 'For city driving and highway use in Singapore: H/T (Highway Terrain) like Bridgestone Dueler H/T or Michelin LTX Force is the better choice — quieter, longer-lasting, better fuel economy. A/T (All-Terrain) tyres are worth considering only if you regularly drive on unpaved or loose surfaces. Most Singapore Prado owners use H/T tyres that match the vehicle\'s luxury positioning.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nexen NFERA RU1 265/65R17',              brand: { '@type': 'Brand', name: 'Nexen' },       offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Dueler H/T 684 265/65R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin LTX Force 265/65R17',           brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '288', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Yokohama Geolandar H/T G056 265/60R18',  brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Dueler H/T 684 265/60R18',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 265/60R18',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '328', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
