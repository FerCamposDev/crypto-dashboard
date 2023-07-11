import { BalanceResult } from '@/interfaces';
import { getAllBalances } from '@/services/balances';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Address } from '@wagmi/core';

const ALL_DAY = 1000 * 60 * 60 * 24; // 24 HOURS

const useAllBalancesByAddress = (address: Address): UseQueryResult<BalanceResult[], unknown> => {
  return useQuery({
    queryKey: ['balances', address],
    queryFn: async () => await getAllBalances(address),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: ALL_DAY,
    cacheTime: Infinity,
    placeholderData: []
  });
};

export default useAllBalancesByAddress;
