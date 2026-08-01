import React from 'react'

const certs = ['IBM AI Literacy', 'Cisco Data Analytics', 'Node.js', 'Cybersecurity']

export default function Certificates(){
  return (
    <section id="certificates" className="py-16 bg-gray-50 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Certificates</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {certs.map(c => (
            <div key={c} className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow text-sm">{c}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
