import React from 'react'
import { AtSign, Link, FileText } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-break section-break--light">
      <div className="layout-width contact-section">
        <div className="contact-grid">
          <div className="contact-panel">
            <span className="section-label">Contact</span>
            <h2>Get in touch.</h2>
            <p>Currently seeking entry-level software development opportunities where I can contribute, learn, and grow as a developer.</p>
          </div>

          <div className="contact-cards">
            <a href="mailto:jayrondriz21@gmail.com" className="contact-card">
              <AtSign size={20} className="contact-icon" />
              <div>
                <p className="contact-card-title">Email</p>
                <p>jayrondriz21@gmail.com</p>
              </div>
            </a>
            <a href="https://github.com/Sora10Chan" className="contact-card">
              <Link size={20} className="contact-icon" />
              <div>
                <p className="contact-card-title">GitHub</p>
                <p>github.com/Sora10Chan</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/jayron-driz-858728326" className="contact-card">
              <Link size={20} className="contact-icon" />
              <div>
                <p className="contact-card-title">LinkedIn</p>
                <p>linkedin.com/in/jayron-driz-858728326</p>
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1nSIm31e5NjYARp3h_V2cJf7HmHNnc1kv/view"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card--accent"
    >
              <FileText size={20} className="contact-icon" />
              <div>
                <p className="contact-card-title">Résumé</p>
                <p>View.</p>
                </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
