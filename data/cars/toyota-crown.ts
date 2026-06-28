import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Crown',
  makeSlug: 'toyota',
  modelSlug: 'crown',
  bgWord: 'CROWN',

  seo: {
    title: 'Toyota Crown Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Crown Crossover (2023+) uses 225/55R19 (Cross/Sport/RS) or 225/45R21 (Platinum). 5×114.3 bolt pattern, 60.1mm CB. Flagship hybrid crossover sedan. From $128 installed.',
    ogDescription: 'Toyota Crown Crossover: 225/55R19 (Sport/RS), 225/45R21 (Platinum). 5×114.3, 60.1mm. From $128.',
    twitterDescription: 'Toyota Crown Crossover uses 225/55R19 or 225/45R21 (Platinum). 5×114.3 bolt. From $128.',
    priceFrom: 128,
    oeSize: '225/55R19',
  },

  defaultGen: 's235',

  generations: [
    {
      key: 's235',
      label: 'S235 Crossover (2022–2026)',
      years: '2022–2026',
      note: 'The 16th generation Crown abandoned the traditional sedan silhouette for a raised crossover profile. Hybrid-only in Singapore. Cross and Sport grades use 235/45R18; RS and Platinum use 235/40R19. The S235 Crown uses TNGA-K platform, sharing wheel specs with Camry XV70.',
      heroChips: [
        { label: 'Cross / Sport / RS OE', value: '225/55R19' },
        { label: 'Platinum OE',           value: '225/45R21' },
        { label: 'From installed',         value: '$128', green: true },
      ],
      variants: [
        { name: 'Crown Cross / Sport / RS hybrid (19")', sizes: [
          { tag: 'OE',  size: '225/55R19' },
          { tag: 'Alt', size: '235/50R19', note: '稍宽，保持 19" 外径' },
        ]},
        { name: 'Crown Platinum hybrid (21")', sizes: [
          { tag: 'OE',  size: '225/45R21' },
          { tag: 'Alt', size: '235/40R21', note: '稍宽，运动感更强' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022+ · Cross / Sport / RS · 19"', width: '8.0J', diameter: '19"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2022+ · Platinum · 21"',            width: '8.5J', diameter: '21"', offset: 'ET45', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5 nut',
    torque: '103 Nm',
    notes: 'Toyota Crown S235 uses 5×114.3 bolt pattern, 60.1mm centre bore — same as Camry, Harrier, Alphard. M12×1.5 lug nuts, torque 103 Nm. Wheels from Camry XV70 (5×114.3) fit Crown without adapter.',
  },

  priceTabs: [
    {
      size: '225/55R19',
      tabLabel: '225/55R19 · Cross / Sport / RS 19"',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '19" 运动节能胎 · Crown Sport/RS 预算首选',
        price: 128,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Toyota Crown 225%2F55R19 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4+',
        desc: '19" 静音豪华 · Crown 旗舰定位匹配',
        price: 218,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza T005',
        waText: 'Toyota Crown 225%2F55R19 mid-range tyre quote (Michelin Primacy 4+ or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza 6',
        desc: '19" 极致静音 · Crown 换胎最受好评',
        price: 278,
        also: 'Also: Michelin e.Primacy, Continental PremiumContact 7',
        waText: 'Toyota Crown 225%2F55R19 premium tyre quote (Bridgestone Turanza 6)',
      },
      setEstimate: 'Budget $512–$640 · Mid-range $872–$1,040 · Premium $1,112–$1,320',
    },
    {
      size: '225/45R21',
      tabLabel: '225/45R21 · Platinum 21"',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '21" 运动节能胎 · Crown Platinum 预算选',
        price: 168,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Toyota Crown Platinum 225%2F45R21 budget tyre quote (Hankook Ventus S1 Evo3 or similar)',
      },
      mid: {
        name: 'Continental PremiumContact 7',
        desc: '21" 静音运动 · Platinum 最佳平衡',
        price: 268,
        also: 'Also: Michelin Primacy 4+, Bridgestone Turanza 6',
        waText: 'Toyota Crown Platinum 225%2F45R21 mid-range tyre quote (Continental PremiumContact 7 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 5',
        desc: '21" 运动旗舰 · Platinum 驾感升级',
        price: 338,
        also: 'Also: Bridgestone Potenza Sport, Pirelli P Zero',
        waText: 'Toyota Crown Platinum 225%2F45R21 premium tyre quote (Michelin Pilot Sport 5)',
      },
      setEstimate: 'Budget $672–$840 · Mid-range $1,072–$1,280 · Premium $1,352–$1,640',
    },
  ],

  radarSize: '235/45R18',
  radarSource: 'Michelin (10 reviews) · Continental (8 reviews) · Bridgestone (8 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [70, 74, 78, 74, 72, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus Prime4',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'NVH', v: '78', hi: true }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.7',
      scores: [88, 86, 92, 78, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '92', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 86, 94, 80, 84, 70], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Bridgestone\nTuranza 6',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '94', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Crown Crossover（235/45R18）— 旗舰 hybrid sedan，选胎侧重静音',
      color: 'blue',
      genKey: 's235',
      body: 'Toyota Crown S235 是丰田旗舰 hybrid，235/45R18 在新加坡属中高端规格，货源充足。车主普遍反映 Crown 的隔音已经很好，换一套更静的轮胎能进一步提升驾乘体验。<strong>Michelin Primacy 4+（$208/条）</strong>是最受新加坡 Crown 车主好评的选择，雨天 A 级安全评级，NVH 极佳，整套约 $832。选 Bridgestone Turanza 6（$258/条）的车主表示 NVH 性能更上一层楼，与 Crown 的豪华定位非常匹配。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Crown use in Singapore?',
      a: 'Toyota Crown S235 Crossover (2022+): Cross, Sport, and RS grades use 225/55R19; Platinum grade uses 225/45R21. 5×114.3 bolt pattern, 60.1mm centre bore. Hybrid-only in Singapore.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Crown?',
      a: 'Toyota Crown S235 uses 5×114.3 bolt pattern, 60.1mm centre bore. Same as Camry, Harrier, Alphard. M12×1.5 lug nuts, torque 103 Nm.',
    },
    {
      q: 'How much does it cost to replace Toyota Crown tyres in Singapore?',
      a: 'For 235/45R18: budget from $118/tyre; mid-range (Michelin Primacy 4+) $208; premium (Bridgestone Turanza 6) $258. Full set $472–$1,032. For RS/Platinum 235/40R19: from $148 budget; mid $238; premium $288.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus Prime4 235/45R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 235/45R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 235/45R18',      brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Continental PremiumContact 7 235/40R19', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
