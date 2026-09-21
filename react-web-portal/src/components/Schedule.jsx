import React from 'react'
import './Schedule.css'

const items = [
  { time: '09:00 AM', title: 'Check-in',  desc: 'Reporting, Gmail whitelist verification, and badge allocation — SH001, DBIT' },
  { time: '10:00 AM', title: 'Briefing',  desc: 'Opening ceremony by DBIT AIML Department and AWS SBG team — SH001 Auditorium' },
  { time: '10:45 AM', title: 'Round 1',   desc: 'Live 30-question quiz with per-question countdown timers — Online Portal' },
  { time: '11:30 AM', title: 'Results',   desc: 'Real-time score recalculation and Top 50% qualifier announcement — Leaderboard Screen' },
  { time: '11:45 AM', title: 'Round 2',   desc: 'AWS PartyRock app creation based on industrial problem statements — AI Labs / SH001' },
  { time: '01:00 PM', title: 'Evaluation', desc: 'Admin evaluation, CSV score aggregation, and Top 20 publish — Admin Portal' },
  { time: '02:00 PM', title: 'Cinema',    desc: 'Special campus screening and builder networking session — SH001 Auditorium' },
  { time: '03:15 PM', title: 'Awards',    desc: 'Prize announcements, certificate distribution, and closing ceremony — SH001 Main Stage' },
]

const Schedule = () => {
  return (
    <section id="schedule" className="schedule section" aria-labelledby="schedule-heading">
      <div className="container">
        <h2 className="section__title" id="schedule-heading">Event Schedule</h2>
        <p className="section__subtitle">One-Day Offline Hackathon · 24 September 2026</p>

        <div className="schedule__timeline">
          {items.map(({ time, title, desc }, i) => (
            <div className="timeline__item" key={i}>
              <div className="timeline__time">{time}</div>
              <div className="timeline__connector">
                <div className="timeline__dot" />
                {i < items.length - 1 && <div className="timeline__line" />}
              </div>
              <div className="timeline__body">
                <h3 className="timeline__title">{title}</h3>
                <p className="timeline__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="schedule__note">
          ⚙️ Live Admin Control: Exact round start times managed dynamically during the event.
        </p>
      </div>
    </section>
  )
}

export default Schedule
