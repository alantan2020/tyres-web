import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Fortuner',
  makeSlug: 'toyota',
  modelSlug: 'fortuner',
  bgWord: 'FORTUNER',

  seo: {
    title: 'Toyota Fortuner Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Fortuner AN160 uses 265/65R17 or 265/60R18. ⚠️ 6×139.7 bolt pattern (six lugs). From $148 installed in Singapore. Compare Bridgestone vs Michelin. WhatsApp for a quote.',
    ogDescription: 'Toyota Fortuner AN160 uses 265/65R17 or 265/60R18. ⚠️ 6×139.7 six-lug bolt pattern. From $148 installed in Singapore.',
    twitterDescription: 'Toyota Fortuner uses 265/65R17 or 265/60R18. 6×139.7 six-lug. From $148 installed in Singapore.',
    priceFrom: 148,
    oeSize: '265/65R17',
  },

  defaultGen: 'an160',

  generations: [
    {
      key: 'an160',
      label: 'Gen 2 AN150/AN160',
      years: '2016–2026',
      heroChips: [
        { label: '2.4D base OE',  value: '265/65R17' },
        { label: '2.8D top OE',   value: '265/60R18' },
        { label: 'From installed', value: '$148', green: true },
      ],
      variants: [
        { name: '2.4 D-4D (base / mid trim)', sizes: [
          { tag: 'OE',  size: '265/65R17', note: '标配，最常见' },
          { tag: 'Alt', size: '265/60R18', note: '升级常见换装' },
          { tag: 'Alt', size: '275/60R17', note: '稍宽同直径' },
        ]},
        { name: '2.8 D-4D (top trim / GR Sport)', sizes: [
          { tag: 'OE',  size: '265/60R18', note: '顶配标配' },
          { tag: 'OE',  size: '265/55R19', note: 'GR Sport 专用' },
          { tag: 'Alt', size: '265/65R17', note: '17" 降规，舒适性更好' },
        ]},
      ],
    },
    {
      key: 'an50',
      label: 'Gen 1 AN50/AN60',
      years: '2005–2015',
      heroChips: [
        { label: '3.0D OE',       value: '265/70R16' },
        { label: '2.7i OE',       value: '265/65R17' },
        { label: 'From installed', value: '$148', green: true },
      ],
      variants: [
        { name: '3.0 D-4D', sizes: [
          { tag: 'OE',  size: '265/70R16', note: '16" 标配' },
          { tag: 'Alt', size: '265/65R17', note: '升 17"' },
        ]},
        { name: '2.7 VVT-i', sizes: [
          { tag: 'OE',  size: '265/65R17', note: '17" 标配' },
          { tag: 'Alt', size: '265/70R16', note: '16" 替换' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2016–2026 · AN160 · GR Sport 19"',     width: '7.5J', diameter: '19"', offset: 'ET25', boltPattern: '6×139.7' },
    { label: '2016–2026 · AN160 · top trim 18"',      width: '7.5J', diameter: '18"', offset: 'ET30', boltPattern: '6×139.7' },
    { label: '2016–2026 · AN160 · base/mid 17"',     width: '7.5J', diameter: '17"', offset: 'ET30', boltPattern: '6×139.7' },
    { label: '2005–2015 · AN50/AN60 · 16"',          width: '7J',   diameter: '16"', offset: 'ET25', boltPattern: '6×139.7' },
  ],
  rimCommon: {
    centreBore: '106.1mm',
    stud: 'M12×1.5',
    torque: '120 Nm',
    warning: '⚠️ Fortuner uses 6×139.7 SIX-LUG bolt pattern — not the five-lug (5×114.3) found on most passenger cars. Same pattern as Toyota Hilux, Land Cruiser Prado, and Mitsubishi Triton. Do NOT use passenger car wheels on the Fortuner.',
  },

  priceTabs: [
    {
      size: '265/65R17',
      tabLabel: '265/65R17 · AN160 基础 / AN50 升级',
      budget: {
        name: 'Nexen NFERA RU1',
        desc: 'SUV 全天候 · 耐磨 · 适合城市 / 轻度越野',
        price: 148,
        also: 'Also: Triangle TR259 SUV, Sailun Terramax HLT',
        waText: 'Toyota Fortuner 265%2F65R17 budget tyre quote (Nexen or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler H/T 684',
        desc: '城市 H/T · 公路舒适 · 耐磨 · Fortuner 车主最多选',
        price: 218,
        also: 'Also: Dunlop GrandTrek AT5, Yokohama Geolandar H/T G056',
        waText: 'Toyota Fortuner 265%2F65R17 mid-range tyre quote (Bridgestone H%2FT or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin LTX Force',
        desc: '高速稳定 · 最佳湿地 · Fortuner 2.8 首选',
        price: 288,
        also: 'Also: Continental CrossContact LX2, Michelin Primacy SUV+',
        waText: 'Toyota Fortuner 265%2F65R17 premium tyre quote (Michelin LTX Force)',
      },
      setEstimate: 'Budget $592–$700 · Mid-range $872–$1,000 · Premium $1,152–$1,320',
    },
    {
      size: '265/60R18',
      tabLabel: '265/60R18 · AN160 顶配 / 升级',
      budget: {
        name: 'Yokohama Geolandar H/T G056',
        desc: 'SUV H/T · 公路舒适 · 耐磨',
        price: 188,
        also: 'Also: Nexen NFERA RU1, Triangle TR259',
        waText: 'Toyota Fortuner 265%2F60R18 budget tyre quote (Yokohama G056 or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler H/T 684 II',
        desc: '城市公路 · 静音舒适 · 2.8D 顶配首选',
        price: 248,
        also: 'Also: Dunlop GrandTrek PT5, Continental CrossContact LX2',
        waText: 'Toyota Fortuner 265%2F60R18 mid-range tyre quote (Bridgestone Dueler or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy SUV+',
        desc: '最佳湿地 · 低滚阻 · 大尺寸 SUV 顶配首选',
        price: 318,
        also: 'Also: Pirelli Scorpion Verde, Continental CrossContact RX',
        waText: 'Toyota Fortuner 265%2F60R18 premium tyre quote (Michelin Primacy SUV%2B)',
      },
      setEstimate: 'Budget $752–$880 · Mid-range $992–$1,140 · Premium $1,272–$1,440',
    },
  ],

  radarSize: '265/65R17',
  radarSource: 'Nexen (14 reviews) · Bridgestone (22 reviews) · Michelin (18 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [68, 74, 76, 68, 82, 72], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Nexen\nNFERA RU1',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'Wear', v: '76', hi: true }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.0',
      scores: [76, 82, 84, 78, 74, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nDueler H/T 684',
      stats: [{ k: 'Wet', v: '76', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'Wear', v: '84', hi: true }, { k: 'NVH', v: '78', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [83, 86, 82, 84, 72, 78], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nLTX Force',
      stats: [{ k: 'Wet', v: '83', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'AN160 Fortuner · 265/65R17 车主（城市 / 公路为主）',
      color: 'red',
      genKey: 'an160',
      body: 'Fortuner 在新加坡主要城市使用，越野需求少，建议选 <strong>H/T（Highway Terrain）公路胎</strong>，而非 A/T 越野胎。推荐 Bridgestone Dueler H/T 684（$218/条）——静音耐磨，公路表现优秀，整套四条约 $872，是最多 Fortuner 车主的选择。<br>⚠️ Fortuner 用 <strong>6×139.7 六孔</strong>，与普通乘用车的五孔不同。换轮辋时必须确认六孔规格。',
    },
    {
      title: 'AN160 顶配 · 265/60R18 / 2.8D 车主',
      color: 'blue',
      genKey: 'an160',
      body: '顶配 2.8D 标配 265/60R18，轮胎更大更贵。推荐 Bridgestone Dueler H/T 684 II（$248/条）——城市公路性能强，四条约 $992。想要最佳湿地制动和最长使用寿命，Michelin Primacy SUV+（$318/条）是 Fortuner 2.8D 的终极选择，四条整套 $1,272 起。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Fortuner use in Singapore?',
      a: 'Gen 2 AN160 (2016–2026): OE 265/65R17 (base/mid 2.4D), 265/60R18 (top 2.8D), 265/55R19 (GR Sport). Gen 1 AN50/AN60 (2005–2015): OE 265/70R16 (3.0D) or 265/65R17 (2.7i). The AN160 with 265/65R17 is the most common Fortuner in Singapore.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Fortuner?',
      a: 'Toyota Fortuner uses 6×139.7 bolt pattern with SIX lug nuts — not the five-lug pattern on passenger cars. Centre bore is 106.1mm, lug nut thread M12×1.5, tightening torque 120 Nm (higher than passenger cars). Same pattern as Toyota Hilux, Land Cruiser Prado 150, and Mitsubishi Triton.',
    },
    {
      q: 'How much does it cost to change Toyota Fortuner tyres in Singapore?',
      a: 'For 265/65R17 (AN160 base): budget $148/tyre (Nexen); mid-range $218 (Bridgestone Dueler H/T, popular); premium $288 (Michelin LTX Force). Full set: ~$592–$1,152. For 265/60R18 (AN160 top): budget $188; mid $248; premium $318. Full set: ~$752–$1,272.',
    },
    {
      q: 'Should I use A/T or H/T tyres for my Fortuner in Singapore?',
      a: 'For Singapore city driving, choose H/T (Highway Terrain) tyres like Bridgestone Dueler H/T or Michelin LTX Force. H/T tyres are quieter, have lower rolling resistance, and last longer on tarmac. A/T (All-Terrain) tyres are better if you regularly drive on unpaved roads or gravel — but they are noisier and wear faster on asphalt. Most Singapore Fortuner owners use H/T tyres.',
    },
    {
      q: 'Can I use Hilux wheels on a Fortuner?',
      a: 'Yes — Toyota Hilux (Revo/Gen 8) and Fortuner AN160 share the same 6×139.7 bolt pattern and 106.1mm centre bore. Wheel interchange is possible, but confirm the offset (ET) is compatible. AN160 uses ET25–ET30. Using a wheel with significantly different offset can cause tyre rubbing or poor handling.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Nexen NFERA RU1 265/65R17',             brand: { '@type': 'Brand', name: 'Nexen' },       offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Dueler H/T 684 265/65R17',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin LTX Force 265/65R17',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '288', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Yokohama Geolandar H/T G056 265/60R18', brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Dueler H/T 684 265/60R18',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy SUV+ 265/60R18',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '318', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
