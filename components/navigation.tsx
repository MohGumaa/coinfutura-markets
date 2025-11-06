"use client"

import Link from "next/link"
import { memo } from "react"
import { NavLinkProps } from "@/types"
import { NAVITEMS } from "@/constants"
import MenuArrow from "@/components/menuArrow"

// Extracted shared class strings as constants
const BASE_LINK_CLASSES = "font-medium text-gray-950 dark:text-white max-lg:text-xl min-lg:mx-2.5 min-lg:flex min-lg:items-center group-hover:border-b border-gray-950 dark:border-white group-hover:text-blue-600 dark:group-hover:text-blue-400 capitalize"

const SUBMENU_LINK_CLASSES = "block text-sm transition duration-150 ease-in-out max-lg:text-gray-600 max-lg:dark:text-gray-300 max-lg:underline min-lg:font-medium min-lg:text-gray-800 min-lg:dark:text-gray-200 min-lg:hover:bg-gray-100 min-lg:dark:hover:bg-gray-700 min-lg:dark:hover:text-white min-lg:py-2 min-lg:px-4 capitalize"

const DROPDOWN_CONTAINER_CLASSES = "min-lg:overflow-hidden min-lg:absolute min-lg:left-0 min-lg:top-full min-lg:mt-6 min-lg:z-50 min-lg:w-48 min-lg:origin-top-right min-lg:rounded-md min-lg:bg-white min-lg:dark:bg-gray-800 min-lg:shadow-lg min-lg:inset-ring min-lg:inset-ring-black/5 min-lg:dark:inset-ring-white/10 focus:outline-none min-lg:opacity-0 min-lg:scale-95 min-lg:invisible min-lg:transition-all min-lg:duration-300 group-hover:visible group-hover:opacity-100 group-hover:scale-100"

// // Memoized NavLink component to prevent unnecessary re-renders
// const NavLink = memo(({item, className}: {item: NavLinkProps, className: string}) => {
//   const LinkComponent = item.external ? 'a' : Link
//   const linkProps = item.external ? { href: item.href } : { href: item.href! }

//   return (
//     <LinkComponent {...linkProps} className={className}>
//       {item.name}
//     </LinkComponent>
//   )
// })
// NavLink.displayName = 'NavLink'

// // Memoized SubMenuItem component
// const SubMenuItem = memo(({subItem} : {subItem: NavLinkProps}) => (
//   <li className="group max-lg:flex max-lg:flex-col max-lg:gap-y-2">
//     <NavLink item={subItem} className={SUBMENU_LINK_CLASSES} />
//   </li>
// ))

// SubMenuItem.displayName = 'SubMenuItem'

// // Memoized NavItem component
// const NavItem = memo(({ item }: { item: typeof NAVITEMS[number] }) => {
//   const hasSubmenu = Boolean(item.submenu)

//   if (hasSubmenu) {
//     return (
//       <li className="group max-lg:flex max-lg:flex-col max-lg:gap-y-2 min-lg:relative">
//         {item.external ? (
//           <a href={item.href} className={BASE_LINK_CLASSES}>
//             {item.name} <MenuArrow />
//           </a>
//         ) : (
//           <Link href={item.href!} className={BASE_LINK_CLASSES}>
//             {item.name} <MenuArrow />
//           </Link>
//         )}
//         <div className={DROPDOWN_CONTAINER_CLASSES}>
//           <ul className="sub-menu flex flex-col max-lg:gap-y-4 min-lg:py-1">
//             {item.submenu!.map(subItem => (
//               <SubMenuItem key={subItem.name} subItem={subItem} />
//             ))}
//           </ul>
//         </div>
//       </li>
//     )
//   }

//   return (
//     <li className="group max-lg:flex max-lg:flex-col max-lg:gap-y-2">
//       <NavLink item={item} className={BASE_LINK_CLASSES} />
//     </li>
//   )
// })
// NavItem.displayName = 'NavItem'

// const Navigation = () => {
//   return (
//     <nav className="flex-1 min-lg:h-full">
//       <ul className="flex flex-col min-lg:flex-row gap-x-2 gap-y-5 min-lg:items-center min-lg:h-full">
//         {NAVITEMS.map(item => (
//           <NavItem key={item.name} item={item} />
//         ))}
//       </ul>
//     </nav>
//   )
// }

// export default memo(Navigation)



// Memoized NavLink component to prevent unnecessary re-renders
const NavLink = memo(({item, className, onClick}: {item: NavLinkProps, className: string, onClick?: () => void}) => {
  const LinkComponent = item.external ? 'a' : Link
  const linkProps = item.external ? { href: item.href } : { href: item.href! }

  return (
    <LinkComponent {...linkProps} className={className} onClick={onClick}>
      {item.name}
    </LinkComponent>
  )
})
NavLink.displayName = 'NavLink'

// Memoized SubMenuItem component
const SubMenuItem = memo(({subItem, onNavClick} : {subItem: NavLinkProps, onNavClick?: () => void}) => (
  <li className="group max-lg:flex max-lg:flex-col max-lg:gap-y-2">
    <NavLink item={subItem} className={SUBMENU_LINK_CLASSES} onClick={onNavClick} />
  </li>
))

SubMenuItem.displayName = 'SubMenuItem'

// Memoized NavItem component
const NavItem = memo(({ item, onNavClick }: { item: typeof NAVITEMS[number], onNavClick?: () => void }) => {
  const hasSubmenu = Boolean(item.submenu)

  if (hasSubmenu) {
    return (
      <li className="group max-lg:flex max-lg:flex-col max-lg:gap-y-2 min-lg:relative">
        {item.external ? (
          <a href={item.href} className={BASE_LINK_CLASSES} onClick={onNavClick}>
            {item.name} <MenuArrow />
          </a>
        ) : (
          <Link href={item.href!} className={BASE_LINK_CLASSES} onClick={onNavClick}>
            {item.name} <MenuArrow />
          </Link>
        )}
        <div className={DROPDOWN_CONTAINER_CLASSES}>
          <ul className="sub-menu flex flex-col max-lg:gap-y-4 min-lg:py-1">
            {item.submenu!.map(subItem => (
              <SubMenuItem key={subItem.name} subItem={subItem} onNavClick={onNavClick} />
            ))}
          </ul>
        </div>
      </li>
    )
  }

  return (
    <li className="group max-lg:flex max-lg:flex-col max-lg:gap-y-2">
      <NavLink item={item} className={BASE_LINK_CLASSES} onClick={onNavClick} />
    </li>
  )
})
NavItem.displayName = 'NavItem'

type NavigationProps = {
  onNavClick?: () => void
}

const Navigation = memo(({ onNavClick }: NavigationProps) => {
  return (
    <nav className="flex-1 min-lg:h-full">
      <ul className="flex flex-col min-lg:flex-row gap-x-2 gap-y-5 min-lg:items-center min-lg:h-full">
        {NAVITEMS.map(item => (
          <NavItem key={item.name} item={item} onNavClick={onNavClick} />
        ))}
      </ul>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation