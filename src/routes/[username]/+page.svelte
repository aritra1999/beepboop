<script>
	import BentoGrid from '$lib/components/ui/BentoGrid/BentoGrid.svelte';
	import BentoGridItem from '$lib/components/ui/BentoGrid/BentoGridItem.svelte';
	import ProfileCard from '$lib/components/ui/Profile/ProfileCard.svelte';

	export let data;
</script>

{#if data.profile && data.content}
	<section class="flex h-screen w-screen items-start justify-center px-3 py-24 sm:py-72">
		<BentoGrid className="max-w-4xl mx-auto overflow-y-auto pb-20">
			<ProfileCard profile={data.profile} />
			{#each data.content.items as item, i (i)}
				<BentoGridItem {item} />
			{/each}
		</BentoGrid>
	</section>
{:else}
	No profile found :(
{/if}
