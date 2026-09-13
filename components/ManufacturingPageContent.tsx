'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/context/LanguageContext'

function RussianManufacturingGuide() {
  return (
    <article className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-14">
      <section>
        <h2 className="text-3xl font-light mb-5 text-[#0f0f0f]">Что проверять на маркировке одежды</h2>
        <p className="text-base leading-relaxed text-[#565656]">
          Начните с ярлыка конкретной вещи и страницы именно этой модели. В зависимости от рынка и категории товара на маркировке могут указываться состав волокон, размер, изготовитель или ответственное лицо, а также страна производства. Точный перечень требований определяется применимыми правилами; общий текст о бренде не заменяет маркировку изделия.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#565656]">
          В ЕАЭС требования к товарам лёгкой промышленности установлены ТР ТС 017/2011. Роспотребнадзор отдельно обращает внимание на достоверность, читаемость и доступность маркировки и приводит примеры сведений, которые следует проверять на одежде. Для конкретного товара сверяйтесь с актуальной редакцией регламента и применимыми требованиями рынка.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-light mb-5 text-[#0f0f0f]">Как читать состав ткани</h2>
        <p className="text-base leading-relaxed text-[#565656]">
          Ищите названия волокон и указанные доли, а не только общее слово «натуральный». У вещи с подкладкой или деталями из другой ткани состав отдельных частей может отличаться — проверьте, к чему относится каждая строка ярлыка. Состав помогает сравнить изделия, но сам по себе не гарантирует мягкость, износостойкость или простоту ухода: важны также переплетение, плотность, отделка и конструкция.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#565656]">
          Для текстильных товаров, которые подпадают под правила ЕС, Регламент (EU) № 1007/2011 устанавливает названия текстильных волокон и требования к обозначению волокнистого состава. Он не является универсальным правилом об указании страны производства или рекомендаций по уходу — эти сведения проверяйте отдельно по маркировке товара и требованиям соответствующего рынка.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-light mb-5 text-[#0f0f0f]">Страна бренда и страна производства — не одно и то же</h2>
        <p className="text-base leading-relaxed text-[#565656]">
          Страна, с которой ассоциируется марка, место работы дизайнера, адрес компании и место изготовления конкретной вещи могут различаться. Поэтому не делайте вывод о происхождении изделия только по названию бренда, стилю коллекции или адресу его головного офиса. Для точного ответа сверяйте страну изготовления на ярлыке модели или в относящихся к ней документах.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-light mb-5 text-[#0f0f0f]">Если заявлен сертификат или декларация</h2>
        <p className="text-base leading-relaxed text-[#565656]">
          Попросите точное название документа, его номер, выдавшую организацию и сведения о том, на какие товары, модели, изготовителя и рынок он распространяется. Сопоставьте область действия документа с конкретным заявлением: подтверждение соответствия требованиям безопасности не следует автоматически трактовать как доказательство экологичности, происхождения волокна или одинаковых условий производства всей коллекции. Форма оценки соответствия и нужные документы зависят от категории товара и рынка.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-light mb-5 text-[#0f0f0f]">Чек-лист перед покупкой или закупкой</h2>
        <ul className="list-disc pl-6 space-y-3 text-base leading-relaxed text-[#565656]">
          <li>Зафиксируйте точное название бренда и модели; если есть артикул — приложите его.</li>
          <li>Сверьте состав ткани и подкладки, размер и рекомендации по уходу с ярлыком именно этой вещи.</li>
          <li>Проверьте, какая страна указана как место изготовления; не подменяйте её страной бренда.</li>
          <li>Если заявлен сертификат или декларация, запросите документ и прочитайте его область действия.</li>
          <li>При расхождении карточки товара и ярлыка попросите продавца или бренд уточнить данные до заказа.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-light mb-5 text-[#0f0f0f]">Как VN13 работает с данными о моделях</h2>
        <p className="text-base leading-relaxed text-[#565656]">
          В портфеле VN13 представлены бренды из разных стран, поэтому состав, маркировка, документы и доступность проверяются для конкретной модели, а не выводятся из общих характеристик марки. Чтобы уточнить сведения о текущей коллекции, пришлите команде VN13 название бренда и модели или фотографию ярлыка. Бутикам, которым нужен именно проект по выпуску собственной коллекции, подойдёт отдельная страница о{' '}
          <Link href="/proizvoditel-zhenskoy-odezhdy/" className="underline underline-offset-4 text-[#6b5335]">
            производстве женской одежды
          </Link>.
        </p>
      </section>

      <aside className="border-t border-[#e0ddd8] pt-8">
        <h2 className="text-xl font-medium mb-4 text-[#0f0f0f]">Официальные источники</h2>
        <ul className="list-disc pl-6 space-y-3 text-sm leading-relaxed text-[#565656]">
          <li>
            <a href="https://adilet.zan.kz/rus/docs/H11T0000876" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              ТР ТС 017/2011 «О безопасности продукции лёгкой промышленности»
            </a>
            {' '}— текст технического регламента Таможенного союза.
          </li>
          <li>
            <a href="https://zpp.rospotrebnadzor.ru/news/federal/561003" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Роспотребнадзор: рекомендации по проверке маркировки одежды
            </a>.
          </li>
          <li>
            <a href="https://eur-lex.europa.eu/eli/reg/2011/1007/oj" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Регламент (EU) № 1007/2011 на EUR-Lex
            </a>
            {' '}— официальные названия текстильных волокон и маркировка их состава в ЕС.
          </li>
        </ul>
        <p className="mt-5 text-xs leading-relaxed text-[#777]">
          Справочная информация, проверена 14 сентября 2026 года. Она не заменяет проверку документов конкретного товара или юридическую консультацию.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="/sustainability/" className="underline underline-offset-4 text-[#6b5335]">Подход VN13 к отбору коллекций</Link>
          <Link href="/contact/" className="underline underline-offset-4 text-[#6b5335]">Уточнить информацию о модели</Link>
        </div>
      </aside>
    </article>
  )
}

export default function ManufacturingPageContent() {
  const { language, translations } = useLanguage()
  const isRussian = language === 'ru'

  return (
    <main>
      <Header />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 bg-[#fafaf8]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4 text-[#b8935a]">
            {isRussian ? 'Практическая памятка' : translations.navManufacturing}
          </p>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 text-balance text-[#0f0f0f]">
            {isRussian ? 'Маркировка одежды: как проверить состав, уход и страну производства' : translations.navManufacturing}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-[#626262]">
            {isRussian
              ? 'Практический гид по ярлыку и документам конкретной модели: что можно проверить самостоятельно и какие сведения уточнить у бренда или продавца.'
              : translations.sustainabilityEthicalSourcingDesc3}
          </p>
        </div>
      </section>

      {isRussian ? (
        <RussianManufacturingGuide />
      ) : (
        <section className="border-t border-[#e0ddd8] bg-white">
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <article>
                <h2 className="text-3xl font-light mb-6 text-[#0f0f0f]">{translations.sustainabilityQualityTitle}</h2>
                <p className="text-base leading-relaxed mb-4 text-[#6b6b6b]">{translations.sustainabilityQualityDesc1}</p>
                <p className="text-base leading-relaxed mb-4 text-[#6b6b6b]">{translations.sustainabilityQualityDesc2}</p>
                <p className="text-base leading-relaxed text-[#6b6b6b]">{translations.sustainabilityQualityDesc3}</p>
              </article>
              <article>
                <h2 className="text-3xl font-light mb-6 text-[#0f0f0f]">{translations.sustainabilityPillarsTitle}</h2>
                <ul className="space-y-4 text-base leading-relaxed text-[#6b6b6b]">
                  <li>{translations.sustainabilityCarbon}</li>
                  <li>{translations.sustainabilityPackaging}</li>
                  <li>{translations.sustainabilityWater}</li>
                  <li>{translations.sustainabilityChemicals}</li>
                </ul>
              </article>
            </div>
            <div className="mt-16 pt-10 border-t flex flex-wrap gap-x-8 gap-y-4 border-[#e0ddd8]">
              <Link href="/brands/" className="underline underline-offset-4 text-[#6b5335]">{translations.navBrands}</Link>
              <Link href="/contact/" className="underline underline-offset-4 text-[#6b5335]">{translations.navContact}</Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
