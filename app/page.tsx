import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import VN13Showcase from '@/components/VN13Showcase'
import PortfolioGrid from '@/components/PortfolioGrid'
import SeoHub from '@/components/SeoHub'
import CategorySeoLinks from '@/components/CategorySeoLinks'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <VN13Showcase />
      <SeoHub />
      <PortfolioGrid />
      <CategorySeoLinks />
      <ContactForm />
      <Footer />
    </main>
  )
}
