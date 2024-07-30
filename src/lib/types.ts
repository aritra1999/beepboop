export interface Profile {
	login: string;
	id: number;
	avatar_url: string;
	name: string;
	company: string;
	blog: string;
	location: string;
	email: string | null;
	hireable: boolean;
	bio: string;
	twitter_username: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: Date;
	updated_at: Date;
}

export interface Content {
	config: {
		showGithubStats: boolean;
		styles: string;
	};
	items: unknown[];
}

export interface AlertError {
	title: string;
	description?: string[];
}
