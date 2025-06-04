/* does not work */

export function LinkedInBadgeScript(): JSX.Element
{
	return <script
		type='text/javascript'
		src='https://platform.linkedin.com/badges/js/profile.js'
		async
		defer
	/>;
}

export function LinkedInBadgeSmall(): JSX.Element
{
	return <div
		className='badge-base LI-profile-badge'
		data-locale='en_US'
		data-size='medium'
		data-theme='light'
		data-type='vertical'
		data-vanity='mightbesimon'
		data-version='v1'>
		<a
			className='badge-base__link LI-simple-link'
			href='https://linkedin.com/in/mightbesimon?trk=profile-badge'>
			Simon Shan
		</a>
	</div>;
}

export function LinkedInBadgeLarge(): JSX.Element
{
	return <div
		className='badge-base LI-profile-badge'
		data-locale='en_US'
		data-size='large'
		data-theme='light'
		data-type='horizontal'
		data-vanity='mightbesimon'
		data-version='v1'>
		<script src='https://platform.linkedin.com/badges/js/profile.js' type='text/javascript' async defer ></script>
		<a
			className='badge-base__link LI-simple-link'
			href='https://linkedin.com/in/mightbesimon?trk=profile-badge'>
			Simon Shan
		</a>
	</div>;
}
