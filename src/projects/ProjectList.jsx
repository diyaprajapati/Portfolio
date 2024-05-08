import React from 'react'
import project from './project.json'
import Project from './Project'

export default function ProjectList() {
  return (
    <div className="grid grid-cols-3 gap-4">
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
