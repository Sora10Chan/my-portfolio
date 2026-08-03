import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section-break section-break--light">
      <div className="layout-width projects-section">
        <div className="section-heading">
          <span className="section-label">Projects</span>

          <h2>Projects that showcase my skills and experience.</h2>

          <p>
            A collection of academic, internship, and personal projects that demonstrate my experience in web development, machine learning, and software engineering.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
