
import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Leaderboard } from 'types';

interface Store {
  leaderboard: Leaderboard | null;
  loading: boolean;
}

const storedLeaderboard = browser ? localStorage.getItem('leaderboardStore') : null;
const parsedLeaderboard: Store | null = storedLeaderboard ? JSON.parse(storedLeaderboard) : null;
const initialLeaderboard = parsedLeaderboard ?? {
  leaderboard: null,
  loading: true,
};

export const leaderboardStore = writable<Store>(initialLeaderboard);


leaderboardStore.subscribe((value)=>{
  if (browser) {
    localStorage.setItem('leaderboardStore', JSON.stringify(value));
  }
})
