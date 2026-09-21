import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About',    href: '#about'    },
    { label: 'Rounds',   href: '#rounds'   },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Prizes',   href: '#prizes'   },
    { label: 'FAQ',      href: '#faq'      },
    { label: 'Contact',  href: '#contact'  },
  ]

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" aria-label="PartyRock Hack home">
          <span className="navbar__logo-text">⚡ PartyRock Hack</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Register CTA */}
        <a
          href="https://awsevents.dbit.edu.in/departments/aiml"
          className="navbar__register"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Register for PartyRock Hack — ₹50"
        >
          Register — ₹50
        </a>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="navbar__mobile-menu" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__mobile-link" onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://awsevents.dbit.edu.in/departments/aiml"
              className="navbar__mobile-link navbar__mobile-register"
              onClick={handleLinkClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register — ₹50
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
