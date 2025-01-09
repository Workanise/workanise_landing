import { GlowCard } from "@/components/ui/glow-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wallet2, CreditCard, CheckCircle } from 'lucide-react'

export function HowToBuy() {
  const steps = [
    {
      icon: <Wallet2 className="w-6 h-6" />,
      title: "Connect Your Wallet",
      description: "Choose your preferred wallet (MetaMask, Trust Wallet) or use a credit card"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Make Payment",
      description: "Enter the amount you wish to invest in ETH, USDT, or USD"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Receive Tokens",
      description: "Get your WRK tokens directly in your wallet after confirmation"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How to Buy</h2>
          <p className="text-zinc-400">Follow these simple steps to purchase WORK tokens</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <GlowCard key={index} className="p-6">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-[#00faa7]/10 flex items-center justify-center text-[#00faa7]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90">
            Buy WORK Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

