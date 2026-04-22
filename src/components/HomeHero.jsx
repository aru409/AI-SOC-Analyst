import { Link } from 'react-router-dom'
import DashboardPreview from './DashboardPreview'
import SecurityMascots from './SecurityMascots'
import SectionReveal from './SectionReveal'

const metrics = [
  { label: 'Alerts triaged', value: '31.4K', detail: '+18% this week' },
  { label: 'False positives reduced', value: '82%', detail: 'Compared to manual review' },
  { label: 'Median response time', value: '4 min', detail: 'Across cloud and endpoint telemetry' },
]

function HomeHero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-16">
      <SectionReveal className="lg:pr-4">
        <div className="hero-shimmer inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-surge animate-pulseSoft" />
          AI-native SOC coverage for overwhelmed security teams
        </div>

        <h1 className="mt-8 max-w-3xl animate-fadeUp font-display text-5xl font-bold leading-tight text-white md:text-6xl">
          Triage threats faster with an AI analyst that never drops the queue.
        </h1>

        <p className="mt-6 max-w-2xl animate-fadeUp text-lg leading-8 text-slate-300" style={{ animationDelay: '120ms' }}>
          Sentra AI reviews alerts, correlates telemetry, writes incident narratives, and routes only the highest-risk
          cases to your human team. Your SOC gets speed without losing judgment.
        </p>

        <div className="mt-8 flex animate-fadeUp flex-col gap-4 sm:flex-row" style={{ animationDelay: '220ms' }}>
          <Link
            to="/pricing"
            className="rounded-full bg-white px-6 py-4 text-center text-sm font-semibold text-[#07182d] transition hover:-translate-y-0.5 hover:bg-surge"
          >
            See Pricing
          </Link>
          <Link
            to="/platform"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-surge/40 hover:bg-white/10"
          >
            Explore Platform
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="metric-stagger rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-surge/30 hover:bg-white/[0.08]"
            >
              <p className="text-3xl font-bold text-white">{metric.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-200">{metric.label}</p>
              <p className="mt-1 text-sm text-slate-400">{metric.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl animate-fadeUp" style={{ animationDelay: '340ms' }}>
          <SecurityMascots />
        </div>
      </SectionReveal>

      <SectionReveal className="delay-150">
        <DashboardPreview />
      </SectionReveal>
    </section>
  )
}

export default HomeHero
