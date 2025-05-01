<script lang="ts">
	import { LEADERBOARD_COLUMNS, leaderboardStore } from '$lib';
	import Card from './card/Card.svelte';
	import { queryParam } from 'sveltekit-search-params';

	let search = queryParam('q');

	let players = $derived(
		$leaderboardStore.leaderboard?.players.filter((player) =>
			player.username.toLowerCase().includes($search?.toLowerCase() ?? '')
		) ?? []
	);

	const showAtPixel = 0;
	let box: HTMLDivElement;
	let scrollHeight = $state(0);

	let showGoToTop = $derived(scrollHeight > showAtPixel);

	const gotoTop = () => {
		box.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const parseScroll = () => {
		scrollHeight = box.scrollTop;
	};
</script>

<section class="search-bar">
	<input type="text" placeholder="Search..." bind:value={$search} class="search-input" />
	{#if $search?.length}
		<button class="clear-button" onclick={() => ($search = '')}> X </button>
	{/if}
</section>

<div class="leaderboard-container" bind:this={box} onscroll={parseScroll}>
	<table class="leaderboard">
		<thead class="leaderboard-header">
			<tr>
				{#each LEADERBOARD_COLUMNS as column}
					<th>{column}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each players as player}
				<Card {...player} />
			{/each}
		</tbody>
	</table>
</div>

{#if showGoToTop}
	<button aria-label="Go to top" onclick={gotoTop} class="goto__top" title="Go to top"
		><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
			<g fill="none" stroke="currentColor" stroke-width="1.5">
				<path
					fill="white"
					d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
				/>
				<path stroke-linecap="round" stroke-linejoin="round" d="m15 13.5l-3-3l-3 3" />
			</g>
		</svg></button
	>
{/if}

<style>
	.leaderboard-container {
		height: 80dvh;
		overflow-y: auto;
	}
	.leaderboard {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0 5px;
		text-align: center;
	}

	.leaderboard-header {
		font-weight: bold;
		text-transform: capitalize;
		position: sticky;
		top: 0;
		background-color: #222831;
	}

	.search-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;
		gap: 1rem;
		padding: 10px 0;
	}

	.search-input {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		flex: 1;
		color: black;
		font-weight: 900;
	}

	.clear-button {
		background-color: red;
		border: none;
		border-radius: 50%;
		padding: 7px 10px;
		cursor: pointer;
		position: absolute;
		right: 30px;
		text-align: center;
	}

	.goto__top {
		position: fixed;
		left: 1rem;
		bottom: 1rem;
		cursor: pointer;
		color: #999;
		border-radius: 0.15rem;
		transition-duration: 300ms;
		background: none;
		border: none;
		padding: 0;
	}
	.goto__top:hover {
		transform: translateY(-10px);
	}

	@media (max-width: 600px) {
		.leaderboard-header th:nth-child(3),
		.leaderboard-header th:nth-child(4) {
			display: none;
		}

		.leaderboard-header th:nth-child(1) {
			text-align: left;
		}

		.leaderboard-header th:nth-child(5) {
			text-align: right;
		}
	}
</style>
