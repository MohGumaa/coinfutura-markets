import { HeroSectionProps } from "@/types"

const HeroSection = ({icon: Icon, title, highlight, description}: HeroSectionProps) => {
  // const iconSizeMap = {
  //   small: {
  //     container: "size-8 sm:size-10 md:size-12",
  //     icon: "size-5 sm:size-6 md:size-7",
  //   },
  //   medium: {
  //     container: "size-10 sm:size-12 md:size-14",
  //     icon: "size-6 sm:size-7 md:size-8",
  //   },
  //   large: {
  //     container: "size-12 sm:size-14 md:size-16",
  //     icon: "size-7 sm:size-8 md:size-9",
  //   },
  // }

  // const sizes = iconSizeMap[iconSize]

  return (
    <section className="text-center mt-12 md:mt-16 mb-12 px-2.5">
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
        {Icon && (
          <div 
            className="flexCenter bg-gradient-to-br from-cfu to-cfu-0 rounded-lg size-10 sm:size-12 md:size-14 p-1"
          >
            <Icon className="size-6 sm:size-7 md:size-8 text-white" />
          </div>
        )}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold cfu-title">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cfu to-cfu-0">
                {highlight}
              </span>
            </>
          )}
        </h1>
      </div>
      <p className="md:text-lg">{description}</p>
    </section>
  )
}

export default HeroSection
