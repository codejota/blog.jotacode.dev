import { type IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

/**
 * Site configuration.
 */
type Site = {
  /**
   * The URL of the website.
   */
  url: string
  /**
   * The title of the website.
   */
  title: string
  /**
   * The name of the website.
   */
  name: string
  /**
   * The keywords of the website.
   */
  keywords: string[]
  /**
   * The title template of the website.
   * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#template
   */
  titleTemplate: string
  /**
   * The description of the website.
   */
  description: string
  /**
   * The GitHub username of the website.
   */
  githubUsername: string
  /**
   * The favicons of the website.
   */
  favicons: IconDescriptor[]
}

const prodBaseURL = 'https://blog.jotacode.dev'
const devBaseURL = 'http://blog.jotacode.dev'

const site: Site = {
  url: process.env.NODE_ENV === 'production' ? prodBaseURL : devBaseURL,
  title: 'Jota',
  name: 'Jota',
  keywords: ['jotacode', 'Next.js', 'React', 'TypeScript', 'Node.js'],
  titleTemplate: '- Jota',
  description: 'Jota • 27 y/o • Student • Full-stack Developer',
  githubUsername: 'codejota',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon.svg'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon.svg'
    }
  ]
}

export default site
