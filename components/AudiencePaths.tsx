import Link from 'next/link'

const paths = [
  {
    title: 'Хочу выбрать одежду',
    text: 'Посмотрите коллекцию VN-13 и уточните размер или наличие.',
    href: '/vn-13-brand',
    label: 'Перейти в каталог',
  },
  {
    title: 'У меня есть бутик',
    text: 'Подберём дизайнерские бренды и расскажем об условиях сотрудничества.',
    href: '/zhenskaya-odezhda-dlya-butikov',
    label: 'Для бутиков',
  },
  {
    title: 'Я представляю бренд',
    text: 'Обсудим дистрибуцию и выход на рынок России и СНГ.',
    href: '/distributsiya-zhenskoy-odezhdy',
    label: 'Предложить бренд',
  },
]

export default function AudiencePaths() {
  return (
    <section className="border-y border-[#e3ddd3] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-light" style={{ color: '#1d1b18' }}>
          Что вы ищете?
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group min-h-55 rounded-sm border border-[#e3ddd3] bg-[#fcfbf8] p-6 transition-colors hover:bg-[#f4efe6]"
            >
              <h3 className="text-xl font-medium" style={{ color: '#1d1b18' }}>{path.title}</h3>
              <p className="mt-3 text-base leading-relaxed" style={{ color: '#5d5851' }}>{path.text}</p>
              <span className="mt-6 inline-flex text-base font-medium underline underline-offset-4" style={{ color: '#8a6b3f' }}>
                {path.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
