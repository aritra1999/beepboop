<script lang="ts">
	import { cn } from '$lib/utils';
	import type { LinkCardType } from '$lib/zod.types';

	export let item: LinkCardType;
</script>

<a
	href={item.link}
	class={cn(
		'group/bento bento-item-base',
		item.style,
		item.backgroundImage ? 'bg-cover bg-center' : ''
	)}
	style={item.backgroundImage ? `background-image: url("${item.backgroundImage}")` : ''}
	target="_blank"
>
	<div class="flex h-full items-center justify-center">
		{#if item.linkIcon}
			<div class="h-10 w-10">
				{@html item.linkIcon}
			</div>
		{:else}
			<div class="text-xl font-semibold">
				{item.title}
			</div>
		{/if}
	</div>
</a>
