import { useState } from 'react'
import SectionReveal from './SectionReveal'

const initialForm = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function ContactSection() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setFieldErrors((current) => ({ ...current, [name]: '' }))
    setSubmitError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setFieldErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const payload = await response.json()

      if (!response.ok) {
        if (payload.errors) {
          setFieldErrors(payload.errors)
          setSubmitted(false)
          return
        }

        throw new Error(payload.error || 'Unable to submit the demo request.')
      }

      setSubmitted(true)
      setFormData(initialForm)
      setFieldErrors({})
    } catch (error) {
      setSubmitted(false)
      setSubmitError(error.message || 'Unable to submit the demo request.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <div className="grid gap-8 rounded-[34px] border border-slate-200 bg-white/90 p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-surge">Contact</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink">See how your team could operate with AI in the loop.</h2>
          <p className="mt-5 max-w-xl leading-8 text-slate-600">
            Tell us about your SOC stack, current alert volume, and the gaps you want to close. We&apos;ll tailor a short
            walkthrough around your workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">24/7 alert review</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">Cloud + endpoint coverage</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">Human escalation controls</span>
          </div>
        </SectionReveal>

        <SectionReveal>
          <form onSubmit={handleSubmit} className="grid gap-4 rounded-[28px] border border-sky-100 bg-panel p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-700">
                Full name
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Alex Morgan"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-surge/50 focus:bg-white"
                />
                {fieldErrors.name ? <span className="text-xs text-alert">{fieldErrors.name}</span> : null}
              </label>
              <label className="grid gap-2 text-sm text-slate-700">
                Work email
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-surge/50 focus:bg-white"
                />
                {fieldErrors.email ? <span className="text-xs text-alert">{fieldErrors.email}</span> : null}
              </label>
            </div>

            <label className="grid gap-2 text-sm text-slate-700">
              Company
              <input
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Northstar Security"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-surge/50 focus:bg-white"
              />
              {fieldErrors.company ? <span className="text-xs text-alert">{fieldErrors.company}</span> : null}
            </label>

            <label className="grid gap-2 text-sm text-slate-700">
              What would you like to improve?
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="We want faster triage for phishing, identity, and endpoint alerts across a small analyst team."
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-surge/50 focus:bg-white"
              />
              {fieldErrors.message ? <span className="text-xs text-alert">{fieldErrors.message}</span> : null}
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 rounded-full bg-surge px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-500"
            >
              {isSubmitting ? 'Submitting...' : 'Request Demo'}
            </button>

            <div
              className={`overflow-hidden rounded-2xl border px-4 text-sm transition-all duration-300 ${
                submitError
                  ? 'max-h-24 border-alert/30 bg-alert/10 py-4 text-alert'
                  : 'max-h-0 border-transparent py-0 text-transparent'
              }`}
            >
              {submitError}
            </div>

            <div
              className={`overflow-hidden rounded-2xl border px-4 text-sm transition-all duration-300 ${
                submitted
                  ? 'max-h-24 border-surge/30 bg-surge/10 py-4 text-surge'
                  : 'max-h-0 border-transparent py-0 text-transparent'
              }`}
            >
              Demo request captured and saved by the backend.
            </div>
          </form>
        </SectionReveal>
      </div>
    </section>
  )
}

export default ContactSection
