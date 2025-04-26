
import { LiveApi } from '$lib';
import { error } from '@sveltejs/kit';

export const ssr = false;

export async function load({fetch}) {
	const res = await LiveApi(fetch);

	if(!res[0] || !res[1]) {
    error(500, 'Error fetching data');
  }

	return {
		leaderboard: res[0],
    market: res[1],
	};
}
