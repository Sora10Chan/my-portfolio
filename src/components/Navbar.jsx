import React, { useEffect, useRef, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navFrameRef = useRef(null)

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!menuOpen) return
      if (navFrameRef.current && !navFrameRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [menuOpen])

  return (
    <header className="topbar">
      <div className="layout-width nav-frame" ref={navFrameRef}>
        <a href="#home" className="brand-logo">
          JAYRON
        </a>

        <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            <span className="theme-label">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
