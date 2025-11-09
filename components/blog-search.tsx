import Image from "next/image"
import { Search } from "lucide-react"

const BlogSearch = () => {
  return (
    <div className="min-lg:relative min-lg:h-full min-xl:w-80 min-lg:w-64 min-lg:flex min-lg:items-center min-lg:justify-end max-lg:hidden max-lg:absolute max-lg:right-3 max-lg:top-full max-lg:w-96 max-lg:py-2.5 max-lg:bg-white max-lg:dark:bg-gray-800 max-lg:border max-lg:border-gray-950/5 max-lg:dark:border-white/10 max-lg:rounded-b-lg max-lg:shadow z-50 text-sm">

      <div className="relative w-full max-lg:max-w-[calc(100%-12px)] mx-auto">
        <input 
          type="text" 
          placeholder="Search..."
          className="block w-full h-10 rounded-full px-4 py-2 text-gray-600 dark:text-gray-300 placeholder:text-gray-600 dark:placeholder:text-gray-300 bg-white dark:bg-white/5 inset-ring inset-ring-gray-400 dark:inset-ring-white/15 focus-visible:outline-0"
          autoComplete="off"
        />
        <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-gray-400"/>
      </div>

      <div className="hidden w-full max-h-[430px] overflow-y-auto lg:absolute lg:left-0 lg:top-full lg:bg-white lg:dark:bg-gray-800 lg:border lg:border-gray-950/5 lg:dark:border-white/10 lg:rounded-b-lg lg:shadow lg:z-50 lg:mt-0.5">
        <div className="divide-y divide-gray-950/5 dark:divide-white/10">
          <a 
            href="https://coinfutura.com/chainlink-price-eyes-20-after-sbi-digital-markets/"
            className="flex items-center gap-x-2.5 p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 group"
          >
            <div className="flex-shrink-0">
              <Image 
                src="https://coinfutura.com/wp-content/uploads/2025/07/chainlink-3-150x150.jpg"
                alt="Chainlink Price Eyes $20 After SBI Digital Markets Integrates CCIP Network"
                width={56}
                height={48}
                className="w-14 h-12 object-cover rounded wp-post-image"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-medium article-title group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                Chainlink Price Eyes $20 After SBI Digital Markets Integrates CCIP Network
              </h4>
            </div>
          </a>

          <p className="text-center p-3">No results found</p>
          <p className="text-center p-3">Error performing search</p>
        </div>
      </div>

    </div>
  )
}

export default BlogSearch
