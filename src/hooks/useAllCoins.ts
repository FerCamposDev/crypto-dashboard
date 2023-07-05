import { getAllCoinsList } from '@/services/coins';
import { useQuery } from '@tanstack/react-query';

const ALL_DAY = 1000 * 60 * 60 * 24; // 24 HOURS

const useAllCoins = () => {
	return useQuery({
		queryKey: ['all-coins'],
		queryFn: getAllCoinsList,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		staleTime: ALL_DAY,
		cacheTime: Infinity,
		placeholderData: []
	});
};

export default useAllCoins;
