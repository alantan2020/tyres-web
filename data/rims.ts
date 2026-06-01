export interface RimModel {
  brand: string
  model: string
  tier: 'budget' | 'mid' | 'premium'
  image: string
  finishes: string[]
  allSizes: string[]
  boltPattern: string
}

// Source: tys_web_rim_model + tys_web_rim_product (bolt_pattern = '5x114.3')
// Image: /public/rims/*.jpg — served as WebP via NuxtImg
export const allRims: RimModel[] = [
  {
    brand: 'Avant Garde',
    model: 'M310',
    tier: 'mid',
    image: '/rims/avant-garde-m310-grey.jpg',
    finishes: ['Matte Dupont Gray', 'Gunmetal', 'Silver', 'Matte Black'],
    allSizes: ['18"', '19"', '20"', '22"'],
    boltPattern: '5x114.3',
  },
  {
    brand: 'Avant Garde',
    model: 'M359',
    tier: 'mid',
    image: '/rims/avant-garde-m359-silver.jpg',
    finishes: ['Silver w/ Machine Face', 'Hyper Silver', 'Matte Black'],
    allSizes: ['18"', '19"', '20"'],
    boltPattern: '5x114.3',
  },
  {
    brand: 'TSW',
    model: 'Nurburgring',
    tier: 'mid',
    image: '/rims/tsw-nurburgring-silver.jpg',
    finishes: ['Gloss Silver w/ Mirror Cut Face', 'Hyper Silver w/ Machine Face', 'Gloss Black w/ Mirror Cut Face', 'Matte Bronze w/ Black Face'],
    allSizes: ['18"', '19"', '20"', '22"'],
    boltPattern: '5x114.3',
  },
]

// Sizes practical for Honda Civic (Gen 10 FC / Gen 11 FE)
// 18" = direct fit; 19" = popular upsize; 20"+ = confirm ET offset first
export const CIVIC_RIM_SIZES = ['18"', '19"']
