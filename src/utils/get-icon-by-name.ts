import {
  type Icon,
  IconBrandAndroid,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandGit,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPlanetscale,
  IconBrandPrisma,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandWindows,
  IconBug,
  IconChartBar,
  IconCloud,
  IconCode,
  IconHtml,
  IconLink,
  IconLock,
  IconMarkdown,
  IconPencil,
  IconPhoto,
  IconSearch,
  IconServer,
  IconSettings,
  IconUser
} from '@tabler/icons-react'

/**
 * Get an icon component by its name.
 * @param name - The name of the icon.
 * @returns The icon component.
 */
const getIconByName = (name: string): Icon => {
  switch (name) {
    case 'Typescript': {
      return IconBrandTypescript
    }
    case 'PlanetScale': {
      return IconBrandPlanetscale
    }
    case 'Next.js': {
      return IconBrandNextjs
    }
    case 'Prisma': {
      return IconBrandPrisma
    }
    case 'MDX': {
      return IconMarkdown
    }
    case 'Tailwindcss': {
      return IconBrandTailwind
    }
    case 'Link': {
      return IconLink
    }
    case 'Pencil': {
      return IconPencil
    }
    case 'Photo': {
      return IconPhoto
    }
    case 'HTML5': {
      return IconHtml
    }
    case 'CSS3': {
      return IconBrandCss3
    }
    case 'Bootstrap': {
      return IconBrandBootstrap
    }
    case 'Javascript': {
      return IconBrandJavascript
    }
    case 'React': {
      return IconBrandReact
    }
    case 'GitHub': {
      return IconBrandGithub
    }
    case 'Git': {
      return IconBrandGit
    }
    case 'Server': {
      return IconServer
    }
    case 'Bug': {
      return IconBug
    }
    case 'Code': {
      return IconCode
    }
    case 'Docker': {
      return IconBrandDocker
    }
    case 'Nodejs': {
      return IconBrandNodejs
    }
    case 'Python': {
      return IconBrandPython
    }

    case 'Windows': {
      return IconBrandWindows
    }
    case 'Android': {
      return IconBrandAndroid
    }
    case 'ChartBar': {
      return IconChartBar
    }
    case 'Cloud': {
      return IconCloud
    }
    case 'Lock': {
      return IconLock
    }
    case 'Search': {
      return IconSearch
    }
    case 'Settings': {
      return IconSettings
    }
    case 'User': {
      return IconUser
    }
    default: {
      throw new Error('Icon not found')
    }
  }
}

export default getIconByName
