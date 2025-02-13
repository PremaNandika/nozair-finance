<script lang="ts">
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<title>Finance App | Nozair</title>
	<meta
		name="description"
		content="Personal Finance Tracker is a simple yet powerful finance management app designed to help you track your income, expenses, and budget with ease. "
	/>
</svelte:head>

<ModeWatcher defaultMode="dark" />
{@render children()}
