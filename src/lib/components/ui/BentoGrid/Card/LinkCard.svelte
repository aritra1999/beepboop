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
		item.backgroundImage ? `bg-[url('${item.backgroundImage}')] bg-cover bg-center` : ''
	)}
	target="_blank"
>
	<div class="flex h-full items-center justify-center">
		<div class="font-semibold">
			{#if item.linkIcon}
				{@html item.linkIcon}
			{:else}
				{item.title}
			{/if}
		</div>
	</div>
</a>
