"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Search, ChevronDown } from "lucide-react"
import useCoins from "@/hooks/use-coins"

import { Coin } from "@/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type CoinSelectorProps = {
  onCoinSelect: (coin: Coin) => void
  selectedCoin: Coin | null
}

const CoinSelector = ({ onCoinSelect, selectedCoin }: CoinSelectorProps) => {
  const { coins, isLoading } = useCoins()
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setFilteredCoins(coins)
  }, [coins])

  useEffect(() => {
    const filtered = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredCoins(filtered)
  }, [searchTerm, coins])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelectCoin = (coin: Coin) => {
    console.log(coin)
    onCoinSelect(coin)
    setIsOpen(false)
    setSearchTerm("")
  }

  return (
    <div className="space-y-2 relative" ref={dropdownRef}>
      <Label className="cfu-title flex items-center gap-2">
        <span className="w-4 h-4 text-amber-400">₿</span>
        Select Coin
      </Label>
      <Button
        variant="outline" 
        className="flex items-center justify-between w-full cursor-pointer p-2 h-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          {selectedCoin ? (
           <>
            <Image 
              src={selectedCoin.image || "/coins/cryptocurrency.png"}
              alt={selectedCoin.name}
              width={24}
              height={24}
              className="size-6 rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold">{selectedCoin.symbol}</p>
              <p className="text-xs text-gray-400">
                ${selectedCoin.current_price.toLocaleString()}
              </p>
            </div>
           </> 
          ) : (
            <span className="text-gray-500">Choose a coin...</span>
          )}
        </div>
        <ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}/>
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-950 border border-gray-950/8 dark:border-white/15 text-gray-950/50 dark:text-gray-200 rounded-lg shadow-2xl z-50">
          {/* Search input */}
          <div className="p-3 border-b border-gray-950/8 dark:border-white/15">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"/>
              <Input
                id="text"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white dark:bg-white/5 border-gray-950/8 dark:border-white/15 text-gray-950/50 dark:text-gray-200 placeholder-gray-500 focus:border-cfu-0 pl-10"
                placeholder="Search coins..."
                
              />
            </div>
          </div>

          {/* Coins list */}
          <div className="max-h-64 overflow-y-auto">
            {isLoading ? (
              <p className="p-4 text-center">Loading coins...</p>
            ) : filteredCoins.length > 0 ? (
              filteredCoins.map(coin => (
                <Button
                  key={coin.id}
                  variant="outline"
                  className="flex items-center gap-3 text-left w-full cursor-pointer rounded-none border-t-0 border-x-0 p-2 h-auto"
                  onClick={() => handleSelectCoin(coin)}
                >
                  <Image 
                    src={coin.image || "/coins/cryptocurrency.png"}
                    alt={coin.name}
                    width={24}
                    height={24}
                    className="size-6 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-semibold cfu-title">{coin.symbol}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{coin.name}</p>
                  </div>
                  <p className="font-semibold text-cfu-0">${coin.current_price.toLocaleString()}</p>
                </Button>
              ))
            ) : (
              <p className="p-4 text-center">No coins found</p>
            )}
          </div>
        </div>
      )}
    </div> 
  )
}

export default CoinSelector
