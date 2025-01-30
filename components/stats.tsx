"use client";

import { GlowCard } from "@/components/ui/glow-card";
import { Progress } from "@/components/ui/progress";
import { usePresaleProgress } from "@/hooks/usePresaleProgress";
import { max_supply, price_per_work } from "@/lib/constant";
import { useTransaction } from "@/data/get-transaction";

export function PresaleStats() {
 

  const { data, isPending } = useTransaction();

  const transaction = data?.data || [];

  const totalUSD = transaction.reduce((sum, item) => {
    return sum + (Number(item.meta?.totalAmountAsUSD) || 0);
  }, 0);

  const totalQuantity = transaction.reduce((sum, item) => {
    return sum + (Number(item.quantity) || 0);
  }, 0);

  
  const formattedTotalUSD = (totalUSD / 1_000_000).toFixed(1);


  const { progressPercentage, } = usePresaleProgress(totalQuantity);

  return (
    <section className="py-20 px-4 border-t border-zinc-800">
      <div className="container mx-auto">
        <GlowCard className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-zinc-400">
                Total Raised
              </h3>
              <p className="text-3xl font-bold text-white">${formattedTotalUSD}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-zinc-400">Token Price</h3>
              <p className="text-3xl font-bold text-[#00faa7]">${price_per_work}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-zinc-400">
                Presale Hard Cap
              </h3>
              <p className="text-3xl font-bold text-white">109.5M WORK</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-zinc-400">
                Max Total Supply
              </h3>
              <p className="text-3xl font-bold text-white">{max_supply} WORK</p>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Progress</span>
              <span className="text-[#00faa7]">{progressPercentage}%</span>
            </div>
            <Progress
              value={parseFloat(progressPercentage)}
              className="h-2 bg-zinc-600"
            />
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
