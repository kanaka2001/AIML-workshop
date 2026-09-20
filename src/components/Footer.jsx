import React from 'react'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__container">
        <p className="footer__copy">
          &copy; {year} <span className="footer__name">Your Name</span>. Built with React &amp; ❤️
        </p>
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#home" className="footer__link">Home</a>
          <a href="#about" className="footer__link">About</a>
          <a href="#projects" className="footer__link">Projects</a>
          <a href="#contact" className="footer__link">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
