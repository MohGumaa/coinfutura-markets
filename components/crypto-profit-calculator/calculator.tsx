"use client";

import { Coin } from "@/types";
import { useMemo, useState } from "react";
import { DollarSign, Percent, Target, TrendingUp, RotateCcw } from "lucide-react";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import CoinSelector from "./coin-selector";
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

  const handleReset = () => {
    setSelectedCoin(null)
    setInitialInvestment(0)
    setEntryPrice(0)
    setExitPrice(0)
    setInvestmentFee(0)
    setExitFee(0)
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
        <div className="lg:col-span-2">
          <Card className="dark:bg-gray-950 outline outline-gray-950/5 dark:outline-white/10 shadow-none border-0!">
            <CardHeader className="border-b border-gray-950/5 dark:border-white/10 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="cfu-title">Investment Details</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Enter your investment parameters
                </CardDescription>
              </div>
              <Button 
                onClick={handleReset}
                variant="outline" 
                size="sm" 
                className="cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" /> Reset
              </Button>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <CoinSelector onCoinSelect={handleCoinSelect} selectedCoin={selectedCoin} />

              {/* Initial Investment */}
              <div className="space-y-2">
                <Label htmlFor="investment" className="cfu-title flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-cfu-0" />
                  Initial Investment (USD)
                </Label>
                <Input
                  id="investment"
                  type="number"
                  value={initialInvestment === 0 ? "" : initialInvestment}
                  onChange={(e) => setInitialInvestment(Number.parseFloat(e.target.value) || 0)}
                  className="bg-white dark:bg-white/5 border-gray-950/8 dark:border-white/15 text-gray-950/50 dark:text-gray-200 placeholder-gray-500 focus:border-cfu-0"
                  placeholder="Enter amount in USD"
                />
              </div>

              {/* Entry Price */}
              <div className="space-y-2">
                <Label htmlFor="entry" className="cfu-title flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  Buy Price (USD)
                </Label>
                <Input
                  id="entry"
                  type="number"
                  value={entryPrice === 0 ? "" : entryPrice}
                  onChange={(e) => setEntryPrice(Number.parseFloat(e.target.value) || 0)}
                  className="bg-white dark:bg-white/5 border-gray-950/8 dark:border-white/15 text-gray-950/50 dark:text-gray-200 placeholder-gray-500 focus:border-cfu-0"
                  placeholder="Price when you buy"
                />
              </div>

              {/* Exit Price */}
              <div className="space-y-2">
                <Label htmlFor="exit" className="cfu-title flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  Sell Price (USD)
                </Label>
                <Input
                  id="exit"
                  type="number"
                  value={exitPrice === 0 ? "" : exitPrice}
                  onChange={(e) => setExitPrice(Number.parseFloat(e.target.value) || 0)}
                  className="bg-white dark:bg-white/5 border-gray-950/8 dark:border-white/15 text-gray-950/50 dark:text-gray-200 placeholder-gray-500 focus:border-cfu-0"
                  placeholder="Price when you sell"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-950/5 dark:border-white/10">
                <div className="space-y-2">
                  <Label htmlFor="investmentFee" className="cfu-title text-sm">
                    Investment Fee (%)
                  </Label>
                  <Input
                    id="investmentFee"
                    type="number"
                    value={investmentFee === 0 ? "" : investmentFee}
                    onChange={(e) => setInvestmentFee(Number.parseFloat(e.target.value) || 0)}
                    className="bg-white dark:bg-white/5 border-gray-950/8 dark:border-white/15 text-gray-950/50 dark:text-gray-200 placeholder-gray-500 focus:border-cfu-0"
                    placeholder="0"
                    min="0"
                    step="any"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exitFee" className="cfu-title text-sm">
                    Exit Fee (%)
                  </Label>
                  <Input
                    id="exitFee"
                    type="number"
                    value={exitFee === 0 ? "" : exitFee}
                    onChange={(e) => setExitFee(Number.parseFloat(e.target.value))}
                    className="bg-white dark:bg-white/5 border-gray-950/8 dark:border-white/15 text-gray-950/50 dark:text-gray-200 placeholder-gray-500 focus:border-cfu-0"
                    placeholder="0"
                    min="0"
                    step="any"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

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
          <Card className="bg-gray-950 dark:outline dark:outline-white/10 shadow-none border-0">
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-gray-400 mb-1">Coins You'll Get</p>
              <p className="text-2xl font-bold text-white">{calculations.coins}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card 
        className={`shadow-2xl border-0 mb-8 ${isProfit ? "bg-gradient-to-br from-green-900 to-emerald-900" : "bg-gradient-to-br from-red-900 to-rose-900"}`}
      >
        <CardHeader className="border-b border-white/80">
          <CardTitle className={`text-white flex items-center gap-2 ${isProfit ? "text-green-300" : "text-red-300"}`}>
            <Percent className="w-6 h-6" />
            {isProfit ? "Profit Summary" : "Loss Summary"}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Value */}
            <div className="text-center min-sm:border-e divide-white/80">
              <p className="text-white text-sm font-medium mb-2 opacity-80">Total Portfolio Value</p>
              <p className="text-3xl font-bold text-white">${calculations.totalValue}</p>
            </div>

            {/* Gross Profit */}
            <div className="text-center min-lg:border-e divide-white/80">
              <p className="text-white text-sm font-medium mb-2 opacity-80">Gross Profit</p>
              <p
                className={`text-3xl font-bold ${Number.parseFloat(calculations.grossProfit) >= 0 ? "text-green-300" : "text-red-300"}`}
              >
                {Number.parseFloat(calculations.grossProfit) >= 0 ? "+" : ""}${calculations.grossProfit}
              </p>
              <p className="text-xs text-white opacity-60 mt-1">{calculations.grossProfitPercentage}%</p>
            </div>

            {/* Total Fees */}
            <div className="text-center min-sm:border-e divide-white/80">
              <p className="text-white text-sm font-medium mb-2 opacity-80">Total Fees</p>
              <p className="text-3xl font-bold text-red-300">
                -$
                {(
                  Number.parseFloat(calculations.investmentFeeAmount) + Number.parseFloat(calculations.exitFeeAmount)
                ).toFixed(2)}
              </p>
              <p className="text-xs text-white opacity-60 mt-1">
                {investmentFee.toFixed(1)}% + {exitFee.toFixed(1)}%
              </p>
            </div>

            {/* Net Profit */}
            <div className="text-center">
              <p className="text-white text-sm font-medium mb-2 opacity-80">Net Profit</p>
              <p
                className={`text-3xl font-bold ${Number.parseFloat(calculations.netProfit) >= 0 ? "text-green-300" : "text-red-300"}`}
              >
                {Number.parseFloat(calculations.netProfit) >= 0 ? "+" : ""}${calculations.netProfit}
              </p>
              <p className="text-xs text-white opacity-60 mt-1">{calculations.netProfitPercentage}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fee Breakdown */}
      {(investmentFee > 0 || exitFee > 0) && (
        <Card className="bg-gray-950 dark:outline dark:outline-white/10 shadow-none border-0 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-lg">Fee Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 dark:bg-white/5 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-2">Investment Fee</p>
                <p className="text-2xl font-bold text-white">${calculations.investmentFeeAmount}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {investmentFee}% of ${initialInvestment}
                </p>
              </div>
              <div className="bg-white/10 dark:bg-white/5 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-2">Exit Fee</p>
                <p className="text-2xl font-bold text-white">${calculations.exitFeeAmount}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {exitFee}% of ${calculations.totalValue}
                </p>
              </div>
              <div className="bg-white/10 dark:bg-white/5 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-2">Total Cost</p>
                <p className="text-2xl font-bold text-white">${calculations.totalCost}</p>
                <p className="text-xs text-gray-500 mt-1">Investment + Investment Fee</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

    </>
  )
}

export default calculator
