import { PUBLIC_BASE_API_ENDPOINT } from '$env/static/public';
import { LEADERBOARD_ENDPOINT } from '$lib/constants';
import type { Leaderboard } from 'types/leaderboard.types';
import type { SvelteFetch } from 'types/utils.types';

export const leaderboardApi = {
	get: (svelteFetch?: SvelteFetch): Promise<Leaderboard> =>
		svelteFetch
			? svelteFetch(`${PUBLIC_BASE_API_ENDPOINT}${LEADERBOARD_ENDPOINT}`).then((res) => res.json())
			: fetch(`${PUBLIC_BASE_API_ENDPOINT}${LEADERBOARD_ENDPOINT}`).then((res) => res.json())
};
