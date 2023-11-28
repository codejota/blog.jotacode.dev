'use client'

import {
  IconBrandGithub,
  IconBrandYoutube,
  IconCommand,
  IconDeviceDesktop,
  IconUserCircle
} from '@tabler/icons-react'
import React from 'react'
import { FaFilePdf } from 'react-icons/fa'

import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui'

/**
 *
 */
type Groups = Array<{
  /**
   *
   */
  name: string
  /**
   *
   */
  actions: Array<{
    /**
     *
     */
    title: string
    /**
     *
     */
    icon: React.ReactNode
    /**
     *
     */
    onSelect: () => void
  }>
}>

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((value) => !value)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  const groups: Groups = [
    {
      name: 'General',
      actions: [
        {
          title: 'About',
          icon: <IconUserCircle size={16} className='mr-2' />,
          onSelect: () => runCommand(() => (window.location.href = '/about'))
        },
        {
          title: 'Uses',
          icon: <IconDeviceDesktop size={16} className='mr-2' />,
          onSelect: () => runCommand(() => (window.location.href = '/uses'))
        }
      ]
    },
    {
      name: 'Social',
      actions: [
        {
          title: 'GitHub',
          icon: <IconBrandGithub size={16} className='mr-2' />,
          onSelect: () =>
            runCommand(() =>
              window.open('https://github.com/codejota', '_blank')
            )
        },
        {
          title: 'YouTube',
          icon: <IconBrandYoutube size={16} className='mr-2' />,
          onSelect: () =>
            runCommand(() =>
              window.open('https://youtube.com/codeverso', '_blank')
            )
        },
        {
          title: 'Curriculum',
          icon: <FaFilePdf size={16} className='mr-2' />,
          onSelect: () =>
            runCommand(() => window.open('https://cv.jotacode.dev/', '_blank'))
        }
      ]
    }
  ]

  return (
    <>
      <Button
        variant='ghost'
        className='flex h-9 w-9 items-center justify-center p-0'
        onClick={() => setOpen(true)}
        type='button'
        aria-label='Open Command Menu'
        title='Open Command Menu'
      >
        <IconCommand size={20} />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((group, i) => (
            <React.Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.actions.map((action) => (
                  <CommandItem key={action.title} onSelect={action.onSelect}>
                    {action.icon}
                    {action.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              {i !== groups.length - 1 && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default CommandMenu
