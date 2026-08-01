import React from 'react'
import { motion } from 'framer-motion'

export default function Experience(){
  return (
    <section id="experience" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-6">
          <motion.div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            <div className="text-sm text-gray-500">2025</div>
            <div className="font-medium">Intern — Ollopa Corporation</div>
          </motion.div>

          <motion.div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            <div className="text-sm text-gray-500">2026</div>
            <div className="font-medium">BS Computer Science Graduate</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
