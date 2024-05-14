import React from 'react'
import { Tilt } from 'react-tilt'

export default function Body() {
  return (

    <div className='flex flex-col-reverse px-12 lg:px-24 py-4 gap-10 md:px-16 md:flex-row'>
        {/* text */}
        <div className='flex flex-col gap-3 self-center'>
            <div className='text-3xl font-bold lg:text-4xl md:text-2xl'>
                Hey,
            </div>
            <div className='text-5xl font-extrabold lg:text-6xl md:text-4xl'>
                I'm Diya
            </div>
            <div className='text-4xl font-extrabold lg:text-5xl md:text-3xl'>
                Web Developer
            </div>
            <div className='text-2xl font-bold text-gray-600 my-5 lg:text-3xl md:text-xl'>
            I'm 19 y/o old, currently based in Nadiad, Gujarat, India. I am currently pursuing B.Tech IT at DDU.
            </div>
        </div>

        {/* photo */}
        <Tilt>
            <div className='drop-shadow-xl self-center '>
                <img src='../public/diya.png' className='md:w-[1300px] lg:w-[1100px]'></img>
            </div>
        </Tilt>

    </div>
  )
}
