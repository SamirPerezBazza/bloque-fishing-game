<script lang="ts">
	import { LEADERBOARD_COLUMNS, leaderboardStore } from '$lib';
	import Card from './card/Card.svelte';

	let search = $state('');

	let top3 = $state($leaderboardStore.leaderboard?.players.slice(0, 3) ?? []);
	let rest = $state($leaderboardStore.leaderboard?.players.slice(3) ?? []);
</script>

<input
	type="text"
	placeholder="Search..."
	bind:value={search}
	class="search-input"
	oninput={() => {
		top3 =
			$leaderboardStore.leaderboard?.players
				.filter((player) => player.username.toLowerCase().includes(search.toLowerCase()))
				.slice(0, 3) ?? [];
		rest =
			$leaderboardStore.leaderboard?.players
				.filter((player) => player.username.toLowerCase().includes(search.toLowerCase()))
				.slice(3) ?? [];
	}}
/>

<div class="leaderboard-header">
	{#each LEADERBOARD_COLUMNS as column}
		<span>{column}</span>
	{/each}
</div>

<div class="leaderboard-content">
	{#each top3 as player}
		<Card {...player} />
	{/each}

	{#each rest as player}
		<Card {...player} />
	{/each}
</div>

<style>
	.leaderboard-header {
		display: flex;
		padding: 10px;
		font-weight: bold;
	}

	.leaderboard-header span {
		text-transform: capitalize;
		flex: 1;
	}

	.leaderboard-content {
		height: calc(100vh - 48px);
		overflow: scroll;
	}

	@media (max-width: 600px) {
		.leaderboard-header span:nth-child(3),
		.leaderboard-header span:nth-child(5) {
			display: none;
		}

		.leaderboard-header span:nth-child(1) {
			text-align: left;
		}

		.leaderboard-header span:nth-child(2) {
			text-align: center;
		}

		.leaderboard-header span:nth-child(4) {
			text-align: right;
		}
	}
</style>
