import { BalanceResult, CoinWithBalance, CoingeckoCoin } from '@/interfaces';

export const mergeCoinWithBalance = (balances: BalanceResult[] = [], allCoins: CoingeckoCoin[] = []): CoinWithBalance[] => {
  if (!balances.length || !allCoins.length) return [];

  const coinsWithBalance = balances.map((balance) => {
    const symbol = balance.symbol.toLowerCase();
    const currentCoin = allCoins.find(coin => coin.symbol.toLowerCase() === symbol);

    if (!currentCoin) return undefined;

    return {
      ...balance,
      ...currentCoin
    };
  });

  return coinsWithBalance.filter(val => val) as CoinWithBalance[];
};
