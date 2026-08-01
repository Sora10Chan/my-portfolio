import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" className="py-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="flex-1 text-center md:text-left">
          <p className="text-lg text-indigo-600 font-medium">Hi, I'm</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Jay Ron Driz</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Computer Science Graduate — Software Developer</p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-md shadow hover:bg-indigo-700">View Projects</a>
            <a href="/resume.pdf" className="inline-block border border-indigo-600 text-indigo-600 px-5 py-2 rounded-md hover:bg-indigo-50">Download CV</a>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="w-48 h-48 bg-gray-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shadow">
          {/* Placeholder for profile illustration */}
          <div className="text-sm text-gray-500">Profile illustration</div>
        </motion.div>
      </div>
    </section>
  )
}
