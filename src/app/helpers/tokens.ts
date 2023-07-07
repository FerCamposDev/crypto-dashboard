import { BalanceResult, CoinWithBalance, CoingeckoCoin } from '@/interfaces';

export const mergeCoinWithBalance = (balances: BalanceResult[] = [], allCoins: CoingeckoCoin[] = []): CoinWithBalance[] => {
	if (!balances.length || !allCoins.length) return [];
  
	const coinsWithBalance = balances.map((balance) => {
		const symbol = balance.symbol.toLowerCase();
		const currentCoin = allCoins.find(coin => coin.symbol.toLowerCase() === symbol)!;

		return {
			...balance,
			...currentCoin
		}; 
	});

	return coinsWithBalance;
};