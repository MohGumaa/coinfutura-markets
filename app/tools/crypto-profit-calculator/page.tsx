import { TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import Calculator from "@/components/crypto-profit-calculator/calculator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Crypto Profit Calculator | CoinFutura",
  description:
    "Calculate crypto profits and losses instantly using live prices, trading fees, entry and exit values.",
  openGraph: {
    title: "Crypto Profit Calculator | CoinFutura",
    description:
      "Use our free profit calculator to calculate crypto gains, losses, and fees in real-time.",
    url: "https://market.coinfutura.com/tools/crypto-profit-calculator",
    images: [
      {
        url: "https://market.coinfutura.com/og/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://market.coinfutura.com/tools/crypto-profit-calculator",
  },
};

const CryptoProfitCalculator = () => {
  return (
    <>
      <HeroSection 
        icon={TrendingUp}
        title="Crypto Profit"
        highlight="Calculator"
        description="Calculate your potential crypto investment returns with fees included"
      />

      <section className="bg-gray-950/5 dark:bg-white/10 py-10 px-2.5 lg:px-12">
        <Calculator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="dark:bg-gray-950 outline outline-gray-950/5 dark:outline-white/10 shadow-none border-0!">
            <CardHeader>
              <CardTitle className="cfu-title text-lg">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 dark:text-gray-300">
              <ul className="list-inside list-disc space-y-3">
                <li>Enter your initial investment amount in USD</li>
                <li>Set the entry price (price when you buy)</li>
                <li>Set the exit price (price when you sell)</li>
                <li>Add optional investment and exit fees</li>
                <li>View your gross and net profit instantly</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-950 outline outline-gray-950/5 dark:outline-white/10 shadow-none border-0!">
            <CardHeader>
              <CardTitle className="cfu-title text-lg">Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 dark:text-gray-300">
              <p className="leading-6">This calculator is for educational purposes only. Cryptocurrency investments carry significant risk. Past performance does not guarantee future results. Always do your own research before investing.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

export default CryptoProfitCalculator
