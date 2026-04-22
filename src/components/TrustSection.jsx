import SecurityMascots from './SecurityMascots'
import SectionReveal from './SectionReveal'

const logos = ['Okta', 'Microsoft', 'CrowdStrike', 'Google Cloud', 'Palo Alto', 'AWS']

const trustPoints = [
  {
    title: 'Built for security buyers',
    body: 'Clear audit trails, explainable triage decisions, and approval controls make the platform easier to adopt in real SOC environments.',
  },
  {
    title: 'Designed for hybrid teams',
    body: 'Support lean startups, MSSP-style operations, and internal enterprise SOC workflows without forcing a one-size-fits-all rollout.',
  },
  {
    title: 'Operational from day one',
    body: 'Start with alert summarization and escalations, then expand into playbooks, response automation, and deeper telemetry coverage.',
  },
]

function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <SectionReveal className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-surge">Trusted Workflows</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white">Made for security operations that need proof, not just automation.</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Buyers want confidence that AI recommendations are understandable, reversible, and grounded in evidence. This site now reflects those expectations more clearly.
            </p>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {logos.map((logo) => (
                <div key={logo} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-semibold text-slate-200">
                  {logo}
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point.title} className="rounded-2xl border border-white/10 bg-panel p-5">
                  <h3 className="font-semibold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{point.body}</p>
                </div>
              ))}
            </div>

            <SecurityMascots />
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}

export default TrustSection
