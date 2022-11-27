import './FlagsPage.scss';
import { FrenchFlag, GermanFlag, IrishFlag, ItalianFlag, USFlag } from 'components/Flags/Flags';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import getPackageDownloads from 'utils/api/pypi/getPackageDownloads';
import { useQuery } from 'react-query';

function FlagsPage(): JSX.Element
{
	const metaclassesDownloads = useQuery(
		'getPackageDownloads',
		() => getPackageDownloads({ package: 'lifehacks.metaclasses' }),
		{ staleTime: 300000 }
	);

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
			<div>
				{
					metaclassesDownloads.data &&
					'lifehacks.metaclasses: '
					+ metaclassesDownloads.data
						.reduce((sum, data) => sum + data.downloads, 0)
				}
			</div>
		</SectionWrapper>
	);
}

export default FlagsPage;
