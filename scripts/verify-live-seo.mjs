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

if (urls.length === 0) throw new Error('Sitemap contains no URLs')

const issues = []
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

      if (response.status !== 200) issues.push(`${url}: expected 200, got ${response.status}`)
      if (!title) issues.push(`${url}: missing title`)
      if (!description) issues.push(`${url}: missing description`)
      if (!canonical) issues.push(`${url}: missing canonical`)
      if (robots.toLowerCase().includes('noindex')) issues.push(`${url}: sitemap URL is noindex`)
      if (h1Count !== 1) issues.push(`${url}: expected one H1, got ${h1Count}`)
    } catch (error) {
      issues.push(`${url}: ${error.message}`)
    }
  }
}

await Promise.all(Array.from({ length: Math.min(concurrency, urls.length) }, worker))

if (issues.length > 0) {
  console.error(`Live SEO audit failed for ${issues.length} check(s):`)
  for (const issue of issues) console.error(`- ${issue}`)
  process.exit(1)
}

console.log(`Live SEO audit passed: ${urls.length} sitemap URL(s), title/description/canonical/robots/H1 checks clear.`)
