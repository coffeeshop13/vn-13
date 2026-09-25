export type SeoRelatedLink = {
  href: string
  label: string
}

export function canonicalInternalHref(href: string): string {
  if (!href.startsWith('/') || href === '/' || href.endsWith('/')) {
    return href
  }

  const hashIndex = href.indexOf('#')
  const queryIndex = href.indexOf('?')
  const suffixIndex = [hashIndex, queryIndex].filter((index) => index >= 0).sort((a, b) => a - b)[0]

  if (suffixIndex === undefined) {
    return `${href}/`
  }

  return `${href.slice(0, suffixIndex)}/${href.slice(suffixIndex)}`
}

const relatedLinksByPath: Record<string, SeoRelatedLink[]> = {
  '/zhenskaya-odezhda': [
    { href: '/dizaynerskaya-zhenskaya-odezhda', label: 'Дизайнерская женская одежда' },
    { href: '/рубашки-и-блузы', label: 'Женские дизайнерские рубашки и блузы' },
    { href: '/premium-zhenskaya-odezhda', label: 'Премиальная женская одежда' },
    { href: '/kapsulnaya-zhenskaya-odezhda', label: 'Капсульная женская одежда' },
    { href: '/vn-13-brand', label: 'Каталог бренда VN-13' },
  ],
  '/dizaynerskaya-zhenskaya-odezhda': [
    { href: '/zhenskaya-odezhda', label: 'Женская одежда VN-13' },
    { href: '/рубашки-и-блузы', label: 'Женские дизайнерские рубашки и блузы' },
    { href: '/vn-13-brand', label: 'Каталог дизайнерской одежды VN-13' },
    { href: '/brands/', label: 'Бренды женской одежды' },
    { href: '/платья', label: 'Дизайнерские платья' },
    { href: '/жакеты-и-жилеты', label: 'Дизайнерские жакеты и жилеты' },
  ],
  '/premium-zhenskaya-odezhda': [
    { href: '/dizaynerskaya-zhenskaya-odezhda', label: 'Дизайнерская женская одежда' },
    { href: '/рубашки-и-блузы', label: 'Дизайнерские рубашки и блузы' },
    { href: '/eksklyuzivnaya-zhenskaya-odezhda', label: 'Эксклюзивная женская одежда' },
    { href: '/quiet-luxury', label: 'Одежда в стиле тихой роскоши' },
    { href: '/natural-fabrics', label: 'Одежда из натуральных тканей' },
    { href: '/zhenskaya-odezhda-dlya-butikov', label: 'Премиальная одежда для бутиков' },
    { href: '/preorder', label: 'Предзаказ премиальных коллекций' },
  ],
  '/eksklyuzivnaya-zhenskaya-odezhda': [
    { href: '/premium-zhenskaya-odezhda', label: 'Премиальная женская одежда' },
    { href: '/limited-series-dlya-butikov', label: 'Лимитированные серии для бутиков' },
    { href: '/vn-13-brand', label: 'Коллекция собственного бренда VN-13' },
    { href: '/zhenskaya-odezhda-dlya-butikov', label: 'Женская одежда для бутиков' },
  ],
  '/kapsulnaya-zhenskaya-odezhda': [
    { href: '/zhenskaya-odezhda', label: 'Женская одежда VN-13' },
    { href: '/рубашки-и-блузы', label: 'Рубашки и блузы для капсульного гардероба' },
    { href: '/платья', label: 'Платья для капсульного гардероба' },
    { href: '/жакеты-и-жилеты', label: 'Жакеты и жилеты' },
    { href: '/брюки-и-джинсы', label: 'Брюки и джинсы' },
    { href: '/zhenskaya-odezhda-dlya-butikov', label: 'Капсульный ассортимент для бутиков' },
    { href: '/preorder', label: 'Предзаказ капсульной коллекции' },
  ],
  '/proizvoditel-zhenskoy-odezhdy': [
    { href: '/poshiv-zhenskoy-odezhdy-dlya-brenda', label: 'Пошив женской одежды для бренда' },
    { href: '/manufacturing', label: 'Маркировка и сведения о производстве одежды' },
    { href: '/distributsiya-zhenskoy-odezhdy', label: 'Дистрибуция женской одежды' },
    { href: '/kapsulnaya-zhenskaya-odezhda', label: 'Капсульная женская одежда' },
  ],
  '/poshiv-zhenskoy-odezhdy-dlya-brenda': [
    { href: '/proizvoditel-zhenskoy-odezhdy', label: 'Производитель женской одежды' },
    { href: '/manufacturing', label: 'Производственные партнёры VN13' },
    { href: '/preorder', label: 'Предзаказ коллекций' },
    { href: '/distributsiya-zhenskoy-odezhdy', label: 'Дистрибуция после запуска коллекции' },
  ],
  '/zhenskaya-odezhda-dlya-butikov': [
    { href: '/optovaya-zhenskaya-odezhda', label: 'Оптовая женская одежда' },
    { href: '/evropeyskie-brendy-zhenskoy-odezhdy', label: 'Европейские бренды женской одежды' },
    { href: '/preorder', label: 'Предзаказ коллекций для бутиков' },
    { href: '/brands/', label: 'Портфель брендов VN13' },
  ],
  '/optovaya-zhenskaya-odezhda': [
    { href: '/zhenskaya-odezhda-dlya-butikov', label: 'Женская одежда для бутиков' },
    { href: '/distributsiya-zhenskoy-odezhdy', label: 'Дистрибуция женской одежды' },
    { href: '/evropeyskie-brendy-zhenskoy-odezhdy', label: 'Европейские бренды для закупки' },
    { href: '/preorder', label: 'Предзаказ женской одежды' },
  ],
  '/distributsiya-zhenskoy-odezhdy': [
    { href: '/evropeyskie-brendy-zhenskoy-odezhdy', label: 'Европейские бренды женской одежды' },
    { href: '/zhenskaya-odezhda-dlya-butikov', label: 'Женская одежда для бутиков' },
    { href: '/optovaya-zhenskaya-odezhda', label: 'Оптовая женская одежда' },
    { href: '/brands/', label: 'Бренды в портфеле VN13' },
  ],
  '/evropeyskie-brendy-zhenskoy-odezhdy': [
    { href: '/brands/', label: 'Все бренды женской одежды VN13' },
    { href: '/distributsiya-zhenskoy-odezhdy', label: 'Дистрибуция европейских брендов' },
    { href: '/zhenskaya-odezhda-dlya-butikov', label: 'Ассортимент для бутиков' },
    { href: '/sravnenie-premialnykh-rynkov', label: 'Премиальные рынки женской одежды' },
  ],
}

export function getSeoRelatedLinks(path: string): SeoRelatedLink[] {
  return relatedLinksByPath[path] ?? []
}

export function mergeSeoRelatedLinks(
  path: string,
  explicitLinks: SeoRelatedLink[] = [],
): SeoRelatedLink[] {
  const uniqueLinks = new Map<string, SeoRelatedLink>()
  const canonicalPath = canonicalInternalHref(path)

  for (const link of [...explicitLinks, ...getSeoRelatedLinks(path)]) {
    const href = canonicalInternalHref(link.href)

    if (href !== canonicalPath && !uniqueLinks.has(href)) {
      uniqueLinks.set(href, { ...link, href })
    }
  }

  return [...uniqueLinks.values()].slice(0, 6)
}
