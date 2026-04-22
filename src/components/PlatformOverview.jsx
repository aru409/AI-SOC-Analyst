import SectionReveal from './SectionReveal'

const capabilities = [
  'Autonomous alert triage across SIEM, EDR, IAM, and cloud telemetry',
  'Explainable incident narratives with MITRE ATT&CK mapping and evidence trails',
  'Escalation workflows for human analysts with confidence scoring built in',
]

function PlatformOverview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal className="rounded-[30px] border border-slate-200 bg-white/90 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-surge">Platform</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink">A frontline analyst experience built for trust.</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Every action is grounded in evidence. Analysts can inspect the timeline, reasoning, enrichment data, and
            remediation steps before approving or adapting the response.
          </p>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((item) => (
            <SectionReveal key={item} className="rounded-[28px] border border-slate-200 bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-surge/20">
              <div
                className="mb-5 h-12 w-12 rounded-2xl bg-surge/10 transition duration-300"
              />
              <p className="text-base leading-7 text-slate-700">{item}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformOverview
