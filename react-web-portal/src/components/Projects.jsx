import React from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description:
      'A full-stack web application that does something amazing. Built with React, Node.js, and MongoDB. Replace this with your actual project description.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
  {
    id: 2,
    title: 'Project Two',
    description:
      'A machine learning model that predicts something interesting. Trained using Python and scikit-learn. Replace this with your actual project description.',
    tags: ['Python', 'scikit-learn', 'Pandas'],
    github: 'https://github.com/',
    live: null,
  },
  {
    id: 3,
    title: 'Project Three',
    description:
      'A mobile-responsive portfolio website built with modern web technologies. Replace this with your actual project description.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
  {
    id: 4,
    title: 'Project Four',
    description:
      'A RESTful API service with authentication and CRUD operations. Replace this with your actual project description.',
    tags: ['Node.js', 'Express', 'JWT'],
    github: 'https://github.com/',
    live: null,
  },
]

const Projects = () => {
  return (
    <section id="projects" className="projects section" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className="section__title">Projects</h2>
        <p className="section__subtitle">Things I've built</p>

        <div className="projects__grid">
          {projects.map(({ id, title, description, tags, github, live }) => (
            <article key={id} className="project-card">
              {/* Placeholder project image/icon */}
              <div className="project-card__thumbnail" aria-hidden="true">
                <span className="project-card__icon">{'</>'}</span>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__desc">{description}</p>

                <ul className="project-card__tags" role="list" aria-label="Technologies used">
                  {tags.map((tag) => (
                    <li key={tag} className="project-card__tag">{tag}</li>
                  ))}
                </ul>
              </div>

              <div className="project-card__links">
                <a href={github} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`View ${title} source code on GitHub`}>
                  GitHub
                </a>
                {live && (
                  <a href={live} target="_blank" rel="noopener noreferrer" className="project-card__link project-card__link--live" aria-label={`View ${title} live demo`}>
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
