import React from 'react'
import './Highlights.css'

const cards = [
  {
    icon: '🏆',
    title: 'Solo Innovation',
    desc: '100% solo cloud competition for AIML innovators. No teams — pure individual builder spirit.',
  },
  {
    icon: '🤖',
    title: 'AWS PartyRock',
    desc: 'Generative AI app creation powered by Amazon Bedrock — no infrastructure setup required.',
  },
  {
    icon: '⚡',
    title: '3 Live Rounds',
    desc: 'Quiz Blitz → BuildForge → On-Site Judge Pitch. Rounds unlock in real time on event day.',
  },
]

const Highlights = () => {
  return (
    <section className="highlights" aria-label="Key highlights">
      <div className="container">
        <div className="highlights__grid">
          {cards.map(({ icon, title, desc }) => (
            <div className="highlights__card" key={title}>
              <span className="highlights__icon" aria-hidden="true">{icon}</span>
              <h3 className="highlights__card-title">{title}</h3>
              <p className="highlights__card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
