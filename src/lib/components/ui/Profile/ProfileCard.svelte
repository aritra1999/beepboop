<script lang="ts">
	import type { Profile } from '$lib/types';

	export let profile: Profile;
</script>

<div class="bento-item-base group/bento md:col-span-1 md:row-span-2">
	<div class="flex h-full flex-col justify-between">
		<div class="transition duration-200 group-hover/bento:translate-x-2">
			{profile.name}
		</div>
		<div>Stats</div>
	</div>
</div>
