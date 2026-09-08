import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import AudiencePaths from '@/components/AudiencePaths'
import VN13Showcase from '@/components/VN13Showcase'
import PortfolioGrid from '@/components/PortfolioGrid'
import HowToOrder from '@/components/HowToOrder'
import LatestNews from '@/components/LatestNews'
import CategorySeoLinks from '@/components/CategorySeoLinks'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="border-b border-[#e0ddd8] bg-white" aria-labelledby="vn13-offer-heading">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:items-start md:py-18">
          <div>
            <p className="mb-3 text-base font-medium text-[#8a6b3f]">VN13 в одном предложении</p>
            <h2 id="vn13-offer-heading" className="text-3xl font-light leading-tight text-[#1d1b18] md:text-4xl">
              Премиальная женская одежда для клиентов, бутиков и брендов
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[#56514a]">
            <p>
              VN13 объединяет собственный бренд VN-13, европейские дизайнерские марки и практическую поддержку для розничных партнеров.
              Здесь можно выбрать коллекцию, обсудить оптовую поставку, предзаказ или дистрибуцию бренда.
            </p>
            <ul className="grid gap-3 text-base md:grid-cols-2" aria-label="Направления VN13">
              <li className="border-l-2 border-[#b8935a] pl-4">
                <strong className="font-medium text-[#1d1b18]">Для клиентов</strong>: дизайнерская одежда VN-13, составы и размеры.
              </li>
              <li className="border-l-2 border-[#b8935a] pl-4">
                <strong className="font-medium text-[#1d1b18]">Для бутиков</strong>: оптовые поставки, предзаказ и подбор ассортимента.
              </li>
              <li className="border-l-2 border-[#b8935a] pl-4">
                <strong className="font-medium text-[#1d1b18]">Для брендов</strong>: дистрибуция и развитие розничных партнерств.
              </li>
              <li className="border-l-2 border-[#b8935a] pl-4">
                <strong className="font-medium text-[#1d1b18]">Для fashion-проектов</strong>: производство и капсульные коллекции.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <AudiencePaths />
      <VN13Showcase />
      <CategorySeoLinks />
      <PortfolioGrid />
      <HowToOrder />
      <Stats />
      <LatestNews />
      <ContactForm />
      <Footer />
    </main>
  )
}
