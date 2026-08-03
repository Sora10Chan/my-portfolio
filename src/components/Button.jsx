import React from 'react'

function joinClasses(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const baseClass = 'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200'
  const variants = {
    primary: 'bg-[#a26c45] text-white hover:bg-[#8f5538]',
    secondary: 'border border-[#a26c45] bg-[#fff5eb] text-[#4d3b2e] hover:bg-[#fce8d6]',
  }

  const finalClass = joinClasses(baseClass, variants[variant] || variants.primary, className)

  if (href) {
    return (
      <a href={href} className={finalClass} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  )
}
