import { Alchemy, Network } from 'alchemy-sdk';
import { fetchBalance, Address } from '@wagmi/core';
import { BalanceResult } from '@/interfaces/balances';

export const getAllBalances = async (address: Address, network?: Network): Promise<BalanceResult[]> => {
  try {
    const alchemy = new Alchemy({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
      network: network ?? Network.ETH_MAINNET
    });

    const balances = await alchemy.core.getTokenBalances(address);

    const allBalances: BalanceResult[] = [];

    for (const token of balances.tokenBalances) {
      const currentTokenBalance = await fetchBalance({
        address,
        token: token.contractAddress as Address
      });

      allBalances.push({
        ...currentTokenBalance,
        contractAddress: token.contractAddress
      });
    }

    return allBalances;
  } catch (error) {
    console.error('error :>> ', error);
    throw error;
  }
};
