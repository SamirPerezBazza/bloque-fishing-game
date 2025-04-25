
import { writable } from 'svelte/store';
import type { Leaderboard } from 'types';

export const leaderboardStore = writable({
	leaderboard: null,
	loading: true,
} as { leaderboard: Leaderboard | null; loading: boolean });
