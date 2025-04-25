<script lang="ts" generics="T">
	import Loader from 'components/Loader.svelte';
	import type { Props } from './table.types';

	let { data, columns, isLoading, title }: Props<T> = $props();
</script>

{#if title}
	<h1>{title}</h1>
{/if}

{#if isLoading}
	<Loader />
{/if}

<table aria-label="Leaderboard">
	<thead>
		<tr>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as item}
			<tr>
				{#each columns as column}
					<td>{item[column]}</td>
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
</style>
