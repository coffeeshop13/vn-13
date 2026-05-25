import type { MetadataRoute } from 'next'
import { SITE_URL, absoluteUrl } from '@/lib/seo'

export const dynamic = 'force-static'

const routes = [
  { path: '/', priority: 1 },
  { path: '/story', priority: 0.8 },
  { path: '/sustainability', priority: 0.75 },
  { path: '/preorder', priority: 0.85 },
  { path: '/manufacturing', priority: 0.8 },
  { path: '/brands/manuelle-guibal', priority: 0.7 },
  { path: '/contact', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-05-25')

  return routes.map((route) => ({
    url: route.path === '/' ? SITE_URL : absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.path === '/' ? 'weekly' : 'monthly',
    priority: route.priority,
  }))
}
