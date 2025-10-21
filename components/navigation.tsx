"use client"

import Link from "next/link"
import { NAVITEMS } from "@/constants"
import MenuArrow from "@/components/menuArrow"

const Navigation = () => {
  return (
    <nav className="flex-1 h-full">
      <ul className="flex flex-col min-lg:flex-row gap-x-2 gap-y-5 min-lg:items-center min-lg:h-full">
        {NAVITEMS.map(item => {
          if ( item.submenu ) {
            return (
              <li className="group max-lg:flex max-lg:flex-col max-lg:gap-y-2 min-lg:relative">
                {item.external ? (
                  <a href={item.href} className="font-medium text-gray-950 dark:text-white max-lg:text-xl min-lg:mx-2.5 min-lg:flex min-lg:items-center group-hover:border-b border-gray-950 dark:border-white group-hover:text-blue-600 dark:group-hover:text-blue-370">{item.name} <MenuArrow /></a>
                ) : (
                  <Link href={item.href!} className="font-medium text-gray-950 dark:text-white max-lg:text-xl min-lg:mx-2.5 min-lg:flex min-lg:items-center group-hover:border-b border-gray-950 dark:border-white group-hover:text-blue-600 dark:group-hover:text-blue-370">{item.name} <MenuArrow /></Link>
                )}
                <div className="min-lg:absolute min-lg:left-0 min-lg:top-full min-lg:mt-6 min-lg:z-50 min-lg:w-48 min-lg:origin-top-right min-lg:rounded-md min-lg:bg-white min-lg:dark:bg-gray-800 min-lg:shadow-lg min-lg:inset-ring min-lg:inset-ring-black/5 min-lg:dark:inset-ring-white/10 focus:outline-none min-lg:opacity-0 min-lg:scale-95 min-lg:invisible min-lg:transition-all min-lg:duration-300 group-hover:visible group-hover:opacity-100 group-hover:scale-100">
                  <ul className="sub-menu flex flex-col max-lg:gap-y-4 min-lg:py-1">
                    {item.submenu.map(subItem => (
                      <li key={subItem.name} className="group max-lg:flex max-lg:flex-col max-lg:gap-y-2">
                        {subItem.external ? (
                          <a href={subItem.href} className="block text-sm transition duration-150 ease-in-out max-lg:text-gray-600 max-lg:dark:text-gray-300 max-lg:underline min-lg:font-medium min-lg:text-gray-800 min-lg:dark:text-gray-200 min-lg:hover:bg-gray-100 min-lg:dark:hover:bg-gray-700 min-lg:dark:hover:text-white min-lg:py-2 min-lg:px-4">{subItem.name}</a>
                        ) : (
                          <Link href={subItem.href!} className="block text-sm transition duration-150 ease-in-out max-lg:text-gray-600 max-lg:dark:text-gray-300 max-lg:underline min-lg:font-medium min-lg:text-gray-800 min-lg:dark:text-gray-200 min-lg:hover:bg-gray-100 min-lg:dark:hover:bg-gray-700 min-lg:dark:hover:text-white min-lg:py-2 min-lg:px-4">{subItem.name}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          }

          return (
            <li key={item.name} className="group max-lg:flex max-lg:flex-col max-lg:gap-y-2">
              {item.external ? (
                <a href={item.href} className="font-medium text-gray-950 dark:text-white max-lg:text-xl min-lg:mx-2.5 min-lg:flex min-lg:items-center group-hover:border-b border-gray-950 dark:border-white group-hover:text-blue-600 dark:group-hover:text-blue-370">{item.name}</a>
              ) : (
                <Link href={item.href!} className="font-medium text-gray-950 dark:text-white max-lg:text-xl min-lg:mx-2.5 min-lg:flex min-lg:items-center group-hover:border-b border-gray-950 dark:border-white group-hover:text-blue-600 dark:group-hover:text-blue-370">{item.name}</Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
