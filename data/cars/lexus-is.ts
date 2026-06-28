import type { CarData } from './types'

const data: CarData = {
  make: 'Lexus',
  model: 'IS',
  makeSlug: 'lexus',
  modelSlug: 'is',
  bgWord: 'LEXUSIS',

  seo: {
    title: 'Lexus IS Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Lexus IS 3rd Gen XE30 uses 225/40R18 (front) + 255/35R18 (rear, staggered). IS300h also staggered. 5×114.3 bolt, 60.1mm CB. From $108 installed.',
    ogDescription: 'Lexus IS XE30 (2014+): 225/40R18 front + 255/35R18 rear (staggered). IS200t/IS300: 225/45R17 (base). 5×114.3, 60.1mm CB. From $108 installed.',
    twitterDescription: 'Lexus IS uses 225/40R18 + 255/35R18 (staggered) on most trims. 5×114.3. From $108 installed.',
    priceFrom: 108,
    oeSize: '225/40R18',
  },

  defaultGen: 'xe30',

  generations: [
    {
      key: 'xe30',
      label: 'XE30 3rd Gen (2014–2026)',
      years: '2014–2026',
      note: 'IS XE30 facelift (2020+) is the current gen. Standard 18" trim is staggered (225/40R18 front + 255/35R18 rear). IS300h is most common in SG, also staggered. F Sport adds wider rear tyre.',
      heroChips: [
        { label: 'IS200t base OE',   value: '225/45R17' },
        { label: 'IS300h / IS300 OE', value: '225/40R18' },
        { label: 'IS300h rear OE',   value: '255/35R18' },
        { label: 'From installed',    value: '$108', green: true },
      ],
      variants: [
        { name: 'IS200t / IS300 base (17")', sizes: [
          { tag: 'OE',  size: '225/45R17' },
          { tag: 'Alt', size: '225/40R18', note: '升 18"，IS300h 同款前胎' },
        ]},
        { name: 'IS300h / IS300 standard (18" staggered)', sizes: [
          { tag: 'OE',  size: '225/40R18', note: 'front' },
          { tag: 'OE',  size: '255/35R18', note: 'rear — staggered' },
        ]},
        { name: 'IS300 / IS350 F Sport (18" staggered)', sizes: [
          { tag: 'OE',  size: '225/40R18', note: 'front' },
          { tag: 'OE',  size: '255/35R18', note: 'rear — same as standard' },
        ]},
      ],
    },
    {
      key: 'xe20',
      label: 'XE20 2nd Gen (2006–2013)',
      years: '2006–2013',
      heroChips: [
        { label: 'IS250 base OE',    value: '225/45R17' },
        { label: 'IS250 / IS350 OE', value: '225/40R18' },
        { label: 'IS-F OE',          value: '225/40R19' },
        { label: 'From installed',   value: '$98', green: true },
      ],
      variants: [
        { name: 'IS250 base (17")', sizes: [
          { tag: 'OE',  size: '225/45R17' },
          { tag: 'OE',  size: '245/40R17', note: 'rear, staggered' },
        ]},
        { name: 'IS250 / IS350 sport (18" staggered)', sizes: [
          { tag: 'OE',  size: '225/40R18', note: 'front' },
          { tag: 'OE',  size: '255/35R18', note: 'rear' },
        ]},
        { name: 'IS-F (19" staggered)', sizes: [
          { tag: 'OE',  size: '225/40R19', note: 'front' },
          { tag: 'OE',  size: '255/35R19', note: 'rear' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2014+ · XE30 · IS-F Sport · 18" rear', width: '8.5J', diameter: '18"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2014+ · XE30 · IS300h · 18" front',    width: '8.0J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2014+ · XE30 · base · 17"',            width: '7.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2006–2013 · XE20 · IS-F · 19"',        width: '9.0J', diameter: '19"', offset: 'ET36', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5 nut',
    torque: '103 Nm',
    notes: 'Lexus IS uses 5×114.3 bolt pattern, 60.1mm centre bore — same as most other Lexus (ES, GS, RX) and Toyota. Uses LUG NUTS (not bolts), M12×1.5 thread, torque 103 Nm. Note: IS is staggered on most trims — front and rear tyres have different widths and cannot be rotated. Buy fronts and rears separately when replacing.',
  },

  priceTabs: [
    {
      size: '225/40R18',
      tabLabel: '225/40R18 · IS300h 前胎（常替单买）',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 运动轿车前胎 · IS300h staggered 前轮预算首选',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'Lexus IS 225%2F40R18 front tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地均衡 · IS300h 最受好评前胎选择',
        price: 188,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'Lexus IS 225%2F40R18 front mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '18" 豪华运动轿车极限 · IS F Sport / IS350 首选',
        price: 248,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Lexus IS 225%2F40R18 front premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: '前两条 Budget $216–$260 · Mid $376–$440 · Premium $496–$580（搭配后胎 255/35R18 另计）',
    },
    {
      size: '255/35R18',
      tabLabel: '255/35R18 · IS300h 后胎（staggered）',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" IS staggered 宽后胎 · 预算首选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'Lexus IS 255%2F35R18 rear staggered tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '18" 宽胎干湿地综合最佳 · IS rear staggered',
        price: 208,
        also: 'Also: Michelin Pilot Sport 4, Bridgestone Potenza Sport',
        waText: 'Lexus IS 255%2F35R18 rear staggered mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '18" 宽后胎顶级 · IS 操控极限最大化',
        price: 278,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'Lexus IS 255%2F35R18 rear staggered premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: '后两条 Budget $236–$280 · Mid $416–$490 · Premium $556–$640（加前两条见上方）',
    },
  ],

  radarSize: '225/40R18',
  radarSource: 'Continental (16 reviews) · Michelin (13 reviews) · Hankook (11 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [70, 76, 74, 72, 72, 80], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '76', hi: false }, { k: 'NVH', v: '74', hi: false }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 92, 84, 82, 84, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [88, 94, 84, 82, 86, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '84', hi: false }, { k: 'Wear', v: '82', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'IS300h（225/40R18 前 + 255/35R18 后）— Staggered 换胎全攻略',
      color: 'blue',
      genKey: 'xe30',
      body: 'IS300h 使用前后不同尺码（225 前 + 255 后），前后轮胎无法互换，建议前后分开替换、不必等四条同时换。Continental SportContact 6 前胎 $188/条、后胎 $208/条，一整套四条约 $792，是性价比最高的中档选择。Michelin Pilot Sport 4S 前胎 $248 + 后胎 $278，一套约 $1,052——适合 F Sport 车主最大化操控体验。<strong>注意：</strong>IS 后轮磨损通常比前轮快，可以只换后两条，无需四条一起换。',
    },
    {
      title: 'IS XE20（2006–2013）— 老款 IS 换胎提醒',
      color: 'red',
      genKey: 'xe20',
      body: 'XE20 IS 在新加坡仍有相当保有量，18" 尺码（225/40R18 前 + 255/35R18 后）与 XE30 相同，货源充足，换胎费用与新款相当。IS-F 19" 苦于扁平比低（35 后、40 前），新加坡路面减速带一定要放慢——19" 低扁平比是新加坡最常见爆胎尺码之一。建议 IS-F 车主保持轮胎气压在 35–36 PSI，并在经过减速带前提前降速。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Lexus IS use in Singapore?',
      a: 'Lexus IS XE30 (2014+): IS200t/IS300 base uses 225/45R17; IS300h/IS300 standard uses 225/40R18 (front) + 255/35R18 (rear, staggered). XE20 (2006–2013): IS250 base uses 225/45R17 or 225/40R18 + 245/40R17; IS-F uses 225/40R19 front + 255/35R19 rear. All use 5×114.3, 60.1mm CB.',
    },
    {
      q: 'What is the bolt pattern of the Lexus IS?',
      a: 'Lexus IS (XE20 and XE30) uses 5×114.3 bolt pattern, 60.1mm centre bore, M12×1.5 lug NUTS (not bolts), torque 103 Nm. Same as other Lexus models (ES, RX, GS) and most Toyota vehicles.',
    },
    {
      q: 'How much does it cost to replace Lexus IS tyres in Singapore?',
      a: 'For IS300h staggered (225/40R18 front + 255/35R18 rear): budget front $108, rear $118; mid-range front $188, rear $208; premium front $248, rear $278. Full set of 4: $452–$1,052. Front two only: $216–$496. Rear two only: $236–$556.',
    },
    {
      q: 'Can I rotate tyres on a staggered Lexus IS?',
      a: 'No — standard tyre rotation (front to rear swap) is not possible on a staggered IS because the front (225 width) and rear (255 width) are different sizes. You can only rotate side to side (left front to right front) if using non-directional tyres. For directional tyres, no rotation is possible at all. This means rear tyres wear independently of fronts — replace them separately as needed.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/40R18',      brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 225/40R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 225/40R18',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 255/35R18',    brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 255/35R18', brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 255/35R18',   brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '278', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
