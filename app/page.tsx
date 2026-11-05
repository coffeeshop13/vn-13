import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomeHero from '@/components/home/HomeHero'
import HomeIntro from '@/components/home/HomeIntro'
import HomeShowcase from '@/components/home/HomeShowcase'
import HomeCategories from '@/components/home/HomeCategories'
import HomeBrandIndex from '@/components/home/HomeBrandIndex'
import HomeClosing from '@/components/home/HomeClosing'
import { brandPortfolio } from '@/lib/brand-portfolio'
import { homePageJsonLd } from '@/lib/seo'
import './home.css'

export default function Home() {
  return (
    <main className="home-editorial">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <Header />
      <HomeHero />
      <HomeIntro />
      <HomeShowcase />
      <HomeCategories />
      <HomeBrandIndex />
      <HomeClosing brandCount={brandPortfolio.length} />
      <Footer />
    </main>
  )
}
