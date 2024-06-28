<script lang="ts">
	import { ClipboardCopy, File, FileSignature, Table } from 'lucide-svelte';
	import BentoGrid from '$lib/components/ui/BentoGrid/BentoGrid.svelte';
	import BentoGridItem from '$lib/components/ui/BentoGrid/BentoGridItem.svelte';

	export let items = [];
</script>

<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
	{#each items as item, i (i)}
		<BentoGridItem title={item.title} description={item.description} className={item.className}>
			<div
				slot="header"
				class="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black"
			></div>
			<svelte:component this={item.icon} slot="icon" class="h-4 w-4 text-neutral-500" />
		</BentoGridItem>
	{/each}
</BentoGrid>
