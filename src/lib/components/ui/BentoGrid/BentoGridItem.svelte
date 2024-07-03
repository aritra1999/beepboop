<script lang="ts">
	import type { BentoItem } from '$lib/types';
	import { cn } from '$lib/utils';

	export let item: BentoItem;
</script>

<div class={cn('group/bento bento-item-base', item.style)}>
	<div class="transition duration-200 group-hover/bento:translate-x-2">
		<div class="font-semibold">
			{item.title}
		</div>
		<div class="text-xs">
			{item.description}
		</div>
	</div>
</div>
