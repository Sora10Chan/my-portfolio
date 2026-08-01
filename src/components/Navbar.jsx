import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar(){
  return (
    <header className="w-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold">Jay Ron Driz</div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800">
          <Menu />
        </button>
      </div>
    </header>
  )
}
