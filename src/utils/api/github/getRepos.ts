import api from 'data/api.json';

export type RepositoryRequest = {
	owner: string,
};

export type RepositoryResponse = {
	name: string,
	full_name: string,
	html_url: string,
	description: string,
	created_at: Date,
	updated_at: Date,
	pushed_at: Date,
	stargazers_count: number,
	forks_count: number,
};

async function getRepos(
	{ owner }: RepositoryRequest
): Promise<RepositoryResponse[] | undefined>
{
	const response = await fetch(
		`${api.github}/users/${owner}/repos`,
		{
			method: 'GET',
		}
	);

	// console.log(
	// 	'github ratelimit remaning',
	// 	response.headers.get('x-ratelimit-remaining'),
	// );

	if (response.status !== 200)
	{
		console.log(response);
		return;
	}

	return await response.json();
}

export default getRepos;
