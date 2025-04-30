<script lang="ts" generics="T">
	import type { Props } from './table.types';

	let { data, columns, title, disableHeader }: Props<T> = $props();
</script>

{#if title}
	<h1 class="title">{title}</h1>
{/if}

<div class="table-container">
	{#if !disableHeader}
		<div class="table-header">
			{#each columns as column}
				<span>{column}</span>
			{/each}
		</div>
	{/if}
	<table aria-label="Leaderboard">
		{#if !disableHeader}
			<thead>
				<tr>
					{#each columns as column}
						<th>{column}</th>
					{/each}
				</tr>
			</thead>
		{/if}
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
</div>

<style>
	.title {
		text-align: center;
		font-size: 24px;
	}
	.table-container {
		max-height: 60vh;
		overflow-y: auto;
		display: block;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	thead th {
		position: sticky;
		top: 0;
		background-color: #393e46;
		z-index: 1;
		padding: 8px;
		text-align: center;
		text-transform: capitalize;
	}

	tbody tr:nth-child(odd) {
		background-color: #393e46;
	}

	tbody td {
		padding: 8px;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		max-height: 20px;
	}

	@media (max-width: 600px) {
		th:nth-child(1),
		th:nth-child(3) {
			display: none;
		}
		td:nth-child(1),
		td:nth-child(3) {
			display: none;
		}
	}
</style>
