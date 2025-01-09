"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import Image from "next/image";
import { client } from "@/lib/thirdweb";
import {
  coinbase_icon,
  metamark_icon,
  rainbow_icon,
  bitget_icon,
  phantom_icon,
  okx_icon,
} from "@/lib/constant";
import { useConnect, useAutoConnect, useActiveAccount } from "thirdweb/react";

const walletss = [
  {
    name: "Metamask",
    create: () => createWallet("io.metamask"),
    icon: metamark_icon as string,
  },
  {
    name: "Coinbase Wallet",
    create: () => createWallet("com.coinbase.wallet"),
    icon: coinbase_icon as string,
  },
  {
    name: "Rainbow",
    create: () => createWallet("me.rainbow"),
    icon: rainbow_icon as string,
  },
  {
    name: "OKX Wallet",
    create: () => createWallet("com.okex.wallet"),
    icon: okx_icon as string,
  },
  {
    name: "Bitget",
    create: () => createWallet("com.bitget.web3"),
    icon: bitget_icon as string,
  },
  {
    name: "Phantom",
    create: () => createWallet("app.phantom"),
    icon: phantom_icon as string,
  },
];

const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("me.rainbow"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.okex.wallet"),
  createWallet("com.bitget.web3"),
  createWallet("app.phantom"),
];

export function ConnectBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const { connect } = useConnect();
  const account = useActiveAccount();

  const { isLoading } = useAutoConnect({
    client,
    wallets,
    onConnect: () => {
      console.log("Wallet auto-connected!");
    },
    timeout: 5000,
  });

  const handleConnect = async (createWalletFunc: () => any) => {
    try {
      await connect(async () => {
        const wallet = createWalletFunc();
        await wallet.connect({ client });
        setIsOpen(false);

        return wallet;
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {account ? (
        <Button
          variant="outline"
          className="w-full gap-2 bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90"
        >
          Buy
        </Button>
      ) : (
        <DialogTrigger asChild>
          <div>
            <Button
              className="w-full gap-2 bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90"
              loading={isLoading}
            >
              <Wallet2 className="w-4 h-4" />
              Connect Wallet
            </Button>
          </div>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[400px] bg-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>
            Choose your preferred wallet to connect and start using our
            platform.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {walletss.map((wallet) => (
            <Button
              key={wallet.name}
              variant="outline"
              className="w-full justify-start gap-4 border-zinc-700 hover:bg-zinc-800 hover:text-white"
              onClick={() => handleConnect(wallet.create)}
            >
              <Image
                src={wallet.icon}
                alt={`${wallet.name} icon`}
                width={24}
                height={24}
                className="rounded-full"
              />
              {wallet.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
