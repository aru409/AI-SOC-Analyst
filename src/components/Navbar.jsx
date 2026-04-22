import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Platform', to: '/platform' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClassName = ({ isActive }) =>
    `transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-glow">
            <span className="font-display text-lg font-bold text-surge">S</span>
          </div>
          <div>
            <p className="font-display text-lg font-bold tracking-wide">Sentra AI</p>
            <p className="text-sm text-slate-400">Autonomous SOC Analyst</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full border border-surge/30 bg-surge/10 px-5 py-3 text-sm font-semibold text-surge transition hover:bg-surge hover:text-slate-950"
          >
            Book Demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${
                isOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${isOpen ? 'opacity-0' : ''}`} />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition ${
                isOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/5 transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 text-sm text-slate-300">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClassName}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex justify-center rounded-full border border-surge/30 bg-surge/10 px-5 py-3 font-semibold text-surge"
          >
            Book Demo
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
