import { PUBLIC_BASE_API_ENDPOINT } from '$env/static/public';
import { MARKET_ENDPOINT } from '$lib/constants';
import type { Market } from 'types';
import type { SvelteFetch } from 'types/utils.types';

export const marketApi = {
	get: (svelteFetch?: SvelteFetch): Promise<Market> =>
		svelteFetch
			? svelteFetch(`${PUBLIC_BASE_API_ENDPOINT}${MARKET_ENDPOINT}`).then((res) => res.json())
			: fetch(`${PUBLIC_BASE_API_ENDPOINT}${MARKET_ENDPOINT}`).then((res) => res.json())
};
