/* eslint-disable jsx-a11y/anchor-is-valid */
import type { Metadata, ResolvingMetadata } from 'next'

import { getMessages } from '@/actions/guestbook'
import PageTitle from '@/components/page-title'
import site from '@/config/site'
import { getCurrentUser } from '@/lib/auth'

import Form from './form'
import Messages from './messages'
import SignIn from './sign-in'

const title = 'Guestbook'
const description = 'Sign my guestbook and share your idea.'

/**
 * The props of {@link GuestbookPage}.
 */
type GuestbookPageProps = {
  /**
   * The params of the URL.
   */
  params: Record<string, never>
  /**
   * The search params of the URL.
   */
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: GuestbookPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/guestbook`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/guestbook`,
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

export const dynamic = 'force-dynamic'

const GuestbookPage = async () => {
  const user = await getCurrentUser()
  const messages = await getMessages()

  return (
    <>
      <div className='flex items-center'>
        <h1 className='text-6xl font-bold text-red-400 dark:text-red-600'>
          Sup Folks{' '}
        </h1>
        <p className='wave text-6xl font-bold text-gray-600 dark:text-gray-200'>
          👋
        </p>
      </div>
      <div className='flex items-center'>
        <PageTitle
          title=''
          description='Feel free to share your thoughts—messages, appreciation, suggestions.  '
          animate={true}
        />
      </div>
      <div className='flex items-center justify-center text-gray-600 dark:text-gray-400'>
        <a>If you have any questions, drop them in the</a>
        <a
          href='https://github.com/codejota/blog.jotacode.dev/discussions/1'
          style={{ marginLeft: '4px' }}
          className='flex items-center justify-center font-bold text-gray-600 dark:text-gray-400'
        >
          discussion
        </a>
      </div>
      <br />
      <br />
      <div className='mx-auto max-w-lg'>
        {!user && <SignIn />}
        {user && <Form user={user} />}
        <Messages user={user ?? undefined} messages={messages} />
      </div>
    </>
  )
}

export default GuestbookPage
