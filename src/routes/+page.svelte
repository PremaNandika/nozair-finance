<script lang="ts">
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
</script>

<svelte:head>
	<title>Finance Tracker | Nozair</title>
	<meta
		name="description"
		content="Personal Finance Tracker is a simple yet powerful finance management app designed to help you track your income, expenses, and budget with ease. "
	/>
</svelte:head>
<div class="container flex h-[80vh] flex-col items-center justify-center">
	<Card.Root class="mx-auto max-w-3xl rounded-none border-x-0 border-y-2">
		<Card.Header class="p-4 pb-0 md:p-6 md:pb-0 ">
			<Card.Title class="text-center font-atkinson text-3xl md:text-4xl"
				>Nozair Finance Tracker</Card.Title
			>
		</Card.Header>
		<Card.Content
			class="flex flex-col space-y-4 p-4 text-center font-atkinson text-xs md:space-y-6 md:p-6 md:text-sm"
		>
			<p>
				Managing money should be simple and stress-free. Our upcoming app will help you track income
				and expenses effortlessly, set budgets in real-time, and gain clear insights into your
				spending—all in one place.
			</p>
			<p>
				We're working to bring you a <b class="text-yellow-300"
					>secure, seamless, and intuitive experience</b
				>. Stay tuned and be among the first to take control of your finances like never before!
			</p>
		</Card.Content>
	</Card.Root>
</div>
