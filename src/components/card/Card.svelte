<script lang="ts">
	import Trophy from 'components/icons/Trophy.svelte';
	import type { Player } from 'types';
	import { rankColor } from './card.utils';

	let { rank, gold, level, username, xp }: Player = $props();
</script>

<tr class="card">
	<td class="rank" data-testid="icon">
		{#if rank > 3}
			<span>{rank}</span>
		{:else}
			<Trophy color={rankColor(rank)} size={20} />
		{/if}
	</td>
	<td class="username">{username}</td>
	<td class="xp">{xp}</td>
	<td class="gold">{gold}</td>
	<td class="level">{level}</td>
</tr>

<style>
	.card {
		align-items: center;
		border-radius: 8px;
		background-color: #f9f9f9;
		align-self: center;
		color: black;
		font-weight: 700;
	}

	.username {
		max-width: 15ch;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.rank {
		font-size: 20px;
	}

	.card > td {
		padding: 10px;
	}

	tr td:first-child {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	tr td:last-child {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	.rank {
		width: 50px;
	}

	@media (max-width: 600px) {
		.xp,
		.gold {
			display: none;
		}

		.level {
			text-align: right;
		}
	}
</style>
