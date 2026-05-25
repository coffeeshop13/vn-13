import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export const dynamic = 'force-static'

const routes = [
  '',
  '/story',
  '/contact',
  '/sustainability',
  '/preorder',
  '/manufacturing',
  '/brands/manuelle-guibal',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
