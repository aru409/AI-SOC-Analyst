import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-display text-lg font-bold text-white">Sentra AI</p>
          <p className="mt-1">Autonomous detection triage and incident operations for modern SOC teams.</p>
        </div>

        <div className="flex flex-wrap gap-5">
          <Link to="/">Home</Link>
          <Link to="/platform">Platform</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
