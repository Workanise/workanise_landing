'use client'

import { Button } from "@/components/ui/button"
import { PurchaseCard } from "@/components/presale/purchase-card"
import CountdownTimer from "@/components/countdown-timer"
import { presale_time } from "@/lib/constant"

export function PresaleHero() {

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block">
          <CountdownTimer targetDate={presale_time as string} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Join the Future of
            <span className="block text-[#00faa7]">Web3 Workspace</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl">
            Be part of the revolution. Purchase WORK tokens now and get exclusive benefits when we launch.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90">
              Buy WORK Now
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700">
              Read Litepaper
            </Button>
          </div>
        </div>
        
        <PurchaseCard />
      </div>
    </section>
  )
}

