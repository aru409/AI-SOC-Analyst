import DashboardPreview from '../components/DashboardPreview'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'

const pillars = [
  {
    title: 'Triage fabric',
    body: 'Aggregate identity, email, endpoint, cloud, and network signals into one analyst-ready case queue.',
  },
  {
    title: 'Reasoning layer',
    body: 'Attach evidence, confidence, attack path context, and human-readable incident narratives to every action.',
  },
  {
    title: 'Response controls',
    body: 'Run playbooks with approval gates, reversible automations, and audit-friendly execution logs.',
  },
]

function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="An AI SOC workspace built for detection context, fast action, and analyst trust."
        description="Sentra AI combines autonomous triage with analyst controls, so teams can move from alert overload to clear, evidence-backed decisions."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <SectionReveal className="space-y-5">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[28px] border border-white/10 bg-white/5 p-7 transition hover:border-surge/30 hover:bg-white/[0.08]">
              <h2 className="font-display text-2xl font-bold text-white">{pillar.title}</h2>
              <p className="mt-3 leading-8 text-slate-300">{pillar.body}</p>
            </div>
          ))}
        </SectionReveal>

        <SectionReveal>
          <DashboardPreview />
        </SectionReveal>
      </section>
    </>
  )
}

export default PlatformPage
