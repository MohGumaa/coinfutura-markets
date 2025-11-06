import ComingSoon from '@/components/coming-soon'
import { LineChart, Scale, Wallet } from 'lucide-react'

const PortfolioTrackerPage = () => {
  return (
    <ComingSoon 
      title="Portfolio Tracker" 
      description="Track your cryptocurrency portfolio with real-time valuations and comprehensive performance analysis. Monitor all your holdings in one place."
      cards={[
        {
          id: 0,
          title:"Real-Time Valuations",
          icon: Wallet
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
