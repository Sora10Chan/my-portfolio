import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 className="text-2xl font-semibold" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}>About Me</motion.h2>
        <motion.p className="mt-4 text-gray-600 dark:text-gray-300" initial={{opacity:0}} animate={{opacity:1}}>
          Short introduction describing education and interests in machine learning and web development. Fresh graduate with experience building prototypes and deploying ML models to mobile and web.
        </motion.p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">✓ Fresh Graduate</div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">✓ Software Developer</div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">✓ Machine Learning</div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">✓ Web Development</div>
        </div>
      </div>
    </section>
  )
}
