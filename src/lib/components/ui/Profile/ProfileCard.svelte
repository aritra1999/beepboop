<script lang="ts">
	import type { Profile } from '$lib/types';
	import { MapPin, BriefcaseBusiness, BookText, Twitter } from 'lucide-svelte';
	import GitStats from '$lib/components/ui/Profile/GitStats.svelte';

	export let profile: Profile;
	export let showGithubStats: boolean = true;
</script>

<div class="bento-item-base group/bento md:col-span-1 md:row-span-3">
	<div class="flex h-full flex-col justify-between">
		<div>
			<div>
				<img src={profile.avatar_url} alt="" class="aspect-square w-full" />
			</div>
			<div class="p-4">
				<a
					href="https://github.com/{profile.login}"
					target="_blank"
					class="text-xs text-muted-foreground">@{profile.login}</a
				>
				<h2 class="mb-2 text-xl font-semibold">{profile.name}</h2>
				{#if profile.bio}
					<p class="mb-3 truncate text-sm">
						{profile.bio}
					</p>
				{/if}
				<div class="flex flex-col gap-1">
					{#if profile.location}
						<div class="flex text-sm">
							<MapPin class="mr-2 h-4 w-4" />
							{profile.location}
						</div>
					{/if}
					{#if profile.company}
						<div class="flex text-sm">
							<BriefcaseBusiness class="mr-2 h-4 w-4" />
							<a href="https://github.com/{profile.company.slice(1)}" target="_blank">
								{profile.company}
							</a>
						</div>
					{/if}
					{#if profile.blog}
						<div class="flex text-sm">
							<BookText class="mr-2 h-4 w-4" />
							<a href="https://{profile.blog}" target="_blank">
								{profile.blog}
							</a>
						</div>
					{/if}
					{#if profile.twitter_username}
						<div class="flex text-sm">
							<Twitter class="mr-2 h-4 w-4" />
							<a href="https://twitter.com/{profile.twitter_username}" target="_blank">
								{profile.twitter_username}
							</a>
						</div>
					{/if}
				</div>
			</div>
		</div>
		{#if showGithubStats}
			<GitStats {profile} />
		{/if}
	</div>
</div>

<style>
	.truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
