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
