import { PresaleHero } from "@/components/presale/hero";
import { PresaleStats } from "@/components/presale/stats";
import { HowToBuy } from "@/components/presale/how-to-buy";
import { Benefits } from "@/components/presale/benefits";

export default function PresalePage() {
  return (
    <div className="min-h-screen bg-zinc-900 relative overflow-hidden">
      <div className="relative z-10">
        <PresaleHero />
        <PresaleStats />
        <HowToBuy />
        <Benefits />
      </div>
    </div>
  );
}
