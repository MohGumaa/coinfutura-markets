"use client";

import { Coin } from "@/types";
import { useMemo, useState } from "react";
import { DollarSign, Percent, Target, TrendingUp } from "lucide-react";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const calculator = () => {
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null)
  const [initialInvestment, setInitialInvestment] = useState<number>(0)
  const [entryPrice, setEntryPrice] = useState<number>(0)
  const [exitPrice, setExitPrice] = useState<number>(0)
  const [investmentFee, setInvestmentFee] = useState<number>(0)
  const [exitFee, setExitFee] = useState<number>(0)

  const handleCoinSelect = (coin: Coin) => {
    setSelectedCoin(coin)
    setEntryPrice(coin.current_price)
    setExitPrice(coin.current_price)
  }

  const calculations = useMemo(() => {
    if (initialInvestment === 0 || entryPrice === 0 || exitPrice === 0) {
      return {
        coins: "0",
        totalValue: "0.00",
        grossProfit: "0.00",
        netProfit: "0.00",
        grossProfitPercentage: "0.00",
        netProfitPercentage: "0.00",
        investmentFeeAmount: "0.00",
        exitFeeAmount: "0.00",
        totalCost: "0.00",
        priceChange: "0.00",
        priceChangePercent: "0.00",
      }
    }

    const coins = initialInvestment / entryPrice
    const totalValue = coins * exitPrice

    // Calculate fees in USD
    const investmentFeeAmount = (initialInvestment * investmentFee) / 100
    const exitFeeAmount = (totalValue * exitFee) / 100

    // Gross profit (before fees)
    const grossProfit = totalValue - initialInvestment

    // Net profit (after fees)
    const netProfit = grossProfit - investmentFeeAmount - exitFeeAmount

    // Total cost including investment fee
    const totalCost = initialInvestment + investmentFeeAmount

    // Gross profit percentage
    const grossProfitPercentage = (grossProfit / initialInvestment) * 100

    // Net profit percentage
    const netProfitPercentage = (netProfit / initialInvestment) * 100

    const priceChange = exitPrice - entryPrice
    const priceChangePercent = (priceChange / entryPrice) * 100

    return {
      coins: coins.toFixed(8),
      totalValue: totalValue.toFixed(2),
      grossProfit: grossProfit.toFixed(2),
      netProfit: netProfit.toFixed(2),
      grossProfitPercentage: grossProfitPercentage.toFixed(2),
      netProfitPercentage: netProfitPercentage.toFixed(2),
      investmentFeeAmount: investmentFeeAmount.toFixed(2),
      exitFeeAmount: exitFeeAmount.toFixed(2),
      totalCost: totalCost.toFixed(2),
      priceChange: priceChange.toFixed(2),
      priceChangePercent: priceChangePercent.toFixed(2),
    }
  }, [initialInvestment, entryPrice, exitPrice, investmentFee, exitFee])

  const isProfit = Number.parseFloat(calculations.netProfit) >= 0

  return (
    <>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Input Section */}
        <div className="lg:col-span-2"></div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 border-0">
            <CardContent className="pt-6 text-white">
              <p className="text-sm font-semibold text-white mb-1">Price Change</p>
              <p className="text-3xl font-bold mb-2">${calculations.priceChange}</p>
              <p
                className={`text-sm font-semibold ${Number.parseFloat(calculations.priceChangePercent) >= 0 ? "text-green-200" : "text-red-200"}`}
              >
                {Number.parseFloat(calculations.priceChangePercent) >= 0 ? "+" : ""}
                {calculations.priceChangePercent}%
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-950 outline outline-white/10 shadow-none border-0">
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-gray-400 mb-1">Coins You'll Get</p>
              <p className="text-2xl font-bold text-white">{calculations.coins}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
    </>
  )
}

export default calculator
