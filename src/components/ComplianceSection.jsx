import SectionReveal from './SectionReveal'

const items = [
  'Explainable alert narratives with evidence trail references',
  'Approval-based response actions for sensitive workflows',
  'Role-aware operating model for analysts, managers, and responders',
  'Designed to support regulated deployment conversations',
]

function ComplianceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
      <SectionReveal className="rounded-[32px] border border-white/10 bg-gradient-to-r from-[#0f2746] to-[#0b1f39] p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-alert">Security Readiness</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white">Real buyers ask about governance, approvals, and auditability.</h2>
            <p className="mt-4 leading-8 text-slate-300">
              The product story now reflects those practical concerns so the project feels closer to something that could actually sell to a SOC lead or security team.
            </p>
          </div>

          <div className="grid gap-3">
            {items.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-surge" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}

export default ComplianceSection
