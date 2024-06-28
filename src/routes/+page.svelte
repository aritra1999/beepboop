<script>
	import Home from '$lib/components/ui/Home/Home.svelte';
	import { ClipboardCopy, File, FileSignature, Table } from 'lucide-svelte';

	const items = [
		{
			title: 'The Dawn of Innovation',
			description: 'Explore the birth of groundbreaking ideas and inventions.',
			className: 'col-span-1 row-span-2',
			icon: ClipboardCopy
		},
		{
			title: 'The Digital Revolution',
			description: 'Dive into the transformative power of technology.',
			className: 'md:col-span-1',
			icon: File
		},
		{
			title: 'The Art of Design',
			description: 'Discover the beauty of thoughtful and functional design.',
			className: 'md:col-span-1',
			icon: FileSignature
		},
		{
			title: 'The Power of Communication',
			description: 'Understand the impact of effective communication in our lives.',
			className: 'md:col-span-2',
			icon: Table
		}
	];
</script>

<section class="flex h-screen w-screen items-center justify-center py-20">
	<Home {items} />
</section>
