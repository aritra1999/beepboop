<script lang="ts">
	import Default from '$lib/components/ui/BentoGrid/Card/Default.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Copy } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const bentoComponents = [
		{
			title: 'default',
			description: 'The default card component',
			component: Default,
			input: {
				type: 'default',
				style: 'p-4 h-full',
				title: 'Title',
				description: 'Description'
			}
		},
		{
			title: 'default',
			description: 'The default card component',
			component: Default,
			input: {
				type: 'default',
				style: 'p-4 h-full',
				title: 'Title',
				description: 'Description'
			}
		},
		{
			title: 'default',
			description: 'The default card component',
			component: Default,
			input: {
				type: 'default',
				style: 'p-4 h-full',
				title: 'Title',
				description: 'Description'
			}
		},
		{
			title: 'default',
			description: 'The default card component',
			component: Default,
			input: {
				type: 'default',
				style: 'p-4 h-full',
				title: 'Title',
				description: 'Description'
			}
		},
		{
			title: 'default',
			description: 'The default card component',
			component: Default,
			input: {
				type: 'default',
				style: 'p-4 h-full',
				title: 'Title',
				description: 'Description'
			}
		}
	];
</script>

<section class="my-12">
	<h2 class="text-xl font-bold">Components</h2>
</section>
<section>
	<div class="columns-xs gap-4">
		{#each bentoComponents as bentoComponent}
			<div class="mb-4 inline-block w-full rounded-lg bg-secondary p-4">
				<div class="h-60 w-full">
					<svelte:component this={bentoComponent.component} item={bentoComponent.input} />
				</div>
				<div class="mt-4 flex items-center justify-between p-2">
					<div>
						<h3 class="text-lg font-semibold">{bentoComponent.title}</h3>
						<p class="text-xs text-muted-foreground">{bentoComponent.description}</p>
					</div>
					<div class="ml-4">
						<Button size="icon" variant="outline">
							<Copy class="h-5 w-5" />
						</Button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
