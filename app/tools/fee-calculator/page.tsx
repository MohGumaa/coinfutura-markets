import ComingSoon from '@/components/coming-soon'
import { Banknote, Calculator, Scale } from 'lucide-react'
import { generatePageMetadata } from "@/lib/utils";

export const metadata = generatePageMetadata({
  title: "Trading Fee Calculator",
  description:
    "Calculate trading fees across different exchanges and find the best rates.",
  path: "/tools/trading-fee-calculator",
});

const FeeCalculatorPage = () => {
  return (
    <ComingSoon 
      title="Trading Fee Calculator" 
      description="Calculate trading fees across different exchanges and find the best rates. Compare fees and optimize your trading strategy."
      cards={[
        {
          id: 0,
          title:"Multi-Exchange Support",
          icon: Banknote
        },
        {
          id: 1,
          title:"Fee Comparison",
          icon: Scale
        },
        {
          id: 2,
          title:"Cost Analysis",
          icon: Calculator
        },
      ]}
      />
  )
}

export default FeeCalculatorPage
