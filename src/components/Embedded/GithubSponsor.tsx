import url from 'data/links.json';

/* issue with white background behind the elements */

export function GithubSponsorButton(): JSX.Element
{
	return <iframe
		src={`${url.sponsor}/button`}
		title='Sponsor mightbesimon'
		height='35' width='116'
		style={{ border: 0 }}
	/>;
}

export function GithubSponsorCard(): JSX.Element
{
	return <iframe
		src={`${url.sponsor}/card`}
		title='Sponsor mightbesimon'
		height='100' width='600'
		style={{ border: 0 }}
	/>;
}
