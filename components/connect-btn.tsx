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
import { createWallet } from "thirdweb/wallets";
import Image from "next/image";
import { client } from "@/lib/thirdweb";
import {
  coinbase_icon,
  metamark_icon,
  phantom_icon,
  okx_icon,
  presale_time,
} from "@/lib/constant";
import { useConnect, useAutoConnect, useActiveAccount } from "thirdweb/react";
import CountdownTimer from "@/lib/countdown-time";

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
    name: "OKX Wallet",
    create: () => createWallet("com.okex.wallet"),
    icon: okx_icon as string,
  },
  {
    name: "Phantom",
    create: () => createWallet("app.phantom"),
    icon: phantom_icon as string,
  },
];

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.okex.wallet"),
  createWallet("app.phantom"),
];

interface ConnectBtnProps {
  onclick?: () => void;
  loading?: boolean;
}

export function ConnectBtn({ onclick, loading }: ConnectBtnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
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
          disabled={!isButtonEnabled}
          onClick={onclick}
          loading={loading}
        >
          <CountdownTimer
            targetDate={presale_time as string}
            liveText="Mint Now"
            onStateChange={(isLive) => setIsButtonEnabled(isLive)}
          />
        </Button>
      ) : (
        <DialogTrigger asChild>
          <div>
            <Button
              className="w-full gap-2 bg-[#00faa7] text-zinc-900 hover:bg-[#00faa7]/90"
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
            <div
              key={wallet.name}
              className="flex py-3 px-2 rounded-sm justify-start gap-4 border-zinc-700 hover:bg-zinc-800 hover:text-white cursor-pointer"
              onClick={() => handleConnect(wallet.create)}
            >
              <Image
                src={wallet.icon}
                alt={`${wallet.name} icon`}
                width={24}
                height={24}
                className="rounded-full cursor-pointer"
              />
              <span className="cursor-pointer"> {wallet.name}</span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
