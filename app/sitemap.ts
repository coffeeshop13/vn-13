import type { MetadataRoute } from 'next'
import { journalArticles } from '@/lib/journal'
import { extendedSeoPages } from '@/lib/extended-seo-pages'
import { SITE_URL, absoluteUrl } from '@/lib/seo'

export const dynamic = 'force-static'

type SitemapRoute = {
  path: string
  priority: number
  lastModified?: Date
}

const routes: SitemapRoute[] = [
  { path: '/', priority: 1 },
  { path: '/dizaynerskaya-zhenskaya-odezhda', priority: 0.95 },
  { path: '/premium-zhenskaya-odezhda', priority: 0.95 },
  { path: '/eksklyuzivnaya-zhenskaya-odezhda', priority: 0.95 },
  { path: '/kapsulnaya-zhenskaya-odezhda', priority: 0.92 },
  { path: '/vn-13-brand', priority: 0.95 },
  { path: '/lookbook', priority: 0.85 },
  { path: '/proizvoditel-zhenskoy-odezhdy', priority: 0.9 },
  { path: '/poshiv-zhenskoy-odezhdy-dlya-brenda', priority: 0.9 },
  { path: '/zhenskaya-odezhda-dlya-butikov', priority: 0.9 },
  { path: '/evropeyskie-brendy-zhenskoy-odezhdy', priority: 0.9 },
  { path: '/optovaya-zhenskaya-odezhda', priority: 0.9 },
  { path: '/distributsiya-zhenskoy-odezhdy', priority: 0.9 },
  { path: '/journal', priority: 0.8 },
  { path: '/sravnenie-premialnykh-rynkov', priority: 0.82 },
  { path: '/kak-vn13-vybirayet-brendy', priority: 0.82 },
  { path: '/limited-series-dlya-butikov', priority: 0.82 },
  { path: '/story', priority: 0.8 },
  { path: '/sustainability', priority: 0.75 },
  { path: '/preorder', priority: 0.85 },
  { path: '/manufacturing', priority: 0.8 },
  { path: '/brands/manuelle-guibal', priority: 0.7 },
  { path: '/brands/hannoh-wessel', priority: 0.7 },
  { path: '/brands/moyuru', priority: 0.7 },
  { path: '/brands/shoto', priority: 0.7 },
  { path: '/brands/post-and-co', priority: 0.7 },
  { path: '/brands/aequamente', priority: 0.7 },
  { path: '/brands/mj-watson', priority: 0.7 },
  { path: '/brands/sula', priority: 0.7 },
  { path: '/brands/soh', priority: 0.7 },
  { path: '/contact', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const extendedRoutes: SitemapRoute[] = extendedSeoPages.map((page) => ({
    path: page.path,
    priority: page.category ? 0.86 : 0.88,
  }))

  const journalRoutes: SitemapRoute[] = journalArticles.map((article) => ({
    path: `/journal/${article.slug}`,
    priority: 0.75,
    lastModified: new Date(article.publishedAt),
  }))

  return [...routes, ...extendedRoutes, ...journalRoutes].map((route) => ({
    url: route.path === '/' ? SITE_URL : absoluteUrl(route.path),
    lastModified: route.lastModified ?? new Date('2026-06-20'),
    changeFrequency: route.priority >= 0.9 ? 'weekly' : 'monthly',
    priority: route.priority,
  }))
}
