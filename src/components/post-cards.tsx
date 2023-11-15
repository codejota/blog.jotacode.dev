'use client'
import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'
import { FaCalendar, FaEye } from 'react-icons/fa'
import { LuCoffee } from 'react-icons/lu'
import useSWR from 'swr'

import { Skeleton } from '@/components/ui'
import fetcher from '@/lib/fetcher'
import { type BlogPostCore, type Likes, type Views } from '@/types'
import cn from '@/utils/cn'

import Image from './mdx/image'

/**
 * The props of {@link PostCards}.
 */
type PostCardsProps = {
  /**
   * The blog posts to display.
   */
  posts: BlogPostCore[]
}

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  for (const card of document.querySelectorAll('[data-id="post-card"]')) {
    const target = card as HTMLDivElement
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    target.style.setProperty('--mouse-x', `${x}px`)
    target.style.setProperty('--mouse-y', `${y}px`)
  }
}

const PostCards = (props: PostCardsProps) => {
  const { posts } = props

  return (
    <div
      className='group grid gap-3 sm:grid-cols-3'
      data-testid='post-cards'
      onMouseMove={handleMouseMove}
    >
      {posts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  )
}

/**
 * The props of {@link PostCard}.
 */
type PostCardProps = BlogPostCore

const PostCard = (props: PostCardProps) => {
  const { _id, slug, title, summary, date } = props
  const [formattedDate, setFormattedDate] = React.useState('')
  const { data: viewsData, isLoading: viewsIsLoading } = useSWR<Views>(
    `/api/views?slug=${slug}`,
    fetcher
  )
  const { data: likesData, isLoading: likesIsLoading } = useSWR<Likes>(
    `/api/likes?slug=${slug}`,
    fetcher
  )

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format('MMMM DD, YYYY'))
  }, [date])

  return (
    <Link
      key={_id}
      href={`/blog/${slug}`}
      className={cn(
        'hover:border-snippet-card-animation group relative flex flex-col space-y-1 rounded-2xl   p-4 duration-150 hover:scale-105',
        'relative flex flex-col space-y-3 rounded-2xl border p-6 group-hover:after:opacity-100',
        'hover:before:opacity-100'
      )}
      data-id='post-card'
    >
      <div className='absolute inset-px -z-20 rounded-[inherit] ' />
      <Image
        src={`/images/blog/${slug}/cover.png`}
        className='justify-center rounded-lg'
        width={1250}
        height={40}
        alt={title}
      />
      <div className='grow space-y-4'>
        <div className='mt-0 flex text-sm font-bold text-gray-600'>
          <FaCalendar className='mr-1' />
          {formattedDate ?? <Skeleton className='h-5 w-10' />}
        </div>
        <h2 className='mt-0 text-xl font-bold   text-gray-600 dark:text-gray-200  '>
          {title}
        </h2>
        <div className='text-gray-500'>{summary}</div>
      </div>
      <div className='flex items-center justify-between text-sm'>
        <div className='flex items-center'>
          <LuCoffee className='mr-1' />
          {likesIsLoading ? (
            <Skeleton className='h-5 w-10 rounded-md' />
          ) : (
            <div>{likesData?.likes} Coffe&apos;s</div>
          )}
        </div>
        <div className='flex items-center '>
          <FaEye className='mr-1' />
          {viewsIsLoading ? (
            <Skeleton className='h-5 w-10 rounded-md' />
          ) : (
            <div>{viewsData?.views} views</div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default PostCards
