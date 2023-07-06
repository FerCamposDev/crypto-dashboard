import { getAllBalances } from '@/services/balances';
import { useQuery } from '@tanstack/react-query';
import { Address } from '@wagmi/core';

const ALL_DAY = 1000 * 60 * 60 * 24; // 24 HOURS

const useAllBalancesByAddress = (address: Address) => {
	return useQuery({
		queryKey: ['balances', address],
		queryFn: () => getAllBalances(address),
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		staleTime: ALL_DAY,
		cacheTime: Infinity,
		placeholderData: []
	});
};

export default useAllBalancesByAddress;
