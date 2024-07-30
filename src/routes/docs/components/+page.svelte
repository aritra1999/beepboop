<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Copy } from 'lucide-svelte';
	import type { PageData } from './$types';
	import Default from '$lib/components/ui/BentoGrid/Card/Default.svelte';
	import LinkCard from '$lib/components/ui/BentoGrid/Card/LinkCard.svelte';

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
			title: 'link card with text',
			description: 'The link card component with text',
			component: LinkCard,
			input: {
				type: 'link',
				title: 'LinkedIn',
				style: 'h-full bg-blue-800 text-white',
				link: 'https://linkedin.com'
			}
		},
		{
			title: 'link card with icon',
			description: 'The link card component with icon',
			component: LinkCard,
			input: {
				type: 'link',
				title: 'LinkedIn',
				style: 'h-full bg-blue-800 text-white',
				link: 'https://linkedin.com',
				linkIcon:
					'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>'
			}
		},
		{
			title: 'link card with background image',
			description: 'The link card component with icon',
			component: LinkCard,
			input: {
				type: 'link',
				title: 'LinkedIn',
				style: 'h-full text-white',
				link: 'https://linkedin.com',
				backgroundImage:
					'https://media.istockphoto.com/id/1392898737/vector/abstract-horizontal-background-with-colorful-waves.jpg?s=612x612&w=0&k=20&c=xxRagBOWElqfzxPho893QoNmB1HnAw9VM-UHkQhtih4=',
				linkIcon:
					'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>'
			}
		},

		{
			title: 'link card with background image',
			description: 'The link card component with icon',
			component: LinkCard,
			input: {
				type: 'link',
				title: 'LinkedIn',
				style: 'h-full text-white',
				link: 'https://linkedin.com',
				backgroundImage:
					'https://media.istockphoto.com/id/1392898737/vector/abstract-horizontal-background-with-colorful-waves.jpg?s=612x612&w=0&k=20&c=xxRagBOWElqfzxPho893QoNmB1HnAw9VM-UHkQhtih4='
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
