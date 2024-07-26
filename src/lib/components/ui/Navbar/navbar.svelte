<script lang="ts">
	import { page } from '$app/stores';

	const showNavbar = (route: string | null) => {
		if (!route) return false;
		if (
			route.startsWith('/docs/components') ||
			route.startsWith('/docs') ||
			route.startsWith('/playground') ||
			route === '/'
		)
			return true;

		return false;
	};
</script>

{#if showNavbar($page.route.id)}
	<nav class="flex h-20 w-full items-center justify-between">
		<div>
			<a href="/" class="text-3xl font-black">beepboop.</a>
		</div>

		<div>
			<a href="/playground" class="mr-4 hover:underline">playground</a>
			<a href="/docs/components" class="mr-4 hover:underline">components</a>
			<a href="/docs" class="hover:underline">docs</a>
		</div>
	</nav>
{/if}
