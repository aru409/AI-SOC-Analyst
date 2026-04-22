import Footer from './Footer'
import Navbar from './Navbar'

function SiteLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(98,255,210,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(255,122,89,0.14),_transparent_24%),linear-gradient(180deg,_#07111b_0%,_#02070c_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:72px_72px] opacity-[0.08]" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default SiteLayout
