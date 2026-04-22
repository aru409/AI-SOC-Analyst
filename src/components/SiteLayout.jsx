import Footer from './Footer'
import Navbar from './Navbar'

function SiteLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-sky-50 text-ink">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(30,167,253,0.18),_transparent_28%),radial-gradient(circle_at_82%_18%,_rgba(255,139,107,0.16),_transparent_24%),linear-gradient(180deg,_#fbfeff_0%,_#eef8ff_46%,_#f8fcff_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:72px_72px] opacity-[0.14]" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default SiteLayout
