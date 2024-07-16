<script lang="ts">
	import { goto } from '$app/navigation';
	import type { AlertError } from '$lib/types';
	import { validate, UserNameSchema } from '$lib/zod.types';

	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';

	let error: string;

	const searchProfile = async (event) => {
		const formData = new FormData(event.target);
		const username = formData.get('username');
		const validation = validate(username, UserNameSchema);
		if (!validation.success) {
			error = 'invalid username!';
			return;
		}

		if (username) {
			goto(`/${username}`);
		}
	};
</script>

<nav class="flex h-20 w-full items-center px-10">
	<a href="/" class="text-3xl font-black">beepboop.</a>
</nav>
<section class="flex h-[calc(100vh-5rem)] items-center justify-center">
	<div class="mb-24">
		<div class="flex h-16 items-center px-2 text-red-400">
			{#if error}
				{error}
			{/if}
		</div>
		<form class="flex h-20 w-fit rounded-lg bg-muted p-2" on:submit|preventDefault={searchProfile}>
			<Input
				type="text"
				name="username"
				class="mr-2 h-full w-full rounded-md bg-background px-6 md:w-96"
				placeholder="search profile..."
				required
			/>
			<Button class="h-full w-32" type="submit">search</Button>
		</form>
	</div>
</section>
