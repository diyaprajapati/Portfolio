import React from 'react'
import Layout from './Layout'
import Head from './home/Head'
import LangList from './skills/LangList'

export default function Skills() {
  return (
    <>
        <Layout>
            <Head/>
            <h1 className='text-5xl font-bold text-center text-orange-600 underline'>Skills</h1>
            <LangList/>
        </Layout> 
    </>
  )
}
