import { GlowCard } from "@/components/ui/glow-card"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Gift } from 'lucide-react'
import Image from "next/image"

export function SocialTasks() {
  return (
    <section id="social-tasks" className="py-20 px-4">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Early Adopter Campaign</h2>
          <p className="text-zinc-400">Join our community and earn rewards</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-[#00faa7]" />
                <h3 className="text-xl font-semibold text-white">Top Rewards</h3>
              </div>
              <p className="text-zinc-300">
                $120 ETH gift for the 5 top Participants with the most impression on X
                (minimum of 10k views for entry).
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Gift className="w-6 h-6 text-[#00faa7]" />
                <h3 className="text-xl font-semibold text-white">Early Bird Rewards</h3>
              </div>
              <ul className="space-y-2 text-zinc-300">
                <li>• $15 For The First 200 Participants</li>
                <li>• $8 For The Next 100 Participants</li>
                <li>• 100 Work Token For the next 1000 participants</li>
                <li>• 50 Work Token For the next 2000 participants</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#00faa7]" />
                <h3 className="text-xl font-semibold text-white">Community Benefits</h3>
              </div>
              <p className="text-zinc-300">
                Massive Reward For Participants That participate in the campaign of 
                the ultrastandard workspace coming to web3 freelance space.
              </p>
            </div>

            <Button 
              className="w-full sm:w-auto bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90"
              size="lg"
              onClick={() => window.open('https://gleam.io/ne7HX/workanise-early-adopter-campaign', '_blank')}
            >
              Join Campaign
            </Button>
          </div>

          <GlowCard className="aspect-[4/3] relative overflow-hidden">
          <iframe
              src="https://gleam.io/ne7HX/workanise-early-adopter-campaign"
              className="w-full h-full absolute inset-0 border-0"
              allow="clipboard-write"
            />
          </GlowCard>
        </div>
      </div>
    </section>
  )
}

