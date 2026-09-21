import React from 'react'
import './About.css'

const aboutBlocks = [
  {
    heading: '🎯 The Challenge',
    text: 'PartyRock Hack 2026 is an intense, one-day offline competition at Don Bosco Institute of Technology. Designed specifically for AIML students, participants solve real-world industrial and campus challenges using AWS PartyRock generative AI tools.',
  },
  {
    heading: '🤖 Powered by AWS PartyRock',
    text: 'Without needing deep infrastructure boilerplate, builders leverage Amazon Bedrock models via PartyRock to construct customised AI assistants, dataset summary engines, and interactive workflow tools — in record time.',
  },
  {
    heading: '📍 Venue & Participation',
    text: 'DBIT Campus · SH001 Hall · Offline One-Day Event. Gated access for AIML students via pre-whitelisted Gmail authentication.',
  },
]

const About = () => {
  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container">
        <h2 className="section__title" id="about-heading">About the Event</h2>
        <p className="section__subtitle">Architecting Generative AI Solutions on AWS</p>

        <p className="about__lead">
          A premier solo cloud-innovation hackathon designed to empower AIML builders to rapidly
          prototype and pitch intelligent applications — all in a single day.
        </p>

        <div className="about__grid">
          {aboutBlocks.map(({ heading, text }) => (
            <div className="about__block" key={heading}>
              <h3 className="about__block-heading">{heading}</h3>
              <p className="about__block-text">{text}</p>
            </div>
          ))}
        </div>

        {/* Organiser badge */}
        <div className="about__organiser">
          <span className="about__organiser-badge">🏫 Official Organizers</span>
          <p className="about__organiser-text">
            Hosted jointly by the <strong>Department of Artificial Intelligence &amp; Machine Learning</strong> and the{' '}
            <strong>AWS Student Builder Group at DBIT</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
