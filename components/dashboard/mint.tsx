"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ConnectBtn } from "../connect-btn";
import { eth_price_per_work, etherscan_url } from "@/lib/constant";
import { contract } from "@/lib/thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { useSendTransaction } from "thirdweb/react";
import { claimTo } from "thirdweb/extensions/erc20";
import { toast } from "react-toastify";

export const Mint = () => {
  const {
    mutate: sendTransaction,
    isSuccess,
    error,
    data: transactionResult,
  } = useSendTransaction({ payModal: false });
  const account = useActiveAccount();

  // State to store ETH input and WORK input
  const [ethAmount, setEthAmount] = useState<string>("");
  const [workAmount, setWorkAmount] = useState<string>("0");
  const [inputType, setInputType] = useState<"eth" | "work">("eth");

  // Handle ETH input change
  const handleEthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ethInput = event.target.value;

    // Validate input as a number
    if (!isNaN(parseFloat(ethInput)) && ethInput !== "") {
      const ethValue = parseFloat(ethInput);

      // Calculate WORK tokens based on ETH input
      const calculatedWork = ethValue / eth_price_per_work;
      setWorkAmount(calculatedWork.toFixed(4)); // Set calculated WORK amount, rounded to 4 decimals
    } else {
      setWorkAmount("0"); // Reset if invalid input
    }

    setEthAmount(ethInput); // Update ETH amount state
    setInputType("eth"); // Set input type to ETH
  };

  // Handle WORK input change
  const handleWorkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const workInput = event.target.value;

    // Validate input as a number
    if (!isNaN(parseFloat(workInput)) && workInput !== "") {
      const workValue = parseFloat(workInput);

      // Calculate ETH based on WORK input
      const calculatedEth = workValue * eth_price_per_work;
      setEthAmount(calculatedEth.toFixed(6));
    } else {
      setEthAmount("0");
    }

    setWorkAmount(workInput); // Update WORK amount state
    setInputType("work"); // Set input type to WORK
  };

  // Handle purchase action
  const handlePurchase = async () => {
    if (inputType === "eth" && ethAmount && parseFloat(ethAmount) > 0) {
      const quantityString = workAmount.toString();
      const transaction = claimTo({
        contract,
        to: account?.address || "",
        quantity: quantityString, // Pass as string
      });

      // Send transaction
      sendTransaction(transaction);
    } else if (
      inputType === "work" &&
      workAmount &&
      parseFloat(workAmount) > 0
    ) {
      const quantityString = workAmount.toString();
      const transaction = claimTo({
        contract,
        to: account?.address || "",
        quantity: quantityString, // Pass as string
      });

      // Send transaction
      sendTransaction(transaction);
    }
  };

  const transanctionUrl = `${etherscan_url}/tx/${transactionResult?.transactionHash}`;

  // Inside your component
  useEffect(() => {
    // Check if the transaction was successful
    if (isSuccess) {
      toast.success(
        <div className="flex flex-col space-y-2">
          <span>Transaction Successful!</span>
          <a
            href={transanctionUrl}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-800 underline"
          >
            View on Etherscan
          </a>
        </div>
      );
      setEthAmount("0");
      setWorkAmount("0");
    }

    // Check if there was an error
    if (error) {
      toast.error(
        `Transaction Failed! Error: ${error?.message || "Unknown error"}`
      );
      setEthAmount("0");
      setWorkAmount("0");
    }
  }, [transactionResult, isSuccess, error]); // Add dependencies to trigger on changes

  return (
    <div className="space-y-6">
      <div className="p-4 bg-zinc-800/50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">1 WORK </span>
          <span className="text-[#00faa7] font-medium">
            {eth_price_per_work} ETH
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg mt-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/eth.png"
              alt="ETH"
              width={16}
              height={16}
              className="rounded-full"
            />
            <span className="text-zinc-400">ETH</span>
          </div>
          <input
            type="text"
            value={ethAmount}
            onChange={handleEthChange}
            className="bg-transparent text-right focus:outline-none text-white w-24"
            placeholder="0"
          />
        </div>
        <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="WORK"
              width={18}
              height={18}
              className="rounded-full"
            />
            <span className="text-zinc-400">WORK you receive</span>
          </div>
          <input
            type="text"
            value={workAmount}
            onChange={handleWorkChange}
            className="bg-transparent text-right focus:outline-none text-white w-24"
            placeholder="0"
          />
        </div>
      </div>
      <ConnectBtn onclick={handlePurchase} />
    </div>
  );
};
