import { Button } from "@/components/ui/button"
import { GlowCard } from "@/components/ui/glow-card"
import { PurchaseCard } from "@/components/presale/purchase-card"

export function PresaleHero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block">
            <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm">
              🚀 <span className="ml-2 text-[#00faa7]">Presale is Live</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Join the Future of
            <span className="block text-[#00faa7]">Web3 Workspace</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl">
            Be part of the revolution. Purchase WRK tokens now and get exclusive benefits when we launch.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90">
              Buy WRK Now
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700">
              Read Whitepaper
            </Button>
          </div>
        </div>
        
        <PurchaseCard />
      </div>
    </section>
  )
}

