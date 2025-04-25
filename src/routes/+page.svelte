<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { LEADERBOARD_COLUMNS, LiveApi } from '$lib';
	import Leaderboard from 'components/Leaderboard.svelte';
	import Market from 'components/Market.svelte';
	import Table from 'components/table/Table.svelte';
	import { leaderboardStore } from '$lib/store/leaderboard.js';

	let { data } = $props();
	$leaderboardStore.leaderboard = data.leaderboard;

	let market = $state(data.market);

	async function fetchLiveApi() {
		$leaderboardStore.loading = true;
		try {
			const [newLeaderboard, newMarket] = await LiveApi();

			if (newLeaderboard) {
				$leaderboardStore.leaderboard = newLeaderboard;
			}

			if (newMarket) {
				market = newMarket;
			}
		} catch (error) {
			console.error('Error fetching live API data:', error);
		} finally {
			$leaderboardStore.loading = false;
		}
	}

	onMount(() => {
		const interval = setInterval(() => {
			fetchLiveApi();
		}, 60_000);

		onDestroy(() => {
			clearInterval(interval);
		});
	});
</script>

<Table
	columns={LEADERBOARD_COLUMNS}
	data={$leaderboardStore.leaderboard?.players ?? []}
	isLoading={$leaderboardStore.loading}
	title="Leaderboard"
/>

<Market {market} />
