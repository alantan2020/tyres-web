import type { CarData } from './types'

const data: CarData = {
  make: 'Honda',
  model: 'Accord',
  makeSlug: 'honda',
  modelSlug: 'accord',
  bgWord: 'ACCORD',

  seo: {
    title: 'Honda Accord Tyre Size & Best Price Singapore | SGCarPass',
    description: 'Honda Accord tyre size guide for Singapore — Gen 9 (2013–2018), Gen 10 (2018–2019), Gen 11 (2023+). OEM sizes 225/50R17, 235/45R18, 235/40R19. From $120 installed. WhatsApp for a quote.',
    ogDescription: 'Honda Accord tyre sizes 225/50R17, 235/45R18 or 235/40R19. Covers Gen 9, Gen 10, Gen 11 in Singapore. From $120 installed.',
    twitterDescription: 'Honda Accord tyre sizes by generation. Gen 9 / Gen 10 / Gen 11. From $120 installed in Singapore.',
    priceFrom: 120,
    oeSize: '225/50R17',
  },

  defaultGen: 'gen11',

  generations: [
    {
      key: 'gen11',
      label: 'Gen 11 CY',
      years: '2023+',
      note: 'Gen 11 CY — sold in Singapore from 2023. 2.0 e:HEV only (no petrol variant). Base or Sport/EL trim determines tyre size.',
      heroChips: [
        { label: 'e:HEV Sport / EL', value: '235/40R19' },
        { label: 'e:HEV Base',       value: '225/50R17' },
        { label: 'Bolt Pattern',     value: '5×114.3' },
        { label: 'From installed',   value: '$120', green: true },
      ],
      variants: [
        { name: '2.0 e:HEV Sport / EL', sizes: [{ tag: 'OE', size: '235/40R19' }] },
        { name: '2.0 e:HEV Base',       sizes: [{ tag: 'OE', size: '225/50R17' }] },
      ],
    },
    {
      key: 'gen10',
      label: 'Gen 10 CV',
      years: '2018–2019',
      note: 'Gen 10 CV — registered 2018–2019 in Singapore. Limited units sold. COE expires 2028–2029. 1.5T Turbo and 2.0 HEV variants.',
      heroChips: [
        { label: '1.5T Base / HEV Base', value: '225/50R17' },
        { label: '1.5T Sport / EL',      value: '235/40R19' },
        { label: '2.0 HEV Sport',        value: '235/45R18' },
        { label: 'From installed',        value: '$120', green: true },
      ],
      variants: [
        { name: '1.5 Turbo Sport / EL',  sizes: [{ tag: 'OE', size: '235/40R19' }] },
        { name: '1.5 Turbo Base / EX',   sizes: [{ tag: 'OE', size: '225/50R17' }] },
        { name: '2.0 HEV Sport',         sizes: [{ tag: 'OE', size: '235/45R18' }] },
        { name: '2.0 HEV Base / EX',     sizes: [{ tag: 'OE', size: '225/50R17' }] },
      ],
    },
    {
      key: 'gen9',
      label: 'Gen 9 CR',
      years: '2013–2018',
      note: 'Gen 9 CR — registered 2013–2018 in Singapore. COE expires 2023–2028. V6 variants (3.0/3.5) and 2.4i. Offset ET55 — different from Gen 10/11.',
      heroChips: [
        { label: '2.4i Base',     value: '225/50R17' },
        { label: '3.0 / 3.5 V6', value: '235/45R18' },
        { label: 'Bolt Pattern',  value: '5×114.3' },
        { label: 'From installed', value: '$120', green: true },
      ],
      variants: [
        { name: '3.5i / 3.0i V6', sizes: [{ tag: 'OE', size: '235/45R18' }] },
        { name: '2.4i',            sizes: [{ tag: 'OE', size: '225/50R17' }] },
      ],
    },
  ],

  rimSpecs: [
    { label: 'Gen 11 CY · Sport/EL (19")', width: '8.5J', diameter: '19"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: 'Gen 11 CY · Base (17")',      width: '7.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: 'Gen 10 CV · Sport/EL (19")', width: '8.5J', diameter: '19"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: 'Gen 10 CV · HEV Sport (18")',width: '8J',   diameter: '18"', offset: 'ET50', boltPattern: '5×114.3' },
    { label: 'Gen 10 CV · Base/EX (17")',   width: '7.5J', diameter: '17"', offset: 'ET45', boltPattern: '5×114.3' },
    { label: 'Gen 9 CR · V6 / 3.0i (18")', width: '8J',   diameter: '18"', offset: 'ET55', boltPattern: '5×114.3' },
    { label: 'Gen 9 CR · 2.4i (17")',       width: '7.5J', diameter: '17"', offset: 'ET55', boltPattern: '5×114.3' },
  ],
  rimCommon: {
    centreBore: '64.1mm',
    stud: 'M12×1.5',
    torque: '108 Nm',
    warning: '⚠ Gen 9 uses ET55; Gen 10/11 uses ET45–ET50 — do not mix generations when buying spacers or aftermarket wheels',
  },

  priceTabs: [
    {
      size: '225/50R17',
      tabLabel: '225/50R17 · Base',
      budget: {
        name: 'Hankook Kinergy Eco 2 K435',
        desc: 'Long mileage · quiet highway · Wet grip: B',
        price: 120,
        also: 'Also: Kumho Ecsta HS51, Maxxis MAP5',
        waText: 'Honda Accord 225%2F50R17 budget tyre quote (Hankook or similar)',
      },
      mid: {
        name: 'Bridgestone Ecopia EP300',
        desc: 'Fuel efficient · excellent wet grip · Wet grip: A',
        price: 155,
        also: 'Also: Continental CC6, Dunlop SP Sport',
        waText: 'Honda Accord 225%2F50R17 mid-range tyre quote (Bridgestone EP300 or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: 'Best wet braking · 5-yr warranty · Wet grip: A',
        price: 190,
        also: 'Also: Pirelli Cinturato P7, Goodyear EfficientGrip',
        waText: 'Honda Accord 225%2F50R17 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $480–$560 · Mid-range $620–$740 · Premium $760–$940',
    },
    {
      size: '235/45R18',
      tabLabel: '235/45R18 · HEV / V6',
      budget: {
        name: 'Kumho Ecsta HS51',
        desc: 'Daily driver · decent wet performance',
        price: 145,
        also: 'Also: Maxxis Victra Sport 5, Nankang NS-25',
        waText: 'Honda Accord 235%2F45R18 budget tyre quote',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: 'Quiet, comfortable, A-rated wet grip',
        price: 180,
        also: 'Also: Continental SportContact 6, Dunlop SP Sport Maxx',
        waText: 'Honda Accord 235%2F45R18 mid-range tyre quote (Bridgestone Turanza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Primacy 4+',
        desc: 'Top wet braking + long-lasting · Wet grip: A',
        price: 225,
        also: 'Also: Pirelli P7 Cinturato, Goodyear EfficientGrip',
        waText: 'Honda Accord 235%2F45R18 premium tyre quote (Michelin Primacy 4%2B)',
      },
      setEstimate: 'Budget $580–$660 · Mid-range $720–$860 · Premium $900–$1,080',
    },
    {
      size: '235/40R19',
      tabLabel: '235/40R19 · Sport / EL',
      budget: {
        name: 'Kumho Ecsta PS71',
        desc: 'Performance daily · decent wet traction',
        price: 170,
        also: 'Also: Maxxis Victra Sport 5, Nankang NS-25',
        waText: 'Honda Accord 235%2F40R19 budget tyre quote',
      },
      mid: {
        name: 'Bridgestone Turanza T005',
        desc: 'Quiet ride · A-rated wet grip · long-lasting',
        price: 210,
        also: 'Also: Continental SportContact 6, Dunlop SP Sport Maxx',
        waText: 'Honda Accord 235%2F40R19 mid-range tyre quote (Bridgestone Turanza or similar)',
        popular: true,
      },
      premium: {
        name: 'Michelin Pilot Sport 4',
        desc: 'Top handling + wet braking · Wet grip: A',
        price: 265,
        also: 'Also: Pirelli P Zero, Goodyear Eagle F1',
        waText: 'Honda Accord 235%2F40R19 premium tyre quote (Michelin Pilot Sport 4)',
      },
      setEstimate: 'Budget $680–$760 · Mid-range $840–$1,000 · Premium $1,060–$1,260',
    },
  ],

  radarSize: '225/50R17',
  radarSource: 'Hankook (18 reviews) · Bridgestone (15 reviews) · Michelin (31 reviews). Source: TyreReviews.com. Fuel Efficiency estimated from EU tyre label.',
  radarBrands: [
    {
      label: 'Budget', labelClass: 'tier', score: '7.1',
      scores: [65,77,70,65,74,76], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)',
      name: 'Hankook\nKinergy Eco 2',
      stats: [{ k:'Wet',v:'65',hi:false },{ k:'Dry',v:'77',hi:true },{ k:'Wear',v:'70',hi:false },{ k:'Value',v:'76',hi:false }],
    },
    {
      label: 'Mid ⭐', labelClass: 'tier tier--mid', score: '8.0',
      scores: [76,83,85,77,82,76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)',
      name: 'Bridgestone\nEcopia EP300',
      stats: [{ k:'Wet',v:'76',hi:false },{ k:'Dry',v:'83',hi:true },{ k:'Wear',v:'85',hi:true },{ k:'Fuel',v:'82',hi:true }],
    },
    {
      label: 'Premium', labelClass: 'tier tier--premium', score: '8.3',
      scores: [84,87,83,85,83,77], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)',
      name: 'Michelin\nPrimacy 4+',
      stats: [{ k:'Wet',v:'84',hi:true },{ k:'Dry',v:'87',hi:true },{ k:'NVH',v:'85',hi:true },{ k:'Value',v:'77',hi:false }],
    },
  ],

  buyingGuide: [
    {
      title: 'Gen 11 CY (2023+) — 2.0 e:HEV',
      color: 'red',
      genKey: 'gen11',
      body: 'Singapore only gets the <strong>2.0 e:HEV hybrid</strong>. Base trim uses <strong>225/50R17</strong>; Sport/EL uses <strong>235/40R19</strong>. For the 19" sport size, prioritise an A-rated wet grip tyre — Bridgestone Turanza T005 or Michelin Pilot Sport 4 are the go-to choices for Singapore rain. The 17" base trim has excellent budget options starting from $120.',
    },
    {
      title: 'Gen 10 CV (2018–2019) — 1.5T / 2.0 HEV',
      color: 'blue',
      genKey: 'gen10',
      body: 'Three tyre sizes depending on trim: 1.5T base uses <strong>225/50R17</strong>, 1.5T Sport/EL uses <strong>235/40R19</strong>, 2.0 HEV Sport uses <strong>235/45R18</strong>. On the common 225/50R17, the Bridgestone Ecopia EP300 at $155 is our top pick — A-rated wet grip and fuel-efficient. HEV owners should choose low rolling resistance tyres to preserve hybrid efficiency.',
    },
    {
      title: 'Gen 9 CR (2013–2018) — 2.4i / 3.0 / 3.5 V6',
      color: 'red',
      genKey: 'gen9',
      body: 'V6 variants (3.0i, 3.5i) use <strong>235/45R18</strong>; the 2.4i uses <strong>225/50R17</strong>. Note that Gen 9 uses <strong>offset ET55</strong> — different from Gen 10/11 (ET45–ET50). Do not mix wheels between generations without verifying fitment. With the car now 8–13 years old, replace tyres based on age (5-year rule). The Hankook Kinergy Eco 2 offers good value — no need to spend premium on a high-mileage car.',
    },
  ],

  faq: [
    {
      q: 'What tyre size does the Honda Accord use in Singapore?',
      a: 'Depends on generation and trim: Gen 11 CY (2023+) e:HEV Sport/EL — 235/40R19. Gen 11 CY e:HEV Base — 225/50R17. Gen 10 CV (2018–2019) 1.5T Sport/EL — 235/40R19. Gen 10 CV 1.5T Base/EX — 225/50R17. Gen 10 CV 2.0 HEV Sport — 235/45R18. Gen 9 CR (2013–2018) 3.5i/3.0i — 235/45R18. Gen 9 CR 2.4i — 225/50R17. Use the generation selector above to filter specs for your car.',
    },
    {
      q: 'Was the Honda Accord sold in Singapore in 2020, 2021, or 2022?',
      a: 'No. Honda Singapore did not sell the Accord during 2020–2022 — this was a gap between Gen 10 CV sales (2018–2019) and the Gen 11 CY launch (2023). If you have a car registered in those years, it is likely a grey import or a pre-owned Gen 10 that was re-registered.',
    },
    {
      q: 'What is the bolt pattern of the Honda Accord?',
      a: 'All three generations — Gen 9 CR, Gen 10 CV, and Gen 11 CY — use the 5×114.3 bolt pattern. Centre bore is 64.1mm, lug nut thread is M12×1.5. Important: Gen 9 uses ET55 offset, while Gen 10 and Gen 11 use ET45 (17") or ET50 (18"/19"). Wheels are not interchangeable between Gen 9 and Gen 10/11 without checking clearance.',
    },
    {
      q: 'How much does it cost to replace tyres on a Honda Accord in Singapore?',
      a: '225/50R17: budget $120–$140; mid-range $155–$185; premium $190–$235 per tyre installed. 235/45R18: budget $145; mid-range $180–$215; premium $225–$270. 235/40R19: budget $170; mid-range $210–$250; premium $265–$320.',
    },
    {
      q: 'Can I use 225/50R17 tyres on a Honda Accord that came with 235/40R19?',
      a: 'Not directly — you need to swap to 17-inch wheels as well. The Sport/EL trims use 19-inch rims (8.5J ET50); downsizing requires 17-inch rims (7.5J ET45). The bolt pattern (5×114.3) is the same so the swap is physically possible and gives a softer ride, but keep the diameter change within 3% for Singapore road legality. Consult your workshop before proceeding.',
    },
  ],

  schemaProducts: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Hankook Kinergy Eco 2 K435 225/50R17', brand: { '@type': 'Brand', name: 'Hankook' },    offers: { '@type': 'Offer', price: '120', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'Bridgestone Ecopia EP300 225/50R17',   brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '155', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Michelin Primacy 4+ 225/50R17',        brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '190', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Product', name: 'Kumho Ecsta HS51 235/45R18',           brand: { '@type': 'Brand', name: 'Kumho' },       offers: { '@type': 'Offer', price: '145', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Product', name: 'Bridgestone Turanza T005 235/40R19',  brand: { '@type': 'Brand', name: 'Bridgestone' }, offers: { '@type': 'Offer', price: '210', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Product', name: 'Michelin Pilot Sport 4 235/40R19',    brand: { '@type': 'Brand', name: 'Michelin' },    offers: { '@type': 'Offer', price: '265', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } } } },
  ],
}

export default data
