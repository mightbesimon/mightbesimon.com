import './ButtonsPage.scss';
import GlassCover from 'components/Buttons/GlassCover';
import DimensionalButton from 'components/Buttons/DimensionalButton';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import { useState } from 'react';

function ButtonsPage(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<SectionWrapper view='ButtonsPage'>
			<div className='flex column'>
				<div>
					<DimensionalButton
						onClick={() => setIsOpen(false)}
					>
						?
					</DimensionalButton>
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
						<DimensionalButton
							onClick={() => setIsOpen(true)}
							width='3.5rem' height='3.2rem'
							borderRadius={{ base: '10%', button: '50%' }}
							font={{ size: '.8rem' }}
						>
							?
						</DimensionalButton>
					</GlassCover>
				</div>
			</div>
		</SectionWrapper >
	);
}

export default ButtonsPage;
