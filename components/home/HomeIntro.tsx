import Link from 'next/link'

const directions = [
  ['Для клиентов', 'дизайнерская одежда VN-13, составы и размеры.'],
  ['Для бутиков', 'оптовые поставки, предзаказ и подбор ассортимента.'],
  ['Для брендов', 'дистрибуция и развитие розничных партнерств.'],
  ['Для fashion-проектов', 'производство и капсульные коллекции.'],
] as const

const paths = [
  {
    title: 'Хочу выбрать одежду',
    text: 'Посмотрите коллекцию VN-13 и уточните размер или наличие.',
    href: '/vn-13-brand/',
    label: 'Перейти в каталог',
  },
  {
    title: 'У меня есть бутик или шоурум',
    text: 'Подберём оптовый ассортимент, дизайнерские бренды и формат поставки под ваш магазин.',
    href: '/optovaya-zhenskaya-odezhda/',
    label: 'Опт и ассортимент',
  },
  {
    title: 'Я представляю бренд',
    text: 'Обсудим дистрибуцию и выход на рынок России и СНГ.',
    href: '/distributsiya-zhenskoy-odezhdy/',
    label: 'Предложить бренд',
  },
]

/** "VN13 in one sentence" plus the three audience paths. */
export default function HomeIntro() {
  return (
    <>
      <section className="bg-white" aria-labelledby="vn13-offer-heading">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="rubric">VN13 в одном предложении</p>
            <h2 id="vn13-offer-heading" className="font-display mt-5 text-4xl leading-[1.1] text-balance md:text-5xl">
              Премиальная женская одежда для клиентов, бутиков и брендов
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-7 text-[var(--ink-soft)] md:text-[17px] md:leading-8">
              VN13 объединяет собственный бренд VN-13, европейские дизайнерские марки и практическую поддержку для розничных партнеров.
              Здесь можно выбрать коллекцию, обсудить оптовую поставку, предзаказ или дистрибуцию бренда.
            </p>
            <ul className="mt-8 grid border-b border-[var(--rule)] sm:grid-cols-2 sm:gap-x-8" aria-label="Направления VN13">
              {directions.map(([title, text]) => (
                <li key={title} className="border-t border-[var(--rule)] py-4 text-[15px] leading-6 text-[var(--muted)]">
                  <strong className="font-medium text-[var(--ink)]">{title}</strong>: {text}
                </li>
              ))}
            </ul>
            <p data-author="Команда VN13" className="mt-6 text-sm leading-6 text-[var(--muted)]">
              Команда VN13 отбирает бренды, ведёт переговоры с европейскими производителями и сопровождает партнёров после поставки.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--rule)] bg-white" aria-labelledby="vn13-paths-heading">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <h2 id="vn13-paths-heading" className="font-display text-4xl md:text-5xl">
            Что вы ищете?
          </h2>
          <div className="mt-10 grid md:grid-cols-3">
            {paths.map((path, i) => (
              <Link
                key={path.href}
                href={path.href}
                className={`group flex flex-col border-t border-[var(--ink)] py-7 md:px-8 md:first:pl-0 md:last:pr-0 ${
                  i > 0 ? 'md:border-l md:border-l-[var(--rule)]' : ''
                }`}
              >
                <h3 className="font-display text-[1.75rem] leading-tight transition-colors group-hover:text-[var(--bronze)]">
                  {path.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-6 text-[var(--muted)]">{path.text}</p>
                <span className="text-link mt-6 self-start">
                  {path.label} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
