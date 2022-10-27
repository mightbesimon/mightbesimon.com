import './ButtonsPage.scss';
import CoveredButton from 'components/Buttons/CoveredButton';
// import DimensionalButton from 'components/Buttons/DimensionalButton';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';

function ButtonsPage(): JSX.Element {
	return (
		<SectionWrapper view='ButtonsPage'>
			<div>
				<CoveredButton>Don't</CoveredButton>
				{/* <DimensionalButton>?</DimensionalButton> */}
			</div>
		</SectionWrapper>
	);
}

export default ButtonsPage;
