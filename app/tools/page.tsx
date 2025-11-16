import Link from 'next/link'
import { TOOLS } from '@/constants'
import { ArrowRight, Zap } from 'lucide-react'
import CTABanner from '@/components/cta-banner'
import HeroSection from '@/components/hero-section'
import { generatePageMetadata } from '@/lib/utils'

export const metadata = generatePageMetadata({
  title: "Crypto Tools",
  description:
    "A collection of powerful, free crypto tools to help you analyze, calculate, and manage your cryptocurrency investments.",
  path: "/tools",
});

const CryptoToolsPage = () => {

  return (
    <>
      <HeroSection
        icon={Zap}
        title="Crypto"
        highlight="Tools"
        description="A collection of powerful, free tools to help you analyze, calculate, and manage your cryptocurrency investments."
      />

      {/* Tools Grid */}
      <section className="bg-gray-950/5 dark:bg-white/10 py-10 px-2.5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map(tool => {
            const Icon = tool.icon;
            return (
              <Link 
                key={tool.id}
                href={tool.href}
                className='group h-full rounded-lg p-6 bg-white dark:bg-gray-950 outline outline-gray-950/5 dark:outline-white/10 hover:outline-cfu-0! hover:shadow-lg hover:shadow-cfu-0/20 cursor-pointer transition-all duration-300'
              >
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} p-2.5 text-white flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  {tool.status === "coming-soon" && (
                    <span className="text-xs font-semibold  text-gra-600 dark:text-gray-400 bg-gray-950/5 dark:bg-gray-800 px-2.5 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                  {tool.status === "active" && (
                    <span className="text-xs font-semibold text-white dark:text-cfu-0 bg-black group-hover:bg-gray-800 dark:bg-green-900/30 px-2.5 py-1 rounded-full">
                      Active
                    </span>
                  )}
                </div>

                <h3
                  className='cfu-title text-xl font-semibold mb-2 group-hover:text-cfu-0! transition-colors'
                >
                  {tool.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{tool.description}</p>

                <div className="flex items-center text-cfu-0 text-sm font-medium group-hover:gap-2 transition-all">
                  <span>{tool.status === "active" ? "Open Tool" : "Coming Soon"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <CTABanner 
        title="More tools coming soon!"
        description="We're continuously adding new tools to help you succeed with cryptocurrency. Check back regularly for updates."
        buttonText="Back to Market"
        buttonLink="/"
      />
    </>
  )
}

export default CryptoToolsPage
