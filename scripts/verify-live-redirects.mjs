const baseUrl = 'https://vn-13.com'

const legacyRedirects = {
  '/about/': '/story/',
  '/blog/': '/journal/',
  '/de/': '/',
  '/en/': '/',
  '/hannoh-wessel/': '/brands/hannoh-wessel/',
  '/post-co/': '/brands/post-and-co/',
  '/priveh/': '/contact/',
  '/sula/': '/brands/sula/',
  '/vn-13-fashion-agency/': '/story/',
  '/2023/12/17/главные-тренды-мировой-индустрии-мод/': '/journal/',
}

const canonicalPaths = ['/optovaya-zhenskaya-odezhda', '/vn-13-brand', '/journal', '/contact']
const issues = []

async function checkRedirect(path, expectedPath, label) {
  const response = await fetch(`${baseUrl}${path}`, { redirect: 'manual' })
  const location = response.headers.get('location')

  if (response.status !== 301 || !location) {
    issues.push(`${label}: expected 301, got ${response.status}`)
    return
  }

  const target = new URL(location, baseUrl)
  if (target.origin !== baseUrl || target.pathname !== expectedPath || target.search || target.hash) {
    issues.push(`${label}: unexpected Location ${location}`)
  }
}

for (const [path, destination] of Object.entries(legacyRedirects)) {
  await checkRedirect(path, destination, `legacy ${path}`)
}

for (const path of canonicalPaths) {
  await checkRedirect(path, path === '/' ? '/' : `${path}/`, `slashless ${path}`)
}

if (issues.length > 0) {
  console.error(`Live redirect audit failed for ${issues.length} check(s):`)
  for (const issue of issues) console.error(`- ${issue}`)
  process.exit(1)
}

console.log(`Live redirect audit passed: ${Object.keys(legacyRedirects).length} legacy and ${canonicalPaths.length} canonical redirect(s).`)
