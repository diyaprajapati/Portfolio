import React from 'react'
import project from './project.json'
import Project from './Project'

export default function ProjectList() {
  return (
    <div className='flex flex-wrap justify-center'>
        {project.map((ele) => {
            return <Project
                image = {ele.image}
                title = {ele.title}
                about = {ele.about}
                link = {ele.link}
            />
        })}
    </div>
  )
}
