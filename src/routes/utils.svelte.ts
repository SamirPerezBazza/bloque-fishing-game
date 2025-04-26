import { leaderboardStore, LiveApi, marketStore } from "$lib";



export async function fetchLiveApi() {
  try {
      leaderboardStore.update((state)=>({...state, loading: true}))
			const [newLeaderboard, newMarket] = await LiveApi();

			if (newLeaderboard) {
				leaderboardStore.update((state) => ({
          ...state,
          leaderboard: newLeaderboard,
        }));
			}

			if (newMarket) {
				marketStore.update((state) => ({
          ...state,
          market: newMarket,
        }));
			}
		} catch (error) {
			console.error('Error fetching live API data:', error);
		} finally {
			leaderboardStore.update((state)=>({...state, loading: false}))
		}
	}
