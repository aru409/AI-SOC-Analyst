import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="That page could not be found."
        description="The route may have moved, or the URL may be incorrect. Head back to the homepage or continue to the platform overview."
        align="center"
      />
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-[32px] border border-slate-200 bg-white/90 p-8 text-center">
          <Link
            to="/"
            className="rounded-full bg-surge px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
          >
            Back To Home
          </Link>
          <Link
            to="/platform"
            className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sky-50"
          >
            View Platform
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
