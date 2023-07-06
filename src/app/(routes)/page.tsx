'use client';
import useAllCoins from '@/hooks/useAllCoins';
import useAllBalancesByAddress from '@/hooks/useAllBalances';
import { getCoinWithBalance } from '../helpers/tokens';
import useCoinsPrice from '@/hooks/useCoinsPrice';

const ADDRESS = '0x52b6780bd3D62dAd028475f13da8DA7bc5D73aE6';

export default function Home() {
	const allBalancesQuery = useAllBalancesByAddress(ADDRESS);
	const allCoinsQuery = useAllCoins();

	const coinsWithBalance = getCoinWithBalance(allBalancesQuery.data, allCoinsQuery.data);

	console.log('coinsWithBalance :>> ', coinsWithBalance);

	const coinsPriceQuery = useCoinsPrice(coinsWithBalance);
	console.log('coinsPriceQuery :>> ', coinsPriceQuery.data);

	const totalUsd = coinsPriceQuery.data?.reduce((total, curr) => total+= curr.usdBalance, 0);

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
      Loading balances: {JSON.stringify(allBalancesQuery.isFetching)}
			<br />
      Loading Coins: {JSON.stringify(allCoinsQuery.isFetching)}
			<br />
      Loading Coins price: {JSON.stringify(coinsPriceQuery.isFetching)}
			<br />
			<br />
			{coinsPriceQuery.data?.map((coin) => {
				const { id, name, usdBalance, formatted, symbol } = coin;

				return (
					<div key={id}>
						<span>{formatted} {symbol} ~ USD {usdBalance.toFixed(2)} {name}</span>
					</div>
				);
			})}

			<br />
			<br />

			<span>Total USD: {totalUsd?.toFixed(2)}</span>
		</main>
	);
}
