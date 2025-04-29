<script lang="ts" generics="T">
	import type { Props } from './table.types';

	let { data, columns, title, disableHeader }: Props<T> = $props();
</script>

{#if title}
	<h1 class="title">{title}</h1>
{/if}

<div class="table-container">
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
	.table-container {
		max-height: 60vh;
		overflow-y: auto;
		border: 1px dashed #ccc;
		display: block;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	thead th {
		position: sticky;
		top: 0;
		background-color: #f9f9f9;
		z-index: 1;
		border-bottom: 2px dashed #ccc;
		padding: 8px;
		text-align: center;
	}

	tbody td {
		padding: 8px;
		border-bottom: 1px dashed #eee;
		text-align: center;
	}

	@media (max-width: 600px) {
		th:nth-child(3),
		th:nth-child(5) {
			display: none;
		}
		td:nth-child(3),
		td:nth-child(5) {
			display: none;
		}
	}
</style>
