import { writable } from 'svelte/store';
import type { Player } from 'types';

export const leaderboard = writable({
	leaderboard: [],
	loading: true,
} as { leaderboard: Player[]; loading: boolean });
