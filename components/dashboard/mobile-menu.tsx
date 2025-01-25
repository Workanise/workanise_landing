"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  LayoutGrid,
  ShoppingCart,
  History,
  Trophy,
  Newspaper,
  Plus,
  Home,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  useDisconnect,
  useActiveWallet,
} from "thirdweb/react";

export function MobileMenu({ walletAddress }: { walletAddress: string }) {
  const menuItems = [
    { icon: LayoutGrid, label: "Dashboard", href: "/presale", active: true },
    // { icon: ShoppingCart, label: "Buy Now", href: "/presale/buy" },
    { icon: History, label: "Transactions", href: "/presale/transactions" },
    { icon: Trophy, label: "Leaderboard", href: "/presale/leaderboard" },
    // { icon: Newspaper, label: "Project Updates", href: "/presale/updates" },
    { icon: Plus, label: "Claim", href: "/presale/claim" },
  ];

  const wallet = useActiveWallet();

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-zinc-900 lg:hidden">
      <div className="flex items-center justify-between px-4 py-2">
        <Link href="/presale" className="flex flex-col items-center p-2">
          <LayoutGrid className="w-5 h-5 text-[#00faa7]" />
          <span className="text-xs text-zinc-400">Dashboard</span>
        </Link>

        <Link href="/presale/buy" className="flex flex-col items-center p-2">
          <ShoppingCart className="w-5 h-5 text-zinc-400" />
          <span className="text-xs text-zinc-400">Buy</span>
        </Link>

        <Link
          href="/presale/transactions"
          className="flex flex-col items-center p-2"
        >
          <History className="w-5 h-5 text-zinc-400" />
          <span className="text-xs text-zinc-400">History</span>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="flex flex-col items-center p-2"
            >
              <Menu className="w-5 h-5 text-zinc-400" />
              <span className="text-xs text-zinc-400">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-zinc-900 border-zinc-800 p-0"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/logo.png"
                    alt="Workanise Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="font-bold text-xl">Workanise</span>
                </div>
              </div>

              <div className="flex-1 overflow-auto py-4">
                <div className="space-y-1 px-2">
                  {menuItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className={`w-full justify-start gap-3 ${
                        item.active
                          ? "bg-zinc-800 text-[#00faa7]"
                          : "text-zinc-400"
                      }`}
                      asChild
                    >
                      <Link href={item.href}>
                        <item.icon className="w-5 h-5" />
                        {item.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-zinc-800">
                <div className="mb-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800">
                    <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg"
                        alt="Avatar"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-zinc-500">
                        Logged in as
                      </span>
                      <span className="text-sm text-white">
                        {walletAddress}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3"
                    asChild
                  >
                    <Link href="/">
                      <Home className="w-5 h-5" />
                      Home
                    </Link>
                  </Button>
                  {wallet && (
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 text-red-500"
                      onClick={() => wallet.disconnect()}
                    >
                      <LogOut className="w-5 h-5" />
                      Logout
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
