import './LoadingPage.scss';
import EllipsisSpinner from 'components/Spinner/EllipsisSpinner';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';

function LoadingPage()
{
	return (
		<SectionWrapper view='LoadingPage'>
			<div>
				<div>default</div>
				<EllipsisSpinner />
			</div>
			<div>
				<div>star</div>
				<EllipsisSpinner text='⭐️' />
			</div>
			<div>
				<div>dance</div>
				<EllipsisSpinner text='💃' />
			</div>
			<div>
				<div>denied</div>
				<EllipsisSpinner text='🚫' />
			</div>
			<div>
				<div>construction</div>
				<EllipsisSpinner text='🚧' />
			</div>
			<div>
				<div>worker</div>
				<EllipsisSpinner text='👷‍♂️' />
			</div>
			<div>
				<div>vegetable</div>
				<EllipsisSpinner text='🍆' />
			</div>
		</SectionWrapper>
	);
}

export default LoadingPage;
