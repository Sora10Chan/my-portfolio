import React from 'react'
import { motion } from 'framer-motion'

const skillList = [
  { name: 'Python', level: 100 },
  { name: 'Java', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 60 },
  { name: 'TensorFlow', level: 50 },
]

export default function Skills(){
  return (
    <section id="skills" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-4">
          {skillList.map(s => (
            <motion.div key={s.name} className="w-full" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{s.name}</span>
                <span className="text-sm text-gray-500">{s.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-3">
                <div className="bg-indigo-600 h-3 rounded-full" style={{width: `${s.level}%`}} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
