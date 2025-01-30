import { queryOptions, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/react-query";
import { TransactionAPIResponse } from "@/types";

export const getTransaction = (): Promise<TransactionAPIResponse> => {
  return api.get("/transactions");
};

export const getTransactionQueryOptions = () => {
  return queryOptions({
    queryKey: ["transactions"],
    queryFn: () => getTransaction(),
  });
};

type useTransactionOptions = {
  queryConfig?: QueryConfig<typeof getTransactionQueryOptions>;
};

export const useTransaction = ({ queryConfig }: useTransactionOptions = {}) => {
  return useQuery({
    ...getTransactionQueryOptions(),
    ...queryConfig,
  });
};
