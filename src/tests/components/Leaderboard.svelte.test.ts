
import { describe, test, expect } from 'vitest';
import {  render } from '@testing-library/svelte';
import type { Leaderboard } from 'types';
import LeaderboardComponent from 'components/Leaderboard.svelte';
import { leaderboardStore } from '$lib';

describe('Leaderboard component', () => {

  const mockLeaderboard: Leaderboard = {
    players: [
      { rank: 1, username: 'Player1', xp: 1000, level: 10, gold: 500 },
      { rank: 2, username: 'Player2', xp: 900, level: 9, gold: 400 },
    ]
  }

  leaderboardStore.set({
    leaderboard: mockLeaderboard,
    loading: false,
  });

	test('should render h1', () => {
		const {findByText } = render(LeaderboardComponent);

    const h1 = findByText('Leaderboard');

    expect(h1).toBeDefined();


	});
});
