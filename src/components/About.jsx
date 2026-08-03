import React from 'react'

export default function About() {
  return (
    <section id="about" className="section-break section-break--cream">
      <div className="layout-width about-section">
        <div className="about-intro">
          <span className="section-label">About</span>
          <h2>About Me</h2>
          <p>
            I'm a Computer Science graduate specializing in Intelligent Systems with hands-on experience in web development, machine learning, and software development. I enjoy building practical software that solves real-world problems and continuously improving my technical skills.
          </p>
          <div className="about-divider" />
        </div>

        <div className="about-cards">
          <div className="info-card">
            <h3>🎓 Education</h3>
            <p>BS Computer Science<br />Intelligent Systems</p>
          </div>
          <div className="info-card">
            <h3>💻 Focus</h3>
            <p>Web Development<br />Machine Learning<br />Automation</p>
          </div>
          <div className="info-card">
            <h3>📍 Status</h3>
            <p>Open to Entry-Level<br />Software Developer Roles</p>
          </div>
        </div>
      </div>
    </section>
  )
}
