import React from 'react'
import App from '../App'
import '../index.css'

export default function header() {
  return (
    <div>
      <div className='flex flex-row justify-between px-24'>

        {/* name */}
        <div className='text-2xl font-black self-center'>
          <h1>Diya Prajapati</h1>
        </div>

        {/* other page links */}
        <div className='flex flex-row gap-20 text-end'>
          <div className='flex flex-row gap-5 self-center'>
            <a href='#' className='hover-underline-animation'>Home</a>
            <a href='#'>Skills</a>
            <a href='#'>Projects</a>
            <a href='#'>Experience</a>
          </div>

          {/* Resume */}
          <div className='border-[2px] border-orange-600 py-2 px-4 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white hover:transition-all hover:ease-in-out duration-200'>
            <button className='p-2'>Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}
