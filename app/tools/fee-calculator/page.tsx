import { Zap } from 'lucide-react'
import ComingSoon from '@/components/coming-soon'

const FeeCalculatorPage = () => {
  return (
    <ComingSoon 
      title="Trading Fee Calculator" 
      description="Calculate trading fees across different exchanges and find the best rates. Compare fees and optimize your trading strategy."
      cards={[
        {
          id: 0,
          title:"Multi-Exchange Support",
          icon: Zap
        },
        {
          id: 1,
          title:"Fee Comparison",
          icon: Zap
        },
        {
          id: 2,
          title:"Cost Analysis",
          icon: Zap
        },
      ]}
      />
  )
}

export default FeeCalculatorPage
