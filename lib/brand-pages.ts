import { brandPortfolio, type BrandPortfolioItem } from '@/lib/brand-portfolio'

/**
 * Brand page additions: what the brand sells (for "где купить" copy and FAQ)
 * and which site sections to link to. Only facts that already appear in
 * lib/brand-portfolio.ts; do not add claims such as "официальный дистрибьютор"
 * without the owner's confirmation.
 */
type BrandPageExtras = {
  /** Product noun used in sentences: "обувь и аксессуары Shoto" */
  product: string
  related: { href: string; label: string }[]
}

const commonLinks = [
  { href: '/zhenskaya-odezhda-dlya-butikov/', label: 'Одежда для бутиков' },
  { href: '/optovaya-zhenskaya-odezhda/', label: 'Оптовые поставки' },
  { href: '/preorder/', label: 'Предзаказ коллекций' },
  { href: '/distributsiya-zhenskoy-odezhdy/', label: 'Дистрибуция женской одежды' },
  { href: '/vn-13-brand/', label: 'Каталог VN-13' },
]

const extras: Record<string, BrandPageExtras> = {
  'hannoh-wessel': {
    product: 'женскую одежду',
    related: [
      { href: '/evropeyskie-brendy-zhenskoy-odezhdy/', label: 'Европейские бренды женской одежды' },
      { href: '/premium-zhenskaya-odezhda/', label: 'Премиальная женская одежда' },
    ],
  },
  moyuru: {
    product: 'женскую одежду',
    related: [
      { href: '/japanese-style/', label: 'Японский стиль в одежде' },
      { href: '/dizaynerskaya-zhenskaya-odezhda/', label: 'Дизайнерская женская одежда' },
    ],
  },
  shoto: {
    product: 'обувь и аксессуары',
    related: [
      { href: '/аксессуары/', label: 'Женские аксессуары' },
      { href: '/premium-zhenskaya-odezhda/', label: 'Премиальная женская одежда' },
      { href: '/evropeyskie-brendy-zhenskoy-odezhdy/', label: 'Европейские бренды' },
    ],
  },
  'post-and-co': {
    product: 'аксессуары',
    related: [
      { href: '/аксессуары/', label: 'Женские аксессуары' },
      { href: '/premium-zhenskaya-odezhda/', label: 'Премиальная женская одежда' },
      { href: '/evropeyskie-brendy-zhenskoy-odezhdy/', label: 'Европейские бренды' },
    ],
  },
  aequamente: {
    product: 'женскую одежду',
    related: [
      { href: '/premium-zhenskaya-odezhda/', label: 'Премиальная женская одежда' },
      { href: '/evropeyskie-brendy-zhenskoy-odezhdy/', label: 'Европейские бренды женской одежды' },
    ],
  },
  'mj-watson': {
    product: 'женскую одежду',
    related: [
      { href: '/dizaynerskaya-zhenskaya-odezhda/', label: 'Дизайнерская женская одежда' },
      { href: '/evropeyskie-brendy-zhenskoy-odezhdy/', label: 'Европейские бренды женской одежды' },
    ],
  },
  'isabella-clementini': {
    product: 'женскую одежду',
    related: [
      { href: '/natural-fabrics/', label: 'Одежда из натуральных тканей' },
      { href: '/evropeyskie-brendy-zhenskoy-odezhdy/', label: 'Европейские бренды женской одежды' },
    ],
  },
  sula: {
    product: 'женскую одежду',
    related: [
      { href: '/dizaynerskaya-zhenskaya-odezhda/', label: 'Дизайнерская женская одежда' },
      { href: '/eksklyuzivnaya-zhenskaya-odezhda/', label: 'Эксклюзивная женская одежда' },
    ],
  },
  soh: {
    product: 'женскую одежду',
    related: [
      { href: '/premium-zhenskaya-odezhda/', label: 'Премиальная женская одежда' },
      { href: '/dizaynerskaya-zhenskaya-odezhda/', label: 'Дизайнерская женская одежда' },
    ],
  },
}

export function getBrandPageExtras(brand: BrandPortfolioItem): BrandPageExtras {
  const own = extras[brand.slug] ?? { product: 'женскую одежду', related: [] }
  return { product: own.product, related: [...own.related, ...commonLinks] }
}

/** Three other brands: same country first, then the rest of the portfolio in order */
export function getOtherBrands(brand: BrandPortfolioItem, count = 3) {
  const others = brandPortfolio.filter((item) => item.slug !== brand.slug)
  return [...others.filter((item) => item.region === brand.region), ...others.filter((item) => item.region !== brand.region)].slice(0, count)
}

export type BrandFaqItem = { question: string; answer: string }

/** FAQ built from confirmed company facts (see CLAUDE.md) */
export function getBrandFaq(brand: BrandPortfolioItem): BrandFaqItem[] {
  const { product } = getBrandPageExtras(brand)
  return [
    {
      question: `Где купить ${brand.name} в Москве?`,
      answer: `Заказать ${product} ${brand.name} можно через VN13: напишите в Telegram @vn13agency, позвоните по телефону +7 926 602-20-89 или на почту info@vn-13.com. Шоурум и офис VN13 находятся в Москве, на Большой Дмитровке, 32с1.`,
    },
    {
      question: `Как узнать, какие модели ${brand.name} доступны сейчас?`,
      answer: `Коллекции и размерный ряд меняются от сезона к сезону. Напишите, что вас интересует: команда VN13 проверит актуальную коллекцию ${brand.name}, размеры и условия заказа. Модели будущего сезона можно оформить по предзаказу.`,
    },
    {
      question: `Можно ли заказать ${brand.name} из другого города?`,
      answer: `Да, напишите, из какого вы города. VN13 работает с розничными партнёрами в 22+ городах России и подскажет, как удобнее получить заказ.`,
    },
    {
      question: `Как бутику начать работать с ${brand.name}?`,
      answer: `Отправьте заявку в Telegram или на почту и расскажите о магазине: город, аудитория, ценовой сегмент. VN13 подберёт модели ${brand.name} под ваш ассортимент и пришлёт условия поставки. VN13 работает с бутиками и шоурумами с 2013 года, сейчас у компании 45+ розничных партнёров.`,
    },
  ]
}
