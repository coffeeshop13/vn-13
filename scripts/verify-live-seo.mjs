const sitemapUrl = 'https://vn-13.com/sitemap.xml'
const maxAttempts = 4
const concurrency = 8

async function fetchWithRetry(url) {
  let lastError

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await fetch(url, { redirect: 'manual' })
      if (response.ok || (response.status >= 300 && response.status < 400)) return response
      throw new Error(`HTTP ${response.status}`)
    } catch (error) {
      lastError = error
      if (attempt < maxAttempts) await new Promise((resolve) => setTimeout(resolve, attempt * 1000))
    }
  }

  throw lastError
}

const sitemapResponse = await fetchWithRetry(sitemapUrl)
const sitemap = await sitemapResponse.text()
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
const sitemapLastModified = new Map()
for (const match of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const loc = match[1].match(/<loc>(.*?)<\/loc>/)?.[1]
  const lastmod = match[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1]
  if (loc && lastmod) sitemapLastModified.set(loc, lastmod.slice(0, 10))
}

if (urls.length === 0) throw new Error('Sitemap contains no URLs')

const issues = []
const metadataRows = []
let cursor = 0

async function worker() {
  while (cursor < urls.length) {
    const url = urls[cursor]
    cursor += 1

    try {
      const response = await fetchWithRetry(url)
      const body = await response.text()
      const title = body.match(/<title>([^<]*)<\/title>/)?.[1]?.trim() ?? ''
      const description = body.match(/<meta name="description" content="([^"]*)/)?.[1]?.trim() ?? ''
      const canonical = body.match(/<link rel="canonical" href="([^"]*)/)?.[1]?.trim() ?? ''
      const robots = body.match(/<meta name="robots" content="([^"]*)/)?.[1]?.trim() ?? ''
      const h1Count = (body.match(/<h1[ >]/g) ?? []).length
      metadataRows.push({ url, title, description })
      const jsonLdBlocks = [...body.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
      const jsonLdTypes = jsonLdBlocks.flatMap((match) => {
        try {
          const payload = JSON.parse(match[1])
          return (payload['@graph'] ?? [payload]).map((item) => item['@type']).filter(Boolean)
        } catch {
          issues.push(`${url}: invalid JSON-LD syntax`)
          return []
        }
      })
      const jsonLdDates = jsonLdBlocks.flatMap((match) => {
        try {
          const payload = JSON.parse(match[1])
          return (payload['@graph'] ?? [payload])
            .map((item) => item.dateModified)
            .filter((date) => typeof date === 'string')
            .map((date) => date.slice(0, 10))
        } catch {
          return []
        }
      })

      if (response.status !== 200) issues.push(`${url}: expected 200, got ${response.status}`)
      if (!title) issues.push(`${url}: missing title`)
      if (!description) issues.push(`${url}: missing description`)
      if (!canonical) issues.push(`${url}: missing canonical`)
      if (canonical && canonical !== url) issues.push(`${url}: canonical mismatch, got ${canonical}`)
      if (robots.toLowerCase().includes('noindex')) issues.push(`${url}: sitemap URL is noindex`)
      if (h1Count !== 1) issues.push(`${url}: expected one H1, got ${h1Count}`)
      if (jsonLdBlocks.length === 0) issues.push(`${url}: missing server-rendered JSON-LD`)
      const sitemapDate = sitemapLastModified.get(url)
      if (sitemapDate && (!jsonLdDates.length || !jsonLdDates.includes(sitemapDate))) {
        issues.push(`${url}: sitemap lastmod ${sitemapDate} does not match JSON-LD dateModified`)
      }
      const pathname = new URL(url).pathname
      const isBrandDetailPage = /^\/brands\/[^/]+\/$/.test(pathname)
      if (isBrandDetailPage) {
        for (const type of ['Brand', 'WebPage', 'BreadcrumbList']) {
          if (!jsonLdTypes.includes(type)) issues.push(`${url}: missing server-rendered ${type} JSON-LD`)
        }
      }
    } catch (error) {
      issues.push(`${url}: ${error.message}`)
    }
  }
}

await Promise.all(Array.from({ length: Math.min(concurrency, urls.length) }, worker))

for (const field of ['title', 'description']) {
  const pagesByValue = new Map()
  for (const row of metadataRows) {
    const value = row[field]
    if (!pagesByValue.has(value)) pagesByValue.set(value, [])
    pagesByValue.get(value).push(row.url)
  }
  for (const [value, pages] of pagesByValue) {
    if (value && pages.length > 1) issues.push(`duplicate ${field} across ${pages.length} URLs: ${pages.join(', ')}`)
  }
}

if (issues.length > 0) {
  console.error(`Live SEO audit failed for ${issues.length} check(s):`)
  for (const issue of issues) console.error(`- ${issue}`)
  process.exit(1)
}

console.log(`Live SEO audit passed: ${urls.length} sitemap URL(s), title/description/canonical/robots/H1/JSON-LD checks clear.`)
