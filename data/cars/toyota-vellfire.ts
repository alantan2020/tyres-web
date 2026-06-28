import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Vellfire',
  makeSlug: 'toyota',
  modelSlug: 'vellfire',
  bgWord: 'VELLFIRE',

  seo: {
    title: 'Toyota Vellfire Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Vellfire AH30 (2015–2022) uses 215/60R17 or 235/50R18. AH20 (2008–2014) uses 215/65R16. 5×114.3 bolt pattern, 60.1mm CB. From $98 installed.',
    ogDescription: 'Toyota Vellfire: AH30 215/60R17 or 235/50R18; AH20 215/65R16. 5×114.3, 60.1mm CB. From $98 installed.',
    twitterDescription: 'Toyota Vellfire AH30 uses 215/60R17 or 235/50R18. 5×114.3 bolt. From $98.',
    priceFrom: 98,
    oeSize: '215/60R17',
  },

  defaultGen: 'ah30',

  generations: [
    {
      key: 'ah30',
      label: 'AH30 3rd Gen (2015–2022)',
      years: '2015–2022',
      note: 'AH30 Vellfire and AH30 Alphard are twin cars sharing the same platform and wheel specs. Standard grades use 215/60R17; Executive and Z grades use 235/50R18. Executive G Lounge (7-seater) uses 235/50R18 with premium alloys.',
      heroChips: [
        { label: 'X / V base OE',     value: '215/60R17' },
        { label: 'Executive / Z OE', value: '235/50R18' },
        { label: 'From installed',    value: '$108', green: true },
      ],
      variants: [
        { name: 'Vellfire X / V base (17")', sizes: [
          { tag: 'OE',  size: '215/60R17' },
          { tag: 'Alt', size: '225/55R17', note: '稍宽，保持 17" 外径' },
        ]},
        { name: 'Vellfire Executive / Z (18")', sizes: [
          { tag: 'OE',  size: '235/50R18' },
          { tag: 'Alt', size: '245/45R18', note: '运动感更强，需检查挡泥板间隙' },
        ]},
      ],
    },
    {
      key: 'ah20',
      label: 'AH20 2nd Gen (2008–2014)',
      years: '2008–2014',
      note: 'AH20 Vellfire (2008–2014). Road presence in Singapore is decreasing but tyre replacement demand continues. Standard uses 215/65R16; higher Welcab and Z grades use 215/55R17.',
      heroChips: [
        { label: 'Standard OE', value: '215/65R16' },
        { label: 'Z / Welcab OE', value: '215/55R17' },
        { label: 'From installed', value: '$98', green: true },
      ],
      variants: [
        { name: 'AH20 standard (16")', sizes: [
          { tag: 'OE',  size: '215/65R16' },
        ]},
        { name: 'AH20 Z / Welcab (17")', sizes: [
          { tag: 'OE',  size: '215/55R17' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2015–2022 · AH30 · X/V base · 17"',         width: '7.0J', diameter: '17"', offset: 'ET40', boltPattern: '5×114.3' },
    { label: '2015–2022 · AH30 · Executive/Z · 18"',       width: '7.5J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: '2008–2014 · AH20 · standard · 16"',          width: '6.5J', diameter: '16"', offset: 'ET40', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '60.1mm',
    stud: 'M12×1.5 nut',
    torque: '103 Nm',
    notes: 'Toyota Vellfire uses 5×114.3 bolt pattern, 60.1mm centre bore — same as Toyota Alphard, Harrier, RAV4. M12×1.5 lug nuts, torque 103 Nm. AH30 Vellfire and AH30 Alphard share identical wheel specs; wheels are interchangeable.',
  },

  priceTabs: [
    {
      size: '215/60R17',
      tabLabel: '215/60R17 · AH30 X/V base',
      budget: {
        name: 'Hankook Kinergy Eco2',
        desc: '17" MPV 舒适胎 · Vellfire 通勤预算首选',
        price: 108,
        also: 'Also: Kumho Solus 4, Nankang Econex NA-1',
        waText: 'Toyota Vellfire 215%2F60R17 budget tyre quote (Hankook Kinergy Eco2 or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: '17" 静音舒适 · Vellfire MPV 日用最佳',
        price: 178,
        also: 'Also: Michelin Primacy 4, Continental PremiumContact 6',
        waText: 'Toyota Vellfire 215%2F60R17 mid-range tyre quote (Bridgestone Turanza T005 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '17" 雨天 A 级 · 豪华 MPV 顶选',
        price: 218,
        also: 'Also: Bridgestone Turanza 6, Continental PremiumContact 7',
        waText: 'Toyota Vellfire 215%2F60R17 premium tyre quote (Michelin Primacy 4+)',
      },
      setEstimate: 'Budget $432–$560 · Mid-range $712–$880 · Premium $872–$1,040',
    },
    {
      size: '235/50R18',
      tabLabel: '235/50R18 · AH30 Executive/Z',
      budget: {
        name: 'Hankook Ventus Prime4',
        desc: '18" SUV/MPV 胎 · Executive Vellfire 预算选',
        price: 118,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25',
        waText: 'Toyota Vellfire Executive 235%2F50R18 budget tyre quote (Hankook Ventus Prime4 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4+',
        desc: '18" 静音豪华 · Executive Lounge 换胎最受欢迎',
        price: 218,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza T005',
        waText: 'Toyota Vellfire Executive 235%2F50R18 mid-range tyre quote (Michelin Primacy 4+ or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza 6',
        desc: '18" 极致静音 · 匹配 Vellfire 豪华定位',
        price: 268,
        also: 'Also: Michelin Pilot Sport All Season 4, Continental PremiumContact 7',
        waText: 'Toyota Vellfire Executive 235%2F50R18 premium tyre quote (Bridgestone Turanza 6)',
      },
      setEstimate: 'Budget $472–$600 · Mid-range $872–$1,040 · Premium $1,072–$1,280',
    },
  ],

  radarSize: '215/60R17',
  radarSource: 'Michelin (18 reviews) · Bridgestone (15 reviews) · Continental (12 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.0',
      scores: [68, 72, 80, 74, 72, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco2',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.5',
      scores: [86, 84, 90, 78, 82, 74], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza T005',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '90', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.8',
      scores: [88, 86, 92, 80, 84, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '92', hi: true }, { k: 'Wear', v: '80', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'AH30 Vellfire（215/60R17 / 235/50R18）— Alphard 孪生车，换胎一样',
      color: 'blue',
      genKey: 'ah30',
      body: 'AH30 Vellfire 与 AH30 Alphard 共用相同底盘，轮毂规格完全一致（5×114.3，60.1mm）。如果你的 Vellfire 和 Alphard 轮圈规格相同，可以直接互换。标准 X/V 配置的 <strong>215/60R17</strong> 在新加坡货源最充足，Bridgestone Turanza T005（$178/条）是最受欢迎的选择，整套约 $712。Executive/Z 的 <strong>235/50R18</strong> 货源也充足，Michelin Primacy 4+（$218/条）是豪华 MPV 的首选，NVH 表现优秀，整套约 $872。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Vellfire use in Singapore?',
      a: 'AH30 3rd Gen (2015–2022): X/V base uses 215/60R17; Executive and Z grades use 235/50R18. AH20 2nd Gen (2008–2014): standard uses 215/65R16; Z/Welcab uses 215/55R17. All use 5×114.3 bolt pattern, 60.1mm CB.',
    },
    {
      q: 'Are Toyota Vellfire and Alphard tyre sizes the same?',
      a: 'Yes. AH30 Vellfire and AH30 Alphard share the same platform, bolt pattern (5×114.3), and tyre sizes. AH30 base: 215/60R17; Executive/Z: 235/50R18. Wheels are fully interchangeable between the two models.',
    },
    {
      q: 'How much does it cost to replace Toyota Vellfire tyres in Singapore?',
      a: 'For 215/60R17 (AH30 base): budget from $108/tyre; mid-range (Bridgestone Turanza T005) $178; premium $218. Full set $432–$872. For 235/50R18 (Executive/Z): from $118 budget; mid $218; premium $268.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco2 215/60R17',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 215/60R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '178', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 215/60R17',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 235/50R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
