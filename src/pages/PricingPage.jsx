import PageHero from '../components/PageHero'
import PricingSection from '../components/PricingSection'
import SectionReveal from '../components/SectionReveal'

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Flexible AI analyst coverage for startups, security teams, and enterprise SOCs."
        description="Start with guided triage, expand into response automation, and scale into a full AI-assisted security operations layer."
        align="center"
      />
      <PricingSection />
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <SectionReveal className="rounded-[32px] border border-slate-200 bg-white/90 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-surge">Procurement friendly</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink">Need a pilot, annual contract, or private deployment?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
            We can structure deployment and pricing around regulated workloads, custom integrations, or proof-of-value milestones.
          </p>
        </SectionReveal>
      </section>
    </>
  )
}

export default PricingPage
