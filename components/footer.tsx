import Link from "next/link"
import { env } from "@/config/env"
import { FOOTER_BOTTOM_NAV_LINKS, FOOTER_COLUMN_DATA, SOCIALMEDIA } from "@/constants"
import CoinfuturaLogo from "./coinfutura-logo"

const Footer = () => {
  return (
    <>
      <div className="col-start-1 row-start-3 md:col-start-2 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
        <footer className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="border-x border-gray-950/5 dark:border-white/10 py-10 pl-2 not-xl:border-y not-xl:first:border-t-0 not-xl:nth-2:border-t-0 max-sm:nth-2:border-t not-xl:nth-3:border-b-0 max-sm:nth-3:border-b not-xl:last:border-b-0">
            <CoinfuturaLogo className="block mb-4"/>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-6 mb-6 font-medium">
              Discover the latest crypto news, price analysis, and blockchain trends with CoinFutura. Trusted insights on Bitcoin, Ethereum, NFTs, and the future of Web3 clear, accurate, and timely.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {SOCIALMEDIA.map(social => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.id} 
                    href={social.href}
                    aria-label={social.name}
                    className={`social-icon ${social.className}`}
                  >
                    <IconComponent/>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column */}
          {FOOTER_COLUMN_DATA.map(column => (
            <div key={column.id} className="border-x border-gray-950/5 dark:border-white/10 py-10 pl-2 not-xl:border-y not-xl:first:border-t-0 not-xl:nth-2:border-t-0 max-sm:nth-2:border-t not-xl:nth-3:border-b-0 max-sm:nth-3:border-b not-xl:last:border-b-0">
              <h2 className="cfu-title title-with-underline font-semibold text-lg capitalize mb-4">{column.title}</h2>
              <ul className="space-y-5">
                {column.links.map(link => (
                  <li key={link.id}>
                    <a href={link.href} className="hover:underline text-sm text-gray-950 dark:text-white leading-6">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </footer>
      </div>

      <div className="col-start-1 row-start-5 grid md:col-start-2">
        <section className="text-sm text-gray-600 dark:text-gray-400 flexCenter flex-col gap-6 min-lg:flex-row min-lg:justify-between min-lg:gap-8 pt-10 pb-24 section font-medium">
          <div>
            <nav className="flexCenter flex-wrap min-md:justify-baseline gap-x-2.5 gap-y-3 divide-x divide-gray-950/5 dark:divide-white/10">
              {FOOTER_BOTTOM_NAV_LINKS.map(link => (
                <Link key={link.id} href={link.href} className="inline-block hover:underline pe-2 last:pe-0">{link.label}</Link>
              ))}
            </nav>
          </div>
          <div>
            <p>© {`${env.currentYear} ${env.appName}`}. All rights reserved.</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Footer
