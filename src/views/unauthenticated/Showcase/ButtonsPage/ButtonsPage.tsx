import './ButtonsPage.scss';
import GlassCover from 'components/Buttons/GlassCover';
import DimensionalButton from 'components/Buttons/DimensionalButton';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import { useState } from 'react';
import FloatingButton from 'components/Buttons/FloatingButton';

function ButtonsPage(): JSX.Element
{
	const [isOpen, setIsOpen] = useState(false);

	return (
		<SectionWrapper view='ButtonsPage'>
			<div className='flex column'>
				<div className='flex wrap'>
					<FloatingButton>🛟</FloatingButton>
					<div style={{
						borderRadius: '.5rem',
						padding: '.2rem',
						background: 'var(--orange)',
					}}>
						<DimensionalButton
							width='8.25rem' height='2rem'
							onClick={() => setIsOpen(false)}
						>
							? click me last ?
						</DimensionalButton>
					</div>
				</div>
				<div className='flex wrap'>
					<GlassCover
						topChildren={<span style={{ fontWeight: 'bold' }}>LOCKED</span>}
						locked isOpen={isOpen} setIsOpen={setIsOpen}
					>
						{isOpen ? 'now shut the cover' : `unlock me`}
					</GlassCover>
					<GlassCover topChildren='unlocked'>
						nothing here
					</GlassCover>
					<GlassCover topChildren='⚠️'
						width='6rem' height='6rem'
						borderRadius='30%'
					>
						<div style={{
							width: '3.5rem', height: '3.2rem', borderRadius: '10%',
							padding: '.25rem', background: 'var(--orange)',
						}}>
							<DimensionalButton
								width='3rem' height='2.7rem'
								borderRadius='50%'
								onClick={() => setIsOpen(true)}
							>
								?
							</DimensionalButton>
						</div>
					</GlassCover>
				</div>
			</div>
		</SectionWrapper >
	);
}

export default ButtonsPage;
