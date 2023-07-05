import {
	useQuery,
} from '@tanstack/react-query';
import { fetchBalance, FetchBalanceArgs } from '@wagmi/core';

const useTokenBalance = (props: FetchBalanceArgs) => {
	const { address, token } = props;
	return useQuery({
		queryKey: ['token', address, token],
		queryFn: () => fetchBalance({
			address,
			token,
		})
	});
};

export default useTokenBalance;
