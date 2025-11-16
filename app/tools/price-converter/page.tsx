import ComingSoon from '@/components/coming-soon'
import { BadgeCent, ChartCandlestick, RefreshCw } from 'lucide-react'
import { generatePageMetadata } from "@/lib/utils"

export const metadata = generatePageMetadata({
  title: "Crypto Price Converter",
  description:
    "Convert between cryptocurrencies and fiat currencies instantly with real-time prices.",
  path: "/tools/crypto-price-converter",
});

const PriceConverterPage = () => {
  return (
    <ComingSoon 
      title="Crypto Price Converter" 
      description="Convert between different cryptocurrencies and fiat currencies instantly with live exchange rates. Get accurate conversions at your fingertips."
      cards={[
        {
          id: 0,
          title:"Live Exchange Rates",
          icon: ChartCandlestick
        },
        {
          id: 1,
          title:"Multiple Currencies",
          icon: BadgeCent
        },
        {
          id: 2,
          title:"Instant Conversion",
          icon: RefreshCw

        },
      ]}
      />
  )
}

export default PriceConverterPage
