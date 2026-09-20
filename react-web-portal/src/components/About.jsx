import React from 'react'
import './About.css'

const About = () => {
  const details = [
    { label: 'Name', value: 'Your Name' },
    { label: 'Degree', value: 'B.Tech in Computer Science' },
    { label: 'University', value: 'Your University Name' },
    { label: 'Year', value: '3rd Year (2024–2025)' },
    { label: 'Location', value: 'Your City, Country' },
    { label: 'Email', value: 'your.email@example.com' },
  ]

  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section__title">About Me</h2>
        <p className="section__subtitle">Get to know me better</p>

        <div className="about__grid">
          {/* Text side */}
          <div className="about__text">
            <p>
              Hello! I'm a passionate and dedicated Computer Science student with a strong interest in
              web development, machine learning, and problem-solving. I love turning ideas into reality
              through clean and efficient code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or participating in hackathons. I'm always eager to learn and grow as a developer.
            </p>
            <p>
              I'm currently looking for internship and collaboration opportunities where I can apply my
              skills and continue to learn from experienced professionals.
            </p>

            {/* Resume download — replace href with actual resume file path */}
            <a href="/resume.pdf" download className="btn btn--primary about__resume-btn" aria-label="Download Resume PDF">
              Download Resume
            </a>
          </div>

          {/* Details side */}
          <div className="about__details">
            <h3 className="about__details-title">Personal Details</h3>
            <ul className="about__details-list" role="list">
              {details.map(({ label, value }) => (
                <li key={label} className="about__details-item">
                  <span className="about__details-label">{label}:</span>
                  <span className="about__details-value">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
