import type { CarData } from './types'

const data: CarData = {
  make: 'Nissan',
  model: 'Serena',
  makeSlug: 'nissan',
  modelSlug: 'serena',
  bgWord: 'SERENA',

  seo: {
    title: 'Nissan Serena Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Nissan Serena C28 (2022+) uses 195/65R15 (base) or 205/60R16 (Highway Star). C27 (2016–2021) same sizes. 5×114.3, 66.1mm CB, M14×1.5 bolt, 130 Nm. Popular family MPV. From $78 installed.',
    ogDescription: 'Nissan Serena C28/C27: 195/65R15 (base), 205/60R16 (Highway Star). 5×114.3, 66.1mm. From $78.',
    twitterDescription: 'Nissan Serena uses 195/65R15 or 205/60R16 (Highway Star). 5×114.3 bolt. From $78.',
    priceFrom: 78,
    oeSize: '195/65R15',
  },

  defaultGen: 'c28',

  generations: [
    {
      key: 'c28',
      label: 'C28 6th Gen (2022–2026)',
      years: '2022–2026',
      note: 'Current generation Nissan Serena. Base and S-HYBRID grades use 195/65R15 (15"); Highway Star premium grade uses 205/60R16 (16"). The C28 Serena is the top-selling MPV in Singapore.',
      heroChips: [
        { label: 'base / S-HYBRID OE', value: '195/65R15' },
        { label: 'Highway Star OE',    value: '205/60R16' },
        { label: 'From installed',     value: '$78', green: true },
      ],
      variants: [
        { name: 'Serena base / S-HYBRID (15")', sizes: [
          { tag: 'OE',  size: '195/65R15' },
          { tag: 'Alt', size: '205/60R15', note: '稍宽，保持 15" 外径' },
        ]},
        { name: 'Serena Highway Star (16")', sizes: [
          { tag: 'OE',  size: '205/60R16' },
          { tag: 'Alt', size: '215/55R16', note: '外径接近，稍宽' },
        ]},
      ],
    },
    {
      key: 'c27',
      label: 'C27 5th Gen (2016–2021)',
      years: '2016–2021',
      note: 'Previous generation Serena C27. Same tyre sizes as C28: 195/65R15 (base/S-HYBRID) and 205/55R16 (Highway Star). Very common on Singapore roads.',
      heroChips: [
        { label: 'C27 base OE',           value: '195/65R15' },
        { label: 'C27 Highway Star OE',   value: '205/55R16' },
        { label: 'From installed',         value: '$78', green: true },
      ],
      variants: [
        { name: 'C27 base / S-HYBRID (15")', sizes: [
          { tag: 'OE',  size: '195/65R15' },
        ]},
        { name: 'C27 Highway Star (16")', sizes: [
          { tag: 'OE',  size: '205/55R16' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: 'C28/C27 · base · 15"',         width: '6.0J', diameter: '15"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: 'C28 · Highway Star · 16"',      width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '66.1mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Nissan Serena uses 5×114.3 bolt pattern, 66.1mm centre bore — same as Nissan X-Trail, Qashqai, Juke. M14×1.5 wheel bolts, torque 130 Nm. Note: Nissan uses M14 bolts (larger than Toyota\'s M12), do not interchange nuts/bolts.',
  },

  priceTabs: [
    {
      size: '195/65R15',
      tabLabel: '195/65R15 · base / S-HYBRID 15"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '15" 节能城市胎 · Serena 家用通勤预算首选',
        price: 78,
        also: 'Also: Kumho Ecowing ES31, Nankang Econex NA-1',
        waText: 'Nissan Serena 195%2F65R15 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '15" 静音舒适 · Serena 载全家最受欢迎',
        price: 118,
        also: 'Also: Bridgestone Turanza T005, Continental ComfortContact 6',
        waText: 'Nissan Serena 195%2F65R15 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza T005',
        desc: '15" 静音耐磨 · Serena 高里程换胎最佳',
        price: 138,
        also: 'Also: Michelin Primacy 4+, Continental ComfortContact 7',
        waText: 'Nissan Serena 195%2F65R15 premium tyre quote (Bridgestone Turanza T005)',
      },
      setEstimate: 'Budget $312–$400 · Mid-range $472–$560 · Premium $552–$680',
    },
    {
      size: '205/60R16',
      tabLabel: '205/60R16 · Highway Star 16"',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '16" 节能城市胎 · Serena Highway Star 预算选',
        price: 88,
        also: 'Also: Kumho Ecowing ES31, Nankang Econex NA-1',
        waText: 'Nissan Serena Highway Star 205%2F60R16 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4',
        desc: '16" 静音舒适 · Highway Star 首选',
        price: 138,
        also: 'Also: Bridgestone Turanza T005, Continental ComfortContact 6',
        waText: 'Nissan Serena Highway Star 205%2F60R16 mid-range tyre quote (Michelin Primacy 4 or similar)',
        popular: true,
      },
      premium: {
        name: 'Continental PremiumContact 6',
        desc: '16" 干湿均衡 · Highway Star 驾感最佳',
        price: 168,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza 6',
        waText: 'Nissan Serena Highway Star 205%2F60R16 premium tyre quote (Continental PremiumContact 6)',
      },
      setEstimate: 'Budget $352–$440 · Mid-range $552–$680 · Premium $672–$800',
    },
  ],

  radarSize: '195/65R15',
  radarSource: 'Michelin (13 reviews) · Bridgestone (10 reviews) · Hankook (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 78, 72, 70, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 84, 90, 78, 82, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [84, 84, 90, 82, 82, 74], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Serena（195/65R15）— 新加坡热销 MPV，选静音耐磨胎载全家',
      color: 'blue',
      genKey: 'c28',
      body: 'Nissan Serena 是新加坡第一销量 MPV，承载家庭出行，换胎需求以 <strong>静音、耐磨</strong> 为主。195/65R15 是标准 15" 规格，货源充足。<strong>Michelin Primacy 4（$118/条）</strong>在 Serena 车主中评价极高，寿命长达 50,000 km+，新加坡热带气候下稳定可靠，整套约 $472。Highway Star 版（205/60R16 或 205/55R16）的 16" 尺码选择更多，Continental PremiumContact 6 是升级选项。换胎同时建议检查避震筒——Serena 载重能力强，但老旧避震会影响舒适性。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Nissan Serena use in Singapore?',
      a: 'Nissan Serena C28 (2022+): base and S-HYBRID use 195/65R15; Highway Star uses 205/60R16. C27 (2016–2021): similar — 195/65R15 (base) or 205/55R16 (Highway Star). 5×114.3 bolt pattern, 66.1mm centre bore.',
    },
    {
      q: 'What bolt pattern does the Nissan Serena have?',
      a: 'Nissan Serena uses 5×114.3 bolt pattern, 66.1mm centre bore. M14×1.5 wheel bolts, torque 130 Nm. Note: Nissan uses M14 bolts — do not interchange with Toyota M12 nuts.',
    },
    {
      q: 'How much does it cost to replace Nissan Serena tyres in Singapore?',
      a: 'For 195/65R15 (base): budget from $78/tyre; mid-range (Michelin Primacy 4) $118; premium $138. Full set $312–$552. For Highway Star 205/60R16: from $88 budget; mid $138; premium $168.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 195/65R15',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '78',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4 195/65R15',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 195/65R15',    brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
