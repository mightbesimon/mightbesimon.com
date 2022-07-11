import './LoadingPage.scss'
import Footer from 'components/Footer/Footer';
import EllipsisLoader from 'components/Loader/EllipsisLoader';

function LoadingPage() {
	return (
		<>
			<section className='LoadingPage flex column'>
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
			</section>
			<Footer />
		</>
	)
}

export default LoadingPage;
