import { coingeckoAxios } from '@/config/axios';
import { CoinMarket, CoingeckoCoin } from '@/interfaces/coingecko';

export const getAllCoinsList = async (): Promise<CoingeckoCoin[]> => {
	return coingeckoAxios.get('/v3/coins/list', {
		params: {
			include_platform: true
		},
	}).then(data => JSON.parse(data.data));
};

export const getCoinsPrice = async (ids: string[]): Promise<CoinMarket[]> => {
	return coingeckoAxios.get('/v3/coins/markets', {
		params: {
			ids: ids.toString(),
			vs_currency: 'usd'
		},
	}).then(data => JSON.parse(data.data));
};
