'use client'

import { useState } from 'react'
import Logo from './logo'
import { ModeToggle } from './mode-toggle'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/navigation'
import { Search, Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-y border-black/5 dark:border-white/10 bg-white dark:bg-gray-950 shadow-xs'>
      <div className="grid grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
        <div className="col-start-1 row-span-full row-start-1 hidden min-md:block"/>
        {/* Header Content */}
        <div className="flex items-center justify-between gap-8 px-2.5 lg:px-0 h-14">
          <Logo />
          <div 
            className={`flex-1 flex flex-col justify-between gap-x-2 gap-y-9 min-lg:flex-row min-lg:items-center min-lg:h-full max-lg:fixed max-lg:left-0 max-lg:top-14 max-lg:z-40 max-lg:w-full max-lg:h-[calc(100dvh-56px)] max-lg:bg-white dark:max-lg:bg-gray-950 max-lg:border-t border-black/5 dark:border-white/10 max-lg:overflow-y-auto max-lg:px-3 max-lg:pt-4 max-sm:pb-40 max-lg:pb-4 max-lg:transition-all max-lg:duration-700 max-lg:ease-in-out  ${isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'}`}
          >
            <Navigation/>
            <ModeToggle />
          </div>

          <div className="flex min-lg:hidden items-center gap-x-4">
            <Button 
              variant="ghost" 
              size="icon-lg"
              aria-label="search"
              className='cursor-pointer text-gray-500 dark:text-gray-400 hover:!bg-transparent !p-0 w-6.5 h-6.5 [&_svg]:!w-5 [&_svg]:!h-5'
            >
              <Search/>  
            </Button>
            <Button 
              variant="ghost" 
              size="icon-lg"
              aria-label="primary-menu"
              className='cursor-pointer text-gray-500 dark:text-gray-400 hover:!bg-transparent !p-0 w-6.5 h-6.5 [&_svg]:!w-6 [&_svg]:!h-6'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24}/> : <Menu size={24}/>  }
            </Button>
          </div>
        </div>
        <div className="row-span-full row-start-1 md:col-start-3 min-md:block"/>
      </div>
    </header>
  )
}

export default Header
