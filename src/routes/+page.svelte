<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { LEADERBOARD_COLUMNS, LiveApi, MARKET_COLUMNS, marketStore } from '$lib';
	import Table from 'components/table/Table.svelte';
	import { leaderboardStore } from '$lib/store/leaderboard.js';
	import { fetchLiveApi } from './utils.svelte.js';
	import Leaderboard from 'components/Leaderboard.svelte';
	import Drawer from 'svelte-drawer-component';
	import chestIcon from '$lib/assets/svgs/chest.svg';

	let { data } = $props();

	let open = $state(false);

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

<Leaderboard />

<button onclick={() => (open = true)} class="market-button">
	<img alt="Chest" src={chestIcon} />
</button>

<Drawer {open} on:clickAway={() => (open = false)} size="600px" placement="bottom">
	<Table columns={MARKET_COLUMNS} data={$marketStore.market?.items ?? []} title="Market" />
</Drawer>

<style>
	.market-button {
		width: 42px;
		background-color: #948979;
		border: none;
		border-radius: 50%;
		padding: 10px;
		margin: 10px auto;
		position: absolute;
		bottom: 20px;
		right: 20px;
	}
</style>
