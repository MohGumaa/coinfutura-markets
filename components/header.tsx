import { ModeToggle } from './mode-toggle'

const Header = () => {
  return (
    <header className='sticky inset-x-0 top-0 z-50 border-b border-black/5 dark:border-white/10 bg-white dark:bg-gray-950 shadow-xs'>
      <div className="grid grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
        <div className="col-start-1 row-span-full row-start-1 hidden min-md:block"/>
        <div className="flex items-center justify-between gap-8 px-2.5 min-md:px-0">
          Header
          <ModeToggle />
        </div>
        <div className="row-span-full row-start-1 md:col-start-3 min-md:block"/>
      </div>
    </header>
  )
}

export default Header
