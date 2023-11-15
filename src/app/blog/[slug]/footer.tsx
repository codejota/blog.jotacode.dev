'use client'

import dayjs from 'dayjs'
import React from 'react'

import { Skeleton } from '@/components/ui'

const editURL = (slug: string) =>
  `https://github.com/codejota/blog.jotacode.dev/blob/main/src/content/blog/${slug}.mdx?plain=1`

/**
 * The props of {@link Footer}.
 */
type FooterProps = {
  /**
   * The slug of the blog post.
   */
  slug: string
  /**
   * The last modified time of the blog post.
   */
  modifiedTime: string
}

const Footer = (props: FooterProps) => {
  const { slug, modifiedTime } = props

  const [formattedDate, setFormattedDate] = React.useState('')

  React.useEffect(() => {
    setFormattedDate(dayjs(modifiedTime).format('DD/MM/YYYY'))
  }, [modifiedTime])

  return (
    <div className='my-8 flex w-full items-center justify-between py-4 text-sm max-sm:flex-col max-sm:items-start max-sm:gap-4'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={editURL(slug)}
        className='text-muted-foreground transition-colors duration-150 hover:text-foreground'
      >
        Edit on GitHub
      </a>
      {formattedDate ? (
        <div className='text-muted-foreground'>
          Last updated: {formattedDate}
        </div>
      ) : (
        <Skeleton className='h-6 w-32 rounded-md' />
      )}
    </div>
  )
}

export default Footer
