"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useEffect, useState } from "react";

export function Navigation() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "About", href: "#about" },
    {
      label: "Social Tasks Bonus",
      href: "https://gleam.io/ne7HX/workanise-early-adopter-campaign",
      external: true,
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Workanise Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="font-bold  text-base md:text-xl text-white">
              Workanis3
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#00faa7] transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-zinc-400 hover:text-[#00faa7] transition-colors"
              >
                {item.label}
              </Link>
            )
          )}

          <Button
            onClick={() => (window.location.href = "/presale")}
            className="bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90"
          >
            Join Presale
          </Button>

          {/* {wallet && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <div className="flex flex-col items-center text-[14px]">
                    <span> {shortenAddress(account?.address || "")}</span>
                    <span>
                      {data?.displayValue
                        ? parseFloat(data.displayValue)
                            .toFixed(2)
                            .replace(/\.00$/, "") // Remove trailing zeros if present
                        : "0.00"}{" "}
                      {""}
                      {data?.symbol}
                    </span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border border-white">
                <DropdownMenuItem onClick={() => disconnect(wallet)}>
                  Disconnect
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )} */}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="size-9 md:hidden" />
          </SheetTrigger>
          <SheetContent className="h-[600px] bg-black text-white border-zinc-800 border">
            <div className="flex flex-col gap-4 mt-8">
              {menuItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-[#00faa7] transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-zinc-400 hover:text-[#00faa7] transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}

              <Button
                onClick={() => (window.location.href = "/presale")}
                className="bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90 w-full"
              >
                Join Presale
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
