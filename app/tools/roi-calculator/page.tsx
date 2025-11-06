import { Zap } from 'lucide-react'
import ComingSoon from '@/components/coming-soon'

const RoiCalculatorPage = () => {
  return (
    <ComingSoon 
      title="RoiCalculatorPage" 
      description="Compare multiple cryptocurrencies side by side with market data and performance metrics. This powerful tool will help you make informed investment decisions."
      cards={[
        {
          id: 0,
          title:"Side-by-side Comparison",
          icon: Zap
        },
        {
          id: 1,
          title:"Real-Time Market Data",
          icon: Zap
        },
        {
          id: 2,
          title:"Performance Charts",
          icon: Zap
        },
      ]}
      />
  )
}

export default RoiCalculatorPage
