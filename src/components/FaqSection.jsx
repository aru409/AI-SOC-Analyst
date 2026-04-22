import { useState } from 'react'
import SectionReveal from './SectionReveal'

const faqs = [
  {
    question: 'How is this different from a generic SIEM assistant?',
    answer:
      'Sentra AI is positioned as an operations layer for SOC teams, not just a chatbot on top of alerts. It emphasizes triage, evidence-backed reasoning, and controlled escalation workflows.',
  },
  {
    question: 'Can teams keep a human approval step before response actions?',
    answer:
      'Yes. The product messaging and platform structure are designed around analyst review, confidence scoring, and gated execution for sensitive remediations.',
  },
  {
    question: 'Does the contact form store submissions permanently on the free deployment?',
    answer:
      'Not on the free Render setup. Submissions are saved to a local JSON file and can be lost after restarts or redeploys, which is fine for demos but not ideal for production.',
  },
  {
    question: 'What is the best next production improvement?',
    answer:
      'Replacing JSON storage with a real database such as PostgreSQL would be the most practical next step for reliability and long-term lead handling.',
  },
]

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <SectionReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-surge">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-white">Questions a real buyer or reviewer would ask.</h2>
          <p className="mt-4 text-lg text-slate-300">
            These answers make the project feel more grounded in actual product conversations instead of staying purely visual.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex

            return (
              <div key={faq.question} className="rounded-[26px] border border-white/10 bg-white/5 p-5 shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <span className={`text-2xl text-surge transition ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pt-4' : 'max-h-0'}`}>
                  <p className="leading-8 text-slate-300">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </SectionReveal>
    </section>
  )
}

export default FaqSection
