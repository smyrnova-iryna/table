'use client'

import { useTheme } from 'next-themes'

export default function ThemeToggler() {

const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col justify-center ml-3">
      <p className='flex align-center items-center gap-2 rounded-lg border-[1px] border-solid border-secondary2 p-2'>
 			<input className='light-switch cursor-pointer' name="light-switch" type="checkbox" 
      onChange={() => {theme === 'dark' ? setTheme('light') : setTheme('dark')}}
      />
 			<span>Switch theme</span>
		</p>
    </div>
  )
}