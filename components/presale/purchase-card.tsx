"use client";
import { GlowCard } from "@/components/ui/glow-card";
import { Mint } from "../mint";

export function PurchaseCard() {

  return (
    <GlowCard className="p-6 w-full max-w-md mx-auto">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">Buy WORK Tokens</h2>
          <p className="text-[#00faa7]">Limited Time Offer</p>
        </div>
        <Mint />
        <div className="text-sm text-zinc-400">
          By purchasing you agree to our{" "}
          <button className="text-[#00faa7] hover:underline">
            Terms of Service
          </button>
        </div>
      </div>
    </GlowCard>
  );
}
