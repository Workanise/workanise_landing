"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  useDisconnect,
  useActiveWallet,
  useActiveAccount,
} from "thirdweb/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { shortenAddress } from "thirdweb/utils";

export function Navigation() {
  const menuItems = [
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "About", href: "#about" },
  ];

  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();
  const account = useActiveAccount();

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
            <span className="font-bold text-xl text-white">Workanis3</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-zinc-400 hover:text-[#00faa7] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button
            onClick={() => (window.location.href = "/presale")}
            className="bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90"
          >
            Join Presale
          </Button>

          {wallet && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {shortenAddress(account?.address || "")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border border-white">
                <DropdownMenuItem onClick={() => disconnect(wallet)}>
                  Disconnect
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-zinc-400 hover:text-[#00faa7] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => (window.location.href = "/presale")}
                className="bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90 w-full"
              >
                Join Presale
              </Button>
              {wallet && (
                <>
                  <Button onClick={() => disconnect(wallet)} variant="outline">
                    {shortenAddress(account?.address || "")}
                  </Button>
                  <Button
                    onClick={() => disconnect(wallet)}
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    Disconnect
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
