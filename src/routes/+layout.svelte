<script>
	import '../fonts.css';
	import '../app.css';
	import Navbar from '$lib/components/ui/Navbar/navbar.svelte';
</script>

<main class="h-screen w-screen overflow-y-auto">
	<div class="container mx-auto px-10">
		<Navbar />
		<slot />
	</div>
</main>
