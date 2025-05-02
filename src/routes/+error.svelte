<script>
	import { LEADERBOARD_COLUMNS, leaderboardStore, MARKET_COLUMNS, marketStore } from '$lib';
	import Leaderboard from 'components/Leaderboard.svelte';
	import Table from 'components/table/Table.svelte';
</script>

<h1>Looks like the API is down for the moment.</h1>

<h3>Last data stored:</h3>

<a href="/"> Refresh </a>

<Leaderboard />
