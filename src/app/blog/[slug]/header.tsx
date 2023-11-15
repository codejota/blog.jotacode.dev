/* eslint-disable prettier/prettier */
'use client'

import dayjs from 'dayjs'
import React from 'react'
import { useEvent } from 'react-use'
import useSWR from 'swr'

import ImageZoom from '@/components/image-zoom'
import Image from '@/components/mdx/image'
import { Skeleton } from '@/components/ui'
import fetcher from '@/lib/fetcher'
import { type Views } from '@/types'

/**
 * The props of {@link Header}.
 */
type HeaderProps = {
  /**
   * The published date of the blog post.
   */
  date: string
  /**
   * The title of the blog post.
   */
  title: string
  /**
   * The slug of the blog post.
   */
  slug: string
}

const Header = (props: HeaderProps) => {
  const { date, title, slug } = props
  const [formattedDate, setFormattedDate] = React.useState('')
  const { data: viewsData, isLoading: viewsIsLoading } = useSWR<Views>(
    `/api/views?slug=${slug}`,
    fetcher
  )
  const [commentCounter, setCommentCounter] = React.useState(-1)

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format('MMMM DD, YYYY'))
  }, [date])

  React.useEffect(() => {
    const increment = async () => {
      await fetch('/api/views', {
        method: 'POST',
        body: JSON.stringify({
          slug
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    increment()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEvent('message', (e: MessageEvent) => {
    if (e.origin !== 'https://giscus.app') return
    if (!(typeof e.data === 'object' && e.data.giscus)) return

    const giscus = e.data.giscus

    if (giscus.error) {
      setCommentCounter(0)
      return
    }

    if (giscus.discussion) {
      setCommentCounter(
        (giscus.discussion.totalCommentCount as number) +
        (giscus.discussion.totalReplyCount as number)
      )
    }
  })

  return (
    <div className='space-y-12 py-12'>
      <div className='space-y-12 sm:px-8'>
        <h1 className='text-center font-calcom text-4xl font-bold md:text-5xl'>
          {title}
        </h1>
        <ImageZoom
          zoomImg={{
            src: `/images/blog/${slug}/cover.png`,
            alt: title
          }}
        >
          <Image
            src={`/images/blog/${slug}/cover.png`}
            className='rounded-lg'
            width={1200}
            height={630}
            lazy={false}
            alt={title}
          />
        </ImageZoom>
        <div className='grid grid-cols-2 text-sm max-md:gap-4 md:grid-cols-4'>
          <div className='space-y-1 md:mx-auto'>
            <div className='text-muted-foreground'>Written by</div>
            <a
              href='https://github.com/codejota'
              rel='noopener noreferrer'
              target='_blank'
              className='flex items-center gap-2'
            >
              <Image
                src='/images/avatar.png'
                className='rounded-full'
                width={24}
                height={24}
                alt='Jota'
              />
              Jota
            </a>
          </div>
          <div className='space-y-1 md:mx-auto'>
            <div className='text-muted-foreground'>Posted on</div>
            <div>
              {formattedDate || <Skeleton className='h-6 w-32 rounded-md' />}
            </div>
          </div>
          <div className='space-y-1 md:mx-auto'>
            <div className='text-muted-foreground'>Views</div>
            {viewsIsLoading ? (
              <Skeleton className='h-6 w-32 rounded-md' />
            ) : (
              <div>{viewsData?.views}</div>
            )}
          </div>
          <div className='space-y-1 md:mx-auto'>
            <div className='text-muted-foreground'>Comments</div>
            {commentCounter === -1 ? (
              <Skeleton className='h-6 w-32 rounded-md' />
            ) : (
              <div>{commentCounter}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
