"use client";
import { total_presale } from "@/lib/constant";

/**
 * Hook to get presale progress details.
 * @param {number} currentSupply - The current supply value.
 * @param {number} [presaleTotalSupply=total_presale] - The total presale supply (optional, defaults to total_presale).
 * @returns {object} An object containing progress percentage and current supply.
 */
export function usePresaleProgress(
  currentSupply: number,
  presaleTotalSupply: number = total_presale
) {
  // Ensure currentSupply is a number
  const validCurrentSupply = Number(currentSupply) || 0;

  // Calculate progress percentage as a number
  const progressPercentage = (
    (validCurrentSupply / presaleTotalSupply) *
    100
  ).toFixed(2);

  return {
    progressPercentage,
  };
}
