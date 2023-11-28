import {
  IconChartBar,
  IconFlame,
  IconMessageCircle,
  IconPencil
} from '@tabler/icons-react'
import {
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa'

/**
 *
 */
type HeroLinks = Array<{
  /**
   *
   */
  id: string
  /**
   *
   */
  label: string
  /**
   *
   */
  icon: React.ReactNode
  /**
   *
   */
  href: string
}>

/**
 *
 */
type HeaderLinks = Array<{
  /**
   *
   */
  icon: React.ReactNode
  /**
   *
   */
  href: string
  /**
   *
   */
  text: string
}>

/**
 *
 */
type FooterLinks = Array<{
  /**
   *
   */
  id: number
  /**
   *
   */
  links: Array<{
    /**
     *
     */
    href: string
    /**
     *
     */
    title: string
    /**
     *
     */
    icon: React.ReactNode
  }>
}>

/**
 *
 */
type FooterSocialMediaLinks = Array<{
  /**
   *
   */
  href: string
  /**
   *
   */
  title: string
  /**
   *
   */
  icon: React.ReactNode
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <IconPencil size={14} />,
    href: '/blog',
    text: 'Blog'
  },
  {
    icon: <IconMessageCircle size={14} />,
    href: '/guestbook',
    text: 'Guestbook'
  },
  {
    icon: <IconChartBar size={14} />,
    href: '/dashboard',
    text: 'Dashboard'
  },
  {
    icon: <IconFlame size={14} />,
    href: '/projects',
    text: 'Projects'
  }
]

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      {
        href: '/blog',
        title: 'Blog',
        icon: <IconPencil size={24} />
      },
      {
        href: '/about',
        title: 'About',
        icon: <IconMessageCircle size={24} />
      },
      {
        href: '/dashboard',
        title: 'Dashboard',
        icon: <IconChartBar size={24} />
      }
    ]
  },
  {
    id: 2,
    links: [
      {
        href: '/guestbook',
        title: 'Guestbook',
        icon: <FaGithub size={24} />
      },
      {
        href: '/uses',
        title: 'Uses',
        icon: <FaGithub size={24} />
      },
      {
        href: '/projects',
        title: 'Projects',
        icon: <FaGithub size={24} />
      }
    ]
  }
]

export const FOOTER_SOCIAL_MEDIA: FooterSocialMediaLinks = [
  {
    href: 'https://www.linkedin.com/in/juniorjota/',
    title: 'Linkedin',
    icon: <FaGithub size={24} />
  },
  {
    href: 'https://github.com/codejota',
    title: 'GitHub',
    icon: <FaGithub size={24} />
  },
  {
    href: 'https://www.youtube.com/codeverso',
    title: 'YouTube',
    icon: <FaGithub size={24} />
  }
]

export const HERO_LINKS: HeroLinks = [
  {
    id: 'github',
    label: 'GitHub',
    icon: <FaGithub size={24} />,
    href: 'https://github.com/codejota'
  },
  {
    id: 'youtube',
    label: 'YouTube',
    icon: <FaYoutube size={24} />,
    href: 'https://www.youtube.com/codeverso'
  },
  {
    id: 'linkedin',
    label: 'Linkedin',
    icon: <FaLinkedin size={24} />,
    href: 'https://www.linkedin.com/in/juniorjota/'
  },
  {
    id: 'mail',
    label: 'Mail',
    icon: <FaEnvelope size={24} />,
    href: 'mailto:contato@jotacode.dev'
  },
  {
    id: 'cv',
    label: 'CV',
    icon: <FaFilePdf size={24} />,
    href: 'https://cv.jotacode.dev/'
  }
]
