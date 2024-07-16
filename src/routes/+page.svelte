<script lang="ts">
	import ProfileSearch from '$lib/components/ui/Search/ProfileSearch.svelte';
</script>

<nav class="flex h-20 w-full items-center px-10">
	<a href="/" class="text-3xl font-black">beepboop.</a>
</nav>
<section class="flex h-[calc(100vh-5rem)] items-center justify-center">
	<div class="mb-24">
		<ProfileSearch />
	</div>
</section>
