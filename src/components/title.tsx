import React, { type ReactNode } from 'react'

/**
 *
 */
type PageTitleProps = {
  /**
   *
   */
  children: ReactNode
}

/**
 *
 */
export function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className='text-3xl font-bold tracking-tight  text-gray-800 dark:text-gray-100 md:text-4xl  '>
      {children}
    </h1>
  )
}

/**
 *
 */
type SubtitleProps = {
  /**
   *
   */
  children: ReactNode
}

/**
 *
 */
export function Subtitle({ children }: SubtitleProps) {
  return <p className='w-full text-gray-500 dark:text-gray-400'>{children}</p>
}
