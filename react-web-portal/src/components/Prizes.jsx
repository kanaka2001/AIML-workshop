import React from 'react'
import './Prizes.css'

const podium = [
  { medal: '🥇', place: 'First Place Winner',          variant: 'gold'   },
  { medal: '🥈', place: 'First Runner-up Winner',       variant: 'silver' },
  { medal: '🥉', place: 'Second Runner-up Winner',      variant: 'bronze' },
]

const Prizes = () => {
  return (
    <section id="prizes" className="prizes section" aria-labelledby="prizes-heading">
      <div className="container">
        <h2 className="section__title" id="prizes-heading">Rewards &amp; Recognition</h2>
        <p className="section__subtitle">Winner Podium</p>

        <div className="prizes__podium">
          {podium.map(({ medal, place, variant }) => (
            <div className={`prize-card prize-card--${variant}`} key={place}>
              <span className="prize-card__medal" aria-hidden="true">{medal}</span>
              <h3 className="prize-card__place">{place}</h3>
              <p className="prize-card__label">Special prize + Certificate of Merit</p>
            </div>
          ))}
        </div>

        <div className="prizes__cert">
          <span className="prizes__cert-icon" aria-hidden="true">🎓</span>
          <h3 className="prizes__cert-title">Certificates for Everyone</h3>
          <p className="prizes__cert-text">
            <strong>Official Certificates of Merit</strong> for all Top 20 Finalists.<br />
            <strong>Certificates of Participation</strong> for every registered builder who competes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prizes
