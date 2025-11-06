

"use client"

import { useState, useEffect } from "react"
import { Star, ArrowUpDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import useCoins from "@/hooks/use-coins"
type SortKey = "rank" | "price" | "change24h" | "change7d" | "marketCap" | "volume"
type SortOrder = "asc" | "desc"

export default function PriceList() {
  const { coins, isLoading } = useCoins()
  const [searchTerm, setSearchTerm] = useState("")
  const [favorites, setFavorites] = useState<string[]>([])
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [sortKey, setSortKey] = useState<SortKey>("rank")
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")

  useEffect(() => {
    const saved = localStorage.getItem("crypto-favorites")
    if (saved) {
      try {
        setFavorites(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to load favorites:", e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("crypto-favorites", JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (coinId: string) => {
    setFavorites((prev) => (prev.includes(coinId) ? prev.filter((id) => id !== coinId) : [...prev, coinId]))
  }

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortKey(key)
      setSortOrder("asc")
    }
  }

  const filteredCoins = coins
    .filter((coin) => {
      const matchesSearch =
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFavorite = !showFavoritesOnly || favorites.includes(coin.id)
      return matchesSearch && matchesFavorite
    })
    .sort((a, b) => {
      let aVal: number
      let bVal: number

      switch (sortKey) {
        case "rank":
          aVal = a.market_cap_rank || 0
          bVal = b.market_cap_rank || 0
          break
        case "price":
          aVal = a.current_price || 0
          bVal = b.current_price || 0
          break
        case "change24h":
          aVal = a.price_change_percentage_24h || 0
          bVal = b.price_change_percentage_24h || 0
          break
        case "change7d":
          aVal = a.price_change_percentage_7d_in_currency || 0
          bVal = b.price_change_percentage_7d_in_currency || 0
          break
        case "marketCap":
          aVal = a.market_cap || 0
          bVal = b.market_cap || 0
          break
        case "volume":
          aVal = a.total_volume || 0
          bVal = b.total_volume || 0
          break
      }

      return sortOrder === "asc" ? aVal - bVal : bVal - aVal
    })

  const formatPrice = (price: number | null) => {
    if (!price) return "-"
    return `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  const formatMarketCap = (cap: number | null) => {
    if (!cap) return "-"
    if (cap >= 1e12) return `$${(cap / 1e12).toFixed(2)}T`
    if (cap >= 1e9) return `$${(cap / 1e9).toFixed(2)}B`
    if (cap >= 1e6) return `$${(cap / 1e6).toFixed(2)}M`
    return `$${cap.toLocaleString()}`
  }

  const formatVolume = (volume: number | null) => {
    if (!volume) return "-"
    if (volume >= 1e9) return `$${(volume / 1e9).toFixed(2)}B`
    if (volume >= 1e6) return `$${(volume / 1e6).toFixed(2)}M`
    return `$${volume.toLocaleString()}`
  }

  return (
    <div className=" ">
      <div className="py-12 px-2.5">
        <div className="mb-8">
          <h1 className="text-4xl font-bold cfu-title mb-2">Cryptocurrency Prices</h1>
          <p className="text-gray-600 dark:text-gray-400">Real-time prices and market data for top cryptocurrencies</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            type="text"
            placeholder="Search by coin name or symbol..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-[#03deb5] focus:ring-[#03deb5]"
          />
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              showFavoritesOnly ? "bg-[#03deb5] text-slate-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <Star className="w-4 h-4 inline mr-2" />
            Favorites ({favorites.length})
          </button>
        </div>

        <Card className="bg-slate-900 border-slate-800 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 w-12">
                    <Star className="w-4 h-4" />
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold text-slate-300 cursor-pointer hover:text-[#03deb5]"
                    onClick={() => handleSort("rank")}
                  >
                    <div className="flex items-center gap-2">
                      #{sortKey === "rank" && <ArrowUpDown className="w-4 h-4" />}
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Name</th>
                  <th
                    className="px-6 py-4 text-right text-sm font-semibold text-slate-300 cursor-pointer hover:text-[#03deb5]"
                    onClick={() => handleSort("price")}
                  >
                    <div className="flex items-center justify-end gap-2">
                      Price
                      {sortKey === "price" && <ArrowUpDown className="w-4 h-4" />}
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-right text-sm font-semibold text-slate-300 cursor-pointer hover:text-[#03deb5]"
                    onClick={() => handleSort("change24h")}
                  >
                    <div className="flex items-center justify-end gap-2">
                      24h %{sortKey === "change24h" && <ArrowUpDown className="w-4 h-4" />}
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-right text-sm font-semibold text-slate-300 cursor-pointer hover:text-[#03deb5]"
                    onClick={() => handleSort("change7d")}
                  >
                    <div className="flex items-center justify-end gap-2">
                      7d %{sortKey === "change7d" && <ArrowUpDown className="w-4 h-4" />}
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-right text-sm font-semibold text-slate-300 cursor-pointer hover:text-[#03deb5]"
                    onClick={() => handleSort("marketCap")}
                  >
                    <div className="flex items-center justify-end gap-2">
                      Market Cap
                      {sortKey === "marketCap" && <ArrowUpDown className="w-4 h-4" />}
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-right text-sm font-semibold text-slate-300 cursor-pointer hover:text-[#03deb5]"
                    onClick={() => handleSort("volume")}
                  >
                    <div className="flex items-center justify-end gap-2">
                      Volume (24h)
                      {sortKey === "volume" && <ArrowUpDown className="w-4 h-4" />}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-8 text-center text-slate-400">
                      Loading coins...
                    </td>
                  </tr>
                ) : filteredCoins.length > 0 ? (
                  filteredCoins.map((coin) => (
                    <tr key={coin.id} className="border-b border-slate-800 hover:bg-slate-800 transition-colors">
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleFavorite(coin.id)}
                          className="text-slate-400 hover:text-[#03deb5] transition-colors"
                        >
                          <Star className="w-4 h-4" fill={favorites.includes(coin.id) ? "currentColor" : "none"} />
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">{coin.market_cap_rank}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={coin.image || "/placeholder.svg"}
                            alt={coin.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className="font-semibold text-white">{coin.name}</p>
                            <p className="text-xs text-slate-400">{coin.symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-semibold text-white">
                        {formatPrice(coin.current_price)}
                      </td>
                      <td
                        className={`px-6 py-4 text-right text-sm font-semibold ${
                          coin.price_change_percentage_24h && coin.price_change_percentage_24h >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {coin.price_change_percentage_24h
                          ? `${coin.price_change_percentage_24h >= 0 ? "+" : ""}${coin.price_change_percentage_24h.toFixed(2)}%`
                          : "-"}
                      </td>
                      <td
                        className={`px-6 py-4 text-right text-sm font-semibold ${
                          coin.price_change_percentage_7d_in_currency &&
                          coin.price_change_percentage_7d_in_currency >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {coin.price_change_percentage_7d_in_currency
                          ? `${coin.price_change_percentage_7d_in_currency >= 0 ? "+" : ""}${coin.price_change_percentage_7d_in_currency.toFixed(2)}%`
                          : "-"}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-slate-300">
                        {formatMarketCap(coin.market_cap)}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-slate-300">{formatVolume(coin.total_volume)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="px-6 py-8 text-center text-slate-400">
                      No coins found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
