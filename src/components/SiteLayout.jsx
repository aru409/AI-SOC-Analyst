import Footer from './Footer'
import Navbar from './Navbar'

function SiteLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07182d] text-ink">
      <div className="pointer-events-none absolute inset-0 -z-10 animate-drift bg-[radial-gradient(circle_at_top_left,_rgba(143,211,255,0.16),_transparent_26%),radial-gradient(circle_at_85%_18%,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(180deg,_#0a1d37_0%,_#07182d_44%,_#041021_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:72px_72px] opacity-[0.14]" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default SiteLayout
