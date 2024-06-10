import React from 'react'
import Layout from './Layout'
import Head from './home/Head'
import AchieveList from './achievements/AchieveList';

export default function Achievements() {
  return (
    <>
        <Layout>
            <Head/>
            <h1 className='text-5xl font-bold text-center text-orange-600 underline'>Achievements</h1>
            <AchieveList/>
        </Layout> 
    </>
  )
}
