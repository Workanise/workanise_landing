"use client"

import { GlowCard } from "@/components/ui/glow-card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

export function MainContent() {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 45
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(current => {
        let { days, hours, minutes, seconds } = current
        
        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex-1 grid lg:grid-cols-2 gap-6 p-6">
      <div className="space-y-6">
        <GlowCard className="p-6 bg-zinc-900/50">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-zinc-400">
                1 WRK = <span className="text-[#00faa7]">$0.0207</span>
              </div>
              {/* <div className="text-zinc-400">
                Current Block: <span className="text-white">Block 2</span>
              </div> */}
            </div>

            <div>
              <h3 className="text-[#00faa7] mb-4">Until Price Increase</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Minutes" },
                  { value: timeLeft.seconds, label: "Seconds" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-zinc-900 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-white">
                      {item.value}
                    </div>
                    <div className="text-sm text-zinc-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Progress value={83.46} className="h-2" />
              <div className="flex justify-between text-sm">
                <span className="text-[#00faa7]">83.46%</span>
                <span className="text-zinc-400">100%</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 rounded-lg p-4">
                <div className="text-sm text-zinc-400">USDT Raised:</div>
                <div className="text-lg font-medium text-white">$3,101,251.12</div>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-4">
                <div className="text-sm text-zinc-400">Tokens Sold:</div>
                <div className="text-lg font-medium text-white">176,356,387.11</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-sm text-[#00faa7]">
                  Select Payment Method
                </label>
                <Select defaultValue="usdt">
                  <SelectTrigger className="w-full bg-zinc-900">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usdt">USDT-ERC20</SelectItem>
                    <SelectItem value="eth">ETH</SelectItem>
                    <SelectItem value="bnb">BNB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <label className="text-sm text-zinc-400">
                  Enter amount in USD
                </label>
                <Input
                  type="number"
                  placeholder="200"
                  className="bg-zinc-900 border-zinc-800"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm text-zinc-400">
                  Amount of USDT-ERC20 you pay
                </label>
                <Input
                  type="number"
                  value="199.906654"
                  readOnly
                  className="bg-zinc-900 border-zinc-800"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm text-zinc-400">
                  Amount of WRK you receive
                </label>
                <Input
                  type="number"
                  value="9,661.836"
                  readOnly
                  className="bg-zinc-900 border-zinc-800"
                />
              </div>

              <Button className="w-full bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90">
                Buy Now
              </Button>

              {/* <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="Apply Your Promo Code?"
                  className="bg-zinc-900 border-zinc-800"
                />
                <Button variant="outline" className="sm:w-24">
                  Apply
                </Button>
              </div> */}
            </div>
          </div>
        </GlowCard>
      </div>

      <div className="space-y-6">
        <GlowCard className="p-6 bg-zinc-900/50">
          <h3 className="text-lg font-medium text-white mb-4">
            Holders Leaderboard
          </h3>
          <div className="space-y-4">
            {[
              { rank: 1, address: "0x6822...db8", level: 8, amount: "$150,000.00" },
              { rank: 2, address: "0xf367...361", level: 7, amount: "$88,115.20" },
              { rank: 3, address: "0xe800...871", level: 7, amount: "$58,637.61" },
              { rank: 4, address: "0xE5f...BBD", level: 7, amount: "$51,762.91" },
              { rank: 5, address: "0x0b4d...4E9", level: 7, amount: "$50,831.99" },
            ].map((holder) => (
              <div
                key={holder.address}
                className="flex items-center gap-4 p-3 rounded-lg bg-zinc-900/50"
              >
                <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-sm">
                  {holder.rank}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white">{holder.address}</div>
                  <div className="text-xs text-[#00faa7]">Level {holder.level}</div>
                </div>
                <div className="text-sm text-white">{holder.amount}</div>
              </div>
            ))}
          </div>
        </GlowCard>
      </div>
    </div>
  )
}

