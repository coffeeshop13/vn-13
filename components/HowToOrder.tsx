const steps = [
  ['1', 'Выберите вещь', 'Откройте каталог или сохраните понравившуюся фотографию.'],
  ['2', 'Свяжитесь с нами', 'Позвоните или напишите в Telegram — это удобно и быстро.'],
  ['3', 'Получите ответ', 'Проверим размер, состав, цену и наличие нужной модели.'],
]

export default function HowToOrder() {
  return (
    <section className="border-t border-[#e3ddd3] bg-[#f7f4ee]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-base font-medium" style={{ color: '#8a6b3f' }}>Без сложностей</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-light" style={{ color: '#1d1b18' }}>Как сделать заказ</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <article key={number} className="rounded-sm bg-white p-6">
              <p className="text-xl font-medium" style={{ color: '#8a6b3f' }}>{number}</p>
              <h3 className="mt-5 text-xl font-medium" style={{ color: '#1d1b18' }}>{title}</h3>
              <p className="mt-3 text-base leading-relaxed" style={{ color: '#5d5851' }}>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
