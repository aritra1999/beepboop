<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { AlertError, Content, Profile } from '$lib/types';
	import { UserNameSchema, validate } from '$lib/zod.types';
	import type { ZodError } from 'zod';

	import BentoGrid from '$lib/components/ui/BentoGrid/BentoGrid.svelte';
	import ProfileCard from '$lib/components/ui/Profile/ProfileCard.svelte';
	import ErrorAlert from '$lib/components/ui/ErrorAlert/ErrorAlert.svelte';
	import Default from '$lib/components/ui/BentoGrid/Card/Default.svelte';
	import LoadingProfile from '$lib/components/ui/LoadingProfile/Loading.svelte';
	import { GITHUB_API_BASE_URL, GITHUB_RAW_BASE_URL } from '$lib/constants';

	let loading = true;
	let username: string;
	let error: AlertError;
	let profile: Profile | null;
	let content: Content | null;

	const fetchStuff = async (url: string) => {
		const response = await fetch(url);
		if (!response.ok) return null;
		const data = await response.json();
		return data;
	};

	const loadGithubProfile = async (username: string) => {
		const requestUrl = `${GITHUB_API_BASE_URL}/users/${username}`;
		return await fetchStuff(requestUrl);
	};

	const loadBentoContent = async (username: string) => {
		const requestUrl = `${GITHUB_RAW_BASE_URL}/${username}/beepityboop/main/content.json`;
		return await fetchStuff(requestUrl);
	};

	const loadStuff = async (username: string) => {
		profile = await loadGithubProfile(username);
		if (!profile) {
			error = {
				title: 'User not found',
				description: ['The user you are looking for does not exist.']
			};
			return;
		}

		content = await loadBentoContent(username);
	};

	onMount(async () => {
		loading = true;
		username = $page.params.username;
		const validation = validate(username, UserNameSchema);
		if (!validation.success) {
			error = {
				title: 'Invalid username',
				description: JSON.parse(await validation.error.message).map(
					(error: ZodError) => error.message
				)
			};
			loading = false;
			return;
		}

		await loadStuff(username);
		loading = false;
	});
</script>

{#if !loading}
	{#if error}
		<section class="flex h-screen items-center justify-center">
			<ErrorAlert {error} />
		</section>
	{:else if profile}
		<section class="flex h-screen justify-center">
			<BentoGrid className="px-3 py-[12vh]">
				<ProfileCard {profile} showGithubStats={content?.config.showGithubStats} />
				{#if content}
					{#each content.items as item, i (i)}
						<Default {item} />
					{/each}
				{:else}
					<Default
						item={{
							title: `Could't find the proper config for ${username} :(`,
							description: 'Follow the steps here to create your own beepboop profile!',
							type: 'card-basic',
							style: 'p-4 md:col-span-3 md:row-span-3'
						}}
					/>
				{/if}
			</BentoGrid>
		</section>
	{:else}
		<section class="flex h-screen items-center justify-center">
			<ErrorAlert error={{ title: 'No such user exists!' }} />
		</section>
	{/if}
{:else}
	<LoadingProfile />
{/if}
