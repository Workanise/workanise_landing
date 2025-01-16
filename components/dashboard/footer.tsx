import { GlowCard } from "@/components/ui/glow-card"
import { Button } from "@/components/ui/button"
import { Users, Gift, Copy } from 'lucide-react'
import { Input } from "../ui/input"

export function DashboardFooter() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 p-6 border-t border-zinc-800">
      <GlowCard className="p-6 bg-zinc-900/50">
        <h3 className="text-lg font-medium text-white mb-4">
          Your Last Transactions
        </h3>
        <div className="text-zinc-500 text-center py-8">
          There are no finalized transactions yet...
        </div>
      </GlowCard>

      <GlowCard className="p-6 bg-zinc-900/50">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-white">Referrals</h3>
            <p className="text-sm text-zinc-500">
              ALL OF YOUR REFERRALS APPEAR HERE
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-zinc-900">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#00faa7]" />
                <span className="text-white">Your Referrals</span>
              </div>
              <span className="text-white">0</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-zinc-900">
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-[#00faa7]" />
                <span className="text-white">Your Referral Earnings</span>
              </div>
              <span className="text-white">0</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Input
              value="https://workanise.com/presale/x81d3j"
              readOnly
              className="bg-zinc-900 border-zinc-800"
            />
            <Button variant="outline" size="icon">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </GlowCard>
    </div>
  )
}

