import Link from 'next/link'

const links = [
  {
    href: '/vn-13-brand',
    title: 'Каталог женской одежды VN-13',
    text: 'Платья, жакеты, рубашки, брюки и верхняя одежда собственного бренда VN-13.',
  },
  {
    href: '/dizaynerskaya-zhenskaya-odezhda',
    title: 'Дизайнерская женская одежда',
    text: 'Подбор лучших дизайнеров, капсульная логика, посадка и материалы вне массового рынка.',
  },
  {
    href: '/premium-zhenskaya-odezhda',
    title: 'Премиальная женская одежда',
    text: 'Качественные ткани, ограниченные серии и спокойная эстетика собственного бренда VN-13.',
  },
  {
    href: '/eksklyuzivnaya-zhenskaya-odezhda',
    title: 'Эксклюзивная женская одежда',
    text: 'Лимитированные коллекции, контролируемая дистрибуция и ассортимент вне массового рынка.',
  },
  {
    href: '/kapsulnaya-zhenskaya-odezhda',
    title: 'Капсульная женская одежда',
    text: 'Коллекции, где силуэты, категории, цвета и фактуры работают как единая система.',
  },
  {
    href: '/proizvoditel-zhenskoy-odezhdy',
    title: 'Производитель женской одежды',
    text: 'Разработка капсул, подбор материалов, контроль качества и сопровождение производства.',
  },
  {
    href: '/poshiv-zhenskoy-odezhdy-dlya-brenda',
    title: 'Пошив для бренда',
    text: 'Малые партии, образцы, посадка и подготовка коллекции к продаже.',
  },
  {
    href: '/zhenskaya-odezhda-dlya-butikov',
    title: 'Женская одежда для бутиков',
    text: 'Отличимый ассортимент, предзаказ и закупка без перегруза склада.',
  },
  {
    href: '/evropeyskie-brendy-zhenskoy-odezhdy',
    title: 'Европейские бренды',
    text: 'Дистрибуция европейских дизайнерских марок и подбор коллекций для розницы.',
  },
  {
    href: '/lookbook',
    title: 'Lookbook VN-13',
    text: 'Визуальное направление, капсульные силуэты и материалы для будущих коллекций.',
  },
  {
    href: '/journal',
    title: 'Журнал VN13',
    text: 'Гиды по закупке, производству, предзаказу, капсульным коллекциям и дистрибуции.',
  },
  {
    href: '/optovaya-zhenskaya-odezhda',
    title: 'Оптовая женская одежда',
    text: 'Предзаказ, оптовые условия и ассортиментная поддержка бутиков и шоурумов.',
  },
  {
    href: '/distributsiya-zhenskoy-odezhdy',
    title: 'Дистрибуция женской одежды',
    text: 'Представительство европейских брендов, развитие розничной сети и поддержка продаж.',
  },
  {
    href: '/sravnenie-premialnykh-rynkov',
    title: 'Премиальные рынки',
    text: 'Сравнение французского, итальянского и азиатского womenswear для подбора ассортимента.',
  },
  {
    href: '/kak-vn13-vybirayet-brendy',
    title: 'Как VN13 выбирает бренды',
    text: 'Принципы отбора, коммерческий смысл, визуальная логика и требования к партнерам.',
  },
  {
    href: '/limited-series-dlya-butikov',
    title: 'Лимитированные серии для бутиков',
    text: 'Почему limited series лучше работают в нишевой рознице и как VN13 подходит к ассортименту.',
  },
]

export default function SeoHub() {
  return (
    <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#b8935a' }}>
            VN-13 Womenswear
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            Премиальная женская одежда, лимитированные серии и работа с партнерами
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
            VN13 соединяет подбор европейских дизайнеров, собственный бренд VN-13, предзаказ, оптовые поставки и прямую продажу в рамках одной системы. Для клиента это премиальная одежда в ограниченных сериях, для бутика — понятный партнер по ассортименту и дистрибуции.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block p-6 transition-colors duration-200"
              style={{ border: '1px solid #e0ddd8', backgroundColor: '#fff' }}
            >
              <h3 className="text-xl font-medium mb-3" style={{ color: '#0f0f0f' }}>
                {link.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6b6b6b' }}>
                {link.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
