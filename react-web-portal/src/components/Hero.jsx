import React, { useState, useEffect } from 'react'
import './Hero.css'

// Event date: 24 September 2026 09:00 AM IST
const EVENT_DATE = new Date('2026-09-24T09:00:00+05:30')

function getTimeLeft() {
  const diff = EVENT_DATE - Date.now()
  if (diff <= 0) return null
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="hero" aria-label="Event introduction">
      <div className="hero__container">

        <span className="hero__org">
          AWS Student Builder Group – DBIT × AIML Department
        </span>

        <h1 className="hero__title">PARTYROCK HACK</h1>

        <p className="hero__subtitle">Building the Future with AI</p>

        {/* Event meta */}
        <div className="hero__meta" aria-label="Event details">
          <span className="hero__meta-pill"><span>📅</span> 24 September 2026</span>
          <span className="hero__meta-pill"><span>📍</span> SH001, DBIT Campus</span>
          <span className="hero__meta-pill"><span>🎯</span> Offline · Solo</span>
        </div>

        {/* Live countdown */}
        <div className="hero__countdown" aria-label="Event countdown">
          {timeLeft ? (
            <>
              {[
                { value: pad(timeLeft.days),    label: 'Days'    },
                { value: pad(timeLeft.hours),   label: 'Hours'   },
                { value: pad(timeLeft.minutes), label: 'Mins'    },
                { value: pad(timeLeft.seconds), label: 'Secs'    },
              ].map(({ value, label }) => (
                <div className="countdown__block" key={label}>
                  <span className="countdown__value">{value}</span>
                  <span className="countdown__label">{label}</span>
                </div>
              ))}
            </>
          ) : (
            <span className="countdown__ended">⚡ Event is Live!</span>
          )}
        </div>

        {/* CTAs */}
        <div className="hero__actions">
          <a
            href="https://awsevents.dbit.edu.in/departments/aiml"
            className="btn btn--aws"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now — ₹50
          </a>
          <a href="#about" className="btn btn--outline">
            Learn More
          </a>
        </div>

        <p className="hero__solo-note">
          ⚡ <strong>Solo Entry: ₹50</strong> · AIML Department · Authorized Gmail Whitelist Portal Access
        </p>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">↓</a>
    </section>
  )
}

export default Hero
