import React from 'react'

export default function footer() {
  return (
    <div className='self-center flex flex-row gap-28 bg-white px-32 py-4 rounded-full drop-shadow-2xl'>
      {/* other accounts */}
      <div className='flex flex-col gap-3 font-semibold text-gray-500 text-center'>
        <h1>Check out my</h1>
        <div className='flex flex-row gap-10'>
          <a href="https://github.com/diyaprajapati"><img src='../public/github-50.png' className='hover:scale-110'></img></a>
          <a href="https://www.linkedin.com/in/diya-prajapati-453858267/"><img src='../public/linkedin_icon.png' width={48} className='hover:scale-110'></img></a>
          <a href="https://x.com/Diya0505?t=i9y-OVB4DZ6iLB8hhxHKQQ&s=09"><img src='../public/twitter-x-icon-png.png' width={47} className='hover:scale-110'></img></a>
        </div>
      </div>

      {/* vertical line */}
      <div className="border-l border-gray-400 h-20 my-auto border-r-2"></div>


      {/* email */}
      <div className='flex flex-col gap-3 font-semibold text-gray-500 text-center'>
        <h1>Contact me</h1>
        <div className='flex flex-row gap-6'>
          <img src='../public/gmail.png' width={47}></img>
          <div className='text-black self-center'>
            <h2>diyabprajapati2005@gmail.com</h2>
          </div>
        </div>
      </div>

    </div>
  )
}
