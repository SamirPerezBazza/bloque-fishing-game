<script lang="ts">
	import Trophy from 'components/icons/Trophy.svelte';
	import type { Player } from 'types';

	let { rank, gold, level, username, xp }: Player = $props();

	const rankColor = (rank: number) => {
		if (rank === 1) return '#FFD700'; // Gold
		if (rank === 2) return '#C0C0C0'; // Silver
		if (rank === 3) return '#CD7F32'; // Bronze
		return '#000000'; // Default color for other ranks
	};
</script>

<div class="card">
	<div class="rank">
		<Trophy color={rankColor(rank)} size={24} />
	</div>
	<div class="username">{username}</div>
	<div class="xp">{xp}</div>
	<div class="gold">{gold}</div>
	<div class="level">{level}</div>
</div>

<style>
	.card {
		display: flex;
		align-items: center;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 8px;
		margin-bottom: 10px;
		background-color: #f9f9f9;
		align-self: center;
		color: #393e46;
	}

	.card > div {
		flex: 1;
	}

	@media (max-width: 600px) {
		.xp,
		.gold {
			display: none;
		}

		.username {
			text-align: center;
		}
		.level {
			text-align: right;
		}
	}
</style>
