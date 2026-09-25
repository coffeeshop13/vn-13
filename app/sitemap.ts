import type { MetadataRoute } from 'next'
import { journalArticles } from '@/lib/journal'
import { extendedSeoPages } from '@/lib/extended-seo-pages'
import { absoluteUrl } from '@/lib/seo'

export const dynamic = 'force-static'

type SitemapRoute = {
  path: string
  lastModified?: Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

const latestSeoUpdate = new Date('2026-09-22')
const homepageSeoUpdate = new Date('2026-09-25')
const vn13BrandSeoUpdate = new Date('2026-09-25')

const routes: SitemapRoute[] = [
  { path: '/', lastModified: homepageSeoUpdate, changeFrequency: 'weekly', priority: 1 },
  { path: '/zhenskaya-odezhda', changeFrequency: 'monthly', priority: 0.95 },
  { path: '/dizaynerskaya-zhenskaya-odezhda', changeFrequency: 'monthly', priority: 0.92 },
  { path: '/premium-zhenskaya-odezhda', changeFrequency: 'monthly', priority: 0.92 },
  { path: '/eksklyuzivnaya-zhenskaya-odezhda', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/kapsulnaya-zhenskaya-odezhda', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/vn-13-brand', lastModified: vn13BrandSeoUpdate, changeFrequency: 'weekly', priority: 0.95 },
  { path: '/lookbook', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/proizvoditel-zhenskoy-odezhdy', changeFrequency: 'monthly', priority: 0.88 },
  { path: '/poshiv-zhenskoy-odezhdy-dlya-brenda', changeFrequency: 'monthly', priority: 0.88 },
  { path: '/zhenskaya-odezhda-dlya-butikov', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/evropeyskie-brendy-zhenskoy-odezhdy', changeFrequency: 'monthly', priority: 0.88 },
  { path: '/optovaya-zhenskaya-odezhda', lastModified: new Date('2026-09-19'), changeFrequency: 'monthly', priority: 0.9 },
  { path: '/distributsiya-zhenskoy-odezhdy', lastModified: new Date('2026-09-19'), changeFrequency: 'monthly', priority: 0.88 },
  { path: '/journal', changeFrequency: 'weekly', priority: 0.82 },
  { path: '/sravnenie-premialnykh-rynkov', changeFrequency: 'monthly', priority: 0.76 },
  { path: '/kak-vn13-vybirayet-brendy', changeFrequency: 'monthly', priority: 0.76 },
  { path: '/limited-series-dlya-butikov', changeFrequency: 'monthly', priority: 0.76 },
  { path: '/story', changeFrequency: 'yearly', priority: 0.55 },
  { path: '/sustainability', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/preorder', changeFrequency: 'monthly', priority: 0.76 },
  { path: '/manufacturing', changeFrequency: 'monthly', priority: 0.76 },
  { path: '/brands', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/brands/manuelle-guibal', changeFrequency: 'monthly', priority: 0.78 },
  { path: '/brands/hannoh-wessel', lastModified: new Date('2026-09-25'), changeFrequency: 'monthly', priority: 0.78 },
  { path: '/brands/moyuru', lastModified: latestSeoUpdate, changeFrequency: 'monthly', priority: 0.78 },
  { path: '/brands/shoto', changeFrequency: 'monthly', priority: 0.72 },
  { path: '/brands/post-and-co', changeFrequency: 'monthly', priority: 0.72 },
  { path: '/brands/aequamente', lastModified: new Date('2026-09-25'), changeFrequency: 'monthly', priority: 0.78 },
  { path: '/brands/mj-watson', changeFrequency: 'monthly', priority: 0.78 },
  { path: '/brands/isabella-clementini', changeFrequency: 'monthly', priority: 0.78 },
  { path: '/brands/sula', changeFrequency: 'monthly', priority: 0.74 },
  { path: '/brands/soh', changeFrequency: 'monthly', priority: 0.74 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/partnerstvo', lastModified: new Date('2026-09-19'), changeFrequency: 'monthly', priority: 0.92 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const extendedRoutes: SitemapRoute[] = extendedSeoPages.map((page) => ({
    path: page.path,
    ...(page.lastModified ? { lastModified: new Date(page.lastModified) } : {}),
    changeFrequency: 'monthly',
    priority: page.category ? 0.82 : 0.74,
  }))

  const journalRoutes: SitemapRoute[] = journalArticles.map((article) => ({
    path: `/journal/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...routes, ...extendedRoutes, ...journalRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    ...(route.lastModified ? { lastModified: route.lastModified } : {}),
    ...(route.changeFrequency ? { changeFrequency: route.changeFrequency } : {}),
    ...(route.priority !== undefined ? { priority: route.priority } : {}),
  }))
}
