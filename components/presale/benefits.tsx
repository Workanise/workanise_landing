import { GlowCard } from "@/components/ui/glow-card"
import { Shield, Zap, Users, Trophy } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Investment",
      description: "Smart contract audited and team tokens locked for 13 months"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Early Access",
      description: "Get exclusive access to platform features and benefits"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Be part of a growing community of web3 professionals"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Presale Benefits",
      description: "Special rewards and bonuses for presale participants"
    }
  ]

  return (
    <section className="py-20 px-4 border-t border-zinc-800">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Participate?</h2>
          <p className="text-zinc-400">Exclusive benefits for presale participants</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <GlowCard key={index} className="p-6">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-[#00faa7]/10 flex items-center justify-center text-[#00faa7]">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

