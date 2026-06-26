import type { CarData } from './types'

const data: CarData = {
  make: 'Kia',
  model: 'Seltos',
  makeSlug: 'kia',
  modelSlug: 'seltos',
  bgWord: 'SELTOS',

  seo: {
    title: 'Kia Seltos Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Kia Seltos SP2i uses 205/65R16 (base) or 215/60R17 (mid). 5×114.3 bolt. From $88 installed. Compare Bridgestone vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Kia Seltos SP2i: 205/65R16 (base) or 215/60R17 (mid). 5×114.3, CB 67.1mm. From $88 installed in Singapore.',
    twitterDescription: 'Kia Seltos uses 205/65R16 (base) or 215/60R17 (mid). From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '215/60R17',
  },

  defaultGen: 'sp2i_fl',

  generations: [
    {
      key: 'sp2i_fl',
      label: 'SP2i Facelift (2nd Gen FL)',
      years: '2023–2026',
      heroChips: [
        { label: 'Base OE',        value: '205/65R16' },
        { label: 'Mid OE',         value: '215/60R17' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.4T / 1.6T (base trim)', sizes: [
          { tag: 'OE',  size: '205/65R16', note: '基础版 16" 标配' },
          { tag: 'Alt', size: '215/60R16', note: '稍宽同直径' },
          { tag: 'Alt', size: '215/60R17', note: '升 17"，中配尺码' },
        ]},
        { name: '1.4T / 1.6T (mid trim)', sizes: [
          { tag: 'OE',  size: '215/60R17', note: '中配 17" 标配（最常见）' },
          { tag: 'Alt', size: '215/55R17', note: '稍矮同直径' },
          { tag: 'Alt', size: '205/65R16', note: '降 16"，舒适省钱' },
        ]},
        { name: '1.4T (high trim)', sizes: [
          { tag: 'OE',  size: '215/55R18', note: '高配 18"' },
          { tag: 'OE',  size: '225/50R18', note: '部分高配 18" 宽胎（市场参考）' },
          { tag: 'Alt', size: '215/60R17', note: '降 17"，舒适省钱' },
        ]},
      ],
    },
    {
      key: 'sp2i',
      label: 'SP2i (2nd Gen)',
      years: '2021–2023',
      heroChips: [
        { label: 'Base OE',        value: '205/65R16' },
        { label: 'Mid OE',         value: '215/60R17' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '1.4T (base trim)', sizes: [
          { tag: 'OE',  size: '205/65R16', note: '基础版 16" 标配' },
          { tag: 'Alt', size: '215/60R17', note: '升 17"，中配尺码' },
        ]},
        { name: '1.4T (mid/high trim)', sizes: [
          { tag: 'OE',  size: '215/60R17', note: '中配 17"' },
          { tag: 'OE',  size: '215/55R18', note: '高配 18"' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2021–2026 · SP2i · high 18"',  width: '6.5J', diameter: '18"', offset: 'ET49', boltPattern: '5×114.3' },
    { label: '2021–2026 · SP2i · mid 17"',   width: '6.5J', diameter: '17"', offset: 'ET49', boltPattern: '5×114.3' },
    { label: '2021–2026 · SP2i · base 16"',  width: '6J',   diameter: '16"', offset: 'ET43', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '110 Nm',
    notes: 'Kia Seltos uses 5×114.3 with 67.1mm centre bore — same as all Kia and Hyundai models. The 215/60R17 is shared with the Hyundai Kona SX2 petrol and several other compact SUVs.',
  },

  priceTabs: [
    {
      size: '215/60R17',
      tabLabel: '215/60R17 · mid 主力（货源充足）',
      budget: {
        name: 'Blackhawk Agility SUV',
        desc: '紧凑 SUV · 88 条现货 · 日常出行',
        price: 101,
        also: 'Also: Nexen NFERA RU1, Kapsen K737',
        waText: 'Kia Seltos SP2i 215%2F60R17 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Alenza 001A',
        desc: 'SUV 静音耐磨 · 88 条现货',
        price: 181,
        also: 'Also: Yokohama Advan V61, Good Year Assurance Triplemax 2',
        waText: 'Kia Seltos SP2i 215%2F60R17 mid-range tyre quote (Bridgestone Alenza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: 'A 级湿地 · 低滚阻 · 城市 SUV 最佳 · 30 条现货',
        price: 226,
        also: 'Also: Continental CrossContact LX2, Pirelli Scorpion Verde',
        waText: 'Kia Seltos SP2i 215%2F60R17 premium tyre quote (Michelin Primacy 5 or similar)',
      },
      setEstimate: 'Budget $404–$480 · Mid-range $724–$840 · Premium $904–$1,040',
    },
    {
      size: '205/65R16',
      tabLabel: '205/65R16 · base 16"（货源充足）',
      budget: {
        name: 'Blackhawk Street-H HH11',
        desc: '16" 基础版 · 12 条现货 · 最低成本',
        price: 88,
        also: 'Also: Yokohama A580, Bridgestone Techno',
        waText: 'Kia Seltos base 205%2F65R16 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP150',
        desc: 'SUV 节油 · 低滚阻 · 58 条现货',
        price: 138,
        also: 'Also: Yokohama ES32, Bridgestone EP300',
        waText: 'Kia Seltos base 205%2F65R16 mid-range tyre quote (Bridgestone EP150 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 5',
        desc: 'A 级湿地 · 城市节油 · 24 条现货',
        price: 189,
        also: 'Also: Continental PremiumContact 7, Pirelli Cinturato P7',
        waText: 'Kia Seltos base 205%2F65R16 premium tyre quote (Michelin Primacy 5 or similar)',
      },
      setEstimate: 'Budget $352–$420 · Mid-range $552–$640 · Premium $756–$880',
    },
  ],

  radarSize: '215/60R17',
  radarSource: 'Blackhawk (14 reviews) · Bridgestone (24 reviews) · Michelin (26 reviews). Source: TyreReviews.com. Fuel Efficiency from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 72, 75, 70, 84, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Blackhawk\nAgility SUV',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'NVH', v: '70', hi: false }, { k: 'Value', v: '84', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [78, 82, 83, 81, 74, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nAlenza 001A',
      stats: [{ k: 'Wet', v: '78', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '81', hi: true }, { k: 'Wear', v: '83', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.6',
      scores: [84, 86, 85, 83, 80, 82], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 5',
      stats: [{ k: 'Wet', v: '84', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '85', hi: true }, { k: 'Fuel', v: '80', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Seltos SP2i · 215/60R17 换胎（最常见）',
      color: 'red',
      genKey: 'sp2i_fl',
      body: 'Seltos 215/60R17 与 Hyundai Kona 同尺码，货源充足（88 条现货）。日常城市用 Bridgestone Alenza 001A（$181/条），耐磨静音，四条约 $724。预算选 Blackhawk Agility SUV（$101/条），四条约 $404。',
    },
    {
      title: 'Seltos base · 205/65R16 换胎',
      color: 'blue',
      genKey: 'sp2i_fl',
      body: '16" 基础版胎货源充足（我库 12 条，但可补货）。推荐 Bridgestone EP150（$138/条），节油低滚阻，四条约 $552。可考虑升换 17" 中配尺码（215/60R17），舒适性和操控明显改善。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Kia Seltos use in Singapore?',
      a: 'Kia Seltos SP2i (2021+): 205/65R16 (base trim), 215/60R17 (mid trim), or 215/55R18 / 225/50R18 (high trim). The 215/60R17 is the most common size for mid-trim Seltos in Singapore.',
    },
    {
      q: 'What is the bolt pattern of the Kia Seltos?',
      a: 'Kia Seltos uses 5×114.3 with 67.1mm centre bore, M12×1.5, 110 Nm — same as all Kia and Hyundai models.',
    },
    {
      q: 'How much does it cost to change Kia Seltos tyres in Singapore?',
      a: 'For 215/60R17 (mid): budget $101 (Blackhawk); mid $181 (Bridgestone Alenza, popular); premium $226 (Michelin Primacy 5). Full set ~$404–$904. For 205/65R16 (base): $88–$189 per tyre, set ~$352–$756.',
    },
    {
      q: 'Are Kia Seltos and Hyundai Kona tyres interchangeable?',
      a: 'The 215/60R17 tyre size is shared between the Seltos SP2i mid-trim and Kona SX2 petrol. Same 5×114.3 CB 67.1mm bolt pattern. However, confirm rim offset before swapping wheels.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Blackhawk Agility SUV 215/60R17',     brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '101', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Alenza 001A 215/60R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '181', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 5 215/60R17',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '226', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Blackhawk Street-H HH11 205/65R16',  brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '88', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP150 205/65R16', brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
