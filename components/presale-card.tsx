"use client";

import { Progress } from "@/components/ui/progress";
import { GlowCard } from "@/components/ui/glow-card";
import { usePresaleProgress } from "@/hooks/usePresaleProgress";
import { Mint } from "./dashboard/mint";

export function PresaleCard() {
  const { currentSupply, progressPercentage, isPending } = usePresaleProgress();

  return (
    <GlowCard glowColor="#00faa7" className="w-full max-w-md p-6">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">Buy Now</h2>
          <p className="text-[#00faa7]">Before Token Finishes</p>
        </div>
        <div className="space-y-2">
          <Progress
            value={parseFloat(progressPercentage)}
            className="h-2 bg-zinc-500"
          />
          <div className="flex justify-between text-sm text-zinc-400">
            <span>{progressPercentage}% Sold</span>
            <span>USD Raised: $2,133,796.71</span>
          </div>
        </div>
        <Mint />
      </div>
    </GlowCard>
  );
}
