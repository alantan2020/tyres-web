import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'Freed',
  makeSlug: 'honda',
  modelSlug: 'freed',
  bgWord: 'FREED',

  seo: {
    title: 'Honda Freed Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda Freed uses 185/65R15 tyres. 4×100 bolt pattern. From $74 installed in Singapore. Compare Bridgestone vs Michelin vs Dunlop. WhatsApp for a quote.',
    ogDescription: 'Honda Freed uses 185/65R15. 4×100 bolt, CB 56.1mm. From $74 installed in Singapore. Tyres widely available despite Freed being discontinued in SG.',
    twitterDescription: 'Honda Freed uses 185/65R15. From $74 installed in Singapore.',
    priceFrom: 74,
    oeSize: '185/65R15',
  },

  defaultGen: 'gen1',

  generations: [
    {
      key: 'gen1',
      label: 'Gen 1',
      years: '2009–2016',
      heroChips: [
        { label: '1.5 i-VTEC OE', value: '185/65R15' },
        { label: 'Alt 16"',        value: '195/60R15' },
        { label: 'From installed',  value: '$74', green: true },
      ],
      variants: [
        { name: '1.5 i-VTEC (all trims)', sizes: [
          { tag: 'OE',  size: '185/65R15', note: '全系标配，最常见' },
          { tag: 'Alt', size: '195/60R15', note: '同直径，稍宽' },
          { tag: 'Alt', size: '195/55R16', note: '16" 升级' },
          { tag: 'Alt', size: '205/50R16', note: '16" 宽胎升级' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2009–2016 · Gen 1 · OE 15"',  width: '5.5J', diameter: '15"', offset: 'ET50', boltPattern: '4×100' },
    { label: '2009–2016 · Gen 1 · Alt 16"', width: '6.5J', diameter: '16"', offset: 'ET50', boltPattern: '4×100' },
  ],
  rimCommon: {
    centreBore: '56.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    notes: 'Honda Freed uses 4×100 four-lug bolt pattern with 56.1mm centre bore — same as Honda City and Honda Jazz. Wheels are interchangeable (confirm offset). Note: Freed was discontinued in Singapore around 2016, but 185/65R15 tyres remain widely available as the size is shared with many other models.',
  },

  priceTabs: [
    {
      size: '185/65R15',
      tabLabel: '185/65R15 · Gen 1 全系标配',
      budget: {
        name: 'Dunlop SP Touring R1',
        desc: '耐磨 · 省油 · 货源充足 · 日常首选',
        price: 74,
        also: 'Also: Blackhawk Street-H HH31, Nexen N\'Priz AH5',
        waText: 'Honda Freed 185%2F65R15 budget tyre quote (Dunlop SP Touring or similar)',
      },
      mid: {
        name: 'Bridgestone Turanza 6',
        desc: '静音 · 舒适 · A 级湿地 · MPV 家用最佳',
        price: 125,
        also: 'Also: Bridgestone EP300, Yokohama ES32',
        waText: 'Honda Freed 185%2F65R15 mid-range tyre quote (Bridgestone Turanza 6 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Energy XM2+',
        desc: '超低滚阻 · 省油 A+ · 适合 Freed 家用省油定位',
        price: 128,
        also: 'Also: Continental EcoContact 6, Bridgestone Ecopia EP300',
        waText: 'Honda Freed 185%2F65R15 premium tyre quote (Michelin XM2%2B)',
      },
      setEstimate: 'Budget $296–$350 · Mid-range $500–$580 · Premium $512–$600',
    },
  ],

  radarSize: '185/65R15',
  radarSource: 'Dunlop (14 reviews) · Bridgestone (24 reviews) · Michelin (26 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [66, 72, 78, 68, 86, 82], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Dunlop\nSP Touring R1',
      stats: [{ k: 'Wet', v: '66', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '78', hi: true }, { k: 'Value', v: '86', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.3',
      scores: [80, 82, 84, 82, 76, 80], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nTuranza 6',
      stats: [{ k: 'Wet', v: '80', hi: true }, { k: 'Dry', v: '82', hi: true }, { k: 'NVH', v: '82', hi: true }, { k: 'Wear', v: '84', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [81, 84, 85, 80, 90, 88], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nEnergy XM2+',
      stats: [{ k: 'Wet', v: '81', hi: true }, { k: 'Dry', v: '84', hi: true }, { k: 'Wear', v: '85', hi: true }, { k: 'Fuel', v: '90', hi: true }],
    },
  ],

  buyingGuide: [
    {
      title: 'Freed Gen 1 · 185/65R15 日常换胎',
      color: 'red',
      genKey: 'gen1',
      body: 'Honda Freed 虽然在新加坡约于 2016 年停售，但道路上仍有大量在跑，而 185/65R15 是新加坡货源最充裕的尺码之一，完全不用担心找不到胎。推荐 Bridgestone Turanza 6（$125/条）——静音舒适，A 级湿地，适合 MPV 家用定位，四条整套约 $500。<br>想省油选 Michelin Energy XM2+（$128/条），低滚阻 A+ 级，四条约 $512，两款价格相近但侧重不同。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda Freed use in Singapore?',
      a: 'Honda Freed Gen 1 (2009–2016): OE 185/65R15 for all trims. Alternative upgrades: 195/60R15 (same diameter, slightly wider), 195/55R16 or 205/50R16 with 16" rims. The Freed was discontinued in Singapore around 2016, but 185/65R15 tyres remain widely available.',
    },
    {
      q: 'What is the bolt pattern of the Honda Freed?',
      a: 'Honda Freed uses 4×100 four-lug bolt pattern with 56.1mm centre bore — same as Honda City and Honda Jazz. Wheels are interchangeable between Freed, City, and Jazz (verify offset matches: Freed ET50, City ET51–53, Jazz ET45–50).',
    },
    {
      q: 'How much does it cost to change Honda Freed tyres in Singapore?',
      a: 'For 185/65R15: budget from $74/tyre (Dunlop SP Touring R1); mid-range $125 (Bridgestone Turanza 6, popular); premium $128 (Michelin Energy XM2+). Full set of 4: budget ~$296, mid ~$500, premium ~$512. The Freed uses one of the most affordable tyre sizes in Singapore.',
    },
    {
      q: 'Is the Honda Freed still sold in Singapore?',
      a: 'No. Honda Freed was discontinued in Singapore around 2016. Honda replaced it with other models in the lineup. However, there are many Freed units still running on Singapore roads, and 185/65R15 tyres are readily available — the size is shared with many other models so there is no shortage of supply.',
    },
    {
      q: 'Can I use Honda Jazz wheels on my Honda Freed?',
      a: 'Technically yes — both use 4×100 bolt pattern and CB 56.1mm. However, confirm the offset: Freed uses ET50, Jazz typically ET45–50. Using an ET45 Jazz wheel on a Freed means the wheel sits slightly further inward — this is usually fine. Confirm tyre size also fits the wheel width.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Dunlop SP Touring R1 185/65R15',      brand: { '@type': 'Brand', name: 'Dunlop' },      offers: { '@type': 'Offer', price: '74',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Turanza 6 185/65R15',     brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '125', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Energy XM2+ 185/65R15',      brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
