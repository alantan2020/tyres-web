import type { CarData } from '~/data/cars/types'

const BASE_URL = 'https://tyres.sgcarpass.com'

export function useCarModelSeo(car: CarData, makeSlug: string, modelSlug: string) {
  const canonicalUrl = `${BASE_URL}/tyres/${makeSlug}/${modelSlug}/`

  useSeoMeta({
    title:              car.seo.title,
    description:        car.seo.description,
    ogTitle:            car.seo.title,
    ogDescription:      car.seo.ogDescription,
    ogUrl:              canonicalUrl,
    ogType:             'website',
    twitterCard:        'summary_large_image',
    twitterTitle:       car.seo.title,
    twitterDescription: car.seo.twitterDescription,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: `${car.make} ${car.model} Tyres Singapore`, item: canonicalUrl },
          ],
        }),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: car.faq.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: `Best Tyres for ${car.make} ${car.model} Singapore`,
          itemListElement: car.schemaProducts,
        }),
      },
    ],
  })

  return { canonicalUrl }
}
