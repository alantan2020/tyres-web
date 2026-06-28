import type { CarData } from './types'

const data: CarData = {
  make: 'Nissan',
  model: 'Kicks',
  makeSlug: 'nissan',
  modelSlug: 'kicks',
  bgWord: 'KICKS',

  seo: {
    title: 'Nissan Kicks Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Nissan Kicks P15 uses 205/60R16 (standard) or 215/50R17 (top trim). From $88 installed in Singapore. Compare brands and WhatsApp for a quote.',
    ogDescription: 'Nissan Kicks P15 tyre sizes: 205/60R16 (standard) or 215/50R17 (top). From $88 installed in Singapore.',
    twitterDescription: 'Nissan Kicks P15 uses 205/60R16 or 215/50R17. From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '205/60R16',
  },

  defaultGen: 'p15',

  generations: [
    {
      key: 'p15',
      label: 'P15 (2017–2021)',
      years: '2017–2021',
      note: 'Nissan discontinued Kicks sales in Singapore after 2021.',
      heroChips: [
        { label: '1.6 S / SV standard', value: '205/60R16' },
        { label: '1.6 SL top trim',     value: '215/50R17' },
        { label: 'From installed',       value: '$88', green: true },
      ],
      variants: [
        { name: '1.6 S / SV (standard)', sizes: [
          { tag: 'OE',  size: '205/60R16' },
          { tag: 'Alt', size: '215/55R17', note: '17" 升级选装' },
        ]},
        { name: '1.6 SL (top)', sizes: [
          { tag: 'OE',  size: '215/50R17' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2017–2021 · P15 · SL top · 17"',      width: '6.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2017–2021 · P15 · S / SV · 16"',      width: '6.5J', diameter: '16"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '66.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: '5×114.3 bolt pattern — compatible with Nissan X-Trail T32/T33, Sylphy B17, and most Nissan models of the same era.',
  },

  priceTabs: [
    {
      size: '205/60R16',
      tabLabel: '205/60R16 · S / SV 主力尺码',
      budget: {
        name: 'Blackhawk Street-H HH11',
        desc: '日常通勤 · 耐磨 · 新加坡市场常见预算选择',
        price: 88,
        also: 'Also: Hankook Kinergy Eco 2 K435, Kumho Ecsta HS51',
        waText: 'Nissan Kicks 205%2F60R16 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · 湿地 A 级抓地 · 城市代步首选',
        price: 118,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Nissan Kicks 205%2F60R16 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地制动 · Wet grip A 级 · 5年保用',
        price: 148,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'Nissan Kicks 205%2F60R16 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $352–$420 · Mid-range $472–$550 · Premium $592–$680',
    },
    {
      size: '215/50R17',
      tabLabel: '215/50R17 · SL 顶配',
      budget: {
        name: 'Kumho Ecsta HS51',
        desc: '17" 日常用途 · 湿地稳定',
        price: 98,
        also: 'Also: Nankang NS-25, Maxxis Premitra HP5',
        waText: 'Nissan Kicks 215%2F50R17 budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · A 级湿地抓地 · 最受 Kicks 车主欢迎',
        price: 148,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Nissan Kicks 215%2F50R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: '运动 + 舒适兼顾 · Wet grip A 级 · 5年保用',
        price: 198,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 5',
        waText: 'Nissan Kicks 215%2F50R17 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $392–$460 · Mid-range $592–$680 · Premium $792–$900',
    },
  ],

  radarSize: '205/60R16',
  radarSource: 'Blackhawk (9 reviews) · Bridgestone (20 reviews) · Michelin (16 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [62, 72, 74, 64, 72, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nStreet-H HH11',
      stats: [{ k: 'Wet', v: '62', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [80, 84, 82, 78, 84, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [86, 86, 84, 80, 82, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }, { k: 'Value', v: '72', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Kicks S / SV 车主（205/60R16，最常见）',
      color: 'blue',
      genKey: 'p15',
      body: 'P15 Kicks S/SV 标准版原配 <strong>205/60R16</strong>，货源充足价格优惠。Bridgestone Turanza T005（$118/条）是新加坡 Kicks 车主最受好评的选择——静音、湿地 A 级、里程超 60,000km，整套约 $472。若追求最佳湿地安全感，升 Michelin Primacy 4+（$148/条），Wet grip A 级认证，适合新加坡多雨气候。',
    },
    {
      title: 'Kicks SL 顶配车主（215/50R17）',
      color: 'red',
      genKey: 'p15',
      body: 'SL 顶配原配 <strong>215/50R17</strong>，操控感更精准，但扁平比 50 代表路面震动会比 205/60R16 稍明显。推荐 Bridgestone Turanza T005（$148/条），静音舒适与操控兼顾。若想要运动感更强，可选 Michelin Pilot Sport 4（$198/条），但日常驾驶噪音会比 Turanza 略高。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Nissan Kicks use in Singapore?',
      a: 'The Nissan Kicks P15 (2017–2021) uses 205/60R16 for the standard S and SV trims, and 215/50R17 for the top-spec SL trim. Check the tyre sidewall or the sticker inside the driver\'s door jamb to confirm your exact size.',
    },
    {
      q: 'What is the bolt pattern of the Nissan Kicks P15?',
      a: 'The Nissan Kicks P15 uses a 5×114.3 bolt pattern with a 66.1mm centre bore. Lug nut thread is M12×1.5, tightening torque is 108 Nm. This is the same bolt pattern as the Nissan X-Trail T32/T33, making rim interchange straightforward.',
    },
    {
      q: 'How much does it cost to replace Nissan Kicks tyres in Singapore?',
      a: 'For 205/60R16 (most common): budget from $88 per tyre installed; mid-range $118–$135; premium $148–$168. A full set of 4 mid-range tyres costs approximately $472–$550. For 215/50R17 (SL top trim): budget from $98; mid $148–$165; premium $198–$228.',
    },
    {
      q: 'Is the Nissan Kicks still sold in Singapore?',
      a: 'Nissan stopped importing the Kicks (P15) in Singapore after 2021. However, there are many pre-owned Kicks on the road, and tyres are readily available in both 205/60R16 and 215/50R17 sizes. Tyre prices are competitive as these are common sizes shared with other popular cars.',
    },
    {
      q: 'Can I use 215/55R17 instead of 215/50R17 on a Nissan Kicks SL?',
      a: 'Technically possible on 17-inch rims, but the overall diameter would increase by about 1.7%, slightly above Singapore\'s recommended tolerance and may cause mild speedometer inaccuracy. The 215/50R17 OE size is the safest choice. If you want a taller sidewall for comfort, consider 215/55R16 on 16-inch rims — but this requires a rim swap.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Street-H HH11 205/60R16',    brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 205/60R16',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 205/60R16',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta HS51 215/50R17',           brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/50R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 215/50R17',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
