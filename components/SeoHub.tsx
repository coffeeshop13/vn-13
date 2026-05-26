import Link from 'next/link'

const links = [
  {
    href: '/zhenskaya-odezhda',
    title: 'Женская одежда VN-13',
    text: 'Собственный бренд, дизайнерские коллекции, европейское производство и работа с бутиками.',
  },
  {
    href: '/eksklyuzivnaya-zhenskaya-odezhda',
    title: 'Эксклюзивная женская одежда',
    text: 'Лимитированные коллекции, контролируемая дистрибуция и ассортимент вне массового рынка.',
  },
  {
    href: '/proizvoditel-zhenskoy-odezhdy',
    title: 'Производитель женской одежды',
    text: 'Разработка капсул, подбор материалов, контроль качества и сопровождение производства.',
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
            Женская одежда, собственный бренд и дистрибуция в одной системе
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
            VN13 развивает два направления: дистрибуцию европейских дизайнерских брендов и собственный бренд женской одежды VN-13. Это позволяет соединять производство, отбор коллекций, предзаказ, оптовые поставки и работу с розничными партнерами.
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
