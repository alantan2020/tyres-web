import type { CarData } from './types'

const data: CarData = {
  make: 'Nissan',
  model: 'Navara',
  makeSlug: 'nissan',
  modelSlug: 'navara',
  bgWord: 'NAVARA',

  seo: {
    title: 'Nissan Navara Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Nissan Navara NP300 D23 uses 265/65R17 (double cab, most common) or 205/70R15 (single cab base). ⚠️ 6×114.3 six-lug bolt. From $128 installed. WhatsApp for a quote.',
    ogDescription: 'Nissan Navara NP300 D23: 265/65R17 (double cab) or 205/70R15 (single cab). ⚠️ 6×114.3 six-lug. From $128 installed in Singapore.',
    twitterDescription: 'Nissan Navara NP300 uses 265/65R17 or 205/70R15. ⚠️ 6×114.3 six-lug. From $128 installed.',
    priceFrom: 128,
    oeSize: '265/65R17',
  },

  defaultGen: 'd23fl',

  generations: [
    {
      key: 'd23fl',
      label: 'D23 NP300 FL / Pro-4X (2019–2026)',
      years: '2019–2026',
      heroChips: [
        { label: 'Double cab / Pro-4X', value: '265/65R17' },
        { label: 'From installed', value: '$128', green: true },
      ],
      variants: [
        { name: '2.5 D (double cab STX / SL / Pro-4X)', sizes: [
          { tag: 'OE',  size: '265/65R17' },
          { tag: 'Alt', size: '265/60R18', note: '18" 升级，视觉效果最明显' },
          { tag: 'Alt', size: '285/60R17', note: '同径宽胎，提升视觉' },
        ]},
      ],
    },
    {
      key: 'd23',
      label: 'D23 NP300 (2015–2019)',
      years: '2015–2019',
      heroChips: [
        { label: 'Double cab 4WD',    value: '265/65R17' },
        { label: 'Single cab base',   value: '205/70R15' },
        { label: 'From installed',    value: '$128', green: true },
      ],
      variants: [
        { name: '2.5 D (double cab 4WD / STX)', sizes: [
          { tag: 'OE',  size: '265/65R17' },
          { tag: 'Alt', size: '255/65R17', note: '稍窄，更省油' },
        ]},
        { name: '2.5 D (single cab base 2WD)', sizes: [
          { tag: 'OE',  size: '205/70R15' },
          { tag: 'Alt', size: '225/70R16', note: '16" 升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019–2026 · D23 FL / Pro-4X · 4WD · 17"',  width: '7J',  diameter: '17"', offset: 'ET30', boltPattern: '6×114.3' },
    { label: '2015–2019 · D23 · 4WD double cab · 17"',   width: '7J',  diameter: '17"', offset: 'ET30', boltPattern: '6×114.3' },
    { label: '2015–2019 · D23 · 2WD single cab · 15"',   width: '6J',  diameter: '15"', offset: 'ET25', boltPattern: '6×114.3' },
  ],
  rimCommon: {
    centreBore: '66.1mm',
    stud: 'M12×1.5',
    torque: '118 Nm',
    warning: '⚠️ Navara NP300 uses 6×114.3 SIX-LUG bolt pattern — NOT compatible with Toyota Hilux (6×139.7) or five-lug passenger cars. Tightening torque is 118 Nm — always torque to spec on a commercial pickup.',
  },

  priceTabs: [
    {
      size: '265/65R17',
      tabLabel: '265/65R17 · NP300 双排主力配置',
      budget: {
        name: 'Nexen Roadian AT Pro',
        desc: 'A/T 全地形 · 耐磨 · 价格实惠',
        price: 128,
        also: 'Also: Triangle TR292, Sailun Terramax AT61',
        waText: 'Nissan Navara 265%2F65R17 budget tyre quote (Nexen Roadian or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler A/T 001',
        desc: '城市 + 越野平衡 · 静音 · Navara 最受好评',
        price: 238,
        also: 'Also: Yokohama Geolandar A/T G015, Dunlop GrandTrek AT5',
        waText: 'Nissan Navara 265%2F65R17 mid-range tyre quote (Bridgestone Dueler A%2FT or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Latitude Cross',
        desc: 'A/T 综合最佳 · 轻度越野 · 公路安静',
        price: 285,
        also: 'Also: BF Goodrich All-Terrain TA KO2, Goodyear Wrangler AT/SA',
        waText: 'Nissan Navara 265%2F65R17 premium tyre quote (Michelin Latitude Cross)',
      },
      setEstimate: 'Budget $512–$600 · Mid-range $952–$1,100 · Premium $1,140–$1,300',
    },
    {
      size: '205/70R15',
      tabLabel: '205/70R15 · NP300 单排基础版',
      budget: {
        name: 'Blackhawk Hiscend-H',
        desc: '15" 单排轻商用 · 耐磨实用',
        price: 88,
        also: 'Also: Triangle TR292, Kumho Road Venture AT',
        waText: 'Nissan Navara 205%2F70R15 budget tyre quote (Blackhawk or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler H/T 684',
        desc: 'H/T 公路向 · 耐磨静音 · 适合单排日常配送用途',
        price: 148,
        also: 'Also: Yokohama Geolandar H/T G056, Dunlop GrandTrek AT5',
        waText: 'Nissan Navara 205%2F70R15 mid-range tyre quote (Bridgestone Dueler H%2FT or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin LTX Force',
        desc: '最佳公路性能 · 高速稳定',
        price: 188,
        also: 'Also: Continental CrossContact LX2, Goodyear Wrangler HT',
        waText: 'Nissan Navara 205%2F70R15 premium tyre quote (Michelin LTX Force)',
      },
      setEstimate: 'Budget $352–$420 · Mid-range $592–$680 · Premium $752–$860',
    },
  ],

  radarSize: '265/65R17',
  radarSource: 'Nexen (8 reviews) · Bridgestone (16 reviews) · Michelin (11 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [66, 72, 80, 64, 72, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nexen\nRoadian AT Pro',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'OffRd', v: '80', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [76, 84, 76, 82, 74, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nDueler A/T 001',
      stats: [{ k: 'Wet', v: '76', hi: false }, { k: 'Dry', v: '84', hi: true }, { k: 'OffRd', v: '76', hi: false }, { k: 'NVH', v: '82', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.3',
      scores: [80, 84, 78, 84, 78, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nLatitude Cross',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '78', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Navara 城市 / 公路为主 · 双排 265/65R17',
      color: 'blue',
      genKey: 'd23fl',
      body: '新加坡大多数 Navara 以城市和公路为主，建议优先选 <strong>A/T 全地形胎</strong> 而非纯 H/T，因为皮卡偶尔需要开驳脚路或建筑工地。首选 <strong>Bridgestone Dueler A/T 001</strong>（$238/条）——城市公路静音，越野能力满足日常需要，整套约 $952，是 Navara 最受好评的选择。<br>⚠️ Navara NP300 是 <strong>6×114.3 六孔</strong>，与 Toyota Hilux（6×139.7）不通用，也不能用 5 孔乘用车轮辋。',
    },
    {
      title: 'Navara 单排基础版 · 205/70R15',
      color: 'red',
      genKey: 'd23',
      body: '单排 NP300 基础版原配 <strong>205/70R15</strong>，多用于轻商业配送，耐用即可。Bridgestone Dueler H/T 684（$148/条）耐磨静音，整套约 $592，是配送用途最实用的选择。若使用场景以城市配送为主且不需要越野能力，H/T 比 A/T 更省油、更安静。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Nissan Navara use in Singapore?',
      a: 'Nissan Navara D23 NP300 (2015–2026): double cab STX/SL/Pro-4X uses 265/65R17; single cab base 2WD uses 205/70R15. The Pro-4X (2019+) also uses 265/65R17. Confirm your exact size by checking the door jamb sticker or tyre sidewall.',
    },
    {
      q: 'What is the bolt pattern of the Nissan Navara NP300?',
      a: 'Nissan Navara D23 NP300 uses 6×114.3 bolt pattern with 66.1mm centre bore — SIX lug nuts. Tightening torque is 118 Nm. This is NOT the same as Toyota Hilux (6×139.7) or any five-lug passenger car. Double-check before purchasing aftermarket rims.',
    },
    {
      q: 'A/T vs H/T tyres for Nissan Navara in Singapore — which should I choose?',
      a: 'For daily city and highway use: A/T (all-terrain) tyres like Bridgestone Dueler A/T 001 or Yokohama Geolandar A/T G015 are the best balance — quieter on roads than hardcore off-road tyres, but capable on light dirt tracks. H/T tyres are quieter on tarmac and suit single-cab delivery use. Pure M/T tyres are only needed for serious off-road and are very noisy on tarmac.',
    },
    {
      q: 'How much does it cost to replace Nissan Navara tyres in Singapore?',
      a: 'For 265/65R17 (most common): budget from $128 per tyre (Nexen Roadian AT); mid-range $238 (Bridgestone Dueler A/T, most popular); premium $285 (Michelin Latitude Cross). Full set: approx $512–$1,140. For 205/70R15 (single cab base): budget $88; mid $148; full set $352–$592.',
    },
    {
      q: 'Can I fit 285/60R17 tyres on my Nissan Navara NP300?',
      a: 'Yes, 285/60R17 is a popular aftermarket upgrade on the Navara NP300 for a wider, more aggressive look. The overall diameter is very similar to 265/65R17, keeping speedometer reading accurate. Make sure the wider tyre does not rub the mudguards or suspension when fully turned or loaded — a quick test drive with a full load is recommended.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nexen Roadian AT Pro 265/65R17',         brand: { '@type': 'Brand', name: 'Nexen' },       offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Dueler A/T 001 265/65R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '238', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Latitude Cross 265/65R17',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '285', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Blackhawk Hiscend-H 205/70R15',          brand: { '@type': 'Brand', name: 'Blackhawk' },   offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Dueler H/T 684 205/70R15',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin LTX Force 205/70R15',           brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
