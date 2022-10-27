import './FlagsPage.scss'
import { FrenchFlag, GermanFlag, IrishFlag, ItalianFlag, USFlag } from 'components/Flags/Flags';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';

function FlagsPage(): JSX.Element {
	return (
		<SectionWrapper view='FlagsPage'>
			<div>
				<GermanFlag />
				<FrenchFlag />
			</div>
			<div>
				<ItalianFlag />
				<IrishFlag />
			</div>
			<div>
				<USFlag />
			</div>
		</SectionWrapper>
	);
}

export default FlagsPage;
