import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-header">
        <div>
          <p className="project-label">{project.role || 'Project'}</p>
          <h3>{project.title}</h3>
        </div>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tech.map((item) => (
          <span key={item} className="project-tag">{item}</span>
        ))}
      </div>
    </article>
  )
}
