import type { Content, Profile } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	// const username = params.username;
	// const [profile, content] = await Promise.all([
	// 	fetch(`https://api.github.com/users/${username}`).then((r) => r.json()),
	// 	fetch(`https://api.github.com/users/${username}/repos`).then((r) => r.json())
	// ]);

	const profile: Profile = {
		login: 'aritra1999',
		id: 30624056,
		node_id: 'MDQ6VXNlcjMwNjI0MDU2',
		avatar_url: 'https://avatars.githubusercontent.com/u/30624056?v=4',
		gravatar_id: '',
		url: 'https://api.github.com/users/aritra1999',
		html_url: 'https://github.com/aritra1999',
		followers_url: 'https://api.github.com/users/aritra1999/followers',
		following_url: 'https://api.github.com/users/aritra1999/following{/other_user}',
		gists_url: 'https://api.github.com/users/aritra1999/gists{/gist_id}',
		starred_url: 'https://api.github.com/users/aritra1999/starred{/owner}{/repo}',
		subscriptions_url: 'https://api.github.com/users/aritra1999/subscriptions',
		organizations_url: 'https://api.github.com/users/aritra1999/orgs',
		repos_url: 'https://api.github.com/users/aritra1999/repos',
		events_url: 'https://api.github.com/users/aritra1999/events{/privacy}',
		received_events_url: 'https://api.github.com/users/aritra1999/received_events',
		type: 'User',
		site_admin: false,
		name: 'Aritra Mondal',
		location: 'Bonn, Germany ',
		email: null,
		hireable: true,
		bio: 'Engineering at @leanix\r\n\r\n    \r\n Work Github: @aritra2021',
		company: '@leanix',
		blog: 'aritra1999.github.io',
		twitter_username: 'aritramondal199',
		public_repos: 55,
		public_gists: 3,
		followers: 43,
		following: 22,
		created_at: new Date('2017-08-01T11:08:26Z'),
		updated_at: new Date('2024-06-26T15:19:08Z')
	} as Profile;

	const content: Content = {
		config: {
			showGithubStats: true,
			styles: ''
		},
		items: [
			{
				title: 'Hello World',
				description: 'Dive into the transformative power of technology.',
				type: 'card-basic',
				style: 'p-4 md:col-span-1 md:row-span-1'
			},
			{
				title: 'Lorem ipsum',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dignissimos nihil adipisci',
				type: 'card-basic',
				style: 'p-4 md:col-span-2 md:col-row-1'
			},
			{
				title: 'The Power of Communication',
				description: 'Understand the impact of effective communication in our lives.',
				type: 'card-basic',
				style: 'p-4 md:col-span-2 md:row-span-1'
			},
			{
				title: 'Lorem ipsum',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dignissimos nihil adipisci',
				type: 'card-basic',
				style: 'p-4 md:col-span-1 md:row-span-2 '
			},
			{
				title: 'Lorem ipsum',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dignissimos nihil adipisci',
				type: 'card-basic',
				style: 'p-4 md:col-span-1 md:col-row-1'
			},
			{
				title: 'Lorem ipsum',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dignissimos nihil adipisci',
				type: 'card-basic',
				style: 'p-4 md:col-span-1 md:col-row-1'
			},
			{
				title: 'Lorem ipsum',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dignissimos nihil adipisci',
				type: 'card-basic',
				style: 'p-4 md:col-span-1 md:col-row-1'
			},
			{
				title: 'Lorem ipsum',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dignissimos nihil adipisci',
				type: 'card-basic',
				style: 'p-4 md:col-span-1 md:col-row-1'
			},
			{
				title: 'Lorem ipsum',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dignissimos nihil adipisci',
				type: 'card-basic',
				style: 'p-4 md:col-span-1 md:col-row-1'
			}
		]
	};

	return { profile, content };
}) satisfies PageServerLoad;
