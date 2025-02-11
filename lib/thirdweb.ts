import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { work_token } from "./constant";

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
});

// connect to your contract
export const contract = getContract({
  client,
  chain: defineChain(11155111),
  address: work_token,
});


