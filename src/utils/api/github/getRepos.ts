import api from "../API";

export type RepositoryRequest = {
	owner: string,
}

export type RepositoryResponse = {
	name: string,
	full_name: string,
	html_url: string,
	description: string,
	created_at: Date,
	updated_at: Date,
	pushed_at: Date,
	stargazers_count: number,
	watchers_count: number,
	forks_count: number,
}

async function getRepos(
	{ owner }: RepositoryRequest
): Promise<RepositoryResponse[]> {

	const response = await fetch(
		`${api.github}/users/${owner}/repos`,
		{
			method: "GET",
			headers: {},
		}
	);

	if (response.status !== 200) {
		console.log(response);
		return [];
	}

	return response.json();
}

export default getRepos;
