import { FetchBalanceResult } from '@wagmi/core';

export interface BalanceResult extends FetchBalanceResult {
	contractAddress: string;
}