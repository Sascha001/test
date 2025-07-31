"use client"

import { useState } from "react"
import { Search, TrendingUp, TrendingDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Mock data für Wertpapiere
const mockSecurities = [
  { symbol: "AAPL", name: "Apple Inc.", price: 178.32, change: 2.34, changePercent: 1.33 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 384.52, change: -1.45, changePercent: -0.38 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 138.15, change: 0.87, changePercent: 0.63 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 155.89, change: -2.11, changePercent: -1.33 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 242.68, change: 5.23, changePercent: 2.20 },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 459.12, change: 12.45, changePercent: 2.79 },
  { symbol: "META", name: "Meta Platforms Inc.", price: 331.44, change: -3.22, changePercent: -0.96 },
  { symbol: "SAP", name: "SAP AG", price: 123.45, change: 1.23, changePercent: 1.01 },
  { symbol: "ASML", name: "ASML Holding NV", price: 678.90, change: -5.67, changePercent: -0.83 },
]

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const filteredSecurities = mockSecurities.filter(
    (security) =>
      security.symbol.toLowerCase().includes(query.toLowerCase()) ||
      security.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (security: typeof mockSecurities[0]) => {
    setQuery("")
    setIsOpen(false)
    // Hier würde die Navigation zum Wertpapier erfolgen
    console.log("Selected security:", security)
  }

  return (
    <div className="relative flex-1 max-w-2xl">
      <Popover open={isOpen && query.length > 0} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Wertpapiere suchen (z.B. AAPL, Apple, Tesla...)"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setIsOpen(e.target.value.length > 0)
              }}
              className="pl-10 pr-4 h-10 w-full bg-background border-input focus:border-primary"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent 
          className="w-full p-0 mt-1" 
          align="start"
          side="bottom"
          style={{ width: "var(--radix-popover-trigger-width)" }}
        >
          <div className="max-h-64 overflow-y-auto">
            {filteredSecurities.length > 0 ? (
              <div className="py-2">
                {filteredSecurities.slice(0, 8).map((security) => (
                  <button
                    key={security.symbol}
                    onClick={() => handleSelect(security)}
                    className="w-full px-4 py-3 text-left hover:bg-accent hover:text-accent-foreground flex items-center justify-between group"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{security.symbol}</span>
                        <span className="text-xs text-muted-foreground truncate max-w-64">
                          {security.name}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        ${security.price.toFixed(2)}
                      </span>
                      <div className={`flex items-center gap-1 text-xs ${
                        security.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {security.change >= 0 ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        <span>{security.changePercent.toFixed(2)}%</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-4 px-4 text-center text-sm text-muted-foreground">
                Keine Wertpapiere gefunden
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}