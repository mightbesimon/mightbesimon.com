import './SectionWrapper.scss'
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import NoughtsCrosses from 'components/NoughtsCrosses/NoughtsCrosses';

type SectionWrapperProps = {
	children: JSX.Element | JSX.Element[],
	view?: string,
	title?: string,
	neon?: boolean,
	game?: boolean,
}

function SectionWrapper({ children, view, title, neon, game }: SectionWrapperProps) {
	return (
		<>
			{title && <Header title={title} neon={neon} />}
			<section className={view ? `${view} flex column` : 'flex column'}>
				{children}
			</section>
			{game && <NoughtsCrosses />}
			<Footer />
		</>
	)
}

export default SectionWrapper;
