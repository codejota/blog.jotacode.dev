import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'

import { type BlogPostCore } from '@/types'

import PostCards from './post-cards'
/**
 * The props of {@link Posts}.
 */
type PostsProps = {
  /**
   * The blog posts to display.
   */
  posts: BlogPostCore[]
}

const Posts = (props: PostsProps) => {
  const { posts } = props

  return (
    <>
      {' '}
      <div className='mx-auto'>
        <div className='my-2 flex flex-col'>
          <span className='mb-1 text-4xl font-bold'> Recent Posts</span>
          <span className='mb-2 inline-block h-1 w-20 rounded bg-red-500' />
          <span className='mb-2 flex text-lg tracking-tighter text-gray-600 dark:text-gray-400'>
            Since you were last here, I&apos;ve totally leveled up my knowledge
            game.
          </span>
          <br />
        </div>
      </div>
      <PostCards posts={posts} />
      <div className='flex'>
        <Link
          href='/blog'
          className='group my-8 flex items-center gap-4 text-lg font-medium'
        >
          <span className=''>All Posts</span>
          <IconArrowRight className='h-4 w-4 text-red-400 transition duration-200 group-hover:translate-x-1' />
        </Link>
      </div>
    </>
  )
}

export default Posts
