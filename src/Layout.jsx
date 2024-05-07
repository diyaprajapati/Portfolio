import React from 'react'

export default function Layout({children}) {
  return (
      <div className="p-4 flex flex-col gap-12 font-inter overflow-hidden no-scrollbar">
        {children}
      </div>
  )
}
