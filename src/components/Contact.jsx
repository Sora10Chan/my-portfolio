import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="text-sm text-gray-500">Email</div>
            <div className="font-medium">your.email@example.com</div>

            <div className="text-sm text-gray-500">GitHub</div>
            <div className="font-medium">github.com/your-username</div>

            <div className="text-sm text-gray-500">LinkedIn</div>
            <div className="font-medium">linkedin.com/in/your-profile</div>
          </div>

          <form className="space-y-3 bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
            <input className="w-full p-2 border rounded" placeholder="Your name" />
            <input className="w-full p-2 border rounded" placeholder="Your email" />
            <textarea className="w-full p-2 border rounded" rows={4} placeholder="Message" />
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
