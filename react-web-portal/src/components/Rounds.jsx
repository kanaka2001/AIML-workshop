import React from 'react'
import './Rounds.css'

const rounds = [
  {
    badge: 'Round 1',
    title: 'Cloud Blitz ⛈️',
    qualifier: 'Top 50% Advance · Live AWS & Cloud Quiz',
    desc: '30 high-octane questions (MCQ / True-False) presented one at a time with live per-question countdown timers.',
    details: [
      { label: 'Format',  value: '30 Questions · Per-Q Timers' },
      { label: 'Scoring', value: 'Base 250 + Speed Bonus (max 250) + Streak (+100)' },
    ],
  },
  {
    badge: 'Round 2',
    title: 'BuildForge ⭐',
    qualifier: 'Top 20 Advance · AWS PartyRock App Building',
    desc: 'Build a functional generative AI application on AWS PartyRock using industrial problem statements and dataset challenges.',
    details: [
      { label: 'Format',     value: 'PartyRock Build + Dataset Summary' },
      { label: 'Submission', value: 'Self-Report Link + Admin Evaluation CSV' },
    ],
  },
  {
    badge: 'Round 3',
    title: 'Campus Innovator 🎓',
    qualifier: 'Podium Winners · Live On-Site Pitching',
    desc: 'Finalists build solutions for campus life problems and pitch live to an expert judging panel on site at DBIT.',
    details: [
      { label: 'Format',  value: 'Live Pitch + Demo Presentation' },
      { label: 'Judging', value: 'On-Site Judging Panel Rubric' },
    ],
  },
]

const Rounds = () => {
  return (
    <section id="rounds" className="rounds section" aria-labelledby="rounds-heading">
      <div className="container">
        <h2 className="section__title" id="rounds-heading">Competition Rounds</h2>
        <p className="section__subtitle">
          3 Sequential Live Elimination Stages
        </p>

        <div className="rounds__grid">
          {rounds.map(({ badge, title, qualifier, desc, details }) => (
            <div className="round-card" key={badge}>
              <span className="round-card__badge">{badge}</span>
              <h3 className="round-card__title">{title}</h3>
              <p className="round-card__qualifier">{qualifier}</p>
              <p className="round-card__desc">{desc}</p>
              <ul className="round-card__details">
                {details.map(({ label, value }) => (
                  <li className="round-card__detail" key={label}>
                    <strong>{label}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="rounds__live-note">
          ⚙️ Live Admin Control: Round timing and activation unlocked sequentially in real time during the event.
        </p>
      </div>
    </section>
  )
}

export default Rounds
