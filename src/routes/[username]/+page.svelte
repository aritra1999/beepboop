<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { AlertError, Content, Profile } from '$lib/types';
	import { dummyContent, dummyProfile } from '$lib/dummy';
	import { UserNameSchema, validate } from '$lib/zod.types';
	import type { ZodError } from 'zod';

	import BentoGrid from '$lib/components/ui/BentoGrid/BentoGrid.svelte';
	import ProfileCard from '$lib/components/ui/Profile/ProfileCard.svelte';
	import ErrorAlert from '$lib/components/ui/ErrorAlert/ErrorAlert.svelte';
	import BentoGridItem from '$lib/components/ui/BentoGrid/BentoGridItem.svelte';
	import LoadingProfile from '$lib/components/ui/LoadingProfile/Loading.svelte';

	let loading = true;
	let error: AlertError;
	let profile: Profile;
	let content: Content;

	const loadGithubProfile = async (username: string): Promise<Profile> => {
		console.log(`Fetching github profile for ${username}`);
		return dummyProfile;
	};

	const loadBentoContent = async (username: string) => {
		console.log(`Fetching bento content for ${username}`);
		return dummyContent;
	};

	onMount(async () => {
		loading = true;
		const username = $page.params.username;
		const validation = validate(username, UserNameSchema);
		if (!validation.success) {
			const zodErrors = await validation.error.message;
			error = {
				title: 'Invalid username',
				description: JSON.parse(zodErrors).map((error: ZodError) => error.message)
			};
			loading = false;
			return;
		}

		profile = await loadGithubProfile(username);
		content = await loadBentoContent(username);

		loading = false;
	});
</script>

{#if !loading}
	<section class="flex h-screen justify-center">
		{#if error}
			<ErrorAlert {error} />
		{:else if profile && content}
			<BentoGrid className="px-3 py-[12vh]">
				<ProfileCard {profile} showGithubStats={content.config.showGithubStats} />
				{#each content.items as item, i (i)}
					<BentoGridItem {item} />
				{/each}
			</BentoGrid>
		{:else}
			<ErrorAlert error={{ title: 'No such user exists!' }} />
		{/if}
	</section>
{:else}
	<LoadingProfile />
{/if}
