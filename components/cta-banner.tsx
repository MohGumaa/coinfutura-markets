import Link from "next/link"
import { CTABannerProps } from "@/types"

const CTABanner = ({ title, description, buttonText, buttonLink, bgColor="from-cfu-0 to-cfu my-16" }: CTABannerProps) => {
  return (
    <section 
      className={`rounded-lg p-8 md:p-12 text-center bg-gradient-to-r mx-2.5 lg:mx-12 ${bgColor}`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">{title}</h2>
      <p className="text-slate-900 mb-6 max-w-2xl mx-auto font-medium">{description}</p>
      <Link
        href={buttonLink}
        className="inline-block bg-slate-950 text-[#03deb5] px-6 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-colors"
      >
        {buttonText}
      </Link>
    </section>
  )
}

export default CTABanner
