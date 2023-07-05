import { Alchemy, Network } from 'alchemy-sdk';
import { fetchBalance, FetchBalanceResult, Address } from '@wagmi/core';

export const getAllBalances = async (address: Address) => {
	const allBalances: FetchBalanceResult[] = [];
	const config = {
		apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
		network: Network.ETH_MAINNET,
	};
  
	try {
		const alchemy = new Alchemy(config);
		const balances = await alchemy.core.getTokenBalances(address);

		console.log(`The balances of ${address} address are:`, balances);
		for (const token of balances.tokenBalances) {
			const currentTokenBalance = await fetchBalance({
				address,
				token: token.contractAddress as Address,
			});
		
			allBalances.push(currentTokenBalance);
		}

		console.log('allBalances :>> ', allBalances);
	} catch (error) {
		console.error('error :>> ', error);
		return [];
	}

	return allBalances;
};
