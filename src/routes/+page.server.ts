

import { LiveApi } from '$lib';
import { error } from '@sveltejs/kit';


export async function load() {
	const res = await LiveApi();

	if(!res[0] || !res[1]) {
    throw error(500, 'Error fetching data');
  }

	return {
		leaderboard: res[0],
    market: res[1],
	};
}
