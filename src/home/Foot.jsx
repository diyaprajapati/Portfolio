import React from 'react'

export default function footer() {
  return (
    <div className='self-center flex md:flex-row flex-col md:w-[80%] lg:w-[70%] w-[85%] py-5 rounded-xl lg:gap-28 bg-white drop-shadow-2xl lg:px-36 lg:py-6 lg:rounded-full md:px-16 md:gap-12'>
      {/* other accounts */}
      <div className='flex flex-col gap-3 font-semibold text-gray-500 text-center self-center'>
        <h1>Check out my</h1>
        <div className='flex flex-row gap-10 md:gap-6'>
          <a href="https://github.com/diyaprajapati"><img src='/github-50.png' className='hover:scale-110'></img></a>
          <a href="https://www.linkedin.com/in/diya-prajapati-453858267/"><img src='/linkedin_icon.png' className='hover:scale-110 w-[48px] md:w-[48px]'></img></a>
          <a href="https://x.com/Diya0505?t=i9y-OVB4DZ6iLB8hhxHKQQ&s=09"><img src='/twitter-x-icon-png.png' className='hover:scale-110 w-[48px] md:w-[48px]'></img></a>
        </div>
      </div>

      {/* vertical line */}
      <div className="md:border-l border-gray-400 h-5 md:h-20 my-auto md:border-r-2"></div>


      {/* email */}
      <div className='flex flex-col gap-1 md:gap-3 font-semibold text-gray-500 text-center self-center'>
        <h1>Contact me</h1>
        <div className='flex flex-row gap-6'>
          <img src='/gmail.png' width={47} className='md:w-[40px]'></img>
          <div className='text-black self-center'>
            <h2>diyabprajapati2005@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
