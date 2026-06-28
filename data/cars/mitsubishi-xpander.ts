import type { CarData } from './types'

const data: CarData = {
  make: 'Mitsubishi',
  model: 'Xpander',
  makeSlug: 'mitsubishi',
  modelSlug: 'xpander',
  bgWord: 'XPANDER',

  seo: {
    title: 'Mitsubishi Xpander Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Mitsubishi Xpander XFC uses 205/65R15 (GL/GLS) or 195/65R15 (Standard base). From $72 installed in Singapore. Compare brands and WhatsApp for a quote.',
    ogDescription: 'Mitsubishi Xpander XFC tyre sizes: 205/65R15 (GL/GLS) or 195/65R15 (base). 4×114.3 bolt pattern. From $72 installed in Singapore.',
    twitterDescription: 'Mitsubishi Xpander uses 205/65R15 or 195/65R15. From $72 installed in Singapore.',
    priceFrom: 72,
    oeSize: '205/65R15',
  },

  defaultGen: 'xfc-fl',

  generations: [
    {
      key: 'xfc-fl',
      label: 'XFC Facelift (2022–2026)',
      years: '2022–2026',
      heroChips: [
        { label: 'GL / GLS', value: '205/65R15' },
        { label: 'From installed', value: '$72', green: true },
      ],
      variants: [
        { name: 'GL / GLS (alloy rims)', sizes: [
          { tag: 'OE',  size: '205/65R15' },
          { tag: 'Alt', size: '215/60R15', note: '宽 10mm，但车轮拱可能略紧' },
        ]},
        { name: 'Standard (steel rims, if applicable)', sizes: [
          { tag: 'OE',  size: '195/65R15' },
          { tag: 'Alt', size: '205/65R15', note: '常见升级，直径几乎相同' },
        ]},
      ],
    },
    {
      key: 'xfc',
      label: 'XFC Gen 1 (2017–2022)',
      years: '2017–2022',
      heroChips: [
        { label: 'GL / GLS', value: '205/65R15' },
        { label: 'Standard base', value: '195/65R15' },
        { label: 'From installed', value: '$72', green: true },
      ],
      variants: [
        { name: 'GL / GLS (alloy rims)', sizes: [
          { tag: 'OE',  size: '205/65R15' },
          { tag: 'Alt', size: '215/60R15', note: '略宽升级，需确认轮拱间隙' },
        ]},
        { name: 'Standard base (steel rims)', sizes: [
          { tag: 'OE',  size: '195/65R15' },
          { tag: 'Alt', size: '205/65R15', note: '升级 GL 尺寸，货源更充足' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2022–2026 · XFC FL · GL / GLS · 15"',  width: '6.0J', diameter: '15"', offset: 'ET45', boltPattern: '4×114.3' },
    { label: '2017–2022 · XFC · GL / GLS · 15"',     width: '6.0J', diameter: '15"', offset: 'ET45', boltPattern: '4×114.3' },
    { label: '2017–2026 · Standard · 15" steel',     width: '5.5J', diameter: '15"', offset: 'ET45', boltPattern: '4×114.3' },
  ],
  rimCommon: {
    centreBore: '67.1mm',
    stud: 'M12×1.5',
    torque: '88 Nm',
    warning: 'Xpander uses 4×114.3 (4-lug), NOT 5-lug. Rims from Toyota Hiace (6-lug), Nissan X-Trail (5-lug), or any 5-bolt car are NOT compatible.',
  },

  priceTabs: [
    {
      size: '205/65R15',
      tabLabel: '205/65R15 · GL / GLS 主力尺码',
      budget: {
        name: 'Hankook Kinergy Eco 2 K435',
        desc: '15" 日常 MPV 用途 · 低滚阻省油 · 价格实惠',
        price: 72,
        also: 'Also: Kumho Ecowing ES31, Blackhawk Street-H HH11',
        waText: 'Mitsubishi Xpander 205%2F65R15 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP300',
        desc: '低滚阻设计 · 适合载人家用 MPV · 静音耐磨',
        price: 95,
        also: 'Also: Continental ComfortContact CC6, Dunlop SP Sport Eco 270',
        waText: 'Mitsubishi Xpander 205%2F65R15 mid-range tyre quote (Bridgestone Ecopia EP300 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '最佳湿地制动 · Wet grip A 级 · 家庭安全首选',
        price: 118,
        also: 'Also: Goodyear EfficientGrip Performance 2, Pirelli Cinturato P7',
        waText: 'Mitsubishi Xpander 205%2F65R15 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $288–$360 · Mid-range $380–$450 · Premium $472–$560',
    },
    {
      size: '195/65R15',
      tabLabel: '195/65R15 · Standard base 原装',
      budget: {
        name: 'Kumho Ecowing ES31',
        desc: '经济省油 · 新加坡热带气候适用',
        price: 68,
        also: 'Also: Hankook Kinergy Eco 2 K435, Nankang Eco-2+',
        waText: 'Mitsubishi Xpander 195%2F65R15 budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP300',
        desc: '耐磨节油 · Xpander Standard 车主热门选择',
        price: 88,
        also: 'Also: Continental ComfortContact CC6, Dunlop Enasave EC300+',
        waText: 'Mitsubishi Xpander 195%2F65R15 mid-range tyre quote (Bridgestone Ecopia or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: '升级安全体验 · 家庭 MPV 最值得投资的选择',
        price: 108,
        also: 'Also: Goodyear EfficientGrip Performance 2',
        waText: 'Mitsubishi Xpander 195%2F65R15 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $272–$320 · Mid-range $352–$420 · Premium $432–$500',
    },
  ],

  radarSize: '205/65R15',
  radarSource: 'Hankook (12 reviews) · Bridgestone (18 reviews) · Michelin (14 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [64, 72, 76, 66, 74, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco 2 K435',
      stats: [{ k: 'Wet', v: '64', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '76', hi: false }, { k: 'Value', v: '82', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.1',
      scores: [78, 82, 84, 76, 82, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nEcopia EP300',
      stats: [{ k: 'Wet', v: '78', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [86, 88, 82, 80, 82, 72], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '88', hi: true }, { k: 'Wear', v: '82', hi: true }, { k: 'Value', v: '72', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'GL / GLS 车主（205/65R15，最常见）',
      color: 'blue',
      genKey: 'xfc-fl',
      body: 'Xpander GL/GLS 原配 <strong>205/65R15</strong> 是新加坡货源最充足的 15" 尺码之一。家庭 MPV 首选 Bridgestone Ecopia EP300（$95/条）——低滚阻设计在新加坡走走停停环境下省油最明显，整套约 $380。七人座家庭用车重视安全的，Michelin Primacy 4+（$118/条）Wet grip A 级认证，雨天制动距离明显更短，整套约 $472。',
    },
    {
      title: 'Standard base 车主（195/65R15）',
      color: 'blue',
      genKey: 'xfc',
      body: 'Standard 钢圈原配 <strong>195/65R15</strong>，是新加坡最常见的 15" 尺码之一，价格非常优惠。推荐 Bridgestone Ecopia EP300（$88/条），静音、省油、耐磨，适合 MPV 日常载家人。若想以最低成本换胎，Kumho Ecowing ES31（$68/条）也是可靠选择，整套约 $272。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Mitsubishi Xpander use in Singapore?',
      a: 'The Mitsubishi Xpander XFC (2017–2026) uses 205/65R15 for the GL and GLS trims (with alloy rims), and 195/65R15 for the base Standard trim (with steel rims). Both sizes are widely available in Singapore. Check the door jamb sticker or the tyre sidewall to confirm your exact size.',
    },
    {
      q: 'What is the bolt pattern of the Mitsubishi Xpander?',
      a: 'The Mitsubishi Xpander XFC uses a 4×114.3 bolt pattern (4 bolts, 114.3mm PCD) with a 67.1mm centre bore. Lug nut thread is M12×1.5, tightening torque is 88 Nm. Note that this is a 4-lug pattern — not compatible with 5-lug cars like Nissan X-Trail or any 6-lug vehicle.',
    },
    {
      q: 'How much does it cost to replace Mitsubishi Xpander tyres in Singapore?',
      a: 'For 205/65R15 (most common): budget from $72 per tyre installed; mid-range $95–$110; premium $118–$135. A full set of 4 mid-range tyres costs approximately $380–$450. For 195/65R15 (base trim): budget from $68; mid $88–$100; premium $108–$125.',
    },
    {
      q: 'Can I upgrade the Mitsubishi Xpander to larger rims or tyres?',
      a: 'Yes, but with limits. A common upgrade is fitting 215/60R15 instead of 205/65R15 — only 10mm wider but the overall diameter stays nearly identical. Going to 16" rims is possible with 205/60R16, which keeps the same overall diameter. Always verify that new rim and tyre combinations clear the wheel arch and do not contact suspension components.',
    },
    {
      q: 'Is the Mitsubishi Xpander popular in Singapore?',
      a: 'Yes. The Xpander is one of the fastest-growing MPVs in Singapore since 2018, particularly for families who need a 7-seater but want better fuel economy and a more car-like driving feel than a van. Its compact dimensions and 15" tyres keep running costs low — a full set of quality tyres costs around $380–$475.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco 2 K435 205/65R15',  brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '72',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 205/65R15',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '95',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 205/65R15',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '118', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecowing ES31 195/65R15',         brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '68',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 195/65R15',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 195/65R15',       brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
