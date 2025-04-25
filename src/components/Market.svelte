<script lang="ts">
	import type { Market } from 'types';

	let { market }: { market: Market } = $props();
</script>

<h1>Market</h1>

<ul>
	{#each market.items as item}
		<li>{item.name} - {item.cost}</li>
	{/each}
</ul>
