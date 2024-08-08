import { z, type ZodSchema } from 'zod';

export const UserNameSchema = z
	.string()
	.min(3, {
		message: 'Username must be at least 3 characters long'
	})
	.max(20, {
		message: 'Username must be at most 20 characters long'
	});

export const GithubProfileSchema = z.object({
	login: UserNameSchema,
	name: z.string(),
	location: z.string(),
	email: z.string().nullable(),
	hireable: z.boolean(),
	bio: z.string(),
	company: z.string(),
	blog: z.string(),
	twitter_username: z.string(),
	public_repos: z.number(),
	public_gists: z.number(),
	followers: z.number(),
	following: z.number(),
	created_at: z.date(),
	updated_at: z.date()
});

export const BaseCardSchema = z.object({
	title: z.string(),
	type: z.string(),
	style: z.string()
});

export const DefaultCardSchema = z.object({
	description: z.string(),
	backgroundImage: z.string().url().nullable(),
	...BaseCardSchema.shape
});
export type DefaultCardType = z.infer<typeof DefaultCardSchema>;

export const LinkCardSchema = z.object({
	...BaseCardSchema.shape,
	link: z.string(),
	backgroundImage: z.string().url().nullable(),
	linkIcon: z.string().nullable()
});
export type LinkCardType = z.infer<typeof LinkCardSchema>;

export const validate = (content: unknown, schema: ZodSchema) => {
	return schema.safeParse(content);
};
