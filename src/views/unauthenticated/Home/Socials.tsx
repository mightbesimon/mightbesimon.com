import { ReactComponent as Instagram } from 'assets/Contacts/instagram.svg';
import { ReactComponent as Github } from 'assets/Contacts/github.svg';
import { ReactComponent as LinkedIn } from 'assets/Contacts/linkedin.svg';

type SocialType = {
	name: string,
	svg: any,
	url: string,
};

const socials: SocialType[] = [
	{
		name: 'instagram',
		svg: Instagram,
		url: 'https://www.instagram.com/definitely.not_simon',
	},
	{
		name: 'github',
		svg: Github,
		url: 'https://github.com/mightbesimon',
	},
	{
		name: 'LinkedIn',
		svg: LinkedIn,
		url: 'https://www.linkedin.com/in/mightbesimon',
	},
];

export default socials;
