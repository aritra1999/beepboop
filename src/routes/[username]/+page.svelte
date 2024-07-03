<script>
	import BentoGrid from '$lib/components/ui/BentoGrid/BentoGrid.svelte';
	import BentoGridItem from '$lib/components/ui/BentoGrid/BentoGridItem.svelte';
	import ProfileCard from '$lib/components/ui/Profile/ProfileCard.svelte';

	export let data;
</script>

{#if data.profile && data.content}
	<section class="flex h-screen items-center justify-center">
		<BentoGrid className="mx-auto overflow-y-auto sm:h-[65vh] h-[90vh] px-3">
			<ProfileCard profile={data.profile} showGithubStats={data.content.config.showGithubStats} />
			{#each data.content.items as item, i (i)}
				<BentoGridItem {item} />
			{/each}
		</BentoGrid>
	</section>
{:else}
	No profile found :(
{/if}
