function ShieldBotMascot() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur">
      <svg viewBox="0 0 360 280" className="h-full w-full" role="img" aria-label="Cute shield security bot illustration">
        <circle cx="285" cy="48" r="22" className="fill-surge/20 shield-ring" />
        <path d="M175 52c30 0 56 26 56 56v30c0 16-13 29-29 29h-54c-16 0-29-13-29-29v-30c0-30 26-56 56-56Z" fill="#dff5ff" />
        <rect x="130" y="84" width="90" height="66" rx="28" fill="#10284a" />
        <ellipse cx="160" cy="116" rx="10" ry="12" fill="#f6fbff" className="mascot-eye" />
        <ellipse cx="192" cy="116" rx="10" ry="12" fill="#f6fbff" className="mascot-eye" />
        <circle cx="160" cy="117" r="4" fill="#10284a" />
        <circle cx="192" cy="117" r="4" fill="#10284a" />
        <path d="M160 140c10 8 22 8 32 0" stroke="#8fd3ff" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M142 167h68c18 0 32 14 32 32v10c0 10-8 18-18 18H128c-10 0-18-8-18-18v-10c0-18 14-32 32-32Z" fill="#dff5ff" />
        <path d="M111 190c-22 6-34 16-34 29 0 7 6 13 13 13h17" stroke="#dff5ff" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M249 188c19 7 31 17 31 29 0 7-6 13-13 13h-18" stroke="#dff5ff" strokeWidth="12" strokeLinecap="round" fill="none" className="mascot-hand" />
        <path d="M178 205l-18 12 5-21-16-15 22-2 7-20 8 20 22 2-17 15 6 21-19-12Z" fill="#8fd3ff" />
        <path d="M52 94l36-16 36 16v39c0 24-15 44-36 52-21-8-36-28-36-52V94Z" fill="#10284a" stroke="#8fd3ff" strokeWidth="5" />
        <path d="M74 114l11 11 17-20" stroke="#f6fbff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  )
}

function CloudLockMascot() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur">
      <svg viewBox="0 0 360 280" className="h-full w-full" role="img" aria-label="Cute cloud lock security illustration">
        <ellipse cx="112" cy="62" rx="26" ry="18" fill="#8fd3ff" opacity="0.22" className="dashboard-orb" />
        <ellipse cx="282" cy="214" rx="34" ry="22" fill="#8fd3ff" opacity="0.16" className="dashboard-orb delay" />
        <path d="M108 166c-25 0-44-17-44-40 0-21 15-37 37-40 7-24 29-40 56-40 30 0 54 19 60 47 23 0 41 17 41 38 0 19-16 35-37 35H108Z" fill="#dff5ff" />
        <rect x="128" y="132" width="103" height="86" rx="24" fill="#10284a" />
        <path d="M153 134v-15c0-17 13-31 28-31h0c16 0 29 14 29 31v15" stroke="#8fd3ff" strokeWidth="10" strokeLinecap="round" fill="none" />
        <circle cx="179" cy="168" r="10" fill="#f6fbff" />
        <rect x="174" y="176" width="10" height="18" rx="5" fill="#f6fbff" />
        <circle cx="119" cy="124" r="19" fill="#10284a" />
        <ellipse cx="112" cy="120" rx="5" ry="6" fill="#f6fbff" className="mascot-eye" />
        <ellipse cx="126" cy="120" rx="5" ry="6" fill="#f6fbff" className="mascot-eye" />
        <path d="M112 132c5 4 10 4 15 0" stroke="#8fd3ff" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  )
}

function SecurityMascots() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <ShieldBotMascot />
      <CloudLockMascot />
    </div>
  )
}

export default SecurityMascots
