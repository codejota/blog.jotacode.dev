/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMarkdown,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript
} from 'react-icons/bi'
import { FaChartBar, FaDatabase, FaLinux, FaServer } from 'react-icons/fa'
import { educationData, experienceData } from 'src/data/personal-data'

import { Link } from '@/data/link'

const skills = [
  { name: 'Markdown', icon: BiLogoMarkdown },
  { name: 'Git', icon: BiLogoGit },
  { name: 'Linux', icon: FaLinux },
  { name: 'MySQL', icon: FaDatabase },
  { name: 'PowerBI', icon: FaChartBar },
  { name: 'Typescript', icon: BiLogoTypescript },
  { name: 'Javascript', icon: BiLogoJavascript },
  { name: 'Node', icon: FaServer },
  { name: 'React', icon: BiLogoReact },
  { name: 'HTML', icon: BiLogoHtml5 },
  { name: 'CSS', icon: BiLogoCss3 },
  { name: 'Tailwind', icon: BiLogoTailwindCss }
]

/**
 *
 */
export default function Resume() {
  const [tooltipSkill, setTooltipSkill] = useState('')
  return (
    <>
      {/* <PageSeo
        title={`Resume - ${siteMetadata.author}`}
        description="A dedicated and aspiring data scientist and machine learning engineer, wish to work for an institution that offers technical and personal growth."
      /> */}
      <div className='  hover:border-snippet-card-animation     mt-5 rounded-lg border-2   p-2 text-center shadow-lg  dark:border-gray-800  '>
        <div className=' border-b-2  py-2  text-xl font-medium   text-red-500 dark:border-gray-800'>
          Skills
        </div>
        <div className='my-5 flex flex-col items-center space-x-2 py-4  xl:sticky xl:top-0 '>
          <div className='flex flex-wrap items-center gap-2 pt-2 '>
            {skills.map((d) => (
              <div className='tooltip' key={d.name}>
                <div
                  className='hover-text group'
                  onMouseEnter={() => setTooltipSkill(d.name)}
                  onMouseLeave={() => setTooltipSkill('')}
                >
                  <d.icon className='h-8 w-8' />
                </div>
                {tooltipSkill === d.name && (
                  <div className='tooltip-content'>{d.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className='grid grid-cols-2 gap-4 pt-4 md:grid-cols-2  '>
        {/* #################### 1nd col #################### */}
        <div className='space-y-2'>
          {/* 1 */}
          <ResumeBlock title='Experience'>
            <ResumeContent data={experienceData} />
          </ResumeBlock>
        </div>
        {/* #################### 2nd col #################### */}
        <div className='space-y-4 '>
          {/* 1 */}
          <ResumeBlock title='Education'>
            <ResumeContent data={educationData} />
          </ResumeBlock>
          {/*  */}
        </div>
      </div>
      {/* hidden content  */}
    </>
  )
}

/**
 *
 */
function ResumeBlock({
  title,
  children
}: {
  /**
   *
   */
  title: string
  /**
   *
   */
  children: React.ReactNode
}) {
  return (
    <div className='hover:border-snippet-card-animation  mt-5 rounded-lg border-2   p-2 text-center shadow-lg  dark:border-gray-800  '>
      <div className='group '>
        <div className='bold border-b-5 py-2 text-center text-xl text-red-600 dark:border-gray-800'>
          {title}
        </div>
        <br />
        <div className='px-1 pt-2'>{children}</div>
      </div>
    </div>
  )
}
/**
 *
 */
function ResumeContent({
  data
}: {
  /**
Fffffffffffffffffffffffffffffffffff *
fffffffffffffffffffffffffffffffffff.
   */
  data: any[]
}) {
  return (
    <>
      {data.map((d: any) => (
        <div key={d.title} className='my-2'>
          <div className='flex flex-row'>
            <h2 className='flex w-full pb-2 text-lg font-semibold leading-none tracking-tight text-gray-800 dark:text-gray-100'>
              {d.title}
            </h2>{' '}
            <span className='text-md'>&nbsp;@&nbsp;</span>{' '}
            <span className=''>
              <Link href={d.url} className='company link text-red-600'>
                {d.company ? `${d.company}` : 'Credential'}
              </Link>
            </span>
          </div>
          <div className=''>
            <div className='text-sm text-gray-400 '>
              {d.range ? `${d.range}` : `${d.provider}`}
            </div>
            {d.text1 ? (
              <p
                style={{ marginTop: '10px', marginBottom: '10px' }}
                className='my-text my-3 max-w-none text-sm text-gray-700 dark:text-gray-400'
              >
                {d.text1}
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </>
  )
}
