import { ALL_DAY_MS } from '@/constants';
import { CoingeckoCoin } from '@/interfaces';
import { getAllCoinsList } from '@/services/coins';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

const useAllCoins = (): UseQueryResult<CoingeckoCoin[], unknown> => {
  return useQuery({
    queryKey: ['all-coins'],
    queryFn: getAllCoinsList,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: ALL_DAY_MS,
    cacheTime: Infinity,
    placeholderData: []
  });
};

export default useAllCoins;
