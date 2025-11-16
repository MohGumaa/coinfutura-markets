import type { Metadata } from "next"
import ComingSoon from '@/components/coming-soon'
import { BadgePercent, CircleGauge, PieChart } from 'lucide-react'

export const metadata: Metadata = {
  title: "Crypto ROI Calculator | CoinFutura",
  description:
    "Calculate return on investment for your crypto trading and investment strategies.",
  alternates: {
    canonical: "https://market.coinfutura.com/tools/roi-calculator",
  },
};


const RoiCalculatorPage = () => {
  return (
    <ComingSoon 
      title="ROI Calculator" 
      description="Calculate return on investment for your crypto trading and investment strategies. Track your gains and analyze performance across multiple investments."
      cards={[
        {
          id: 0,
          title:"Multi-Investment Tracking",
          icon: PieChart 
        },
        {
          id: 1,
          title:"Performance Analytics",
          icon: CircleGauge
        },
        {
          id: 2,
          title:"ROI Benchmarking",
          icon: BadgePercent
        },
      ]}
      />
  )
}

export default RoiCalculatorPage
