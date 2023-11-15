import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import localFont from 'next/font/local'

import '@/styles/globals.css'
import Analytics from '@/components/analytics'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Toaster from '@/components/toaster'
import site from '@/config/site'
import cn from '@/utils/cn'

import Providers from './providers'

/**
 * The props of {@link RootLayout}.
 */
type RootLayoutProps = {
  /**
   * The child elements to render.
   */
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s ${site.titleTemplate}`
  },
  description: site.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/favicon/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    site: '@codejota',
    siteId: '1152256803746377730',
    creator: '@codejota',
    creatorId: '1152256803746377730',
    images: [`${site.url}/images/og.png`]
  },
  keywords: site.keywords,
  creator: 'codejota',
  openGraph: {
    url: site.url,
    type: 'website',
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: 'en-US',
    images: [
      {
        url: `${site.url}/images/og.png`,
        width: 1200,
        height: 630,
        alt: site.description,
        type: 'image/png'
      }
    ]
  },
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/favicon/favicon.svg',
    apple: [
      {
        url: '/favicon/favicon.svg',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [...site.favicons]
  }
}

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#ffffff20'
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#191A1A'
    }
  ]
}

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin']
})

const calcom = localFont({
  src: '../../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-calcom'
})

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html
      lang='en-US'
      className={cn(outfit.variable, calcom.variable, 'scroll-smooth')}
      suppressHydrationWarning
    >
      <body className='relative font-default'>
        <Providers>
          <Header />
          <main
            id='skip-nav'
            className='relative mx-auto mb-4 max-w-5xl px-8 py-12'
          >
            {children}
          </main>
          <Toaster />
          <Footer />
          <Analytics />
          {/* <Image
            width={1512}
            height={550}
            className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
            src='/images/gradient-background-top.png'
            alt='Gradient background'
            priority
          /> */}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
