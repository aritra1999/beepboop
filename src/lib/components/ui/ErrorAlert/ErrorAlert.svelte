<script lang="ts">
	import { CircleAlert } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';
	import type { AlertError } from '$lib/types';

	export let error: AlertError;
</script>

<div class="w-96">
	<Alert.Root variant="destructive">
		<CircleAlert class="h-4 w-4" />
		<Alert.Title>{error.title}</Alert.Title>
		{#each error.description as description}
			<Alert.Description>{description}</Alert.Description>
		{/each}
	</Alert.Root>
</div>
