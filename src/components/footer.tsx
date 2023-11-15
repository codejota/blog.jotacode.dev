import { BiLogoTailwindCss } from 'react-icons/bi'
import { FaHeart } from 'react-icons/fa'
import { PiCoffee } from 'react-icons/pi'
import { SiNextdotjs } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'

import CurrentVisitors from './current-visitors'

const Footer = () => {
  return (
    <footer className='mx-auto flex max-w-5xl flex-col px-8 pb-8'>
      <div className='mt-20 flex items-center justify-between text-sm'>
        <div>&copy; {new Date().getFullYear()} Jotacode</div>
        {process.env.NODE_ENV === 'production' && <CurrentVisitors />}
        <div className='flex'>
          Made with <PiCoffee className='mx-2 text-2xl text-gray-200' /> {''}{' '}
          <div>
            <p> + </p>
          </div>
          <FaHeart className='ml-1 mr-2 text-2xl text-red-400 ' /> using{' '}
          <SiNextdotjs className='ml-1 mr-2 text-2xl text-gray-400' />
          <TbBrandTypescript className='ml-1 mr-2 text-2xl text-blue-700 ' />
          <BiLogoTailwindCss className='ml-1 mr-2 text-2xl text-blue-300' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
