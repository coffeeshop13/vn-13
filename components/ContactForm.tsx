export default function ContactForm() {
  return (
    <section id="contact" className="border-t border-[#e3ddd3] bg-[#1d1b18]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-base font-medium" style={{ color: '#d7b982' }}>Связаться с VN13</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-light" style={{ color: '#fff' }}>Нужна помощь с выбором?</h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#e7e1d8' }}>
            Позвоните или напишите нам. Расскажем о наличии, размерах и условиях сотрудничества.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="tel:+79266022089" className="inline-flex min-h-[52px] items-center justify-center rounded-sm px-6 text-base font-medium" style={{ backgroundColor: '#d7b982', color: '#1d1b18' }}>
              Позвонить: +7 926 602-20-89
            </a>
            <a href="https://t.me/vn13agency" className="inline-flex min-h-[52px] items-center justify-center rounded-sm border border-[#8f867a] px-6 text-base font-medium text-white hover:bg-[#302d28]" style={{ color: '#fff' }}>
              Написать в Telegram
            </a>
            <a href="mailto:info@vn-13.com" className="inline-flex min-h-[52px] items-center justify-center rounded-sm px-3 text-base underline underline-offset-4" style={{ color: '#e7e1d8' }}>
              info@vn-13.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
