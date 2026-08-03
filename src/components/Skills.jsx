import React from 'react'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-break section-break--light">
      <div className="layout-width skills-section">
        <div className="section-heading">
          <span className="section-label">Skills</span>

          <h2>Technologies I use to build modern software.</h2>

          <p>
            A collection of programming languages, frameworks, tools, and technologies I've used throughout my academic, internship, and personal projects.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((category) => (
            <article key={category.category} className="skill-card">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
