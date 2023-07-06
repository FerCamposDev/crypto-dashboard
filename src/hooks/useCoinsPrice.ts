import { CoinWithBalance } from '@/interfaces';
import { getCoinsPrice } from '@/services/coins';
import { useQuery } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';

const ALL_DAY = 1000 * 60 * 60 * 24; // 24 HOURS

const useCoinsPrice = (coinsWithBalance: CoinWithBalance[]) => {
	const ids = coinsWithBalance.map(coin => coin.id);

	return useQuery({
		queryKey: ['prices', ids],
		queryFn: () => getCoinsPrice(ids),
		select: (marketData => {
			return marketData.map(market => {
				const coin = coinsWithBalance.find(coin => coin.id === market.id)!;
				return {
					...coin,
					marketData: {
						...market
					},
					usdBalance: new BigNumber(coin.formatted).multipliedBy( market.current_price).toNumber()
				};
			});
		}),
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		staleTime: ALL_DAY,
		cacheTime: Infinity,
		placeholderData: [],
		enabled: Boolean(ids.length)
	});
};

export default useCoinsPrice;
