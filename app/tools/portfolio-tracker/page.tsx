import type { Metadata } from "next"
import ComingSoon from '@/components/coming-soon'
import { ActivityIcon, LineChart, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: "Crypto Portfolio Tracker | CoinFutura",
  description:
    "Track your cryptocurrency holdings with real-time valuations and performance analytics.",
  alternates: {
    canonical: "https://market.coinfutura.com/tools/portfolio-tracker",
  },
};


const PortfolioTrackerPage = () => {
  return (
    <ComingSoon 
      title="Portfolio Tracker" 
      description="Track your cryptocurrency portfolio with real-time valuations and comprehensive performance analysis. Monitor all your holdings in one place."
      cards={[
        {
          id: 0,
          title:"Real-Time Valuations",
          icon: ActivityIcon
        },
        {
          id: 1,
          title:"Holdings Overview",
          icon: Scale
        },
        {
          id: 2,
          title:"Performance Tracking",
          icon: LineChart
        },
      ]}
      />
  )
}

export default PortfolioTrackerPage
