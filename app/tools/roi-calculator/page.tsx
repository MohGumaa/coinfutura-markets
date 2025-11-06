import { Zap } from 'lucide-react'
import ComingSoon from '@/components/coming-soon'

const RoiCalculatorPage = () => {
  return (
    <ComingSoon 
      title="ROI Calculator" 
      description="Calculate return on investment for your crypto trading and investment strategies. Track your gains and analyze performance across multiple investments."
      cards={[
        {
          id: 0,
          title:"Multi-Investment Tracking",
          icon: Zap
        },
        {
          id: 1,
          title:"Performance Analytics",
          icon: Zap
        },
        {
          id: 2,
          title:"ROI Benchmarking",
          icon: Zap
        },
      ]}
      />
  )
}

export default RoiCalculatorPage
