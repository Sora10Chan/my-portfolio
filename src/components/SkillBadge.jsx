import React from 'react'

export default function SkillBadge({ skill }) {
  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between text-sm text-slate-700">
        <span className="font-medium">{skill.name}</span>
        <span className="text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-3 w-full rounded-full bg-slate-200">
        <div className="h-3 rounded-full bg-slate-900" style={{ width: `${skill.level}%` }} />
      </div>
    </div>
  )
}
