import React from 'react'

export default function Project(props) {

    const {image, title, about, link} = props;

  return ( 
        <div className='bg-white rounded-2xl shadow-md p-5 m-7 hover:scale-105 hover:transition-all hover:ease-in-out duration-200'>
            {/* image */}
            <div className='flex justify-center overflow-hidden rounded-t-lg border-2 border-gray-300'>
                <img src={image} width={500} atl={title} className='w-full h-48 object-cover'></img>
            </div>

            {/* other info like name, links etc */}
            <div className='p-4'>
                <h1 className='text-center font-bold text-2xl m-3'>{title}</h1>
                <h2 className='font-semibold text-gray-500 m-2'>{about}</h2>
                <button className='bg-green-600 px-3 py-2 mt-5 ms-2 border-green-800 rounded-lg hover:rounded-3xl hover:transition-all hover:ease-in-out duration-300'><a href={link} className='m-2 cursor-pointer text-white font-semibold' target='_blank'>Go to the link</a> </button>
            </div>
        </div>
  )
}
