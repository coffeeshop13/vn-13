import type { MetadataRoute } from 'next'
import { journalArticles } from '@/lib/journal'
import { extendedSeoPages } from '@/lib/extended-seo-pages'
import { absoluteUrl } from '@/lib/seo'

export const dynamic = 'force-static'

type SitemapRoute = {
  path: string
  lastModified?: Date
}

const routes: SitemapRoute[] = [
  { path: '/' },
  { path: '/zhenskaya-odezhda' },
  { path: '/dizaynerskaya-zhenskaya-odezhda' },
  { path: '/premium-zhenskaya-odezhda' },
  { path: '/eksklyuzivnaya-zhenskaya-odezhda' },
  { path: '/kapsulnaya-zhenskaya-odezhda' },
  { path: '/vn-13-brand' },
  { path: '/lookbook' },
  { path: '/proizvoditel-zhenskoy-odezhdy' },
  { path: '/poshiv-zhenskoy-odezhdy-dlya-brenda' },
  { path: '/zhenskaya-odezhda-dlya-butikov' },
  { path: '/evropeyskie-brendy-zhenskoy-odezhdy' },
  { path: '/optovaya-zhenskaya-odezhda' },
  { path: '/distributsiya-zhenskoy-odezhdy' },
  { path: '/journal' },
  { path: '/sravnenie-premialnykh-rynkov' },
  { path: '/kak-vn13-vybirayet-brendy' },
  { path: '/limited-series-dlya-butikov' },
  { path: '/story' },
  { path: '/sustainability' },
  { path: '/preorder' },
  { path: '/manufacturing' },
  { path: '/brands' },
  { path: '/brands/manuelle-guibal' },
  { path: '/brands/hannoh-wessel' },
  { path: '/brands/moyuru' },
  { path: '/brands/shoto' },
  { path: '/brands/post-and-co' },
  { path: '/brands/aequamente' },
  { path: '/brands/mj-watson' },
  { path: '/brands/isabella-clementini' },
  { path: '/brands/sula' },
  { path: '/brands/soh' },
  { path: '/contact' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const extendedRoutes: SitemapRoute[] = extendedSeoPages.map((page) => ({
    path: page.path,
  }))

  const journalRoutes: SitemapRoute[] = journalArticles.map((article) => ({
    path: `/journal/${article.slug}`,
    lastModified: new Date(article.publishedAt),
  }))

  return [...routes, ...extendedRoutes, ...journalRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified ?? new Date('2026-06-25'),
  }))
}
