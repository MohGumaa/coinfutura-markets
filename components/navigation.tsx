"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { NAVITEMS } from "@/constants"
import { NavigationProps } from "@/types"

const Navigation = ({isMobile} : NavigationProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap flex-1">
        {NAVITEMS.map(item => {
          if (item.submenu) {
            // Render mobile version when isMobile is true (menu is open)
            if (isMobile) {
              return (
                <NavigationMenuItem key={item.name}>
                  <span className="font-medium px-4 py-2">{item.name}</span>
                  <ul className="flex flex-col gap-2 pl-4">
                    {item.submenu.map(subItem => (
                      <li key={subItem.name}>
                        {subItem.external ? (
                          <a 
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link 
                            href={subItem.href}
                            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuItem>
              )
            }

            // Render desktop version with dropdown
            return (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4">
                    {item.submenu.map(subItem => (
                      <li key={subItem.name}>
                        <NavigationMenuLink asChild>
                          {
                            subItem.external ? (
                              <a 
                                href={subItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {subItem.name}
                              </a>
                            ) : (
                              <Link 
                                href={subItem.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {subItem.name}
                              </Link>
                            )
                          }
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          }

          // Items without submenu (same for mobile and desktop)
          return (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                {
                  item.external ? (
                    <a href={item.href}>{item.name}</a>
                  ) : (
                    <Link href={item.href!}>{item.name}</Link>
                  )
                }
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu> 
  )
}

const SubmenuLink = () => {

}

export default Navigation
