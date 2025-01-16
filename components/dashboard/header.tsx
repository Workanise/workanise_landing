import { Wallet, Coins, QrCode } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { GlowCard } from "@/components/ui/glow-card"

export function DashboardHeader() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-200">
        Welcome to Your Dashboard!
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlowCard className="p-6 bg-zinc-900/50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-zinc-400">Your Total Workanise Balance</p>
              <p className="text-2xl font-bold text-white mt-1">0</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#00faa7]/10 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-[#00faa7]" />
            </div>
          </div>
        </GlowCard>

        <GlowCard className="p-6 bg-zinc-900/50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-zinc-400">Your Tokens Worth at Launch</p>
              <p className="text-2xl font-bold text-white mt-1">$0</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#00faa7]/10 flex items-center justify-center">
              <Coins className="w-5 h-5 text-[#00faa7]" />
            </div>
          </div>
        </GlowCard>

        <GlowCard className="p-6 bg-zinc-900/50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-zinc-400">Receiving Wallet Address</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-2 bg-zinc-800/50 rounded px-3 py-1">
                  <Wallet className="w-4 h-4 text-zinc-400" />
                  <span className="text-sm text-white">0xb768d4BF24</span>
                </div>
                <Button variant="ghost" size="sm" className="text-[#00faa7]">
                  Remove
                </Button>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#00faa7]/10 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-[#00faa7]" />
            </div>
          </div>
        </GlowCard>
      </div>
    </div>
  )
}

