<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { MARKET_COLUMNS, marketStore } from '$lib';
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

<h1>Bloque's Galatic Fishing</h1>

<Leaderboard />

<button onclick={() => (open = true)} class="market-button">
	<img alt="Chest" src={chestIcon} />
</button>

<Drawer {open} on:clickAway={() => (open = false)} size="500px" placement="bottom">
	<div class="drawer-content">
		<Table columns={MARKET_COLUMNS} data={$marketStore.market?.items ?? []} title="Market" />
		<button onclick={() => (open = false)}> Exit </button>
	</div>
</Drawer>

<style>
	h1 {
		text-align: center;
		font-size: 24px;
		color: #dfd0b8;
	}

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

	.drawer-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #222831;
		height: 100%;
		padding: 10px 10px 0 10px;
		gap: 20px;
	}

	.drawer-content button {
		background-color: chocolate;
		color: #dfd0b8;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		font-weight: 900;
	}
</style>
