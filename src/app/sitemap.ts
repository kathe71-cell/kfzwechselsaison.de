import type { MetadataRoute } from 'next'
import { articles } from '@/content/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kfzwechselsaison.de'

  const pillarPages = [
    '/kfz-versicherung-wechseln/',
    '/kfz-versicherung-vergleichen/',
    '/kfz-versicherung-kuendigen/',
    '/kuendigungsfrist-kfz-versicherung/',
    '/30-november-kfz-versicherung/',
    '/sonderkuendigungsrecht-kfz-versicherung/',
    '/kfz-versicherung-2027/',
    '/kfz-haftpflicht/',
    '/teilkasko/',
    '/vollkasko/',
    '/e-auto-versicherung/',
    '/zweitwagenversicherung/',
  ]

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...pillarPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    {
      url: `${baseUrl}/ratgeber/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ueber-uns/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/ratgeber/${article.slug}/`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...articlePages]
}
