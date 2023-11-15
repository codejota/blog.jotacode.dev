import React from 'react'

import 'tailwindcss/tailwind.css'
import Mdx from '@/components/mdx'
import PageTitle from '@/components/page-title'
import Resume from '@/components/resume'
import Timeline from '@/components/timeline'
import getPage from '@/utils/get-page'

const AboutPage = () => {
  const page = getPage('about')

  return (
    <div>
      <PageTitle title='About' description=' Leveling my Code Level 🐺' />
      <div className='flex flex-col md:flex-row'>
        <div className=' flex flex-col' />
        <div className=' '>
          <Mdx code={page.body.code} />
        </div>
      </div>

      <br />
      <Resume />
      <br />
      <Timeline />
    </div>
  )
}

export default AboutPage
