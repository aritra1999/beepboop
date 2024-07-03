<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string | undefined = undefined;
</script>

<div class={cn('mx-auto grid grid-cols-1 gap-3 md:auto-rows-[17rem] md:grid-cols-4', className)}>
	<slot />
</div>
