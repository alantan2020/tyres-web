import type { CarData } from './types'

const data: CarData = {
  make: 'Mitsubishi',
  model: 'Eclipse Cross',
  makeSlug: 'mitsubishi',
  modelSlug: 'eclipse-cross',
  bgWord: 'ECLIPSE',

  seo: {
    title: 'Mitsubishi Eclipse Cross Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mitsubishi Eclipse Cross YA1B (2021+) uses 225/55R18. Original GK1W (2017–2021) uses 225/55R17 (most) or 225/45R18 (top PHEV). From $98 installed in Singapore.',
    ogDescription: 'Mitsubishi Eclipse Cross tyre sizes: YA1B 225/55R18; GK1W 225/55R17 / 225/45R18. 5×114.3 bolt pattern. From $98 installed in Singapore.',
    twitterDescription: 'Mitsubishi Eclipse Cross YA1B uses 225/55R18. GK1W uses 225/55R17 or 225/45R18. From $98 in Singapore.',
    priceFrom: 98,
    oeSize: '225/55R18',
  },

  defaultGen: 'ya1b',

  generations: [
    {
      key: 'ya1b',
      label: 'YA1B Facelift (2021–2026)',
      years: '2021–2026',
      heroChips: [
        { label: 'All trims', value: '225/55R18' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: '1.5 Turbo (all SG trims)', sizes: [
          { tag: 'OE',  size: '225/55R18' },
          { tag: 'Alt', size: '235/50R18', note: '宽 10mm 运动感升级，同外径' },
        ]},
      ],
    },
    {
      key: 'gk1w',
      label: 'GK1W Gen 1 (2017–2021)',
      years: '2017–2021',
      heroChips: [
        { label: 'Standard / Active', value: '225/55R17' },
        { label: 'PHEV / top trim',  value: '225/45R18' },
        { label: 'From installed',   value: '$88', green: true },
      ],
      variants: [
        { name: '1.5 Turbo Standard / Active (17")', sizes: [
          { tag: 'OE',  size: '225/55R17' },
          { tag: 'Alt', size: '235/50R17', note: '宽 10mm，稳定性提升' },
        ]},
        { name: 'PHEV / Ultimate (18")', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '运动感更强，路面反馈清晰' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021–2026 · YA1B · all trims · 18"',      width: '7.0J', diameter: '18"', offset: 'ET48', boltPattern: '5×114.3' },
    { label: '2017–2021 · GK1W · PHEV / top · 18"',     width: '7.0J', diameter: '18"', offset: 'ET48', boltPattern: '5×114.3' },
    { label: '2017–2021 · GK1W · standard · 17"',        width: '6.5J', diameter: '17"', offset: 'ET48', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'YA1B (2021) and GK1W (2017) share the same 5×114.3 bolt pattern and centre bore, but the rim width and offset differ — YA1B uses wider rims. Check offset before swapping rims between generations.',
  },

  priceTabs: [
    {
      size: '225/55R18',
      tabLabel: '225/55R18 · YA1B 主力尺码',
      budget: {
        name: 'Kumho Ecsta HS51',
        desc: '18" 舒适胎 · Eclipse Cross 日常代步实惠选择',
        price: 98,
        also: 'Also: Hankook Kinergy 4S2 H750, Nankang SP-9',
        waText: 'Mitsubishi Eclipse Cross 225%2F55R18 budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '湿地 A 级 · 静音舒适 · Eclipse Cross 最多车主选用',
        price: 158,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Mitsubishi Eclipse Cross 225%2F55R18 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地安全 · 5年保用 · 全新 YA1B 款型最配',
        price: 198,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'Mitsubishi Eclipse Cross 225%2F55R18 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $392–$470 · Mid-range $632–$730 · Premium $792–$920',
    },
    {
      size: '225/55R17',
      tabLabel: '225/55R17 · GK1W 标准版',
      budget: {
        name: 'Hankook Kinergy 4S2 H750',
        desc: '17" 日常舒适胎 · GK1W 标准/Active 款预算首选',
        price: 88,
        also: 'Also: Kumho Ecsta HS51, Nankang NS-25',
        waText: 'Mitsubishi Eclipse Cross GK1W 225%2F55R17 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · 湿地 A 级 · 家用 SUV 均衡首选',
        price: 138,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Mitsubishi Eclipse Cross GK1W 225%2F55R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地安全 · 升级 GK1W 驾驶体验的最佳选择',
        price: 178,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip Performance 2',
        waText: 'Mitsubishi Eclipse Cross GK1W 225%2F55R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $352–$420 · Mid-range $552–$640 · Premium $712–$820',
    },
  ],

  radarSize: '225/55R18',
  radarSource: 'Kumho (9 reviews) · Bridgestone (17 reviews) · Michelin (14 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [64, 72, 74, 66, 74, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Kumho\nEcsta HS51',
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
      title: 'YA1B 车主（225/55R18，2021 款以后）',
      color: 'blue',
      genKey: 'ya1b',
      body: 'YA1B Eclipse Cross 全系统一配 <strong>225/55R18</strong>，货源充足选择多。Bridgestone Turanza T005（$158/条）是新加坡 Eclipse Cross 车主好评最多的选择——湿地 A 级，NVH 静音极好，整套约 $632。追求性价比的选 Kumho Ecsta HS51（$98/条），性能足够应付新加坡日常通勤，整套仅 $392。若车辆仍在保修期内，Michelin Primacy 4+（$198/条）能提供明显更好的湿地制动。',
    },
    {
      title: 'GK1W 车主（225/55R17，2017–2021 款）',
      color: 'blue',
      genKey: 'gk1w',
      body: 'GK1W 标准/Active 款原配 <strong>225/55R17</strong>，17" 尺码价格比 18" 便宜约 15-20%。Bridgestone Turanza T005（$138/条）是最受好评的选择，整套约 $552。若预算有限，Hankook Kinergy 4S2（$88/条）也足够日常使用，整套约 $352。GK1W PHEV/顶配版车主持有 18" 的，请参考 225/45R18 尺码（WhatsApp 询价）。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mitsubishi Eclipse Cross use in Singapore?',
      a: 'Mitsubishi Eclipse Cross YA1B facelift (2021–2026): all trims use 225/55R18. Original GK1W (2017–2021): standard and Active trims use 225/55R17; PHEV and top Ultimate trim use 225/45R18. Check your door jamb sticker to confirm.',
    },
    {
      q: 'What is the bolt pattern of the Mitsubishi Eclipse Cross?',
      a: 'Both GK1W and YA1B Eclipse Cross use 5×114.3 bolt pattern with 67.1mm centre bore. Lug nut thread is M12×1.5, tightening torque is 108 Nm. Note that YA1B rims are typically wider and have higher offset than GK1W — verify compatibility before swapping between generations.',
    },
    {
      q: 'How much does it cost to replace Mitsubishi Eclipse Cross tyres in Singapore?',
      a: 'For 225/55R18 (YA1B 2021+): budget from $98 per tyre installed; mid-range $158–$175; premium $198–$228. Full set of 4 mid-range: approximately $632–$730. For 225/55R17 (GK1W standard): budget from $88; mid $138–$155; premium $178–$200.',
    },
    {
      q: 'What is the difference between the GK1W and YA1B Eclipse Cross?',
      a: 'The YA1B (2021 facelift) is a significantly updated Eclipse Cross with a completely redesigned rear end (no more split rear window), larger boot, and updated interior. It also moved from 17" wheels to 18" standard on all trims. The GK1W (2017–2021) has the distinctive split rear window and offered 17" wheels on base trims.',
    },
    {
      q: 'Is the Mitsubishi Eclipse Cross a PHEV in Singapore?',
      a: 'The Eclipse Cross PHEV variant was available in some markets but was not widely offered by official dealers in Singapore. Most Mitsubishi Eclipse Cross units in Singapore are the 1.5T petrol (GK1W) or the YA1B facelift. If you have a PHEV unit (likely parallel import), it uses 225/45R18 on 18" rims.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Kumho Ecsta HS51 225/55R18',           brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 225/55R18',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/55R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 H750 225/55R17',  brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 225/55R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/55R17',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
