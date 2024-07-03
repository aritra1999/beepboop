<script lang="ts">
	import type { Profile } from '$lib/types';

	export let profile: Profile;
</script>

<div class="grid grid-cols-2 grid-rows-2">
	<div class="stat-base">
		<div class="text-xl font-semibold">{profile.public_repos}</div>
		<div class="text-xs">Repos</div>
	</div>
	<div class="stat-base">
		<div class="text-xl font-semibold">{profile.public_gists}</div>
		<div class="text-xs">Gists</div>
	</div>
	<div class="stat-base">
		<div class="text-xl font-semibold">{profile.followers}</div>
		<div class="text-xs">Followers</div>
	</div>
	<div class="stat-base">
		<div class="text-xl font-semibold">{profile.following}</div>
		<div class="text-xs">Following</div>
	</div>
</div>

<style>
	.stat-base {
		@apply flex h-24 flex-col items-center justify-center border-t-2 border-foreground odd:border-r-2;
	}
</style>
