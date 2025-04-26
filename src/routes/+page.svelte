<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { LEADERBOARD_COLUMNS, LiveApi, MARKET_COLUMNS, marketStore } from '$lib';
	import Market from 'components/Market.svelte';
	import Table from 'components/table/Table.svelte';
	import { leaderboardStore } from '$lib/store/leaderboard.js';
	import { fetchLiveApi } from './utils.svelte.js';

	let { data } = $props();

	onMount(() => {
		// set an interval to fetch live data every minute
		const interval = setInterval(() => {
			fetchLiveApi();
		}, 60_000);

		// set the initial data from load function into the stores
		if (data) {
			leaderboardStore.set({
				leaderboard: data.leaderboard,
				loading: false
			});
			marketStore.set({
				market: data.market,
				loading: false
			});
		}

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

<Table
	columns={MARKET_COLUMNS}
	data={$marketStore.market?.items ?? []}
	isLoading={$marketStore.loading}
	title="Market"
/>
