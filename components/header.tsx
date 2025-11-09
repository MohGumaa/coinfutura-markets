'use client'

import { useState, useCallback, useEffect, useRef, memo } from 'react'
import { Search, Menu, X } from 'lucide-react'

import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/navigation'
import BlogSearch from "@/components/blog-search"
import { ModeToggle } from '@/components/mode-toggle'

type IconButtonProps = {
  icon: typeof Search | typeof Menu | typeof X;
  label: string;
  onClick?: () => void;
  iconSize?: number 
}  

// Extracted constants
const GRID_CLASSES = "grid grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0"

const MOBILE_MENU_CLASSES = "flex-1 flex flex-col justify-between gap-y-9 gap-x-2 min-lg:flex-row min-lg:items-center min-lg:h-full max-lg:fixed max-lg:left-0 max-lg:z-40 max-lg:w-full max-lg:bg-white dark:max-lg:bg-gray-950 max-lg:border-t border-black/5 dark:border-white/10 max-lg:overflow-y-auto max-lg:px-3 max-lg:pt-4 max-sm:pb-16 max-lg:pb-4 max-lg:transition-all max-lg:duration-700 max-lg:ease-in-out"

const ICON_BUTTON_CLASSES = "cursor-pointer text-gray-500 dark:text-gray-400 hover:!bg-transparent !p-0 w-6.5 h-6.5"

const IconButton = memo(({
  icon: Icon,
  label, 
  onClick,
  iconSize = 20
}: IconButtonProps) => (
  <Button 
    variant="ghost"
    size="icon-lg"
    aria-label={label}
    className={`${ICON_BUTTON_CLASSES} ${Icon === Menu || Icon === X ? '[&_svg]:!w-6 [&_svg]:!h-6' : '[&_svg]:!w-5 [&_svg]:!h-5'}`}
    onClick={onClick}
  >
    <Icon size={iconSize} />
  </Button>
))

IconButton.displayName = 'IconButton'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Update navigation position and height
  const updateNavPosition = useCallback(() => {
    if (!headerRef.current || !navRef.current) return

    if (window.innerWidth < 1024) {
      const headerHeight = headerRef.current.offsetHeight
      navRef.current.style.top = `${headerHeight}px`
      navRef.current.style.height = `calc(100dvh - ${headerHeight}px)`
    } else {
      navRef.current.style.height = '100%'
      navRef.current.style.top = ''
    }
  }, [])

  // Toggle menu and handle body overflow
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])

  // Handle body overflow when menu opens/closes
  useEffect(() => {
    const html = document.documentElement

    if (isOpen && window.innerWidth < 1024) {
      html.style.overflow = 'hidden'
    } else {
      html.style.overflow = ''
    }

    // Cleanup on unmount
    return () => {
      html.style.overflow = ''
    }
  }, [isOpen])

  // Update nav position on mount and window resize
  useEffect(() => {
    updateNavPosition()

    window.addEventListener('resize', updateNavPosition)
    return () => window.removeEventListener('resize', updateNavPosition)
  }, [updateNavPosition])

  return (
    <header 
      ref={headerRef}
      className='sticky top-0 z-50 border-y border-black/5 dark:border-white/10 bg-white dark:bg-gray-950 shadow-xs'
      role="banner"
    >
      <div className={GRID_CLASSES}>
        <div className="col-start-1 row-span-full row-start-1 hidden min-md:block"/>

        {/* Header Content */}
        <div className="flex items-center justify-between gap-8 px-2.5 md:px-0 h-14">

          <Logo aria-label="CoinFutura homepage" />

          <div 
            ref={navRef}
            className={`${MOBILE_MENU_CLASSES} ${isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'}`}
          >
            <Navigation onNavClick={() => setIsOpen(false)} />
            <ModeToggle />
          </div>

          <BlogSearch />

          <div className="flex min-lg:hidden items-center gap-x-4">
            <IconButton icon={Search} label="search" iconSize={20} />
            <IconButton 
              icon={isOpen ? X : Menu} 
              label="primary-menu" 
              onClick={toggleMenu}
              iconSize={24}
            />
          </div>
        </div>
        <div className="row-span-full row-start-1 md:col-start-3 min-md:block"/>
      </div>
    </header>
  )
}

export default memo(Header)
