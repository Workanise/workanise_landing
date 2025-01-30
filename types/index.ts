export enum PaylinkEvents {
  CREATED = "CREATED",
}

export enum TransactionStatus {
  INITIATED = "INITIATED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  CANCELED = "CANCELED",
  SETTLED = "SETTLED",
}

export enum PaymentRequestType {
  PAYLINK = "PAYLINK",
  PAYSTREAM = "PAYSTREAM",
}

export enum TransactionType {
  REFUND = "REFUND",
  PAYLINK = "PAYLINK",
}

export enum BlockchainEngineType {
  EVM = "EVM",
  SOL = "SOL",
  BTC = "BTC",
}

export interface BlockchainEngine {
  id: string;
  type: BlockchainEngineType;
}

export interface TokenQuoteMeta {
  from: string;
  fromAmountDecimal: string;
  to: string;
  toAmountMinimal: string;
}

export interface Currency {
  id: string;
  blockchain?: { engine: BlockchainEngine } | null;
}

export interface RemainingAccount {
  amount: string;
  recipient: string;
}

export interface CustomerDetails {
  email?: string;
  discordUsername?: string;
  discordUser?: {
    id: string;
    username: string;
  };
  twitterUsername?: string;
  fullName?: string;
  country?: string;
  deliveryAddress?: string;
  phoneNumber?: string;
  street?: string;
  streetNumber?: string;
  city?: string;
  state?: string;
  areaCode?: string;
  additionalJSON?: string;
}

export interface ProductDetails {
  name?: string;
  value?: string;
}

export interface TransactionMeta {
  id: string;
  transactionSignature: string;
  amount: string;
  recipientPK: string;
  senderPK: string;
  customerDetails: CustomerDetails;
  productDetails: ProductDetails;
  splitRevenue: boolean;
  remainingAccounts: RemainingAccount[];
  totalAmount: string;
  totalAmountAsUSD: string
  affiliateAmount: string;
  affiliateCode?: string;
  affiliatePublicKey?: string;
  currency: Currency;
  transactionType?: TransactionType;
  tokenQuote?: TokenQuoteMeta;
  transactionStatus: TransactionStatus;
}

export interface ClaimDetails {
  tradingView?: {
    username: string;
  };
  discord?: {
    username: string;
  };
}

export interface Transaction {
  id: string;
  paylinkId: string;
  quantity: number;
  fee?: string;
  createdAt: string;
  paymentType: PaymentRequestType;
  claimDetails: ClaimDetails;
  meta: TransactionMeta;
}

export interface PaylinkEventPayload {
  event: PaylinkEvents;
  transaction: string; // JSON string value
  transactionObject: Transaction;
}

export type ApiResponse<T = undefined> = {
  data: T;
  statusCode: number;
  message: string;
};


export type TransactionAPIResponse = ApiResponse<Transaction[]>;
