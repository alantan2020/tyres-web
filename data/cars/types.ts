export interface SizeEntry {
  tag: 'OE' | 'Alt'
  size: string
  note?: string
}

export interface Variant {
  name: string
  sizes: SizeEntry[]
}

export interface HeroChip {
  label: string
  value: string
  green?: boolean
}

export interface Generation {
  key: string
  label: string
  years: string
  note?: string
  heroChips: HeroChip[]
  variants: Variant[]
}

export interface RimSpec {
  label: string
  width: string
  diameter: string
  offset: string
  boltPattern: string
}

export interface TyreTier {
  name: string
  desc: string
  price: number
  also: string
  waText: string
}

export interface PriceTier {
  size: string
  tabLabel: string
  budget: TyreTier
  mid: TyreTier & { popular?: true }
  premium: TyreTier
  setEstimate: string
}

export interface RadarBrand {
  label: string
  labelClass: string
  score: string
  scores: number[]
  stroke: string
  fill: string
  name: string
  stats: { k: string; v: string; hi: boolean }[]
}

export interface BuyingGuideItem {
  title: string
  color: 'red' | 'blue'
  body: string
  genKey?: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface CarData {
  make: string
  model: string
  makeSlug: string
  modelSlug: string
  bgWord: string

  seo: {
    title: string
    description: string
    ogDescription: string
    twitterDescription: string
    priceFrom: number
    oeSize: string
  }

  generations: Generation[]
  defaultGen: string

  rimSpecs: RimSpec[]
  rimCommon: {
    centreBore: string
    stud: string
    torque: string
    notes?: string
    warning?: string
  }

  priceTabs: PriceTier[]

  radarSize: string
  radarSource: string
  radarBrands: RadarBrand[]

  buyingGuide: BuyingGuideItem[]

  faq: FaqItem[]

  schemaProducts: object[]
}
