/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-shadow */
import { allProjects } from 'contentlayer/generated'
import type { Metadata } from 'next'
import Link from 'next/link'

import Image from '@/components/mdx/image'
import PageTitle from '@/components/page-title'
import site from '@/config/site'
import getIconByName from '@/utils/get-icon-by-name'

const title = 'Projects'
const description = 'The list of my projects.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${site.url}/projects`
  },
  openGraph: {
    url: `${site.url}/projects`,
    type: 'website',
    title,
    siteName: site.title,
    description,
    locale: 'en-US',
    images: [
      {
        url: `${site.url}/static/images/og/og.png`,
        width: 1200,
        height: 630,
        alt: description,
        type: 'image/png'
      }
    ]
  }
}

const ProjectsPage = () => {
  return (
    <>
      <PageTitle
        title='Projects'
        description='The list of my projects. Everything was made with ❤️ and ☕ .'
      />
      <div className='flex flex-col gap-4'>
        {allProjects.map((project) => {
          const { _id, name, image, description, techstack, slug } = project

          return (
            <Link
              key={_id}
              href={`/projects/${slug}`}
              className='hover:border-snippet-card-animation border-accent-2 hover:bg-accent-1 flex flex-col rounded-lg border p-4 transition-all duration-150 hover:scale-105 md:flex-row'
            >
              <Image
                src={image}
                width={1200}
                height={630}
                alt={name}
                className='rounded-lg md:w-72'
              />
              <div className='flex-1 px-2 py-4 md:px-4 md:py-2'>
                <div>
                  <h2 className='text-accent-fg text-2xl font-bold'>{name}</h2>
                  <div className='text-accent-5'>{description}</div>
                </div>
                <div className='mt-[5px] flex flex-wrap gap-[7px]'>
                  {techstack.map((techstack) => {
                    const { label } = techstack

                    const Icon = getIconByName(label)

                    return (
                      <div
                        key={label}
                        className='border-accent-2 flex items-center justify-center gap-1 rounded-full border px-3 py-2'
                      >
                        <Icon strokeWidth={1.5} size={16} />
                        <div className='text-xs leading-4'>{label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default ProjectsPage
