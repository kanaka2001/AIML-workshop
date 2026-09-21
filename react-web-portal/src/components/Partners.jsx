import React from 'react'
import './Partners.css'

const partners = [
  {
    logo: '☁️',
    name: 'Amazon Web Services',
    text: 'Providing the PartyRock generative AI environment and cloud learning resources that power every round of the competition.',
  },
  {
    logo: '🛠️',
    name: 'AWS Student Builder Group',
    text: 'Student tech community fostering hands-on cloud innovation and builder spirit at DBIT — organising and running the event end-to-end.',
  },
  {
    logo: '🎓',
    name: 'DBIT AIML Department',
    text: 'Department of Artificial Intelligence &amp; Machine Learning at Don Bosco Institute of Technology — hosting the premier campus hackathon.',
  },
]

const Partners = () => {
  return (
    <section className="partners section" aria-labelledby="partners-heading">
      <div className="container">
        <h2 className="section__title" id="partners-heading">Partners &amp; Organizers</h2>
        <p className="section__subtitle">
          Powered by Cloud Leaders supported by Amazon Web Services
        </p>

        <div className="partners__grid">
          {partners.map(({ logo, name, text }) => (
            <div className="partner-card" key={name}>
              <span className="partner-card__logo" aria-hidden="true">{logo}</span>
              <h3 className="partner-card__name">{name}</h3>
              <p
                className="partner-card__text"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </div>

        <div className="partners__sponsor">
          <h3 className="partners__sponsor-title">🤝 Interested in Partnering or Sponsoring?</h3>
          <p className="partners__sponsor-text">
            Join us in empowering the next generation of generative AI builders. Reach out to the organising team.
          </p>
          <a
            href="https://awsevents.dbit.edu.in/departments/aiml"
            className="btn btn--aws"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Team
          </a>
        </div>
      </div>
    </section>
  )
}

export default Partners
