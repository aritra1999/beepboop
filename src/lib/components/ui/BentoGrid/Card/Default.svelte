<script lang="ts">
	import { cn } from '$lib/utils';
	import type { DefaultCardType } from '$lib/zod.types';

	export let item: DefaultCardType;
</script>

<div
	class={cn(
		'group/bento bento-item-base',
		item.style,
		item.backgroundImage ? 'bg-cover bg-center' : ''
	)}
	style={item.backgroundImage ? `background-image: url("${item.backgroundImage}")` : ''}
>
	<div class="transition duration-200 group-hover/bento:translate-x-2">
		<div class="text-xl font-semibold">
			{item.title}
		</div>
		<div class="text-sm">
			{item.description}
		</div>
	</div>
</div>
