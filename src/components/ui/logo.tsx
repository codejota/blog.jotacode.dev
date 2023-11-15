import React from 'react'

const Logo = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGElement>>(
  (props, ref) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#FFFFFF'
        strokeWidth='1'
        ref={ref}
        {...props}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6.89001 9C7.87001 9.49 8.71001 10.23 9.32001 11.15C9.67001 11.67 9.67001 12.34 9.32001 12.86C8.71001 13.77 7.87001 14.51 6.89001 15'
          stroke='currentColor'
        />
        <path
          d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
          stroke='currentColor'
        />
        <path d='M13 15H17' stroke='currentColor' />
      </svg>
    )
  }
)

Logo.displayName = 'Logo'

export { Logo }
