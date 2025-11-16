import type { Metadata } from "next"
import ComingSoon from '@/components/coming-soon'
import { BarChart3, ChartAreaIcon, SlidersHorizontal } from 'lucide-react'

export const metadata: Metadata = {
  title: "Compare Cryptocurrencies | CoinFutura",
  description:
    "Compare multiple cryptocurrencies side-by-side with real-time prices, charts, and metrics.",
  alternates: {
    canonical: "https://market.coinfutura.com/tools/compare-coins",
  },
};


const CompareCoinsPage = () => {
  return (
    <ComingSoon 
      title="Compare Coins" 
      description="Compare multiple cryptocurrencies side by side with market data and performance metrics. This powerful tool will help you make informed investment decisions."
      cards={[
        {
          id: 0,
          title:"Side-by-side Comparison",
          icon: SlidersHorizontal
        },
        {
          id: 1,
          title:"Real-Time Market Data",
          icon: ChartAreaIcon
        },
        {
          id: 2,
          title:"Performance Charts",
          icon: BarChart3 
        },
      ]}
      />
  )
}

export default CompareCoinsPage
