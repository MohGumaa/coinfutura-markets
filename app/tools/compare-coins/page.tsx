import ComingSoon from '@/components/coming-soon'
import { BarChart3, ChartAreaIcon, SlidersHorizontal } from 'lucide-react'
import { generatePageMetadata } from "@/lib/utils";

export const metadata = generatePageMetadata({
  title: "Compare Coins",
  description:
    "Compare multiple cryptocurrencies side-by-side with real-time market data and performance metrics.",
  path: "/tools/compare-coins",
});

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
