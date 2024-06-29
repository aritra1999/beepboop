<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string | undefined = undefined;
</script>

<div
	class={cn(
		'mx-auto grid max-w-7xl grid-cols-1 gap-3 md:auto-rows-[18rem] md:grid-cols-4',
		className
	)}
>
	<slot />
</div>
