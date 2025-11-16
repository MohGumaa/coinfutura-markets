import ComingSoon from '@/components/coming-soon'
import { BadgePercent, CircleGauge, PieChart } from 'lucide-react'
import { generatePageMetadata } from "@/lib/utils";

export const metadata = generatePageMetadata({
  title: "ROI Calculator",
  description:
    "Calculate return on investment for your crypto trades and long-term investment strategies.",
  path: "/tools/roi-calculator",
});


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
