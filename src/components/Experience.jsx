import React from 'react'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-break section-break--cream">
      <div className="layout-width experience-section">
        <div className="section-heading">
          <span className="section-label">Experience</span>
          <h2>Experience gained through internships, academic projects, and personal development.</h2>
          <p>
            My journey in software development has allowed me to work on web applications, machine learning projects, and automation tools while continuously improving my technical and problem-solving skills.
          </p>
        </div>

        <div className="experience-grid">
          {experience.map((item) => (
            <article key={`${item.title}-${item.company}`} className="experience-card">
              <div className="experience-meta">
                <span className="experience-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                </div>
              </div>
              <ul className="experience-list">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
