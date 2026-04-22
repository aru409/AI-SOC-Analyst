import ContactSection from '../components/ContactSection'
import HomeHero from '../components/HomeHero'
import PlatformOverview from '../components/PlatformOverview'
import PricingSection from '../components/PricingSection'

function HomePage() {
  return (
    <>
      <HomeHero />
      <PlatformOverview />
      <PricingSection compact />
      <ContactSection />
    </>
  )
}

export default HomePage
