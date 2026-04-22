import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionReveal from './SectionReveal'

const basePlans = [
  {
    name: 'Starter',
    monthlyPrice: 2400,
    blurb: 'For lean security teams modernizing triage.',
    features: ['Up to 3 data sources', 'AI case summaries', 'Slack and email escalations'],
  },
  {
    name: 'Growth',
    monthlyPrice: 6800,
    blurb: 'For growing SOC teams needing always-on coverage.',
    featured: true,
    features: ['Unlimited detections', 'Playbook automation', 'Custom detections and analyst workspace'],
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    blurb: 'For regulated environments and multi-region operations.',
    features: ['Private deployment options', 'Role-based workflows', 'Dedicated onboarding and security review'],
  },
]

function formatPrice(price, annual) {
  if (price === null) {
    return 'Custom'
  }

  if (!annual) {
    return `$${price.toLocaleString()}`
  }

  const discounted = Math.round(price * 10.5)
  return `$${discounted.toLocaleString()}`
}

function PricingSection({ compact = false }) {
  const [annualBilling, setAnnualBilling] = useState(true)

  const plans = useMemo(
    () =>
      basePlans.map((plan) => ({
        ...plan,
        displayPrice: formatPrice(plan.monthlyPrice, annualBilling),
        cycleLabel: plan.monthlyPrice === null ? 'tailored engagement' : annualBilling ? 'per year billed annually' : 'per month',
      })),
    [annualBilling],
  )

  return (
    <section className={`mx-auto max-w-7xl px-6 lg:px-10 ${compact ? 'py-8' : 'py-20'}`}>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-alert">Pricing</p>
        <h2 className="mt-4 font-display text-4xl font-bold text-white">Choose the coverage model that fits your SOC.</h2>
        <p className="mt-4 text-lg text-slate-300">
          Transparent plans for modern security teams, from first automation to enterprise-scale incident operations.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setAnnualBilling(false)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              !annualBilling ? 'bg-white text-[#07182d]' : 'text-slate-300 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setAnnualBilling(true)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              annualBilling ? 'bg-surge text-[#07182d]' : 'text-slate-300 hover:text-white'
            }`}
          >
            Annual
          </button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <SectionReveal
            key={plan.name}
            className={`rounded-[30px] border p-8 transition duration-300 hover:-translate-y-1 ${
              plan.featured
                ? 'border-surge/30 bg-gradient-to-b from-[#15345b] to-[#0d2342] shadow-glow'
                : 'border-white/10 bg-white/5 hover:border-surge/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
              {plan.featured ? (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#07182d]">
                  Popular
                </span>
              ) : null}
            </div>
            <p className="mt-5 text-4xl font-bold text-white">{plan.displayPrice}</p>
            <p className="mt-2 text-sm text-slate-400">{plan.cycleLabel}</p>
            <p className="mt-5 text-slate-300">{plan.blurb}</p>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-surge" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                plan.featured
                  ? 'bg-white text-[#07182d] hover:bg-surge'
                  : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              Start Conversation
            </Link>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}

export default PricingSection
