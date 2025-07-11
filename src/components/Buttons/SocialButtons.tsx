import Instagram from 'assets/Socials/instagram.svg';
import Github from 'assets/Socials/github.svg';
import LinkedIn from 'assets/Socials/linkedin.svg';
import url from 'data/links.json';
import ColourEnum from 'types/ColourEnums';
import DimensionalButton from 'components/Buttons/DimensionalButton';

function SocialButtons(): JSX.Element
{
	return <div className='socials flex'>
		<a className='instagram button'
			href={url.instagram}
			target='_blank' rel='noopener noreferrer'
		>
			<DimensionalButton
				width='calc(8rem / 3 - 1px)'
				height='2rem'
				borderRadius='.5rem 0rem 0rem .5rem'
				colour={ColourEnum.purple}
			>
				<img alt='instagram' src={Instagram} width='90%'
					style={{ marginLeft: '.2rem' }}
				/>
			</DimensionalButton>
		</a>
		<a className='github button'
			href={url.github}
			target='_blank' rel='noopener noreferrer'
		>
			<DimensionalButton
				width='calc(8rem / 3 - 2px)'
				height='2rem'
				borderRadius='0rem'
				colour={ColourEnum.light}
			>
				<img alt='github' src={Github} width='93%' />
			</DimensionalButton>
		</a>
		<a className='linkedin button'
			href={url.linkedin}
			target='_blank' rel='noopener noreferrer'
		>
			<DimensionalButton
				width='calc(8rem / 3 - 1px)'
				height='2rem'
				borderRadius='0rem .5rem .5rem 0rem'
				colour={ColourEnum.blue}
			>
				<img alt='linkedin' src={LinkedIn} width='88%'
					style={{ marginRight: '.2rem' }}
				/>
			</DimensionalButton>
		</a>
	</div>;
}

export default SocialButtons;
