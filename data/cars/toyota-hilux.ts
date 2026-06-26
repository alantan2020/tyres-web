import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Hilux',
  makeSlug: 'toyota',
  modelSlug: 'hilux',
  bgWord: 'HILUX',

  seo: {
    title: 'Toyota Hilux Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Hilux Revo uses 205/70R15 (base), 225/70R17 (mid) or 265/65R17 (4WD). ⚠️ 6×139.7 six-lug bolt. From $128 installed. WhatsApp for a quote.',
    ogDescription: 'Toyota Hilux Revo uses 205/70R15, 225/70R17 or 265/65R17. ⚠️ 6×139.7 six-lug bolt. From $128 installed in Singapore.',
    twitterDescription: 'Toyota Hilux Revo uses 205/70R15, 225/70R17 or 265/65R17. From $128 installed.',
    priceFrom: 128,
    oeSize: '225/70R17',
  },

  defaultGen: 'an120',

  generations: [
    {
      key: 'an120',
      label: 'Gen 8 Revo (AN120)',
      years: '2015–2026',
      heroChips: [
        { label: '2.4D 2WD base',  value: '205/70R15' },
        { label: '2.4D mid / 4WD', value: '225/70R17' },
        { label: '2.8D 4WD top',   value: '265/65R17' },
      ],
      variants: [
        { name: '2.4 D-4D (2WD base single cab)', sizes: [
          { tag: 'OE',  size: '205/70R15', note: '2WD 单排基础版' },
          { tag: 'Alt', size: '205/65R16', note: '16" 升级' },
          { tag: 'Alt', size: '225/70R17', note: '双排可换装' },
        ]},
        { name: '2.4 D-4D (double cab mid / 4WD mid)', sizes: [
          { tag: 'OE',  size: '225/70R17', note: '双排标配，最常见' },
          { tag: 'Alt', size: '255/65R17', note: '稍宽，同直径' },
          { tag: 'Alt', size: '265/60R18', note: '18" 升级' },
        ]},
        { name: '2.8 D-4D (4WD top / GR Sport)', sizes: [
          { tag: 'OE',  size: '265/65R17', note: '4WD 顶配标配' },
          { tag: 'OE',  size: '265/60R18', note: 'GR Sport 专用 18"' },
          { tag: 'Alt', size: '285/60R17', note: '宽胎升级，最明显视觉效果' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2015–2026 · Revo · GR Sport / top 18"', width: '8J',   diameter: '18"', offset: 'ET20', boltPattern: '6×139.7' },
    { label: '2015–2026 · Revo · 4WD top 17"',        width: '7.5J', diameter: '17"', offset: 'ET25', boltPattern: '6×139.7' },
    { label: '2015–2026 · Revo · mid 17"',            width: '7J',   diameter: '17"', offset: 'ET25', boltPattern: '6×139.7' },
    { label: '2015–2026 · Revo · base 15"',           width: '6J',   diameter: '15"', offset: 'ET25', boltPattern: '6×139.7' },
  ],
  rimCommon: {
    centreBore: '106.1mm',
    stud: 'M12×1.5',
    torque: '120 Nm',
    warning: '⚠️ Hilux uses 6×139.7 SIX-LUG bolt pattern — same as Fortuner and Land Cruiser Prado 150. Not compatible with five-lug passenger car wheels. Tightening torque is 120 Nm (higher than passenger cars — do not under-tighten).',
  },

  priceTabs: [
    {
      size: '225/70R17',
      tabLabel: '225/70R17 · Revo 双排主力配置',
      budget: {
        name: 'Yokohama Geolandar A/T G015',
        desc: 'A/T 全地形 · 耐磨 · 适合城市 + 轻度越野',
        price: 158,
        also: 'Also: Nexen Roadian AT Pro, Triangle TR292',
        waText: 'Toyota Hilux Revo 225%2F70R17 budget tyre quote (Yokohama A%2FT or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler H/T 684',
        desc: '公路向 H/T · 静音耐磨 · 最多 Hilux 城市用车主选',
        price: 218,
        also: 'Also: Dunlop GrandTrek AT5, Yokohama Geolandar H/T G056',
        waText: 'Toyota Hilux Revo 225%2F70R17 mid-range tyre quote (Bridgestone Dueler or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin LTX Force',
        desc: '最佳湿地 · 高速稳定 · Hilux 皮卡公路首选',
        price: 288,
        also: 'Also: Continental CrossContact LX2, Goodyear Wrangler AT/SA',
        waText: 'Toyota Hilux Revo 225%2F70R17 premium tyre quote (Michelin LTX Force)',
      },
      setEstimate: 'Budget $632–$740 · Mid-range $872–$1,000 · Premium $1,152–$1,320',
    },
    {
      size: '265/65R17',
      tabLabel: '265/65R17 · Revo 4WD 顶配 / 升级',
      budget: {
        name: 'Nexen Roadian AT Pro',
        desc: 'A/T 全地形 · 价格实惠 · 4WD 皮卡常用',
        price: 148,
        also: 'Also: Triangle TR292, Sailun Terramax AT61',
        waText: 'Toyota Hilux Revo 265%2F65R17 budget tyre quote (Nexen Roadian or similar)',
      },
      mid: {
        name: 'Bridgestone Dueler A/T 001',
        desc: 'A/T 全地形 · 城市 + 越野平衡 · 4WD 最受好评',
        price: 248,
        also: 'Also: BF Goodrich All-Terrain, Yokohama Geolandar A/T G015',
        waText: 'Toyota Hilux Revo 265%2F65R17 mid-range tyre quote (Bridgestone Dueler A%2FT or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Latitude Cross',
        desc: 'A/T 综合最佳 · 轻度越野 · 公路安静',
        price: 298,
        also: 'Also: Goodyear Wrangler AT/SA, Continental CrossContact AT',
        waText: 'Toyota Hilux Revo 265%2F65R17 premium tyre quote (Michelin Latitude Cross)',
      },
      setEstimate: 'Budget $592–$700 · Mid-range $992–$1,140 · Premium $1,192–$1,360',
    },
  ],

  radarSize: '225/70R17',
  radarSource: 'Yokohama (16 reviews) · Bridgestone (20 reviews) · Michelin (14 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.4',
      scores: [72, 74, 80, 68, 78, 70], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Yokohama\nGeolandar A/T G015',
      stats: [{ k: 'Wet', v: '72', hi: false }, { k: 'Dry', v: '74', hi: false }, { k: 'OffRd', v: '80', hi: true }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [78, 84, 70, 82, 72, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nDueler H/T 684',
      stats: [{ k: 'Wet', v: '78', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Wear', v: '80', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.4',
      scores: [82, 86, 72, 84, 72, 78], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nLTX Force',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '86', hi: true }, { k: 'NVH', v: '84', hi: true }, { k: 'Wear', v: '82', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Hilux 城市 / 公路为主 · 225/70R17 H/T 车主',
      color: 'red',
      genKey: 'an120',
      body: '新加坡绝大多数 Hilux 主要在城市跑，建议优先选 <strong>H/T 公路胎</strong>，比 A/T 越野胎更安静、更省油。推荐 Bridgestone Dueler H/T 684（$218/条）——公路舒适，整套约 $872，是 Hilux 城市车主最常选的一款。<br>⚠️ Hilux 是 <strong>六孔（6×139.7）</strong>，轮辋和普通乘用车五孔不兼容，购买或换装轮辋务必确认规格。',
    },
    {
      title: 'Hilux 4WD / 全地形 · 265/65R17 A/T 车主',
      color: 'blue',
      genKey: 'an120',
      body: '4WD 顶配版的 265/65R17 配 A/T 全地形胎，适合偶尔出城或有越野需求的车主。推荐 Bridgestone Dueler A/T 001（$248/条）——城市公路静音，越野地形能力足够应付新加坡周边路况，整套四条约 $992。想要纯越野能力最强的选 BF Goodrich All-Terrain TA KO2，但市区噪音明显偏大。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Hilux use in Singapore?',
      a: 'Toyota Hilux Revo Gen 8 (AN120, 2015–2026): 2WD single cab base uses 205/70R15; double cab mid uses 225/70R17 (most common); 4WD top trim uses 265/65R17; GR Sport uses 265/60R18. Check the door jamb sticker or tyre sidewall to confirm your exact size.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Hilux?',
      a: 'Toyota Hilux Revo uses 6×139.7 bolt pattern with SIX lug nuts — the same as Fortuner and Land Cruiser Prado 150 Series. Centre bore is 106.1mm. Tightening torque is 120 Nm — higher than passenger cars. Do not use five-lug passenger car wheels on the Hilux.',
    },
    {
      q: 'A/T vs H/T tyres for Toyota Hilux in Singapore — which should I choose?',
      a: 'For city driving: choose H/T (Highway Terrain) like Bridgestone Dueler H/T 684. H/T tyres are quieter, last longer on tarmac, and have better wet braking on roads. If you regularly drive on dirt tracks or need serious off-road capability: choose A/T (All-Terrain) like Bridgestone Dueler A/T 001 or BF Goodrich All-Terrain. A/T tyres are noisier on tarmac and wear faster on asphalt.',
    },
    {
      q: 'How much does it cost to change Toyota Hilux tyres in Singapore?',
      a: 'For 225/70R17 (mid double cab): budget $158/tyre (Yokohama A/T G015); mid $218 (Bridgestone Dueler H/T, popular); premium $288 (Michelin LTX Force). Full set: ~$632–$1,152. For 265/65R17 (4WD top): budget $148; mid $248; premium $298. Full set: ~$592–$1,192.',
    },
    {
      q: 'Can I use Toyota Fortuner wheels on my Hilux?',
      a: 'Yes — Hilux Revo and Fortuner AN160 share the same 6×139.7 bolt pattern and 106.1mm centre bore, so wheel interchange is physically possible. However, confirm the offset (ET value) matches — using significantly different offsets can cause tyre rubbing or handling issues. Both models use ET25–ET30.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Yokohama Geolandar A/T G015 225/70R17', brand: { '@type': 'Brand', name: 'Yokohama' },    offers: { '@type': 'Offer', price: '158', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Dueler H/T 684 225/70R17',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '218', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin LTX Force 225/70R17',          brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '288', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Nexen Roadian AT Pro 265/65R17',        brand: { '@type': 'Brand', name: 'Nexen' },       offers: { '@type': 'Offer', price: '148', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Dueler A/T 001 265/65R17',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '248', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Latitude Cross 265/65R17',     brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '298', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
