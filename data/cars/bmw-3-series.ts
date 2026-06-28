import type { CarData } from './types'

const data: CarData = {
  make: 'BMW',
  model: '3 Series',
  makeSlug: 'bmw',
  modelSlug: '3-series',
  bgWord: 'BMW3',

  seo: {
    title: 'BMW 3 Series Tyre Size & Best Price Singapore | SGCarPass',
    description: 'BMW 3 Series G20 (2019+) uses 225/45R18 (square) or staggered 225/45R18 + 255/40R18 (M Sport). F30 (2012–2019) uses 225/45R18. 5×112 bolt pattern. From $108 installed in Singapore.',
    ogDescription: 'BMW 3 Series tyre sizes: G20 225/45R18 (standard) or staggered M Sport. F30 225/45R18. 5×112, 66.6mm CB. Includes run-flat vs regular guidance. From $108 installed.',
    twitterDescription: 'BMW 3 Series G20 uses 225/45R18 (square) or staggered M Sport. 5×112 bolt. From $108 installed in Singapore.',
    priceFrom: 108,
    oeSize: '225/45R18',
  },

  defaultGen: 'g20',

  generations: [
    {
      key: 'g20',
      label: 'G20 5th Gen (2019–2026)',
      years: '2019–2026',
      note: 'G20 comes with run-flat tyres (RFT) as OE. Switching to non-RFT requires carrying a spare or tyre inflation kit. M Sport trims may have staggered fitment — confirm front vs rear size before ordering.',
      heroChips: [
        { label: '320i / 330i Sport Line', value: '225/45R18 (square)' },
        { label: '330i M Sport rear',      value: '255/40R18 (staggered)' },
        { label: 'From installed',         value: '$108', green: true },
      ],
      variants: [
        { name: '320i / 330i Sport Line / Luxury Line (non-staggered)', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '宽 10mm，更低扁平比，运动感升级' },
        ]},
        { name: '330i M Sport front (staggered)', sizes: [
          { tag: 'OE',  size: '225/45R18' },
        ]},
        { name: '330i M Sport rear (staggered)', sizes: [
          { tag: 'OE',  size: '255/40R18' },
          { tag: 'Alt', size: '265/35R18', note: '更宽运动感，需确认间隙' },
        ]},
        { name: 'M340i front (staggered 19")', sizes: [
          { tag: 'OE',  size: '225/40R19' },
        ]},
        { name: 'M340i rear (staggered 19")', sizes: [
          { tag: 'OE',  size: '255/35R19' },
        ]},
      ],
    },
    {
      key: 'f30',
      label: 'F30 4th Gen (2012–2019)',
      years: '2012–2019',
      note: 'F30 may or may not have run-flat OE depending on trim and original market. Check tyre sidewall for "RSC", "ROF", or "RFT" marking.',
      heroChips: [
        { label: '316i / 318i / 320i / 328i', value: '225/45R18' },
        { label: 'M Sport rear (staggered)',   value: '255/40R18' },
        { label: 'From installed',             value: '$108', green: true },
      ],
      variants: [
        { name: '316i / 318i / 320i standard (non-staggered)', sizes: [
          { tag: 'OE',  size: '225/45R18' },
          { tag: 'Alt', size: '235/40R18', note: '运动感升级' },
        ]},
        { name: '328i / 330i M Sport front', sizes: [
          { tag: 'OE',  size: '225/45R18' },
        ]},
        { name: '328i / 330i M Sport rear', sizes: [
          { tag: 'OE',  size: '255/40R18' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2019–2026 · G20 · M340i · front 19"',        width: '8.0J',  diameter: '19"', offset: 'ET27', boltPattern: '5×112' },
    { label: '2019–2026 · G20 · M340i · rear 19"',         width: '9.0J',  diameter: '19"', offset: 'ET27', boltPattern: '5×112' },
    { label: '2019–2026 · G20 · M Sport · front/sq 18"',   width: '8.0J',  diameter: '18"', offset: 'ET30', boltPattern: '5×112' },
    { label: '2019–2026 · G20 · M Sport · rear 18"',       width: '9.0J',  diameter: '18"', offset: 'ET41', boltPattern: '5×112' },
    { label: '2012–2019 · F30 · all trims · 18"',           width: '7.5J',  diameter: '18"', offset: 'ET37', boltPattern: '5×112' },
  ],
  rimCommon: {
    centreBore: '66.6mm',
    stud: 'M14×1.25 bolt',
    torque: '120 Nm',
    warning: 'BMW uses BOLTS (not nuts) with M14×1.25 thread. DO NOT use M12 Japanese-spec lug nuts — thread pitch and diameter are different. 5×112 bolt pattern is shared with Mercedes-Benz, Audi A6/A8, and VW (some models), but centre bore and offset differ — always verify before fitting cross-brand rims. ⚠️ Staggered fitment (M Sport/M340i): front and rear tyres are DIFFERENT sizes. Cannot rotate tyres between axles.',
  },

  priceTabs: [
    {
      size: '225/45R18',
      tabLabel: '225/45R18 · 320i / 330i 主力尺码',
      budget: {
        name: 'Hankook Ventus S1 Evo3',
        desc: '18" 性能舒适胎 · 3系 入门价格最佳选择',
        price: 108,
        also: 'Also: Kumho Ecsta PS91, Nankang NS-25 UHP',
        waText: 'BMW 3 Series 225%2F45R18 budget tyre quote (Hankook Ventus or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '干湿地抓地极佳 · 静音舒适 · 3系 M Sport 最受好评',
        price: 188,
        also: 'Also: Bridgestone Potenza Sport, Dunlop Sport Maxx RT2',
        waText: 'BMW 3 Series 225%2F45R18 mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '3系最匹配 · 干地极限操控 + 湿地 A 级 · BMW OE 认证',
        price: 258,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'BMW 3 Series 225%2F45R18 premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: 'Budget $432–$520 · Mid-range $752–$880 · Premium $1,032–$1,200',
    },
    {
      size: '255/40R18',
      tabLabel: '255/40R18 · M Sport 后轴 (staggered)',
      budget: {
        name: 'Kumho Ecsta PS91',
        desc: '宽胎 · M Sport 后轴预算首选 · 干地抓地强',
        price: 138,
        also: 'Also: Nankang Sportnex NS-25, Maxxis Victra Sport 5',
        waText: 'BMW 3 Series M Sport 255%2F40R18 rear budget tyre quote (Kumho or similar)',
      },
      mid: {
        name: 'Continental SportContact 6',
        desc: '宽后胎首选 · 干湿地均衡 · M Sport 后轴最推荐',
        price: 228,
        also: 'Also: Bridgestone Potenza Sport, Pirelli Cinturato P7',
        waText: 'BMW 3 Series M Sport 255%2F40R18 rear mid-range tyre quote (Continental SportContact 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4S',
        desc: '宽胎顶级选择 · 干地 + 湿地全面领先 · M Sport 后轴原配级别',
        price: 308,
        also: 'Also: Pirelli P-Zero PZ4, Goodyear Eagle F1 Asymmetric 6',
        waText: 'BMW 3 Series M Sport 255%2F40R18 rear premium tyre quote (Michelin Pilot Sport 4S)',
      },
      setEstimate: '仅后 2 条：Budget $276–$340 · Mid-range $456–$530 · Premium $616–$720',
    },
  ],

  radarSize: '225/45R18',
  radarSource: 'Hankook (14 reviews) · Continental (22 reviews) · Michelin (19 reviews). Source: TyreReviews.com.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.3',
      scores: [70, 78, 74, 70, 74, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVentus S1 Evo3',
      stats: [{ k: 'Wet', v: '70', hi: false }, { k: 'Dry', v: '78', hi: false }, { k: 'Wear', v: '74', hi: false }, { k: 'Value', v: '78', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.6',
      scores: [86, 92, 84, 82, 86, 72], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Continental\nSportContact 6',
      stats: [{ k: 'Wet', v: '86', hi: true }, { k: 'Dry', v: '92', hi: true }, { k: 'NVH', v: '86', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.9',
      scores: [88, 94, 84, 82, 88, 68], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPilot Sport 4S',
      stats: [{ k: 'Wet', v: '88', hi: true }, { k: 'Dry', v: '94', hi: true }, { k: 'NVH', v: '88', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'G20 320i / 330i 标准版（225/45R18，非 staggered）',
      color: 'blue',
      genKey: 'g20',
      body: 'G20 3系标准版和 Sport Line 原配 <strong>225/45R18</strong>，是 18" 跑车胎中货源最丰富的尺码之一。Continental SportContact 6（$188/条）是新加坡 3系车主好评最高的选择——干地抓地力接近运动胎，湿地制动 A 级，新加坡高速公路和弯道驾驶感提升明显，整套约 $752。追求极限操控的选 Michelin Pilot Sport 4S（$258/条），这是 BMW 最多 OE 原配使用的高性能胎之一。<strong>Run-flat 换胎须知：</strong>若从 RFT 换成普通胎，建议同时准备补胎套装（inflation kit），因为 G20 没有备胎。',
    },
    {
      title: 'M Sport / M340i 车主（staggered 前窄后宽）',
      color: 'red',
      genKey: 'g20',
      body: 'M Sport 和 M340i 配 staggered 尺码，前轮 225/45R18、后轮 255/40R18（或 19" 前 225/40R19 后 255/35R19）。<strong>前后宽度不同，严禁前后互换</strong>。建议前后同时更换且保持同品牌型号，否则操控特性会因前后抓地力不匹配而改变，尤其在雨天高速变线时更明显。Continental SportContact 6 或 Michelin Pilot Sport 4S 是最受 M Sport 车主认可的选择。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the BMW 3 Series use in Singapore?',
      a: 'BMW 3 Series G20 5th gen (2019–2026): 320i and 330i Sport/Luxury Line use 225/45R18 (square fitment all round). 330i M Sport may have staggered 225/45R18 front + 255/40R18 rear. M340i uses 225/40R19 front + 255/35R19 rear. F30 4th gen (2012–2019): most trims use 225/45R18. Always confirm your exact trim\'s front and rear sizes before ordering.',
    },
    {
      q: 'Does the BMW 3 Series use run-flat tyres?',
      a: 'Yes, the G20 3 Series comes with Run-Flat Tyres (RFT, marked "RSC" or "ROF" on the sidewall) as standard from factory. This allows driving up to 80km/h for up to 80km after a puncture. If you switch to regular (non-RFT) tyres, you must carry a spare or tyre inflation kit, as the G20 has no spare wheel bay.',
    },
    {
      q: 'What is the bolt pattern of the BMW 3 Series?',
      a: 'All BMW 3 Series (G20, F30) use 5×112 bolt pattern with 66.6mm centre bore. BMW uses lug BOLTS (not nuts) with M14×1.25 thread, torque 120 Nm. The 5×112 pattern is shared with Mercedes-Benz and some VW/Audi models, but centre bore and offset differ — always verify compatibility before using cross-brand rims.',
    },
    {
      q: 'How much does it cost to replace BMW 3 Series tyres in Singapore?',
      a: 'For 225/45R18 (most common): budget from $108 per tyre installed; mid-range $188–$210; premium $258–$290. Full set of 4: approximately $432–$1,200. For staggered M Sport (front 225/45R18 + rear 255/40R18): budget for 4 typically $700–$1,400. Premium tyres from BMW-OE brands (Michelin, Continental, Pirelli) are highly recommended for the 3 Series driving character.',
    },
    {
      q: 'Can I use Mercedes-Benz rims on a BMW 3 Series?',
      a: 'Both use 5×112 bolt pattern, but the centre bore differs: BMW is 66.6mm, Mercedes is also approximately 66.6mm — physically close enough that hub-centric rings can bridge minor differences. However, rim offset (ET) values differ significantly between manufacturers. Also, BMW uses lug bolts while many aftermarket rims use lug nuts. This swap is generally not recommended without professional consultation.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Ventus S1 Evo3 225/45R18',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '108', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Continental SportContact 6 225/45R18',   brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '188', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 225/45R18',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '258', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta PS91 255/40R18',             brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '138', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Continental SportContact 6 255/40R18',   brand: { '@type': 'Brand', name: 'Continental' }, offers: { '@type': 'Offer', price: '228', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4S 255/40R18',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '308', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
