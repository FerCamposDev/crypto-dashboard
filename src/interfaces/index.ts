import { BalanceResult } from './balances';
import { CoingeckoCoin } from './coingecko';

export type CoinWithBalance = BalanceResult & CoingeckoCoin;

export * from './balances';
export * from './coingecko';
