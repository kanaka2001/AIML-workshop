import React from 'react'
import './Skills.css'

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Java', level: 70 },
      { name: 'C/C++', level: 65 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'Tailwind CSS', level: 75 },
    ],
  },
  {
    category: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'SQL', level: 72 },
      { name: 'REST APIs', level: 75 },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="skills section" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" className="section__title">Skills</h2>
        <p className="section__subtitle">Technologies I work with</p>

        <div className="skills__grid">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="skills__card">
              <h3 className="skills__category">{category}</h3>
              <ul className="skills__list" role="list">
                {skills.map(({ name, level }) => (
                  <li key={name} className="skills__item">
                    <div className="skills__item-header">
                      <span className="skills__name">{name}</span>
                      <span className="skills__percent">{level}%</span>
                    </div>
                    <div className="skills__bar" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} proficiency: ${level}%`}>
                      <div className="skills__bar-fill" style={{ width: `${level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
