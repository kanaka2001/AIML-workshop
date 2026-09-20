import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero__container">
        {/* Profile picture placeholder */}
        <div className="hero__avatar" aria-hidden="true">
          <span className="hero__avatar-initials">YN</span>
        </div>

        <div className="hero__content">
          <p className="hero__greeting">Hi there, I'm</p>
          {/* Replace with student's name */}
          <h1 className="hero__name">Your Name</h1>
          {/* Replace with student's role / tagline */}
          <h2 className="hero__title">Computer Science Student</h2>
          {/* Replace with a short bio line */}
          <p className="hero__bio">
            Passionate about building beautiful web experiences and solving real-world problems through code.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn--outline">
              Contact Me
            </a>
          </div>

          {/* Social links — replace hrefs with actual profile URLs */}
          <div className="hero__social" aria-label="Social media links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11A1.46 1.46 0 0 1 15.84 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero__scroll-indicator" aria-label="Scroll to About section">
        <span className="hero__scroll-arrow" aria-hidden="true">↓</span>
      </a>
    </section>
  )
}

export default Hero
