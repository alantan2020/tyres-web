import type { CarData } from './types'

const data: CarData = {
  make: 'Mitsubishi',
  model: 'Outlander',
  makeSlug: 'mitsubishi',
  modelSlug: 'outlander',
  bgWord: 'OUTLANDER',

  seo: {
    title: 'Mitsubishi Outlander Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mitsubishi Outlander GN (2021+) uses 225/60R18 (AWD) or 235/55R18 (PHEV/GT). PHEV version noted. From $118 installed in Singapore. WhatsApp for a quote.',
    ogDescription: 'Mitsubishi Outlander GN tyre sizes: 225/60R18 (ES/LS) or 235/55R18 (PHEV/GT). 5×114.3 bolt pattern. From $118 installed.',
    twitterDescription: 'Mitsubishi Outlander GN uses 225/60R18 or 235/55R18 (PHEV). From $118 installed in Singapore.',
    priceFrom: 118,
    oeSize: '225/60R18',
  },

  defaultGen: 'gn',

  generations: [
    {
      key: 'gn',
      label: 'GN 4th Gen (2021–2026)',
      years: '2021–2026',
      note: 'Includes PHEV variant. PHEV battery weight means consistent tyre wear matters more — avoid mismatched sets.',
      heroChips: [
        { label: 'ES / LS AWD', value: '225/60R18' },
        { label: 'PHEV / GT',   value: '235/55R18' },
        { label: 'From installed', value: '$118', green: true },
      ],
      variants: [
        { name: 'ES / LS (AWD petrol)', sizes: [
          { tag: 'OE',  size: '225/60R18' },
          { tag: 'Alt', size: '235/55R18', note: '宽 10mm，高度相近' },
        ]},
        { name: 'PHEV / GT (plug-in hybrid / top)', sizes: [
          { tag: 'OE',  size: '235/55R18' },
          { tag: 'Alt', size: '235/60R18', note: '高度稍高，需验证轮拱间隙' },
        ]},
      ],
    },
    {
      key: 'gf',
      label: 'GF / GG 3rd Gen (2013–2021)',
      years: '2013–2021',
      heroChips: [
        { label: 'All trims in SG', value: '225/60R18' },
        { label: 'From installed',  value: '$118', green: true },
      ],
      variants: [
        { name: '2.0 / 2.4 (all trims in SG)', sizes: [
          { tag: 'OE',  size: '225/60R18' },
          { tag: 'Alt', size: '235/55R18', note: '升级尺码，操控更精准' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021–2026 · GN · PHEV / GT · 18"',      width: '7.5J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2021–2026 · GN · ES / LS · 18"',         width: '7.0J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2013–2021 · GF/GG · all trims · 18"',    width: '7.0J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'All Outlander GF and GN generations share 5×114.3 bolt pattern. PHEV owners: always replace tyres in full sets of 4 to avoid putting uneven load on the rear electric motor.',
  },

  priceTabs: [
    {
      size: '225/60R18',
      tabLabel: '225/60R18 · ES / LS 主力尺码',
      budget: {
        name: 'Kumho Solus HS51',
        desc: '18" SUV 舒适胎 · 耐磨静音 · 新加坡常见实惠选择',
        price: 118,
        also: 'Also: Hankook Kinergy 4S2 H750, Nankang SP-9',
        waText: 'Mitsubishi Outlander 225%2F60R18 budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音舒适 · 湿地 A 级 · 7座 SUV 家用首选',
        price: 158,
        also: 'Also: Continental PremiumContact 6, Dunlop SP Sport Maxx 050',
        waText: 'Mitsubishi Outlander 225%2F60R18 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地安全 · Wet grip A 级 · 重载 SUV 制动优秀',
        price: 208,
        also: 'Also: Pirelli Scorpion Verde, Goodyear EfficientGrip Performance 2',
        waText: 'Mitsubishi Outlander 225%2F60R18 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $472–$560 · Mid-range $632–$730 · Premium $832–$960',
    },
    {
      size: '235/55R18',
      tabLabel: '235/55R18 · PHEV / GT 顶配',
      budget: {
        name: 'Kumho Ecsta PS91',
        desc: '18" SUV 运动胎 · PHEV 重量兼顾操控',
        price: 128,
        also: 'Also: Nankang SP-9, Maxxis Victra Sport 5',
        waText: 'Mitsubishi Outlander PHEV 235%2F55R18 budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '湿地 A 级 · 适合 PHEV 重车体制动需求 · 最推荐',
        price: 178,
        also: 'Also: Continental SportContact 6, Goodyear EfficientGrip Performance 2',
        waText: 'Mitsubishi Outlander PHEV 235%2F55R18 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: 'PHEV 车主最推荐 · 低滚阻延伸续航 · Wet grip A 级',
        price: 228,
        also: 'Also: Pirelli Scorpion Verde All Season, Goodyear EfficientGrip 2 SUV',
        waText: 'Mitsubishi Outlander PHEV 235%2F55R18 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $512–$610 · Mid-range $712–$820 · Premium $912–$1,060',
    },
  ],

  radarSize: '225/60R18',
  radarSource: 'Kumho (10 reviews) · Bridgestone (19 reviews) · Michelin (15 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
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
      scores: [86, 88, 82, 80, 80, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'Wear', v: '82', hi: true }, { k: 'Value', v: '72', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'ES / LS AWD 车主（225/60R18）',
      color: 'blue',
      genKey: 'gn',
      body: 'GN Outlander AWD 原配 <strong>225/60R18</strong>，18" 尺码货源充足。Bridgestone Turanza T005（$158/条）是 7 座 SUV 家用最均衡的选择——湿地 A 级认证、里程超 60,000km、NVH 静音出色，整套约 $632。重视安全的家庭用户选 Michelin Primacy 4+（$208/条），雨天制动更短，适合新加坡多雨天气。',
    },
    {
      title: 'PHEV / GT 车主（235/55R18）',
      color: 'red',
      genKey: 'gn',
      body: 'PHEV 版本整车重量明显高于汽油版（约多 200-300kg），对胎面磨损和制动要求更高。强烈建议选择 <strong>4 条相同型号</strong>，避免前后胎差异影响 PHEV 双电机的扭矩分配。Michelin Primacy 4+（$228/条）低滚阻设计能小幅延长纯电续航；Bridgestone Turanza T005（$178/条）湿地制动能力匹配 PHEV 重车体，是更具性价比的选择。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mitsubishi Outlander use in Singapore?',
      a: 'The 4th gen Outlander GN (2021–2026): ES/LS AWD uses 225/60R18; PHEV and GT top trim use 235/55R18. The 3rd gen GF/GG (2013–2021) sold in Singapore mostly uses 225/60R18 across all trims. Check the driver\'s door jamb sticker to confirm your exact size.',
    },
    {
      q: 'What is the bolt pattern of the Mitsubishi Outlander?',
      a: 'All Mitsubishi Outlander generations (GF, GG, GN) sold in Singapore use 5×114.3 bolt pattern with a 67.1mm centre bore. Lug nut thread is M12×1.5, tightening torque is 108 Nm.',
    },
    {
      q: 'How much does it cost to replace Mitsubishi Outlander tyres in Singapore?',
      a: 'For 225/60R18 (most common): budget from $118 per tyre installed; mid-range $158–$178; premium $208–$240. A full set of 4 mid-range tyres costs approximately $632–$730. For 235/55R18 (PHEV/GT): budget from $128; mid $178–$198; premium $228–$260.',
    },
    {
      q: 'Should Outlander PHEV owners replace all 4 tyres at once?',
      a: 'Yes, strongly recommended. The Outlander PHEV uses an AWD system with a rear electric motor. Significant tread depth differences between front and rear tyres cause the system to work harder to compensate, affecting efficiency and potentially the rear motor. Replace all 4 at once, and ensure all tyres are the same brand and model.',
    },
    {
      q: 'Can I use 225/60R18 instead of 235/55R18 on an Outlander PHEV?',
      a: 'The overall diameter difference is small (about 0.7%), so it may fit physically. However, mixing the two sizes front-to-rear is not recommended on an AWD/4WD vehicle — it creates a permanent speed differential between axles. If you want to use 225/60R18 all around, consult a workshop to confirm clearance and any AWD software implications.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Kumho Solus HS51 225/60R18',           brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 225/60R18',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/60R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta PS91 235/55R18',           brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 235/55R18',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 235/55R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
