import { Zap } from 'lucide-react'
import ComingSoon from '@/components/coming-soon'

const PriceConverterPage = () => {
  return (
    <ComingSoon 
      title="Crypto Price Converter" 
      description="Convert between different cryptocurrencies and fiat currencies instantly with live exchange rates. Get accurate conversions at your fingertips."
      cards={[
        {
          id: 0,
          title:"Live Exchange Rates",
          icon: Zap
        },
        {
          id: 1,
          title:"Multiple Currencies",
          icon: Zap
        },
        {
          id: 2,
          title:"Instant Conversion",
          icon: Zap
        },
      ]}
      />
  )
}

export default PriceConverterPage
