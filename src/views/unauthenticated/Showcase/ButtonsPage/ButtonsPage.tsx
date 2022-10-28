import './ButtonsPage.scss';
import CoveredButton from 'components/Buttons/CoveredButton';
import DimensionalButton from 'components/Buttons/DimensionalButton';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';

function ButtonsPage(): JSX.Element {
	return (
		<SectionWrapper view='ButtonsPage'>
			<div>
				<CoveredButton>Don't</CoveredButton>
				<CoveredButton>Don't</CoveredButton>
				<DimensionalButton
					width='3.5rem' height='3.2rem'
					borderRadius={{ base: '10%', button: '50%' }}
					font={{ size: '.8rem' }}
				>
					?
				</DimensionalButton>
				<DimensionalButton>?</DimensionalButton>
			</div>
		</SectionWrapper >
	);
}

export default ButtonsPage;
