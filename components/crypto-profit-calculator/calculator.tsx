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
    <div>
      
    </div>
  )
}

export default calculator
