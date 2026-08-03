import React from 'react'
import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <section id="certificates" className="section-break section-break--cream">
      <div className="layout-width certificates-section">
        <div className="section-heading">
          <span className="section-label">Certificates</span>
          <h2>Certifications.</h2>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <article key={cert} className="certificate-card">
              <span className="certificate-provider">Certificate</span>
              <h3>{cert}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
