import type { Metadata } from "next"
import ComingSoon from '@/components/coming-soon'
import { BadgeCent, ChartCandlestick, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: "Crypto Price Converter | CoinFutura",
  description:
    "Convert cryptocurrencies to fiat or other cryptocurrencies instantly.",
  alternates: {
    canonical: "https://market.coinfutura.com/tools/crypto-price-converter",
  },
};


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
