import React from 'react'

export default function Project(props) {

    const {image, title, about, link} = props;

  return (
    <div className='inline-block w-1/3 p-10 gap-2'>
        <div className='bg-white rounded-2xl shadow-md p-5 hover:scale-105 hover:transition-all hover:ease-in-out duration-200'>
            {/* image */}
            <div>
                <img src={image} width={500} atl={title} className=' w-2/4rounded-t-lg border-[2px]'></img>
            </div>

            {/* other info like name, links etc */}
            <div className='p-4'>
                <h1 className='text-center font-bold text-2xl m-3'>{title}</h1>
                <h2 className='font-semibold text-gray-500 m-2'>{about}</h2>
                <a href={link} className='m-2 cursor-pointer text-blue-600 font-semibold hover:text-blue-800 hover:underline'>Go to the link</a>
            </div>
        </div>
    </div>
  )
}
