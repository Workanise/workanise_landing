"use client";

import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet2, CreditCard } from "lucide-react";
import Image from "next/image";
import { ConnectBtn } from "../connect-btn";

export function PurchaseCard() {
  return (
    <GlowCard className="p-6 w-full max-w-md mx-auto">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">Buy WRK Tokens</h2>
          <p className="text-[#00faa7]">Limited Time Offer</p>
        </div>

        <Tabs defaultValue="eth" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-zinc-800/50">
            <TabsTrigger
              value="eth"
              className="data-[state=active]:bg-[#00faa7] data-[state=active]:text-zinc-900"
            >
              ETH
            </TabsTrigger>
            <TabsTrigger
              value="usdt"
              className="data-[state=active]:bg-[#00faa7] data-[state=active]:text-zinc-900"
            >
              USDT
            </TabsTrigger>
            <TabsTrigger
              value="card"
              className="data-[state=active]:bg-[#00faa7] data-[state=active]:text-zinc-900"
            >
              CARD
            </TabsTrigger>
          </TabsList>

          <TabsContent value="eth" className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg mt-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/eth.png"
                  alt="ETH"
                  width={16}
                  height={16}
                  className="rounded-full"
                />
                <span className="text-zinc-400">ETH you pay</span>
              </div>
              <input
                type="number"
                className="bg-transparent text-right focus:outline-none text-white w-24"
                placeholder="0.0"
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="WRK"
                  width={18}
                  height={18}
                  className="rounded-full"
                />
                <span className="text-zinc-400">WRK you receive</span>
              </div>
              <span className="text-white">0.0</span>
            </div>
            <ConnectBtn />
          </TabsContent>

          <TabsContent value="usdt" className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg mt-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="USDT"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-zinc-400">USDT you pay</span>
              </div>
              <input
                type="number"
                className="bg-transparent text-right focus:outline-none text-white w-24"
                placeholder="0.0"
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="WRK"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-zinc-400">WRK you receive</span>
              </div>
              <span className="text-white">0.0</span>
            </div>
            <Button className="w-full gap-2 bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90">
              <Wallet2 className="w-4 h-4" />
              Connect Wallet
            </Button>
          </TabsContent>

          <TabsContent value="card" className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg mt-4">
              <div className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-zinc-400" />
                <span className="text-zinc-400">Amount in USD</span>
              </div>
              <input
                type="number"
                className="bg-transparent text-right focus:outline-none text-white w-24"
                placeholder="0.0"
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="WRK"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-zinc-400">WRK you receive</span>
              </div>
              <span className="text-white">0.0</span>
            </div>
            <Button className="w-full gap-2 bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90">
              <CreditCard className="w-4 h-4" />
              Pay with Card
            </Button>
          </TabsContent>
        </Tabs>

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
