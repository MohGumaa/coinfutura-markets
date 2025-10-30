"use client";

import { useState } from "react";

export default function CalculatorOld() {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [investment, setInvestment] = useState("");
  const [result, setResult] = useState<{ profit: number; percent: number } | null>(null);

  const calculateProfit = () => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const invest = parseFloat(investment);

    if (isNaN(buy) || isNaN(sell) || isNaN(invest) || buy <= 0 || sell <= 0 || invest <= 0) {
      setResult(null);
      return;
    }

    const gainPercent = ((sell - buy) / buy) * 100;
    const profit = invest * (gainPercent / 100);

    setResult({ profit, percent: gainPercent });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4">
      <h1 className="text-2xl font-bold text-center">Crypto Profit Calculator</h1>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Buy Price ($)</label>
        <input
          type="number"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Sell Price ($)</label>
        <input
          type="number"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Investment ($)</label>
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <button
        onClick={calculateProfit}
        className="w-full bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition"
      >
        Calculate
      </button>

      {result && (
        <div className="text-center mt-4 p-3 bg-gray-100 rounded-lg">
          <p className="text-lg font-semibold">
            Profit: ${result.profit.toFixed(2)} ({result.percent.toFixed(2)}%)
          </p>
        </div>
      )}
    </div>
  );
}
