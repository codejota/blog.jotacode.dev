/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import React from 'react'
import Typewriter from 'typewriter-effect'

import { HERO_LINKS } from '@/config/links'

const Hero = () => {
  return (
    <div className='space-y-2 md:my-2'>
      <div className='flex flex-col-reverse gap-1 md:flex-row md:justify-between'>
        <div className='space-y-2 md:max-w-lg'>
          <h1 className='text-4xl font-bold  text-gray-600 dark:text-gray-200 '>
            <Link href='/about'>Junior Ribeiro</Link>
            <p className='wave text-4xl font-bold text-gray-600 dark:text-gray-200'>
              🐺
            </p>
          </h1>
          <p className=' flex text-lg tracking-tighter text-gray-600 dark:text-gray-400'>
            27 y/o • FullStack Developer at Magna.{' '}
            <span className='ml-2'>
              <a
                href='https://www.magna.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/images/magna.png'
                  alt='Magna Logo'
                  style={{ width: '22px', height: 'auto', display: 'block' }}
                />
              </a>
            </span>
          </p>
          <Typewriter
            options={{
              strings: [
                ' Hello World',
                ' I live in São Paulo, Brazil.',
                ' Never stop learning, never stop coding.',
                ' Exploring the world one byte at a time: A Developer Journal.',
                ' Learning new things everyday.',
                ' Thoughts, stories and ideas.',
                ' Coding with a cup of coffee in hand.',
                ' Turning code into art, one line at a time.',
                ' Exploring the world of code and coffee.',
                ' Every bug is just a new challenge to overcome.',
                ' Drawing inspiration from the world, one pixel at a time.',
                ' Building software that changes lives.',
                ' Code, coffee, and creativity - my daily routine.',
                ' Learning is a lifelong adventure, and code is the compass.',
                ' Coding, drawing, and dreaming of a better world.'
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
        <div className='relative h-0 w-0 md:h-0 md:w-0'>
          {/* <Image
            src='/images/avatar.png'
            className='rounded-full'
            width={112}
            height={112}
            alt='Jota Ribeiro Avatar'
            loading='eager'
            priority
          /> */}
          <div className='absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-0 blur-2xl md:opacity-50' />
        </div>
      </div>
      <div className='flex gap-2'>
        {HERO_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-label={link.label}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Hero
