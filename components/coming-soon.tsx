import { ComingSoonProps } from "@/types"
import { Clock, Zap } from "lucide-react"

const ComingSoon = ({ title, description, cards }: ComingSoonProps) => {
  return (
    <section className="mt-12 md:mt-20 mb-20 px-2.5">
      <div className="w-full max-w-2xl mx-auto">

        <div className="text-center mb-12">
          <div className="size-14 md:size-16 lg:size-20 bg-gradient-to-br from-cfu-0 to-cfu rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cfu-0/30">
            <Clock className="size-7 md:size-8 lg:size-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold cfu-title mb-4">{title}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
            {description}
          </p>
          <div className="inline-block bg-gray-950/5 dark:bg-gray-800 border border-gray-950/5 dark:border-white/10 rounded-lg px-4 py-2">
            <span className="text-gra-950 dark:text-cfu-0 font-semibold">Coming Soon</span>
          </div>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {cards.map(card => {
            const CardIcon = card.icon;
            return (
              <div 
                key={card.id}
                className="dark:bg-white/5 ring-1 ring-gray-950/10 dark:ring-white/10 rounded-lg p-4 text-center"
              >
                <CardIcon className="w-6 h-6 text-cfu-0 mx-auto mb-2" />
                <h3 className="cfu-title font-semibold text-sm">Side-by-side Comparison</h3>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ComingSoon
