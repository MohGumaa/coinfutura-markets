"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, MonitorCog } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex-shrink-0 text-sm min-lg:w-24 max-lg:w-full min-sm:h-11 min-lg:h-auto relative z-0 inline-grid grid-cols-3 gap-1 rounded-lg min-lg:rounded-full p-1 min-lg:p-0.75 text-gray-950 dark:text-white bg-gray-950/5 dark:bg-white/10">
        <Button variant="outline" size="sm" className="cursor-not-allowed !p-1.5 rounded-sm min-lg:rounded-full min-lg:w-7 min-lg:h-7 [&_svg]:size-4 bg-transparent border-0 shadow-none">
          <MonitorCog /><span className="min-lg:hidden capitalize">system</span>
        </Button>
        <Button variant="outline" size="sm" className="cursor-not-allowed !p-1.5 rounded-sm min-lg:rounded-full min-lg:w-7 min-lg:h-7 [&_svg]:size-4 bg-transparent border-0 shadow-none">
          <Sun /><span className="min-lg:hidden capitalize">light</span>
        </Button>
        <Button variant="outline" size="sm" className="cursor-not-allowed !p-1.5 rounded-sm min-lg:rounded-full min-lg:w-7 min-lg:h-7 [&_svg]:size-4 bg-transparent border-0 shadow-none">
          <Moon/><span className="min-lg:hidden capitalize">dark</span>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex-shrink-0 text-sm min-lg:w-24 max-lg:w-full min-sm:h-11 min-lg:h-auto relative z-0 inline-grid grid-cols-3 gap-1 rounded-lg min-lg:rounded-full p-1 min-lg:p-0.75 text-gray-950 dark:text-white bg-gray-950/5 dark:bg-white/10">
      <Button 
        variant="outline" 
        size="sm" 
        className="cursor-pointer !p-1.5 rounded-sm min-lg:rounded-full min-lg:w-7 min-lg:h-7 [&_svg]:size-4 bg-transparent border-0 shadow-none data-[checked=true]:bg-white data-[checked=true]:ring data-[checked=true]:inset-ring data-[checked=true]:ring-gray-950/10 data-[checked=true]:inset-ring-white/10 sm:p-0 dark:data-[checked=true]:bg-gray-700 dark:data-[checked=true]:text-white dark:data-[checked=true]:ring-transparent max-lg:flex max-lg:items-center max-lg:gap-x-1" 
        onClick={() => setTheme("system")} 
        data-checked={theme === "system"}
        tabIndex={theme === "system" ? 0 : -1}
      >
        <MonitorCog /><span className="min-lg:hidden capitalize">system</span>
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        className="cursor-pointer !p-1.5 rounded-sm min-lg:rounded-full min-lg:w-7 min-lg:h-7 [&_svg]:size-4 bg-transparent border-0 shadow-none data-[checked=true]:bg-white data-[checked=true]:ring data-[checked=true]:inset-ring data-[checked=true]:ring-gray-950/10 data-[checked=true]:inset-ring-white/10 sm:p-0 dark:data-[checked=true]:bg-gray-700 dark:data-[checked=true]:text-white dark:data-[checked=true]:ring-transparent max-lg:flex max-lg:items-center max-lg:gap-x-1" 
        onClick={() => setTheme("light")} 
        data-checked={theme === "light"}
        tabIndex={theme === "light" ? 0 : -1}
      >
        <Sun /><span className="min-lg:hidden capitalize">light</span>
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        className="cursor-pointer !p-1.5 rounded-sm min-lg:rounded-full min-lg:w-7 min-lg:h-7 [&_svg]:size-4 bg-transparent border-0 shadow-none data-[checked=true]:bg-white data-[checked=true]:ring data-[checked=true]:inset-ring data-[checked=true]:ring-gray-950/10 data-[checked=true]:inset-ring-white/10 sm:p-0 dark:data-[checked=true]:bg-gray-700 dark:data-[checked=true]:text-white dark:data-[checked=true]:ring-transparent max-lg:flex max-lg:items-center max-lg:gap-x-1" 
        onClick={() => setTheme("dark")} 
        data-checked={theme === "dark"}
        tabIndex={theme === "dark" ? 0 : -1}
      >
        <Moon/><span className="min-lg:hidden capitalize">dark</span>
      </Button>
    </div>
  )
}