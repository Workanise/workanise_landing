import { PresaleHero } from "@/components/presale/hero"
import { PresaleStats } from "@/components/presale/stats"
import { HowToBuy } from "@/components/presale/how-to-buy"
import { Benefits } from "@/components/presale/benefits"
import Image from "next/image"

export default function PresalePage() {
  return (
    <div className="min-h-screen bg-zinc-900 relative overflow-hidden">
      <div className="relative z-10">
        <PresaleHero />
        <PresaleStats />
        <HowToBuy />
        <Benefits />
        <footer className="py-8 px-4 border-t border-zinc-800">
                <div className="container mx-auto">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/logo.png"
                        alt="Workanise Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                      <span className="font-bold text-white">Workanise</span>
                    </div>
                    <p className="text-zinc-400 text-sm text-center">
                      © {new Date().getFullYear()} Workanise. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
      </div>
    </div>
  )
}

