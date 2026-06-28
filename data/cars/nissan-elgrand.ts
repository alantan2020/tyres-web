import type { CarData } from './types'

const data: CarData = {
  make: 'Nissan',
  model: 'Elgrand',
  makeSlug: 'nissan',
  modelSlug: 'elgrand',
  bgWord: 'ELGRAND',

  seo: {
    title: 'Nissan Elgrand Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Nissan Elgrand E52 3rd Gen (2010–2021) uses 225/55R18 (all). E51 2nd Gen (2002–2010) uses 215/65R16 (base) or 235/55R18 (Rider). 5×114.3, 66.1mm CB, M14×1.5. Luxury MPV. From $108 installed.',
    ogDescription: 'Nissan Elgrand E52: 225/55R18 (all). E51: 215/65R16 or 235/55R18. 5×114.3, 66.1mm. Luxury MPV. From $108.',
    twitterDescription: 'Nissan Elgrand E52 uses 225/55R18. E51 uses 215/65R16 or 235/55R18. From $108.',
    priceFrom: 108,
    oeSize: '225/55R18',
  },

  defaultGen: 'e52',

  generations: [
    {
      key: 'e52',
      label: 'E52 3rd Gen (2010–2021)',
      years: '2010–2021',
      note: 'Current-ish generation Nissan Elgrand. All grades (Highway Star, Rider, S/E) use 225/55R18. Very popular luxury MPV in Singapore — parallel import market.',
      heroChips: [
        { label: 'All trims OE', value: '225/55R18' },
        { label: 'Luxury MPV',   value: 'Nissan E52' },
        { label: 'From installed', value: '$108', green: true },
      ],
      variants: [
        { name: 'Elgrand E52 — all trims (18")', sizes: [
          { tag: 'OE',  size: '225/55R18' },
          { tag: 'Alt', size: '235/50R18', note: '稍宽，保持 18" 外径' },
        ]},
      ],
    },
    {
      key: 'e51',
      label: 'E51 2nd Gen (2002–2010)',
      years: '2002–2010',
      note: 'Previous generation Elgrand E51. Base uses 215/65R16; Rider and highway star use 235/55R18.',
      heroChips: [
        { label: 'E51 base OE',   value: '215/65R16' },
        { label: 'E51 Rider OE', value: '235/55R18' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: 'E51 base (16")', sizes: [{ tag: 'OE', size: '215/65R16' }] },
        { name: 'E51 Rider / Highway Star (18")', sizes: [{ tag: 'OE', size: '235/55R18' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'E52 2010+ · all trims · 18"',   width: '7.5J', diameter: '18"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: 'E51 2002+ · base · 16"',         width: '6.5J', diameter: '16"', offset: 'ET40', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '66.1mm',
    stud: 'M14×1.5 bolt',
    torque: '130 Nm',
    notes: 'Nissan Elgrand uses 5×114.3 bolt pattern, 66.1mm centre bore — same as Nissan Serena, X-Trail, Teana. M14×1.5 wheel bolts, torque 130 Nm.',
  },

  priceTabs: [
    {
      size: '225/55R18',
      tabLabel: '225/55R18 · Elgrand E52 all trims',
      budget: {
        name: 'Hankook Kinergy 4S2',
        desc: '18" 静音 SUV 胎 · Elgrand E52 预算首选',
        price: 108,
        also: 'Also: Kumho Solus 4S, Nankang Cross Sport SP-9',
        waText: 'Nissan Elgrand E52 225%2F55R18 budget tyre quote (Hankook Kinergy 4S2 or similar)',
      },
      mid: {
        name: 'Michelin Primacy 4+',
        desc: '18" 静音豪华 · Elgrand 高端 MPV 最受推荐',
        price: 208,
        also: 'Also: Continental PremiumContact 6, Bridgestone Turanza T005',
        waText: 'Nissan Elgrand E52 225%2F55R18 mid-range tyre quote (Michelin Primacy 4+ or similar)',
        popular: true,
      },
      premium: {
        name: 'Bridgestone Turanza 6',
        desc: '18" 极致静音 · Elgrand 旗舰换胎方案',
        price: 268,
        also: 'Also: Michelin e.Primacy, Continental PremiumContact 7',
        waText: 'Nissan Elgrand E52 225%2F55R18 premium tyre quote (Bridgestone Turanza 6)',
      },
      setEstimate: 'Budget $432–$600 · Mid-range $832–$1,040 · Premium $1,072–$1,280',
    },
  ],

  radarSize: '225/55R18',
  radarSource: 'Michelin (11 reviews) · Bridgestone (9 reviews) · Hankook (7 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [70, 72, 80, 74, 72, 84], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy 4S2',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '80', hi: true }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
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
      title: 'Elgrand E52（225/55R18）— 豪华 MPV，换胎选静音旗舰胎',
      color: 'blue',
      genKey: 'e52',
      body: 'Nissan Elgrand E52 是通过平行进口进入新加坡的高端日规 MPV，定位与 Alphard 相近，换胎需求与 Alphard 类似——侧重 <strong>静音和豪华感</strong>。225/55R18 全系一致，货源充足。<strong>Michelin Primacy 4+（$208/条）</strong>是新加坡 Elgrand 车主最常选的方案，NVH 和静音体验顶级，整套约 $832。Bridgestone Turanza 6 更静，适合追求极致乘坐品质的车主。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Nissan Elgrand use in Singapore?',
      a: 'Nissan Elgrand E52 (2010+): all trims use 225/55R18. E51 (2002–2010): base uses 215/65R16; Rider and Highway Star use 235/55R18. 5×114.3 bolt pattern, 66.1mm centre bore.',
    },
    {
      q: 'How much does it cost to replace Nissan Elgrand tyres in Singapore?',
      a: 'For E52 225/55R18: budget from $108/tyre; mid-range (Michelin Primacy 4+) $208; premium (Bridgestone Turanza 6) $268. Full set $432–$1,072. Most Elgrand owners opt for mid-range or premium given the luxury MPV positioning.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy 4S2 225/55R18',        brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/55R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '208', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 225/55R18',      brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '268', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
