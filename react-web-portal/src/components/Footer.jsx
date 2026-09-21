import React from 'react'
import './Footer.css'

const footerLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Rounds',   href: '#rounds'   },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Prizes',   href: '#prizes'   },
  { label: 'FAQ',      href: '#faq'      },
  { label: 'Contact',  href: '#contact'  },
]

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <span className="footer__logo">⚡ PartyRock Hack</span>
            <p className="footer__tagline">
              Empowering AIML Builders with AWS Generative AI &amp; Cloud Innovation.
            </p>
            <p className="footer__org">
              AWS Student Builder Group in association with<br />
              Department of AIML, Don Bosco Institute of Technology.
            </p>
          </div>

          {/* Quick links */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h3 className="footer__nav-title">Quick Links</h3>
            <ul className="footer__nav-list" role="list">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer__nav-link">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Register CTA */}
          <div className="footer__cta">
            <h3 className="footer__cta-title">Ready to Build?</h3>
            <p className="footer__cta-text">
              Secure your spot before seats fill up.<br />
              Solo Entry — ₹50
            </p>
            <a
              href="https://awsevents.dbit.edu.in/departments/aiml"
              className="btn btn--aws"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
            <div className="footer__social">
              <a
                href="mailto:awsstudentbuildergroup.dbit@gmail.com"
                className="footer__social-link"
                aria-label="Email us"
              >
                ✉️
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__venue">
            📍 SH001 Hall, Don Bosco Institute of Technology, Bengaluru — 560074
          </p>
          <p className="footer__copy">
            © 2026 PartyRock Hack · Department of AIML, Don Bosco Institute of Technology. All rights reserved.
          </p>
          <a href="#home" className="footer__back-top" aria-label="Back to top">
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
