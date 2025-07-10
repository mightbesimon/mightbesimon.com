import './ButtonsPage.scss';
import GlassCover from 'components/Buttons/GlassCover';
import DimensionalButton from 'components/Buttons/DimensionalButton';
import FloatingButton from 'components/Buttons/FloatingButton';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import ColourEnum from 'types/ColourEnums';
import { useState } from 'react';

function ButtonsPage(): JSX.Element
{
	const [noOutline, setNoOutline] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<SectionWrapper view='ButtonsPage'>
			<div className='flex column'>
				<div className='flex wrap'>
					<div className='flex' style={{
						borderRadius: '.5rem', padding: '.3rem',
						background: 'var(--purple)',
						outline: 'var(--outline)',
					}}>
						<DimensionalButton
							onClick={() => setNoOutline(false)}
							isPressed={!noOutline}
							colour={ColourEnum.mint}
						>
							outlined
						</DimensionalButton>
						<DimensionalButton
							onClick={() =>
							{
								setNoOutline(true);
								console.log('noOutline = true');
							}}
							isPressed={noOutline}
							colour={ColourEnum.orange}
						>
							plain
						</DimensionalButton>
					</div>
				</div>
				<div className='flex wrap'>
					<GlassCover
						topChildren={<span style={{ fontWeight: 'bold' }}>LOCKED</span>}
						locked isOpen={isOpen} setIsOpen={setIsOpen}
						plain={noOutline}
					>
						{isOpen ? 'now shut the cover' : `unlock me`}
					</GlassCover>
					<GlassCover topChildren='unlocked' plain={noOutline}>
						nothing here
					</GlassCover>
					<GlassCover topChildren='⚠️'
						width='6rem' height='6rem'
						borderRadius='30%'
						plain={noOutline}
					>
						<div style={{
							width: '3.5rem', height: '3.2rem', borderRadius: '10%',
							padding: '.25rem', background: 'var(--orange)',
							outline: noOutline ? 'none' : 'var(--outline)',
						}}>
							<DimensionalButton
								width='3rem' height='2.7rem'
								borderRadius='50%'
								onClick={() => setIsOpen(true)}
								plain={noOutline}
							>
								?
							</DimensionalButton>
						</div>
					</GlassCover>
				</div>
				<div className='flex wrap'>
					<FloatingButton plain={noOutline}>🛟</FloatingButton>
					<div style={{
						borderRadius: '.5rem',
						padding: '.35rem',
						background: 'var(--coral)',
						outline: noOutline ? 'none' : 'var(--outline)',
					}}>
						<DimensionalButton
							width='8.25rem' height='2rem'
							onClick={() => setIsOpen(false)}
							colour={ColourEnum.teal}
							plain={noOutline}
						>
							click me last
						</DimensionalButton>
					</div>
				</div>
			</div>
		</SectionWrapper >
	);
}

export default ButtonsPage;
