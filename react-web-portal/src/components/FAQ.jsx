import React, { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'Who is eligible to participate in PartyRock Hack 2026?',
    a: 'Participation is exclusively for registered AIML students at Don Bosco Institute of Technology. Pre-whitelisted Gmail addresses are required for Google OAuth login access to the competition portal.',
  },
  {
    q: 'Is this a team or solo competition?',
    a: 'This is a 100% solo competition. Every participant builds and pitches independently — no teams allowed.',
  },
  {
    q: 'What is the registration entry fee?',
    a: 'The solo entry fee is ₹50. Payment is handled through the official event portal at the time of registration.',
  },
  {
    q: 'Do I need prior AWS experience to participate?',
    a: 'No prior AWS experience is needed. AWS PartyRock is a no-code generative AI builder — if you can describe a problem, you can build with it. The briefing session will walk you through everything.',
  },
  {
    q: 'What do I need to bring on event day?',
    a: 'Bring your laptop, charger, and your registered whitelisted Gmail account credentials. Make sure you have a stable browser and internet access. Your badge will be allocated at check-in.',
  },
  {
    q: 'What happens if I miss Round 1?',
    a: 'All three rounds are sequential and live. If you miss Round 1, you cannot advance to Round 2 or Round 3. Make sure you arrive before 10:45 AM.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="faq section" aria-labelledby="faq-heading">
      <div className="container">
        <h2 className="section__title" id="faq-heading">Frequently Asked Questions</h2>
        <p className="section__subtitle">Everything you need to know before event day</p>

        <ul className="faq__list" role="list">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i
            return (
              <li className={`faq__item ${isOpen ? 'faq__item--open' : ''}`} key={i}>
                <button
                  className="faq__question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="faq__question-text">{q}</span>
                  <span className={`faq__chevron ${isOpen ? 'faq__chevron--open' : ''}`} aria-hidden="true">
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="faq__answer"
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                  >
                    {a}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default FAQ
