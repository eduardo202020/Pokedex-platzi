import { useDarkMode } from '../hooks/useDarkMode'

import { ReactComponent as PokedexIcon } from '../assets/pokedex.svg'
import { ReactComponent as DarkModeIcon } from '../assets/moon-icon.svg'
import { ReactComponent as LIghtModeIcon } from '../assets/sun-icon.svg'
import React from 'react'

interface IUseDarkMode {
  colorTheme: string;
  setDarkMode: React.Dispatch<any>
}

export const Header = () => {
  const { colorTheme, setDarkMode }: IUseDarkMode = useDarkMode()

  return (
    <header className='grid place-items-center relative'>
      <PokedexIcon className='w-96 h-52 mb-8'/>
      <button onClick={() => setDarkMode(colorTheme)}>
        {
          colorTheme === 'dark'
          ? <DarkModeIcon className='absolute w-5 h-5 top-0 right-0 cursor-pointer'/>
          : <LIghtModeIcon className='absolute w-6 h-6 top-0 text-white right-0 cursor-pointer'/>
        }
      </button>
    </header>
  )
}
