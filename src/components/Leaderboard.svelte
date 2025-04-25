<!-- @DEPRECATED -->
<script lang="ts">
	import type { Leaderboard } from 'types';
	import { LEADERBOARD_COLUMNS } from '$lib';
	import Loader from './Loader.svelte';
	import Table from './table/Table.svelte';

	let { leaderboard, loading = false }: { leaderboard: Leaderboard; loading?: boolean } = $props();
</script>

<Table
	columns={LEADERBOARD_COLUMNS}
	data={leaderboard.players}
	isLoading={loading}
	title="Leaderboard"
/>

<!-- <h1>Leaderboard</h1>
{#if loading}
	<Loader />
{/if}
<table aria-label="Leaderboard">
	<thead>
		<tr>
			{#each LEADERBOARD_COLUMNS as column}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each leaderboard.players as player}
			<tr>
				{#each LEADERBOARD_COLUMNS as column}
					<td>{player[column]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 8px 12px;
		text-align: left;
		border-bottom: 1px solid #ddd;
	}

	th {
		background-color: #f4f4f4;
	}
	tr:hover {
		background-color: #f1f1f1;
	}
	td {
		transition: background-color 0.3s;
	}
	tr:hover td {
		background-color: #e0e0e0;
	}
</style> -->
