import type { Metadata } from 'next'

import Hero from '@/components/hero'
import Posts from '@/components/posts'
import site from '@/config/site'
import getAllPosts from '@/lib/mdx'

export const metadata: Metadata = {
  alternates: {
    canonical: site.url
  }
}

export const runtime = 'edge'

const HomePage = () => {
  const posts = getAllPosts({
    limit: 1
  })

  return (
    <>
      <Hero />
      <Posts posts={posts} />
    </>
  )
}

export default HomePage
