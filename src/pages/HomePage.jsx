import ComplianceSection from '../components/ComplianceSection'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import HomeHero from '../components/HomeHero'
import PlatformOverview from '../components/PlatformOverview'
import PricingSection from '../components/PricingSection'
import TrustSection from '../components/TrustSection'

function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustSection />
      <PlatformOverview />
      <ComplianceSection />
      <PricingSection compact />
      <FaqSection />
      <ContactSection />
    </>
  )
}

export default HomePage
