import React from 'react'
import Layout from './Layout'
import Head from './home/Head'
import ProjectList from './projects/ProjectList'

export default function Projects() {
  return (
    <>
        <Layout>
            <Head/>
            <h1 className='text-5xl font-bold text-center text-orange-600 underline'>Projects</h1>
            <ProjectList/>
        </Layout> 
    </>
  )
}
