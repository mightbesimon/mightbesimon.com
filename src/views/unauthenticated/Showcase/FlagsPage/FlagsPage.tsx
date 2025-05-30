import './FlagsPage.scss';
import { FrenchFlag, GermanFlag, IrishFlag, ItalianFlag, LuxembourgFlag, SwissFlag } from 'components/Flags/Flags';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';

function FlagsPage(): JSX.Element
{
	return (
		<SectionWrapper view='FlagsPage'>
			<div>
				<FrenchFlag />
				<GermanFlag />
			</div>
			<div>
				<IrishFlag />
				<LuxembourgFlag />
				<ItalianFlag />
			</div>
			<div>
				<SwissFlag />
			</div>
		</SectionWrapper>
	);
}

export default FlagsPage;
