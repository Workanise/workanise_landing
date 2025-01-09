import { GlowCard } from "@/components/ui/glow-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function HowToParticipate() {
  return (
    <section id="how-to-participate" className="py-20 px-4">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How to Participate</h2>
          <p className="text-zinc-400">Join the Workanise presale in a few simple steps</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <GlowCard className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00faa7] text-zinc-900 font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white">Connect Your Wallet</h3>
              </div>
              <p className="text-zinc-400 pl-12">
                Click on "Connect Wallet" and choose your preferred wallet (MetaMask, Trust Wallet, etc.)
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00faa7] text-zinc-900 font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white">Choose Payment Method</h3>
              </div>
              <p className="text-zinc-400 pl-12">
                Select your preferred payment method: ETH, USDT, or Credit Card
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00faa7] text-zinc-900 font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white">Enter Amount & Confirm</h3>
              </div>
              <p className="text-zinc-400 pl-12">
                Enter the amount you wish to invest and confirm the transaction
              </p>
            </div>

            <Button
             onClick={() => (window.location.href = "/presale")}
             className="w-full gap-2 bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90">
              Join Presale Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </GlowCard>

          <GlowCard className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/placeholder"
              title="How to Participate in Workanise Presale"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </GlowCard>
        </div>
      </div>
    </section>
  )
}

