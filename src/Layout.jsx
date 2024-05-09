import React from 'react'

export default function Layout({children}) {
  return (
      <div className="py-4 flex flex-col gap-12 font-inter overflow-hidden no-scrollbar md:gap-10">
        {children}
      </div>
  )
}
