import { BalanceResult } from './balances';
import { CoingeckoCoin, CoinMarket } from './coingecko';

export type CoinWithBalance = BalanceResult & CoingeckoCoin;
export type CoinWithBalanceAndMarket = CoinWithBalance & {
  marketData: CoinMarket;
  usdBalance: number;
};

export * from './balances';
export * from './coingecko';
