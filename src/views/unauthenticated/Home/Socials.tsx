import { ReactComponent as Instagram } from 'assets/Socials/instagram.svg';
import { ReactComponent as Github } from 'assets/Socials/github.svg';
import { ReactComponent as LinkedIn } from 'assets/Socials/linkedin.svg';
import { SvgLinkProps } from 'components/SvgLink';

const socials: SvgLinkProps[] = [
	{
		name: 'instagram',
		svg: Instagram,
		url: 'https://www.instagram.com/definitely.not_simon',
		newTab: true,
	},
	{
		name: 'github',
		svg: Github,
		url: 'https://github.com/mightbesimon',
		newTab: true,
	},
	{
		name: 'LinkedIn',
		svg: LinkedIn,
		url: 'https://www.linkedin.com/in/mightbesimon',
		newTab: true,
	},
];

export default socials;
