import { useMemo, useState } from 'react'

const views = {
  triage: {
    label: 'Live Triage',
    badge: 'Analyst in loop',
    accent: 'from-surge to-teal-300',
    cards: [
      { title: 'Impossible travel login', source: 'Okta', severity: 'High', action: 'Escalated to analyst', width: '78%' },
      { title: 'Suspicious PowerShell chain', source: 'Microsoft Defender', severity: 'Critical', action: 'Host isolated', width: '93%' },
      { title: 'New OAuth app consent', source: 'Google Workspace', severity: 'Medium', action: 'Queued for review', width: '52%' },
    ],
    stats: [
      { label: 'Confidence', value: '96.2%' },
      { label: 'Containment', value: '11 sec' },
      { label: 'Escalations', value: '4 active' },
    ],
  },
  response: {
    label: 'Response Flows',
    badge: 'Playbooks armed',
    accent: 'from-alert to-orange-300',
    cards: [
      { title: 'Endpoint isolation executed', source: 'CrowdStrike', severity: 'Actioned', action: 'Rollback checkpoint created', width: '88%' },
      { title: 'Risky token revoked', source: 'Azure AD', severity: 'Protected', action: 'User challenged on reauth', width: '81%' },
      { title: 'Mailbox forwarding blocked', source: 'Microsoft 365', severity: 'Resolved', action: 'SOC notified with summary', width: '67%' },
    ],
    stats: [
      { label: 'Automations', value: '18 live' },
      { label: 'Approval SLA', value: '2 min' },
      { label: 'Rollback safe', value: '100%' },
    ],
  },
}

const tabs = Object.keys(views)

function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('triage')
  const view = useMemo(() => views[activeTab], [activeTab])

  return (
    <div className="relative animate-float">
      <div className="dashboard-orb absolute -left-12 top-8 h-28 w-28 rounded-full bg-alert/20 blur-3xl" />
      <div className="dashboard-orb delay absolute -right-8 bottom-12 h-36 w-36 rounded-full bg-surge/20 blur-3xl" />

      <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-xl transition duration-500 hover:-translate-y-1">
        <div className="rounded-[28px] border border-white/10 bg-panel p-5">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="text-sm text-slate-400">Live analyst workspace</p>
              <h2 className="mt-1 text-xl font-semibold text-white">{view.label}</h2>
            </div>
            <div className="rounded-full border border-surge/20 bg-white/10 px-3 py-1 text-xs font-semibold text-surge">
              {view.badge}
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab ? 'bg-white text-[#07182d]' : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {views[tab].label}
              </button>
            ))}
          </div>

          <div className="mt-5 space-y-4">
            {view.cards.map((item, index) => (
              <div
                key={item.title}
                className="group animate-fadeUp rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-surge/30 hover:bg-white/[0.08]"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">{item.source}</p>
                    <p className="mt-1 font-semibold text-white">{item.title}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                    {item.severity}
                  </span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <div className={`h-2 rounded-full bg-gradient-to-r ${view.accent} transition-all duration-700`} style={{ width: item.width }} />
                </div>
                <p className="mt-3 text-sm text-slate-300 transition group-hover:text-white">{item.action}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {view.stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-surge/30 hover:bg-white/[0.08]">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview
