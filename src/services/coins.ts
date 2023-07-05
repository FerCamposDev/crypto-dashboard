import { coingeckoAxios } from '@/config/axios';

type Coin = {
  id: string;
  symbol: string;
  name: string;
  platforms: Record<string, string>
}

export const getAllCoinsList = async (): Promise<Coin[]> => {
	return coingeckoAxios.get('/v3/coins/list', {
		params: {
			include_platform: true
		},
	}).then(data => JSON.parse(data.data));
};
