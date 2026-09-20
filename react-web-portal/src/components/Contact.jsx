import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up to a real email service (e.g. EmailJS, Formspree)
    // For now, just simulate success
    if (formData.name && formData.email && formData.message) {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      icon: '✉️',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/',
      icon: '💼',
    },
    {
      label: 'GitHub',
      value: 'github.com/yourusername',
      href: 'https://github.com/',
      icon: '💻',
    },
    {
      label: 'Location',
      value: 'Your City, Country',
      href: null,
      icon: '📍',
    },
  ]

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className="section__title">Contact Me</h2>
        <p className="section__subtitle">Let's get in touch</p>

        <div className="contact__grid">
          {/* Contact info */}
          <div className="contact__info">
            <p className="contact__intro">
              I'm currently open to internship opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <ul className="contact__list" role="list">
              {contactInfo.map(({ label, value, href, icon }) => (
                <li key={label} className="contact__item">
                  <span className="contact__icon" aria-hidden="true">{icon}</span>
                  <div>
                    <span className="contact__label">{label}</span>
                    {href ? (
                      <a href={href} className="contact__value contact__value--link" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {value}
                      </a>
                    ) : (
                      <span className="contact__value">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <form className="contact__form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <div className="form__group">
              <label htmlFor="name" className="form__label">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form__input"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form__group">
              <label htmlFor="email" className="form__label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form__input"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form__group">
              <label htmlFor="message" className="form__label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form__textarea"
                placeholder="Write your message here..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            {status === 'success' && (
              <p className="form__feedback form__feedback--success" role="status">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form__feedback form__feedback--error" role="alert">
                ⚠️ Please fill in all fields before submitting.
              </p>
            )}

            <button type="submit" className="btn btn--primary form__submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
