import React from 'react'

export default function Education(){
  return (
    <section id="education" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold text-slate-900">Education</h2>
        <div className="mt-6 rounded-md border border-gray-200 bg-white p-6 text-slate-700">
          <div className="text-lg font-semibold text-slate-900">Laguna State Polytechnic University</div>
          <div className="mt-1 text-sm text-slate-500">Bachelor of Science in Computer Science</div>
          <div className="mt-1 text-sm text-slate-500">Specialization in Intelligent Systems</div>
          <div className="mt-5 text-sm leading-6 text-slate-600">
            <div className="font-medium text-slate-900">Relevant Coursework</div>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Machine Learning</li>
              <li>Software Engineering</li>
              <li>Application Development</li>
              <li>Operating Systems</li>
              <li>Networking</li>
              <li>Information Security</li>
              <li>Computer Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
