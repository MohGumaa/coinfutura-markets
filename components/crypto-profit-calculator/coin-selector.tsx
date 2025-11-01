"use client"

import { useState, useEffect, useRef } from "react"
import { Search, ChevronDown } from "lucide-react"
import useCoins from "@/hooks/use-coins"

import { Coin } from "@/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const CoinSelector = () => {
  const { coins, isLoading } = useCoins()
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      CoinSelector
    </div> 
  )
}

export default CoinSelector
