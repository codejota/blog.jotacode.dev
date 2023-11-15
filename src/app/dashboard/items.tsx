/* eslint-disable unicorn/prefer-logical-operator-over-ternary */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable unicorn/consistent-function-scoping */
'use client'
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconClock,
  IconPencil,
  IconUser
} from '@tabler/icons-react'
import dayjs from 'dayjs'
import React from 'react'
import {
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoWindows,
  BiRun,
  BiSolidMedal,
  BiSolidTerminal
} from 'react-icons/bi'
import { FaRedhat, FaRoad, FaStrava } from 'react-icons/fa'
import useSWR from 'swr'

import { Skeleton } from '@/components/ui'
import fetcher from '@/lib/fetcher'
import {
  type CombinedWakatimeData,
  type Github,
  type Likes,
  type StravaData,
  type Views,
  type YouTube
} from '@/types'

/**
 *
 */
type Card = {
  /**
   *
   */
  icon: React.ReactNode
  /**
   *
   */
  title: string
  /**
   *
   */
  link: string
  /**
   *
   */
  value: number | string | React.ReactNode | undefined
}

const Items = () => {
  const { data: youtubeData } = useSWR<YouTube>('/api/youtube', fetcher)
  const { data: githubData } = useSWR<Github>('/api/github', fetcher)
  const { data: likesData } = useSWR<Likes>('/api/likes', fetcher)
  const { data: viewsData } = useSWR<Views>('/api/views', fetcher)
  const { data: stravaData } = useSWR<StravaData>('/api/strava', fetcher, {
    refreshInterval: 3_600_000
  })
  const { data: wakatimeData } = useSWR<CombinedWakatimeData>(
    '/api/wakatime',
    fetcher
  )

  const getAge = () =>
    (
      dayjs().diff('1996-01-05', 'milliseconds') /
      (365.25 * 24 * 60 * 60 * 1000)
    ).toFixed(9)

  const [age, setAge] = React.useState(getAge())
  const [mounted, setMounted] = React.useState(false)

  setInterval(() => {
    setAge(getAge())
  }, 10)

  React.useEffect(() => {
    setMounted(true)
  }, [])
  const formatOperatingSystemsCard = (
    wakatimeData: CombinedWakatimeData | undefined
  ) => {
    if (!wakatimeData || !wakatimeData.operating_systems) {
      return ''
    }

    const topOperatingSystems = wakatimeData.operating_systems
      .sort((a, b) => b.total_seconds - a.total_seconds)
      .slice(0, 3)

    return topOperatingSystems.map((os) => {
      let icon
      switch (os.name) {
        case 'Windows': {
          icon = <BiLogoWindows size={24} />

          break
        }
        case 'WSL': {
          icon = <BiSolidTerminal size={24} />

          break
        }
        case 'Linux': {
          icon = <FaRedhat size={24} />

          break
        }
        // No default
      }

      return (
        <div
          key={os.name}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '-15px'
          }}
        >
          {icon && React.cloneElement(icon, { style: { marginRight: '10px' } })}
          <span
            style={{
              marginRight: '50px',
              width: '20px',
              display: 'inline-block',
              fontSize: '12px'
            }}
          >
            {os.name}:
          </span>
          <div
            style={{
              height: '20px',
              width: '40%',
              backgroundColor: '#363232',
              borderRadius: '5px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid white'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${os.percent}%`,
                background: 'linear-gradient(to right, orange, red)',
                position: 'absolute'
              }}
            />
          </div>
          <div
            style={{
              marginLeft: '10px',
              fontSize: '12px'
            }}
          >
            {`${Math.round(os.total_seconds / 60 / 60)} hrs (${Math.round(
              os.percent
            )}%)`}
          </div>
        </div>
      )
    })
  }
  const formatDistance = (distance: number | undefined): string => {
    if (distance === undefined) return ''

    const kilometers = (distance / 1000).toFixed(1)
    return `${kilometers} km`
  }

  const formatTime = (time: string | undefined): string => {
    if (time === undefined) return ''

    const hours = Math.floor(Number(time) / 3600)
    const minutes = Math.floor((Number(time) % 3600) / 60)

    return `${hours}h ${minutes}min`
  }

  const formatTotalSteps = (totalSteps: string | undefined): string => {
    if (totalSteps === undefined) return ''

    const formattedTotalSteps = Number(totalSteps).toLocaleString('en-US', {
      maximumFractionDigits: 0
    })
    return formattedTotalSteps.slice(0, 7)
  }

  const formatLanguagesCard = (
    wakatimeData: CombinedWakatimeData | undefined
  ) => {
    if (!wakatimeData || !wakatimeData.languages) {
      return ''
    }

    const topLanguages = wakatimeData.languages
      .sort((a, b) => b.total_seconds - a.total_seconds)
      .slice(0, 3)

    return topLanguages.map((lang) => {
      let icon
      switch (lang.name) {
        case 'HTML': {
          icon = <BiLogoHtml5 size={24} />

          break
        }
        case 'TypeScript': {
          icon = <BiLogoTypescript size={24} />

          break
        }
        case 'JavaScript': {
          icon = <BiLogoJavascript size={24} />

          break
        }
        // No default
      }

      return (
        <div
          key={lang.name}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '-15px'
          }}
        >
          {icon && React.cloneElement(icon, { style: { marginRight: '10px' } })}
          <span
            style={{
              marginRight: '50px',
              width: '20px',
              display: 'inline-block',
              fontSize: '12px'
            }}
          >
            {lang.name}:
          </span>
          <div
            style={{
              height: '20px',
              width: '40%',
              backgroundColor: '#363232',
              borderRadius: '5px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid white'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${lang.percent}%`,
                background: 'linear-gradient(to right, orange, red)',
                position: 'absolute'
              }}
            />
          </div>
          <div
            style={{
              marginLeft: '10px',
              fontSize: '12px'
            }}
          >
            {`${Math.round(lang.total_seconds / 60 / 60)} hrs (${Math.round(
              lang.percent
            )}%)`}
          </div>
        </div>
      )
    })
  }

  const data: Card[] = [
    {
      title: 'Strava Activities',
      link: 'https://www.strava.com/athletes/112657245',
      value: (
        <div>
          <p
            className='flex items-center text-base font-medium'
            style={{ fontSize: '15px', marginRight: '25px' }}
          >
            {<BiSolidMedal size={24} />} Total Runs:{' '}
            {stravaData?.totalActivities}
          </p>
          <p
            className='flex items-center text-base font-medium'
            style={{ fontSize: '15px', marginRight: '25px' }}
          >
            {<FaRoad size={24} />} Total Distance:{' '}
            {formatDistance(stravaData?.totalDistance)}
          </p>
        </div>
      ),
      icon: <FaStrava />
    },
    {
      title: 'Strava Activities',
      link: 'https://www.strava.com/athletes/112657245',
      value: (
        <div>
          <p
            className='flex items-center text-base font-medium'
            style={{ fontSize: '15px', marginRight: '45px' }}
          >
            {<IconClock size={24} />} Total Time:{' '}
            {formatTime(stravaData?.totalMovingTime)}
          </p>
          <p
            className='flex items-center text-base font-medium'
            style={{ fontSize: '15px', marginRight: '45px' }}
          >
            {<BiRun size={24} />} Total Steps:{' '}
            {formatTotalSteps(stravaData?.totalSteps)}
          </p>
        </div>
      ),
      icon: <FaStrava />
    },
    {
      title: 'My Age',
      link: '/about',
      value: age,
      icon: <IconUser />
    },
    {
      title: 'Coding Hours',
      link: 'https://wakatime.com/@codejota',
      value: wakatimeData?.seconds
        ? `${Math.round(wakatimeData.seconds / 60 / 60)} hrs`
        : undefined,
      icon: <IconClock />
    },
    {
      title: 'Top Languages',
      link: 'https://wakatime.com/@codejota',
      value: formatLanguagesCard(wakatimeData),
      icon: <IconPencil />
    },
    {
      title: 'Top Operating Systems',
      link: 'https://wakatime.com/@codejota',
      value: formatOperatingSystemsCard(wakatimeData),
      icon: <IconClock />
    },
    {
      title: 'YouTube Subscribers',
      link: 'https://youtube.com/@codeverso',
      value: youtubeData?.subscribers,
      icon: <IconBrandYoutube />
    },
    {
      title: 'YouTube Views',
      link: 'https://youtube.com/@codeverso',
      value: youtubeData?.views,
      icon: <IconBrandYoutube />
    },
    {
      title: 'GitHub Followers',
      link: 'https://github.com/codejota',
      value: githubData?.followers,
      icon: <IconBrandGithub />
    },
    {
      title: 'GitHub Stars',
      link: 'https://github.com/codejota',
      value: githubData?.stars,
      icon: <IconBrandGithub />
    },
    {
      title: 'Blog Total Views',
      link: 'https://blog.jotacode.dev',
      value: viewsData?.views,
      icon: <IconPencil />
    },
    {
      title: 'Blog Total Likes',
      link: 'https://blog.jotacode.dev',
      value: likesData?.likes,
      icon: <IconPencil />
    }
  ]

  return (
    <>
      <div className='mb-4 grid gap-4 sm:grid-cols-2 '>
        {mounted &&
          data.map((item) => {
            const { icon, link, title, value } = item

            return (
              <a
                key={title}
                target='_blank'
                rel='noopener noreferrer'
                href={link}
                className='hover:border-snippet-card-animation  hover:bg-accent-1 flex flex-col gap-2 rounded-lg border p-4 transition-colors duration-150'
              >
                <div className='flex items-center gap-1'>
                  {icon}
                  <div className='text-sm font-bold'>{title}</div>
                </div>
                <div className='text-accent-fg text-4xl font-black'>
                  {value ? value : <Skeleton className='h-10' />}
                </div>
              </a>
            )
          })}
      </div>
    </>
  )
}

export default Items
