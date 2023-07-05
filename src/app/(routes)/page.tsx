'use client';
import { goerli } from '@wagmi/core/chains';
import useTokenBalance from '@/hooks/useTokenBalance';

const EUROC_CONTRACT = '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c';

const ADDRESS = '0x52b6780bd3D62dAd028475f13da8DA7bc5D73aE6';

export default function Home() {
	const euroc = useTokenBalance({
		address: ADDRESS,
		token: EUROC_CONTRACT,
	});
	const goerliBalance = useTokenBalance({
		address: ADDRESS,
		chainId: goerli.id
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
      Main page
			<div>
				<p>EUROC balance: {euroc.isFetching ? 'loading' : `${euroc?.data?.formatted} ${euroc.data?.symbol}`}</p>
				<p>gETH balance: {goerliBalance.isFetching ? 'loading' : `${goerliBalance?.data?.formatted} ${goerliBalance.data?.symbol}`}</p>
			</div>
		</main>
	);
}
