"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutGrid,
  ShoppingCart,
  History,
  Trophy,
  Newspaper,
  Plus,
  Home,
  LogOut,
} from "lucide-react";
import {
  useDisconnect,
  useActiveWallet,
  useActiveAccount,
  useWalletBalance,
} from "thirdweb/react";
import { client } from "@/lib/thirdweb";
import { defineChain } from "thirdweb/chains";

export function AppSidebar({ walletAddress }: { walletAddress: string }) {
  const menuItems = [
    { icon: LayoutGrid, label: "Dashboard", href: "/presale", active: true },
    // { icon: ShoppingCart, label: "Buy Now", href: "/presale/buy" },
    { icon: History, label: "Transactions", href: "/presale/transactions" },
    { icon: Trophy, label: "Leaderboard", href: "/presale/leaderboard" },
    // { icon: Newspaper, label: "Project Updates", href: "/presale/updates" },
    { icon: Plus, label: "Claim", href: "/presale/claim" },
  ];

  const wallet = useActiveWallet();

  // const { data, isLoading, isError } = useWalletBalance({
  //   chain: defineChain(11155111),
  //   address: account?.address,
  //   client,
  // });

  console.log("wallet", wallet);

  return (
    <Sidebar className="border-r border-zinc-800 hidden lg:flex">
      <SidebarHeader className="border-b border-zinc-800 p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Workanise Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-xl">Workanise</span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label} className="py-2">
              <SidebarMenuButton
                asChild
                isActive={item.active}
                className="gap-3"
              >
                <Link href={item.href}>
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-zinc-800">
        <div className="p-2">
          <div className="mb-4">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-900">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500">Logged in as</span>
                <span className="text-sm text-white">{walletAddress}</span>
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
      </SidebarFooter>
    </Sidebar>
  );
}
