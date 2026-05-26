import type { MetadataRoute } from 'next'
import { journalArticles } from '@/lib/journal'
import { SITE_URL, absoluteUrl } from '@/lib/seo'

export const dynamic = 'force-static'

const routes = [
  { path: '/', priority: 1 },
  { path: '/zhenskaya-odezhda', priority: 0.95 },
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
  { path: '/story', priority: 0.8 },
  { path: '/sustainability', priority: 0.75 },
  { path: '/preorder', priority: 0.85 },
  { path: '/manufacturing', priority: 0.8 },
  { path: '/brands/manuelle-guibal', priority: 0.7 },
  { path: '/contact', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-05-25')

  const journalRoutes = journalArticles.map((article) => ({
    path: `/journal/${article.slug}`,
    priority: 0.75,
  }))

  return [...routes, ...journalRoutes].map((route) => ({
    url: route.path === '/' ? SITE_URL : absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.priority >= 0.9 ? 'weekly' : 'monthly',
    priority: route.priority,
  }))
}
