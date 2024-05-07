import React from 'react'
import { NavLink } from 'react-router-dom';
import App from '../App'

export default function header() {
  return (
    <div>
      <div className='flex flex-row justify-between px-24'>

        {/* name */}
        <div className='text-3xl font-extrabold self-center font-dancingScript'>
          <h1>Diya Prajapati</h1>
        </div>

        {/* other page links */}
        <div className='flex flex-row gap-20 text-end'>
          <div className='flex flex-row gap-5 self-center'>
            {/* <a href='#' className='hover-underline-animation'>Home</a>
            <a href='#'>Skills</a>
            <a href='#'>Projects</a>
            <a href='#'>Experience</a> */}
            <NavLink to='/' className='nav-link' activeClassName='active-link'>Home</NavLink>
            <NavLink to='/skill' className='nav-link' activeClassName='active-link'>Skills</NavLink>
            <NavLink to='/project' className='nav-link' activeClassName='active-link'>Projects</NavLink>
            <NavLink to='/experience' className='nav-link' activeClassName='active-link'>Experience</NavLink>
          </div>

          {/* Resume */}
          <div className='border-[2px] border-orange-600 py-2 px-4 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white hover:transition-all hover:ease-in-out duration-200'>
          <a href="https://drive.google.com/file/d/1j9VOimbCSQi_4SmMWsgcnChTIJETyxBD/view?usp=sharing"><button className='p-2'>Resume</button></a> 
          </div>
        </div>
      </div>
    </div>
  )
}