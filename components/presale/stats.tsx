import { GlowCard } from "@/components/ui/glow-card"
import { Progress } from "@/components/ui/progress"

export function PresaleStats() {
  return (
    <section className="py-20 px-4 border-t border-zinc-800">
      <div className="container mx-auto">
        <GlowCard className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-zinc-400">Total Raised</h3>
              <p className="text-3xl font-bold text-white">$2,133,796.71</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-zinc-400">Token Price</h3>
              <p className="text-3xl font-bold text-[#00faa7]">TBA</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-zinc-400">Total Supply</h3>
              <p className="text-3xl font-bold text-white">260M WRK</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-zinc-400">Next Price</h3>
              <p className="text-3xl font-bold text-[#00faa7]">TBA</p>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Progress</span>
              <span className="text-[#00faa7]">62.23%</span>
            </div>
            <Progress value={62.23} className="h-2 bg-zinc-600" />
          </div>
        </GlowCard>
      </div>
    </section>
  )
}

