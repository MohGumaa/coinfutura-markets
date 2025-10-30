import { TrendingUp } from "lucide-react"
import Calculator from "@/components/crypto-profit-calculator/calculator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CryptoProfitCalculator = () => {
  return (
    <>
      <section className="text-center mt-16 mb-12">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
          <div className="flexCenter bg-gradient-to-br from-cfu to-cfu-0 rounded-lg size-10 sm:size-12 md:size-14 p-1">
            <TrendingUp className="size-6 sm:size-7 md:size-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold cfu-title">
            Crypto Profit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cfu to-cfu-0">
              Calculator
            </span>
          </h1>
        </div>
        <p className="md:text-lg">
          Calculate your potential crypto investment returns with fees included
        </p>
      </section>

      <section className="bg-gray-950/5 dark:bg-white/10 py-10 px-2 lg:px-12">
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
