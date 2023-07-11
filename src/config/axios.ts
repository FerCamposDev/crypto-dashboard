import { Axios } from 'axios';

export const coingeckoAxios = new Axios({
  baseURL: 'https://api.coingecko.com/api'
});
