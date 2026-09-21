import React from 'react'
import './Contact.css'

const coordinators = [
  { role: 'Faculty Co-ordinator', name: 'Mrs. Savitha B', dept: 'Assistant Professor, AI&ML' },
]

const team = [
  { name: 'Madhu T K',   role: 'AWS SBG Leader'    },
  { name: 'Navya N',     role: 'Core Member, AWS SBG' },
  { name: 'Kishan V',    role: 'Core Member, AWS SBG' },
]

const studentCoords = [
  { name: 'Basavakiran M K', dept: 'Dept. of AI&ML' },
  { name: 'Kishore V',       dept: 'Dept. of AI&ML' },
]

const Contact = () => {
  return (
    <section id="contact" className="contact section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 className="section__title" id="contact-heading">Contact &amp; Venue</h2>
        <p className="section__subtitle">Reach out before event day</p>

        <div className="contact__grid">
          {/* Venue card */}
          <div className="contact__card">
            <span className="contact__card-icon" aria-hidden="true">📍</span>
            <h3 className="contact__card-title">Event Venue</h3>
            <p className="contact__card-text">
              Don Bosco Institute of Technology<br />
              Kumbalgodu, Mysuru Road<br />
              Bengaluru — 560074<br /><br />
              <strong>Seminar Hall SH001 &amp; AIML AI Labs</strong>
            </p>
            <a
              href="https://awsevents.dbit.edu.in/departments/aiml"
              className="contact__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Venue Map ↗
            </a>
          </div>

          {/* Email card */}
          <div className="contact__card">
            <span className="contact__card-icon" aria-hidden="true">✉️</span>
            <h3 className="contact__card-title">Official Support Email</h3>
            <p className="contact__card-text">
              For whitelist queries, entry fee payment assistance, or technical support:
            </p>
            <a
              href="mailto:awsstudentbuildergroup.dbit@gmail.com"
              className="contact__email"
            >
              awsstudentbuildergroup.dbit@gmail.com
            </a>
            <a
              href="mailto:awsstudentbuildergroup.dbit@gmail.com"
              className="btn btn--aws contact__cta"
            >
              Send Email Direct ➔
            </a>
          </div>

          {/* Coordinators card */}
          <div className="contact__card">
            <span className="contact__card-icon" aria-hidden="true">👥</span>
            <h3 className="contact__card-title">Event Coordinators</h3>

            {coordinators.map(({ role, name, dept }) => (
              <div className="contact__person" key={name}>
                <span className="contact__person-role">{role}</span>
                <span className="contact__person-name">{name}</span>
                <span className="contact__person-dept">{dept}</span>
              </div>
            ))}

            <div className="contact__team-label">Organizing Team</div>
            {team.map(({ name, role }) => (
              <div className="contact__person" key={name}>
                <span className="contact__person-name">{name}</span>
                <span className="contact__person-dept">{role}</span>
              </div>
            ))}

            <div className="contact__team-label">Student Co-ordinators</div>
            {studentCoords.map(({ name, dept }) => (
              <div className="contact__person" key={name}>
                <span className="contact__person-name">{name}</span>
                <span className="contact__person-dept">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
