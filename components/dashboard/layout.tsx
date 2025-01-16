'use client'

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { MobileMenu } from "./mobile-menu";
import { useActiveAccount } from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";
import { WalletLogin } from "../wallet-login";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const account = useActiveAccount();

  if (!account?.address) {
    return <WalletLogin />;
  }

  return (
    <SidebarProvider>
      <AppSidebar walletAddress={shortenAddress(account?.address)} />
      <main className="w-full flex-1 flex flex-col min-h-screen pb-16 lg:pb-0">
        {children}
        <MobileMenu walletAddress={shortenAddress(account?.address)} />
      </main>
    </SidebarProvider>
  );
}
