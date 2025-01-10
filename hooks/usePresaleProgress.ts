"use client";

import { useReadContract } from "thirdweb/react";
import { toTokens } from "thirdweb/utils";
import { contract } from "@/lib/thirdweb";
import { total_presale } from "@/lib/constant";

/**
 * Hook to get presale progress details.
 * @returns {object} An object containing progress percentage, current supply, and isPending status.
 */
export function usePresaleProgress(presaleTotalSupply: number = total_presale) {
  const { data, isPending } = useReadContract({
    contract,
    method: "function totalSupply() view returns (uint256)",
    params: [],
  });

  // Convert current supply to a number
  const currentSupply = data ? Number(toTokens(data, 18)) : 0;

  // Calculate progress percentage as a number
  const progressPercentage = (
    (currentSupply / presaleTotalSupply) *
    100
  ).toFixed(2);

  return {
    currentSupply,
    progressPercentage,
    isPending,
  };
}
