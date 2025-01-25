"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { ConnectBtn } from "./connect-btn";
import { LayoutGrid } from "lucide-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function WalletLogin() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative w-full h-full">
        {/* Background Effects */}
        <ShootingStars />
        <StarsBackground />

        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg sm:max-w-md w-full p-6">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="Workanise Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="font-bold text-xl text-white">Workanis3</span>
              </div>

              <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <GradientText>Enter The Workanis3 Presale</GradientText>
                </h2>
                <p className="text-zinc-400">
                  To join the presale, connect your wallet first!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:justify-center">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-zinc-700"
                  onClick={() => router.push("/")}
                >
                  <LayoutGrid className="size-4" />
                  Go Home
                </Button>
                <ConnectBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
