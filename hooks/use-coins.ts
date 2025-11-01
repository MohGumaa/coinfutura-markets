"use client"

import { Coin } from "@/types"
import { useState, useEffect } from "react"

const useCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    const fetchCoins = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false&price_change_percentage=24h,7d",
          { signal }
        )

        if (!response.ok) throw new Error("Failed to fetch coins")

        const data = await response.json()
        const formattedCoins = data.map((coin: any) => ({
          id: coin.id,
          symbol: coin.symbol.toUpperCase(),
          name: coin.name,
          image: coin.image,
          current_price: coin.current_price,
          market_cap_rank: coin.market_cap_rank,
          market_cap: coin.market_cap,
          total_volume: coin.total_volume,
          price_change_percentage_24h: coin.price_change_percentage_24h,
          price_change_percentage_7d_in_currency: coin.price_change_percentage_7d_in_currency,
        }))
        setCoins(formattedCoins)
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          // Fetch was aborted — do nothing
          return
        }
        setError(err instanceof Error ? err.message : "Error fetching coins")
        console.error("Error fetching coins:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCoins()

    // Cleanup: cancel fetch on unmount
    return () => controller.abort();
  }, [])
  
  return { coins, isLoading, error }
}

export default useCoins
