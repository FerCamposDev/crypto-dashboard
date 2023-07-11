'use client';
import useAllCoins from '@/hooks/useAllCoins';
import useAllBalancesByAddress from '@/hooks/useAllBalances';
import { mergeCoinWithBalance } from '../helpers/tokens';
import useCoinsPrice from '@/hooks/useCoinsPrice';
import { Spinner } from '@/components/atoms';
import { PieChart } from '@/components';

const ADDRESS = '0x52b6780bd3D62dAd028475f13da8DA7bc5D73aE6';

const Home: React.FC = () => {
  const allBalancesQuery = useAllBalancesByAddress(ADDRESS);
  const allCoinsQuery = useAllCoins();

  const coinsWithBalance = mergeCoinWithBalance(allBalancesQuery.data, allCoinsQuery.data);

  console.log('coinsWithBalance :>> ', coinsWithBalance);

  const coinsPriceQuery = useCoinsPrice(coinsWithBalance);
  console.log('coinsPriceQuery :>> ', coinsPriceQuery.data);

  return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<div className='flex'>
				Loading balances: <Spinner loading={allBalancesQuery.isFetching} />
			</div>
			<br />
			<div className='flex'>
      Loading Coins: <Spinner loading={allCoinsQuery.isFetching} />
			</div>
			<br />
			<div className='flex'>
      Loading Coins price: <Spinner loading={coinsPriceQuery.isFetching} />
			</div>
			{/* {coinsPriceQuery.data?.map((coin) => {
				const { id, name, usdBalance, formatted, symbol } = coin;
				return (
					<div key={id}>
						<span>{formatted} {symbol} ~ USD {usdBalance.toFixed(2)} {name}</span>
					</div>
				);
			})} */}

			<br />
			<br />

			<PieChart coinData={coinsPriceQuery.data ?? []}/>
		</main>
  );
};

export default Home;
