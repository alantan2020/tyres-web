import type { CarData } from './types'

const data: CarData = {
  make: 'Toyota',
  model: 'Hiace',
  makeSlug: 'toyota',
  modelSlug: 'hiace',
  bgWord: 'HIACE',

  seo: {
    title: 'Toyota Hiace Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Toyota Hiace H200 uses 195R15C commercial tyres. ⚠️ 6×139.7 bolt pattern (6 lugs). Bridgestone Duravis from $128 installed. WhatsApp for a van tyre quote.',
    ogDescription: 'Toyota Hiace H200 uses 195R15C commercial tyres. 6-lug 6×139.7 bolt pattern. From $88 installed in Singapore. WhatsApp for a quote.',
    twitterDescription: 'Toyota Hiace uses 195R15C commercial tyres. From $88 installed in Singapore.',
    priceFrom: 88,
    oeSize: '195R15C',
  },

  defaultGen: 'h200',

  generations: [
    {
      key: 'h200',
      label: 'Gen 5 H200',
      years: '2005–2023',
      heroChips: [
        { label: 'All trims OE', value: '195R15C' },
        { label: 'Alt 16"',      value: '195/75R16' },
        { label: 'From installed', value: '$88', green: true },
      ],
      variants: [
        { name: '2.5 D-4D / 3.0 D-4D (all trims)', sizes: [
          { tag: 'OE',  size: '195R15C',   note: '标准配置，最常见' },
          { tag: 'Alt', size: '195/75R16',  note: '16" 升级，稍高间隙' },
          { tag: 'Alt', size: '205/70R16',  note: '宽一点，平稳感更好' },
        ]},
      ],
    },
    {
      key: 'h300',
      label: 'Gen 6 H300',
      years: '2020–2026',
      heroChips: [
        { label: '2.8 D OE', value: '215/70R16' },
        { label: 'Alt',       value: '235/65R16' },
        { label: 'From installed', value: '$115', green: true },
      ],
      variants: [
        { name: '2.8 D (standard)', sizes: [
          { tag: 'OE',  size: '215/70R16',  note: '标配' },
          { tag: 'Alt', size: '235/65R16',  note: '同外径，稍宽' },
          { tag: 'Alt', size: '235/60R17',  note: '17" 升级选项' },
        ]},
      ],
    },
  ],

  rimSpecs: [
    { label: '2005–2023 · H200 · OE 15"',        width: '6J',   diameter: '15"', offset: 'ET35', boltPattern: '6×139.7' },
    { label: '2005–2023 · H200 · Alt 16"',        width: '6J',   diameter: '16"', offset: 'ET35', boltPattern: '6×139.7' },
    { label: '2020–2026 · H300 · OE 16"',         width: '7J',   diameter: '16"', offset: 'ET55', boltPattern: '6×139.7' },
    { label: '2020–2026 · H300 · Alt 17"',        width: '7J',   diameter: '17"', offset: 'ET55', boltPattern: '6×139.7' },
  ],
  rimCommon: {
    centreBore: '106.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    warning: '⚠️ Hiace uses 6×139.7 bolt pattern with 6 lug nuts — NOT the 5-lug 5×114.3 used on Toyota passenger cars. Centre bore 106.1mm. Always verify before purchasing aftermarket wheels.',
  },

  priceTabs: [
    {
      size: '195R15C',
      tabLabel: '195R15C · H200 标准商用胎',
      budget: {
        name: 'Hankook Vantra LT RA18',
        desc: '8PR · 106/104R · 商用加强型 · 耐磨耐压',
        price: 88,
        also: 'Also: Blackhawk Hiscend-H HL03, Dunlop SP Van01',
        waText: 'Toyota Hiace 195R15C budget commercial tyre quote (Hankook RA18 or similar)',
      },
      mid: {
        name: 'Bridgestone Duravis R623',
        desc: '8PR · 106/104R · 新加坡 Hiace 最常用商用胎',
        price: 128,
        also: 'Also: Yokohama RY55, Continental VanContact AP',
        waText: 'Toyota Hiace 195R15C mid-range commercial tyre quote (Bridgestone R623 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Agilis 3',
        desc: '8PR · 106/104R · 最耐用 · 湿地表现最佳 · 欧盟 A 级滚阻',
        price: 168,
        also: 'Also: Pirelli Chrono Series 2, Goodyear Cargo G91',
        waText: 'Toyota Hiace 195R15C premium commercial tyre quote (Michelin Agilis 3)',
      },
      setEstimate: 'Budget $352–$400 · Mid-range $512–$580 · Premium $672–$780',
    },
    {
      size: '215/70R16',
      tabLabel: '215/70R16 · H300 标准胎',
      budget: {
        name: 'Triangle TR652',
        desc: '商用 LT · 耐磨 · 适合城市送货场景',
        price: 115,
        also: 'Also: Maxxis MA-P1, Kapsen RS01',
        waText: 'Toyota Hiace H300 215%2F70R16 budget tyre quote',
      },
      mid: {
        name: 'Bridgestone Duravis R630',
        desc: '静音 · 耐磨 · 适合 H300 商载定位',
        price: 155,
        also: 'Also: Yokohama RY55, Dunlop SP Van01',
        waText: 'Toyota Hiace H300 215%2F70R16 mid-range tyre quote (Bridgestone Duravis)',
        popular: true,
      },
      premium: {
        name: 'Michelin Agilis 3',
        desc: '最低滚阻 · 最佳湿地抓地 · 适合高频行驶',
        price: 195,
        also: 'Also: Continental VanContact AP, Pirelli Chrono Series 2',
        waText: 'Toyota Hiace H300 215%2F70R16 premium tyre quote (Michelin Agilis 3)',
      },
      setEstimate: 'Budget $460–$520 · Mid-range $620–$720 · Premium $780–$900',
    },
  ],

  radarSize: '195R15C',
  radarSource: 'Hankook (14 reviews) · Bridgestone (28 reviews) · Michelin (24 reviews). Source: TyreReviews.com. Commercial tyre ratings emphasise durability and load capacity.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.2',
      scores: [68, 72, 80, 65, 88, 78], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nVantra LT RA18',
      stats: [{ k: 'Wet', v: '68', hi: false }, { k: 'Dry', v: '72', hi: false }, { k: 'Wear', v: '80', hi: true }, { k: 'Value', v: '88', hi: true }],
    },
    {
      label: 'Mid ⭐ Popular', labelClass: 'tier tier--mid', score: '8.0',
      scores: [74, 78, 88, 72, 80, 76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nDuravis R623',
      stats: [{ k: 'Wet', v: '74', hi: false }, { k: 'Dry', v: '78', hi: true }, { k: 'Wear', v: '88', hi: true }, { k: 'Value', v: '80', hi: true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.5',
      scores: [82, 83, 90, 80, 72, 84], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nAgilis 3',
      stats: [{ k: 'Wet', v: '82', hi: true }, { k: 'Dry', v: '83', hi: true }, { k: 'Wear', v: '90', hi: true }, { k: 'Value', v: '72', hi: false }],
    },
  ],

  buyingGuide: [
    {
      title: 'H200 车队运营商 / 送货用途',
      color: 'red',
      genKey: 'h200',
      body: '195R15C 是新加坡 H200 Hiace 的标配商用胎。车队用途首推 <strong>Bridgestone Duravis R623</strong>（$128/条）——这是新加坡 Hiace 用量最大的商用胎，原厂级别耐用性，每公里成本最划算。预算紧的可选 <strong>Hankook Vantra LT RA18</strong>（$88/条），8PR 承重达标，日常城市送货完全够用。<br>⚠️ Hiace H200 轮辋是 <strong>6×139.7 孔距，6颗螺栓</strong>，与轿车 5 颗螺栓完全不同，购买钢圈必须确认。',
    },
    {
      title: 'H200 私家 / 小生意接送用途',
      color: 'blue',
      genKey: 'h200',
      body: '用作接送或私人用途的 Hiace，对舒适度和湿地表现要求比纯货运高。推荐直接上 <strong>Michelin Agilis 3</strong>（$168/条）——欧盟 A 级滚阻，湿地制动明显优于其他商用胎，高速行驶时噪音更低。一套四条 ~$672，比 R623 贵约 $160，但每公里成本差距很小，整体使用体验好很多。',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Toyota Hiace use in Singapore?',
      a: 'Gen 5 H200 (2005–2023, the most common Hiace in Singapore): OE 195R15C on all trims. Alternative sizes: 195/75R16 (16" upgrade), 205/70R16. Gen 6 H300 (2020–2026): OE 215/70R16 or 235/65R16. If you are unsure which generation you have, check the rim: H200 has 15" rims with 6 lug nuts; H300 has 16" rims.',
    },
    {
      q: 'What does "C" mean in 195R15C? Is it different from a normal tyre?',
      a: 'Yes — the "C" stands for Commercial. 195R15C tyres have reinforced sidewalls (typically 6-ply or 8-ply rated) and a higher load index (around 106/104 for dual load) compared to passenger car tyres. Do NOT fit a standard passenger tyre on a Hiace van — it will not meet the load rating required for cargo use and may fail under load.',
    },
    {
      q: 'How much does it cost to change Toyota Hiace tyres in Singapore?',
      a: 'For 195R15C (H200): budget from $88/tyre (Hankook Vantra LT RA18); mid-range $128 (Bridgestone Duravis R623, most popular); premium $168 (Michelin Agilis 3). Full set of 4: budget ~$352, mid ~$512, premium ~$672. Commercial tyres cost more than passenger car tyres of similar size because of their reinforced construction.',
    },
    {
      q: 'What is the bolt pattern of the Toyota Hiace?',
      a: 'Toyota Hiace uses a 6×139.7 bolt pattern — SIX lug nuts, not five. This is completely different from Toyota passenger cars (Vios, Camry, Altis) which use 5×114.3. Centre bore is 106.1mm, lug nut thread M12×1.5, tightening torque 108 Nm. Always confirm bolt pattern and centre bore before buying aftermarket wheels.',
    },
    {
      q: 'How long do Toyota Hiace tyres last in Singapore?',
      a: 'For fleet/cargo use: budget commercial tyres typically last 40,000–60,000 km (1–2 years with heavy use). Bridgestone Duravis R623: 60,000–80,000 km. Michelin Agilis 3: up to 100,000 km. Private/light-use Hiace tyres last longer — 3–5 years on budget, 5–7 years on Michelin Agilis. Inspect tread depth every 6 months; replace before 2mm remaining.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Vantra LT RA18 195R15C',       brand: { '@type': 'Brand', name: 'Hankook' },     offers: { '@type': 'Offer', price: '88',  priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Duravis R623 195R15C',     brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '128', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Agilis 3 195R15C',            brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '168', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Bridgestone Duravis R630 215/70R16',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '155', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Michelin Agilis 3 215/70R16',         brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '195', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
