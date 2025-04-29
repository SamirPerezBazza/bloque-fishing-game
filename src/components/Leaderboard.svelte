<script lang="ts">
	import { LEADERBOARD_COLUMNS, leaderboardStore } from '$lib';
	import Card from './card/Card.svelte';
	import Table from './table/Table.svelte';

	let top3 = $leaderboardStore.leaderboard?.players.slice(0, 3) ?? [];
	let rest = $leaderboardStore.leaderboard?.players.slice(3) ?? [];
</script>

<div class="leaderboard-header">
	{#each LEADERBOARD_COLUMNS as column}
		<span>{column}</span>
	{/each}
</div>

{#each top3 as player}
	<Card {...player} />
{/each}

<Table columns={LEADERBOARD_COLUMNS} data={rest} disableHeader />
fish

<style>
	.leaderboard-header {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		font-weight: bold;
	}

	.leaderboard-header span {
		text-align: center;
	}

	@media (max-width: 600px) {
		.leaderboard-header span:nth-child(3),
		.leaderboard-header span:nth-child(4) {
			display: none;
		}
	}
</style>
