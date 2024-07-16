<script lang="ts">
	import { goto } from '$app/navigation';
	import { validate, UserNameSchema } from '$lib/zod.types';

	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';

	let error: string;

	const searchProfile = async (event: SubmitEvent) => {
		const formData = new FormData(event.target as HTMLFormElement);
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
