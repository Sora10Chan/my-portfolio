import React from 'react'
import { Sparkles, Layers } from 'lucide-react'
import Button from './Button'
import heroImage from '../assets/profileimage.png'

export default function Hero() {
  return (
    <section id="home" className="hero-banner">
      <div className="hero-glow hero-glow--left" />
      <div className="hero-glow hero-glow--right" />

      <div className="layout-width hero-grid">
        <div className="hero-copy-panel">
          <h1 className="hero-title">I build web applications, machine learning solutions, and automation tools.</h1>
          <p className="hero-copy">
             Passionate about creating practical, user-focused software that solves real-world problems through clean design and modern technologies.
          </p>

          <div className="hero-actions">
            <Button href="#projects" variant="primary">Work</Button>
            <Button href="#contact" variant="secondary">Contact</Button>
          </div>
        </div>

        <div className="hero-visual-panel">
          <div className="hero-card hero-card--small">
            <img src={heroImage} alt="Profile visual" className="hero-image" />
            <div className="hero-card-footer">
              <div>
                <p className="panel-label">Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
