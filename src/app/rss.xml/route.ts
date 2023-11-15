import { NextResponse } from 'next/server'
import RSS from 'rss'

import site from '@/config/site'
import getAllPosts from '@/lib/mdx'

export const GET = () => {
  const feed = new RSS({
    title: "Jota's Blog",
    description: 'A personal website and blog by Jota.',
    site_url: `${site.url}`,
    feed_url: `${site.url}/feed.xml`,
    language: 'en-US',
    image_url: `${site.url}/images/og.png`
  })

  const allPosts = getAllPosts()

  allPosts.map((post) => {
    const { title, summary, date, slug } = post

    feed.item({
      title,
      url: `${site.url}/blog/${slug}`,
      date,
      description: summary,
      author: 'Jota'
    })
  })

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
