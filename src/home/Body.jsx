import React from 'react'

export default function Body() {
  return (

    <div className='flex flex-row px-24 py-10 gap-10'>
        {/* text */}
        <div className='flex flex-col gap-3 self-center'>
            <div className='text-4xl font-bold'>
                Hey,
            </div>
            <div className='text-6xl font-extrabold'>
                I'm Diya
            </div>
            <div className='text-5xl font-extrabold'>
                I'm a Web Developer
            </div>
            <div className='text-3xl font-bold text-gray-600'>
            I'm 19 y/o old, currently based in Nadiad, Gujarat, India. I am currently pursuing B.Tech IT at DDU.
            </div>
        </div>

        {/* photo */}
        <div className='drop-shadow-xl'>
            <img src='../public/diya-main.png' width={800}></img>
        </div>

    </div>
  )
}
