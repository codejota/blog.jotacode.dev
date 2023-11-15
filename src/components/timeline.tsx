/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable sonarjs/no-all-duplicated-branches */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable github/a11y-svg-has-accessible-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Disclosure, Transition } from '@headlessui/react'
import {
  FaBabyCarriage,
  FaBookReader,
  FaCode,
  FaGraduationCap,
  FaHtml5,
  FaUserGraduate,
  FaWifi
} from 'react-icons/fa'

import { PageTitle, Subtitle } from './title'

const TimeLineInfo = [
  {
    title: 'Full Stack Developer at Magna',
    description:
      'Feeling very confident, working as a fullstack developer. Lets roll! 🚀',
    icon: FaCode,
    color: 'bg-red-500',
    dark_color: 'dark:bg-green-900',
    date: 'February 2023',
    status: 'Present'
  },
  {
    title: 'Joined Posgratuate Diploma College',
    description: ' Diploma in Full Stack Development',
    icon: FaBookReader,
    color: 'bg-red-500',
    dark_color: 'dark:bg-orange-900',
    date: 'August 2021'
  },
  {
    title: 'System Analyst at Magna',
    description:
      'work as a system analyst, and I am very happy with my job. 🤩',
    icon: FaCode,
    color: 'bg-red-500',
    dark_color: 'dark:bg-green-900',
    date: 'July 2021'
  },
  {
    title: 'Graduated Bachelor College',
    description: 'With 8.32 CGPA',
    icon: FaUserGraduate,
    color: 'bg-red-500',
    dark_color: 'dark:bg-purple-900',
    date: 'August 2021'
  },
  {
    title: 'Intern at Magna',
    description: 'Infraestruture Intern',
    icon: FaWifi,
    color: 'bg-red-500',
    dark_color: 'dark:bg-yellow-700',
    date: 'Jul 2018 - August 2021'
  },
  {
    title: 'Started College',
    description: 'Bachelor of Information Technology Management',
    icon: FaGraduationCap,
    color: 'bg-red-500',
    dark_color: 'dark:bg-red-900',
    date: 'August 2018'
  },
  {
    title: 'First Code in Windows nodepad',
    description: 'Wrote my first program in HTML',
    icon: FaHtml5,
    color: 'bg-red-500',
    dark_color: 'dark:bg-fuchsia-900',
    date: '2009'
  },
  {
    title: 'Born',
    description: 'Final version releases',
    icon: FaBabyCarriage,
    color: 'bg-red-500',
    dark_color: 'dark:bg-blue-900',
    date: 'January 5nd 1996'
  }
]

/**
 *
 */
export default function Timeline() {
  return (
    <>
      <div className='pt-10'>
        <div className=''>
          <PageTitle>Journey</PageTitle>
          <Subtitle>Growing everyday a bit.</Subtitle>
        </div>

        <ol className='relative ml-6 mt-6 border-l border-gray-400 dark:border-gray-700 '>
          {TimeLineInfo.slice(0, 1).map((d) => (
            <TimelineCard key={d.title} d={d} />
          ))}

          {TimeLineInfo.slice(1, 2).map((d) => (
            <TimelineCard key={d.title} d={d} />
          ))}

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button>
                  <div className='text-small ml-1.5 flex pt-2'>
                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 15 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className={`h-8 w-8  ${open ? 'rotate-180' : ''}`}
                    >
                      <path d='M4 6H11L7.5 10.5L4 6Z' fill='currentColor' />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter='transition duration-400 ease-in-out'
                  enterFrom='transform scale-95 opacity-0'
                  enterTo='transform scale-400 opacity-100'
                  leave='transition duration-75 ease-out'
                  leaveFrom='transform scale-100 opacity-100'
                  leaveTo='transform scale-95 opacity-0'
                >
                  <Disclosure.Panel>
                    {TimeLineInfo.slice(2).map((d) => (
                      <TimelineCard key={d.title} d={d} />
                    ))}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </ol>
      </div>
    </>
  )
}

/**
 *
 */
function TimelineCard({
  d
}: {
  /**
Fffffffffffffffffffffffffffffff *
fffffffffffffffffffffffffffffff.
   */
  d: any
}) {
  const hasStatus = d.status !== undefined

  return (
    <li key={d.title} className='timeline-item '>
      <span
        className={`timeline-icon ${d.color} flex items-center justify-center `}
      >
        {hasStatus && <></>}
        {d.icon && <d.icon className='relative h-3 w-4' />}
      </span>

      <div
        className={`timeline-content hover:border-snippet-card-animation exp-edu-box dark:text-gray-400${hasStatus ? '' : ''
          }`}
      >
        <h3 className='text-lg font-semibold leading-none tracking-tight text-gray-400 dark:text-gray-100'>
          {d.title}
        </h3>
        <time className='text-gray-500'>{d.date}</time>
        <p className='text-gray-400'>{d.description}</p>
      </div>
    </li>
  )
}
