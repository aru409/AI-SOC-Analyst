import ContactSection from '../components/ContactSection'
import PageHero from '../components/PageHero'

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Bring your alert volume, stack, and workflow goals. We will map the right rollout."
        description="Whether you need faster phishing triage, identity response, or broad SOC automation, this page is ready to be connected to your real intake flow."
        align="center"
      />
      <ContactSection />
    </>
  )
}

export default ContactPage
