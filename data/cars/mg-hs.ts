import type { CarData } from './types'

const data: CarData = {
  make: 'MG',
  model: 'HS',
  makeSlug: 'mg',
  modelSlug: 'hs',
  bgWord: 'MGHS',

  seo: {
    title: 'MG HS / HS Plus EV Tyre Size & Best Price Singapore | SGCarPass',
    description: 'MG HS petrol uses 215/55R18 (main). MG HS Plus EV uses 235/50R18. 5×112 bolt pattern. From $98 installed in Singapore.',
    ogDescription: 'MG HS: 215/60R17 (base), 215/55R18 (mid), 235/50R18 (HS Plus EV). 5×112, 57.1mm CB. From $98 installed.',
    twitterDescription: 'MG HS uses 215/55R18 (petrol) or 235/50R18 (HS Plus EV). 5×112. From $98 installed.',
    priceFrom: 98,
    oeSize: '215/55R18',
  },

  defaultGen: 'gen2',

  generations: [
    {
      key: 'gen2',
      label: 'HS / HS Plus EV (2022–2026)',
      years: '2022–2026',
      heroChips: [
        { label: 'HS petrol OE',   value: '215/55R18' },
        { label: 'HS Plus EV OE',  value: '235/50R18' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: 'HS 1.5T Essence / Trophy (18")', sizes: [
          { tag: 'OE',  size: '215/55R18' },
          { tag: 'Alt', size: '235/50R18', note: 'HS Plus EV 同款尺码，稍宽' },
        ]},
        { name: 'HS Plus EV (18")', sizes: [
          { tag: 'OE',  size: '235/50R18' },
          { tag: 'Alt', size: '235/45R19', note: '升 19"，操控感提升' },
        ]},
      ],
    },
    {
      key: 'gen1',
      label: '1st Gen HS (2019–2022)',
      years: '2019–2022',
      heroChips: [
        { label: 'Base OE',        value: '215/60R17' },
        { label: 'Mid/High OE',    value: '215/55R18' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: '1.5T Excite (17")', sizes: [
          { tag: 'OE',  size: '215/60R17' },
          { tag: 'Alt', size: '215/55R18', note: '升 18"，操控感提升' },
        ]},
        { name: '1.5T Essence / Trophy (18")', sizes: [
          { tag: 'OE',  size: '215/55R18' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · HS Plus EV / mid · 18"', width: '7.0J', diameter: '18"', offset: 'ET43', boltPattern: '5×112' },
    { label: '2019+ · HS 1st Gen · base 17"',  width: '6.5J', diameter: '17"', offset: 'ET43', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '57.1mm',
    stud: 'M14×1.5',
    torque: '120 Nm',
    notes: 'MG HS uses 5×112 — same as MG4, MG ZS EV, VW Golf, Audi A3. Different from MG ZS petrol (5×100). M14×1.5 lug nuts, torque 120 Nm.',
  },

  priceTabs: [
    {
      size: '215/55R18',
      tabLabel: '215/55R18 · HS petrol 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 舒适性能胎 · MG HS 预算首选',
        price: 98,
        also: 'Also: Kumho Ecsta PS91, Nankang Sportnex NS-25',
        waText: 'MG HS 215%2F55R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '静音耐磨 · 城市 SUV 日常通勤首选',
        price: 178,
        also: 'Also: Michelin Primacy 4 SUV, Continental PremiumContact 6',
        waText: 'MG HS 215%2F55R18 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4 SUV',
        desc: '18" SUV 顶级 · 干湿地均衡 · MG HS 驾驶感提升',
        price: 228,
        also: 'Also: Continental SportContact 6, Pirelli P-Zero',
        waText: 'MG HS 215%2F55R18 premium tyre quote (Michelin PS4 SUV)',
      },
      setEstimate: 'Budget $392–$480 · Mid-range $712–$840 · Premium $912–$1,040',
    },
    {
      size: '235/50R18',
      tabLabel: '235/50R18 · HS Plus EV 宽胎',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" EV SUV 宽胎 · HS Plus EV 预算选择',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Maxxis Victra Sport 5',
        waText: 'MG HS Plus EV 235%2F50R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '宽胎操控提升 · HS Plus EV 干湿均衡首选',
        price: 198,
        also: 'Also: Michelin Pilot Sport 4 SUV, Bridgestone Potenza Sport',
        waText: 'MG HS Plus EV 235%2F50R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport EV',
        desc: 'EV 专用低滚阻 · 续航提升 · HS Plus EV 顶级选择',
        price: 248,
        also: 'Also: Goodyear Eagle F1 Asymmetric 6, Pirelli P-Zero PZ4',
        waText: 'MG HS Plus EV 235%2F50R18 premium tyre quote (Michelin Pilot Sport EV)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $792–$920 · Premium $992–$1,120',
    },
  ],

  radarSize: '215/55R18',
  radarSource: 'Bridgestone (12 reviews) · Michelin (10 reviews) · Hankook (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [66, 72, 72, 78, 70, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '72', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.2',
      scores: [80, 82, 86, 82, 78, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [84, 86, 86, 82, 82, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPS4 SUV',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'HS petrol（215/55R18）— 城市 SUV 日常换胎',
      color: 'blue',
      genKey: 'gen2',
      body: 'MG HS 燃油版 18" 原配 <strong>215/55R18</strong>，是城市 SUV 舒适向尺码。Bridgestone Turanza T005（$178/条）静音表现在同价位中最佳，耐磨性好，适合新加坡频繁走走停停的城市路况，整套约 $712。如果偏好运动感，Michelin Pilot Sport 4 SUV（$228/条）操控提升明显，雨季湿地制动安全。预算首选 Hankook Ventus S1 Evo3（$98/条），价格实惠货源充足。',
    },
    {
      title: 'HS Plus EV（235/50R18）— 宽胎 EV 换胎须知',
      color: 'red',
      genKey: 'gen2',
      body: 'HS Plus EV 整备重约 1,900 kg，原配宽胎 <strong>235/50R18</strong> 接地感更强、操控稳定。推荐 Continental SportContact 6（$198/条）——宽胎操控顶级，干湿地均衡，EV 大扭力下抓地稳定。若续航优先，换 Michelin Pilot Sport EV（$248/条），低滚阻可额外延伸约 3–5% 续航。<strong>注意：</strong>EV 版 5×112 螺栓孔与燃油版相同，轮圈兼容，但 offset 差异需确认。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the MG HS use in Singapore?',
      a: 'MG HS petrol (2019+): base trim uses 215/60R17; mid/high trim uses 215/55R18. MG HS Plus EV uses 235/50R18. All variants use 5×112 bolt pattern, 57.1mm centre bore.',
    },
    {
      q: 'What is the bolt pattern of the MG HS?',
      a: 'MG HS uses 5×112 bolt pattern, 57.1mm centre bore, M14×1.5 lug nuts, torque 120 Nm. Same as MG4, MG ZS EV, VW Golf, and Audi A3. Note: MG ZS petrol uses 5×100 — different pattern.',
    },
    {
      q: 'How much does it cost to replace MG HS tyres in Singapore?',
      a: 'For 215/55R18 (petrol): from $98/tyre budget; $178 mid-range; $228 premium. Full set: $392–$912. For 235/50R18 (HS Plus EV): from $108/tyre. EV version has higher vehicle weight, so check tyre tread more frequently.',
    },
    {
      q: 'Can I fit MG HS petrol rims on an MG HS Plus EV?',
      a: 'Both petrol and EV variants use 5×112 bolt pattern, so rims are technically bolt-pattern compatible. However, the EV version has wider tyres (235/50R18 vs 215/55R18), so you need to ensure the rim width is appropriate for the tyre. Also verify the offset (ET) matches your trim. Professional fitting consultation is recommended.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 215/55R18',     brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '98',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/55R18',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 SUV 215/55R18', brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 235/50R18',    brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 235/50R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '198', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport EV 235/50R18',   brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
