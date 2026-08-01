import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Skin Disease Recognition',
    tech: ['Flutter','TensorFlow Lite','Python'],
    github: '#',
    demo: '#'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map(p => (
            <motion.article key={p.title} className="bg-white dark:bg-slate-800 rounded-lg shadow p-4 flex flex-col" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
              <div className="h-40 bg-gray-100 dark:bg-slate-700 rounded-md flex items-center justify-center mb-4">Screenshot</div>
              <h3 className="font-semibold">{p.title}</h3>
              <div className="text-sm text-gray-500 mt-2">{p.tech.join(' • ')}</div>
              <div className="mt-4 flex gap-3">
                <a href={p.github} className="text-indigo-600 hover:underline">GitHub</a>
                <a href={p.demo} className="text-indigo-600 hover:underline">Live Demo</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
