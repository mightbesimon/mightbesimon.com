import './LoadingPage.scss'
import EllipsisLoader from 'components/Loader/EllipsisLoader';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';

function LoadingPage() {
	return (
		<SectionWrapper view='LoadingPage'>
			<div>
				<div>default</div>
				<EllipsisLoader />
			</div>
			<div>
				<div>star</div>
				<EllipsisLoader text='⭐️' />
			</div>
			<div>
				<div>dance</div>
				<EllipsisLoader text='💃' />
			</div>
			<div>
				<div>denied</div>
				<EllipsisLoader text='🚫' />
			</div>
			<div>
				<div>construction</div>
				<EllipsisLoader text='🚧' />
			</div>
			<div>
				<div>worker</div>
				<EllipsisLoader text='👷‍♂️' />
			</div>
			<div>
				<div>vegetable</div>
				<EllipsisLoader text='🍆' />
			</div>
		</SectionWrapper>
	)
}

export default LoadingPage;
